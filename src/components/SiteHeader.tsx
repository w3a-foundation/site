import Link from 'next/link';
import { Wordmark } from '@/components/Wordmark';
import { primaryNav } from '@/lib/nav';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-mute-200)] bg-[var(--color-paper)]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[var(--container-page)] items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label="W3A home">
          <Wordmark />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-[var(--color-mute-700)] transition hover:bg-[var(--color-mute-100)] hover:text-[var(--color-ink)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/join"
            className="ml-2 inline-flex items-center rounded-md bg-[var(--color-ink)] px-3 py-2 text-sm font-medium text-[var(--color-paper)] transition hover:bg-[var(--color-mute-800)]"
          >
            Apply
          </Link>
        </nav>
      </div>
    </header>
  );
}
