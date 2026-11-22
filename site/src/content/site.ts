// Shared site content. Every fact here comes from the current adjudoai.com (see /research/CONTENT.md).
// Do not add numbers, quotes, logos or customer names that are not in that file.

export const site = {
  name: 'AdjudoAI',
  legalName: 'AdjudoAI',
  url: 'https://www.adjudoai.com',
  tagline: 'Every claim decision, cited and signed.',
  description:
    'Audit-grade AI claims adjudication for India’s insurers, TPAs and hospitals. A deterministic engine applies the policy to the bill, cites every clause and signs every decision.',
  footerLine: 'The audit-grade claims engine for India’s TPAs, insurers and hospitals. Every decision cited and signed.',
  signoff: 'Made by hand, signed by machine.',
  email: { hello: 'hello@adjudoai.com', security: 'security@adjudoai.com', privacy: 'privacy@adjudoai.com' },
  linkedin: 'https://www.linkedin.com/company/adjudo-ai/',
  // The current site links Copilot to app.adjudoai.com/extension, which returns 404. Replace when the real URL exists.
  copilotUrl: '/healthcare#copilot',
  waitlistHref: '/contact#waitlist',
};

export type NavItem = { label: string; href: string; description?: string };

export const solutions: NavItem[] = [
  { label: 'Insurers', href: '/solutions/payers', description: 'Cashless and reimbursement decisions with IRDAI-grade audit.' },
  { label: 'TPAs', href: '/solutions/tpas', description: 'Clear the cashless queue with decisions you can defend.' },
  { label: 'Hospitals', href: '/solutions/hospitals', description: 'Catch deductions before you submit the bill.' },
  { label: 'Healthcare workflows', href: '/healthcare', description: 'Pre-auth, final bill and reimbursement, plus an ROI calculator.' },
];

export const mainNav: (NavItem & { children?: NavItem[] })[] = [
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/healthcare', children: solutions },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Security', href: '/security' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  { title: 'Solutions', links: [
    { label: 'Insurers', href: '/solutions/payers' },
    { label: 'TPAs', href: '/solutions/tpas' },
    { label: 'Hospitals', href: '/solutions/hospitals' },
    { label: 'Healthcare', href: '/healthcare' },
  ] },
  { title: 'Product', links: [
    { label: 'Copilot', href: '/healthcare#copilot' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Security', href: '/security' },
    { label: 'Waitlist', href: '/contact#waitlist' },
  ] },
  { title: 'Company', links: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/legal/privacy' },
  ] },
];

export const offices = [
  { city: 'Pune', role: 'Engineering HQ and India go-to-market', region: 'Maharashtra, India' },
  { city: 'Ahmedabad', role: 'ML research and second office', region: 'Gujarat, India' },
];

export const founders = [
  { name: 'Ashwin Vasani', initials: 'AV', title: 'Founder and CEO', linkedin: null as string | null },
  { name: 'Dr Mahesh Patel', initials: 'MP', title: 'Co-founder, clinical and insurance domain', linkedin: 'https://www.linkedin.com/in/dr-mahesh-patel-7270786/' },
];

export const evalStats = [
  { value: '98.94%', label: 'Decision accuracy' },
  { value: '3,234', label: 'Real claims evaluated' },
  { value: '8×', label: 'Reviewer throughput' },
  { value: '100%', label: 'Decisions cited and signed' },
];

export const problemStats = [
  { value: '4–6 hrs', label: 'per complex claim', note: 'Manual lookup, line-by-line review, deduction math' },
  { value: '8–14%', label: 'claims leakage', note: 'Wrong rates, missed sub-limits, duplicate billing' },
  { value: '73%', label: 'need a second look', note: 'Reviewers disagree; audit trails stay patchy' },
];

export const results = [
  { value: '−71%', label: 'Turnaround on pre-auth', note: 'Mean turnaround dropped from 4.5 hrs to 1.3 hrs; the same headcount handled 6× the cashless queue.', source: 'National TPA, Pune' },
  { value: '−9.2%', label: 'Leakage caught', note: 'Caught NPPA price breaches, unbundled procedures and missed sub-limits on about 12% of claims.', source: 'Tier-1 insurer, Hyderabad' },
  { value: '100%', label: 'Audit coverage', note: 'The IRDAI-grade HMAC-signed audit chain cleared internal compliance review on the first pass.', source: 'Hospital network, Bengaluru' },
];

export const compliance = [
  { name: 'IRDAI', status: 'Audit-grade', note: '8-year retention by default; append-only, signed and chained.' },
  { name: 'DPDP Act', status: 'Aligned', note: 'India data residency by default.' },
  { name: 'NABH-aware', status: 'Aligned', note: 'Hospital-grade safeguards; patient-data access gated and logged.' },
  { name: 'ISO 27001', status: 'In progress', note: 'Certification expected 2027.' },
];

export const principles = [
  { title: 'Real claims or it didn’t happen.', body: 'We train, test and ship on the same kind of claim a TPA officer rejects on a Tuesday afternoon. Synthetic-only is theatre.' },
  { title: 'Cited or it didn’t happen.', body: 'Every decision references the clauses it relied on. The model loses points if it skips a citation, even when right.' },
  { title: 'Signed or it didn’t happen.', body: 'Every adjudication writes a signed, append-only audit row. Tampering breaks the chain. Compliance is the foundation.' },
  { title: 'Ship to the customer’s environment.', body: 'Some customers are cloud-native insurers and TPAs. Some are NABH-bound hospital chains. We bring the same product to both.' },
];

export const steps = [
  { title: 'Drop the docs', body: 'Policy, hospital bill, discharge summary and pre-auth letter. PDFs or photos, the flow your reviewers already run.' },
  { title: 'AdjudoAI adjudicates', body: 'The engine reads the policy and walks the bill line by line, applying every rule deterministically, each field cited.' },
  { title: 'Signed decision out', body: 'Approve, query or deny with reasoning, cited clauses and a tamper-evident audit row.' },
  { title: 'Copilot fills the portal', body: 'The Copilot types the decision into the insurer or TPA portal. You review and submit, with no re-keying.' },
  { title: 'Query? Reply, cited', body: 'When the insurer raises a query, AdjudoAI drafts the response with the exact clause and document that answers it.' },
];
