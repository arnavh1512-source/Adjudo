import Link from 'next/link';
import type { Metadata } from 'next';
import './pricing.css';
import { PageHero } from '@/components/PageHero';
import { Plans } from '@/components/pricing/Plans';
import { Questions } from '@/components/home/Questions';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Pilot, Growth and Enterprise plans for Indian insurers, TPAs and hospital networks. Pricing scales with volume and deployment, and every engagement starts with a paid pilot.',
};

const questions = [
  { q: 'Do you charge per claim or per seat?', a: 'Both, depending on tier. Pilot is a flat platform fee. Growth and Enterprise blend a platform fee with per-adjudication pricing that decreases with volume. Reviewer console seats are bundled; we don’t charge per officer.' },
  { q: 'How long is a typical pilot?', a: 'Thirty to sixty days. We onboard one line of business, run shadow mode for one to two weeks (decisions reviewed but not enforced), then move to assist or auto. We guarantee a written ROI report at the end.' },
  { q: 'Can we run on-prem?', a: 'Yes. Indian hospital networks bound by NABH and insurers with strict data residency rules can run Adjudo entirely inside their VPC, on a single GPU appliance, or fully air-gapped. The product is the same.' },
  { q: 'What about IRDAI, DPDP and NABH?', a: 'IRDAI: the signed audit trail meets the 8-year retention requirement out of the box. DPDP: India data residency is the default. NABH-aware safeguards for hospital deployments, with a DPA on Growth and Enterprise. See the Security page for details.' },
  { q: 'Do you train on our data?', a: 'No, never on customer claims by default. If you opt in to a custom fine-tune, training runs in your tenant on your data only, and the resulting weights are yours.' },
];

export default function Pricing() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Pricing' }]}
        title="Priced per claim, not per seat."
        lead="Pricing scales with volume. Every engagement starts with a paid pilot."
      />

      <section className="pr-sec" aria-labelledby="pr-plans-title">
        <div className="container">
          <h2 id="pr-plans-title" className="visually-hidden">Plans</h2>
          <Plans />
        </div>
      </section>

      <section className="section section--paper2" aria-labelledby="pr-faq-title">
        <div className="container pr-faq">
          <h2 id="pr-faq-title">Pricing questions, answered.</h2>
          <Questions items={questions} />
        </div>
      </section>

      <section className="pr-close desk" aria-labelledby="pr-close-title">
        <div className="container pr-close__row">
          <div>
            <h2 id="pr-close-title">Still figuring out fit?</h2>
            <p className="lead">Send us a de-identified sample claim. We adjudicate it live and walk you through the decision.</p>
          </div>
          <div className="actions">
            <Link href="/contact" className="btn btn--ink">Talk to us</Link>
            <a href={`mailto:${site.email.hello}?subject=Sample%20claim`} className="btn btn--card">Email the claim</a>
          </div>
        </div>
      </section>
    </>
  );
}
