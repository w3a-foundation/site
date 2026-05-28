'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { brand } from '@/lib/brand';

type ContributionCategory =
  | 'chain'
  | 'regulated-financial-entity'
  | 'infrastructure'
  | 'capital';

interface LicenseRow {
  jurisdiction: string;
  authority: string;
  licenseType: string;
  licenseNumber: string;
}

interface FormState {
  legalEntityName: string;
  jurisdiction: string;
  registeredOffice: string;
  contactName: string;
  contactRole: string;
  contactEmail: string;
  contactPhone: string;
  contributionCategory: ContributionCategory;
  capabilityNote: string;
  licenses: LicenseRow[];
}

const emptyLicense: LicenseRow = {
  jurisdiction: '',
  authority: '',
  licenseType: '',
  licenseNumber: '',
};

const initial: FormState = {
  legalEntityName: '',
  jurisdiction: '',
  registeredOffice: '',
  contactName: '',
  contactRole: '',
  contactEmail: '',
  contactPhone: '',
  contributionCategory: 'regulated-financial-entity',
  capabilityNote: '',
  licenses: [{ ...emptyLicense }],
};

type Status = 'idle' | 'submitting' | 'ok' | 'error';

const labelCls =
  'block text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]';
const inputCls =
  'mt-2 w-full rounded-md border border-[var(--color-mute-300)] bg-[var(--color-paper)] px-3 py-2.5 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-ink)] focus:ring-2 focus:ring-[var(--color-ink)]/15';

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className={labelCls}>
        {label}
        {required ? <span className="ml-1 text-[var(--color-ink)]">*</span> : null}
      </span>
      {children}
    </label>
  );
}

export function JoinForm() {
  const [state, setState] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function updateLicense(i: number, patch: Partial<LicenseRow>) {
    setState((s) => ({
      ...s,
      licenses: s.licenses.map((row, idx) =>
        idx === i ? { ...row, ...patch } : row,
      ),
    }));
  }

  function addLicense() {
    setState((s) => ({ ...s, licenses: [...s.licenses, { ...emptyLicense }] }));
  }

  function removeLicense(i: number) {
    setState((s) => ({
      ...s,
      licenses:
        s.licenses.length > 1
          ? s.licenses.filter((_, idx) => idx !== i)
          : s.licenses,
    }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    try {
      const res = await fetch(`${brand.apiBase}/v1/applications`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(state),
      });
      if (!res.ok) {
        const body = await res.text().catch(() => '');
        throw new Error(
          `application/v1 returned ${res.status} ${res.statusText}${
            body ? ` — ${body.slice(0, 200)}` : ''
          }`,
        );
      }
      setStatus('ok');
      setState(initial);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Submission failed.');
    }
  }

  if (status === 'ok') {
    return (
      <div className="rounded-lg border border-[var(--color-mute-200)] bg-[var(--color-mute-100)] p-10">
        <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
          Received
        </div>
        <h2 className="mt-2 font-serif text-3xl tracking-tight">
          Thank you. Your application is in review.
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--color-mute-700)]">
          The Alliance’s membership committee acknowledges every
          submission within five business days. We will reach out at the
          contact address you supplied. For urgent matters write to{' '}
          <a
            href={`mailto:${brand.membershipEmail}`}
            className="underline"
          >
            {brand.membershipEmail}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center rounded-md border border-[var(--color-mute-300)] px-4 py-2 text-sm text-[var(--color-ink)] transition hover:bg-[var(--color-paper)]"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl tracking-tight">
          Legal entity
        </legend>
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Legal entity name" required>
            <input
              required
              className={inputCls}
              value={state.legalEntityName}
              onChange={(e) => set('legalEntityName', e.target.value)}
              autoComplete="organization"
            />
          </Field>
          <Field label="Jurisdiction of incorporation" required>
            <input
              required
              className={inputCls}
              value={state.jurisdiction}
              onChange={(e) => set('jurisdiction', e.target.value)}
              placeholder="e.g. Luxembourg, Delaware, Isle of Man"
            />
          </Field>
        </div>
        <Field label="Registered office address" required>
          <textarea
            required
            className={`${inputCls} min-h-[5rem]`}
            value={state.registeredOffice}
            onChange={(e) => set('registeredOffice', e.target.value)}
            autoComplete="street-address"
          />
        </Field>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl tracking-tight">
          Primary contact
        </legend>
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Name" required>
            <input
              required
              className={inputCls}
              value={state.contactName}
              onChange={(e) => set('contactName', e.target.value)}
              autoComplete="name"
            />
          </Field>
          <Field label="Role / title" required>
            <input
              required
              className={inputCls}
              value={state.contactRole}
              onChange={(e) => set('contactRole', e.target.value)}
              autoComplete="organization-title"
            />
          </Field>
          <Field label="Email" required>
            <input
              required
              type="email"
              className={inputCls}
              value={state.contactEmail}
              onChange={(e) => set('contactEmail', e.target.value)}
              autoComplete="email"
            />
          </Field>
          <Field label="Phone">
            <input
              type="tel"
              className={inputCls}
              value={state.contactPhone}
              onChange={(e) => set('contactPhone', e.target.value)}
              autoComplete="tel"
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl tracking-tight">
          Contribution
        </legend>
        <Field label="Category" required>
          <select
            required
            className={inputCls}
            value={state.contributionCategory}
            onChange={(e) =>
              set(
                'contributionCategory',
                e.target.value as ContributionCategory,
              )
            }
          >
            <option value="chain">Chain / protocol / operator</option>
            <option value="regulated-financial-entity">
              Regulated financial entity
            </option>
            <option value="infrastructure">Infrastructure</option>
            <option value="capital">Capital</option>
          </select>
        </Field>
        <Field label="Capability summary">
          <textarea
            className={`${inputCls} min-h-[7rem]`}
            value={state.capabilityNote}
            onChange={(e) => set('capabilityNote', e.target.value)}
            placeholder="Summarise the capability surface your entity would anchor — licences held, jurisdictions covered, in-flight workstreams."
          />
        </Field>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl tracking-tight">
          License stack
        </legend>
        <p className="text-sm text-[var(--color-mute-700)]">
          One row per licence. Add as many rows as your stack requires —
          we ingest the full set on the API side.
        </p>

        <div className="space-y-4">
          {state.licenses.map((row, i) => (
            <div
              key={i}
              className="grid gap-4 rounded-md border border-[var(--color-mute-200)] bg-[var(--color-mute-100)] p-4 md:grid-cols-4"
            >
              <Field label="Jurisdiction">
                <input
                  className={inputCls}
                  value={row.jurisdiction}
                  onChange={(e) =>
                    updateLicense(i, { jurisdiction: e.target.value })
                  }
                  placeholder="US, UK, EU, IOM…"
                />
              </Field>
              <Field label="Authority">
                <input
                  className={inputCls}
                  value={row.authority}
                  onChange={(e) =>
                    updateLicense(i, { authority: e.target.value })
                  }
                  placeholder="FCA, CSSF, FINRA…"
                />
              </Field>
              <Field label="License type">
                <input
                  className={inputCls}
                  value={row.licenseType}
                  onChange={(e) =>
                    updateLicense(i, { licenseType: e.target.value })
                  }
                  placeholder="MSB, BD-ATS, CASP…"
                />
              </Field>
              <div className="flex items-end gap-2">
                <Field label="License number">
                  <input
                    className={inputCls}
                    value={row.licenseNumber}
                    onChange={(e) =>
                      updateLicense(i, { licenseNumber: e.target.value })
                    }
                  />
                </Field>
                <button
                  type="button"
                  onClick={() => removeLicense(i)}
                  disabled={state.licenses.length === 1}
                  className="mb-1 inline-flex items-center rounded-md border border-[var(--color-mute-300)] px-3 py-2 text-xs text-[var(--color-mute-700)] transition hover:border-[var(--color-ink)] hover:text-[var(--color-ink)] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Remove license row"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addLicense}
          className="inline-flex items-center rounded-md border border-[var(--color-mute-300)] px-4 py-2 text-sm text-[var(--color-ink)] transition hover:bg-[var(--color-mute-100)]"
        >
          + Add license row
        </button>
      </fieldset>

      <div className="flex flex-wrap items-center gap-4 border-t border-[var(--color-mute-200)] pt-8">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-mute-800)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Submitting…' : 'Submit application'}
        </button>
        <p className="text-xs text-[var(--color-mute-500)]">
          Submissions are encrypted in transit and reviewed under the
          Alliance’s standard membership confidentiality posture.
        </p>
        {status === 'error' && error ? (
          <p className="w-full text-sm text-red-700">{error}</p>
        ) : null}
      </div>
    </form>
  );
}
