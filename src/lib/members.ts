// Canonical member roster. The thesis paper (lux/legal/alliance/
// sections/01-thesis.tex) is the upstream source — this module is
// the on-site rendering of that roster. When the thesis paper adds
// or removes a member, mirror the change here.

export type MemberKind = 'chain' | 'banking';

export interface Member {
  key: string;
  kind: MemberKind;
  name: string;
  short?: string;
  href: string;
  jurisdiction: string;
  capability: string;
  description: string;
}

export const foundingMembers: Member[] = [
  {
    key: 'lux',
    kind: 'chain',
    name: 'Lux Network',
    href: 'https://lux.network',
    jurisdiction: 'Global',
    capability: 'Post-quantum L1 / L2 substrate',
    description:
      'The post-quantum L1 / L2 substrate underneath every Alliance member’s product: Quasar consensus, LX DEX matching engine, FHE precompile family, threshold-MPC custody, and the ERC-3643 / T-REX security-token layer.',
  },
  {
    key: 'zoo',
    kind: 'chain',
    name: 'Zoo Network',
    short: 'Zoo Labs Foundation',
    href: 'https://zoo.ngo',
    jurisdiction: 'Global (open research network)',
    capability: 'DeAI / DeSci research network',
    description:
      'Decentralized AI and decentralized-science research network operated by Zoo Labs Foundation. Decentralized model training, decentralized inference, decentralized scientific compute, and ZIP governance.',
  },
  {
    key: 'hanzo',
    kind: 'chain',
    name: 'Hanzo',
    href: 'https://hanzo.ai',
    jurisdiction: 'Global',
    capability: 'AI infrastructure',
    description:
      'AI infrastructure stack: Hanzo Cloud, the AI Chain (ACI), the Agent SDK, the Model Context Protocol (MCP), the Jin multimodal substrate, and the AGI platform.',
  },
  {
    key: 'pars',
    kind: 'chain',
    name: 'Pars Foundation',
    short: 'Cyrus / Pars',
    href: 'https://pars.foundation',
    jurisdiction: 'Sovereign / multi-jurisdiction',
    capability: 'Sovereign-grade infrastructure & capital',
    description:
      'Sovereign-grade infrastructure partner with discretionary capital, civic-record mandate, and standing partnership across the Alliance.',
  },
  {
    key: 'osage',
    kind: 'chain',
    name: 'Osage Network',
    href: 'https://osage.network',
    jurisdiction: 'United States (tribal sovereignty)',
    capability: 'Diaspora & tribal-sovereignty network',
    description:
      'Diaspora-and-tribal-sovereignty operating network with member-bank relationships and a parallel chain federation for the Wahzhazhe diaspora.',
  },
];

export const bankingMembers: Member[] = [
  {
    key: 'ncps',
    kind: 'banking',
    name: 'North Capital Private Securities Corp.',
    short: 'NCPS',
    href: 'https://northcapital.com',
    jurisdiction: 'United States',
    capability: 'Broker-dealer · transfer agent · ATS',
    description:
      'FINRA-registered broker-dealer, SEC-registered transfer agent, SEC-registered alternative trading system, and operator of the TransactAPI rail (US securities + custody).',
  },
  {
    key: 'sfpb',
    kind: 'banking',
    name: 'SF Private Bank',
    short: 'SFPB',
    href: 'https://sfprivatebank.com',
    jurisdiction: 'United States · Canada',
    capability: 'Chartered private bank · MSB · MTL',
    description:
      'US + Canada chartered private bank, FinCEN MSB, and state-money-transmitter; operator of SF Private Pay (agent rails, ATM network, card issuance, and merchant acquiring).',
  },
  {
    key: 'avatrade',
    kind: 'banking',
    name: 'AvaTrade Ltd.',
    href: 'https://avatrade.com',
    jurisdiction: 'IE · AU · ZA · UK · JP · BVI · ADGM',
    capability: 'Multi-jurisdiction regulated brokerage',
    description:
      'Multi-jurisdiction regulated retail brokerage holding licences from the Central Bank of Ireland, ASIC, FSCA, FCA, JFSA, BVI FSC, and ADGM FSRA.',
  },
  {
    key: 'atmen',
    kind: 'banking',
    name: 'Atmen Ltd.',
    href: 'https://atmen.com',
    jurisdiction: 'United Kingdom',
    capability: 'Consumer banking & payments',
    description:
      'UK consumer banking and payments application serving the international diaspora customer base.',
  },
  {
    key: 'ssb',
    kind: 'banking',
    name: 'Salaam Somali Bank',
    short: 'SSB',
    href: 'https://salaamsomalibank.com',
    jurisdiction: 'Somalia (Horn of Africa)',
    capability: 'Chartered commercial bank · Shariah-compliant',
    description:
      'Somalia’s first privately-owned commercial bank — approximately 45% market share, SWIFT-connected, primary banker of the Somali Federal Government, full Shariah-compliant product set.',
  },
  {
    key: 'creatrust',
    kind: 'banking',
    name: 'Creatrust',
    href: 'https://creatrust.com',
    jurisdiction: 'Luxembourg (CSSF)',
    capability: 'Fund manager · digital-securities platform',
    description:
      'Luxembourg-licensed fund manager (CSSF supervision) operating the Alliance’s regulated digital-securities platform — ERC-3643 / T-REX contract suite, tokenized commodities, fund-of-funds, and fund LP interests.',
  },
  {
    key: 'cdax',
    kind: 'banking',
    name: 'CDAX Limited',
    href: 'https://cdax.io',
    jurisdiction: 'Isle of Man (IOM FSA Class 8)',
    capability: 'Money-transmission licensee',
    description:
      'Isle of Man Class 8 money-transmission licensee under the IOM Financial Services Authority.',
  },
];

export const allMembers: Member[] = [...foundingMembers, ...bankingMembers];
