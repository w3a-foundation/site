// Case-study registry. Each entry is brand-neutral by construction —
// the underlying member or institution is anonymised; the substrate
// advantage is presented as arithmetic.

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  oneLine: string;
  metric: { value: string; label: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'first-ats-bd-ta',
    category: 'Regulated US Securities Venue',
    title: 'First ATS + BD + TA member — the anonymous founding venue',
    oneLine:
      'A US-licensed ATS + broker-dealer + transfer agent runs on the W3A substrate end-to-end, takes a current $75M raise at $1.1B valuation, and projects $10B+ enterprise value at Stage 2 user scale.',
    metric: { value: '$1.1B', label: 'current round valuation' },
  },
  {
    slug: 'large-institution',
    category: 'Asset-Management Franchise',
    title: 'Large institution — $11.5T AUM cost-of-inaction',
    oneLine:
      'A multi-trillion-dollar asset-management franchise loses ~$32.6B/year to T+1 capital lockup, 2.5 bps custody differential, geographic latency extraction, and rebalance front-running. The W3A substrate removes more than 90% of that arithmetically.',
    metric: { value: '$32.6B/yr', label: 'arithmetic recovery' },
  },
  {
    slug: 'crypto-conversion-10bps',
    category: 'Vertically Integrated Conversion',
    title: 'Crypto conversion at 10 bps for institutional flow',
    oneLine:
      'A retail brokerage routing crypto-conversion flow through the W3A substrate clears at 10 bps blended take-rate — undercutting the 50-200 bps Coinbase / Kraken / Gemini retail spread and the 35-85 bps Robinhood PFOF-equivalent, while keeping LPs and custody internal to one substrate.',
    metric: { value: '10 bps', label: 'blended take-rate at scale' },
  },
  {
    slug: 'neobank-open-banking',
    category: 'Neo-Bank & Open-Banking Substrate',
    title: 'Neo-bank running W3A end-to-end — 10× smaller team',
    oneLine:
      'A neo-bank built on the W3A substrate ships chartered banking + payments + custody + securities + cards + FX with one engineering team where comparable incumbents run ten — the "open-banking equivalent for all global regulated PQ finance".',
    metric: { value: '90%', label: 'reduction in cost & headcount' },
  },
  {
    slug: 'rwa-fund-manager',
    category: 'Tokenised RWA Fund',
    title: 'Fund manager tokenising $1T equity pipeline',
    oneLine:
      'A regulated fund manager moves a $1T equity-portfolio mandate (AI cos. + resource/mining + energy) onto the W3A ERC-3643 / T-REX substrate with confidential NAV computation under FHE — eliminating the 5-15 bps per-rebalance front-running loss that costs comparable managers $200-600M/year.',
    metric: { value: '$1T', label: 'tokenisation mandate pipeline' },
  },
  {
    slug: 'global-psp-acquirer',
    category: 'Global PSP + Acquirer + Issuer',
    title: 'Global PSP — stablecoin-native, sub-second, sub-cent',
    oneLine:
      'A global PSP replaces SWIFT-correspondent-banking remittance corridors with W3A-substrate stablecoin settlement: sub-second finality, sub-cent per-transaction fees, x402-native agent-economy payments, and full ISO 20022 / FedNow / SEPA / Faster Payments interop through Alliance-member banking rails.',
    metric: { value: 'sub-cent', label: 'per-transaction settlement fee' },
  },
];
