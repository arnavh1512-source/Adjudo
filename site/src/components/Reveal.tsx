'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

/** transitions.dev #18 texts reveal: children with .t-stagger-line rise in once when the block enters view. Visible without script. */
export function Reveal({ as: Tag = 'div', className = '', children }: { as?: ElementType; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('is-shown'); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-shown'); io.disconnect(); } }, { rootMargin: '0px 0px -10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`t-stagger ${className}`}>{children}</Tag>;
}
