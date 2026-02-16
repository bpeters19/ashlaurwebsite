import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Become a Subcontractor - Ashlaur Construction",
  description: "Join our network of trusted subcontractors. Learn about partnership requirements and how to partner with Ashlaur.",
};

export default function BecomeSubcontractor() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-6 text-white">
              <p className="text-sm font-semibold tracking-wide text-blue-400">PARTNERSHIP</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                Become a Subcontractor
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                Partner with Ashlaur. Build with us. Grow with us.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Why Partner With Ashlaur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Steady Workflow</h3>
                <p className="text-gray-600 leading-relaxed">
                  Consistent project pipeline built on strong relationships with leading general contractors and owners across Chicago.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Transparent Partnerships</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clear communication, fair pricing, reasonable scheduling. No surprises. No games. Honest partnerships.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Professional Culture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work with leadership that values your expertise, respects your crew, and creates a collaborative project environment.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Growth Opportunities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Long-term relationship building. Repeat work on diverse project types. Opportunities to expand your capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Prequalification Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Licensing & Credentials</h3>
                  <ul className="space-y-2">
                    {["Current Illinois License", "OSHA 30-Hour Certification", "Safety Track Record", "References from Prior Clients"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Standards</h3>
                  <ul className="space-y-2">
                    {["Clean Safety Record (3+ years)", "Safety Training Documentation", "Drug Testing Clearance", "Worksite Safety Compliance"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Requirements */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Insurance Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Minimum Coverage</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">General Liability</p>
                    <p className="text-gray-600 text-sm">$1M per occurrence / $2M aggregate</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Workers' Compensation</p>
                    <p className="text-gray-600 text-sm">Statutory limits (IL requirement)</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Umbrella/Excess Liability</p>
                    <p className="text-gray-600 text-sm">$2M+ (for larger projects)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  All insurance policies must list Ashlaur as an additional insured. Certificates of Insurance are required before work begins.
                </p>
                <p>
                  We work with subcontractors to ensure proper coverage levels. Our insurance coordinator can discuss specific project requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Process */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Vendor Registration Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="text-4xl font-black text-blue-600">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Submit Application</h3>
                  <p className="text-gray-600">Fill out our vendor prequalification form with company information, references, and credentials.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-black text-blue-600">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Provide Documentation</h3>
                  <p className="text-gray-600">Submit licenses, insurance certificates, safety certifications, and client references for review.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-black text-blue-600">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Background Review</h3>
                  <p className="text-gray-600">We review your credentials, verify references, and assess alignment with our partnership values.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-black text-blue-600">4</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Partnership Approval</h3>
                  <p className="text-gray-600">Once approved, you're added to our vendor network and eligible for upcoming project opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="bg-gray-900 text-white rounded-lg p-12 space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter">
                  Ready to Partner?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl">
                  Contact our vendor management team to learn more about subcontracting opportunities with Ashlaur.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg font-semibold">Contact Information</p>
                <p className="text-gray-300">Email us to request a prequalification application or discuss partnership opportunities.</p>
                <a 
                  href="/contact"
                  className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg mt-4"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
