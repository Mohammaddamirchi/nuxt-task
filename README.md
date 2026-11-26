# Moallem hiring landing page

Landing page of the hiring system, built with Nuxt 4 and Nuxt UI (RTL, Persian).

## Setup

```bash
pnpm install
pnpm dev
```

Set `NUXT_API_BASE_URL` to point at another API host (see `.env.example`).

## Structure

| Path | Responsibility |
| --- | --- |
| `server/api/job-statistics.get.ts` | Proxies, validates, maps and caches (60s) the statistics API |
| `shared/types/` | Types shared by server and app |
| `app/composables/useJobStatistics.ts` | Data access for components |
| `app/components/home/` | Page sections |
| `app/app.config.ts` | Theme colors and external links |

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```
