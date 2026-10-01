import type { Metadata } from "next";
import { Inter, Big_Shoulders, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { companyInfo } from "@/data/company";
import MobileActionBar from "@/components/MobileActionBar";
import PrivacyAnalytics from "@/components/analytics/PrivacyAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-big-shoulders",
  preload: true,
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ashlaurconstruction.com"),
  title: {
    default: "Ashlaur Construction | Building Tomorrow, Today",
    template: "%s | Ashlaur Construction",
  },
  description:
    "Ashlaur Construction delivers accountable, safety-first construction services across Chicago and the Midwest.",
  openGraph: {
    type: "website",
    title: "Ashlaur Construction | Building Tomorrow, Today",
    description:
      "Ashlaur Construction delivers accountable, safety-first construction services across Chicago and the Midwest.",
    images: [
      {
        url: "/ashlaur-project-og.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable housing construction project by Ashlaur Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashlaur Construction | Building Tomorrow, Today",
    description:
      "Ashlaur Construction delivers accountable, safety-first construction services across Chicago and the Midwest.",
    images: ["/ashlaur-project-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    name: companyInfo.legalName,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.state,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "15:00",
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bigShoulders.variable} ${plexMono.variable} antialiased bg-background text-foreground`}
      >
        <a href="#content-root" className="skip-link">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
        <div id="content-root" className="min-h-screen w-full overflow-x-hidden">
          {children}
        </div>
        <MobileActionBar />
        <PrivacyAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
