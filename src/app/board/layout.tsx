import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Board — SF Slackline',
  description: 'SF Slackline community bulletin board. Find partners, share gear, post events, and connect with Bay Area slackliners.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
