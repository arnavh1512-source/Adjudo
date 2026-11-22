import Link from 'next/link';
import type { Metadata } from 'next';
import './home.css';
import { ClaimCard } from '@/components/ClaimCard';
import { CtaBand } from '@/components/CtaBand';
import { LearnMore } from '@/components/LearnMore';
import { Reveal } from '@/components/Reveal';
import { StatsBand } from '@/components/StatsBand';
import { IconBuilding, IconHospital, IconFlow, IconPin, IconLinkedIn, IconTarget, IconUsers, IconSpark } from '@/components/Icons';
import { compliance, founders, offices, principles, results, site, steps } from '@/content/site';

export const metadata: Metadata = {
  title: { absolute: 'Adjudo · Audit-grade AI claims adjudication for India’s TPAs and insurers' },
};

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="home-hero on-field">
        <div className="container home-hero__grid">
          <Reveal className="home-hero__text">
            <p className="section-label t-stagger-line" style={{ ['--i' as string]: 0 }}>Health claims adjudication, built in India</p>
            <h1 className="t-stagger-line" style={{ ['--i' as string]: 1 }}>Every claim decision, cited and signed.</h1>
            <p className="lead t-stagger-line" style={{ ['--i' as string]: 2 }}>Adjudo applies the policy to the hospital bill, line by line, for India’s insurers, TPAs and hospitals. No black box.</p>
            <div className="btn-row t-stagger-line" style={{ ['--i' as string]: 3 }}>
              <Link href={site.waitlistHref} className="btn">Join the waitlist</Link>
              <Link href="/about" className="btn btn--ghost-light">About Adjudo</Link>
            </div>
          </Reveal>
          <ClaimCard />
        </div>
        <div className="container">
          <ul className="trust" aria-label="Compliance posture">
            {compliance.map((c) => (<li key={c.name}><b>{c.name}</b><span>{c.status}</span></li>))}
          </ul>
        </div>
      </section>

      {/* ---------- about ---------- */}
      <section className="section" aria-labelledby="about-title">
        <div className="container split split--wide-left">
          <div>
            <p className="section-label">About Adjudo</p>
            <h2 id="about-title">We are building the system of record for how claims get decided.</h2>
            <div className="prose">
              <p>Insurance claims adjudication is one of the largest under-automated processes in healthcare. Lakhs of crores move through it every year, decided by people reading PDFs at 12 minutes a claim.</p>
              <p>We are changing that without losing what regulators require: the cited reasoning behind every decision and a signed audit trail no one can quietly edit.</p>
            </div>
            <ul className="checks about-checks">
              <li><span><b>One market, done right.</b> India’s health-claims ecosystem: insurers, TPAs and hospitals. One regulator to master.</span></li>
              <li><span><b>Two offices.</b> Engineering in Pune, ML research and go-to-market in Ahmedabad.</span></li>
              <li><span><b>Small team, high bar.</b> Forward deployment, infra, security, backend and ML staffed before sales.</span></li>
            </ul>
            <div className="btn-row about-actions">
              <Link href="/about" className="btn btn--outline">Read our story</Link>
              <LearnMore href="/careers">We are hiring</LearnMore>
            </div>
          </div>
          <aside className="glance" aria-label="Adjudo at a glance">
            <h3>Adjudo at a glance</h3>
            <dl>
              <div><dt><IconTarget /> Mission</dt><dd>Every claim decision cited and signed, for every desk that touches it.</dd></div>
              <div><dt><IconBuilding /> Headquarters</dt><dd>Pune, Maharashtra</dd></div>
              <div><dt><IconPin /> Second office</dt><dd>Ahmedabad, Gujarat</dd></div>
              <div><dt><IconUsers /> Who we serve</dt><dd>Health insurers, TPAs and hospital networks in India</dd></div>
              <div><dt><IconSpark /> Where we are</dt><dd>Paid pilots with a small cohort of payers, TPAs and hospital networks</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {/* ---------- mission and principles ---------- */}
      <section className="section section--alt" aria-labelledby="principles-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">Our mission</p>
              <h2 id="principles-title">The rules we will not break.</h2>
            </div>
            <p>A claim decision is only useful if a claims officer, a hospital and a regulator can all check it. Four principles keep ours checkable.</p>
          </div>
          <ol className="grid grid--4 principles">
            {principles.map((p, i) => (
              <li key={p.title} className="card">
                <span className="card__num num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- why now ---------- */}
      <section className="section section--field" aria-labelledby="why-title">
        <div className="container split split--wide-right">
          <div>
            <p className="section-label">Why now</p>
            <h2 id="why-title">Three things changed in the last 18 months.</h2>
            <p className="lead why-lead">Together they make something possible that was not before: a model fine-tuned on real adjudication data, held to your decision schema, running inside your VPC and audited cryptographically.</p>
          </div>
          <ol className="why-list">
            <li><b>Open-weight models got good enough.</b><span>Fine-tuned for one specialist task, they now beat general GPT-4-class models on it.</span></li>
            <li><b>Structured output became reliable.</b><span>Schema-constrained decoding makes every decision come back in your exact format.</span></li>
            <li><b>Inference got ten times cheaper.</b><span>The economics fell by an order of magnitude, so it runs on one GPU appliance if it must.</span></li>
          </ol>
        </div>
      </section>

      {/* ---------- what we do ---------- */}
      <section className="section" aria-labelledby="solutions-title">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="section-label">What we do</p>
            <h2 id="solutions-title">One engine for every desk a claim crosses.</h2>
            <p>The insurer, the TPA and the hospital see the same decision, with the same clauses behind it.</p>
          </div>
          <div className="grid grid--3">
            <article className="card card--link">
              <span className="card__icon"><IconBuilding /></span>
              <h3>For insurers</h3>
              <p>Cashless and reimbursement decisions with policy wording, NABH tariffs and NPPA caps attached, and IRDAI-grade audit on every one.</p>
              <LearnMore href="/solutions/payers">Solutions for insurers</LearnMore>
            </article>
            <article className="card card--link">
              <span className="card__icon"><IconFlow /></span>
              <h3>For TPAs</h3>
              <p>Officers triage 80 to 150 cashless requests a day. Adjudo runs every check in one pass, each one cited, so decisions hold when hospitals push back.</p>
              <LearnMore href="/solutions/tpas">Solutions for TPAs</LearnMore>
            </article>
            <article className="card card--link">
              <span className="card__icon"><IconHospital /></span>
              <h3>For hospitals</h3>
              <p>Run the bill through the same engine the TPA will use, see the deductions before submission, and defend the rest with citations.</p>
              <LearnMore href="/solutions/hospitals">Solutions for hospitals</LearnMore>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- results ---------- */}
      <section className="section section--tight section--field" aria-label="Evaluation results">
        <div className="container"><StatsBand /></div>
      </section>

      {/* ---------- how it works ---------- */}
      <section className="section section--alt" aria-labelledby="how-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">How it works</p>
              <h2 id="how-title">From inbox to settled, end to end.</h2>
            </div>
            <p>The flow your reviewers already run, with the reading, the math and the re-keying taken off their desk.</p>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="steps__n num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- proof ---------- */}
      <section className="section section--carbon" aria-labelledby="proof-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">In production</p>
              <h2 id="proof-title">Proof from payers, TPAs and hospitals.</h2>
            </div>
            <p>Results from our early deployments. Customers are not named at their request.</p>
          </div>
          <div className="grid grid--3">
            {results.map((r) => (
              <article key={r.label} className="card proof-card">
                <b className="proof-card__value num">{r.value}</b>
                <h3>{r.label}</h3>
                <p>{r.note}</p>
                <p className="proof-card__source">{r.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- leadership and offices ---------- */}
      <section className="section" aria-labelledby="team-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">Leadership</p>
              <h2 id="team-title">A small team, senior at the seams.</h2>
            </div>
            <p>Engineers who have shipped regulated infrastructure and adjudicators who have cut claims for a living.</p>
          </div>
          <div className="grid grid--4 people">
            {founders.map((f) => (
              <article key={f.name} className="card person">
                <span className="person__avatar" aria-hidden="true">{f.initials}</span>
                <h3>{f.name}</h3>
                <p>{f.title}</p>
                {f.linkedin ? (<a className="learn person__link" href={f.linkedin}><IconLinkedIn /> LinkedIn</a>) : null}
              </article>
            ))}
            {offices.map((o) => (
              <article key={o.city} className="card person person--office">
                <span className="person__avatar person__avatar--office" aria-hidden="true"><IconPin /></span>
                <h3>{o.city}</h3>
                <p>{o.role}</p>
                <p className="person__region">{o.region}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
