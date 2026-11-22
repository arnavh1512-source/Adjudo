import { evalStats } from '@/content/site';

export function StatsBand({ items = evalStats, light = false }: { items?: { value: string; label: string }[]; light?: boolean }) {
  return (
    <div className={`stats${light ? ' stats--light' : ''}`}>
      {items.map((s) => (<div key={s.label}><b className="num">{s.value}</b><span>{s.label}</span></div>))}
    </div>
  );
}
