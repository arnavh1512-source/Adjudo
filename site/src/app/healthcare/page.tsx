import Link from 'next/link';
import type { Metadata } from 'next';
import './healthcare.css';
import { PageHero } from '@/components/PageHero';
import { WorkflowSwitcher } from '@/components/healthcare/WorkflowSwitcher';
import { CopilotForm } from '@/components/healthcare/CopilotForm';
import { RoiCalculator } from '@/components/healthcare/RoiCalculator';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Healthcare workflows',
  description: 'Pre-auth, cashless final bill and reimbursement, decided with a cited clause on every line and one signed audit trail, for India’s TPAs and insurers.',
};

const modules = [
  { name: 'Engine', line: 'A deterministic knowledge-graph engine walks the policy against the bill, rule by rule. Same claim, same inputs, same number.' },
  { name: 'Audit', line: 'Every field carries its citation. Every decision writes an HMAC-signed, hash-chained audit row, tamper-evident by construction.' },
  { name: 'Copilot', line: 'A Chrome copilot reads the payer portal, drafts the pre-auth and fills the fields, so desks stop retyping.' },
  { name: 'Advisory', line: 'A policy recommendation engine that compares health policies across insurers on the IRDAI wording corpus, from the real documents, not a brochure.' },
  { name: 'Reach', line: 'IHX, Medi Assist, Vidal and TPA back-offices. HL7 and FHIR aware. JSON in, cited decision out.' },
  { name: 'Console', line: 'Ask any claim why, pull up precedent and search every past adjudication, with claim-scoped chat over your own decisions.' },
];

const compare = [
  { dim: 'Decision consistency', today: 'Varies reviewer to reviewer', now: 'Deterministic: same inputs, same answer' },
  { dim: 'Benefits and sub-limit application', today: 'Manual lookup, often missed', now: 'Automatic, every clause cited' },
  { dim: 'Audit trail', today: 'Spreadsheets and emails', now: 'HMAC-signed and hash-chained, IRDAI-grade, NABH-aware' },
  { dim: 'Multi-language documents', today: 'Reviewer translates manually', now: 'Native English and Hindi OCR and understanding' },
  { dim: 'Inter-reviewer consistency', today: 'Varies by 18 to 30%', now: 'Deterministic and cited' },
];

export default function Healthcare() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Solutions', href: '/healthcare' }, { label: 'Healthcare workflows' }]}
        title="Pre-auth to reimbursement, one signed trail."
        lead="Three workflows, one engine and one audit trail, built for India’s payers."
      >
        <Link href={site.waitlistHref} className="btn btn--ink">Join the waitlist</Link>
        <a href="#roi" className="btn btn--card">Calculate your savings</a>
      </PageHero>

      {/* 1 · the three workflows: a switcher */}
      <section className="section" aria-labelledby="hc-flows-title">
        <div className="container">
          <div className="head">
            <h2 id="hc-flows-title">Built for India’s payers.</h2>
            <p>Not a generic claims tool: trained on Indian policy schedules, hospital tariffs and the deduction logic your reviewers apply.</p>
          </div>
          <WorkflowSwitcher />
        </div>
      </section>

      {/* 2 · the six modules: an index */}
      <section className="section section--paper2" aria-labelledby="hc-modules-title">
        <div className="container">
          <div className="head">
            <h2 id="hc-modules-title">Six modules, one platform.</h2>
            <p>One engine. Every claim, defensible.</p>
          </div>
          <dl className="hc-index">
            {modules.map((m) => (
              <div key={m.name}>
                <dt>{m.name === 'Copilot' ? <a className="link" href="#copilot">{m.name}</a> : m.name}</dt>
                <dd>{m.line}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 3 · the Copilot: a split with a portal form as stationery */}
      <section id="copilot" className="section" aria-labelledby="hc-copilot-title">
        <div className="container hc-copilot">
          <div className="hc-copilot__text">
            <h2 id="hc-copilot-title">The copilot in your portal.</h2>
            <p className="lead">It docks onto the payer or TPA portal you already use, reads the claim, drafts the pre-auth from the patient’s documents and fills the fields. You review and submit.</p>
            <p>Every value is cited and every action lands on the signed audit trail. It runs in Chrome as a Manifest V3 extension.</p>
            <div className="actions">
              <Link href={site.waitlistHref} className="btn btn--ink">Request Copilot access</Link>
            </div>
          </div>
          <div className="hc-copilot__desk desk">
            <CopilotForm />
          </div>
        </div>
      </section>

      {/* 4 · before and after: a table */}
      <section className="section section--paper2" aria-labelledby="hc-compare-title">
        <div className="container">
          <div className="head">
            <h2 id="hc-compare-title">Before and after Adjudo.</h2>
            <p>The reviewer’s day, cut in half.</p>
          </div>
          <table className="table hc-compare">
            <caption className="visually-hidden">Today against working with Adjudo</caption>
            <thead>
              <tr><th scope="col">Dimension</th><th scope="col">Today</th><th scope="col">With Adjudo</th></tr>
            </thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.dim}>
                  <th scope="row">{r.dim}</th>
                  <td data-label="Today">{r.today}</td>
                  <td data-label="With Adjudo">{r.now}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5 · the ROI calculator, on the board */}
      <section id="roi" className="board hc-roi" aria-labelledby="roi-title">
        <RoiCalculator />
      </section>

      {/* 6 · the close */}
      <section className="hc-close desk" aria-labelledby="hc-close-title">
        <div className="container hc-close__row">
          <div>
            <h2 id="hc-close-title">Put Adjudo behind your claims.</h2>
            <p className="lead">A small cohort of payers, TPAs and hospital networks gets sandbox access and locked-in Year-1 pricing.</p>
          </div>
          <div className="actions">
            <Link href={site.waitlistHref} className="btn btn--ink">Join the waitlist</Link>
          </div>
        </div>
      </section>
    </>
  );
}
