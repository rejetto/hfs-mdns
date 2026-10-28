const test = require('node:test')
const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const { resolve } = require('node:path')
const { EventEmitter } = require('node:events')

test('plugin reads config, filters interfaces and tracks listener changes', async () => {
    const mdns = require('node:path').basename(resolve(__dirname, '..')).endsWith('-mdns')
    const plugin = {}
    const values = {}
    const errors = [], cleanups = [], subscriptions = new Map()
    const server = new EventEmitter()
    let host = '0.0.0.0', advertised = []
    Object.assign(server, { name: 'http', listening: true, address: () => ({ address: host, port: 1234 }) })
    const net = address => ({ address, internal: false, family: 'IPv4' })
    const interfaces = { en0: [net('192.168.1.2'), net('192.168.1.3')], utun0: [net('10.0.0.1')] }
    const createResponder = () => {
        advertised = []
        return {
            createService(options) {
                advertised.push(options)
                return Object.assign(new EventEmitter(), { advertise: async () => {}, destroy: async () => {} })
            },
            shutdown: async () => {},
        }
    }
    class Advertiser {
        constructor(_uuid, plan) { advertised = plan; this.ready = Promise.resolve() }
        async stop() {}
    }
    const source = readFileSync(resolve(__dirname, '../dist/plugin.js'), 'utf8')
    new Function('exports', 'require', source)(plugin, name => {
        if (name === 'node:os') return { ...require(name), networkInterfaces: () => interfaces }
        if (name === './mdns') return { getResponder: createResponder }
        if (name === './ssdp') return { SsdpAdvertiser: Advertiser, SSDP_DEVICE_TYPE: 'urn:schemas-upnp-org:device:Basic:1' }
        return require(name)
    })
    const records = new Map()
    const unload = await plugin.init({
        id: 'probe', Const: { VERSION: '3.5.0-alpha1', PLUGINS_PUB_URI: '/~/plugins/' },
        getConfig: key => values[key], getHfsConfig: () => 'Cafe\u0301 家 📁 & files',
        async onServer(cb) { cleanups.push(cb(server)); cb(server) },
        events: { on: (event, cb) => subscriptions.set(event, cb) },
        subscribeConfig: (_keys, cb) => subscriptions.set('config', cb),
        setInterval: (_cb, ms) => assert.equal(ms, 30000),
        setError: value => errors.push(value), log() {},
        registerPublicRoute() {},
        openDb: async () => ({ get: async key => records.get(key), put: async (key, value) => records.set(key, value) }),
        _: { escape: value => value },
        misc: {
            // queue real refresh callbacks without network sockets or debounce timers in this unit test
            debounceAsync(callback) { let pending = Promise.resolve(); return () => pending = pending.then(callback) },
            makeNetMatcher: () => () => true,
        },
    })
    const refresh = subscriptions.get('config')
    const addresses = () => mdns ? advertised[0].restrictedAddresses : advertised.map(x => x.address)
    assert.equal(advertised[0].name, 'Café 家 📁 & files')
    assert.deepEqual(addresses(), ['192.168.1.2', '192.168.1.3'])
    assert.equal(server.listenerCount('close'), 1)
    values.interfaces = 'utun0, 192.168.1.3'
    values.name = 'Specific\u0000name'
    await refresh()
    assert.deepEqual(addresses(), ['192.168.1.3', '10.0.0.1'])
    assert.equal(advertised[0].name, 'Specific name')
    host = '192.168.1.3'
    await refresh()
    assert.deepEqual(addresses(), ['192.168.1.3'])
    assert.ok(subscriptions.has('config.title'))
    assert.ok(errors.every(value => !value))
    server.listening = false
    server.emit('close')
    await refresh()
    assert.match(errors.at(-1), /listener|listening server/)
    for (const off of cleanups) off()
    await unload()
    assert.equal(server.listenerCount('close'), 0)
})
