import type { NextConfig } from 'next';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

// Pin the file-tracing root to this package so Next does not walk up
// the filesystem and latch onto a parent lockfile.
const here = dirname(fileURLToPath(import.meta.url));

// Static export for Cloudflare Pages. The W3A site is pure SSG —
// no server routes, no ISR. The onboarding intake form (POST →
// api.w3a.foundation/v1/applications) is the only side-effect surface,
// and that is handled by a separate API backend.
const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  outputFileTracingRoot: here,
  images: {
    unoptimized: true,
  },
  eslint: {
    // Lint is a separate gate; keep the build deterministic.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
