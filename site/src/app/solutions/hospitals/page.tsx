import type { Metadata } from 'next';
import '../solutions.css';
import { SolutionPage } from '@/components/solutions/SolutionPage';
import { PreSubmitDesk } from '@/components/solutions/Visuals';
import { hospitals } from '@/components/solutions/data';

export const metadata: Metadata = { title: hospitals.metaTitle, description: hospitals.metaDescription };

export default function Page() {
  return <SolutionPage a={hospitals} visual={<PreSubmitDesk />} caption="A sample pre-submission sheet. Claim and amounts are illustrative." />;
}
