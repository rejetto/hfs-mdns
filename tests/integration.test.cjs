const test = require('node:test')
const assert = require('node:assert/strict')
const { spawn, spawnSync } = require('node:child_process')
const { once } = require('node:events')
const { mkdtemp, mkdir, writeFile, cp, rm } = require('node:fs/promises')
const { tmpdir, networkInterfaces } = require('node:os')
const { resolve, join, basename } = require('node:path')
const { setTimeout: delay } = require('node:timers/promises')
const { createSocket } = require('node:dgram')
const mdns = require('node:path').basename(resolve(__dirname, '..')).endsWith('-mdns')
test('real HFS advertises, refreshes config, withdraws and restarts with core discovery off', { timeout: 30000 }, async t => {
    const lan = Object.entries(networkInterfaces()).find(([name, nets]) => !/utun|vnic|docker|lo|bridge/i.test(name) && nets.some(x => !x.internal && x.family === 'IPv4'))
    if (!lan) return t.skip('No IPv4 LAN interface')
    if (mdns && spawnSync('dns-sd', ['-h']).error) return t.skip('Native dns-sd client required for the mDNS integration test')
    const ip = lan[1].find(x => !x.internal && x.family === 'IPv4').address
    const cwd = await mkdtemp(join(tmpdir(), 'hfs-discovery-plugin-'))
    await mkdir(join(cwd, 'plugins'))
    // isolate plugin storage from the development server's installed copy
    await cp(resolve(__dirname, '../dist'), join(cwd, 'plugins/probe'), { recursive: true, filter: source => basename(source) !== 'storage' })
    await writeFile(join(cwd, 'config.yaml'), JSON.stringify({ port: 0, https_port: -1, force_https: false,
        discovery_mdns: false, discovery_ssdp: false, enable_plugins: [], title: 'Probe Ω & files',
        open_browser_at_start: false, log: '', error_log: '', plugins_config: { probe: { interfaces: ip } } }))
    const hfs = process.env.HFS_PATH || resolve(__dirname, '../../../hfs')
    const child = spawn(process.env.HFS_BINARY || process.execPath, [...(process.env.HFS_BINARY ? [] : [join(hfs, 'dist/src/index.js')]), '--cwd', cwd, '--no-central'])
    const exited = once(child, 'exit')
    let output = ''
    t.after(() => { if (!t.passed) t.diagnostic(output) })
    child.stdout.on('data', x => output += x)
    child.stderr.on('data', x => output += x)
    t.after(async () => { child.kill(); await exited; await rm(cwd, { recursive: true, force: true, maxRetries: 5 }) })
    for (let i=0; i<100 && !/Serving on http:/.test(output); i++) { assert.equal(child.exitCode, null, output); await delay(100) }
    const port = /Serving on http:\/\/[^\n]*?:(\d+)/.exec(output)?.[1]
    assert.ok(port, output)
    const base = 'http://127.0.0.1:' + port
    async function api(name, body) {
        const res = await fetch(base + '/~/api/' + name, { method: 'POST', headers: { 'content-type': 'application/json', 'x-hfs-anti-csrf': '1' }, body: JSON.stringify(body), signal: AbortSignal.timeout(10000) })
        assert.equal(res.status, 200, await res.text() + output)
    }
    for (let i=0; i<50; i++) {
        const data = await fetch(base + '/~/api/get_plugins').then(r => r.json())
        if (data.list.some(x => x.id === 'probe')) break
        await delay(100)
    }
    const socket = createSocket({ type: 'udp4', reuseAddr: true })
    await new Promise(resolve => socket.bind(mdns ? 5353 : 0, resolve))
    socket.setMulticastInterface(ip)
    socket.setMulticastTTL(255)
    if (mdns) socket.addMembership('224.0.0.251', ip)
    t.after(() => socket.close())
    const packets = []
    socket.on('message', (buf, remote) => packets.push({ buf, remote }))
    let browseOutput = ''
    if (mdns) {
        const browser = spawn('dns-sd', ['-B', '_http._tcp', 'local'])
        browser.stdout.on('data', data => browseOutput += data)
        browser.stderr.on('data', data => browseOutput += data)
        const browserExited = once(browser, 'exit')
        t.after(async () => { browser.kill(); await browserExited })
    }
    async function discover(name, goodbye = false) {
        const matches = packet => {
            if (!mdns) return packet.buf.toString().includes('HTTP/1.1 200 OK') && packet.buf.toString().includes('/~/plugins/probe/description.xml')
            return false
        }
        for (let i=0; i<70; i++) {
            if (mdns && browseOutput.split('\n').some(line => line.includes(name) && new RegExp('\\b' + (goodbye ? 'Rmv' : 'Add') + '\\b').test(line))) return
            const packet = packets.find(matches)
            if (packet) return packet
            if (!mdns && !goodbye && i % 10 === 0) {
                const request = Buffer.from('M-SEARCH * HTTP/1.1\r\nHOST: 239.255.255.250:1900\r\nMAN: "ssdp:discover"\r\nMX: 1\r\nST: upnp:rootdevice\r\n\r\n')
                socket.send(request, mdns ? 5353 : 1900, mdns ? '224.0.0.251' : '239.255.255.250')
            }
            await delay(100)
        }
        assert.fail('No matching discovery response: ' + output)
    }
    await api('start_plugin', { id: 'probe' })
    await discover('Probe Ω & files')
    const route = 'http://' + ip + ':' + port + '/%7E/plugins/probe/description.xml'
    let uuid
    if (!mdns) {
        const res = await fetch(route)
        assert.equal(res.status, 200)
        const xml = await res.text()
        assert.match(xml, /Probe Ω &amp; files/)
        assert.match(xml, new RegExp('<presentationURL>http://' + ip + ':' + port + '/</presentationURL>'))
        uuid = /<UDN>([^<]+)/.exec(xml)[1]
        assert.equal((await fetch(route, { method: 'HEAD' })).status, 200)
        assert.equal((await fetch(route, { method: 'POST' })).status, 405)
    }
    packets.length = 0
    browseOutput = ''
    await api('set_plugin', { id: 'probe', config: { name: 'Renamed Ω' } })
    await delay(300)
    if (mdns) await discover('Renamed Ω')
    else assert.match(await fetch(route).then(r => r.text()), /Renamed Ω/)
    packets.length = 0
    browseOutput = ''
    await api('stop_plugin', { id: 'probe' })
    if (mdns) await discover('Renamed Ω', true)
    else assert.equal((await fetch(route)).status, 404)
    packets.length = 0
    browseOutput = ''
    await api('start_plugin', { id: 'probe' })
    await discover('Renamed Ω')
    if (!mdns) assert.ok((await fetch(route).then(r => r.text())).includes(uuid))
    const status = await fetch(base + '/~/api/get_status').then(r => r.json())
    assert.equal((status.lanDiscovery?.enabled ?? false), false)
    assert.equal((status.lanDiscoverySsdp?.enabled ?? false), false)
    await api('stop_plugin', { id: 'probe' })
    assert.doesNotMatch(output, /Plugin error: probe:/)
})
