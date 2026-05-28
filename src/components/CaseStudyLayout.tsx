import Link from 'next/link';
import type { ReactNode } from 'react';

export type StatRow = {
  label: string;
  value: string;
  detail?: string;
};

interface CaseStudyLayoutProps {
  category: string;
  title: string;
  oneLine: string;
  headlineMetric: { value: string; label: string };
  stats: StatRow[];
  children: ReactNode;
}

export function CaseStudyLayout({
  category,
  title,
  oneLine,
  headlineMetric,
  stats,
  children,
}: CaseStudyLayoutProps) {
  return (
    <>
      <section className="border-b border-[var(--color-mute-200)]">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:py-32">
          <Link
            href="/case-studies"
            className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)] hover:text-[var(--color-ink)]"
          >
            ← Case studies
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[var(--color-mute-500)]">
            {category}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-mute-700)]">
            {oneLine}
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--color-mute-200)] bg-neutral-900 text-white">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-16">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <div className="font-serif text-6xl font-medium tracking-tight md:text-7xl">
                {headlineMetric.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.16em] text-neutral-400">
                {headlineMetric.label}
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="border-l border-neutral-700 pl-4"
                  >
                    <div className="font-serif text-xl tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                      {s.label}
                    </div>
                    {s.detail && (
                      <div className="mt-1 text-xs text-neutral-300">
                        {s.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-mute-200)]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <article className="prose-w3a">
            {children}
          </article>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-16">
          <div className="rounded-lg border border-[var(--color-mute-200)] bg-[var(--color-mute-100)] p-10 text-center">
            <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
              Talk to the Office of the Chief Economist.
            </h2>
            <p className="mt-4 text-[var(--color-mute-700)]">
              For institutional diligence, fee-structure modelling, or
              member-onboarding terms, reach out directly.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:economist@w3a.foundation"
                className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                economist@w3a.foundation
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center rounded-md border border-[var(--color-mute-300)] bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-[var(--color-mute-100)]"
              >
                Other case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
