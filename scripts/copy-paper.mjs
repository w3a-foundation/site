#!/usr/bin/env node
// Copy the Web3 Alliance white paper from its canonical source in
// ~/work/lux/legal/alliance/ into public/papers/ at build time. The
// PDF is .gitignore'd in this repo — the canonical version lives in
// the lux/legal monorepo where it is authored in LaTeX and rebuilt
// on every prose change. CI environments without that adjacent
// checkout fall back to a sentinel so the build still completes.
import { promises as fs } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const target = resolve(repoRoot, 'public/papers/Web3_Alliance.pdf');

const candidates = [
  process.env.W3A_PAPER_SOURCE,
  resolve(repoRoot, '../../lux/legal/alliance/Web3_Alliance.pdf'),
  resolve(repoRoot, '../legal/alliance/Web3_Alliance.pdf'),
  resolve(repoRoot, '../papers/Web3_Alliance.pdf'),
].filter(Boolean);

async function fileExists(p) {
  try {
    const s = await fs.stat(p);
    return s.isFile();
  } catch {
    return false;
  }
}

async function main() {
  await fs.mkdir(dirname(target), { recursive: true });

  for (const src of candidates) {
    if (await fileExists(src)) {
      await fs.copyFile(src, target);
      console.log(`[copy-paper] ${src} -> ${target}`);
      return;
    }
  }

  // Sentinel: write a small placeholder so the public route resolves
  // and the build does not break. CI environments that have the
  // canonical source replace it with the real PDF.
  const placeholder = Buffer.from(
    'Web3 Alliance white paper — canonical PDF will be served from ' +
      'github.com/osagebrothers/w3a-site CI builds. See ' +
      'https://w3a.foundation/papers for the current revision.\n',
  );
  await fs.writeFile(target, placeholder);
  console.log(`[copy-paper] wrote sentinel to ${target}`);
}

main().catch((err) => {
  console.error('[copy-paper] failed:', err);
  process.exit(1);
});
