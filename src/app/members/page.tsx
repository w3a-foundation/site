import type { Metadata } from 'next';
import Link from 'next/link';
import { foundingMembers, bankingMembers, type Member } from '@/lib/members';

export const metadata: Metadata = {
  title: 'Members',
  description:
    'The founding chains, operating companies, and regulated banking, brokerage, and payments members of the Web3 Industrial Alliance.',
};

function MemberCard({ m }: { m: Member }) {
  return (
    <article className="flex flex-col gap-3 border-t border-[var(--color-mute-200)] py-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-serif text-2xl tracking-tight">
          <a
            href={m.href}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:underline"
          >
            {m.name}
          </a>
          {m.short && m.short !== m.name ? (
            <span className="ml-3 text-sm uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
              {m.short}
            </span>
          ) : null}
        </h3>
        <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
          {m.jurisdiction}
        </span>
      </div>
      <div className="text-sm font-medium text-[var(--color-ink)]">
        {m.capability}
      </div>
      <p className="max-w-3xl text-[var(--color-mute-700)]">{m.description}</p>
      <a
        href={m.href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-sm text-[var(--color-mute-500)] hover:text-[var(--color-ink)]"
      >
        {new URL(m.href).host} &rarr;
      </a>
    </article>
  );
}

export default function MembersPage() {
  return (
    <div className="mx-auto max-w-[var(--container-page)] px-6 py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-mute-500)]">
        Membership roster
      </p>
      <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
        Independent businesses, one coordinated network.
      </h1>
      <p className="mt-6 max-w-3xl text-[var(--color-mute-700)]">
        Members are independent businesses — their operations are not
        consolidated. The shared substrate, IP, distribution, and capital
        is what differentiates the network from a collection of arms-length
        vendors.
      </p>

      <section className="mt-20">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="font-serif text-3xl tracking-tight">
            Founding chains & operating companies
          </h2>
          <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
            §1.1
          </span>
        </div>
        <div className="mt-4">
          {foundingMembers.map((m) => (
            <MemberCard key={m.key} m={m} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="font-serif text-3xl tracking-tight">
            Regulated banking, brokerage & payments
          </h2>
          <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
            §1.1
          </span>
        </div>
        <div className="mt-4">
          {bankingMembers.map((m) => (
            <MemberCard key={m.key} m={m} />
          ))}
        </div>
        <p className="mt-8 text-sm text-[var(--color-mute-500)]">
          The open-membership posture admits additional regulated banks,
          money transmitters, acquirers, and issuers in each jurisdiction
          the Alliance expands into, on the standard partnership-template
          terms.
        </p>
      </section>

      <section className="mt-20 rounded-lg border border-[var(--color-mute-200)] bg-[var(--color-mute-100)] p-10">
        <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
          Apply for membership
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--color-mute-700)]">
          Membership is open to chartered banks, money transmitters,
          acquirers, issuers, broker-dealers, fund managers, crypto-asset
          service providers, chain teams, and infrastructure operators
          able to anchor a capability surface.
        </p>
        <div className="mt-6">
          <Link
            href="/join"
            className="inline-flex items-center rounded-md bg-[var(--color-ink)] px-5 py-3 text-sm font-medium text-[var(--color-paper)] transition hover:bg-[var(--color-mute-800)]"
          >
            Begin application
          </Link>
        </div>
      </section>
    </div>
  );
}
