import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Papers',
  description:
    'Web3 Alliance white papers, technical notes, and policy briefs.',
};

interface Paper {
  key: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  href: string;
  abstract: string;
  status: 'published' | 'draft';
}

const papers: Paper[] = [
  {
    key: 'w3a-thesis',
    title: 'The Web3 Industrial Alliance',
    subtitle:
      'A Compounding Network of Infrastructure, IP, Distribution, Liquidity, Banking Access, and Capital — Engineered From Day One',
    author: 'Hunter Dupont, Managing Partner & Chief Economist',
    date: '2026',
    href: '/papers/Web3_Alliance.pdf',
    abstract:
      'We propose a web3 industrial alliance designed to control the full value chain of digital economies — infrastructure, intellectual property, distribution, liquidity, banking access, and capital — operating as a post-quantum financial services ecosystem and global federation of licensed and regulated banks, money transmitters, acquiring banks, issuing banks, broker-dealers, alternative trading systems, transfer agents, fund managers, and crypto-asset service providers.',
    status: 'published',
  },
];

export default function PapersPage() {
  const published = papers.filter((p) => p.status === 'published');
  return (
    <div className="mx-auto max-w-[var(--container-page)] px-6 py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-mute-500)]">
        Library
      </p>
      <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
        White papers & policy briefs.
      </h1>
      <p className="mt-6 max-w-2xl text-[var(--color-mute-700)]">
        Source documents for the Alliance’s thesis, architecture, and
        regulatory posture. Authored in LaTeX in the upstream legal
        repository and published here as canonical PDF.
      </p>

      <section className="mt-16 space-y-12">
        {published.map((p) => (
          <article
            key={p.key}
            className="border-t border-[var(--color-mute-200)] pt-10"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                {p.title}
              </h2>
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
                {p.date}
              </span>
            </div>
            <div className="mt-2 font-serif italic text-[var(--color-mute-700)]">
              {p.subtitle}
            </div>
            <div className="mt-2 text-sm text-[var(--color-mute-500)]">
              {p.author}
            </div>
            <p className="mt-6 max-w-3xl text-[var(--color-mute-700)]">
              {p.abstract}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={p.href}
                className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-mute-800)]"
              >
                Download PDF
              </a>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center rounded-md border border-[var(--color-mute-300)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-mute-100)]"
              >
                Open in browser
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-20 rounded-lg border border-dashed border-[var(--color-mute-300)] p-10">
        <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
          Forthcoming
        </div>
        <h3 className="mt-2 font-serif text-2xl tracking-tight">
          Additional papers in preparation.
        </h3>
        <p className="mt-3 max-w-2xl text-[var(--color-mute-700)]">
          Architecture notes on Quasar consensus, the FHE precompile
          family, threshold-MPC custody, ERC-3643 / T-REX security-token
          rails, and the multi-entity governance model will be published
          here as they clear internal review.
        </p>
      </section>
    </div>
  );
}
