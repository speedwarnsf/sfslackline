import type { Metadata } from "next";
import { Tienne, Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const display = Tienne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["900"],
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SF Slackline — San Francisco's Slackline Community",
  description:
    "Learn to slackline, find lines in the Bay Area, join the community. From first steps to highlines — San Francisco's definitive slackline resource since 2009.",
  keywords: [
    "slackline",
    "San Francisco",
    "Bay Area",
    "slacklining",
    "highline",
    "trickline",
    "balance",
    "outdoor",
    "community",
  ],
  metadataBase: new URL("https://sfslackline.vercel.app"),
  alternates: { canonical: "https://sfslackline.vercel.app" },
  openGraph: {
    title: "SF Slackline — Walk the Line",
    description: "849 photos. 360 tweets. 15 years of lines between trees. San Francisco's slackline community since 2009.",
    url: "https://sfslackline.vercel.app",
    siteName: "SF Slackline",
    type: "website",
    images: [{ url: "/photos/highline-2.jpg", width: 1200, height: 630, alt: "SF Slackline highline · Feb 2012" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SF Slackline — Walk the Line",
    description: "849 photos. 360 tweets. 15 years of lines between trees.",
    images: ["/photos/highline-2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "SF Slackline",
                  "url": "https://sfslackline.vercel.app",
                  "description": "San Francisco's slackline community since 2009. 849 photos, 360 tweets, 15 years of lines between trees.",
                  "foundingDate": "2009",
                  "areaServed": {
                    "@type": "City",
                    "name": "San Francisco",
                    "containedInPlace": { "@type": "State", "name": "California" }
                  },
                  "sameAs": ["https://sfslackline.org"]
                },
                {
                  "@type": "WebSite",
                  "name": "SF Slackline",
                  "url": "https://sfslackline.vercel.app"
                },
                {
                  "@type": "SportsOrganization",
                  "name": "SF Slackline",
                  "sport": "Slacklining",
                  "url": "https://sfslackline.vercel.app",
                  "location": {
                    "@type": "City",
                    "name": "San Francisco",
                    "addressRegion": "CA",
                    "addressCountry": "US"
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-body)] min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
