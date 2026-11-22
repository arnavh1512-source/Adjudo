'use client';

import { useId, useState } from 'react';

export type FaqItem = { q: string; a: string };

/** FAQ list using the transitions.dev #21 accordion (grid-rows height, blurred body, chevron flip). */
export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="t-acc" data-open={isOpen ? 'true' : 'false'}>
            <h3 style={{ font: 'inherit', margin: 0 }}>
              <button type="button" className="t-acc-head" aria-expanded={isOpen} aria-controls={`${id}-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                {item.q}
                <span className="t-acc-chevron" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M4 6.5L8 10.5L12 6.5" /></svg></span>
              </button>
            </h3>
            <div className="t-acc-panel" id={`${id}-${i}`} role="region">
              <div className="t-acc-panel-inner"><p>{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
