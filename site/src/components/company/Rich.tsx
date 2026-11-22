import Link from 'next/link';
import { Fragment } from 'react';

/** Plain text with its email addresses and mentions of the Security page turned into links. Text is never altered. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/([\w.-]+@adjudoai\.com|[Ss]ecurity page)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (/@adjudoai\.com$/.test(part)) return <a key={i} className="link" href={`mailto:${part}`}>{part}</a>;
        if (/^[Ss]ecurity page$/.test(part)) return <Link key={i} className="link" href="/security">{part}</Link>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
