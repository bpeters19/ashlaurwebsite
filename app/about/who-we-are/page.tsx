import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";

export const metadata = {
  title: "Who We Are - Ashlaur Construction",
  description: "Discover Ashlaur's company history, mission, and what sets us apart in the construction industry.",
};

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-6 text-white">
              <p className="text-sm font-semibold tracking-wide text-blue-400">OUR STORY</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                Who We Are
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                Built on accountability, shaped by expertise, driven by partnership. Ashlaur Construction delivers leadership across every project phase.
              </p>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-12">
                  Our Journey
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p>
                      Ashlaur Construction was founded with a singular vision: to deliver construction excellence grounded in accountability, safety, and genuine partnership. From our earliest projects to today's most complex builds, we've maintained an unwavering commitment to precision, power, and performance.
                    </p>
                    <p>
                      What began as a commitment to a few trusted clients has grown into a force reshaping Chicago's built environment. We've earned our reputation not through promises, but through consistent delivery on every project phase.
                    </p>
                  </div>
                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p>
                      Our growth is rooted in relationships. We work alongside general contractors, architects, owners, and subcontractors who share our values. Each partnership strengthens our capabilities and expands our impact.
                    </p>
                    <p>
                      Today, Ashlaur stands as a backbone of Chicago's construction industry—trusted by leading firms to deliver on ambitious, high-stakes builds that shape our city's future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-8">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  To deliver construction leadership rooted in accountability, safety, and partnership across every project phase—transforming vision into extraordinary execution.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are committed to precision in planning, power in execution, and performance that exceeds expectation.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-8">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  To be the construction partner of choice for ambitious projects that shape our city's future—recognized for integrity, innovation, and impact.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Building Tomorrow, Today. Every project. Every partnership. Every promise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-gray-900">Accountability First</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We own every deliverable. Every timeline. Every commitment. When we say something will happen, it happens—on schedule, on budget, safely.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-gray-900">Safety as Foundation</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Zero incidents isn't a goal—it's the only outcome we accept. Safe projects are successful projects, and we never compromise on safety.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-gray-900">Partnership Models</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We collaborate, not cooperate. Our partners' success is our success. This mindset drives innovation and delivers results that matter.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-gray-900">Precision Execution</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Master planning meets flawless execution. Every detail matters. Every phase is optimized. That's how we deliver power and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Affordable Housing",
                "Healthcare",
                "Hospitality",
                "Education",
                "Multifamily",
                "Municipal",
                "Office",
                "Senior Living",
              ].map((industry) => (
                <div key={industry} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <p className="text-xl font-bold text-gray-900">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
