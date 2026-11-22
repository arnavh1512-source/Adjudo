'use client';

import { useId, useState, type ReactNode } from 'react';
import { SegmentedControl, SegmentedControlItem } from '@astryxdesign/core/SegmentedControl';

type Workflow = { id: string; tab: string; title: string; steps: string[]; sheet: ReactNode };

const workflows: Workflow[] = [
  {
    id: 'preauth',
    tab: 'Pre-authorization',
    title: 'Pre-authorization',
    steps: [
      'The hospital submits the pre-auth with policy, diagnosis and estimated cost.',
      'Adjudo matches it to the policy schedule, applies tariff rates and sub-limits, and returns an approval or a query.',
      'You get a cited decision, not a queue ticket.',
    ],
    sheet: (
      <div className="hc-sheet stock">
        <p className="hc-sheet__title">Pre-authorization request</p>
        <p className="hc-sheet__meta">A sample</p>
        <table>
          <tbody>
            <tr><td>Patient</td><td>Ramesh K.</td></tr>
            <tr><td>Policy no.</td><td className="fig">APOL-77…</td></tr>
            <tr><td>ICD-10</td><td className="fig">H25.1</td></tr>
            <tr><td>Estimated cost</td><td className="fig">₹1.84L</td></tr>
          </tbody>
        </table>
        <p className="hc-sheet__reply">Reply: approval or query, with the clause cited.</p>
      </div>
    ),
  },
  {
    id: 'final',
    tab: 'Cashless final bill',
    title: 'Cashless final bill',
    steps: [
      'On discharge, the hospital pushes the itemised final bill and discharge summary.',
      'Adjudo re-adjudicates against the approved pre-auth and the new line items.',
      'It flags scope creep, unbundling, room-rate overruns and tariff drift.',
    ],
    sheet: (
      <div className="hc-sheet stock">
        <p className="hc-sheet__title">Final bill, itemised</p>
        <p className="hc-sheet__meta">A sample</p>
        <table>
          <tbody>
            <tr><td>Room rent, 4 days</td><td className="fig">56,000</td></tr>
            <tr><td>Surgery and nursing</td><td className="fig">49,700</td></tr>
            <tr><td>Pharmacy</td><td className="fig">21,300</td></tr>
            <tr><td>MRI and lab tests</td><td className="fig">21,800</td></tr>
            <tr className="hc-sheet__total"><td>Billed</td><td className="fig">₹1,48,800</td></tr>
          </tbody>
        </table>
        <p className="hc-sheet__reply">Flag: room rate over the cap, §3.2(a).</p>
      </div>
    ),
  },
  {
    id: 'reimbursement',
    tab: 'Reimbursement',
    title: 'Reimbursement',
    steps: [
      'The member uploads the bill, discharge summary and investigations on the portal.',
      'Adjudo runs the full adjudication: policy match, exclusions, sub-limits, co-payment and deductions.',
      'It outputs an itemised settlement letter, ready for ops review.',
    ],
    sheet: (
      <div className="hc-sheet stock">
        <p className="hc-sheet__title">Settlement letter</p>
        <p className="hc-sheet__meta">A sample</p>
        <table>
          <tbody>
            <tr><td>Room rent cap <b>§3.2(a)</b></td><td className="fig">−24,000</td></tr>
            <tr><td>Consumables <b>§4.1</b></td><td className="fig">−7,100</td></tr>
            <tr><td>Co-payment <b>§2.4</b></td><td className="fig">−5,000</td></tr>
          </tbody>
        </table>
        <p className="hc-sheet__amount">₹1,11,700</p>
        <div className="hc-sheet__sign"><span className="pressed">Signed</span><span className="fig">814e…a26f</span></div>
      </div>
    ),
  },
];

/**
 * A Switcher: a segmented control over one area. Every workflow is in the DOM; without script all three
 * show in turn, with script only the chosen one shows.
 */
export function WorkflowSwitcher() {
  const [active, setActive] = useState(workflows[0].id);
  const uid = useId();

  return (
    <div className="hc-switch">
      <div className="hc-switch__bar astryx-scope">
        <SegmentedControl label="Workflow" value={active} onChange={setActive}>
          {workflows.map((w) => <SegmentedControlItem key={w.id} value={w.id} label={w.tab} />)}
        </SegmentedControl>
      </div>
      <div className="hc-panels">
        {workflows.map((w) => (
          <article key={w.id} id={`${uid}-${w.id}`} className={`hc-panel${w.id === active ? ' is-active' : ''}`} aria-labelledby={`${uid}-${w.id}-h`}>
            <div className="hc-panel__text">
              <h3 id={`${uid}-${w.id}-h`}>{w.title}</h3>
              <ol className="hc-steps">
                {w.steps.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </div>
            <div className="hc-panel__desk desk">{w.sheet}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
