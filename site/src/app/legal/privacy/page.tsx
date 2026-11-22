import type { Metadata } from 'next';
import './privacy.css';
import { PageHero } from '@/components/PageHero';
import { Rich } from '@/components/company/Rich';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Adjudo collects, uses, stores and protects information, under IRDAI, DPDP and NABH-aware practice.',
};

type Block = { p: string } | { h: string } | { ul: string[] };
type Section = { title: string; blocks: Block[] };

const intro = [
  'Adjudo AI, Inc. (“Adjudo”, “we”, “us”) operates the marketing website at adjudoai.com and provides claims-adjudication software to enterprise customers. This Policy explains what we collect on our marketing site and what happens to information you submit to us.',
  'This policy covers our marketing site and waitlist. Customer patient data is processed under a separate Data Processing Agreement (DPA) that takes precedence for that data.',
];

const sections: Section[] = [
  { title: 'Information we collect', blocks: [
    { h: 'From you, directly' },
    { ul: [
      'Waitlist form: name, email, company, role, country, volume estimate, and free-text notes you submit.',
      'Contact / sales: any information you include in email or scheduling tool requests.',
      'Careers: if you email hello@adjudoai.com, we receive your CV and cover note.',
    ] },
    { h: 'Automatically' },
    { ul: [
      'Server logs: IP, user agent, request paths, and timestamps. Retained for up to 30 days for security and abuse prevention.',
      'Analytics: page views and aggregate usage. We use privacy-preserving analytics that do not set cross-site cookies.',
    ] },
  ] },
  { title: 'How we use it', blocks: [
    { ul: [
      'To respond to your waitlist or sales inquiry.',
      'To improve the marketing site and the product based on aggregate patterns.',
      'To detect and prevent abuse (rate limits, bot blocks, fraud signals).',
    ] },
    { p: 'We do not sell your data. We do not advertise.' },
  ] },
  { title: 'Where we store it', blocks: [
    { p: 'Marketing-site data is stored on Vercel (global edge) with email notifications routed through Brevo (EU). Customer patient data is stored in AWS ap-south-1 (India) — never on the marketing-site stack.' },
  ] },
  { title: 'Sub-processors', blocks: [
    { p: 'A current list of marketing-site sub-processors is on our Security page. We notify customers of new customer-environment sub-processors via the contractual mechanism in their DPA.' },
  ] },
  { title: 'Your rights', blocks: [
    { h: 'If you are in the EU / EEA / UK (GDPR)' },
    { ul: [
      'Access, correction, erasure, portability, restriction, objection.',
      'Right to withdraw consent at any time without affecting prior processing.',
      'Right to lodge a complaint with your local supervisory authority.',
    ] },
    { h: 'If you are in India (DPDP Act)' },
    { ul: [
      'Access, correction, erasure, grievance redressal.',
      'Grievance officer: privacy@adjudoai.com.',
    ] },
  ] },
  { title: 'Patient data', blocks: [
    { p: 'The marketing site is not designed to accept patient data. Please do not submit identifiable patient information through the waitlist or contact forms. For processing of patient data, your organization and Adjudo execute a Data Processing Agreement (DPA) with NABH-aware safeguards covering the product environment.' },
  ] },
  { title: 'Security', blocks: [
    { p: 'TLS 1.3 in transit. AES-256 at rest. Per-tenant encryption keys for customer data. See our security page for the full posture.' },
  ] },
  { title: 'Retention', blocks: [
    { ul: [
      'Waitlist submissions: retained until you ask us to delete or for 24 months, whichever is shorter.',
      'Sales / careers email: retained for the lifetime of the relationship plus 24 months.',
      'Server logs: 30 days.',
      'Customer patient data: per DPA — generally 8 years for IRDAI compliance.',
    ] },
  ] },
  { title: 'Children', blocks: [
    { p: 'Adjudo is a B2B product. We do not knowingly collect data from children under 18.' },
  ] },
  { title: 'Changes', blocks: [
    { p: 'When we make material changes, we update the Effective date above and email anyone with an active waitlist or customer relationship.' },
  ] },
  { title: 'Contact', blocks: [
    { p: 'Privacy questions and rights requests: privacy@adjudoai.com.' },
  ] },
];

export default function Privacy() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Legal' }, { label: 'Privacy policy' }]} title="Privacy policy" lead="Last updated, effective May 4, 2026." />

      <div className="section leg-doc">
        <div className="container leg-doc__grid">
          <nav className="leg-toc" aria-label="Contents">
            <p className="leg-toc__title">Contents</p>
            <ol>
              {sections.map((s, i) => (
                <li key={s.title}><a href={`#s${i + 1}`}>{i + 1}. {s.title}</a></li>
              ))}
            </ol>
          </nav>

          <article className="leg-body">
            <div className="leg-intro">
              {intro.map((t) => <p key={t}>{t}</p>)}
            </div>
            {sections.map((s, i) => (
              <section key={s.title} id={`s${i + 1}`} className="leg-sec" aria-labelledby={`s${i + 1}-title`}>
                <h2 id={`s${i + 1}-title`}>{i + 1}. {s.title}</h2>
                {s.blocks.map((b, j) => {
                  if ('h' in b) return <h3 key={j}>{b.h}</h3>;
                  if ('ul' in b) return <ul key={j}>{b.ul.map((t) => <li key={t}><Rich text={t} /></li>)}</ul>;
                  return <p key={j}><Rich text={b.p} /></p>;
                })}
              </section>
            ))}
          </article>
        </div>
      </div>

      <section className="leg-close desk" aria-labelledby="leg-close-title">
        <div className="container leg-close__row">
          <h2 id="leg-close-title">Questions?</h2>
          <p className="lead">
            Email <a className="link" href={`mailto:${site.email.hello}`}>{site.email.hello}</a>. For data-protection or privacy-specific requests, email <a className="link" href={`mailto:${site.email.privacy}`}>{site.email.privacy}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
