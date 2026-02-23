import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "General Contracting - Ashlaur Construction",
  description:
    "General contracting led by disciplined field operations, rigorous controls, and accountability from mobilization through closeout.",
};

export default function GeneralContracting() {
  const scopeItems = [
    "Trade partner procurement and contract administration",
    "Mobilization planning and site logistics control",
    "Superintendent-led daily field coordination",
    "Schedule controls with look-ahead production planning",
    "QA/QC inspections and deficiency resolution",
    "Closeout execution, turnover, and warranty tracking",
  ];

  const controls = [
    "Daily reports, manpower tracking, and production visibility",
    "RFI and submittal coordination tied to field sequencing",
    "Change event identification and cost impact tracking",
    "Milestone recovery planning when schedule pressure emerges",
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
              General Contracting
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl font-medium">
              Full-scope field execution with disciplined controls, reliable sequencing, and accountable delivery.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6">Execution Standard</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl">
              We lead construction with field-first discipline, clear chain-of-command, and measurable production control. Every phase is managed against safety, quality, and schedule commitments established before mobilization. Owners receive direct visibility into progress, constraints, and corrective action so decisions stay timely and informed.
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
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6">Project Controls</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our teams run a structured control cycle that aligns daily field execution with budget, schedule, and quality benchmarks. Issues are surfaced early, documented clearly, and resolved through accountable action plans.
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
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-8">Field Leadership Accountability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Superintendents enforce plan-of-day standards and site readiness",
                "Project Managers track commitments, documentation, and recovery actions",
                "Trade partners are measured against production and quality expectations",
                "Leadership reviews safety and quality metrics on a fixed cadence",
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
              "Zero Tolerance for Rework Drift",
              "Weekly Cost and Schedule Reconciliation",
              "Daily Site Safety Verification",
              "Structured Closeout Documentation",
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
              Partner with a field team that executes with discipline from notice to proceed through turnover.
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
