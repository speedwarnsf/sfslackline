import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Photos — SF Slackline',
  description: '849 photos across 57 albums from 2009 to 2013. Shot on Nikon D90s, Canon 1D Mark IVs, and iPhones. The complete visual archive of SF slackline culture.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
