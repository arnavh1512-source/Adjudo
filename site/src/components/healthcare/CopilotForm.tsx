'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

const rows = [
  { label: 'Patient', value: 'Ramesh K.', filled: false },
  { label: 'Policy no.', value: 'APOL-77…', filled: true },
  { label: 'ICD-10', value: 'H25.1', filled: true },
  { label: 'Estimated cost', value: '₹1.84L', filled: true },
];

/**
 * The Copilot's portal form as a sheet. The three fields it fills resolve once, in view, with the
 * transitions.dev #30 streaming-text blur-in. Without script or with reduced motion the finished form shows.
 */
export function CopilotForm() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setInView(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setInView(true); io.disconnect(); }
    }, { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let i = 0;
  return (
    <figure ref={ref} className={`hc-form stock${inView ? ' is-in' : ''}`}>
      <p className="hc-form__title">New pre-auth</p>
      <dl className="hc-form__fields">
        {rows.map((r) => (
          <div key={r.label}>
            <dt>{r.label}</dt>
            <dd className="hc-form__value">
              {r.filled
                ? [...r.value].map((ch) => (
                    <span key={i} className="t-stream-w" style={{ '--i': i++ } as CSSProperties}>{ch}</span>
                  ))
                : r.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="hc-form__status" role="status">Filled from the patient’s documents. You review and submit.</p>
      <figcaption>portal.ihx.in/preauth/APO-100247, a sample</figcaption>
    </figure>
  );
}
