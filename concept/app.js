// Adjudo concept: the desk thread, the journey index, the audit chain, the desk switcher, the waitlist form.

// 1 · the desk: pick a bill line, the green thread runs to its clause
(() => {
  const desk = document.querySelector('[data-desk]');
  if (!desk) return;
  const path = desk.querySelector('.desk__thread path');
  const lines = [...desk.querySelectorAll('.line')];
  let current = lines.find((l) => l.getAttribute('aria-pressed') === 'true') || lines[0];

  const draw = () => {
    const clause = document.getElementById(current.dataset.clause);
    if (!clause || getComputedStyle(path.parentNode).display === 'none') return;
    const box = desk.getBoundingClientRect();
    const a = current.closest('.bill').getBoundingClientRect();
    const r = current.getBoundingClientRect();
    const c = clause.getBoundingClientRect();
    const x1 = a.right - box.left, y1 = r.top + r.height / 2 - box.top;
    const x2 = c.left - box.left, y2 = c.top + Math.min(c.height / 2, 22) - box.top;
    const mid = (x1 + x2) / 2;
    path.setAttribute('d', `M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`);
  };

  const select = (line) => {
    current = line;
    lines.forEach((l) => l.setAttribute('aria-pressed', String(l === line)));
    desk.querySelectorAll('.clause').forEach((c) => c.classList.toggle('is-active', c.id === line.dataset.clause));
    draw();
  };

  lines.forEach((l) => l.addEventListener('click', () => select(l)));
  addEventListener('resize', draw, { passive: true });
  document.fonts?.ready.then(draw);
  draw();
})();

// 2 · the journey: the stage in view lights its name in the pinned index
(() => {
  const marks = [...document.querySelectorAll('.journey__index li')];
  const steps = [...document.querySelectorAll('.step')];
  if (!marks.length || !('IntersectionObserver' in window)) return;
  const on = (n) => marks.forEach((m) => m.classList.toggle('is-on', m.dataset.index === n));
  on('1');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) on(e.target.dataset.step); });
  }, { rootMargin: '-45% 0px -45% 0px' });
  steps.forEach((s) => io.observe(s));
})();

// 3 · the record: real SHA-256 in the browser; change one amount and every later row stops verifying
(() => {
  const chain = document.querySelector('[data-chain]');
  if (!chain || !window.crypto?.subtle) return;
  const rows = [...chain.querySelectorAll('tbody tr')];
  const tamper = chain.querySelector('[data-tamper]');
  const restore = chain.querySelector('[data-restore]');
  const status = chain.querySelector('.chain__status');
  const short = (h) => `${h.slice(0, 4)}…${h.slice(-4)}`;
  const sha = async (s) => [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)))].map((b) => b.toString(16).padStart(2, '0')).join('');
  const original = rows.map((r) => r.dataset.amount);
  let sealed = [];

  const compute = async (amounts) => {
    const out = []; let prev = '0'.repeat(16);
    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];
      const h = await sha(`${prev}|${r.dataset.claim}|${r.dataset.decision}|${amounts[i]}`);
      out.push({ prev, hash: h }); prev = h;
    }
    return out;
  };

  const render = async (amounts) => {
    const now = await compute(amounts);
    let brokenAt = -1;
    rows.forEach((r, i) => {
      const edited = amounts[i] !== original[i];
      r.querySelector('.amt').textContent = amounts[i];
      r.querySelector('.hash').textContent = short(now[i].hash);
      // each row stores the previous hash it was sealed with; a later row stops verifying once that no longer matches
      r.querySelector('.prev').textContent = short(sealed[i].prev);
      const ok = !edited && sealed[i].prev === now[i].prev;
      if (!ok && brokenAt < 0) brokenAt = i;
      r.classList.toggle('is-edited', edited);
      r.classList.toggle('is-broken', !ok && !edited);
      r.querySelector('.ok').textContent = edited ? 'signature fails' : ok ? 'verified' : 'link broken';
    });
    status.textContent = brokenAt < 0
      ? `All ${rows.length} rows verify against the chain.`
      : `Chain broken at row ${brokenAt + 1}. Rows ${brokenAt + 1} to ${rows.length} no longer verify.`;
  };

  compute(original).then((s) => { sealed = s; render(original); });
  tamper.addEventListener('click', async () => {
    const amounts = [...original]; amounts[1] = '₹1,21,700';
    await render(amounts);
    tamper.hidden = true; restore.hidden = false; restore.focus();
  });
  restore.addEventListener('click', async () => {
    await render(original);
    restore.hidden = true; tamper.hidden = false; tamper.focus();
  });
})();

// 4 · the desks: a tab switcher, arrow keys included; without script every panel shows
(() => {
  const tabs = [...document.querySelectorAll('.seg [role="tab"]')];
  if (!tabs.length) return;
  const pick = (t, focus) => {
    tabs.forEach((x) => {
      const on = x === t;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => pick(t));
    t.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      pick(tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length], true);
    });
  });
})();

// 5 · the waitlist form: validates, and says plainly when it is not connected yet
document.querySelectorAll('form[data-endpoint]').forEach((form) => {
  const input = form.querySelector('input[type="email"]');
  const help = form.querySelector('[aria-live]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = input.checkValidity();
    input.toggleAttribute('aria-invalid', !ok);
    if (!ok) { input.setAttribute('aria-describedby', help.id); help.textContent = 'That address looks incomplete. Write it as name@company.com.'; input.focus(); return; }
    if (!form.dataset.endpoint) { help.textContent = 'Nothing was sent: this form is not connected yet.'; return; }
    fetch(form.dataset.endpoint, { method: 'POST', body: new FormData(form) })
      .then((r) => { help.textContent = r.ok ? `Thanks. We will write to ${input.value.trim()} within a week.` : 'That did not go through. Try again in a minute.'; })
      .catch(() => { help.textContent = 'That did not go through. Try again in a minute.'; });
  });
});
