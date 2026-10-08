# Cloudflare deploy — DOVY: DEADZONE

## Phone / GitHub Codespaces

Run:

```bash
npm run phone:deploy
```

The phone deploy script uses Wrangler device login, automatically provisions the D1 binding on first deploy, applies D1 migrations, asks for `ADMIN_PASSWORD`, and deploys again.

## Manual deploy

```bash
npm install
npx wrangler login --device
npx wrangler deploy
npx wrangler d1 migrations apply DB --remote
npx wrangler secret put ADMIN_PASSWORD
npx wrangler deploy
```

Game: `https://YOUR-WORKER.workers.dev/`

Admin: `https://YOUR-WORKER.workers.dev/admin`

Health: `https://YOUR-WORKER.workers.dev/api/health`
