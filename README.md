# Moallem hiring landing page

Landing page of the hiring system, built with Nuxt 4 and Nuxt UI (RTL, Persian).

## Setup

```bash
pnpm install
pnpm dev
```

Statistics come from `https://api.moallem.sch.ir/hire/v1/job/statistics/`. Set `NUXT_PUBLIC_API_BASE_URL` to use another host.

## Structure

| Path | Responsibility |
| --- | --- |
| `app/types/` | API response types |
| `app/composables/useJobStatistics.ts` | Data access for components |
| `app/components/` | Header and page sections |
| `app/app.config.ts` | Theme colors and external links |

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```
