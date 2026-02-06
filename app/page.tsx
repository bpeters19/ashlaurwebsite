import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import IntroSection from "../components/sections/IntroSection";
import LiveProjectCounter from "../components/sections/LiveProjectCounter";
import ExpertiseMarkets from "../components/sections/ExpertiseMarkets";
import ValuePropositions from "../components/sections/ValuePropositions";
import FromTheField from "../components/sections/FromTheField";
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
      <ExpertiseMarkets />
      <ValuePropositions />
      <FromTheField />
      <CertsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
