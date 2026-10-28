exports.description = "Bonjour/mDNS discovery for HTTP and WebDAV clients";
exports.version = 1;
exports.apiRequired = 13.4;
exports.versionRequired = "3.3.0";
exports.repo = "rejetto/hfs-mdns";
exports.config = {
    name: { label: "Discovery name", helperText: "Empty uses the HFS title." },
    interfaces: { label: "Network interfaces", helperText: "Comma-separated interface names or IP addresses. Empty selects LAN adapters automatically, excluding VPN and virtual adapters." },
};
exports.init = async (api) => {
    const servers = new Set();
    let closed = false;
    const unsuitable = /^(lo\d*|loopback.*|docker.*|bridge.*|br-.*|veth.*|virbr.*|vbox.*|vmnet.*|vnic.*|utun.*|tun\d*|tap\d*|wg\d*|tailscale.*|zt.*|awdl.*|llw.*|anpi.*)$|vpn|virtual|hyper-v|wsl|hamachi|zerotier/i;
    const { networkInterfaces, hostname } = require('node:os');
    const { debounceAsync } = api.misc;
    let registrations = [];
    let error = '';
    let responder;
    let services = [];
    let currentPlan = '';
    const refresh = debounceAsync(async () => {
        try {
            const plan = [];
            const interfaces = networkInterfaces();
            const interfaceNames = new Set();
            if (!closed) {
                // ciao treats dots as label separators instead of literal service-name characters
                let name = getDiscoveryName().replaceAll('.', '-');
                // shortcut: reserve eight bytes for ciao's collision suffix until it handles the 63-byte label limit
                while (Buffer.byteLength(name) > 55)
                    name = Array.from(name).slice(0, -1).join('');
                for (const listener of getListeningServices()) {
                    const addresses = discoveryAddresses(listener.host, interfaces);
                    if (!addresses.length)
                        continue;
                    for (const address of addresses)
                        interfaceNames.add(address.name);
                    for (const type of [listener.protocol, listener.protocol === 'https' ? 'webdavs' : 'webdav']) {
                        // ciao treats shared hostnames as local conflicts, even across different service types
                        const host = hostname().replace(/\..*/, '').replace(/[^a-z0-9-]/gi, '-').slice(0, 35);
                        plan.push({ name, type, port: listener.port, hostname: `hfs-${type}-${listener.port}-${host}`, txt: { path: '/' },
                            restrictedAddresses: addresses.map(x => x.address) });
                    }
                }
            }
            const nextPlan = JSON.stringify({ interfaces: [...interfaceNames], services: plan });
            if (nextPlan === currentPlan && !error)
                return;
            // serialize goodbye and registration so rapid config changes cannot leave stale advertisements
            await stop();
            currentPlan = nextPlan;
            if (!closed)
                api.log(plan.length ? 'Announcing ' + plan.map(x => x.name + ': _' + x.type + '._tcp (' + x.port + ')').join(', ') : 'No suitable LAN interface or listening server');
            error = !closed && !plan.length ? "No suitable LAN interface or listening server" : '';
            api.setError(error);
            if (!plan.length || closed)
                return;
            const { getResponder } = require('./mdns');
            const owner = registrations;
            responder = getResponder({ interface: [...interfaceNames], advertiseIpv6: true }, e => {
                if (registrations === owner)
                    reportError(e);
            });
            for (const options of plan) {
                const service = responder.createService(options);
                services.push(service);
                const registration = { name: options.name, type: options.type, port: options.port, active: false };
                registrations.push(registration);
                service.on('name-change', name => { registration.name = name; });
                void service.advertise().then(() => {
                    if (registrations === owner)
                        registration.active = true;
                }, e => {
                    // cancelled probes from an older configuration must not overwrite the new status
                    if (registrations === owner) {
                        reportError(e);
                        currentPlan = '';
                    }
                });
            }
        }
        catch (e) {
            reportError(e);
            await stop();
            currentPlan = '';
        }
    }, { wait: 100 });
    function reportError(e) {
        error = String(e);
        api.setError(error);
        api.log(error);
    }
    async function stop() {
        const old = responder;
        responder = undefined;
        registrations = [];
        // destroy also cancels services still waiting for their turn to probe
        const results = await Promise.allSettled(services.map(service => service.destroy()));
        services = [];
        for (const result of results)
            if (result.status === 'rejected')
                reportError(result.reason);
        await old?.shutdown().catch(reportError);
    }
    await api.onServer(server => {
        if (servers.has(server))
            return;
        servers.add(server);
        server.on('close', onClose);
        void refresh();
        return () => { server.removeListener('close', onClose); servers.delete(server); };
        function onClose() { servers.delete(server); void refresh(); }
    });
    api.events.on('config.title', refresh);
    api.subscribeConfig(['name', 'interfaces'], refresh);
    api.setInterval(refresh, 30_000);
    await refresh();
    return async () => {
        closed = true;
        await refresh();
        await stop();
    };
    function getListeningServices() {
        return [...servers].flatMap(server => {
            const address = server.listening && server.address();
            return address && typeof address !== 'string'
                ? [{ protocol: server.name, host: address.address, port: address.port }] : [];
        });
    }
    function getDiscoveryName() {
        const name = api.getConfig('name')?.trim() || api.getHfsConfig('title').trim() || hostname();
        // display names must not contain DNS-SD controls or characters forbidden in XML 1.0
        return name.normalize('NFC').replace(/[\x00-\x1f\x7f-\x9f\ufffe\uffff]/g, ' ').trim() || hostname();
    }
    // exact addresses keep a listener bound to one IP from advertising other addresses on the same interface
    function discoveryAddresses(host, interfaces = networkInterfaces()) {
        const selected = api.getConfig('interfaces')?.split(',').map(x => x.trim()).filter(Boolean) ?? [];
        // bound link-local IPv6 addresses include a zone identifying the reachable adapter
        const [address, scope] = host.split('%');
        return Object.entries(interfaces).flatMap(([name, nets]) => {
            const explicit = selected.includes(name);
            return (nets || []).filter(net => !net.internal
                && (selected.length ? explicit || selected.includes(net.address) : !unsuitable.test(name))
                && (!scope || scope === name || Number(scope) === net.scopeid)
                && (address === '::' || address === '0.0.0.0' && net.family === 'IPv4' || address === net.address))
                .map(net => ({ name, address: net.address }));
        });
    }
};
