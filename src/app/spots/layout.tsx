import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Spots — SF Slackline',
  description: '13 verified slackline spots in San Francisco with GPS coordinates from EXIF data and tweets. Dolores Park, Panhandle, Ocean Beach, Golden Gate Park, and more.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
