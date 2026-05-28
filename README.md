# `@w3a/site` — Web3 Alliance marketing site

The marketing surface served at [w3a.foundation](https://w3a.foundation).
Pure static site, Next.js 15 App Router with `output: 'export'`,
deployed to Cloudflare Pages.

## Stack

- **Next.js 15.5** with the App Router and `output: 'export'`
- **React 19**
- **Tailwind CSS v4** (PostCSS plugin; theme tokens in `globals.css` via `@theme`)
- **TypeScript** strict + `noUncheckedIndexedAccess`

## Routes

| Path        | File                          | What it carries                                                |
| ----------- | ----------------------------- | -------------------------------------------------------------- |
| `/`         | `src/app/page.tsx`            | Hero, six-layer value chain, structural advantage, $141B/yr, eight capability surfaces, members preview, join CTA. |
| `/about`    | `src/app/about/page.tsx`      | Thesis recap — federation, why post-quantum, target outcome.   |
| `/members`  | `src/app/members/page.tsx`    | Founding chains + regulated banking, brokerage & payments.     |
| `/papers`   | `src/app/papers/page.tsx`     | White paper index; serves `/papers/Web3_Alliance.pdf`.         |
| `/join`     | `src/app/join/page.tsx`       | Onboarding intake form → `api.w3a.foundation/v1/applications`. |
| `/docs`     | `src/app/docs/page.tsx`       | Pointer to `docs.w3a.foundation`.                              |

## Develop

```sh
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # static export to ./out
pnpm typecheck
```

`pnpm prebuild` copies the canonical PDF white paper from
`~/work/lux/legal/alliance/Web3_Alliance.pdf` into `public/papers/`.
CI environments without that path land a small sentinel so the build
still succeeds; supply `W3A_PAPER_SOURCE=/path/to/Web3_Alliance.pdf`
to override.

## Environment variables

All optional — defaults carry the canonical W3A brand and routing.

| Variable                   | Default                          | Purpose                                                      |
| -------------------------- | -------------------------------- | ------------------------------------------------------------ |
| `W3A_BRAND_NAME`           | `Web3 Alliance`                  | Brand long form.                                             |
| `W3A_BRAND_SHORT`          | `W3A`                            | Brand short form (wordmark fallback, header).                |
| `W3A_BRAND_TAGLINE`        | (see `src/lib/brand.ts`)         | Tagline shown in OG, footer.                                 |
| `W3A_BRAND_DOMAIN`         | `w3a.foundation`                 | Canonical host (drives `metadataBase`).                      |
| `W3A_CONTACT_EMAIL`        | `hello@w3a.foundation`           | General contact address.                                     |
| `W3A_MEMBERSHIP_EMAIL`     | `membership@w3a.foundation`      | Out-of-band membership intake.                               |
| `W3A_PRESS_EMAIL`          | `press@w3a.foundation`           | Press contact.                                               |
| `NEXT_PUBLIC_W3A_API_BASE` | `https://api.w3a.foundation`     | Onboarding backend base URL.                                 |
| `W3A_DOCS_HOST`            | `docs.w3a.foundation`            | Canonical docs subdomain (linked from `/docs`).              |
| `W3A_PAPER_SOURCE`         | (resolved from sibling repos)    | Absolute path to the canonical white-paper PDF for prebuild. |

## Deploy

The static output lands in `./out` after `pnpm build`. The expected
deploy targets are:

1. **Cloudflare Pages** — project `w3a-site`, alias to `w3a.foundation`.
   Build command `pnpm build`, output directory `out`. Wired in
   `.github/workflows/deploy.yml`; auto-deploys on push to `main`.
2. **Container image** — `ghcr.io/hanzoai/spa` base, served behind
   `hanzoai/ingress`. See `Dockerfile`.

### Required CI secrets

The deploy step is gated on `CLOUDFLARE_API_TOKEN` being set — without
the secret the workflow still builds (verifies the static export) but
skips the deploy. Set on the repo with:

```sh
gh secret set CLOUDFLARE_API_TOKEN  --repo w3a-foundation/site --body '<token>'
gh secret set CLOUDFLARE_ACCOUNT_ID --repo w3a-foundation/site --body '<account-id>'
```

The token must have `Pages:Edit` permission for the `w3a-site`
project. Use a scoped API token from the Cloudflare dashboard, not the
global API key.

## Brand discipline

This site is the W3A brand. Member chains (Lux, Zoo, Hanzo, Pars, Osage)
and regulated members (NCPS, SFPB, AvaTrade, Atmen, SSB, Creatrust,
CDAX) are referenced by name on `/members` with their own canonical
homes. No Lux / Liquidity / Hanzo / Zoo prominence in surface copy
outside that page.

## License

Proprietary — © Web3 Alliance.
