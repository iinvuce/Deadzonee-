# DOVY: DEADZONE — Cloudflare Edition

This package converts the existing **0.5.10 HARROW CUT INVENTORY FIX** build to a Cloudflare-native backend without rewriting the gameplay client.

## Architecture

- **Cloudflare Worker** — API, auth, admin routes and static-asset entry point.
- **Cloudflare D1** — accounts, sessions, profiles, events, purchases and admin sessions.
- **Durable Object (`CoopHub`)** — authenticated WebSocket squad/raid coordinator with 2–4 player rooms and reconnect grace.
- **Workers Static Assets** — game HTML/JS/CSS/images/PWA files.
- **Original Node server** — retained under `legacy-node/` as a reference/fallback.

The browser still uses the same endpoints (`/api/*` and `/ws`), so the gameplay code remains essentially unchanged.

## Important

`wrangler.toml` contains:

```toml
database_id = "REPLACE_WITH_D1_DATABASE_ID"
```

Create the D1 database and put the returned database ID there before the first remote migration/deploy.

See `CLOUDFLARE_DEPLOY.md` for the exact deployment sequence.
