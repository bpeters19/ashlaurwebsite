import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
