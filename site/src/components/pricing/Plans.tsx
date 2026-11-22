import Link from 'next/link';

type Plan = { name: string; audience: string; price: string; blurb: string; items: string[]; action: { label: string; href: string }; featured?: boolean };

const plans: Plan[] = [
  {
    name: 'Pilot', audience: 'For first integrations', price: 'Talk to us',
    blurb: 'Designed for a 30 to 60 day proof of value on a single line of business.',
    items: [
      'Up to 5,000 adjudications a month',
      'One line of business: pre-auth, final bill or reimbursement',
      'Cloud-hosted on AWS ap-south-1, India',
      'Signed audit trail, HMAC-chained',
      'Cited clauses on every decision',
      'Slack support, one business day SLA',
    ],
    action: { label: 'Join the waitlist', href: '/contact#waitlist' },
  },
  {
    name: 'Growth', audience: 'For scaling teams', price: 'Custom', featured: true,
    blurb: 'Per-claim pricing scales with volume. Procurement-friendly contracts.',
    items: [
      'Unlimited adjudications',
      'All three workflows: pre-auth, final bill, reimbursement',
      'Reviewer console with claim-scoped chat',
      'Historical claim memory, RAG over your own decisions',
      'Cloud or single-tenant VPC',
      'Priority support, four business hour SLA',
      'DPA included',
    ],
    action: { label: 'Talk to sales', href: '/contact' },
  },
  {
    name: 'Enterprise', audience: 'For insurers, TPAs and hospital chains', price: 'Custom',
    blurb: 'On-prem or air-gapped deploys for NABH-bound hospitals and regulated payers.',
    items: [
      'Everything in Growth',
      'On-prem appliance or air-gapped install',
      'Custom fine-tunes on your historical decisions',
      'SSO (SAML or OIDC) and SCIM',
      'Dedicated technical account manager',
      'Support around the clock, one business hour SLA',
      'Custom DPA, ISO 27001 reports, security review',
    ],
    action: { label: 'Contact us', href: '/contact' },
  },
];

/** Three plans as side-by-side columns: name, price, line, a hairline list, the button pinned to the foot. */
export function Plans() {
  return (
    <ol className="pr-plans" aria-label="AdjudoAI plans">
      {plans.map((p) => (
        <li key={p.name} className={`pr-plan${p.featured ? ' is-featured' : ''}`}>
          <div className="pr-plan__head">
            <h3 className="pr-plan__name">{p.name}{p.featured ? <span className="pr-plan__note">Most chosen</span> : null}</h3>
            <p className="pr-plan__for">{p.audience}</p>
          </div>
          <div className="pr-plan__offer">
            <p className="pr-plan__price">{p.price}</p>
            <p className="pr-plan__blurb">{p.blurb}</p>
          </div>
          <ul className="pr-plan__list">
            {p.items.map((it) => <li key={it}>{it}</li>)}
          </ul>
          <div className="pr-plan__foot">
            <Link className="btn btn--card" href={p.action.href}>{p.action.label}</Link>
          </div>
        </li>
      ))}
    </ol>
  );
}
