import type { Metadata } from 'next';
import { CaseStudyLayout } from '@/components/CaseStudyLayout';

export const metadata: Metadata = {
  title: 'Crypto conversion at 10 bps for institutional flow',
  description:
    'A retail brokerage routing crypto-conversion flow through the W3A substrate clears at 10 bps blended take-rate — vs 50-200 bps at Coinbase/Kraken/Gemini retail and 35-85 bps Robinhood PFOF-equivalent.',
};

export default function CryptoConversion10bpsPage() {
  return (
    <CaseStudyLayout
      category="Vertically Integrated Conversion"
      title="Crypto conversion at 10 bps for institutional flow"
      oneLine="A retail brokerage routing crypto-conversion flow through the W3A substrate clears at 10 basis points blended take-rate — undercutting major US crypto venues by 5-20× and Robinhood-style PFOF by 3.5-8.5×, while keeping LPs, custody, and matching engine within one substrate."
      headlineMetric={{ value: '10 bps', label: 'blended take-rate at scale' }}
      stats={[
        { value: '50-200 bps', label: 'Coinbase / Kraken / Gemini retail spread', detail: 'plus tax-reporting + custody complexity' },
        { value: '35-85 bps', label: 'Robinhood PFOF-equivalent', detail: 'plus order-flow-payment economics' },
        { value: '5-15 bps', label: 'institutional desk floor', detail: 'with size minimums + manual quote process' },
        { value: '8 bps', label: 'internal cost stack on W3A substrate', detail: '~4 bps validator + ~4 bps clearing/custody' },
        { value: '+2 bps', label: 'platform margin', detail: 'on top of internal cost stack, totals 10 bps customer take' },
        { value: '$2.1B/yr', label: 'fee revenue at $70B/mo single client', detail: 'illustrative at 25 bps Lux take over baseline' },
      ]}
    >
      <h2>Why incumbent crypto conversion is expensive</h2>
      <p>
        The 50-200 bps that major US crypto venues charge retail isn't
        margin — it's the cost of three structurally separate businesses
        stitched into one transaction: (a) the matching engine and
        liquidity book, (b) the custody and key-management surface, and
        (c) the fiat on/off-ramp through partner banks. Each of those
        sub-businesses operates on a separate cost base with separate
        regulatory overhead and separate counterparty risk.
      </p>
      <p>
        Robinhood-style PFOF venues compress the customer-facing fee by
        selling order flow to market-makers — but the all-in cost to
        the customer (spread + impact + payment-for-order-flow economics)
        sits in the 35-85 bps range, and the venue's customer relationship
        is structurally degraded by the order-flow-payment arrangement.
      </p>

      <h2>Why the W3A substrate clears at 10 bps</h2>
      <p>
        The substrate replaces all three sub-businesses with one
        vertically-integrated stack:
      </p>
      <ul>
        <li>
          <strong>Matching engine:</strong> LX DEX, sustaining 1M+ orders/sec
          on a single Go CPU node and 434M gate operations/sec on the
          GPU/MLX backend. Encrypted mempool + sub-second finality + no
          priority-gas-auction surface. Internal cost: ≈ 4 bps.
        </li>
        <li>
          <strong>Custody:</strong> Threshold-MPC (CGGMP21 2-of-3 ECDSA +
          Ringtail PQ) at a structural cost of 0.5 bps/yr on AUM. Folded
          into the internal cost-stack as ≈ 0.5 bps amortised across the
          flow.
        </li>
        <li>
          <strong>Fiat on/off-ramp:</strong> Through Alliance-member
          regulated banking rails (SF Private Pay, NCPS clearing, member
          bank ACH/wire/FedNow). Internal cost: ≈ 3-4 bps.
        </li>
      </ul>
      <p>
        Total internal cost stack: <strong>≈ 8 bps</strong>. Customer-facing
        fee at 10 bps leaves <strong>≈ 2 bps platform margin</strong> on
        every transaction — enough to fund growth, member-revenue-share,
        and ongoing substrate development.
      </p>

      <h2>What this enables for institutional flow</h2>
      <p>
        At institutional scale a 5-15 bps incumbent floor with size
        minimums and manual quote process becomes a 10 bps fully-electronic
        sub-second venue with no minimum size, programmatic order entry,
        and FHE-confidential strategy state for the desk that doesn't
        want its positioning leaking to MEV searchers.
      </p>
      <p>
        The market opportunity at this cost level is the institutional
        crypto-conversion flow that today routes through OTC desks at
        Galaxy / Cumberland / Genesis (when solvent) / B2C2 — multi-
        hundred-billion-dollar annual notional that has been waiting for
        a venue with the cost stack, the privacy posture, and the
        regulatory wrapper to absorb it. The W3A substrate provides
        all three.
      </p>

      <h2>What a partnership looks like</h2>
      <p>
        Members operating crypto-conversion businesses on the substrate
        operate under the standard 50/50-above-documented-costs
        partnership template. The 8 bps internal cost stack is the
        Documented Cost baseline; everything above that splits 50/50
        between the member and the Alliance. At 10 bps customer-facing
        fee that's 1 bp to each side per transaction — modest per-trade
        but compounding fast at any meaningful volume.
      </p>
      <p>
        Cross-routing into the federation's other regulated members
        (NCPS for US securities settlement, SFPB for US/CA banking,
        AvaTrade for international brokerage flow) is included in the
        baseline. Members do not pay separate fees for the federation
        access — the cross-routing is the value of the membership.
      </p>
    </CaseStudyLayout>
  );
}
