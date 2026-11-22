'use client';

import { useState, type FormEvent } from 'react';
import { TextInput } from '@astryxdesign/core/TextInput';
import { SegmentedControl, SegmentedControlItem } from '@astryxdesign/core/SegmentedControl';
import { Button } from '@astryxdesign/core/Button';

// The live site posts its waitlist to a server action we do not have. Set NEXT_PUBLIC_WAITLIST_ENDPOINT to wire it.
const ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? '';

/** Waitlist sign-up built from Astryx controls. Says plainly when it is not connected, never fakes success. */
export function WaitlistForm({ id = 'waitlist' }: { id?: string }) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [org, setOrg] = useState('insurer');
  const [status, setStatus] = useState<{ tone: 'error' | 'info' | 'ok'; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus({ tone: 'error', text: 'That email looks incomplete. Write it as name@company.com.' });
      return;
    }
    if (!ENDPOINT) {
      setStatus({ tone: 'info', text: 'Nothing was sent: this form is not connected yet. Email hello@adjudoai.com instead.' });
      return;
    }
    setBusy(true);
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.trim(), company, org }) });
      setStatus(r.ok ? { tone: 'ok', text: `Thanks. We will write to ${email.trim()} within a week.` } : { tone: 'error', text: 'That did not go through. Try again in a minute.' });
    } catch {
      setStatus({ tone: 'error', text: 'That did not go through. Try again in a minute.' });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form id={id} className="waitlist astryx-scope stock" onSubmit={submit} noValidate>
      <TextInput label="Work email" type="email" value={email} onChange={(v) => setEmail(v)} placeholder="you@company.com" isRequired htmlName="email"
        status={status?.tone === 'error' ? { type: 'error', message: status.text } : undefined} />
      <TextInput label="Organisation" value={company} onChange={(v) => setCompany(v)} placeholder="Company name" isOptional htmlName="company" />
      <SegmentedControl label="You are" value={org} onChange={setOrg} layout="fill">
        <SegmentedControlItem value="insurer" label="Insurer" />
        <SegmentedControlItem value="tpa" label="TPA" />
        <SegmentedControlItem value="hospital" label="Hospital" />
      </SegmentedControl>
      <Button type="submit" label="Join the waitlist" variant="primary" size="lg" isLoading={busy} width="100%" />
      <p className={`waitlist__status${status?.tone === 'ok' ? ' is-ok' : ''}`} role="status" aria-live="polite">{status && status.tone !== 'error' ? status.text : ''}</p>
    </form>
  );
}
