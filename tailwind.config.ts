import type { Config } from 'tailwindcss';

// Tailwind v4 is CSS-first — the engine reads tokens from @theme in
// globals.css. This config exists so editor extensions and downstream
// tools that still parse a config file have something to introspect.
// Do not put theme tokens here; they are duplicated in CSS and one of
// the two will drift. Source of truth is src/app/globals.css.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
};

export default config;
