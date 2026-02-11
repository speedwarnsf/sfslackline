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
  openGraph: {
    title: "SF Slackline — Walk the Line",
    description: "San Francisco's slackline community hub. Learn, connect, explore.",
    url: "https://sfslackline.com",
    siteName: "SF Slackline",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-[family-name:var(--font-body)] min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
