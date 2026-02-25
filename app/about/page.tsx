import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About AshLaur - Building Tomorrow, Today",
  description: "Learn about AshLaur's commitment to precision, power, and performance in modern construction.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-28 md:py-32 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-6">
              <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">About</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Building With Precision. Leading With Integrity.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
                AshLaur delivers complex construction projects with disciplined execution, clear accountability, and long-term partnership. We combine field expertise with operational rigor to build environments that perform for decades.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:gap-14 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
              </div>
              <div className="lg:col-span-8 space-y-5 text-lg text-gray-700">
                <p>
                  For more than two decades, AshLaur has delivered construction programs across commercial, institutional, healthcare, education, and public-sector markets.
                </p>
                <p>
                  We serve clients throughout the Midwest with the capacity to execute in complex regulatory and operational environments, including occupied facilities and accelerated schedules.
                </p>
                <p>
                  Our core strengths are preconstruction discipline, field leadership, safety culture, and transparent project controls that keep teams aligned from planning through closeout.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Principles</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Safety First</h3>
                <p className="text-gray-700">Every decision starts with protecting people, sites, and operations through proactive planning and consistent standards.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Quality Without Compromise</h3>
                <p className="text-gray-700">We execute with precision and hold every trade partner accountable to the same level of workmanship.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Client Partnership</h3>
                <p className="text-gray-700">We communicate early, clearly, and consistently so owners can make informed decisions with confidence.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Accountability</h3>
                <p className="text-gray-700">We own outcomes, solve issues directly, and follow through from kickoff to final turnover.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Sets Us Apart</h2>
              <p className="text-lg text-gray-700">Our teams are built for performance in high-stakes environments where schedule, safety, and quality all matter equally.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Proactive Project Management</h3>
                <p className="text-gray-700">We identify risks early, coordinate decisively, and keep work moving with disciplined planning.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Transparent Communication</h3>
                <p className="text-gray-700">Owners and partners receive clear reporting, real status updates, and direct visibility into progress.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Self-Perform Capabilities</h3>
                <p className="text-gray-700">When critical path control is required, our teams execute key scopes with speed and consistency.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Experienced Leadership</h3>
                <p className="text-gray-700">Seasoned field and project leaders bring steady decision-making through every project phase.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-gray-900">100+</p>
                <p className="text-sm md:text-base text-gray-700 uppercase tracking-wide">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-gray-900">20+</p>
                <p className="text-sm md:text-base text-gray-700 uppercase tracking-wide">Years Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-gray-900">6</p>
                <p className="text-sm md:text-base text-gray-700 uppercase tracking-wide">States Served</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-gray-900">90%</p>
                <p className="text-sm md:text-base text-gray-700 uppercase tracking-wide">Repeat Clients</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Let&apos;s Build Something That Lasts.</h2>
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold border border-primary hover:bg-secondary hover:border-secondary transition-colors"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}