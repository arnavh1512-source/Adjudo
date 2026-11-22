import Link from 'next/link';
import type { Metadata } from 'next';
import './about.css';
import { PageHero } from '@/components/PageHero';
import { founders, offices, principles, site } from '@/content/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'Adjudo is building the system of record for how insurance claims get decided, for India’s insurers, TPAs and hospital networks.',
};

const facts = [
  { tab: 'One market', title: 'One market, done right', body: 'India’s health-claims ecosystem: insurers, TPAs and hospitals. One regulator to master, one core problem to solve.' },
  { tab: 'Two offices', title: 'Two offices', body: 'Pune is our engineering HQ. Ahmedabad is our second office, for ML research and go-to-market.' },
  { tab: 'High bar', title: 'Small team, high bar', body: 'We hire generalists who can ship. Forward deployment, infra, security, backend and ML were all staffed before sales.' },
];

const changes = [
  { title: 'Open-weight models got good enough', body: 'Fine-tuned for one specialist task, they now beat GPT-4-class general models on it.' },
  { title: 'Structured output became reliable', body: 'Schema-constrained decoding made structured JSON output dependable.' },
  { title: 'Inference got far cheaper', body: 'The economics fell by an order of magnitude in eighteen months.' },
];

export default function About() {
  return (
    <>
      <PageHero crumbs={[{ label: 'About' }]} title="Building the system of record for claims." lead="Insurance claims adjudication is one of the largest under-automated processes in healthcare. We are here to change that." />

      {/* the story, beside the company as an index of cards */}
      <section className="section section--first" aria-labelledby="story-title">
        <div className="container ab-story">
          <div className="ab-story__text">
            <h2 id="story-title">Twelve minutes a claim, by hand.</h2>
            <p className="lead">Lakhs of crores move through adjudication every year, decided by people reading PDFs.</p>
            <p>We are changing that without losing what regulators require: the cited reasoning behind every decision and a signed audit trail nobody can quietly edit.</p>
          </div>
          <ul className="ab-cards" aria-label="Adjudo in three facts">
            {facts.map((f, i) => (
              <li key={f.title} className="ab-card stock" style={{ ['--n' as string]: i }}>
                <span className="ab-card__tab stock" aria-hidden="true">{f.tab}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* why now, as rows */}
      <section className="section section--paper2" aria-labelledby="why-title">
        <div className="container ab-why">
          <div className="ab-why__head">
            <h2 id="why-title">Why this is possible now.</h2>
            <p>Three things changed in the last eighteen months.</p>
          </div>
          <ol className="ab-why__rows">
            {changes.map((c) => (<li key={c.title}><h3>{c.title}</h3><p>{c.body}</p></li>))}
          </ol>
          <p className="ab-why__close">Together they make something possible that was not before: a model fine-tuned on real adjudication data, held to your decision schema, running inside your VPC and audited cryptographically.</p>
        </div>
      </section>

      {/* operating principles, on the board */}
      <section className="board ab-rules" aria-labelledby="rules-title">
        <div className="container">
          <h2 id="rules-title" className="ab-rules__title">How we work.</h2>
          <ol className="ab-rules__grid">
            {principles.map((p) => (<li key={p.title}><h3>{p.title}</h3><p>{p.body}</p></li>))}
          </ol>
        </div>
      </section>

      {/* people and places */}
      <section className="section section--l" aria-labelledby="people-title">
        <div className="container ab-people">
          <h2 id="people-title">The people, and where they work.</h2>
          <div className="ab-people__cols">
            <div>
              <h3 className="ab-people__label">Leadership</h3>
              <ul className="ab-index">
                {founders.map((f) => (
                  <li key={f.name}><b>{f.linkedin ? <a className="link" href={f.linkedin}>{f.name}</a> : f.name}</b><span>{f.title}</span></li>
                ))}
                <li><b>Engineering</b><span>Ex-infra, ex-health backend and ML, across Pune and Ahmedabad</span></li>
              </ul>
            </div>
            <div>
              <h3 className="ab-people__label">Offices</h3>
              <ul className="ab-index">
                {offices.map((o) => (<li key={o.city}><b>{o.city}</b><span>{o.role}, {o.region}</span></li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* close */}
      <section className="desk ab-close" aria-labelledby="close-title">
        <div className="container ab-close__row">
          <h2 id="close-title">Want to help build it?</h2>
          <p className="lead">We are hiring across forward deployment, infra, security, backend and AI/ML, in Pune and Ahmedabad.</p>
          <div className="actions">
            <Link href="/careers#roles" className="btn btn--ink">See open roles</Link>
            <a href={`mailto:${site.email.hello}`} className="btn btn--card">Write to us</a>
          </div>
        </div>
      </section>
    </>
  );
}
