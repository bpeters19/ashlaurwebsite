import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { ExecutiveCard } from "./ExecutiveCard";
import { LeadershipPrinciples } from "./LeadershipPrinciples";

export const metadata = {
  title: "Leadership Team - Ashlaur Construction",
  description: "Meet Ashlaur's executive leadership team driving construction excellence and accountability across every project.",
};

interface Executive {
  id: number;
  name: string;
  title: string;
  category: "Executive" | "Project" | "Operations";
  bio: string;
  image: string;
  linkedIn?: string;
}

const executives: Executive[] = [
  {
    id: 1,
    name: "Leadership Team",
    title: "Executive Leadership",
    category: "Executive",
    bio: "Ashlaur's leadership is built on decades of combined construction experience, operational discipline, and an unwavering commitment to safety, accountability, and partnership.",
    image: "/leadership/executive-placeholder.jpg",
  },
];

export default function Leadership() {
  const executiveLeadership = executives.filter((e) => e.category === "Executive");
  const projectLeadership = executives.filter((e) => e.category === "Project");
  const operationsLeadership = executives.filter((e) => e.category === "Operations");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-6 text-white">
              <p className="text-sm font-semibold tracking-wide text-blue-400">LEADERSHIP</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                Leadership Rooted in Accountability.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                Ashlaur's leadership team brings decades of experience, operational discipline, and a commitment to excellence across every project.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Philosophy */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-8">
              Leadership Philosophy
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Ashlaur's leadership is built on a foundation of accountability, safety, and partnership. Our executive team doesn't simply manage projects—they shepherd them through every phase with precision, power, and performance.
                </p>
                <p>
                  We lead by example. Safety isn't negotiable. Accountability isn't optional. Partnership is our model, not our tagline.
                </p>
              </div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Each member of our leadership team carries a singular commitment: to deliver construction excellence that transforms vision into reality. They set the standard for every team member who follows.
                </p>
                <p>
                  This is leadership rooted in decades of construction experience and shaped by a deep commitment to our industry, our partners, and our city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Leadership Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="mb-16 space-y-4">
              <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Executive Leadership</p>
              <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900">
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                Decades of construction expertise. Proven operational discipline. Unwavering commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executiveLeadership.length > 0 ? (
                executiveLeadership.map((executive) => (
                  <ExecutiveCard key={executive.id} executive={executive} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-600 text-lg">
                    Executive profiles coming soon. Images added to /public/leadership/ will appear here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Core Leadership Principles */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Commitment to Excellence
            </h2>
            <LeadershipPrinciples />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900">
              Ready to Partner?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our leadership is committed to building long-term partnerships. Let's discuss how Ashlaur can serve your next project.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              Contact Our Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
