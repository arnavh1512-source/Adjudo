'use client';

import { useEffect, useRef } from 'react';

/** The claim played as paperwork: the hospital's bill, the decision laid on it, the clause card tucked under, Signed pressed in.
 *  Plays once when fonts are ready and the desk is in view; the finished state shows without script or under reduced motion. */
export function HeroDesk() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const play = () => el.classList.add('is-played');
    if (!('IntersectionObserver' in window)) { play(); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { (document.fonts?.ready ?? Promise.resolve()).then(() => requestAnimationFrame(play)); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="paperwork" role="img" aria-label="A sample claim: the hospital bill of ₹1,48,800, the decision approving ₹1,12,700 with three cited deductions, signed.">
      <div className="sheet sheet--bill stock" aria-hidden="true">
        <p className="sheet__title">Final bill</p>
        <p className="sheet__meta">Claim 100247, sample hospital, Pune</p>
        <table>
          <tbody>
            <tr><td>Room rent, 4 days</td><td className="fig">56,000</td></tr>
            <tr><td>Surgery and nursing</td><td className="fig">49,700</td></tr>
            <tr><td>Pharmacy</td><td className="fig">21,300</td></tr>
            <tr><td>MRI and lab tests</td><td className="fig">21,800</td></tr>
            <tr className="total"><td>Billed</td><td className="fig">₹1,48,800</td></tr>
          </tbody>
        </table>
      </div>
      <div className="sheet sheet--letter stock" aria-hidden="true">
        <p className="sheet__title">Decision</p>
        <p className="sheet__meta">Approved with deductions</p>
        <table>
          <tbody>
            <tr><td>Room rent cap <b>§3.2(a)</b></td><td className="fig">−24,000</td></tr>
            <tr><td>Consumables <b>§4.1</b></td><td className="fig">−7,100</td></tr>
            <tr><td>Co-payment <b>§2.4</b></td><td className="fig">−5,000</td></tr>
          </tbody>
        </table>
        <p className="sheet__amount">₹1,12,700</p>
        <div className="sheet__sign"><span className="pressed">Signed</span><span className="fig">814e…a26f</span></div>
      </div>
      <div className="clause-card stock" aria-hidden="true">
        <p className="clause-card__tab">§3.2(a), cited for room rent</p>
        <p>Room rent is payable up to ₹8,000 a day for a single private room.</p>
      </div>
    </div>
  );
}
