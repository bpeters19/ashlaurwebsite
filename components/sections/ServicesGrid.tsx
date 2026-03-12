"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ServicesGrid = () => {
  const services = [
    {
      step: "01",
      title: "General Contracting",
      description:
        "Full-scope delivery led by experienced field teams, clear project controls, and disciplined coordination from groundbreaking to closeout.",
      href: "/services/general-contracting",
    },
    {
      step: "02",
      title: "Construction Management",
      description:
        "Planning-led oversight that protects budget, clarifies schedule, and keeps trade partners aligned from preconstruction through turnover.",
      href: "/services/construction-management",
    },
    {
      step: "03",
      title: "Design-Build",
      description:
        "Single-team delivery that aligns design intent with constructability, allowing faster decisions and stronger cost certainty.",
      href: "/services/design-build",
    },
    {
      step: "04",
      title: "Architect Services",
      description:
        "Design support and technical coordination that make documents buildable, coordinated, and ready for the field.",
      href: "/services/architect-services",
    },
    {
      step: "05",
      title: "Subcontracting",
      description:
        "ASHLAUR partners with general contractors and project teams to deliver specialized scopes with reliability and precision. Our team integrates seamlessly into active job sites, maintaining the same standards of safety, communication, and quality that define every ASHLAUR project.",
      href: "/about/become-a-subcontractor",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Comprehensive construction solutions across all major sectors.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col items-center gap-10 md:grid md:grid-cols-2 md:gap-y-12 md:gap-x-8 lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:items-start">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group w-full max-w-[280px] flex flex-col items-center text-center"
            >
              <Link
                href={service.href}
                aria-label={`${service.title} service`}
                className="w-[220px] h-[220px] rounded-full bg-primary hover:bg-secondary text-white flex flex-col items-center justify-center text-center px-6 cursor-pointer transition-all duration-[350ms] ease-[ease] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-200 mb-2">
                  {service.step}
                </span>
                <h3 className="text-[1.4rem] font-semibold leading-tight">{service.title}</h3>
              </Link>

              <p className="mt-5 text-sm text-muted leading-relaxed opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 min-h-[88px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link 
            href="/services"
            className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All Markets
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;