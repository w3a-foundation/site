# W3A brand assets

This directory carries the wordmark and favicon assets served at the
root of the deployed site.

Until the design pass ships its final SVG mark, the site renders the
brand typographically via `src/components/Wordmark.tsx`. When the
final assets are ready, drop them in here and update the references:

```
public/brand/wordmark.svg   # primary wordmark
public/brand/wordmark-dark.svg
public/brand/favicon.ico    # 32x32 / 16x16 multi-resolution ICO
public/brand/icon-512.png   # PWA + OG fallback
public/brand/og-default.png # 1200x630 OG card
```

Do not commit raster screenshots, drafts, or in-progress experiments
to this directory. The directory is the deploy surface.
