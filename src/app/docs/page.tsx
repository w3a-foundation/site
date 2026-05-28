import type { Metadata } from 'next';
import { brand } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'Technical documentation for the Web3 Alliance lives at docs.w3a.foundation.',
};

export default function DocsPage() {
  const docsUrl = `https://${brand.docsHost}`;
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-mute-500)]">
        Documentation
      </p>
      <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
        Technical documentation.
      </h1>
      <p className="mt-6 text-[var(--color-mute-700)]">
        Architecture references, API specifications, governance
        primitives, and operator runbooks for the Alliance substrate
        live at the canonical docs surface below.
      </p>

      <div className="mt-12 rounded-lg border border-[var(--color-mute-200)] bg-[var(--color-mute-100)] p-10">
        <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
          Canonical docs surface
        </div>
        <div className="mt-2 font-serif text-2xl tracking-tight">
          {brand.docsHost}
        </div>
        <p className="mt-3 max-w-xl text-[var(--color-mute-700)]">
          Maintained as a separate deployment so docs and marketing can
          ship independently, the docs surface mirrors the same Eames-
          minimal register as this site.
        </p>
        <div className="mt-6">
          <a
            href={docsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-md bg-[var(--color-ink)] px-5 py-3 text-sm font-medium text-[var(--color-paper)] transition hover:bg-[var(--color-mute-800)]"
          >
            Open {brand.docsHost} &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
