import Link from 'next/link';
import type { Metadata } from 'next';
import './home.css';
import { HeroDesk } from '@/components/home/HeroDesk';
import { SystemMap } from '@/components/home/SystemMap';
import { CompanyIndex } from '@/components/home/CompanyIndex';
import { Questions } from '@/components/home/Questions';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: { absolute: 'Adjudo · Audit-grade AI claims adjudication for India’s TPAs and insurers' },
  description: 'Adjudo applies the policy to the hospital bill, cites every clause and signs every decision, for India’s insurers, TPAs and hospitals.',
};

const questions = [
  { q: 'Is it IRDAI compliant?', a: 'We meet IRDAI’s audit-trail expectations: an append-only adjudication ledger, 8-year retention, signed and hash-chained, with full prompt and model version provenance.' },
  { q: 'Do you train on our data?', a: 'No, never on customer claims by default. If you opt in to a custom fine-tune, training runs in your tenant on your data only, and the resulting weights are yours.' },
  { q: 'Can we run it on-prem?', a: 'Yes. Hospital networks bound by NABH and insurers with strict data residency rules can run Adjudo inside their VPC, on a single GPU appliance, or fully air-gapped.' },
  { q: 'How long is a typical pilot?', a: 'Thirty to sixty days. We onboard one line of business, run shadow mode for one to two weeks, then move to assist or auto, and finish with a written ROI report.' },
  { q: 'What happens when the model is unsure?', a: 'Each decision carries a calibrated confidence score. Below your threshold, the claim goes to a person with the reasoning and cited clauses already loaded.' },
];

const tiers = [
  { name: 'Pilot', for: 'First integrations', volume: 'Up to 5,000 adjudications a month', flows: 'One line of business', deploy: 'Cloud, AWS India', support: 'One business day' },
  { name: 'Growth', for: 'Scaling teams', volume: 'Unlimited', flows: 'Pre-auth, final bill and reimbursement', deploy: 'Cloud or single-tenant VPC', support: 'Four business hours' },
  { name: 'Enterprise', for: 'Insurers, TPAs, hospital chains', volume: 'Unlimited', flows: 'Everything in Growth, plus custom fine-tunes', deploy: 'On-prem appliance or air-gapped', support: 'Around the clock, one business hour' },
];

export default function Home() {
  return (
    <>
      {/* 1 · hero: the claim as paperwork on the desk */}
      <section className="hero desk" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <h1 id="hero-title">Every claim decision, cited and signed.</h1>
            <p className="lead">Adjudo applies the policy to the hospital bill, then signs the decision.</p>
            <div className="actions">
              <Link href={site.waitlistHref} className="btn btn--ink">Join the waitlist</Link>
              <a href={`mailto:${site.email.hello}?subject=Sample%20claim`} className="btn btn--card">Send a sample claim</a>
            </div>
          </div>
          <HeroDesk />
        </div>
      </section>

      {/* 2 · the map: where Adjudo sits */}
      <section className="section desk map-band" aria-labelledby="map-title">
        <div className="container">
          <div className="head">
            <h2 id="map-title">Three desks, one decision, one ledger.</h2>
            <p>Every document that moves between hospital, TPA and insurer passes through the same cited, signed decision.</p>
          </div>
          <SystemMap />
        </div>
      </section>

      {/* 3 · the company */}
      <section className="section section--paper2" aria-labelledby="company-title">
        <div className="container company">
          <div className="company__head">
            <h2 id="company-title">Built in Pune and Ahmedabad.</h2>
            <p>A small team of engineers and adjudicators building the system of record for how claims get decided.</p>
          </div>
          <CompanyIndex />
        </div>
      </section>

      {/* 4 · the evidence, on the board */}
      <section className="board evidence" aria-labelledby="evidence-title">
        <div className="container evidence__grid">
          <div>
            <p className="evidence__figure">98.94%</p>
            <h2 id="evidence-title" className="evidence__title">decision accuracy, measured on 3,234 real claims</h2>
          </div>
          <ul className="evidence__list">
            <li><b className="fig">8×</b><span>reviewer throughput</span></li>
            <li><b className="fig">−71%</b><span>pre-auth turnaround at a national TPA in Pune</span></li>
            <li><b className="fig">−9.2%</b><span>leakage caught at a Tier-1 insurer in Hyderabad</span></li>
            <li><b className="fig">100%</b><span>of decisions cited and signed</span></li>
          </ul>
        </div>
      </section>

      {/* 5 · the integration */}
      <section className="section section--l" aria-labelledby="stack-title">
        <div className="container stack">
          <div className="stack__text">
            <h2 id="stack-title">JSON in, cited decision out.</h2>
            <p className="lead">It works with IHX, Medi Assist, Vidal and TPA back-offices, over API or SFTP, and is HL7 and FHIR aware.</p>
            <dl className="stack__deploy">
              <div><dt>Cloud</dt><dd>AWS ap-south-1, India</dd></div>
              <div><dt>Single tenant</dt><dd>Your own VPC</dd></div>
              <div><dt>On-prem</dt><dd>Air-gapped, one GPU appliance</dd></div>
            </dl>
          </div>
          <figure className="stack__code stock">
            <pre className="fig"><code>{`{
  "claim_id": "100247",
  "decision": "approved_with_deductions",
  "billed": 148800,
  "approved": 111700,
  "deductions": [
    { "line": "room_rent",   "amount": 24000, "clause": "3.2(a)" },
    { "line": "consumables", "amount": 7100,  "clause": "4.1" },
    { "line": "copayment",   "amount": 5000,  "clause": "2.4" }
  ],
  "signature": {
    "alg": "HMAC-SHA256",
    "prev": "6cf5…3cbc",
    "row":  "814e…a26f"
  }
}`}</code></pre>
            <figcaption>decision_100247.json, a sample; field names are illustrative</figcaption>
          </figure>
        </div>
      </section>

      {/* 6 · pricing as a table */}
      <section className="section section--paper2" aria-labelledby="pricing-title">
        <div className="container">
          <div className="head">
            <h2 id="pricing-title">Priced per claim, not per seat.</h2>
            <p>Every engagement starts with a paid pilot. Reviewer seats are bundled; we never charge per officer.</p>
          </div>
          <div className="pricing">
            <table className="table pricing__table">
              <caption className="visually-hidden">Adjudo plans</caption>
              <thead><tr><th scope="col"><span className="visually-hidden">Plan detail</span></th>{tiers.map((t) => (<th key={t.name} scope="col" className={`pricing__plan${t.name === 'Growth' ? ' is-featured' : ''}`}>{t.name}{t.name === 'Growth' ? <span className="pricing__note">Most chosen</span> : null}</th>))}</tr></thead>
              <tbody>
                <tr><th scope="row">For</th>{tiers.map((t) => <td key={t.name} className={t.name === 'Growth' ? 'is-featured' : undefined}>{t.for}</td>)}</tr>
                <tr><th scope="row">Volume</th>{tiers.map((t) => <td key={t.name} className={t.name === 'Growth' ? 'is-featured' : undefined}>{t.volume}</td>)}</tr>
                <tr><th scope="row">Workflows</th>{tiers.map((t) => <td key={t.name} className={t.name === 'Growth' ? 'is-featured' : undefined}>{t.flows}</td>)}</tr>
                <tr><th scope="row">Deployment</th>{tiers.map((t) => <td key={t.name} className={t.name === 'Growth' ? 'is-featured' : undefined}>{t.deploy}</td>)}</tr>
                <tr><th scope="row">Support</th>{tiers.map((t) => <td key={t.name} className={t.name === 'Growth' ? 'is-featured' : undefined}>{t.support}</td>)}</tr>
              </tbody>
            </table>
            <ol className="plans" aria-label="Adjudo plans">
              {tiers.map((t) => (
                <li key={t.name} className={`plans__item${t.name === 'Growth' ? ' is-featured' : ''}`}>
                  <h3>{t.name}{t.name === 'Growth' ? <span className="pricing__note">Most chosen</span> : null}</h3>
                  <dl>
                    <div><dt>For</dt><dd>{t.for}</dd></div>
                    <div><dt>Volume</dt><dd>{t.volume}</dd></div>
                    <div><dt>Workflows</dt><dd>{t.flows}</dd></div>
                    <div><dt>Deployment</dt><dd>{t.deploy}</dd></div>
                    <div><dt>Support</dt><dd>{t.support}</dd></div>
                  </dl>
                </li>
              ))}
            </ol>
            <p className="pricing__more"><Link className="link" href="/pricing">Full plan details</Link></p>
          </div>
        </div>
      </section>

      {/* 7 · questions as rows */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container faq">
          <h2 id="faq-title">Audit, data and rollout, answered.</h2>
          <Questions items={questions} />
        </div>
      </section>

      {/* 8 · the close: the hero's action again */}
      <section className="close desk" aria-labelledby="close-title">
        <div className="container close__row">
          <div>
            <h2 id="close-title">Send us one claim.</h2>
            <p className="lead">De-identified. We adjudicate it live with you and walk through every clause.</p>
          </div>
          <div className="actions">
            <Link href={site.waitlistHref} className="btn btn--ink">Join the waitlist</Link>
            <a href={`mailto:${site.email.hello}?subject=Sample%20claim`} className="btn btn--card">Email the claim</a>
          </div>
        </div>
      </section>
    </>
  );
}
