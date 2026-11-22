/** Stationery for each audience's workflow split. Sample data for claim 100247, marked as a sample on the sheet and in the caption. */

export function LetterDesk() {
  return (
    <div className="sol-stage" role="img" aria-label="A sample decision letter for claim 100247: billed ₹1,48,800, three deductions each citing a clause, approved ₹1,11,700, signed.">
      <div className="sol-sheet sol-sheet--main sol-sheet--letter stock" aria-hidden="true">
        <p className="sol-sheet__title">Decision letter</p>
        <p className="sol-sheet__meta">Sample, claim 100247</p>
        <table>
          <tbody>
            <tr><td>Billed</td><td className="fig">₹1,48,800</td></tr>
            <tr><td>Room rent cap <b>§3.2(a)</b></td><td className="fig">−24,000</td></tr>
            <tr><td>Consumables <b>§4.1</b></td><td className="fig">−7,100</td></tr>
            <tr><td>Co-payment <b>§2.4</b></td><td className="fig">−5,000</td></tr>
          </tbody>
        </table>
        <p className="sol-sheet__amount">₹1,11,700</p>
        <p className="sol-sheet__meta">Approved with deductions</p>
        <div className="sol-sheet__sign"><span className="pressed">Signed</span><span className="fig">814e…a26f</span></div>
      </div>
      <div className="sol-sheet sol-sheet--aside sol-sheet--clause stock" aria-hidden="true">
        <p className="sol-sheet__tab">§3.2(a), cited for room rent</p>
        <p>Room rent is payable up to ₹8,000 a day for a single private room.</p>
      </div>
    </div>
  );
}

export function ClaimCardDesk() {
  return (
    <div className="sol-stage" role="img" aria-label="A sample officer console card for claim 100247: the decision approves ₹1,11,700 of ₹1,48,800 with three cited deductions, with Approve and Override buttons and a claim-scoped chat reply beneath.">
      <div className="sol-sheet sol-sheet--main sol-sheet--card stock" aria-hidden="true">
        <p className="sol-sheet__title">Claim 100247</p>
        <p className="sol-sheet__meta">Sample, cashless final bill</p>
        <p className="sol-sheet__amount">₹1,11,700</p>
        <p className="sol-sheet__meta">Approved with deductions, of ₹1,48,800 billed</p>
        <table>
          <tbody>
            <tr><td>Room rent cap <b>§3.2(a)</b></td><td className="fig">−24,000</td></tr>
            <tr><td>Consumables <b>§4.1</b></td><td className="fig">−7,100</td></tr>
            <tr><td>Co-payment <b>§2.4</b></td><td className="fig">−5,000</td></tr>
          </tbody>
        </table>
        <div className="sol-sheet__act">
          <span className="btn btn--ink btn--sm">Approve</span>
          <span className="btn btn--card btn--sm">Override</span>
        </div>
      </div>
      <div className="sol-sheet sol-sheet--aside sol-sheet--chat stock" aria-hidden="true">
        <p className="sol-sheet__tab">Officer asks</p>
        <p>Why was consumables cut?</p>
        <p className="sol-sheet__tab sol-sheet__tab--gap">Adjudo replies</p>
        <p>Consumables are deducted under §4.1, cited on the card.</p>
      </div>
    </div>
  );
}

export function PreSubmitDesk() {
  return (
    <div className="sol-stage" role="img" aria-label="A sample pre-submission review of claim 100247: room rent will be cut by ₹24,000 under §3.2(a), consumables by ₹7,100 under §4.1 are worth defending, and the co-payment of ₹5,000 under §2.4 is a policy term. Expected approval ₹1,11,700 of ₹1,48,800.">
      <div className="sol-sheet sol-sheet--main sol-sheet--review stock" aria-hidden="true">
        <p className="sol-sheet__title">Before you submit</p>
        <p className="sol-sheet__meta">Sample pre-submission review, claim 100247</p>
        <table className="sol-review">
          <thead><tr><th scope="col">Line</th><th scope="col">Expected cut</th><th scope="col">Call</th></tr></thead>
          <tbody>
            <tr><td>Room rent <b>§3.2(a)</b></td><td className="fig">−24,000</td><td>Will be cut</td></tr>
            <tr><td>Consumables <b>§4.1</b></td><td className="fig">−7,100</td><td>Defend</td></tr>
            <tr><td>Co-payment <b>§2.4</b></td><td className="fig">−5,000</td><td>Policy term</td></tr>
            <tr><td>Surgery and nursing</td><td className="fig">none</td><td>Clears</td></tr>
          </tbody>
        </table>
        <p className="sol-sheet__meta sol-sheet__sum">Expected approval <span className="fig">₹1,11,700</span> of <span className="fig">₹1,48,800</span></p>
      </div>
      <div className="sol-sheet sol-sheet--aside sol-sheet--clause stock" aria-hidden="true">
        <p className="sol-sheet__tab">To defend: §4.1</p>
        <p>The counter and its citation are prepared for your appeal.</p>
      </div>
    </div>
  );
}
