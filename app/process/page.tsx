import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Process - Ashlaur Construction",
  description:
    "Learn how Ashlaur guides projects from early planning through closeout with disciplined coordination, quality control, and schedule certainty.",
};

const processSteps = [
  {
    title: "Discovery & Alignment",
    description:
      "We begin by clarifying goals, constraints, and success criteria. This phase establishes scope, budget parameters, and decision timelines so the project starts with shared expectations.",
    deliverables: ["Project goals workshop", "Initial scope alignment", "High-level budget framework"],
  },
  {
    title: "Preconstruction Planning",
    description:
      "Our team develops early cost models, schedules, and procurement strategies. We prioritize constructability and risk management to keep the plan realistic and buildable.",
    deliverables: ["Preliminary schedule", "Cost model updates", "Risk and logistics plan"],
  },
  {
    title: "Design & Coordination",
    description:
      "We coordinate with architects, engineers, and key trades to resolve conflicts early. Clear documentation and disciplined decision-making prevent downstream delays.",
    deliverables: ["Constructability reviews", "Trade coordination", "Permit readiness support"],
  },
  {
    title: "Construction Execution",
    description:
      "Field leadership, safety planning, and daily coordination keep work on track. We manage quality checks and schedule milestones to deliver consistent progress.",
    deliverables: ["Weekly look-ahead planning", "Quality control checks", "Transparent progress reporting"],
  },
  {
    title: "Closeout & Turnover",
    description:
      "We complete commissioning, punch lists, and documentation with the same discipline used during construction. The goal is a smooth transition to occupancy.",
    deliverables: ["Punch list completion", "Warranty documentation", "Owner training and handoff"],
  },
];

const expectations = [
  "Clear communication and rapid issue resolution",
  "Schedule tracking with realistic milestone updates",
  "Budget visibility and proactive change management",
  "Quality control integrated into daily field execution",
  "Safety planning that protects people and progress",
  "Coordinated trade partner management",
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-wide text-blue-600">OUR PROCESS</p>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary">A disciplined path from plan to delivery.</h1>
              <p className="text-lg text-muted max-w-3xl">
                Ashlaur guides every project with structured planning, clear communication, and field leadership that
                protects schedule, budget, and quality. Our process is consistent, adaptable, and built for complex
                projects.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How we deliver</h2>
              <p className="text-lg text-muted max-w-3xl">
                Each phase is designed to create clarity, reduce risk, and keep the team aligned from the first meeting
                through final turnover.
              </p>
            </div>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white font-semibold">
                          {index + 1}
                        </span>
                        <h3 className="text-2xl font-semibold text-secondary">{step.title}</h3>
                      </div>
                      <p className="text-base text-muted max-w-3xl">{step.description}</p>
                    </div>
                    <div className="w-full sm:min-w-[240px]">
                      <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Key outputs</p>
                      <ul className="space-y-2 text-sm text-muted">
                        {step.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What you can expect</h2>
                <p className="text-lg text-muted mb-6">
                  Our clients stay informed, supported, and confident throughout the project lifecycle. We emphasize
                  transparency, accountability, and disciplined execution.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {expectations.map((item) => (
                    <div key={item} className="rounded-xl border border-gray-200 p-4 text-sm text-muted">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-surface p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-secondary mb-4">Communication cadence</h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                    <span>Weekly coordination meetings and schedule reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                    <span>Monthly budget reporting with variance analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                    <span>Rapid issue tracking and resolution updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                    <span>Quality and safety audits throughout the build</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Ready to plan your next project?</h2>
                <p className="text-lg text-muted max-w-2xl">
                  Talk with our team about scope, schedule, and delivery strategy. We will help define the right path
                  forward.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-white font-semibold transition-colors hover:bg-blue-900"
              >
                Start the conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
