import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Construction Management - Ashlaur Construction",
  description:
    "Construction management that controls scope, budget, and schedule through disciplined preconstruction and transparent project governance.",
};

export default function ConstructionManagement() {
  const scopeItems = [
    "Preconstruction planning and milestone definition",
    "Cost modeling, value analysis, and budget governance",
    "Bid packaging, leveling, and procurement strategy",
    "Site logistics and phasing integration",
    "Owner reporting cadence and decision controls",
    "Closeout planning, turnover readiness, and warranty coordination",
  ];

  const controls = [
    "Weekly risk register updates with assigned action ownership",
    "Schedule health checks against critical path commitments",
    "Change management workflow with budget impact validation",
    "Documentation discipline across meetings, submittals, and approvals",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 overflow-x-hidden">
        <section className="relative isolate overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(8,13,24,0.52) 0%, rgba(8,13,24,0.74) 55%, rgba(8,13,24,0.8) 100%), url('/images/about/about-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28 lg:py-36">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">
              Construction Management
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl font-medium">
              Planning-led delivery governance that protects scope, cost, schedule, and project certainty.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6">Management Discipline</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl">
              We establish governance early so execution stays aligned as projects move from design to field operations. Scope decisions, budget movement, and schedule commitments are managed through a fixed reporting structure with clear owner visibility. This operating model reduces uncertainty and keeps project teams accountable to measurable outcomes.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-10">Scope of Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scopeItems.map((item) => (
                <div key={item} className="rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-800 font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6">Control Framework</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our control framework connects preconstruction assumptions to real-time field performance. Variances are identified quickly, communicated clearly, and addressed through structured recovery actions before they compound.
              </p>
            </div>
            <ul className="space-y-3">
              {controls.map((item) => (
                <li key={item} className="rounded-lg bg-gray-100 px-5 py-4 text-gray-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-8">Leadership Accountability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Project Executives set governance standards and escalation paths",
                "Project Managers control budget movement and documentation integrity",
                "Superintendents align field production with sequence and safety plans",
                "Core team metrics are reviewed routinely to protect delivery certainty",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-white/15 bg-white/5 px-6 py-5 text-white/90 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Weekly Budget Integrity Reviews",
              "Milestone-Based Schedule Validation",
              "Owner-Facing Decision Transparency",
              "Documented Risk Mitigation Controls",
            ].map((metric) => (
              <div key={metric} className="rounded-lg bg-gray-100 px-4 py-5 text-center text-gray-900 font-extrabold tracking-tight">
                {metric}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">Build With Confidence</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Partner with a construction management team that protects outcomes through structure and discipline.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-8 py-3 font-bold hover:bg-gray-200 transition-colors">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
