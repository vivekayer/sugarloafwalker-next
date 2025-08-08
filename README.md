# Guitarist SPA (Next.js + Tailwind CSS + TypeScript)

A single-page musician site built with **Next.js (App Router)**, **Tailwind CSS**, and **TypeScript**.

## Quick Start

```bash
npm install
npm run dev
# build & run
npm run build && npm start
```

Update links/content in `src/components/*` to match your brand.

## Env (optional for contact via SMTP)

Create `.env` with:

```
SMTP_HOST=your.smtp.host
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_pass
SMTP_FROM=from@your-domain.com
SMTP_TO=to@your-domain.com
```

Uncomment the nodemailer block in `src/app/api/contact/route.ts`.

## Deploy (Ubuntu, PM2, Nginx)

1. Install Node 20+, Nginx, PM2.
2. `npm ci && npm run build`
3. `pm2 start npm --name guitarist-spa -- start && pm2 save`
4. Reverse proxy Nginx to `127.0.0.1:3000` and (optionally) enable SSL via Certbot.
