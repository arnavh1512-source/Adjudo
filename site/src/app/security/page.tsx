import type { Metadata } from 'next';
import './security.css';
import { PageHero } from '@/components/PageHero';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Security and compliance',
  description: 'How Adjudo handles patient data: IRDAI, DPDP and NABH-aware controls, signed audit trails, encryption, sub-processors and the path to ISO 27001.',
};

const controls = [
  { title: 'Encryption everywhere', body: 'TLS 1.3 in transit. AES-256 at rest. Per-tenant encryption keys, rotated quarterly. KMS-managed (AWS KMS / HashiCorp Vault on-prem).' },
  { title: 'Signed by construction', body: 'Every adjudication writes an HMAC-SHA256-signed audit row, hash-chained to the previous row. Tampering breaks the chain. UPDATE / DELETE are revoked at the database role.' },
  { title: 'Cloud or on-prem', body: 'Hosted in AWS ap-south-1 (India). Single-tenant VPC available. NABH-bound hospitals can run a full air-gapped install on a single GPU appliance.' },
  { title: 'Least-privilege access', body: 'SSO via SAML / OIDC. Role-based access with row-level security on Postgres. All production access goes through short-lived credentials and bastion hosts. Customer patient data is never accessible to engineers without a logged JIT request.' },
  { title: 'Audited end-to-end', body: 'Every API call, every model inference, every reviewer decision is logged with prompt SHA-256 and model version. Logs retained for 8 years to meet IRDAI requirements.' },
  { title: 'No training on your claims', body: 'We never train on customer data without explicit opt-in. If you opt in to a custom fine-tune, training runs in your tenant on your data, and the weights stay yours.' },
];

const chain = [
  { n: 1, prev: 'none', hash: '6cf5…3cbc' },
  { n: 2, prev: '6cf5…3cbc', hash: '814e…a26f' },
  { n: 3, prev: '814e…a26f', hash: '62f4…0dcb' },
];

const posture = [
  { name: 'IRDAI', status: 'Audit-grade', note: '8-year retention by default. Adjudication audit trail is append-only, signed, and chained. Decision provenance is reproducible from prompt SHA-256 + model version.' },
  { name: 'DPDP Act', status: 'Aligned', note: 'India data residency by default. Customer data stays in ap-south-1 unless explicitly contracted otherwise. Consent and erasure flows supported.' },
  { name: 'NABH-aware', status: 'Aligned', note: 'Hospital-grade safeguards. Technical and administrative safeguards mapped to NABH expectations for hospital data. Patient-data access is JIT-gated and logged.' },
  { name: 'ISO 27001', status: 'In progress: certification expected 2027', note: 'Currently operating to ISO 27001 controls. ISMS controls mapped internally; observation window underway.' },
];

const vendors = [
  { vendor: 'AWS', purpose: 'Primary cloud (ap-south-1)', region: 'India' },
  { vendor: 'Lambda Labs', purpose: 'GPU compute for inference', region: 'India' },
  { vendor: 'Brevo', purpose: 'Transactional email (waitlist, alerts)', region: 'EU' },
  { vendor: 'Vercel', purpose: 'Marketing site hosting (no patient data)', region: 'Global edge' },
  { vendor: 'Cloudflare', purpose: 'DDoS / WAF', region: 'Global edge' },
];

const commitments = [
  'Email security@adjudoai.com (PGP key on request)',
  'Response within 2 business days',
  'Triage and remediation timeline shared within 7 days',
  'Please don’t access patient data you aren’t entitled to',
];

export default function Security() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Security' }]} title="Built for regulators, not just demo days." lead="Encrypted, audited and signed by construction, not by policy memo." />

      <section className="section" aria-labelledby="sec-controls-title">
        <div className="container sec-controls">
          <h2 id="sec-controls-title">Six controls, built in.</h2>
          <ul className="sec-controls__list">
            {controls.map((c) => (
              <li key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section desk sec-chain-band" aria-labelledby="sec-chain-title">
        <div className="container sec-chain">
          <div className="sec-chain__text">
            <h2 id="sec-chain-title">Change one row, break the chain.</h2>
            <p className="lead">Each row carries the hash of the row before it, so an edit anywhere shows up everywhere after.</p>
          </div>
          <figure className="sec-ledger stock">
            <ol className="sec-ledger__rows">
              {chain.map((r) => (
                <li key={r.n}>
                  <span className="sec-ledger__n">Row {r.n}</span>
                  <dl>
                    <div><dt>Previous</dt><dd className="fig">{r.prev}</dd></div>
                    <div><dt>Row hash</dt><dd className="fig">{r.hash}</dd></div>
                  </dl>
                  {r.n === chain.length ? <span className="pressed sec-ledger__signed">Signed</span> : null}
                </li>
              ))}
            </ol>
            <figcaption>Sample values. HMAC-SHA256, one row for every adjudication.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--paper2" aria-labelledby="sec-posture-title">
        <div className="container">
          <div className="head">
            <h2 id="sec-posture-title">Where we stand, exactly.</h2>
            <p>We’d rather under-promise on certifications than over-promise.</p>
          </div>
          <table className="table sec-table sec-table--posture">
            <caption className="visually-hidden">Compliance posture</caption>
            <thead><tr><th scope="col">Standard</th><th scope="col">Status</th><th scope="col">What it means</th></tr></thead>
            <tbody>
              {posture.map((p) => (
                <tr key={p.name}>
                  <th scope="row">{p.name}</th>
                  <td data-label="Status">{p.status}</td>
                  <td data-label="What it means">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="sec-sub-title">
        <div className="container sec-sub">
          <div className="sec-sub__text">
            <h2 id="sec-sub-title">Who can touch your environment.</h2>
            <p className="lead">Vendors with potential access to customer environments. Patient data never touches the marketing-site stack.</p>
          </div>
          <table className="table sec-table sec-table--vendors">
            <caption className="visually-hidden">Sub-processors</caption>
            <thead><tr><th scope="col">Vendor</th><th scope="col">Purpose</th><th scope="col">Region</th></tr></thead>
            <tbody>
              {vendors.map((v) => (
                <tr key={v.vendor}>
                  <th scope="row">{v.vendor}</th>
                  <td data-label="Purpose">{v.purpose}</td>
                  <td data-label="Region">{v.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section section--paper2" aria-labelledby="sec-vuln-title">
        <div className="container sec-vuln">
          <div className="sec-vuln__text">
            <h2 id="sec-vuln-title">Found a vulnerability? Tell us.</h2>
            <p className="lead">Security researchers, please report findings responsibly. We don’t run a paid bounty yet, but we acknowledge every valid report and credit researchers in our hall of fame.</p>
            <div className="actions sec-vuln__actions">
              <a className="btn btn--ink" href={`mailto:${site.email.security}`}>Talk to security</a>
            </div>
          </div>
          <ul className="sec-vuln__list">
            {commitments.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
