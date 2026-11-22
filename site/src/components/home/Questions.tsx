'use client';

import { useId, useState } from 'react';

export type Question = { q: string; a: string };

/** Questions as rows, using the transitions.dev #21 accordion. Every answer is in the DOM; closed rows collapse to zero height. */
export function Questions({ items }: { items: Question[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="rows">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="t-acc" data-open={isOpen ? 'true' : 'false'}>
            <h3 className="rows__q">
              <button type="button" className="t-acc-head" aria-expanded={isOpen} aria-controls={`${id}-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                {item.q}
                <span className="t-acc-chevron" aria-hidden="true"><svg viewBox="0 0 16 16" focusable="false"><path d="M4 6.5L8 10.5L12 6.5" /></svg></span>
              </button>
            </h3>
            <div className="t-acc-panel" id={`${id}-${i}`} role="region" aria-label={item.q}>
              <div className="t-acc-panel-inner"><p>{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
