/** The product, built: a sample hospital bill adjudicated against the policy, every cut cited, the decision signed.
 *  Sample data only (line items are illustrative); totals match the example claim on the current site. */
const lines = [
  { name: 'Room rent, 4 days', amount: '₹56,000', after: '₹32,000', note: '§3.2(a) −₹24,000', cut: true },
  { name: 'Surgery, nursing, visits', amount: '₹49,700', note: '§6.1 passes' },
  { name: 'Pharmacy, consumables', amount: '₹21,300', after: '₹14,200', note: '§4.1 −₹7,100', cut: true },
  { name: 'MRI and lab tests', amount: '₹21,800', note: '§5.3 passes' },
  { name: 'Co-payment', amount: '−₹5,000', note: '§2.4 −₹5,000', cut: true },
];

export function ClaimCard() {
  return (
    <figure className="claim" aria-label="A sample claim adjudicated by Adjudo">
      <header className="claim__head">
        <span className="claim__title">Final bill, claim 100247</span>
        <span className="claim__meta">Sample hospital, Pune</span>
      </header>
      <ol className="claim__lines">
        {lines.map((l) => (
          <li key={l.name} className={l.cut ? 'is-cut' : undefined}>
            <span className="claim__name">{l.name}</span>
            <span className="claim__amt num">{l.after ? (<><s>{l.amount}</s> {l.after}</>) : l.amount}</span>
            <span className="claim__note num">{l.note}</span>
          </li>
        ))}
      </ol>
      <footer className="claim__foot">
        <div><span>Billed</span><b className="num">₹1,48,800</b></div>
        <div><span>Approved</span><b className="num claim__ok">₹1,11,700</b></div>
      </footer>
      <figcaption className="claim__seal">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.6 2.6L16 9.5" /></svg>
        <span>Signed and hash-chained <b className="num">sha256 814e…a26f</b></span>
      </figcaption>
    </figure>
  );
}
