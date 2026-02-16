import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Market Sectors - Ashlaur Construction",
  description: "Explore the diverse markets and industries where Ashlaur delivers construction excellence.",
};

const markets = [
  {
    title: "Affordable Housing",
    description: "Delivering quality housing solutions that serve Chicago's most critical need. Our expertise spans new construction, adaptive reuse, and renovation projects designed to maximize value and community impact.",
    capabilities: ["New Construction", "Adaptive Reuse", "Mixed-Use Development", "Community Engagement"],
  },
  {
    title: "Healthcare",
    description: "Complex medical facilities require precision, safety, and coordination. We specialize in hospitals, clinics, surgical centers, and medical office buildings designed for operational excellence.",
    capabilities: ["Hospital Construction", "Surgical Centers", "Medical Offices", "Regulatory Compliance"],
  },
  {
    title: "Hospitality",
    description: "Hotels, restaurants, and hospitality venues demand flawless execution and schedule precision. Our teams deliver turnkey hospitality projects from preconstruction through opening.",
    capabilities: ["Hotel Construction", "Restaurant Build-outs", "Renovation & Upgrades", "Brand Standards Compliance"],
  },
  {
    title: "Education",
    description: "Schools, universities, and educational facilities require specialized knowledge of academic environments. We deliver learning spaces that inspire and stand the test of time.",
    capabilities: ["K-12 Construction", "University Facilities", "Laboratory Spaces", "Technology-Integrated Design"],
  },
  {
    title: "Multifamily",
    description: "From mid-rise to high-rise, we deliver residential projects that balance quality, schedule, and budget. Our multifamily expertise spans new development to renovation.",
    capabilities: ["New Development", "High-Rise Construction", "Renovation Projects", "Unit Turnover Efficiency"],
  },
  {
    title: "Municipal",
    description: "Public works and municipal infrastructure require accountability, compliance, and community perspective. We serve cities and municipalities with integrity and precision.",
    capabilities: ["Public Works", "Infrastructure", "Civic Buildings", "Regulatory Compliance"],
  },
  {
    title: "Office",
    description: "Corporate headquarters, office parks, and commercial spaces built for productivity and performance. Our office projects reflect brand strength and operational excellence.",
    capabilities: ["Corporate HQ", "Office Parks", "Office Renovation", "Tenant Improvement"],
  },
  {
    title: "Senior Living",
    description: "Senior living facilities demand specialized design, safety systems, and operational planning. We build communities where seniors thrive with dignity and independence.",
    capabilities: ["Assisted Living", "Memory Care", "Independent Living", "Regulatory Expertise"],
  },
];

export default function MarketSectors() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-6 text-white">
              <p className="text-sm font-semibold tracking-wide text-blue-400">MARKETS</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                Market Sectors
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                Expertise across every market. Every project. Every sector.
              </p>
            </div>
          </div>
        </section>

        {/* Markets Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {markets.map((market, index) => (
                <div key={index} className="space-y-6 pb-8 border-b border-gray-200 lg:border-b-0">
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900">{market.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{market.description}</p>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Key Capabilities</p>
                    <ul className="space-y-2">
                      {market.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold mt-1">→</span>
                          <span className="text-gray-600">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900">
              Your Market. Our Expertise.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether your project spans one market or multiple sectors, Ashlaur brings specialized expertise and proven delivery.
            </p>
            <a 
              href="/projects"
              className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              See Our Projects
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
