import type { Metadata } from 'next';
import { CaseStudyLayout } from '@/components/CaseStudyLayout';

export const metadata: Metadata = {
  title: 'Fund manager tokenising $1T equity pipeline',
  description:
    'A regulated fund manager moves a $1T equity-portfolio mandate (AI cos. + resource/mining + energy) onto the W3A ERC-3643 / T-REX substrate with confidential NAV computation under FHE — eliminating the 5-15 bps per-rebalance front-running loss that costs comparable managers $200-600M/year.',
};

export default function RWAFundManagerPage() {
  return (
    <CaseStudyLayout
      category="Tokenised RWA Fund"
      title="Fund manager — $1T equity pipeline tokenised under FHE"
      oneLine="A regulated fund manager moves a $1 trillion equity-portfolio mandate spanning AI companies, resource and mining companies, and energy companies onto the W3A ERC-3643 / T-REX substrate. Confidential NAV computation under FHE eliminates the 5-15 bps per-rebalance front-running loss that costs comparable managers $200-600 million per year."
      headlineMetric={{ value: '$1T', label: 'tokenisation mandate pipeline' }}
      stats={[
        { value: '$200-600M/yr', label: 'rebalance front-running prevented', detail: '5-15 bps × $100B quarterly rebalance × 4' },
        { value: 'ERC-3643 / T-REX', label: 'on-chain security-token standard', detail: 'same suite as the existing Creatrust / Luxembourg deployment' },
        { value: '< 30 s', label: 'confidential NAV on 500 holdings', detail: '8× H100 GPU coprocessor; 215K gas per holding' },
        { value: '$15B', label: 'tokenised RWA float by 2030 (W3A share)', detail: 'against $1-3T global TAM at 1-3% share' },
        { value: 'CSSF', label: 'Luxembourg supervision', detail: 'via Alliance-member Creatrust fund manager' },
        { value: '67-of-100', label: 'threshold decrypt for per-share NAV', detail: 'cryptographic privacy, not access-control' },
      ]}
    >
      <h2>What the fund manager brings</h2>
      <p>
        The fund manager operates a multi-trillion-dollar regulated
        portfolio across three sleeves: AI companies (foundation models,
        infrastructure, applied AI), resource and mining companies
        (metals, lithium, rare earths, copper), and energy companies
        (renewables, transition fuels, grid storage). The forward
        tokenisation mandate is up to <strong>$1 trillion nominal</strong> over
        a phased 24-60-month onboarding window as listings clear
        regulatory and custodial preconditions.
      </p>
      <p>
        The manager's current portfolio operates under classical
        custody and traditional fund-administration plumbing, with a
        quarterly rebalance cadence whose visible order flow has been
        modelled to cost the manager 5-15 basis points per event in
        front-running and information-leakage extraction — a
        $200-600 million annual line item that has been treated as
        cost-of-doing-business until tokenisation became practical.
      </p>

      <h2>What the substrate delivers</h2>
      <ul>
        <li>
          <strong>ERC-3643 / T-REX security tokens</strong> per portfolio
          line item. Identity-bound transfers via on-chain identity
          registry; compliance-module-gated transfers; trusted-issuers-
          registry-attested issuance. Same exact contract suite as
          the existing Creatrust / Luxembourg digital-securities
          platform, audited and live.
        </li>
        <li>
          <strong>Confidential NAV computation under FHE.</strong> The
          per-share NAV is computed homomorphically — holdings stay as
          euint64 ciphertexts under the network threshold-FHE public
          key, prices arrive as independently-encrypted oracle
          ciphertexts so the issuer cannot manipulate inputs to the
          multiplication, and only the per-share NAV is
          threshold-decrypted at scheduled publication (67-of-100
          validator committee). Under RLWE with ≥ 2 positions the
          AUM-to-position-vector decomposition is information-
          theoretically hidden.
        </li>
        <li>
          <strong>Sealed-bid AP creation / redemption auctions.</strong>{' '}
          Every authorised-participant bid arrives as an FHE
          ciphertext; the matching algorithm runs on the ciphertexts;
          only the cleared creation/redemption event becomes plaintext
          at scheduled-decrypt. The 5-15 bps per-rebalance leakage that
          incumbents pay is removed by construction.
        </li>
        <li>
          <strong>Confidential diversification + concentration checks.</strong>{' '}
          SEC Rule 35d-1 (Names Rule, 80% in-asset-class) and
          Subchapter M Internal Revenue Code 5%/10% diversification
          limits run as FHE-on-encrypted-state — the substrate produces
          a single threshold-decrypted compliance bit per cycle without
          revealing the underlying holdings to competitors.
        </li>
      </ul>

      <h2>NAV benchmark — 8× H100 GPU coprocessor</h2>
      <table>
        <thead>
          <tr><th>Holdings</th><th>Gas cost</th><th>Wall-clock NAV</th></tr>
        </thead>
        <tbody>
          <tr><td>50</td><td>14.25M</td><td>≈ 12 s</td></tr>
          <tr><td>100</td><td>28M</td><td>≈ 22 s</td></tr>
          <tr><td>250</td><td>69.25M</td><td>≈ 55 s</td></tr>
          <tr><td>500</td><td>—</td><td>&lt; 30 s on 8× H100</td></tr>
        </tbody>
      </table>
      <p>
        Per-holding cost: <strong>≈ 215K gas (mul + add)</strong> plus a
        one-time <strong>500K gas scalar-divide</strong>. Threshold-decrypt
        of the final per-share NAV is ≈ 10K gas and completes in 2-5 s.
        At any plausible gas-price denomination the marginal cost of
        computing NAV homomorphically is <strong>seven-to-nine orders of
        magnitude less</strong> than the bps-per-event extraction that
        information leakage would otherwise represent.
      </p>

      <h2>Aggregate market shape</h2>
      <p>
        Global tokenised-RWA float reached ≈ $15B by Q1 2026. The
        Great Crossover trajectory (operative paper §2f) projects
        $1-3T by 2030 across tokenised treasuries, real estate,
        commodities, private equity, fund LP interests, fixed income,
        music + IP royalties, and the equity-portfolio category this
        manager occupies. A 1% W3A capture is $10-30B of in-substrate
        AUM; the manager's own pipeline alone is structurally
        positioned to anchor that share.
      </p>

      <h2>Migration path</h2>
      <p>
        A typical first-year onboarding tokenises 5-15% of the manager's
        portfolio (the public-traded equities, the listed funds, the
        well-defined private positions with clean cap tables). The
        remaining mandate phases in over 24-60 months as each
        underlying issuer's tokenisation preconditions clear. At each
        phase the rebalance front-running cost is removed
        proportionally, the custody cost falls from 2-5 bps to 0.5
        bps, and the operational cost-to-administer falls by an order
        of magnitude as the substrate's on-chain accounting replaces
        the legacy fund-administrator's manual reconciliation.
      </p>
    </CaseStudyLayout>
  );
}
