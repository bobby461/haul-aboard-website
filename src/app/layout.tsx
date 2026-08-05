import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Barlow, Kaushan_Script } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { business } from "@/lib/content";
import {
  localBusinessSchema,
  organizationSchema,
  asScript,
} from "@/lib/schema";

// Google Analytics 4 measurement ID. Set NEXT_PUBLIC_GA_ID in
// `.env.local` (and Vercel env vars in production) to a value like
// `G-XXXXXXXXXX`. If unset, GA4 is silently disabled — the site works
// the same, just no analytics. See HOW-TO-EDIT.md for the GA4 setup.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Display headlines (the big "HAUL ABOARD" wordmark, section titles, stat
// numbers). Anton is a heavy condensed vintage-poster face — the closest
// Google-hosted match to the chunky bait-shop/marina signage lettering in
// the brand board. Kept on the `--font-bebas` CSS variable so every
// existing style rule keeps working.
const bebas = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

// All-caps tags, button labels, nav links, small captions
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

// Body copy
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

// Accent script — the "We Haul It All!" tagline flourish. A retro brush
// script that echoes the "Southern Aire" hand-lettering on the brand board.
const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${business.domain}`),
  title: {
    default: "Haul Aboard Junk Removal — Jacksonville Beach, FL",
    template: "%s | Haul Aboard Junk Removal",
  },
  description:
    "Haul Aboard is a locally owned junk removal crew serving Jacksonville Beach, Neptune Beach, Atlantic Beach, Ponte Vedra & Nocatee. Same-day service, upfront flat pricing, licensed & insured. We haul it all.",
  applicationName: "Haul Aboard Junk Removal",
  authors: [{ name: "Haul Aboard Junk Removal LLC" }],
  generator: "Next.js",
  keywords: [
    "junk removal Jacksonville Beach",
    "junk removal Neptune Beach FL",
    "junk removal Atlantic Beach FL",
    "junk removal Ponte Vedra",
    "junk removal Nocatee",
    "hot tub removal Jacksonville Beach",
    "estate cleanouts Ponte Vedra",
    "furniture removal Jacksonville Beach",
    "appliance removal Jacksonville Beach",
  ],
  openGraph: {
    type: "website",
    siteName: "Haul Aboard Junk Removal",
    locale: "en_US",
    images: [
      {
        url: "/images/brand/og.png",
        width: 1200,
        height: 630,
        alt: "Haul Aboard Junk Removal — Jacksonville Beach, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haul Aboard Junk Removal — Jacksonville Beach, FL",
    description:
      "Locally owned junk removal serving the Jacksonville Beaches. Same-day service, flat pricing, licensed & insured. We haul it all.",
    images: ["/images/brand/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${barlowCondensed.variable} ${barlow.variable} ${kaushan.variable}`}
    >
      <head>
        {/* Sitewide structured data. LocalBusiness carries the NAP, hours,
            service area and price range. Haul Aboard is brand-new, so there is
            deliberately NO AggregateRating (no fabricated stars) until real
            Google reviews exist — see schema.ts. Organization ties the social
            profiles and legal name together. Both use a stable @id, so pages
            that layer on Service / FAQ / Breadcrumb schema reference the same
            entity. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={asScript(localBusinessSchema())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={asScript(organizationSchema())}
        />
      </head>
      <body>{children}</body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
