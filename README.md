# mDNS for HFS

Announce HFS on your local network using Bonjour/mDNS, so compatible clients can discover HTTP, HTTPS, WebDAV and secure WebDAV without entering an address manually.

Requires **HFS 3.3.0 or later**. Tested with the official HFS 3.3.0 macOS ARM64 executable and the HFS 3.5 development build.

## Installation

In HFS Admin, open **Plugins → Get more**, search for **mdns**, install it, then enable it in the installed plugins list. To configure it, click the **Options button on the mdns plugin's row**.

## Options

- **Discovery name**: empty uses the HFS title, then the machine hostname. Unicode is supported; dots are replaced and long names are shortened to fit DNS labels.
- **Network interfaces**: comma-separated interface names or individual local IP addresses. Empty selects LAN adapters automatically, excluding VPN and virtual adapters. Explicit selection can include those adapters. A listener bound to one IP only advertises that IP.

The plugin follows listener, title and option changes without restarting HFS. Adapter selection is refreshed every 30 seconds. Disabling the plugin withdraws its announcements and closes its sockets. Errors appear in its HFS plugin status/log.

## Client support and limits

A client must support DNS-SD service browsing. Linux GVfs supports WebDAV discovery when its DNS-SD backend is installed. Bonjour/mDNS support in an operating system alone does not guarantee an HFS entry in Finder, a browser or Windows Explorer.

Discovery works on a reachable multicast LAN. It does not configure router forwarding, bypass file permissions, or help Internet visitors find HFS. Advertisements include the server's name, address and port. The plugin announces HFS's own listeners, rather than a reverse proxy's external URL.

If using an experimental HFS build with built-in mDNS discovery, disable that option while this plugin is enabled to avoid duplicate announcements.

## Development

Edit JavaScript directly in `dist/plugin.js`; no compilation or npm installation is needed. The pinned ciao 1.3.12 dependency and its macOS scoped-IPv6/bind-error adapter are included in `dist/mdns.js`.

```sh
ln -s /path/to/hfs-mdns/dist ~/.hfs/plugins/mdns
# use a built HFS checkout, or set HFS_BINARY to a released HFS executable
HFS_PATH=/path/to/hfs node --test tests/*.test.cjs
HFS_BINARY=/path/to/hfs-executable node --test tests/*.test.cjs
```

Tests cover absent configuration, Unicode names, interface selection, listener changes, metadata, actual discovery, name changes, withdrawal and restart. The integration test needs an IPv4 LAN interface, multicast and the native `dns-sd` command; it is skipped if the interface or command is missing.

## License

MIT — Copyright (c) 2026 Massimo Melina. Third-party licenses are included in `dist/THIRD-PARTY-LICENSES.txt`.
