import Link from 'next/link';
import { site } from '@/content/site';

export function CtaBand({ title = 'Put Adjudo behind your claims.', body = 'A small cohort of payers, TPAs and hospital networks. Sandbox access and locked-in Year-1 pricing.' }: { title?: string; body?: string }) {
  return (
    <section className="cta-band" aria-label="Get started">
      <div className="container">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="btn-row">
          <Link href={site.waitlistHref} className="btn btn--light">Join the waitlist</Link>
          <a href={`mailto:${site.email.hello}?subject=Sample%20claim`} className="btn btn--ghost-light">Send a sample claim</a>
        </div>
      </div>
    </section>
  );
}
