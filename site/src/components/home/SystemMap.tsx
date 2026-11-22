'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef } from 'react';

type Edge = [string, string];
const edges: Edge[] = [['hosp', 'adj'], ['adj', 'tpa'], ['adj', 'ins'], ['adj', 'ledger']];

/** System map: the three desks a claim crosses, Adjudo between them, the ledger beneath. Edges are measured from the nodes. */
export function SystemMap() {
  const root = useRef<HTMLDivElement>(null);
  const svg = useRef<SVGSVGElement>(null);

  const draw = useCallback(() => {
    const r = root.current, s = svg.current;
    if (!r || !s) return;
    if (getComputedStyle(s).display === 'none') return;
    const box = r.getBoundingClientRect();
    const rect = (id: string) => r.querySelector<HTMLElement>(`[data-node="${id}"]`)!.getBoundingClientRect();
    const paths = edges.map(([a, b]) => {
      const A = rect(a), B = rect(b);
      let x1, y1, x2, y2;
      if (b === 'ledger') { x1 = A.left + A.width / 2 - box.left; y1 = A.bottom - box.top; x2 = x1; y2 = B.top - box.top; }
      else if (a === 'hosp') { x1 = A.right - box.left; y1 = B.top + B.height / 2 - box.top; x2 = B.left - box.left; y2 = y1; }
      else { x1 = A.right - box.left; y1 = A.top + A.height / 2 - box.top; x2 = B.left - box.left; y2 = B.top + B.height / 2 - box.top; }
      const mx = (x1 + x2) / 2;
      return b === 'ledger' ? `M${x1},${y1} L${x2},${y2}` : `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
    });
    s.querySelectorAll('path').forEach((p, i) => p.setAttribute('d', paths[i]));
  }, []);

  useEffect(() => {
    draw();
    const ro = new ResizeObserver(draw);
    if (root.current) ro.observe(root.current);
    document.fonts?.ready.then(draw);
    const el = root.current;
    let io: IntersectionObserver | undefined;
    if (el && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-in'); io?.disconnect(); } }, { threshold: 0.25 });
      io.observe(el);
    } else el?.classList.add('is-in');
    return () => { ro.disconnect(); io?.disconnect(); };
  }, [draw]);

  return (
    <div ref={root} className="map" aria-label="Diagram of the claim flow between hospital, Adjudo, TPA, insurer and the audit ledger">
      <svg ref={svg} className="map__edges" aria-hidden="true" focusable="false">
        {edges.map(([a, b]) => (<path key={a + b} d="" />))}
      </svg>
      <ol className="map__nodes">
        <li className="map__node stock" data-node="hosp" style={{ ['--i' as string]: 0 }}>
          <h3>Hospital network</h3>
          <p>Sends the final bill and discharge summary, and sees the deductions before it submits.</p>
          <Link className="link" href="/solutions/hospitals">For hospitals</Link>
        </li>
        <li className="map__node map__node--core board" data-node="adj" style={{ ['--i' as string]: 1 }}>
          <h3>Adjudo</h3>
          <p>Reads the policy, walks the bill line by line, cites every clause and signs the decision.</p>
        </li>
        <li className="map__node stock" data-node="tpa" style={{ ['--i' as string]: 2 }}>
          <h3>TPA</h3>
          <p>Gets a cited decision for each pre-auth. The Copilot types it into the portal.</p>
          <Link className="link" href="/solutions/tpas">For TPAs</Link>
        </li>
        <li className="map__node stock" data-node="ins" style={{ ['--i' as string]: 3 }}>
          <h3>Insurer</h3>
          <p>Pays against the decision. When it asks why, the reply comes with the clause.</p>
          <Link className="link" href="/solutions/payers">For insurers</Link>
        </li>
        <li className="map__node map__node--ledger stock" data-node="ledger" style={{ ['--i' as string]: 4 }}>
          <h3>Audit ledger</h3>
          <p>Each decision becomes a signed row chained to the one before. No one edits it quietly.</p>
          <Link className="link" href="/security">How it is secured</Link>
        </li>
      </ol>
    </div>
  );
}
