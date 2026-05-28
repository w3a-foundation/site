import Link from 'next/link';
import { foundingMembers, bankingMembers } from '@/lib/members';
import { HeroAnimated } from '@/components/HeroAnimated';

const valueChain = [
  {
    title: 'Infrastructure',
    body: 'Post-quantum L1 / L2 substrate, FHE precompiles, threshold-MPC custody, and ERC-3643 / T-REX security-token rails operated as a single substrate underneath every member’s product.',
  },
  {
    title: 'Intellectual property',
    body: 'Eighty-seven catalogued inventions across consensus, AMM design, FHE, custody, and AI-attested risk — held in a single three-tier licensing regime that aligns each member with the network’s compounding.',
  },
  {
    title: 'Distribution',
    body: 'A consumer-grade GameFi front door plus the Alliance’s regulated retail and institutional channels carry users into every downstream product without per-member CAC re-bootstrapping.',
  },
  {
    title: 'Liquidity',
    body: 'On-chain DEX matching, FHE-confidential pool design, and an LP-favoured economic structure connect on-chain assets to off-chain capital under measurable, transparent terms.',
  },
  {
    title: 'Banking access',
    body: 'Chartered banks, money transmitters, acquirers, issuers, and broker-dealers across the United States, United Kingdom, European Union, Isle of Man, Luxembourg, Singapore, the United Arab Emirates, and the Horn of Africa — all under one membership.',
  },
  {
    title: 'Capital',
    body: 'A shared capital pool that buys time and optionality when single ventures stumble — the structural advantage no single startup can assemble on its own.',
  },
];

const structuralAdvantage = [
  {
    title: 'Horizontal asset coverage',
    body: 'Cash equivalents, fixed income, equities, alternatives, real assets, infrastructure, private credit, and crypto — crypto-native and tokenized-RWA categories structurally favoured on the Alliance substrate.',
  },
  {
    title: 'Multi-jurisdiction distribution',
    body: 'Institutional, RIA, retail, and sovereign distribution across eight or more jurisdictions today under executed partnership agreements; cross-routing makes geography invisible to the operator.',
  },
  {
    title: 'Proprietary operating substrate',
    body: 'W3A L2 + Quasar consensus + LX DEX matching engine + FHE precompile + threshold-MPC custody + ERC-3643 / T-REX security-token substrate — all in production, all documented.',
  },
  {
    title: 'Capital scale',
    body: 'Five-to-seven-year compounding horizon; each member’s AUM joins the federation without consolidating it, multiplying network value without linearly increasing organisational complexity.',
  },
  {
    title: 'Risk infrastructure',
    body: 'Pre-trade compliance gate, real-time sanctions and transaction monitoring, AI-attested risk models, and FHE-confidential analytics that run on encrypted holdings without information leakage.',
  },
];

const capabilitySurfaces = [
  {
    n: '01',
    title: 'Chartered banking',
    body: 'Private banking, deposit-taking, lending, custody, and trust services across US, Canada, EU, UK, IOM, and Horn-of-Africa.',
  },
  {
    n: '02',
    title: 'Money transmission',
    body: 'FinCEN MSB and state money-transmitter in the United States; IOM Class 8 in the Crown Dependencies; equivalent licensure in every operating jurisdiction.',
  },
  {
    n: '03',
    title: 'Acquiring banking',
    body: 'Merchant acquiring, card-present, card-not-present, and stablecoin-acceptance rails.',
  },
  {
    n: '04',
    title: 'Issuing banking',
    body: 'Card issuance (BIN sponsorship, debit, credit, prepaid, virtual), account issuing, and program management across multiple BIN ranges.',
  },
  {
    n: '05',
    title: 'BD · TA · ATS',
    body: 'FINRA-registered broker-dealer, SEC-registered transfer agent, and SEC-registered alternative trading system in the United States; equivalent registration under FCA, MAS, VARA, CSSF, MiFID II, and MiCA.',
  },
  {
    n: '06',
    title: 'Asset management',
    body: 'Fund manager and investment adviser across regulated jurisdictions — CSSF-licensed via Creatrust, US RIA, and non-US passportable structures.',
  },
  {
    n: '07',
    title: 'Crypto-asset service provision',
    body: 'Registered crypto-asset service provider posture under MiCA, VARA, MAS, and FCA; DPT-equivalent registration where applicable.',
  },
  {
    n: '08',
    title: 'Insurance & reinsurance',
    body: 'Selectively where a member fits the risk-transfer mandate — D&O, cyber, custody, and parametric agricultural cover for the Horn-of-Africa corridor.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — animated (framer-motion staggered word rise) ----------- */}
      <HeroAnimated />

      {/* Six-layer value chain ----------------------------------------- */}
      <section className="border-b border-[var(--color-mute-200)]">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-20">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Six layers, one federation
            </h2>
            <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
              §1 Thesis
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-[var(--color-mute-700)]">
            Value accrues to whoever owns the horizontal substrate on
            which many applications run, the distribution that carries
            users into those applications, the liquidity that connects
            on-chain assets to off-chain capital, the banking and
            regulatory rails that bridge fiat and crypto under supervised
            regulation, and the capital that buys time and optionality
            when single ventures stumble.
          </p>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {valueChain.map((layer, i) => (
              <li
                key={layer.title}
                className="border-l border-[var(--color-ink)] pl-5"
              >
                <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="mt-2 font-serif text-xl tracking-tight">
                  {layer.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-mute-700)]">
                  {layer.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Five-attribute structural advantage --------------------------- */}
      <section className="border-b border-[var(--color-mute-200)] bg-[var(--color-mute-100)]">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-20">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              The structural advantage
            </h2>
            <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
              §1.2
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-[var(--color-mute-700)]">
            The largest incumbent franchises of the past forty years
            derive their value not from any single product or asset but
            from horizontal coverage and integration discipline. Five
            attributes define that value. The Alliance is structurally
            positioned to deliver each — as a federation of independent
            members rather than as a single consolidated holding.
          </p>
          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {structuralAdvantage.map((a) => (
              <div key={a.title}>
                <div className="font-serif text-lg tracking-tight">
                  {a.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-mute-700)]">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* $141B headline ------------------------------------------------ */}
      <section className="border-b border-[var(--color-mute-200)]">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <div className="font-serif text-7xl font-medium tracking-tight text-[var(--color-ink)] md:text-8xl">
                $141B
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
                per year, quantifiable
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
                Quantifiable annual cost extraction from the incumbent stack.
              </h2>
              <p className="mt-4 text-[var(--color-mute-700)]">
                Substantively better cost stack. Categorically better
                privacy model — FHE-grade confidentiality that no
                incumbent can match. A post-quantum security posture
                that no incumbent will match inside the NIST CNSA-2.0
                PQ-by-2035 horizon. Decentralization-and-non-custodial-
                by-default resilience that no permissioned legacy stack
                can offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 90% reduction headline --------------------------------------- */}
      <section className="border-b border-[var(--color-mute-200)] bg-neutral-900 text-white">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <div className="font-serif text-7xl font-medium tracking-tight md:text-8xl">
                90%
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.16em] text-neutral-400">
                reduction in headcount &amp; cost
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
                Adopt the W3A stack and run regulated PQ finance with a 10× smaller team and a 10× smaller cost base.
              </h2>
              <p className="mt-4 text-neutral-300">
                One substrate replaces the matching engine, custody
                vault, transfer-agent ledger, reconciliation team,
                compliance overlay, AML stack, payment-rails layer, and
                FHE-confidential analytics that a comparable incumbent
                holds across dozens of vendors and hundreds of FTEs.
                Vertically integrated. Post-quantum by construction.
                Operated by a federation of licensed members, not a
                single Delaware corporation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
                >
                  See case studies →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eight licensed capability surfaces ---------------------------- */}
      <section className="border-b border-[var(--color-mute-200)]">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-20">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Eight licensed capability surfaces
            </h2>
            <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
              §1.1
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-[var(--color-mute-700)]">
            The Alliance’s scope spans eight licensed-financial-services
            capability surfaces, each operated by a regulated member
            under live licensure in its home jurisdiction.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilitySurfaces.map((c) => (
              <div
                key={c.n}
                className="rounded-lg border border-[var(--color-mute-200)] bg-[var(--color-paper)] p-6"
              >
                <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
                  {c.n}
                </div>
                <div className="mt-2 font-serif text-lg tracking-tight">
                  {c.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-mute-700)]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Great Crossover summary --------------------------------------- */}
      <section className="border-b border-[var(--color-mute-200)] bg-[var(--color-mute-100)]">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-20">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              The Great Crossover
            </h2>
            <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
              §2f
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-[var(--color-mute-700)]">
            Tokenized real-world assets, on-chain payments, and
            AI-mediated finance are crossing into supervised market
            structure on a measurable horizon. The Alliance is the
            integrated counterparty for that crossing — a single
            federation that already holds the licensure, the substrate,
            and the capital pool needed to clear the migration without
            the incumbent stack’s technical debt.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
                Horizon
              </div>
              <div className="mt-2 font-serif text-2xl tracking-tight">
                5 – 7 years
              </div>
              <p className="mt-2 text-sm text-[var(--color-mute-700)]">
                Target compounding window for the federation, anchored
                in §13 milestones.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
                Target class
              </div>
              <div className="mt-2 font-serif text-2xl tracking-tight">
                $100B – $1T
              </div>
              <p className="mt-2 text-sm text-[var(--color-mute-700)]">
                Aggregate enterprise value of the federation when each
                phase clears its respective milestone.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
                Jurisdictions
              </div>
              <div className="mt-2 font-serif text-2xl tracking-tight">
                8+
              </div>
              <p className="mt-2 text-sm text-[var(--color-mute-700)]">
                Live regulated members across the United States, United
                Kingdom, European Union, Isle of Man, Luxembourg,
                Singapore, UAE, and the Horn of Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Members preview ----------------------------------------------- */}
      <section className="border-b border-[var(--color-mute-200)]">
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-20">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Members
            </h2>
            <Link
              href="/members"
              className="text-sm text-[var(--color-mute-700)] hover:text-[var(--color-ink)]"
            >
              Full roster &rarr;
            </Link>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
                Founding chains & operating companies
              </div>
              <ul className="mt-4 space-y-2">
                {foundingMembers.map((m) => (
                  <li key={m.key} className="text-sm">
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-medium text-[var(--color-ink)] hover:underline"
                    >
                      {m.name}
                    </a>
                    <span className="text-[var(--color-mute-500)]">
                      {' '}
                      — {m.capability}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
                Regulated banking, brokerage & payments
              </div>
              <ul className="mt-4 space-y-2">
                {bankingMembers.map((m) => (
                  <li key={m.key} className="text-sm">
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-medium text-[var(--color-ink)] hover:underline"
                    >
                      {m.short ?? m.name}
                    </a>
                    <span className="text-[var(--color-mute-500)]">
                      {' '}
                      — {m.capability}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to join -------------------------------------------------- */}
      <section>
        <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 text-center">
          <h2 className="font-serif text-3xl tracking-tight md:text-5xl">
            Join the federation.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-mute-700)]">
            Membership is open to chartered banks, money transmitters,
            acquirers, issuers, broker-dealers, fund managers, and
            crypto-asset service providers in any jurisdiction the
            Alliance operates in — and to chain teams and infrastructure
            operators able to anchor a capability surface.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/join"
              className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-mute-800)]"
            >
              Apply for membership
            </Link>
            <Link
              href="/members"
              className="inline-flex items-center rounded-md border border-[var(--color-mute-300)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-mute-100)]"
            >
              See current members
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
