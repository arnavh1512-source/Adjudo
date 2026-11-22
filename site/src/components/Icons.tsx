// Line icons drawn for this site (24px grid, stroke inherits currentColor).
import type { SVGProps } from 'react';

const base = { viewBox: '0 0 24 24', 'aria-hidden': true, focusable: false } as const;
type P = SVGProps<SVGSVGElement>;

export const IconShield = (p: P) => (<svg {...base} {...p}><path d="M12 3l7 3v5.5c0 4.4-3 8-7 9.5-4-1.5-7-5.1-7-9.5V6l7-3z" /><path d="M9 12l2 2 4-4.5" /></svg>);
export const IconBuilding = (p: P) => (<svg {...base} {...p}><path d="M4 20V8l6-4 6 4v12" /><path d="M16 11h4v9" /><path d="M8 10h4M8 13h4M8 16h4" /><path d="M2 20h20" /></svg>);
export const IconHospital = (p: P) => (<svg {...base} {...p}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M12 8v8M8 12h8" /></svg>);
export const IconFlow = (p: P) => (<svg {...base} {...p}><rect x="3" y="4" width="6" height="6" rx="1.5" /><rect x="15" y="14" width="6" height="6" rx="1.5" /><path d="M9 7h4a2 2 0 012 2v5" /></svg>);
export const IconDoc = (p: P) => (<svg {...base} {...p}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4" /><path d="M10 12h5M10 15h5M10 18h3" /></svg>);
export const IconCite = (p: P) => (<svg {...base} {...p}><path d="M5 5h14v10H9l-4 4z" /><path d="M9 9h6M9 12h4" /></svg>);
export const IconSeal = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="10" r="6" /><path d="M9.5 10l1.8 1.8 3.2-3.6" /><path d="M8.5 15l-1.5 6 5-2.5 5 2.5-1.5-6" /></svg>);
export const IconPortal = (p: P) => (<svg {...base} {...p}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 8h18" /><path d="M7 12h6M7 15h4" /><path d="M8 21h8" /></svg>);
export const IconChat = (p: P) => (<svg {...base} {...p}><path d="M4 5h16v11H10l-5 4v-4H4z" /><path d="M8 9h8M8 12h5" /></svg>);
export const IconServer = (p: P) => (<svg {...base} {...p}><rect x="4" y="4" width="16" height="6" rx="1.5" /><rect x="4" y="14" width="16" height="6" rx="1.5" /><path d="M8 7h.01M8 17h.01" /></svg>);
export const IconPin = (p: P) => (<svg {...base} {...p}><path d="M12 21s-6-5.6-6-11a6 6 0 1112 0c0 5.4-6 11-6 11z" /><circle cx="12" cy="10" r="2.2" /></svg>);
export const IconMail = (p: P) => (<svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg>);
export const IconLinkedIn = (p: P) => (<svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7" /></svg>);
export const IconTarget = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.8" /></svg>);
export const IconSpark = (p: P) => (<svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" /></svg>);
export const IconUsers = (p: P) => (<svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" /><circle cx="17" cy="9" r="2.4" /><path d="M16 14c2.4.2 4 1.8 4.5 4.5" /></svg>);

/** transitions.dev #24 learn-more chevron: slides and spreads into an arrow on hover */
export const LearnChevron = () => (
  <span className="t-learn-chevron" aria-hidden="true">
    <svg viewBox="0 0 16 16"><path className="t-learn-arm t-learn-arm-top" d="M6 4L10 8" /><path className="t-learn-arm t-learn-arm-bot" d="M10 8L6 12" /></svg>
  </span>
);
