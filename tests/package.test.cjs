const test = require('node:test')
const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const { resolve } = require('node:path')

test('HFS entry exports static metadata without loading runtime dependencies', () => {
    const source = readFileSync(resolve(__dirname, '../dist/plugin.js'), 'utf8')
    assert.match(source, /^exports\.description = "/)
    for (const field of ['description', 'version', 'apiRequired', 'versionRequired', 'repo'])
        assert.ok(source.includes('exports.' + field + ' = '), field)
    const plugin = {}
    new Function('exports', 'require', source)(plugin, () => {
        assert.fail('runtime dependencies must be loaded inside init')
    })
    assert.equal(typeof plugin.init, 'function')
    assert.equal(plugin.apiRequired, 13.4)
    assert.equal(plugin.versionRequired, '3.3.0')
    assert.equal(plugin.repo, 'rejetto/hfs-mdns')
    assert.equal(JSON.parse(/exports.versionRequired\s*=\s*("[^"]+")/.exec(source)[1]), '3.3.0')
    assert.deepEqual(Object.keys(plugin.config), ['name', 'interfaces'])
})
