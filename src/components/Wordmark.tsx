import { brand } from '@/lib/brand';

interface WordmarkProps {
  variant?: 'inline' | 'stacked';
}

// Type-as-mark. Final SVG wordmark lands in public/brand/wordmark.svg
// in a future commit; until then this typographic fallback carries
// the brand consistently across the chrome.
export function Wordmark({ variant = 'inline' }: WordmarkProps) {
  if (variant === 'stacked') {
    return (
      <span className="flex flex-col leading-none">
        <span className="text-2xl font-semibold tracking-tight">
          {brand.short}
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute-500)]">
          {brand.name}
        </span>
      </span>
    );
  }
  return (
    <span className="flex items-baseline gap-2">
      <span className="text-lg font-semibold tracking-tight">
        {brand.short}
      </span>
      <span className="hidden text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)] sm:inline">
        {brand.name}
      </span>
    </span>
  );
}
