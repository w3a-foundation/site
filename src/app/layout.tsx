import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { brand } from '@/lib/brand';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description:
    'The Web3 Alliance: a coordinated network of legally independent businesses operating under shared post-quantum-secure infrastructure, shared IP, distribution, capital, and a single coordination layer.',
  applicationName: brand.name,
  authors: [{ name: brand.name }],
  openGraph: {
    title: `${brand.name}`,
    description: brand.tagline,
    siteName: brand.name,
    type: 'website',
    url: `https://${brand.domain}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: brand.name,
    description: brand.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
