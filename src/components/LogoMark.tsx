'use client';

/**
 * W3A LogoMark — single ring of 13 dots, slow rotation.
 *
 * 13 dots is deliberate: it's a prime — the dots do not align with
 * any cardinal axis as the ring rotates, which is what gives the
 * mark its unsettled-but-balanced quality. No inner circle, no
 * wordmark inside the SVG; the mark is the dots.
 *
 * Reduced motion respected via media query.
 */
export function LogoMark({
  size = 28,
  className = '',
  spin = true,
}: {
  size?: number;
  className?: string;
  spin?: boolean;
}) {
  const r = 13;
  const rd = 1.6;
  const cx = 16;
  const cy = 16;
  const count = 13;
  const dots = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      role="img"
      aria-label="Web3 Alliance"
      className={className}
    >
      <title>W3A</title>
      <desc>Ring of thirteen dots — the W3A mark.</desc>
      <g
        className={spin ? 'w3a-spin' : undefined}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={rd} fill="currentColor" />
        ))}
      </g>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .w3a-spin {
            animation: w3a-spin 32s linear infinite;
          }
          @keyframes w3a-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        }
      `}</style>
    </svg>
  );
}
