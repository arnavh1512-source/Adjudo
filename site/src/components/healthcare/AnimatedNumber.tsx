'use client';

import { useEffect, useRef, type CSSProperties } from 'react';

/**
 * transitions.dev #36 number subtle change: only the digits that changed cross-fade in place,
 * shifting up when the number rises and down when it falls. The first render is plain text.
 */
export function AnimatedNumber({ n, text, className }: { n: number; text: string; className?: string }) {
  const prev = useRef({ n, text });
  const p = prev.current;
  useEffect(() => { prev.current = { n, text }; });

  const changed = p.text !== text;
  const sameLength = p.text.length === text.length;
  const dir = n >= p.n ? 1 : -1;

  return (
    <span className={className}>
      <span className="visually-hidden">{text}</span>
      <span
        key={text}
        aria-hidden="true"
        className={`t-subtle-number${changed ? ' is-animating' : ''}`}
        style={{ '--subtle-dir': dir } as CSSProperties}
      >
        {[...text].map((ch, i) => {
          if (!changed || (sameLength && p.text[i] === ch)) return ch;
          return (
            <span key={i} className="t-subtle-slot">
              {sameLength ? <span className="t-subtle-old">{p.text[i]}</span> : null}
              <span className="t-subtle-new">{ch}</span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
