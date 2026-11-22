'use client';

import { useId, useState } from 'react';
import { roles } from './roles';

/** Open roles as accordion rows (transitions.dev #21). The closed row shows title, place, type and Apply; every description stays in the DOM. */
export function Roles({ email }: { email: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="rows car-roles">
      {roles.map((r, i) => {
        const isOpen = open === i;
        return (
          <div key={r.title} className="t-acc car-role" data-open={isOpen ? 'true' : 'false'}>
            <div className="car-role__bar">
              <h3 className="rows__q">
                <button type="button" className="t-acc-head" aria-expanded={isOpen} aria-controls={`${id}-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  <span className="car-role__id">
                    <span className="car-role__title">{r.title}</span>
                    <span className="car-role__meta"><span>{r.where}</span><span>{r.type}</span></span>
                  </span>
                  <span className="t-acc-chevron" aria-hidden="true"><svg viewBox="0 0 16 16" focusable="false"><path d="M4 6.5L8 10.5L12 6.5" /></svg></span>
                </button>
              </h3>
              <a className="link car-role__apply" href={`mailto:${email}?subject=${encodeURIComponent(`Application: ${r.subject}`)}`} aria-label={`Apply for ${r.title}`}>Apply</a>
            </div>
            <div className="t-acc-panel" id={`${id}-${i}`} role="region" aria-label={r.title}>
              <div className="t-acc-panel-inner">
                <div className="car-role__body">
                  <p className="car-role__about">{r.about}</p>
                  <div className="car-role__lists">
                    <div>
                      <h4>You</h4>
                      <ul>{r.you.map((t) => <li key={t}>{t}</li>)}</ul>
                    </div>
                    <div>
                      <h4>Nice to have</h4>
                      <ul>{r.nice.map((t) => <li key={t}>{t}</li>)}</ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
