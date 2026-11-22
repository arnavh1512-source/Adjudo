import Link from 'next/link';
import type { ReactNode } from 'react';

type Crumb = { label: string; href?: string };

/** Classic inner-page title banner: breadcrumbs, headline, one line, optional actions. */
export function PageHero({ crumbs, title, lead, children }: { crumbs: Crumb[]; title: ReactNode; lead?: ReactNode; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            {crumbs.map((c) => (<li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>))}
          </ol>
        </nav>
        <h1>{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
        {children ? <div className="btn-row">{children}</div> : null}
      </div>
    </section>
  );
}
