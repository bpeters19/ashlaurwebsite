import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import IntroSection from "../components/sections/IntroSection";
import LiveProjectCounter from "../components/sections/LiveProjectCounter";
import ExpertiseMarkets from "../components/sections/ExpertiseMarkets";
import FromTheField from "../components/sections/FromTheField";
import CertsSection from "../components/sections/CertsSection";
import PartnersSection from "../components/sections/PartnersSection";
import CTASection from "../components/sections/CTASection";
import CommunityImpactSection from "../components/sections/CommunityImpactSection";
import Footer from "../components/Footer";
import { companyStats } from "@/data/company";
import { SHOW_PLACEHOLDER_CONTENT } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Chicago General Contractor | Ashlaur Construction",
  description:
    "Ashlaur Construction delivers safety-first general contracting, construction management, design-build, and architect services across Chicago.",
};

export default function Home() {
  const renderedSections = [
    { key: "home", visible: true },
    { key: "about", visible: true },
    { key: "performance", visible: SHOW_PLACEHOLDER_CONTENT || companyStats.every((stat) => stat.verified) },
    { key: "markets", visible: true },
    { key: "field", visible: true },
    { key: "certifications", visible: true },
    { key: "collaboration", visible: true },
    { key: "community", visible: SHOW_PLACEHOLDER_CONTENT },
    { key: "next-step", visible: true },
  ];
  const sectionNumber = (key: string) =>
    renderedSections.filter((section) => section.visible).findIndex((section) => section.key === key) + 1;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content" className="home-main">
        <Hero sectionNumber={sectionNumber("home")} />
        <IntroSection sectionNumber={sectionNumber("about")} />
        <LiveProjectCounter sectionNumber={sectionNumber("performance")} />
        <ExpertiseMarkets sectionNumber={sectionNumber("markets")} />
        <FromTheField sectionNumber={sectionNumber("field")} />
        <CertsSection sectionNumber={sectionNumber("certifications")} />
        <PartnersSection sectionNumber={sectionNumber("collaboration")} />
        <CommunityImpactSection sectionNumber={sectionNumber("community")} />
        <CTASection sectionNumber={sectionNumber("next-step")} />
      </main>
      <Footer />
    </div>
  );
}
