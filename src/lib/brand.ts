// Brand surface for the W3A marketing site. Every visible string that
// is bound to the brand (name, support email, copyright line, contact
// addresses) reads from this module. White-label rebuilds set the
// W3A_BRAND_* env vars at build time to point a deployment at a
// different surface (private-preview deployments, partner skins).

export const brand = {
  name: process.env.W3A_BRAND_NAME ?? 'Web3 Alliance',
  short: process.env.W3A_BRAND_SHORT ?? 'W3A',
  tagline:
    process.env.W3A_BRAND_TAGLINE ??
    'Post-Quantum Financial Services Ecosystem & Global Federation',
  domain: process.env.W3A_BRAND_DOMAIN ?? 'w3a.foundation',
  contactEmail: process.env.W3A_CONTACT_EMAIL ?? 'hello@w3a.foundation',
  membershipEmail:
    process.env.W3A_MEMBERSHIP_EMAIL ?? 'membership@w3a.foundation',
  pressEmail: process.env.W3A_PRESS_EMAIL ?? 'press@w3a.foundation',
  apiBase:
    process.env.NEXT_PUBLIC_W3A_API_BASE ?? 'https://api.w3a.foundation',
  docsHost: process.env.W3A_DOCS_HOST ?? 'docs.w3a.foundation',
} as const;

export type Brand = typeof brand;
