import type { Metadata } from 'next';
import './contact.css';
import { PageHero } from '@/components/PageHero';
import { WaitlistForm } from '@/components/WaitlistForm';
import { offices, site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact AdjudoAI',
  description: 'Sales, security reports and careers, from our offices in Pune and Ahmedabad.',
};

const channels = [
  { title: 'Sales and early access', body: 'For insurers, TPAs, and hospital networks evaluating AdjudoAI.', email: site.email.hello },
  { title: 'Security and vulnerability reports', body: 'Responsible disclosure, security questionnaires, DPA requests.', email: site.email.security },
  { title: 'Careers', body: 'TPA / insurance specialists, backend and AI/ML engineers, infra, security, forward deployment, interns. See the careers page for open roles.', email: site.email.hello },
];

export default function Contact() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Contact' }]} title="Talk to us about your claims." lead="Send a de-identified sample claim. We adjudicate it live on the call." />

      <section className="section" aria-labelledby="con-channels-title">
        <div className="container con-channels">
          <h2 id="con-channels-title">Three ways to reach us.</h2>
          <ul className="con-channels__list">
            {channels.map((c) => (
              <li key={c.title}>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
                <a className="link" href={`mailto:${c.email}`}>{c.email}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--l section--paper2" aria-labelledby="con-offices-title">
        <div className="container con-offices-grid">
          <div className="con-offices__text">
            <h2 id="con-offices-title">Pune and Ahmedabad.</h2>
            <p className="lead">Engineering and research sit in two cities, close to the claims officers we build with.</p>
          </div>
          <dl className="con-offices">
            {offices.map((o) => (
              <div key={o.city}>
                <dt>{o.city}</dt>
                <dd>{o.role}</dd>
                <dd className="con-offices__region">{o.region}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="waitlist" className="section desk con-wait" aria-labelledby="con-wait-title">
        <div className="container con-wait__grid">
          <div className="con-wait__text">
            <h2 id="con-wait-title">Or join the waitlist.</h2>
            <p className="lead">We’ll reach out within a week and walk you through the product on a real claim of yours.</p>
          </div>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
