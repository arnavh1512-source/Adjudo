import Link from 'next/link';
import { footerNav, offices, site } from '@/content/site';
import { IconLinkedIn, IconMail } from './Icons';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <Link href="/" className="brand brand--light" aria-label="Adjudo home">
            <span className="brand__mark" aria-hidden="true">a</span>
            <span className="brand__word">adjudo</span>
          </Link>
          <p>{site.footerLine}</p>
          <ul className="footer__contact">
            <li><a href={`mailto:${site.email.hello}`}><IconMail /> {site.email.hello}</a></li>
            <li><a href={site.linkedin}><IconLinkedIn /> LinkedIn</a></li>
          </ul>
        </div>
        {footerNav.map((col) => (
          <nav key={col.title} className="footer__col" aria-label={col.title}>
            <h2>{col.title}</h2>
            <ul>{col.links.map((l) => (<li key={l.href + l.label}><Link href={l.href}>{l.label}</Link></li>))}</ul>
          </nav>
        ))}
        <div className="footer__col">
          <h2>Offices</h2>
          <ul>{offices.map((o) => (<li key={o.city}><b>{o.city}</b><span>{o.region}</span></li>))}</ul>
        </div>
      </div>
      <div className="container footer__base">
        <p>© 2026 {site.legalName}. Pune and Ahmedabad.</p>
        <p>{site.signoff}</p>
      </div>
    </footer>
  );
}
