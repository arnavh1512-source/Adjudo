import type { Metadata } from 'next';
import '../solutions.css';
import { SolutionPage } from '@/components/solutions/SolutionPage';
import { LetterDesk } from '@/components/solutions/Visuals';
import { payers } from '@/components/solutions/data';

export const metadata: Metadata = { title: payers.metaTitle, description: payers.metaDescription };

export default function Page() {
  return <SolutionPage a={payers} visual={<LetterDesk />} caption="A sample decision letter. Claim, amounts and signature are illustrative." />;
}
