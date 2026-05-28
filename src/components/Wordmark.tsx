import { brand } from '@/lib/brand';
import { LogoMark } from './LogoMark';

interface WordmarkProps {
  variant?: 'inline' | 'stacked';
  showLong?: boolean;
}

export function Wordmark({ variant = 'inline', showLong = true }: WordmarkProps) {
  if (variant === 'stacked') {
    return (
      <span className="flex items-center gap-3">
        <LogoMark size={36} className="text-neutral-900" />
        <span className="flex flex-col leading-none">
          <span className="text-2xl font-semibold tracking-tight">
            {brand.short}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-mute-500)]">
            {brand.name}
          </span>
        </span>
      </span>
    );
  }
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={26} className="text-neutral-900" />
      <span className="text-lg font-semibold tracking-tight">
        {brand.short}
      </span>
      {showLong && (
        <span className="hidden text-xs uppercase tracking-[0.16em] text-[var(--color-mute-500)] sm:inline">
          {brand.name}
        </span>
      )}
    </span>
  );
}
