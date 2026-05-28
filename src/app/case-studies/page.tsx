import Link from 'next/link';
import type { Metadata } from 'next';
import { caseStudies } from '@/lib/caseStudies';

export const metadata: Metadata = {
  title: 'Case studies',
  description:
    'Anonymous case studies showing the structural advantages of the W3A substrate across regulated US securities venues, global asset-management franchises, crypto conversion, neo-banking, tokenised RWA, and global payments.',
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <section className="border-b border-[var(--color-mute-200)]">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-mute-500)]">
            Case studies
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
            What the W3A substrate is worth, in numbers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-mute-700)]">
            Six anonymous case studies covering a US-regulated ATS+BD+TA
            member, a multi-trillion-dollar asset-management franchise,
            vertically-integrated crypto conversion at 10 bps, a
            neo-bank running the substrate end-to-end with a 10× smaller
            team, a tokenised-RWA fund manager, and a global PSP +
            acquirer + issuer. Each presents the substrate advantage as
            arithmetic, not narrative.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--color-mute-200)]">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-20">
          <ul className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((c) => (
              <li
                key={c.slug}
                className="flex flex-col rounded-lg border border-[var(--color-mute-200)] bg-[var(--color-paper)] p-8"
              >
                <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
                  {c.category}
                </div>
                <h2 className="mt-3 font-serif text-2xl tracking-tight">
                  {c.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-mute-700)]">
                  {c.oneLine}
                </p>
                <div className="mt-6 flex items-end justify-between border-t border-[var(--color-mute-200)] pt-4">
                  <div>
                    <div className="font-serif text-2xl tracking-tight">
                      {c.metric.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
                      {c.metric.label}
                    </div>
                  </div>
                  <Link
                    href={`/case-studies/${c.slug}`}
                    className="text-sm font-medium text-[var(--color-ink)] hover:underline"
                  >
                    Read →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-20 text-center">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Talk to us.
          </h2>
          <p className="mt-4 text-[var(--color-mute-700)]">
            If you are a bank, fund, regulated brokerage, payment
            processor, or sovereign wealth fund evaluating the W3A
            substrate, contact the Office of the Chief Economist directly.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="mailto:economist@w3a.foundation"
              className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              economist@w3a.foundation
            </a>
            <Link
              href="/join"
              className="inline-flex items-center rounded-md border border-[var(--color-mute-300)] bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-[var(--color-mute-100)]"
            >
              Apply for membership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
