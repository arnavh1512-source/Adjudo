import type { Metadata } from 'next';
import '../solutions.css';
import { SolutionPage } from '@/components/solutions/SolutionPage';
import { ClaimCardDesk } from '@/components/solutions/Visuals';
import { tpas } from '@/components/solutions/data';

export const metadata: Metadata = { title: tpas.metaTitle, description: tpas.metaDescription };

export default function Page() {
  return <SolutionPage a={tpas} visual={<ClaimCardDesk />} caption="A sample officer card. Claim, amounts and chat are illustrative." />;
}
