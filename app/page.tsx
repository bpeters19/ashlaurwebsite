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

export const metadata: Metadata = {
  title: "Chicago General Contractor | Ashlaur Construction",
  description:
    "Ashlaur Construction delivers safety-first general contracting, construction management, design-build, and architect services across Chicago.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content" className="home-main">
        <Hero />
        <IntroSection />
        <LiveProjectCounter />
        <ExpertiseMarkets />
        <FromTheField />
        <CertsSection />
        <PartnersSection />
        <CommunityImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
