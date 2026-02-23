import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Design-Build - Ashlaur Construction",
  description:
    "Integrated design-build delivery that unifies design and construction under one accountable team for faster, lower-risk execution.",
};

export default function DesignBuild() {
  const scopeItems = [
    "Single-team accountability from concept through turnover",
    "Design management with continuous constructability review",
    "Progressive cost modeling and budget control",
    "Permitting strategy and authority coordination",
    "Early trade engagement and procurement sequencing",
    "Commissioning, turnover readiness, and closeout controls",
  ];

  const controls = [
    "Design decision logs tied directly to cost and schedule impact",
    "Milestone gate reviews to protect scope and quality objectives",
    "Integrated issue resolution between design and field teams",
    "Real-time budget reconciliation as design advances",
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">Design-Build</h1>
            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl font-medium">
              Integrated design and construction delivery with single-point accountability and disciplined execution.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6">Integrated Delivery Model</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl">
              Design-build removes fragmentation by aligning design intent, cost control, and field execution under one leadership structure. We establish project priorities early and manage decisions through a coordinated process that keeps design progression grounded in constructability. The result is faster delivery, clearer accountability, and fewer downstream surprises.
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
                Our team controls performance through integrated design and construction checkpoints. Budget exposure, schedule impact, and technical risk are evaluated as one system, enabling faster decisions without sacrificing quality.
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
                "Design and construction leaders operate from one unified delivery plan",
                "Project Managers maintain budget transparency through every design phase",
                "Superintendents provide constructability input before field mobilization",
                "Milestone reviews ensure commitments are met before phase release",
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
              "Single-Point Contractual Accountability",
              "Continuous Cost and Scope Alignment",
              "Faster Decision Cycle Time",
              "Reduced Design-to-Field Friction",
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
              Partner with a design-build team that integrates planning, pricing, and field execution from day one.
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
