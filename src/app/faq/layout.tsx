import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — SF Slackline',
  description: 'Common questions about slacklining in San Francisco. How to start, where to go, what to bring, is it legal, and more.',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
