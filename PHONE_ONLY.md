# DOVY: DEADZONE — iPhone-only Cloudflare deploy

This package is prepared for deployment from **GitHub Codespaces in Safari**, so you do not need a Mac/PC or the ChatGPT GitHub connector.

## 1. Create a GitHub repo from your phone

In Safari, open GitHub and create a new **private** repository named `dovy-deadzone`.

## 2. Create a Codespace

Open the repository → **Code** → **Codespaces** → **Create codespace on main**.

When the Codespace opens, use the Files/Explorer upload option to upload this ZIP, then run:

```bash
unzip DOVY_DEADZONE_0.5.10_CLOUDFLARE_PHONE.zip -d deadzone
cd deadzone
npm run phone:deploy
```

If your upload automatically extracts the project instead, simply `cd` into the project folder and run:

```bash
npm run phone:deploy
```

## 3. Approve Cloudflare login

The script runs `wrangler login --device`. Open the Cloudflare verification link shown in the terminal and approve the code.

## 4. Pick your admin password

The script will ask for `ADMIN_PASSWORD`. Enter the password you want for `/admin`.

## 5. Open the game

At the end Wrangler prints the `https://...workers.dev` address.

- Game: `/`
- Admin: `/admin`
- Health: `/api/health`

The script automatically provisions D1, deploys the Durable Object/WebSocket co-op worker, applies migrations, saves the admin secret, and performs the final deploy.
