import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Culture & Values - Ashlaur Construction",
  description: "Discover Ashlaur's culture of teamwork, community engagement, and employee growth.",
};

export default function Culture() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-6 text-white">
              <p className="text-sm font-semibold tracking-wide text-blue-400">OUR VALUES</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                Our Culture
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                Built by people. Defined by partnership. Driven by commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Our People */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-8">
              Our People Deliver Excellence
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Ashlaur's culture is rooted in respect. We hire people who care about precision, safety, and partnership. We develop them. We trust them. We celebrate their wins.
                </p>
                <p>
                  Every team member—from project managers to field supervisors—represents Ashlaur's commitment to accountability and excellence. They are our competitive advantage.
                </p>
              </div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  We invest in our people because we know that great construction comes from great teams. Training, leadership development, safety certifications—we support each person's growth.
                </p>
                <p>
                  Our culture celebrates collaboration. We solve complex problems together. We support each other through challenges. We win as one team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Collaboration */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Collaboration in Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Cross-Functional Teams</h3>
                <p className="text-gray-600 leading-relaxed">
                  We bring together superintendents, safety coordinators, estimators, and field teams to collaborate on complex solutions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Open Communication</h3>
                <p className="text-gray-600 leading-relaxed">
                  Conversations happen freely. Problems are surfaced early. Solutions emerge from diverse perspectives and shared ownership.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Shared Accountability</h3>
                <p className="text-gray-600 leading-relaxed">
                  We hold each other accountable—for safety, quality, schedule, and budget. Accountability builds trust and delivers results.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Continuous Improvement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every project teaches us something. We capture lessons, share knowledge, and improve systems that serve everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Engagement */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-8">
              Community Engagement
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  We believe construction companies have a responsibility to the communities they serve. Ashlaur is committed to:
                </p>
                <ul className="space-y-3">
                  {["Supporting local workforce development", "Partnering with community organizations", "Championing diversity and inclusion", "Contributing to Chicago's built future"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Our people give back. They volunteer. They mentor. They shape the next generation of construction professionals.
                </p>
                <p>
                  This isn't charity—it's part of who we are. Building stronger communities makes us stronger. Our success depends on the success of the places where we build.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Growth */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Growth & Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {["Training Programs", "Leadership Development", "Safety Certifications", "Career Pathways"].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg space-y-3">
                  <h3 className="font-bold text-gray-900">{item}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We invest in your future, supporting growth at every career stage.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ashlaur is hiring talented construction professionals. Build your career with a company that values accountability, safety, and partnership.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              Explore Careers
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
