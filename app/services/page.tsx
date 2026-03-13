"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const services = [
    {
      sectionId: "general-contracting-summary",
      title: "General Contracting",
      href: "/services/general-contracting",
      preview:
        "Full-scope delivery with experienced field teams, clear controls, and disciplined coordination from groundbreaking to closeout.",
      highlights: ["Field leadership", "Schedule control", "Quality-first execution"],
      summary:
        "General Contracting centers on disciplined field execution, reliable sequencing, and accountability from mobilization through closeout. The page focuses on how Ashlaur manages site logistics, daily coordination, quality control, and turnover with clear visibility for owners and partners.",
      summaryPoints: [
        "Superintendent-led field coordination and production planning",
        "Project controls tied to safety, quality, budget, and schedule",
        "Structured closeout, turnover, and warranty tracking",
      ],
    },
    {
      sectionId: "construction-management-summary",
      title: "Construction Management",
      href: "/services/construction-management",
      preview:
        "Planning-led oversight that protects budget, clarifies schedule, and keeps trade partners aligned through turnover.",
      highlights: ["Budget protection", "Scope clarity", "Trade partner alignment"],
      summary:
        "Construction Management is presented as a planning-led governance model that protects scope, budget, and schedule before issues compound. The page emphasizes reporting discipline, risk control, owner visibility, and measurable accountability from preconstruction through final turnover.",
      summaryPoints: [
        "Preconstruction planning and milestone definition",
        "Budget governance, procurement strategy, and schedule validation",
        "Clear reporting structure with routine risk and decision controls",
      ],
    },
    {
      sectionId: "design-build-summary",
      title: "Design-Build",
      href: "/services/design-build",
      preview:
        "Single-team delivery that aligns design intent with constructability, allowing faster decisions and stronger cost certainty.",
      highlights: ["Single-team accountability", "Faster decisions", "Cost certainty"],
      summary:
        "Design-Build highlights an integrated delivery model where design intent, cost control, and field execution are managed under one accountable team. The page focuses on reducing fragmentation, accelerating decisions, and keeping scope, budget, and constructability aligned from concept through completion.",
      summaryPoints: [
        "Unified design and construction accountability",
        "Continuous cost and scope alignment during design progression",
        "Integrated issue resolution that reduces downstream friction",
      ],
    },
    {
      sectionId: "architect-services-summary",
      title: "Architect Services",
      href: "/services/architect-services",
      preview:
        "Design support and technical coordination that keeps documents buildable, coordinated, and field-ready.",
      highlights: ["Document coordination", "Constructability support", "Field-ready details"],
      summary:
        "Architect Services focuses on technical design support that improves document quality, coordination, and buildability before work reaches the field. The page positions Ashlaur as a partner in reducing ambiguity, resolving interfaces early, and producing construction-ready packages.",
      summaryPoints: [
        "Technical detailing and package development",
        "Constructability review with field-informed feedback",
        "Document control and issue tracking for coordinated release milestones",
      ],
    },
    {
      sectionId: "subcontracting-summary",
      title: "Subcontracting",
      href: "/about/become-a-subcontractor",
      preview:
        "ASHLAUR partners with general contractors and project teams to deliver specialized scopes with reliability, precision, and strong safety, communication, and quality standards.",
      highlights: [
        "Interior remodeling and build-outs",
        "Commercial and institutional project support",
        "Coordination with general contractors and trade partners",
        "Schedule-driven execution",
        "Quality and safety-focused performance",
      ],
      summary:
        "Subcontracting outlines how Ashlaur builds reliable trade partnerships through clear communication, professional standards, and long-term relationship building. The page covers partnership expectations, prequalification requirements, insurance standards, and the vendor registration process.",
      summaryPoints: [
        "Transparent partnerships with schedule discipline and clear communication",
        "Prequalification and insurance requirements for qualified trade partners",
        "Step-by-step vendor registration and approval process",
      ],
    },
  ];

  const activeService = services[activeServiceIndex];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-secondary mb-8">Our Services</h1>
          <p className="text-lg text-muted">
            Explore the ways we support owners, architects, and partners across the full project lifecycle.
          </p>

          <div className="mt-14 flex flex-col items-center gap-10 md:grid md:grid-cols-2 md:gap-y-12 md:gap-x-8 lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:items-start">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => setActiveServiceIndex(index)}
                aria-pressed={activeServiceIndex === index}
                aria-label={`View ${service.title} details`}
                className="group w-full max-w-[280px] flex flex-col items-center text-center"
              >
                <div className={`relative overflow-hidden w-[220px] h-[220px] rounded-full bg-primary text-white flex flex-col items-center justify-center text-center px-4 cursor-pointer transition-all duration-[350ms] ease-[ease] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2 ${activeServiceIndex === index ? "scale-[1.05] shadow-[0_10px_30px_rgba(0,0,0,0.2)] bg-secondary" : ""}`}>
                  <span className="absolute inset-0 rounded-full border border-white/20 transition-transform duration-[350ms] ease-[ease] group-hover:scale-110" />
                  <span className={`absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-black/20 transition-opacity duration-[350ms] ease-[ease] ${activeServiceIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-200 mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.22rem] sm:text-[1.3rem] md:text-[1.4rem] font-semibold leading-tight max-w-[13ch] whitespace-normal">
                    {service.title}
                  </span>
                </div>
                <p className={`mt-5 text-sm text-muted leading-relaxed transition-all duration-300 ease-out min-h-[96px] ${activeServiceIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"}`}>
                  {service.preview}
                </p>
              </button>
            ))}
          </div>

          <section className="mt-16 rounded-2xl border border-border bg-surface p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <p className="text-sm font-semibold tracking-wide text-primary uppercase">Selected Service</p>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">{activeService.title}</h2>
                <p className="text-base md:text-lg text-muted leading-relaxed">{activeService.preview}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted">
                  {activeService.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 space-y-4">
                  <p className="text-sm font-semibold tracking-wide text-primary uppercase">Service Summary</p>
                  <p className="text-base md:text-lg text-muted leading-relaxed">{activeService.summary}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {activeService.summaryPoints.map((item) => (
                    <div key={item} className="rounded-xl bg-white border border-border p-5">
                      <p className="text-sm text-secondary font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <Link
                  href={activeService.href}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-md transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Connect with our team to discuss scope, schedule, and the right delivery strategy for your next project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-white text-primary font-semibold rounded-md hover:bg-slate-100 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}