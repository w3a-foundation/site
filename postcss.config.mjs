// Tailwind v4 ships as a PostCSS plugin via @tailwindcss/postcss.
// No separate tailwind.config.ts is required for the engine itself —
// theme tokens live in src/app/globals.css via `@theme` (v4 native).
// We still expose a tailwind.config.ts at the repo root because the
// brief asks for it and downstream tools (editor extensions, content
// scanners) read it; v4 treats it as informational.
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
