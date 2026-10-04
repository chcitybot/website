# CityBot Website

Marketing website for [citybot.ch](https://citybot.ch) — Nuxt 3, Tailwind, markdown blog, 5 locales (de, en, fr, it, ch = Swiss German). German is the default language.

## Development

```bash
npm install
npm run dev              # localhost:3000
npm run generate         # static build (what production serves)
npm run generate-sitemap # regenerate public/sitemap.xml after adding pages/posts
```

## Production setup

Static site: `nuxt generate` output served by nginx in Docker, behind Traefik on an Oracle VM (`152.67.78.90`, host `citybot-dashboard`). TLS via Traefik's Let's Encrypt resolver. DNS (hosttech) has a wildcard `*.citybot.ch` → VM.

**The root redirect `/` → `/de/` is hardcoded in [nginx.conf](nginx.conf)** — changing `defaultLocale` in `nuxt.config.ts` alone does NOT change production behavior. Change both.

### Deploying (manual — no CI/CD, no push hook)

```bash
ssh ubuntu@152.67.78.90   # key: ~/.ssh/ssh-key-2025-10-09.key
cd ~/website && git pull
nohup docker compose up -d --build > /tmp/build.log 2>&1 &
tail -f /tmp/build.log    # build takes ~5 min (prerender is the slow part)
```

Verify: `curl -sI https://citybot.ch/ | grep -i location` → should be `/de/`.

The VM has 1GB RAM and swaps during builds — don't add heavy services to the compose file.

## Analytics

Self-hosted [GoatCounter](https://www.goatcounter.com/) at [stats.citybot.ch](https://stats.citybot.ch) — cookieless, so no consent banner is required. The service is defined in [docker-compose.yml](docker-compose.yml); data lives in the `goatcounter-data` volume on the VM (SQLite).

- Tracking script: `nuxt.config.ts` head + [plugins/goatcounter.client.ts](plugins/goatcounter.client.ts) (counts client-side route changes, since count.js only sees the initial page load).
- Exclude your own visits: open `https://citybot.ch/#toggle-goatcounter` once per browser, or add your IP in the dashboard settings.
- One-time setup (already done): `docker exec -it goatcounter goatcounter db create site -vhost=stats.citybot.ch -user.email=...`; add users with `db create user -site=stats.citybot.ch -email=... -access=superuser`.

## Adding a blog post

1. Create the markdown file in `content/{locale}/blog/` for each locale (en, de, fr, it, ch)
2. Frontmatter: `title`, `description`, `image`, `tags`, `date`
3. Images go in `public/img/`
4. `npm run generate-sitemap`
