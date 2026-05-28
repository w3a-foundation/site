import Link from 'next/link';
import { brand } from '@/lib/brand';
import { footerNav, socialLinks } from '@/lib/nav';
import { allMembers } from '@/lib/members';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-[var(--color-mute-200)] bg-[var(--color-mute-100)]">
      <div className="mx-auto max-w-[var(--container-page)] px-6 py-14">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="text-sm font-semibold tracking-tight text-[var(--color-ink)]">
              {brand.short}
            </div>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-mute-500)]">
              {brand.tagline}
            </p>
            <p className="mt-4 text-xs text-[var(--color-mute-500)]">
              <a
                href={`mailto:${brand.contactEmail}`}
                className="hover:text-[var(--color-ink)]"
              >
                {brand.contactEmail}
              </a>
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
              Site
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-mute-700)] hover:text-[var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
              Members
            </div>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
              {allMembers.map((m) => (
                <li key={m.key}>
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[var(--color-mute-700)] hover:text-[var(--color-ink)]"
                  >
                    {m.short ?? m.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)]">
              Elsewhere
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="text-[var(--color-mute-700)] hover:text-[var(--color-ink)]"
                    target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer noopener"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://${brand.docsHost}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[var(--color-mute-700)] hover:text-[var(--color-ink)]"
                >
                  {brand.docsHost}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-mute-200)] pt-6 text-xs text-[var(--color-mute-500)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            &copy; {year} {brand.name}. All rights reserved.
          </div>
          <div>
            The W3A is a federation of independent licensed entities; this site
            is informational and not an offer of securities.
          </div>
        </div>
      </div>
    </footer>
  );
}
