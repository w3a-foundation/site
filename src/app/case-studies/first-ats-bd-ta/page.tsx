import type { Metadata } from 'next';
import { CaseStudyLayout } from '@/components/CaseStudyLayout';

export const metadata: Metadata = {
  title: 'First ATS + BD + TA member',
  description:
    'A US-licensed alternative trading system, broker-dealer, and transfer agent operating end-to-end on the W3A substrate. $75M current capital raise at $1.1B valuation; $10B+ Stage-2 enterprise-value trajectory.',
};

export default function FirstATSBDTAPage() {
  return (
    <CaseStudyLayout
      category="Regulated US Securities Venue"
      title="First ATS + BD + TA member — the anonymous founding venue"
      oneLine="A US-licensed alternative trading system, broker-dealer, and transfer agent operates end-to-end on the W3A substrate. Closing a $75M capital raise at $1.1B valuation against a multi-year roadmap to $10B+ Stage-2 enterprise value."
      headlineMetric={{ value: '$1.1B', label: 'current round valuation' }}
      stats={[
        { value: '$75M', label: 'current capital raise', detail: 'verbal commitments ≈ $37.5M soft-circled' },
        { value: 'FINRA + SEC + SEC', label: 'license stack', detail: 'BD · TA · ATS — all live' },
        { value: '500K → 100M', label: 'user trajectory', detail: 'Stage 1 → Stage 4 over 5 yrs' },
        { value: '$15B', label: 'Lux 10% stake at Stage 4 (Base ARPU)', detail: 'per §VII trading-fee model' },
      ]}
    >
      <h2>What the member brings</h2>
      <p>
        The first regulated US securities venue to operate on the W3A
        substrate holds a full FINRA-registered broker-dealer, an
        SEC-registered transfer agent, and an SEC-registered alternative
        trading system — the three permissions that together let a US
        venue book trades, hold customer records, and operate secondary
        liquidity for private securities.
      </p>
      <p>
        Under prior leadership the platform reached production-near
        state but with a materially incomplete matching engine, no
        functional time-price priority, and a security posture that
        cost ~$40K in a trivial ACH-funding exploit one day before
        the substrate-integration team arrived. The W3A substrate
        replaced that stack from the ground up over Q4 2025.
      </p>

      <h2>What the substrate delivers</h2>
      <ul>
        <li><strong>Sub-second finality</strong> via Quasar consensus — vs T+1 incumbent settlement (172,800× speed-up).</li>
        <li><strong>Threshold-MPC custody</strong> at 0.5 bps/yr vs 2-5 bps incumbent custodian rate cards.</li>
        <li><strong>FHE-confidential primitives</strong> — NAV computation, dark-pool matching, sealed-bid AP auctions — that no incumbent dark pool can match without operator-visible privacy gaps.</li>
        <li><strong>ERC-3643 / T-REX security-token layer</strong> with on-chain compliance modules — same exact contracts as the Creatrust / Luxembourg digital-securities platform.</li>
        <li><strong>Pre-Trade Compliance Gate</strong> (G-37) on every order — accredited/suitability/restriction/AML/KYC checks evaluated server-side before submission.</li>
        <li><strong>WORM-certified audit trail</strong> for FINRA 4511 / SEC 17a-4 retention; D3P-letter ready.</li>
        <li><strong>EDGAR + Blue-Sky + IRS 1099 e-file</strong> adapters auto-route filings.</li>
      </ul>

      <h2>Capital raise + valuation arithmetic</h2>
      <p>
        The member is currently subscribing a <strong>$75 million round at a $1.1 billion valuation</strong>,
        with approximately <strong>$37.5M verbal commitments</strong> (~50% soft-circled). The lead
        is Forum Markets (NASDAQ: FRMM), a publicly-traded entity continuing in
        the role from the prior round.
      </p>
      <p>
        Forward enterprise-value trajectory under the §VII trading-fee model
        (Lux IP Enforcement Memorandum, §VII):
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Users</th>
            <th>Revenue (Base ARPU $100/yr)</th>
            <th>EV (15× rev)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Stage 1</td><td>100K</td><td>$10M</td><td>$150M</td></tr>
          <tr><td>Stage 2</td><td>1M</td><td>$100M</td><td>$1.5B</td></tr>
          <tr><td>Stage 3</td><td>10M</td><td>$1B</td><td>$15B</td></tr>
          <tr><td>Stage 4</td><td>100M</td><td>$10B</td><td>$150B</td></tr>
        </tbody>
      </table>
      <p>
        Under the Premium ARPU ($200/yr) scenario at Stage 4 the venue
        clears $400B EV — putting the substrate-IP-licensor's 10%
        partnership stake at $40B and the member's own equity in the
        same multiple-of-current-round range.
      </p>

      <h2>Cost-stack delta vs incumbent venues</h2>
      <p>
        The member captures share of the <strong>$141B/yr quantifiable
        annual loss</strong> documented in the operative thesis paper —
        specifically the T+1 capital lockup ($105B/yr industry-wide),
        custody differential ($17.3B/yr), settlement-fail cost ($3.8B/yr),
        and DTCC settlement-fee repatriation ($3.65B/yr) lines. At its
        Stage-2 share of US ETF + mutual-fund flow the venue takes ≈ 0.5%
        of those flows, repatriating ≈ $700M/yr of incumbent extraction
        into validator-and-LP economics.
      </p>

      <h2>What a partnership with this member looks like</h2>
      <p>
        The W3A federation contemplates 10–50% equity participation in
        regulated-financial-entity members on a 50/50-above-documented-
        costs commercial structure. The first ATS+BD+TA member is the
        founding precedent for that partnership template; per-member
        terms scale to the size of the substrate IP the member adopts
        (LEL v1.2 / LRL-PR v1.0 / SCLA tiering).
      </p>
    </CaseStudyLayout>
  );
}
