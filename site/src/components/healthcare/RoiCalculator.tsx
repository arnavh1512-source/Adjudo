'use client';

import { useId, useState, type CSSProperties } from 'react';
import { AnimatedNumber } from './AnimatedNumber';

// The model from the live page: 80% adjudication-time reduction, 4 point leakage reduction, ₹85K average ticket.
const TIME_REDUCTION = 0.8;
const LEAKAGE_REDUCTION = 0.04;
const AVG_TICKET = 85000;

const inr = (n: number) => `₹${Math.round(n).toLocaleString('en-IN')}`;
const num = (n: number) => Math.round(n).toLocaleString('en-IN');

type Field = { key: 'claims' | 'hours' | 'rate' | 'leak'; label: string; min: number; max: number; step: number; format: (v: number) => string };

const fields: Field[] = [
  { key: 'claims', label: 'Claims per month', min: 500, max: 50000, step: 500, format: (v) => num(v) },
  { key: 'hours', label: 'Reviewer hours per claim', min: 0.5, max: 8, step: 0.5, format: (v) => `${v} ${v === 1 ? 'hr' : 'hrs'}` },
  { key: 'rate', label: 'Blended hourly cost', min: 100, max: 2000, step: 50, format: (v) => `${inr(v)} an hour` },
  { key: 'leak', label: 'Current leakage', min: 0, max: 20, step: 1, format: (v) => `${v}%` },
];

export function RoiCalculator() {
  const uid = useId();
  const [v, setV] = useState({ claims: 5000, hours: 2, rate: 450, leak: 8 });

  const hoursBefore = v.claims * v.hours;
  const hoursAfter = hoursBefore * (1 - TIME_REDUCTION);
  const hoursSaved = hoursBefore - hoursAfter;
  const costSaved = hoursSaved * v.rate;
  const leakCut = Math.min(LEAKAGE_REDUCTION, v.leak / 100);
  const leakSaved = v.claims * AVG_TICKET * leakCut;
  const monthly = costSaved + leakSaved;
  const annual = monthly * 12;

  return (
    <div className="container hc-roi__grid">
      <div className="hc-roi__main">
        <h2 id="roi-title">What Adjudo saves your team.</h2>
        <p className="hc-roi__lead">Move the sliders and the numbers follow. A conservative model: 80% less adjudication time and a 4 point drop in leakage, typical of our pilots.</p>

        <output className="hc-roi__figure" htmlFor={fields.map((f) => `${uid}-${f.key}`).join(' ')}>
          <AnimatedNumber n={annual} text={inr(annual)} />
        </output>
        <p className="hc-roi__caption">estimated annual savings</p>

        <dl className="hc-roi__ledger">
          <div>
            <dt>Reviewer hours saved a month<span>From {num(hoursBefore)} to {num(hoursAfter)} hrs</span></dt>
            <dd className="fig"><AnimatedNumber n={hoursSaved} text={num(hoursSaved)} /> hrs</dd>
          </div>
          <div>
            <dt>Adjudication cost saved a month</dt>
            <dd className="fig"><AnimatedNumber n={costSaved} text={inr(costSaved)} /></dd>
          </div>
          <div>
            <dt>Leakage reduction a month<span>Caught sub-limits, tariff rates, unbundled line items</span></dt>
            <dd className="fig"><AnimatedNumber n={leakSaved} text={inr(leakSaved)} /></dd>
          </div>
          <div className="hc-roi__total">
            <dt>Monthly savings</dt>
            <dd className="fig"><AnimatedNumber n={monthly} text={inr(monthly)} /></dd>
          </div>
        </dl>

        <p className="hc-roi__note">Leakage reduction is claims times the ₹85K average ticket times 4 points, and never more than your current leakage. Hours saved is 80% of reviewer time. Annual is twelve months.</p>
        <div className="actions">
          <a className="btn btn--card" href="mailto:hello@adjudoai.com?subject=Tailored%20estimate">Get a tailored estimate</a>
        </div>
      </div>

      <form className="hc-roi__inputs stock" onSubmit={(e) => e.preventDefault()} aria-label="Your claim volumes">
        <h3>Your numbers</h3>
        {fields.map((f) => {
          const id = `${uid}-${f.key}`;
          const value = v[f.key];
          const pct = ((value - f.min) / (f.max - f.min)) * 100;
          return (
            <div key={f.key} className="hc-slider">
              <div className="hc-slider__row">
                <label htmlFor={id}>{f.label}</label>
                <span className="fig">{f.format(value)}</span>
              </div>
              <input
                id={id}
                className="hc-range"
                type="range"
                min={f.min}
                max={f.max}
                step={f.step}
                value={value}
                style={{ '--p': `${pct}%` } as CSSProperties}
                onChange={(e) => setV((s) => ({ ...s, [f.key]: Number(e.target.value) }))}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}
