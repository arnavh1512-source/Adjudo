import type { Question } from '@/components/home/Questions';

export type Audience = {
  slug: 'payers' | 'tpas' | 'hospitals';
  crumb: string;
  title: string;
  lead: string;
  primary: { label: string; href: string };
  metaTitle: string;
  metaDescription: string;
  figures: { value: string; label: string }[];
  related: { label: string; href: string }[];
  painsHead: string;
  pains: { title: string; text: string }[];
  flowHead: string;
  flowLead: string;
  stages: { title: string; text: string }[];
  faqHead: string;
  faqs: Question[];
  closeLine: string;
  closeMail: string;
};

const mailSample = 'Sample%20claim';

export const payers: Audience = {
  slug: 'payers',
  crumb: 'Insurers',
  title: 'The claims engine your officers trust.',
  lead: 'IRDAI-grade, NABH-aware and NPPA-priced, with every decision cited and signed.',
  primary: { label: 'Join the waitlist', href: '/contact#waitlist' },
  metaTitle: 'AI claims adjudication for Indian health insurers',
  metaDescription: 'Cashless and reimbursement decisions for health insurers, cited clause by clause, signed and kept for eight years. NABH and NPPA aware.',
  figures: [
    { value: '8×', label: 'officer throughput' },
    { value: '98.94%', label: 'decision accuracy' },
    { value: '100%', label: 'of decisions cited and signed' },
    { value: '8 yr', label: 'audit retention' },
  ],
  related: [
    { label: 'For TPAs', href: '/solutions/tpas' },
    { label: 'For hospitals', href: '/solutions/hospitals' },
    { label: 'Healthcare workflows', href: '/healthcare' },
  ],
  painsHead: 'Where claims officers lose the day',
  pains: [
    { title: 'Cashless approval queues', text: 'Officers spend 12 to 18 minutes per cashless pre-auth on policy lookup alone. AdjudoAI hands it back with the cited clauses, NABH tariff and NPPA caps attached.' },
    { title: 'Sub-limit and NPPA leakage', text: 'Room-rent caps, proportionate deductions and NPPA ceilings get missed at the desk. AdjudoAI applies every clause the same way on every claim, each one cited.' },
    { title: 'IRDAI audit defensibility', text: 'When IRDAI, an Ombudsman or a policyholder’s counsel asks why, you need the cited wording, the prompt and a tamper-evident signature. You get all three on every decision.' },
    { title: 'Disputes with hospitals', text: 'When a network hospital pushes back, your officer has minutes to defend the deduction. The cited clauses and NABH and NPPA references are already written.' },
  ],
  flowHead: 'How it fits your workflow',
  flowLead: 'From claims feed to audit, without replacing your policy master.',
  stages: [
    { title: 'Connect your claims feed', text: 'Pre-auth requests, final bills and discharge summaries arrive by API or a secure SFTP drop, against your policy master, network tariffs and claim IDs.' },
    { title: 'Shadow mode for one to two weeks', text: 'We adjudicate everything in parallel without enforcing. Your team reviews the decisions and we tune.' },
    { title: 'Assist or auto', text: 'Assist mode reviews every decision before payment. Auto mode passes low-risk cashless claims and routes edge cases to senior officers.' },
    { title: 'Audit on demand', text: 'Replay any decision from its prompt SHA-256 and model version. Hash-chained signatures show nothing changed afterwards.' },
  ],
  faqHead: 'What insurers ask before a pilot',
  faqs: [
    { q: 'Is it IRDAI compliant?', a: 'We meet IRDAI’s audit-trail expectations: an append-only adjudication ledger, eight-year retention, signed and hash-chained, with prompt and model version provenance. ISO 27001-aligned, with a DPA on Growth and Enterprise. Policyholder data stays inside your tenant.' },
    { q: 'Does it handle NABH and NPPA rules?', a: 'Yes. NABH tariffs are encoded as policy clauses, ICD-10 coding and bundling logic sit alongside your wordings, and NPPA price caps are enforced at the line-item level. The model is fine-tuned on real Indian adjudication patterns.' },
    { q: 'Do you integrate with our claims platform?', a: 'We have integrated with the major Indian health-claims and TPA platforms and with home-grown systems. Claims go in, decisions come out, with the audit trail attached as a sibling artifact.' },
    { q: 'What happens when the model is uncertain?', a: 'Each decision carries a calibrated confidence score. Below your threshold, the claim goes to a person with the model’s reasoning and the cited clauses already loaded.' },
  ],
  closeLine: 'Send us one, de-identified. We adjudicate it live and walk you through the decision.',
  closeMail: `mailto:hello@adjudoai.com?subject=${mailSample}`,
};

export const tpas: Audience = {
  slug: 'tpas',
  crumb: 'TPAs',
  title: 'Cashless decisions you can defend.',
  lead: 'Built for Indian TPAs and the hospital networks that bill them, with the audit trail IRDAI wants.',
  primary: { label: 'Join the waitlist', href: '/contact#waitlist' },
  metaTitle: 'AI claims adjudication for Indian TPAs',
  metaDescription: 'Cashless and reimbursement decisions for TPAs, cited on every line, with an officer console and a regulator-ready audit pack. NABH, NPPA and PMJAY aware.',
  figures: [
    { value: '8×', label: 'officer throughput' },
    { value: '98.94%', label: 'decision accuracy' },
    { value: '8 yr', label: 'signed audit retention' },
    { value: '₹0', label: 'per-officer license fee' },
  ],
  related: [
    { label: 'For insurers', href: '/solutions/payers' },
    { label: 'For hospitals', href: '/solutions/hospitals' },
    { label: 'Healthcare workflows', href: '/healthcare' },
  ],
  painsHead: 'Why the cashless queue never clears',
  pains: [
    { title: 'Cashless approval queues', text: 'Officers triage 80 to 150 cashless requests a day, each needing policy lookup, an NABH tariff check, NPPA cap verification and exclusion review. AdjudoAI runs every check in one pass, each one cited.' },
    { title: 'Hospital push-back', text: 'When a hospital disputes a deduction, the officer has 60 minutes to defend it. With cited clauses and NPPA references on every decision, the answer is already written.' },
    { title: 'IRDAI audit fire-drills', text: 'Eight-year retention, every decision reproducible from prompt and model version, signed and hash-chained. We do not just store logs. We make tampering mathematically detectable.' },
  ],
  flowHead: 'From platform to audit pack',
  flowLead: 'Your claims platform stays. The officer gets a console beside it.',
  stages: [
    { title: 'Plug into your claims platform', text: 'We integrate with the major Indian TPA platforms. Pre-auth requests, final bills and discharge summaries come in by API or SFTP.' },
    { title: 'Shadow mode pilot', text: 'One to two weeks adjudicating in parallel without enforcement. Your senior officers compare AdjudoAI’s calls to theirs and tell us where to tune.' },
    { title: 'Officer console', text: 'A claim card, the AI decision with cited clauses, claim-scoped chat for follow-ups, and an approve or override button. Every action is logged.' },
    { title: 'IRDAI-ready audit pack', text: 'One click exports signed adjudications, prompt hashes, model versions, officer overrides and the hash-chain verification report.' },
  ],
  faqHead: 'What TPAs ask before a pilot',
  faqs: [
    { q: 'Is it IRDAI compliant?', a: 'We meet IRDAI’s audit-trail expectations: an append-only adjudication ledger, eight-year retention, signed and hash-chained, with prompt and model version provenance.' },
    { q: 'Do you handle NABH and NPPA?', a: 'Yes. NABH tariffs are encoded as policy clauses and NPPA caps are enforced at the line-item level. Both are cited explicitly on every deduction.' },
    { q: 'What about Hindi-speaking officers?', a: 'The reviewer console is in English today, and chat replies are in English by default. The underlying model can answer in Hindi when the officer asks.' },
    { q: 'Can we run on-prem?', a: 'Yes. TPAs with strict data residency rules can run AdjudoAI entirely inside their VPC or on a single GPU appliance.' },
  ],
  closeLine: 'Send us one, de-identified. We adjudicate it live and walk you through the decision.',
  closeMail: `mailto:hello@adjudoai.com?subject=${mailSample}`,
};

export const hospitals: Audience = {
  slug: 'hospitals',
  crumb: 'Hospitals',
  title: 'Catch deductions before you submit.',
  lead: 'AdjudoAI runs your bill through the engine your TPA uses, and shows each cut and its clause first.',
  primary: { label: 'Talk to revenue cycle', href: 'mailto:hello@adjudoai.com?subject=Revenue%20cycle' },
  metaTitle: 'Pre-submission claim review for hospital networks',
  metaDescription: 'Run each bill through the same engine the TPA will, see which lines get cut, and defend the rest with cited clauses before you submit.',
  figures: [
    { value: '100%', label: 'cited pre-submission review' },
    { value: '+22%', label: 'first-pass approval' },
    { value: '−41%', label: 'disputed lines' },
    { value: '8 yr', label: 'audit retention' },
  ],
  related: [
    { label: 'For insurers', href: '/solutions/payers' },
    { label: 'For TPAs', href: '/solutions/tpas' },
    { label: 'Healthcare workflows', href: '/healthcare' },
  ],
  painsHead: 'Where your reimbursement leaks',
  pains: [
    { title: 'Reimbursement leakage', text: 'NABH tariffs, NPPA caps and policy sub-limits all bite at submission. We show you which lines will get cut before the bill leaves your billing desk.' },
    { title: 'Disputes you cannot defend', text: 'When a TPA cuts a line and you have 60 minutes to respond, you need the citation. AdjudoAI gives you the same cited-clause output the TPA’s officer is reading.' },
    { title: 'Cash-flow drag', text: 'Reimbursement cycles stretch when claims bounce. Pre-bill review lifts first-pass approval, which tightens your DSO.' },
  ],
  flowHead: 'From HIS to reimbursement',
  flowLead: 'The review happens in your billing desk, before the TPA sees the bill.',
  stages: [
    { title: 'Connect your HIS', text: 'We integrate with the major Indian HIS and HMIS platforms. Bills reach us as they are generated, before TPA submission.' },
    { title: 'Pre-submission review', text: 'AdjudoAI runs the bill through the same model your TPA will, and shows the expected deduction and the citation for every line.' },
    { title: 'Fix or defend', text: 'Some deductions are real, like a breached NPPA cap, so you fix the line. Others are debatable, and AdjudoAI prepares the citation-backed counter for your appeal.' },
    { title: 'Track reimbursement', text: 'A dashboard follows first-pass approval, average deduction per claim and disputed-line win rate, per doctor, department and payer.' },
  ],
  faqHead: 'What hospital networks ask first',
  faqs: [
    { q: 'Will TPAs and insurers know we use this?', a: 'Only if you tell them. The output is yours, and most networks use it as an internal pre-submission check.' },
    { q: 'Does it handle cashless and reimbursement?', a: 'Yes. One engine handles cashless pre-auth, final bills and reimbursement claims, applying your NABH tariffs, NPPA caps and each policy’s sub-limits.' },
    { q: 'How accurate is the prediction?', a: 'On benchmark Indian TPA data, line-item agreement is 96% or better with what the TPA actually did. We are conservative on edge cases: better to flag a debatable line than hide it.' },
    { q: 'Can we run on-prem?', a: 'Yes. NABH-bound hospitals can run AdjudoAI air-gapped on a single GPU appliance inside the hospital network. Same product, same model.' },
  ],
  closeLine: 'Send us one, de-identified. We review it live and walk you through every line.',
  closeMail: `mailto:hello@adjudoai.com?subject=${mailSample}`,
};
