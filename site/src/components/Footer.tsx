import Link from 'next/link';
import { site } from '@/content/site';

const links = [
  { label: 'About', href: '/about' }, { label: 'Insurers', href: '/solutions/payers' }, { label: 'TPAs', href: '/solutions/tpas' },
  { label: 'Hospitals', href: '/solutions/hospitals' }, { label: 'Healthcare', href: '/healthcare' }, { label: 'Pricing', href: '/pricing' },
  { label: 'Security', href: '/security' }, { label: 'Careers', href: '/careers' }, { label: 'Contact', href: '/contact' }, { label: 'Privacy', href: '/legal/privacy' },
];

/** Colophon block: the wordmark, one paragraph with who and where, the links in a line, the legal line. */
export function Footer() {
  return (
    <footer className="colophon">
      <div className="container colophon__grid">
        <p className="wordmark wordmark--lg">adjudo</p>
        <div className="colophon__text">
          <p>Adjudo AI builds the audit-grade claims engine for India’s TPAs, insurers and hospitals. Engineering in Pune, ML research in Ahmedabad. Write to <a className="link" href={`mailto:${site.email.hello}`}>{site.email.hello}</a>, or for security matters <a className="link" href={`mailto:${site.email.security}`}>{site.email.security}</a>.</p>
          <nav aria-label="Footer">
            <ul className="colophon__links">
              {links.map((l) => (<li key={l.href}><Link href={l.href}>{l.label}</Link></li>))}
              <li><a href={site.linkedin}>LinkedIn</a></li>
            </ul>
          </nav>
          <p className="colophon__legal">© 2026 Adjudo AI. {site.signoff}</p>
        </div>
      </div>
    </footer>
  );
}
