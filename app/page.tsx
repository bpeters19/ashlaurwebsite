import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import IntroSection from "../components/sections/IntroSection";
import LiveProjectCounter from "../components/sections/LiveProjectCounter";
import ServicesGrid from "../components/sections/ServicesGrid";
import ValuePropositions from "../components/sections/ValuePropositions";
import CertsSection from "../components/sections/CertsSection";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <IntroSection />
      <LiveProjectCounter />
      <ServicesGrid />
      <ValuePropositions />
      <CertsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
