import type { Metadata } from 'next';
import { CaseStudyLayout } from '@/components/CaseStudyLayout';

export const metadata: Metadata = {
  title: 'Global PSP — stablecoin-native, sub-second, sub-cent',
  description:
    'A global PSP replaces SWIFT-correspondent-banking remittance corridors with W3A-substrate stablecoin settlement. Sub-second finality, sub-cent per-transaction fees, x402-native agent-economy payments, and full ISO 20022 / FedNow / SEPA / Faster Payments interop through Alliance-member banking rails.',
};

export default function GlobalPSPAcquirerPage() {
  return (
    <CaseStudyLayout
      category="Global PSP + Acquirer + Issuer"
      title="Global PSP — stablecoin-native, sub-second, sub-cent"
      oneLine="A global payment service provider replaces SWIFT-correspondent-banking remittance corridors with W3A-substrate stablecoin settlement. Sub-second finality, sub-cent per-transaction fees, x402-native agent-economy payments, and full ISO 20022 / FedNow / SEPA / Faster Payments interop through Alliance-member banking rails."
      headlineMetric={{ value: 'sub-cent', label: 'per-transaction settlement fee' }}
      stats={[
        { value: '$190T/yr', label: 'global cross-border B2B flow', detail: 'addressable market for SWIFT replacement' },
        { value: '$800B/yr', label: 'cross-border retail remittance', detail: 'diaspora corridor flow, currently 2-7% all-in fees' },
        { value: '2-7%', label: 'incumbent remittance fee load', detail: 'eliminated by substrate-native settlement' },
        { value: '< 500 ms', label: 'Quasar consensus finality', detail: 'vs 2-5 day SWIFT correspondent banking' },
        { value: '$2-3T', label: '2030 stablecoin float projection', detail: 'from $250B baseline; 8-12× growth' },
        { value: 'x402 native', label: 'agent-economy payment standard', detail: 'HTTP 402 Payment Required for AI agent calls' },
      ]}
    >
      <h2>What the PSP brings</h2>
      <p>
        The PSP operates a global payment-processing footprint across
        consumer card-not-present, card-present, ACH, wire, SEPA,
        Faster Payments, FedNow, FedNow-adjacent RTP, mobile-money
        corridors (M-Pesa, MTN MoMo, Airtel Money), and the
        agent-economy x402 surface. Annual processing volume is in
        the multi-trillion-dollar range; net take-rate compresses on
        cross-border flow due to the SWIFT-correspondent-banking
        intermediation cost.
      </p>

      <h2>What the substrate delivers</h2>
      <ul>
        <li>
          <strong>Stablecoin settlement</strong> as the substrate-native
          payment primitive. The PSP's cross-border flow clears on
          USDC / USDT / USDL / Alliance-issued dollar-denominated
          stablecoins at sub-second finality on Quasar consensus.
          Counterparty-bank settlement happens at the substrate layer,
          not through SWIFT correspondent-banking relationships.
        </li>
        <li>
          <strong>ISO 20022 message conversion</strong> via Alliance-member
          regulated banking rails. The PSP receives ISO 20022 message
          on the legacy side, converts to substrate-native settlement
          internally, and the receiving counterparty bank receives the
          ISO 20022 equivalent on its legacy side. The legacy
          counterparty does not need to know the substrate exists.
        </li>
        <li>
          <strong>Sub-cent per-transaction settlement</strong>: the
          substrate validator-fee economy clears at fractions of a
          cent per transaction. Comparable SWIFT correspondent-banking
          all-in cost is $15-50 per cross-border transaction at
          retail scale.
        </li>
        <li>
          <strong>x402 native rails</strong> for the agent economy:
          per-request micropayments for AI agent calls, denominated
          in stablecoin, clearing at the substrate's validator-fee
          rate. Sub-cent cost matches the agent's economic shape;
          incumbent rails cannot serve this customer at all.
        </li>
        <li>
          <strong>Cross-routing into the Alliance member ecosystem</strong>:
          mobile-money corridors via SSB and member-bank participations
          for Horn-of-Africa and African diaspora flow; FedNow / RTP /
          ACH / wire via SFPB; UK Faster Payments via Atmen; EU SEPA
          via Creatrust / Luxembourg counterparts. One PSP integration
          unlocks the federation's entire banking footprint.
        </li>
      </ul>

      <h2>Cross-border remittance corridors</h2>
      <p>
        Retail cross-border remittance flow ($800B/yr globally) currently
        clears at 2-7% all-in fees through correspondent-banking
        intermediaries — a deadweight cost of $16-56B annually extracted
        from the diaspora-to-home-country flow. The W3A substrate
        eliminates that load:
      </p>
      <table>
        <thead>
          <tr><th>Corridor</th><th>Incumbent all-in</th><th>W3A substrate</th><th>Savings on $1K send</th></tr>
        </thead>
        <tbody>
          <tr><td>US → Somalia (SSB)</td><td>5-7%</td><td>&lt; 0.2%</td><td>$48-68</td></tr>
          <tr><td>US → Kenya (M-Pesa)</td><td>4-6%</td><td>&lt; 0.2%</td><td>$38-58</td></tr>
          <tr><td>US → Mexico</td><td>3-5%</td><td>&lt; 0.2%</td><td>$28-48</td></tr>
          <tr><td>US → Philippines</td><td>3-5%</td><td>&lt; 0.2%</td><td>$28-48</td></tr>
          <tr><td>UK → Nigeria</td><td>4-6%</td><td>&lt; 0.2%</td><td>£38-58 equiv.</td></tr>
        </tbody>
      </table>

      <h2>B2B cross-border flow</h2>
      <p>
        The $190T/yr global cross-border B2B flow today clears via
        SWIFT correspondent-banking with multi-day settlement, multiple
        intermediary banks, and operational risk at every hop. The W3A
        substrate clears the same flow with one consensus boundary, no
        intermediary banks, and sub-second finality. Even a 1% capture
        of that flow is $1.9T/yr of substrate-native cross-border
        settlement volume — and the structural cost stack at sub-cent
        per transaction makes the platform fee economics work at
        any capture rate.
      </p>

      <h2>The agent-economy opportunity</h2>
      <p>
        x402 is the HTTP-native payment standard for AI agent calls:
        an HTTP 402 Payment Required response carries a signed payment
        authorisation that the client (typically an agent) attaches
        on retry. The economics — per-request micropayments at
        sub-cent denomination, sub-second clearing, programmatic
        identity — are categorically outside what incumbent payment
        rails can serve. The W3A substrate is x402-native: every agent
        in the economy can pay every other agent and every service
        through the substrate at the substrate's validator-fee rate,
        with the Alliance's regulated banking rails as the fiat
        off-ramp when the agent's operator needs to extract.
      </p>
    </CaseStudyLayout>
  );
}
