import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Architect Services - Ashlaur Construction",
  description:
    "Architect support services focused on technical coordination, buildability, and document quality for controlled project execution.",
};

export default function ArchitectServices() {
  const scopeItems = [
    "Technical detailing and drawing package development",
    "Specification and scope interface coordination",
    "Constructability review with field-informed feedback",
    "Multidiscipline clash identification and resolution support",
    "Design update validation against budget and schedule",
    "Bid-set and permit-set readiness quality checks",
  ];

  const controls = [
    "Document control protocols for revision clarity and traceability",
    "Issue logs with assigned ownership and closure timelines",
    "Coordination meetings aligned to package release milestones",
    "Field feedback integration to reduce RFIs and change pressure",
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">Architect Services</h1>
            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl font-medium">
              Technical design support that strengthens buildability, coordination, and document integrity.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6">Documentation Discipline</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl">
              We help design teams deliver coordinated, construction-ready documents that reduce ambiguity in the field. Our process focuses on the technical details that most often drive RFIs, change orders, and schedule disruption. By resolving interfaces early, we protect design intent while improving execution certainty.
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
                Our framework establishes accountability for document quality, coordination timing, and issue closure. Teams operate on defined release milestones, giving owners and design partners confidence that packages are complete, coordinated, and field-ready.
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
                "Technical leads enforce package quality and coordination standards",
                "Project managers manage issue logs and document release discipline",
                "Construction leadership validates field constructability before release",
                "Cross-functional reviews keep design intent and execution aligned",
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
              "Reduced RFI Exposure",
              "Higher Document Coordination Accuracy",
              "Better Bid and Permit Readiness",
              "Stronger Field Constructability Outcomes",
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
              Partner with a team that strengthens design packages before they reach the field.
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
