import Link from 'next/link';
import type { ReactNode } from 'react';

type Crumb = { label: string; href?: string };

/** Inner-page hero, Banner posture: breadcrumbs, the head, one sentence, actions. The first section shows above the fold. */
export function PageHero({ crumbs, title, lead, children }: { crumbs: Crumb[]; title: ReactNode; lead?: ReactNode; children?: ReactNode }) {
  return (
    <section className="page-hero desk">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            {crumbs.map((c) => (<li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>))}
          </ol>
        </nav>
        <h1>{title}</h1>
        {lead ? <p className="lead page-hero__lead">{lead}</p> : null}
        {children ? <div className="actions page-hero__actions">{children}</div> : null}
      </div>
    </section>
  );
}
