import type { Metadata } from 'next';
import { CaseStudyLayout } from '@/components/CaseStudyLayout';

export const metadata: Metadata = {
  title: 'Large institution — $11.5T AUM cost-of-inaction',
  description:
    'A multi-trillion-dollar asset-management franchise loses ~$32.6B/year to T+1 capital lockup, 2.5 bps custody differential, geographic latency extraction, and rebalance front-running. The W3A substrate recovers more than 90% of that arithmetically.',
};

export default function LargeInstitutionPage() {
  return (
    <CaseStudyLayout
      category="Asset-Management Franchise"
      title="Large institution — the $32.6 billion/year cost-of-inaction"
      oneLine="A multi-trillion-dollar asset-management franchise loses approximately $32.6 billion per year to the incumbent stack — T+1 capital lockup, 2.5 bps custody differential, geographic latency extraction, rebalance front-running, and DTCC settlement-fee leakage. The W3A substrate recovers more than 90% of that as arithmetic, not estimate."
      headlineMetric={{ value: '$32.6B/yr', label: 'arithmetic recovery for an $11.5T AUM manager' }}
      stats={[
        { value: '$105.0B/yr', label: 'T+1 capital lockup', detail: 'V × Δt × r/365 on $2.1T daily DTCC volume at 5% Fed Funds' },
        { value: '$17.3B/yr', label: 'custody differential', detail: '(c_trad − c_MPC) × $37T at 2-5 bps vs 0.5 bps' },
        { value: '$8.2B/yr', label: 'geographic latency extraction', detail: 'NYSE Mahwah co-located HFT capture; 500 km physical bound on W3A' },
        { value: '$200-600M/yr', label: 'per-manager rebalance front-running', detail: '5-15 bps × $100B quarterly rebalance × 4' },
        { value: '$1.44B/yr', label: 'working-capital release', detail: 'T+0 atomic settlement at 25% annual turnover' },
        { value: '172,800×', label: 'settlement speed-up', detail: 'T+1 = 86.4M ms vs Quasar finality &lt; 500 ms' },
      ]}
    >
      <h2>The incumbent-stack cost decomposition</h2>
      <p>
        For an $11.5 trillion-AUM franchise — roughly 31% of the
        US ETF + mutual-fund market on a $37 trillion denominator — the
        annual cost extracted by the incumbent settlement and custody
        infrastructure decomposes into five independent arithmetic
        lines. No double-counting; each is its own line item.
      </p>
      <table>
        <thead>
          <tr><th>Component</th><th>Pro-rata to $11.5T</th><th>Methodology</th></tr>
        </thead>
        <tbody>
          <tr><td>T+1 capital lockup</td><td>$32.6B/yr</td><td>31% × $105B industry total</td></tr>
          <tr><td>Custody differential</td><td>$2.88B/yr</td><td>($11.5T × 2.5 bps)</td></tr>
          <tr><td>Foreign latency extraction (share)</td><td>$2.54B/yr</td><td>31% × $8.2B</td></tr>
          <tr><td>Settlement-fail cost (share)</td><td>$1.18B/yr</td><td>31% × $3.8B at 0.5% fail rate</td></tr>
          <tr><td>Rebalance front-running</td><td>$200-600M/yr</td><td>5-15 bps × $100B quarterly × 4</td></tr>
          <tr><td>DTCC settlement-fee repatriation (share)</td><td>$1.13B/yr</td><td>31% × $3.65B</td></tr>
        </tbody>
      </table>
      <p>
        Sum: <strong>~$40 billion/year of quantifiable annual extraction</strong> — of
        which the T+0 capital-lockup line ($32.6B) is by far the dominant
        component. The W3A substrate eliminates the lockup arithmetic
        almost completely: T+1 with Δt = 1 day becomes Δt ≈ 7×10⁻⁴ days on
        Quasar sub-second finality.
      </p>

      <h2>How the substrate recovers it</h2>
      <ul>
        <li>
          <strong>Sub-second finality → 99.93% of the lockup loss returns.</strong>{' '}
          Daily lockup falls from $287.67M to ≈ $201,370 — annualised
          recovery $104.9B industry-wide.
        </li>
        <li>
          <strong>Threshold-MPC custody at 0.5 bps/yr.</strong> Replaces
          BNY / State Street / Citi 2-5 bps custody with a fixed
          Kubernetes-pod footprint + HSM license. Structural 2.5 bps
          delta on AUM.
        </li>
        <li>
          <strong>500 km fiber-speed lower bound</strong> at the matching
          engine eliminates foreign HFT extraction by special relativity
          applied to fiber. State-sponsored co-located HFT capture is
          physically impossible beyond the radius.
        </li>
        <li>
          <strong>FHE-confidential NAV computation</strong> removes the
          front-running surface that costs large managers 5-15 bps per
          rebalance event. Per-share NAV is the only plaintext that
          leaves the substrate; the holdings vector stays in ciphertext
          throughout the rebalance lifecycle.
        </li>
        <li>
          <strong>Atomic-DvP settlement</strong> eliminates settlement-fail
          by construction. There is no "in transit" state where a fail
          can be triggered.
        </li>
      </ul>

      <h2>The migration path</h2>
      <p>
        No incumbent franchise can replace its substrate in a single
        operational cutover. The W3A approach is to migrate
        product-by-product: tokenise a single fund's holdings under
        ERC-3643 / T-REX on the substrate; route a single asset-class
        sleeve through the W3A matching engine; bring a single
        confidential-NAV pilot product through the FHE precompile.
        Each migration locks in a portion of the cost recovery without
        risk to the rest of the book.
      </p>
      <p>
        A typical first-year migration moves 1-3% of the manager's AUM
        onto the substrate, captures the corresponding pro-rata of the
        cost-recovery, and validates the operational posture before
        broader rollout. At $11.5T AUM that 1-3% first-year migration is
        $115-345B of in-substrate AUM and an annualised recovery on the
        order of $300-900M — paying for the migration program many times
        over in year one alone.
      </p>

      <h2>The post-quantum overlay</h2>
      <p>
        Independent of the cost-stack arithmetic, the substrate's
        post-quantum security posture is paid-for today. CNSA 2.0
        mandates PQ migration by 2035. Incumbent franchises will absorb
        the cost of that migration over the 2026-2035 window;
        W3A-substrate adopters inherit it as the baseline. The
        Harvest-Now-Decrypt-Later threat against long-duration custody
        holdings is mitigated from day one of substrate adoption.
      </p>
    </CaseStudyLayout>
  );
}
