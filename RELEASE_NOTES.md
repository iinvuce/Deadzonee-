# DOVY: DEADZONE 0.5.10-cloudflare.1

Cloudflare deployment conversion based directly on the 0.5.10 HARROW CUT INVENTORY FIX build.

- Preserved the existing game client and UI/gameplay systems.
- Added Cloudflare Worker API/auth/admin implementation.
- Replaced server-side SQLite file persistence with Cloudflare D1.
- Added Durable Object WebSocket co-op coordinator.
- Preserved squad create/join/ready/deploy, raid input relay, host snapshots, raid result relay and 15-second reconnect grace.
- Added Workers Static Assets configuration for the complete game/PWA.
- Updated frontend health detection to accept D1.
- Added Cloudflare deployment instructions and D1 migration.
- Retained the original Node server under `legacy-node/`.

This release is a hosting/backend adaptation, not a gameplay rewrite.
