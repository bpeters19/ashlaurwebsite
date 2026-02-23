import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Safety & Quality Planning - AshLaur",
  description:
    "Disciplined safety and quality planning rooted in preconstruction rigor, field accountability, and documented control.",
};

const safetyFrameworkItems = [
  "Site-specific safety plans",
  "Pre-task hazard analysis (PTHA)",
  "Weekly toolbox talks",
  "Superintendent-led daily inspections",
  "Subcontractor prequalification standards",
  "Incident reporting and corrective action tracking",
];

const riskStrategyItems = [
  "Trade coordination before mobilization",
  "Site logistics planning",
  "Temporary protection strategy",
  "Phasing analysis",
  "Safety sequencing",
  "Access control",
];

const qualitySystemItems = [
  "Submittal review process",
  "Shop drawing coordination",
  "Mockups and sample approvals",
  "Pre-installation meetings",
  "Inspection tracking",
  "Closeout documentation discipline",
];

const qualityChecklist = [
  "QA/QC inspection logs",
  "Trade coordination meetings",
  "Third-party verification when required",
  "Digital documentation tracking",
  "Structured punchlist management",
];

const metrics = [
  "0 Lost Time Incidents",
  "100% OSHA Compliant Projects",
  "100% Subcontractor Prequalification",
  "100% Quality Documentation Delivered",
];

export default function SafetyQualityPlanningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 overflow-x-hidden">
        <section className="relative isolate overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(10,15,26,0.52) 0%, rgba(10,15,26,0.72) 58%, rgba(10,15,26,0.78) 100%), url('/images/about/about-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28 lg:py-36">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">
              Safety &amp; Quality Planning
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl font-medium">
              Disciplined planning. Zero compromise. Built right the first time.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6">
              Built on Discipline
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-4xl">
              Safety and quality are embedded in how we plan, staff, and execute every project—not layered in after mobilization. Our preconstruction process defines controls early, aligns trade responsibilities, and closes procedural gaps before work starts. Risk mitigation is built into daily operations through clear field standards, defined escalation paths, and documented follow-through. Accountability is non-negotiable at every level, from project leadership to each trade partner on site.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-10">
              A Structured Safety Framework
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our safety culture is leadership-driven, field-enforced, and fully aligned with OSHA requirements and project-specific mandates. Standards are communicated before work starts, reinforced in the field every day, and backed by documented corrective actions. Superintendents and project leadership maintain visible enforcement so expectations remain clear and consistent across all trades.
              </p>
              <ul className="space-y-3">
                {safetyFrameworkItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-800 font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-8">
              Risk Identified Before Ground Is Broken
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mb-8">
              We treat risk planning as a front-end operational discipline, not a reactive exercise. Before mobilization, teams align sequencing, logistics, and trade interfaces to prevent field conflicts and avoid unsafe work conditions. Every project is stress-tested through coordinated planning so crews enter the site with clear controls, clear access, and clear accountability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {riskStrategyItems.map((item) => (
                <div key={item} className="rounded-lg bg-gray-100 px-5 py-4 text-gray-800 font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-10">
              Quality Built Into Every Phase
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <ul className="space-y-4">
                  {qualitySystemItems.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-800 text-lg leading-relaxed">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Execution Checklist</h3>
                <ul className="space-y-3">
                  {qualityChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="text-secondary font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-8">
              Leadership Owns the Outcome
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Superintendents enforce standards daily",
                "Project Managers track compliance and documentation",
                "Field teams are accountable for disciplined execution",
                "Safety and quality metrics are reviewed regularly",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-white/15 bg-white/5 px-6 py-5 text-white/90 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <div key={metric} className="rounded-lg bg-gray-100 px-4 py-5 text-center">
                  <p className="text-base sm:text-lg font-extrabold tracking-tight text-gray-900">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">Build With Confidence</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Partner with a team that prioritizes safety, structure, and disciplined execution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-8 py-3 font-bold hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
