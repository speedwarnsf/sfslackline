import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Highline — SF Slackline',
  description: 'Bay Area highlining. Castle Rock State Park, first documented SF highline (Feb 2012), safety requirements, and community connections.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
