import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start gap-6 px-6 py-32">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-mute-500)]">
        404
      </p>
      <h1 className="font-serif text-4xl tracking-tight">Not found.</h1>
      <p className="text-[var(--color-mute-700)]">
        The page you requested does not exist on this site.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-md border border-[var(--color-mute-300)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-mute-100)]"
      >
        Back home
      </Link>
    </div>
  );
}
