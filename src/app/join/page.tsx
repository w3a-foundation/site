import type { Metadata } from 'next';
import { JoinForm } from '@/components/JoinForm';
import { brand } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Join',
  description:
    'Apply to join the Web3 Industrial Alliance. Membership is open to chartered banks, money transmitters, broker-dealers, fund managers, crypto-asset service providers, chain teams, and infrastructure operators.',
};

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-mute-500)]">
        Membership
      </p>
      <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
        Apply to join.
      </h1>
      <p className="mt-6 text-[var(--color-mute-700)]">
        Submit the form below to begin your membership application. The
        Alliance committee acknowledges every application within five
        business days. For sensitive correspondence or to send a
        diligence pack out of band, write to{' '}
        <a
          className="underline"
          href={`mailto:${brand.membershipEmail}`}
        >
          {brand.membershipEmail}
        </a>
        .
      </p>

      <div className="mt-12">
        <JoinForm />
      </div>
    </div>
  );
}
