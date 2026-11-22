import Link from 'next/link';
import type { ReactNode } from 'react';
import { PageHero } from '@/components/PageHero';
import { LearnMore } from '@/components/LearnMore';
import { Questions } from '@/components/home/Questions';
import { site } from '@/content/site';
import type { Audience } from './data';

/** One template for the three audience pages: hero, ruled figures, pains as rows, workflow as a split with stationery, questions, close. */
export function SolutionPage({ a, visual, caption }: { a: Audience; visual: ReactNode; caption: string }) {
  const id = a.slug;
  return (
    <>
      <PageHero crumbs={[{ label: 'Solutions', href: '/healthcare' }, { label: a.crumb }]} title={a.title} lead={a.lead}>
        {a.primary.href.startsWith('mailto:')
          ? <a href={a.primary.href} className="btn btn--ink">{a.primary.label}</a>
          : <Link href={a.primary.href} className="btn btn--ink">{a.primary.label}</Link>}
        <Link href="/pricing" className="btn btn--card">See pricing</Link>
      </PageHero>

      <section className="section--s sol-figures" aria-label="AdjudoAI in numbers">
        <div className="container">
          <ul className="sol-figs">
            {a.figures.map((f) => (
              <li key={f.label}><span className="sol-figs__value">{f.value}</span><span className="sol-figs__label">{f.label}</span></li>
            ))}
          </ul>
          <ul className="sol-also">
            {a.related.map((r) => (<li key={r.href}><LearnMore href={r.href}>{r.label}</LearnMore></li>))}
          </ul>
        </div>
      </section>

      <section className="section section--paper2" aria-labelledby={`${id}-pains`}>
        <div className="container sol-pains">
          <h2 id={`${id}-pains`}>{a.painsHead}</h2>
          <ul className="sol-rows">
            {a.pains.map((p) => (
              <li key={p.title}><h3>{p.title}</h3><p>{p.text}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section desk" aria-labelledby={`${id}-flow`}>
        <div className="container sol-flow">
          <div className="sol-flow__text">
            <h2 id={`${id}-flow`}>{a.flowHead}</h2>
            <p className="lead">{a.flowLead}</p>
            <ol className="sol-steps">
              {a.stages.map((s) => (
                <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>
              ))}
            </ol>
          </div>
          <figure className="sol-flow__visual">
            {visual}
            <figcaption>{caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby={`${id}-faq`}>
        <div className="container sol-faq">
          <h2 id={`${id}-faq`}>{a.faqHead}</h2>
          <Questions items={a.faqs} />
        </div>
      </section>

      <section className="sol-close desk" aria-labelledby={`${id}-close`}>
        <div className="container sol-close__row">
          <div>
            <h2 id={`${id}-close`}>Want to see it on a real claim?</h2>
            <p className="lead">{a.closeLine}</p>
          </div>
          <div className="actions">
            <Link href={site.waitlistHref} className="btn btn--ink">Join the waitlist</Link>
            <a href={a.closeMail} className="btn btn--card">Email the claim</a>
          </div>
        </div>
      </section>
    </>
  );
}
