import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Thesis',
  description:
    'The Web3 Alliance thesis: a coordinated federation of legally independent businesses operating under shared post-quantum-secure infrastructure, IP, distribution, capital, and a single coordination layer.',
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-mute-500)]">
        Thesis
      </p>
      <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
        Engineered from day one.
      </h1>

      <div className="prose-section mt-10 space-y-6 text-[var(--color-mute-800)]">
        <p>
          The web3 industry has matured past the point where a single
          application, chain, or token can capture the value it
          creates. Value accrues to whoever owns the{' '}
          <em>horizontal substrate</em> on which many applications run,
          the <em>distribution</em> that carries users into those
          applications, the <em>liquidity</em> that connects on-chain
          assets to off-chain capital, the{' '}
          <em>banking and regulatory rails</em> that bridge fiat and
          crypto under supervised regulation, and the <em>capital</em>{' '}
          that buys time and optionality when single ventures stumble.
        </p>
        <p>
          No single startup, however well-funded, can assemble all six
          layers quickly enough to outrun its competitors. The
          category-defining outcomes of the last technology generation
          — PayPal, Stripe, Coinbase — required either a multi-year
          compounding window inside a single company or, more often in
          practice, a tightly-coordinated network of related companies
          in which one win seeded the next.
        </p>
        <p className="font-serif text-xl leading-relaxed text-[var(--color-ink)]">
          The thesis of this paper is that the next compounding network
          can be <em>engineered</em> from day one rather than discovered
          ex post.
        </p>
        <p>
          The horizontal-integration shape pioneered by the large
          incumbents of the post-1988 financial-services era is
          structurally available to be rebuilt — with a materially
          better cost stack, a categorically better privacy model, a
          structurally better liquidity-provider economic structure for
          AMM participants, the resilience-by-design of a decentralized
          non-custodial-by-default substrate, and a post-quantum
          security posture that no incumbent will match inside the
          NIST CNSA-2.0 PQ-by-2035 horizon. The conditions for
          executing that rebuild are present today.
        </p>
      </div>

      <h2 className="mt-16 font-serif text-2xl tracking-tight md:text-3xl">
        Why a federation rather than a single corporation
      </h2>
      <div className="mt-6 space-y-6 text-[var(--color-mute-800)]">
        <p>
          The largest incumbent franchises of the past forty years
          derive their value not from any single product or asset, but
          from horizontal coverage and integration discipline. Five
          attributes define that value, and the Alliance is
          structurally positioned to deliver each — as a federation of
          independent members rather than as a single consolidated
          corporate holding.
        </p>
        <ul className="space-y-4 border-l border-[var(--color-mute-200)] pl-6">
          <li>
            <span className="font-medium text-[var(--color-ink)]">
              Horizontal asset coverage.
            </span>{' '}
            Cash equivalents, fixed income, equities, alternatives, real
            assets, infrastructure, private credit, and crypto. The
            Alliance covers each, with crypto-native and tokenized-RWA
            categories structurally favoured on its own substrate.
          </li>
          <li>
            <span className="font-medium text-[var(--color-ink)]">
              Multi-jurisdiction distribution.
            </span>{' '}
            Institutional, RIA, retail, and sovereign. The federation
            covers eight or more jurisdictions today under executed
            partnership agreements; the cross-routing layer makes the
            customer’s geography irrelevant to operational complexity.
          </li>
          <li>
            <span className="font-medium text-[var(--color-ink)]">
              Proprietary operating substrate.
            </span>{' '}
            W3A L2, Quasar consensus, the LX DEX matching engine, FHE
            precompile, threshold-MPC custody, and the ERC-3643 / T-REX
            security-token substrate — all in production, all documented,
            all open-source under a three-tier licensing model.
          </li>
          <li>
            <span className="font-medium text-[var(--color-ink)]">
              Capital scale.
            </span>{' '}
            The incumbent franchises took three to four decades to
            assemble their AUM. The Alliance’s target horizon is sized
            to a five-to-seven-year compounding window. Each member’s
            AUM joins the federation without consolidating it,
            multiplying network value without linearly increasing
            organisational complexity.
          </li>
          <li>
            <span className="font-medium text-[var(--color-ink)]">
              Risk infrastructure.
            </span>{' '}
            Pre-trade compliance gate, real-time sanctions and
            transaction monitoring, the AI-attestation surface for
            ML-driven risk models, and the FHE-confidential primitives
            that allow risk-and-portfolio analytics to run on encrypted
            holdings without information leakage.
          </li>
        </ul>
      </div>

      <h2 className="mt-16 font-serif text-2xl tracking-tight md:text-3xl">
        Why post-quantum matters
      </h2>
      <div className="mt-6 space-y-6 text-[var(--color-mute-800)]">
        <p>
          NSA CNSA 2.0 requires PQ migration for national-security
          systems by 2035. NIST FIPS 203 (ML-KEM), 204 (ML-DSA), and
          205 (SLH-DSA) are finalised. The cryptographic primitives
          underneath traditional financial-services infrastructure —
          RSA, classical ECDSA — are <em>categorically</em> vulnerable
          to cryptographically-relevant quantum computers. The
          Harvest-Now-Decrypt-Later threat model is operational today:
          long-duration custody holdings, sealed deal documents, vesting
          schedules, and any cryptographic material held by custodians
          or settlement intermediaries is exposed.
        </p>
        <p>
          The Alliance substrate is post-quantum-secure by construction.
          Quasar consensus carries dual finality — classical BLS for
          sub-second latency and Ringtail R-LWE lattice-threshold for
          PQ finality — in the same block. Threshold custody runs
          CGGMP21 2-of-3 ECDSA and Ringtail PQ threshold under one
          consensus boundary, so the same key is classically and
          post-quantum safe. FHE primitives at the precompile layer are
          inherently PQ-secure. ML-DSA-65 with Groth16 SNARK validator
          binding anchors validator identity in a PQ-secure scheme.
          Custody KMS, signing keys, and on-chain identity all carry
          PQ-secure variants in the same KMS envelope.
        </p>
        <p>
          The cost of PQ migration for incumbents is structural; for
          the Alliance it has already been paid. Members joining the
          network inherit the posture without paying the migration cost.
        </p>
      </div>

      <h2 className="mt-16 font-serif text-2xl tracking-tight md:text-3xl">
        Outcome
      </h2>
      <p className="mt-6 text-[var(--color-mute-800)]">
        If the day-zero conditions described in the paper hold and the
        architecture is executed cleanly, the Web3 Alliance targets a{' '}
        <strong>$100B–$1T-class institution</strong> over a five-to-
        seven-year compounding window. The target is not premised on
        any single product hitting outsized adoption. It is the
        aggregate enterprise value of the federation when each phase
        clears its respective milestones, with structural cost-advantage
        tailwinds of approximately $141B per year of quantifiable
        annual extraction from the incumbent stack, the FHE-privacy
        and DEX-LP economics advantages, and the multi-jurisdiction
        federation already executed today.
      </p>

      <div className="mt-16 flex flex-wrap gap-3 border-t border-[var(--color-mute-200)] pt-10">
        <Link
          href="/papers"
          className="inline-flex items-center rounded-md bg-[var(--color-ink)] px-5 py-3 text-sm font-medium text-[var(--color-paper)] transition hover:bg-[var(--color-mute-800)]"
        >
          Read the full white paper
        </Link>
        <Link
          href="/members"
          className="inline-flex items-center rounded-md border border-[var(--color-mute-300)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-mute-100)]"
        >
          See current members
        </Link>
      </div>
    </article>
  );
}
