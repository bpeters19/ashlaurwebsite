import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { safetyMetrics } from "@/data/safety";
import { isPlaceholderValue, SHOW_PLACEHOLDER_CONTENT } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Safety",
  description: "Review Ashlaur Construction's safety philosophy, planning standards, and field practices.",
};

export default function SafetyPage() {
  const visibleMetrics = safetyMetrics.filter(
    (metric) => SHOW_PLACEHOLDER_CONTENT || !isPlaceholderValue(metric.value)
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content" className="pt-20">
        <section className="py-20 lg:py-28 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
            <p className="text-sm font-semibold tracking-wide text-blue-400 uppercase">Safety</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter">
              Every Task. Every Shift. Zero Compromise.
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Safety is built into our preconstruction plans, daily huddles, and trade coordination process.
            </p>
          </div>
        </section>

        {visibleMetrics.length > 0 && (
          <section className="py-16 lg:py-20 border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid gap-6 md:grid-cols-3">
              {visibleMetrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-gray-200 p-6">
                  <p className="text-sm text-gray-500">{metric.label}</p>
                  <p className="text-4xl font-black text-gray-900 mt-2">{metric.value}</p>
                  {SHOW_PLACEHOLDER_CONTENT && <p className="text-sm text-gray-500 mt-2">{metric.note}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid gap-8 md:grid-cols-2">
            <article className="rounded-xl bg-gray-50 p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Planning + Prevention</h2>
              <p className="mt-3 text-gray-700">
                Site-specific safety plans, task hazard analyses, and logistics sequencing are integrated before field mobilization.
              </p>
            </article>
            <article className="rounded-xl bg-gray-50 p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Field Accountability</h2>
              <p className="mt-3 text-gray-700">
                Supervisors and trade partners use daily checklists, toolbox talks, and escalation protocols to protect crews and operations.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
