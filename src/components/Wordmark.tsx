'use client';

import { useEffect, useState } from 'react';
import { brand } from '@/lib/brand';
import { LogoMark } from './LogoMark';

interface WordmarkProps {
  variant?: 'inline' | 'stacked';
}

/**
 * Cross-fade wordmark — "Web3 Alliance" → "W3A", hover restores the full.
 *
 * Boots showing the full brand. After a short delay sets a `data-swapped`
 * attribute that flips the active label. Hover (any pointing-device hover
 * via CSS :hover) restores the full while the cursor is over the chrome.
 *
 * Both labels share one grid cell so there's no layout shift. Container
 * width anchors to the full label so the rest of the nav doesn't jump.
 */
export function Wordmark({ variant = 'inline' }: WordmarkProps) {
  const [swapped, setSwapped] = useState(false);
  const isStacked = variant === 'stacked';

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reduce ? 0 : 1200;
    const t = setTimeout(() => setSwapped(true), delay);
    return () => clearTimeout(t);
  }, []);

  const labelSize = isStacked ? 'text-2xl' : 'text-lg';

  return (
    <span className="w3a-swap group flex items-center gap-2.5" data-swapped={swapped ? 'true' : 'false'}>
      <LogoMark size={isStacked ? 36 : 26} className="text-neutral-900" />
      <span className="relative inline-grid leading-none">
        <span
          className={`w3a-full col-start-1 row-start-1 font-semibold tracking-tight ${labelSize}`}
        >
          {brand.name}
        </span>
        <span
          className={`w3a-short col-start-1 row-start-1 font-semibold tracking-tight ${labelSize}`}
          aria-hidden="true"
        >
          {brand.short}
        </span>
      </span>
    </span>
  );
}
