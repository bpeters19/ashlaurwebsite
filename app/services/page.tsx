import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Services() {
  const services = [
    {
      title: "General Contracting",
      href: "/services/general-contracting",
      preview:
        "Full-scope delivery led by experienced field teams, clear project controls, and disciplined coordination from groundbreaking to closeout.",
    },
    {
      title: "Construction Management",
      href: "/services/construction-management",
      preview:
        "Planning-led oversight that protects budget, clarifies schedule, and keeps trade partners aligned from preconstruction through turnover.",
    },
    {
      title: "Design-Build",
      href: "/services/design-build",
      preview:
        "Single-team delivery that aligns design intent with constructability, allowing faster decisions and stronger cost certainty.",
    },
    {
      title: "Architect Services",
      href: "/services/architect-services",
      preview:
        "Design support and technical coordination that make documents buildable, coordinated, and ready for the field.",
    },
    {
      title: "Subcontracting",
      href: "/about/become-a-subcontractor",
      preview:
        "ASHLAUR partners with general contractors and project teams to deliver specialized scopes with reliability and precision. Our team integrates seamlessly into active job sites, maintaining the same standards of safety, communication, and quality that define every ASHLAUR project.",
      capabilities: [
        "Interior remodeling and build-outs",
        "Commercial and institutional project support",
        "Coordination with general contractors and trade partners",
        "Schedule-driven execution to keep projects on track",
        "Quality control and safety-focused jobsite performance",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-secondary mb-8">Our Services</h1>
          <p className="text-lg text-muted">
            Explore the ways we support owners, architects, and partners across the full project lifecycle.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <h2 className="text-2xl font-semibold text-secondary mb-3">{service.title}</h2>
                <p className="text-sm text-muted leading-relaxed">{service.preview}</p>
                {"capabilities" in service && Array.isArray(service.capabilities) && service.capabilities.length > 0 && (
                  <ul className="mt-4 space-y-1 text-sm text-muted leading-relaxed">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-2">
                        <span className="mt-1">•</span>
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}