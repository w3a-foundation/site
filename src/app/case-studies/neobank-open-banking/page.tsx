import type { Metadata } from 'next';
import { CaseStudyLayout } from '@/components/CaseStudyLayout';

export const metadata: Metadata = {
  title: 'Neo-bank running W3A end-to-end',
  description:
    'A neo-bank built on the W3A substrate ships chartered banking + payments + custody + securities + cards + FX with one engineering team where comparable incumbents run ten — the "open-banking equivalent for all global regulated PQ finance".',
};

export default function NeobankOpenBankingPage() {
  return (
    <CaseStudyLayout
      category="Neo-Bank & Open-Banking Substrate"
      title="Neo-bank — 10× smaller team for the full regulated stack"
      oneLine="A neo-bank built on the W3A substrate ships chartered banking + payments + custody + securities + cards + FX with one engineering team where comparable incumbents run ten. This is the open-banking-equivalent substrate for all global regulated post-quantum finance, vertically integrated, ready on day one."
      headlineMetric={{ value: '90%', label: 'reduction in cost & headcount' }}
      stats={[
        { value: '1 substrate', label: 'one platform for all 8 capability surfaces', detail: 'banking · MSB · acquiring · issuing · BD/TA/ATS · asset mgmt · CASP · insurance' },
        { value: '10× smaller', label: 'engineering team', detail: 'a typical neo-bank ships with 200-500 eng; W3A members ship with 20-50' },
        { value: '90%', label: 'cost reduction', detail: 'vendor consolidation + auto-compliance + no separate AML/KYC/custody vendors' },
        { value: '8 jurisdictions', label: 'live regulated coverage', detail: 'US · UK · EU · IOM · LU · SG · UAE · Horn of Africa via Alliance members' },
        { value: 'sub-second', label: 'settlement finality', detail: 'all rails — fiat, stablecoin, securities, FX — on one consensus boundary' },
        { value: 'post-quantum', label: 'by construction', detail: 'CNSA 2.0 ready today; no 2035 migration project' },
      ]}
    >
      <h2>What incumbent neo-banks have to assemble</h2>
      <p>
        Building a modern neo-bank with banking + payments + cards +
        securities + crypto requires integrating somewhere between 40
        and 80 separate vendors: a sponsor bank, a payment processor, a
        card-issuing platform, a debit-rails provider, a securities BD,
        a transfer agent, a custody platform, a KYC vendor, an AML
        vendor, a sanctions-screening vendor, a fraud-detection vendor,
        a tax-reporting vendor, a Form 1099 e-file vendor, a Form D
        filer, a blue-sky filing service, a crypto-conversion partner,
        a stablecoin issuer relationship, a corporate-actions provider,
        a proxy-distribution agent, a WORM-storage vendor, a SOC 2
        audit firm, and so on.
      </p>
      <p>
        The engineering team for that integration is 200-500 people at
        a typical neo-bank in production. The annual vendor and
        compliance cost runs into the tens of millions before
        meaningful AUM is on the books.
      </p>

      <h2>What W3A members ship with</h2>
      <p>
        The W3A substrate vertically integrates the same eight
        capability surfaces into one platform with one engineering
        team. The integrations are not optional partner-vendor
        relationships — they are first-party adapters in the substrate's
        own codebase, maintained by the Coordination Layer, deployed
        as part of the substrate's release cadence, audited under one
        SOC 2 sub-service-organisation umbrella.
      </p>
      <table>
        <thead>
          <tr><th>Capability</th><th>Incumbent path</th><th>W3A path</th></tr>
        </thead>
        <tbody>
          <tr><td>Banking ledger</td><td>Sponsor bank + middleware</td><td>Hanzo Base + member sponsor bank</td></tr>
          <tr><td>Payments + cards</td><td>Marqeta + Stripe + Lithic + Modern Treasury</td><td>14+ first-party adapters in luxfi/treasury</td></tr>
          <tr><td>KYC / AML / sanctions</td><td>Persona + Alloy + ComplyAdvantage</td><td>luxfi/amld overlay + member regulated BSA</td></tr>
          <tr><td>Securities BD / TA / ATS</td><td>Apex + Drivewealth + Folio Dynamics</td><td>NCPS via luxfi/broker northcapital adapter</td></tr>
          <tr><td>Custody</td><td>Fireblocks + BitGo + Anchorage</td><td>luxfi/mpc threshold-MPC + KMS envelope</td></tr>
          <tr><td>Tax 1099 e-file</td><td>Sovos / Tax1099 / Track1099</td><td>luxfi/captable/tax/iris adapter</td></tr>
          <tr><td>EDGAR + Blue Sky</td><td>Workiva + CSC + Cogency</td><td>luxfi/captable/edgar + bluesky adapters</td></tr>
          <tr><td>WORM retention</td><td>Smarsh + D3P letter</td><td>luxfi/transfer/worm S3-Object-Lock</td></tr>
          <tr><td>Pre-trade compliance</td><td>In-house build (5-15 FTE)</td><td>luxfi/broker/pretrade (G-37)</td></tr>
          <tr><td>Legal-process workflow</td><td>In-house build (3-8 FTE)</td><td>luxfi/transfer/legalprocess (G-08)</td></tr>
        </tbody>
      </table>

      <h2>What the 90% reduction means concretely</h2>
      <p>
        A neo-bank shipping the comparable feature surface on the W3A
        substrate:
      </p>
      <ul>
        <li><strong>Engineering team:</strong> 20-50 people (vs 200-500 incumbent).</li>
        <li><strong>Vendor cost:</strong> $0.5-2M/yr (vs $15-40M/yr incumbent).</li>
        <li><strong>Time to first GA:</strong> 6-12 months (vs 18-36 months incumbent).</li>
        <li><strong>Compliance audit cost:</strong> sub-service-organisation SOC 2 inheritance from W3A; ≈ $50-150K/yr incremental (vs $500K-$2M/yr standalone).</li>
        <li><strong>Per-customer cost-to-serve:</strong> &lt;$0.50/mo at GA (vs $5-15/mo industry).</li>
      </ul>

      <h2>The open-banking framing</h2>
      <p>
        EU PSD2 and equivalent open-banking regimes give consumers the
        right to direct their banking data and payment authorisations
        across providers. The W3A substrate is the equivalent
        primitive for the next generation: post-quantum-secure, FHE-
        confidential, decentralised at the consensus layer, non-
        custodial by default, and operating across <strong>all
        regulated financial-services capability surfaces</strong> rather
        than just retail banking.
      </p>
      <p>
        A neo-bank built on the substrate is structurally portable: its
        customers can move to another W3A member without re-onboarding
        (one KYC, one identity registry, one custody key); its
        product surface can integrate with any other member's product
        through the substrate's first-party adapters; and the entire
        operation can be relocated to a different member's regulatory
        jurisdiction by toggling the routing layer. None of this is
        possible on the incumbent stack.
      </p>
    </CaseStudyLayout>
  );
}
