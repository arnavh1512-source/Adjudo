'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { founders, offices } from '@/content/site';

const tabs = [
  { id: 'mission', label: 'Mission' },
  { id: 'why', label: 'Why now' },
  { id: 'team', label: 'Team' },
  { id: 'offices', label: 'Offices' },
] as const;
type TabId = (typeof tabs)[number]['id'];

/** Records as an index: a groove control (transitions.dev #16, transform-only pill) choosing which record lies on the sheet. */
export function CompanyIndex() {
  const [active, setActive] = useState<TabId>('mission');
  const [ready, setReady] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const pill = useRef<HTMLSpanElement>(null);

  const move = useCallback((animate: boolean) => {
    const b = bar.current, p = pill.current;
    if (!b || !p) return;
    const t = b.querySelector<HTMLButtonElement>(`[data-tab="${active}"]`);
    if (!t) return;
    if (!animate) p.style.transition = 'none';
    p.style.transform = `translateX(${t.offsetLeft}px) scaleX(${t.offsetWidth / 100})`;
    if (!animate) { void p.offsetWidth; p.style.transition = ''; }
  }, [active]);

  useEffect(() => { setReady(true); }, []);
  useEffect(() => { move(ready); }, [active, ready, move]);
  useEffect(() => {
    const f = () => move(false);
    window.addEventListener('resize', f);
    document.fonts?.ready.then(f);
    return () => window.removeEventListener('resize', f);
  }, [move]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    setActive(n.id);
    bar.current?.querySelector<HTMLButtonElement>(`[data-tab="${n.id}"]`)?.focus();
  };

  const show = (id: TabId) => !ready || active === id;

  return (
    <div className="record">
      <div ref={bar} className="groove t-tabs" role="tablist" aria-label="About Adjudo">
        <span ref={pill} className="groove__pill t-tabs-pill" aria-hidden="true" />
        {tabs.map((t, i) => (
          <button key={t.id} type="button" role="tab" data-tab={t.id} id={`tab-${t.id}`} aria-controls={`panel-${t.id}`} aria-selected={active === t.id} tabIndex={active === t.id ? 0 : -1} className="groove__tab t-tab" onClick={() => setActive(t.id)} onKeyDown={(e) => onKey(e, i)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="record__sheet stock">
        <section role="tabpanel" id="panel-mission" aria-labelledby="tab-mission" hidden={!show('mission')} className="record__panel">
          <p className="record__lead">Lakhs of crores move through claims adjudication every year, decided by people reading PDFs at twelve minutes a claim.</p>
          <p>We are changing that without losing what regulators require: the cited reasoning behind every decision and a signed audit trail.</p>
          <Link className="link" href="/about">Read our story</Link>
        </section>
        <section role="tabpanel" id="panel-why" aria-labelledby="tab-why" hidden={!show('why')} className="record__panel">
          <dl className="record__list">
            <div><dt>Open-weight models</dt><dd>Fine-tuned for one specialist task, they now beat general GPT-4-class models on it.</dd></div>
            <div><dt>Structured output</dt><dd>Schema-constrained decoding returns every decision in your exact format.</dd></div>
            <div><dt>Inference cost</dt><dd>Down by an order of magnitude, so it can run on a single GPU appliance.</dd></div>
          </dl>
        </section>
        <section role="tabpanel" id="panel-team" aria-labelledby="tab-team" hidden={!show('team')} className="record__panel">
          <dl className="record__list">
            {founders.map((f) => (
              <div key={f.name}><dt>{f.linkedin ? <a className="link" href={f.linkedin}>{f.name}</a> : f.name}</dt><dd>{f.title}</dd></div>
            ))}
            <div><dt>Engineering</dt><dd>Ex-infra, ex-health backend and ML, across both offices.</dd></div>
          </dl>
          <Link className="link" href="/careers">Eight roles open</Link>
        </section>
        <section role="tabpanel" id="panel-offices" aria-labelledby="tab-offices" hidden={!show('offices')} className="record__panel">
          <dl className="record__list">
            {offices.map((o) => (<div key={o.city}><dt>{o.city}</dt><dd>{o.role}. {o.region}.</dd></div>))}
          </dl>
          <Link className="link" href="/contact">Contact us</Link>
        </section>
      </div>
    </div>
  );
}
