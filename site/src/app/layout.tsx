import type { Metadata, Viewport } from 'next';
import './globals.css';
import '../styles/chrome.css';
import '../styles/claim.css';
import { Providers } from './providers';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Adjudo · Audit-grade AI claims adjudication for India', template: '%s · Adjudo' },
  description: site.description,
  openGraph: { siteName: 'Adjudo', type: 'website', title: 'Adjudo · Every claim decision, cited and signed', description: site.description, url: site.url },
  twitter: { card: 'summary_large_image', title: 'Adjudo · Every claim decision, cited and signed', description: site.description },
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = { themeColor: '#121a33' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@500,600&f[]=switzer@400,500&f[]=gambetta@400&display=swap" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
