import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Community — SF Slackline',
  description: 'The SF slackline crew and extended family. Local slackliners, visiting pros, and community partners since 2009.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
