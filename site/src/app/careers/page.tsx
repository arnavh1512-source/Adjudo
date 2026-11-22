import type { Metadata } from 'next';
import './careers.css';
import { PageHero } from '@/components/PageHero';
import { Roles } from '@/components/company/Roles';
import { roles } from '@/components/company/roles';
import { principles, site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Careers at Adjudo',
  description: 'Help build the system of record for how insurance claims get decided, in Pune and Ahmedabad.',
};

export default function Careers() {
  const count = roles.length;
  return (
    <>
      <PageHero crumbs={[{ label: 'Careers' }]} title="Build the system of record for claims." lead="A small team shipping cited, signed claim decisions into Indian TPAs and insurers.">
        <a href="#roles" className="btn btn--ink">See open roles</a>
        <a href={`mailto:${site.email.hello}`} className="btn btn--card">{site.email.hello}</a>
      </PageHero>

      <section className="section section--paper2" aria-labelledby="car-rules-title">
        <div className="container car-rules">
          <div className="car-rules__head">
            <h2 id="car-rules-title">Four rules we keep.</h2>
            <p>Small team. High bar. Direct feedback, even when shipping fast.</p>
          </div>
          <ul className="car-rules__list">
            {principles.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="roles" className="section" aria-labelledby="car-roles-title">
        <div className="container">
          <div className="head">
            <h2 id="car-roles-title">{count} open roles</h2>
            <p>We’ll write back within a week, even on a no. Refer someone and we’ll send a ₹4 lakh referral on signed offer.</p>
          </div>
          <Roles email={site.email.hello} />
        </div>
      </section>

      <section className="car-fit desk" aria-labelledby="car-fit-title">
        <div className="container car-fit__row">
          <div>
            <h2 id="car-fit-title">Don’t see a fit?</h2>
            <p className="lead">We always meet exceptional people. If your work overlaps health insurance, regulated AI, or hard infra, write to us.</p>
          </div>
          <a href={`mailto:${site.email.hello}`} className="btn btn--ink">{site.email.hello}</a>
        </div>
      </section>
    </>
  );
}
