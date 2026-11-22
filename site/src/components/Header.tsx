'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { mainNav, site } from '@/content/site';
import { IconLinkedIn, IconMail, IconPin } from './Icons';

const CLOSE_MS = 150; // --dropdown-close-dur (transitions.dev #05)

/** Opens and closes a transitions.dev #05 dropdown: .is-open, then .is-closing for the softer exit. */
function useDropdown() {
  const [state, setState] = useState<'closed' | 'open' | 'closing'>('closed');
  const timer = useRef<number | undefined>(undefined);
  const open = useCallback(() => { window.clearTimeout(timer.current); setState('open'); }, []);
  const close = useCallback(() => {
    setState((s) => (s === 'open' ? 'closing' : s));
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState((s) => (s === 'closing' ? 'closed' : s)), CLOSE_MS);
  }, []);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const className = state === 'open' ? 't-dropdown is-open' : state === 'closing' ? 't-dropdown is-closing' : 't-dropdown';
  return { isOpen: state === 'open', open, close, className };
}

export function Header() {
  const pathname = usePathname();
  const solutions = useDropdown();
  const mobile = useDropdown();
  const wrap = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { solutions.close(); mobile.close(); }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { solutions.close(); mobile.close(); } };
    const onClick = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) { solutions.close(); mobile.close(); } };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); };
  }, [solutions, mobile]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <div ref={wrap} className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar__row">
          <p className="topbar__item"><IconPin /> Pune and Ahmedabad, India</p>
          <div className="topbar__end">
            <a className="topbar__item" href={`mailto:${site.email.hello}`}><IconMail /> {site.email.hello}</a>
            <a className="topbar__item" href={site.linkedin} aria-label="Adjudo on LinkedIn"><IconLinkedIn /> LinkedIn</a>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container header__row">
          <Link href="/" className="brand" aria-label="Adjudo home">
            <span className="brand__mark" aria-hidden="true">a</span>
            <span className="brand__word">adjudo</span>
          </Link>
          <nav aria-label="Main" className="mainnav">
            <ul>
              {mainNav.map((item) =>
                item.children ? (
                  <li key={item.label} className="mainnav__has-menu" onMouseEnter={solutions.open} onMouseLeave={solutions.close}>
                    <button type="button" className={`mainnav__link${isActive('/solutions') || isActive('/healthcare') ? ' is-active' : ''}`} aria-expanded={solutions.isOpen} aria-controls="menu-solutions" onClick={() => (solutions.isOpen ? solutions.close() : solutions.open())}>
                      {item.label}
                      <svg className="mainnav__caret" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6.5L8 10.5L12 6.5" /></svg>
                    </button>
                    <div id="menu-solutions" className={`mega ${solutions.className}`} data-origin="top-center">
                      <ul>
                        {item.children.map((c) => (
                          <li key={c.href}><Link href={c.href} className="mega__link"><b>{c.label}</b><span>{c.description}</span></Link></li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}><Link href={item.href} className={`mainnav__link${isActive(item.href) ? ' is-active' : ''}`} aria-current={isActive(item.href) ? 'page' : undefined}>{item.label}</Link></li>
                ),
              )}
            </ul>
          </nav>
          <div className="header__end">
            <Link href={site.waitlistHref} className="btn btn--sm header__cta">Join the waitlist</Link>
            <button type="button" className="menu-toggle" aria-expanded={mobile.isOpen} aria-controls="menu-mobile" onClick={() => (mobile.isOpen ? mobile.close() : mobile.open())}>
              <span className="visually-hidden">Menu</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">{mobile.isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
            </button>
          </div>
        </div>
        <div id="menu-mobile" className={`mobile-menu ${mobile.className}`} data-origin="top-right">
          <ul>
            <li><Link href="/">Home</Link></li>
            {mainNav.flatMap((item) => (item.children ? item.children : [item])).map((l) => (<li key={l.href}><Link href={l.href}>{l.label}</Link></li>))}
            <li><Link href={site.waitlistHref} className="btn">Join the waitlist</Link></li>
          </ul>
        </div>
      </header>
    </div>
  );
}
