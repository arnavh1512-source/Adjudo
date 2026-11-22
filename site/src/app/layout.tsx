import type { Metadata, Viewport } from 'next';
import './globals.css';
import '../styles/chrome.css';
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

export const viewport: Viewport = { themeColor: '#f6f3f0' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/general-sans-600.woff2" as="font" type="font/woff2" crossOrigin="" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Providers>
          <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
            <filter id="press"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="3" result="n" /><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.9 1.55" result="mask" /><feComposite in="SourceGraphic" in2="mask" operator="in" result="ink" /><feOffset in="SourceAlpha" dx="0.6" dy="0.8" result="o" /><feComposite in="o" in2="SourceAlpha" operator="out" result="wall" /><feFlood floodColor="currentColor" floodOpacity="0.35" /><feComposite in2="wall" operator="in" result="shade" /><feMerge><feMergeNode in="ink" /><feMergeNode in="shade" /></feMerge></filter>
          </svg>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
