import Link from 'next/link';
import { LearnChevron } from './Icons';

/** Text link with the transitions.dev #24 learn-more chevron. */
export function LearnMore({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith('http') || href.startsWith('mailto:');
  const cls = 'learn t-learn';
  return external ? (
    <a className={cls} href={href}>{children}<LearnChevron /></a>
  ) : (
    <Link className={cls} href={href}>{children}<LearnChevron /></Link>
  );
}
