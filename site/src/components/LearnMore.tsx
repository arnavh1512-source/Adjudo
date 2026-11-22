import Link from 'next/link';
import { LearnChevron } from './Icons';

/** A text link with the transitions.dev #24 chevron that slides and spreads into an arrow on hover. */
export function LearnMore({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = 'link learn t-learn';
  return href.startsWith('http') || href.startsWith('mailto:')
    ? <a className={cls} href={href}>{children}<LearnChevron /></a>
    : <Link className={cls} href={href}>{children}<LearnChevron /></Link>;
}
