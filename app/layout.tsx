import type { Metadata } from "next";
import { Inter, Big_Shoulders, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-big-shoulders",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "ASHLAUR - Building Tomorrow, Today",
  description: "ASHLAUR: Precision. Power. Performance. Where vision meets execution in modern construction.",
  keywords: "construction, building, renovation, architecture, ASHLAUR, modern construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bigShoulders.variable} ${plexMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen w-full overflow-x-hidden">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
