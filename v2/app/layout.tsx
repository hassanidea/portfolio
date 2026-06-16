import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://hassannasr.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hassan Nasr Hassan — Software / AI Engineer",
    template: "%s — Hassan Nasr Hassan",
  },
  description:
    "Software and AI engineer. Production Arabic voice AI at Arcain, federal data pipelines (ISED, Transport Canada, DFO, DRDC), and shipped speech models with measurable quality wins.",
  authors: [{ name: "Hassan Nasr Hassan" }],
  creator: "Hassan Nasr Hassan",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Hassan Nasr Hassan — Software / AI Engineer",
    description:
      "Production Arabic voice AI, real-time streaming systems, and federal data pipelines.",
    siteName: "Hassan Nasr Hassan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Nasr Hassan — Software / AI Engineer",
    description:
      "Production Arabic voice AI, real-time streaming systems, and federal data pipelines.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
