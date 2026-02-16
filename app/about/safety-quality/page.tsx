import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Safety & Quality - Ashlaur Construction",
  description: "Ashlaur's commitment to safety, quality control, and industry certifications.",
};

export default function SafetyQuality() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-6 text-white">
              <p className="text-sm font-semibold tracking-wide text-blue-400">STANDARDS</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                Safety & Quality
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                Zero incidents. Zero compromise. Every project. Every time.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Commitment */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-8">
              Our Safety Commitment
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Safety isn't a program. Safety isn't a goal. Safety is a values-driven culture embedded in every decision, every day, on every project.
                </p>
                <p>
                  Zero incidents isn't aspirational for Ashlaur—it's the only acceptable outcome. From the foreman to the executive, everyone owns safety accountability.
                </p>
              </div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  We invest heavily in safety training, equipment, and systems. We implement industry-leading protocols. We foster a culture where every worker feels empowered to stop unsafe work.
                </p>
                <p>
                  Safe projects are successful projects. Efficient projects. Profitable projects. This isn't theoretical—it's how we operate every single day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Control Process */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Quality Control Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Preconstruction Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  We establish quality standards before a single nail is driven. Planning, coordination, material selection—precision starts here.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Daily Inspection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quality inspections happen constantly. Field crews, superintendents, and management ensure accountability and corrective action in real-time.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Third-Party Verification</h3>
                <p className="text-gray-600 leading-relaxed">
                  Independent testing and inspection ensure objective verification of quality standards and regulatory compliance.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Continuous Documentation</h3>
                <p className="text-gray-600 leading-relaxed">
                  All inspections, tests, and corrective actions are meticulously documented for transparency and accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Industry Certifications & Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "OSHA Compliance",
                "ISO 9001 Standards",
                "Safety TrackRecord",
                "Licensed & Bonded",
                "Performance Bonds",
                "Insurance Coverage",
              ].map((cert) => (
                <div key={cert} className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
                  <p className="font-semibold text-gray-900">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-8">
              Compliance Standards
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ashlaur operates in full compliance with all federal, state, and local regulations. We exceed minimum requirements and stay current with evolving standards.
                </p>
                <ul className="space-y-3">
                  {["OSHA Standards", "Local Building Codes", "Environmental Regulations", "Labor Laws", "Licensing Requirements"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Our leadership team stays informed of regulatory changes. We participate in industry associations. We train our teams on evolving standards.
                </p>
                <p>
                  Compliance isn't bureaucratic for us—it's fundamental to how we earn and maintain trust with every partner, owner, and worker.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
