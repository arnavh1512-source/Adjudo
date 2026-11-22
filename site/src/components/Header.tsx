'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { mainNav, site } from '@/content/site';

const CLOSE_MS = 150; // transitions.dev #05 --dropdown-close-dur

/** transitions.dev #05 menu dropdown: .is-open, then .is-closing for the softer exit. */
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
  const cls = state === 'open' ? 't-dropdown is-open' : state === 'closing' ? 't-dropdown is-closing' : 't-dropdown';
  return { isOpen: state === 'open', open, close, cls };
}

export function Header() {
  const pathname = usePathname();
  const menu = useDropdown();
  const mobile = useDropdown();
  const root = useRef<HTMLElement>(null);

  useEffect(() => { menu.close(); mobile.close(); }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { menu.close(); mobile.close(); } };
    const click = (e: MouseEvent) => { if (root.current && !root.current.contains(e.target as Node)) { menu.close(); mobile.close(); } };
    document.addEventListener('keydown', key);
    document.addEventListener('click', click);
    return () => { document.removeEventListener('keydown', key); document.removeEventListener('click', click); };
  }, [menu, mobile]);

  const active = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header ref={root} className="site-header">
      <p className="banner">
        <span>Paid pilots are open for a small cohort of payers, TPAs and hospital networks.</span>{' '}
        <Link href="/pricing" className="banner__link">See pilot terms</Link>
      </p>
      <div className="bar">
        <div className="container bar__row">
          <Link href="/" className="wordmark" aria-label="Adjudo home">adjudo</Link>
          <nav aria-label="Main" className="bar__nav">
            <ul>
              {mainNav.map((item) =>
                item.children ? (
                  <li key={item.label} className="bar__menu" onMouseEnter={menu.open} onMouseLeave={menu.close}>
                    <button type="button" className={`bar__link${active('/solutions') || active('/healthcare') ? ' is-active' : ''}`} aria-expanded={menu.isOpen} aria-controls="menu-solutions" onClick={() => (menu.isOpen ? menu.close() : menu.open())}>
                      {item.label}
                      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M4 6.5L8 10.5L12 6.5" /></svg>
                    </button>
                    <div id="menu-solutions" className={`dropdown stock ${menu.cls}`} data-origin="top-center">
                      <ul>
                        {item.children.map((c) => (
                          <li key={c.href}><Link href={c.href} className="dropdown__item"><b>{c.label}</b><span>{c.description}</span></Link></li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}><Link href={item.href} className={`bar__link${active(item.href) ? ' is-active' : ''}`} aria-current={active(item.href) ? 'page' : undefined}>{item.label}</Link></li>
                ),
              )}
            </ul>
          </nav>
          <Link href={site.waitlistHref} className="btn btn--ink btn--sm bar__cta">Join the waitlist</Link>
          <button type="button" className="bar__toggle" aria-expanded={mobile.isOpen} aria-controls="menu-mobile" onClick={() => (mobile.isOpen ? mobile.close() : mobile.open())}>
            {mobile.isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div id="menu-mobile" className={`mobile stock ${mobile.cls}`} data-origin="top-right">
          <ul>
            <li><Link href="/">Home</Link></li>
            {mainNav.flatMap((i) => (i.children ? i.children : [i])).map((l) => (<li key={l.href}><Link href={l.href}>{l.label}</Link></li>))}
          </ul>
          <Link href={site.waitlistHref} className="btn btn--ink">Join the waitlist</Link>
        </div>
      </div>
    </header>
  );
}
