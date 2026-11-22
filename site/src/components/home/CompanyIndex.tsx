import Link from 'next/link';
import { founders, offices } from '@/content/site';

/** The company record on one cotton sheet: mission, leadership and offices all visible (finish review, finding 2). */
export function CompanyIndex() {
  return (
    <div className="record stock">
      <div className="record__block">
        <p className="record__lead">Lakhs of crores move through claims adjudication every year, decided by people reading PDFs at twelve minutes a claim.</p>
        <p>We are changing that without losing what regulators require: the cited reasoning behind every decision and a signed audit trail.</p>
        <Link className="link" href="/about">Read our story</Link>
      </div>
      <div className="record__cols">
        <div className="record__block">
          <h3 className="record__label">Leadership</h3>
          <dl className="record__list">
            {founders.map((f) => (
              <div key={f.name}><dt>{f.linkedin ? <a className="link" href={f.linkedin}>{f.name}</a> : f.name}</dt><dd>{f.title}</dd></div>
            ))}
          </dl>
          <Link className="link" href="/careers">Eight roles open</Link>
        </div>
        <div className="record__block">
          <h3 className="record__label">Offices</h3>
          <dl className="record__list">
            {offices.map((o) => (<div key={o.city}><dt>{o.city}</dt><dd>{o.role}</dd></div>))}
          </dl>
          <Link className="link" href="/contact">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
