#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "=========================================="
echo " DOVY: DEADZONE — PHONE/CODESPACES DEPLOY"
echo "=========================================="
echo

echo "[1/5] Installing Wrangler..."
npm install

echo
echo "[2/5] Sign in to Cloudflare."
echo "Wrangler will show a device URL/code. Open it on your phone and approve it."
npx wrangler login --device

echo
echo "[3/5] First deploy — Cloudflare will auto-provision D1 and the Durable Object binding."
npx wrangler deploy

echo
echo "[4/5] Applying DEADZONE database schema..."
npx wrangler d1 migrations apply DB --remote

echo
echo "Choose an admin password for /admin. It will NOT be written to this repo."
read -r -s -p "ADMIN_PASSWORD: " ADMIN_PASSWORD
echo
if [ -z "$ADMIN_PASSWORD" ]; then
  echo "Admin password cannot be empty. Run npm run phone:deploy again."
  exit 1
fi
printf '%s' "$ADMIN_PASSWORD" | npx wrangler secret put ADMIN_PASSWORD
unset ADMIN_PASSWORD

echo
echo "[5/5] Final deploy..."
npx wrangler deploy

echo
echo "DONE."
echo "The final Wrangler output above contains your workers.dev URL."
echo "Open that URL for the game, /admin for admin, and /api/health for health."
