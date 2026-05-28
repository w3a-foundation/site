'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const eyebrowSlide = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.18,
    },
  },
};

const wordRise = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  },
});

const HEADLINE = [
  'Post-quantum',
  'financial',
  'services,',
  'engineered',
  'as a',
  'single',
  'federation',
  'from day',
  'one.',
];

export function HeroAnimated() {
  return (
    <section className="border-b border-[var(--color-mute-200)]">
      <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:py-32">
        <motion.p
          variants={eyebrowSlide}
          initial="hidden"
          animate="show"
          className="text-xs uppercase tracking-[0.22em] text-[var(--color-mute-500)]"
        >
          Web3 Alliance
        </motion.p>

        <motion.h1
          variants={containerStagger}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-[var(--color-ink)] md:text-6xl"
        >
          {HEADLINE.map((word, i) => (
            <motion.span
              key={i}
              variants={wordRise}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-2xl text-lg text-[var(--color-mute-700)]"
        >
          The Web3 Alliance is a coordinated network of legally independent
          businesses operating under shared post-quantum-secure infrastructure,
          shared IP, distribution, capital, and a single coordination layer —
          assembling the horizontal-integration shape of the largest incumbent
          franchises with a materially better cost stack, a categorically better
          privacy model, and a security posture matched to the NIST CNSA-2.0
          PQ-by-2035 horizon.
        </motion.p>

        <motion.div
          variants={fadeUp(1.15)}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            href="/join"
            className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Apply for membership
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-md border border-[var(--color-mute-300)] bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-[var(--color-mute-100)]"
          >
            Read the thesis
          </Link>
          <Link
            href="/papers"
            className="inline-flex items-center rounded-md border border-[var(--color-mute-300)] bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-[var(--color-mute-100)]"
          >
            White paper
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
