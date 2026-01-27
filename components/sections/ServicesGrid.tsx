"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type ServiceCategory = "commercial" | "infrastructure" | "healthcare" | "education" | "residential" | "cdot";

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  const services = [
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and mixed-use developments",
      image: "/images/services/commercial.jpg",
      projects: "50+ Projects",
      category: "commercial"
    },
    {
      title: "Infrastructure",
      description: "Bridges, roads, and public infrastructure projects",
      image: "/images/services/infrastructure.jpg",
      projects: "30+ Projects",
      category: "infrastructure"
    },
    {
      title: "Healthcare",
      description: "Hospitals, clinics, and medical facilities",
      image: "/images/services/healthcare.jpg",
      projects: "25+ Projects",
      category: "healthcare"
    },
    {
      title: "Education",
      description: "Schools, universities, and educational facilities",
      image: "/images/services/education.jpg",
      projects: "40+ Projects",
      category: "education"
    },
    {
      title: "Residential",
      description: "Multi-family housing and residential communities",
      image: "/images/services/residential.jpg",
      projects: "35+ Projects",
      category: "residential"
    },
    {
      title: "CDOT",
      description: "Chicago Department of Transportation projects",
      image: "/images/services/cdot.jpg",
      projects: "20+ Projects",
      category: "cdot"
    }
  ];

  const projectsData = {
    commercial: [
      { name: "Downtown Office Complex", description: "25-story office building", image: "/images/projects/downtown-office.jpg" },
      { name: "Retail Mall Development", description: "Mixed-use retail space", image: "/images/projects/retail-mall.jpg" },
      { name: "Corporate Headquarters", description: "Modern office campus", image: "/images/projects/corporate-hq.jpg" }
    ],
    infrastructure: [
      { name: "Highway Bridge Project", description: "Major bridge construction", image: "/images/projects/highway-bridge.jpg" },
      { name: "Road Expansion", description: "Highway widening project", image: "/images/projects/road-expansion.jpg" },
      { name: "Public Transit Hub", description: "Transportation center", image: "/images/projects/transit-hub.jpg" }
    ],
    healthcare: [
      { name: "Medical Center Expansion", description: "Hospital wing addition", image: "/images/projects/medical-center.jpg" },
      { name: "Clinic Renovation", description: "Modern medical facility", image: "/images/projects/clinic-renovation.jpg" },
      { name: "Research Lab", description: "Medical research building", image: "/images/projects/research-lab.jpg" }
    ],
    education: [
      { name: "University Campus", description: "Academic buildings", image: "/images/projects/university-campus.jpg" },
      { name: "School Renovation", description: "K-12 facility upgrade", image: "/images/projects/school-renovation.jpg" },
      { name: "Library Expansion", description: "Educational library", image: "/images/projects/library-expansion.jpg" }
    ],
    residential: [
      { name: "Westhaven Park Station – Mixed-Income Apartments", description: "12-story mixed-income residential building with retail space. 96 apartment units (one- and two-bedroom), with three ground-floor retail spaces. Built as part of the redevelopment of the former Henry Horner Homes site on Chicago's Near West Side.", image: "/images/projects/westhaven-park.jpg" },
      { name: "The Foglia Residences – Affordable Housing for Blind & Visually Impaired", description: "Multi-family affordable housing development. 76 affordable apartments for residents who are blind, visually impaired, disabled, and veterans. Nine-story podium structure with accessibility features.", image: "/images/projects/foglia-residences.jpg" },
      { name: "Apartment Complex", description: "Multi-family housing", image: "/images/projects/apartment-complex.jpg" },
      { name: "Condominium Development", description: "Luxury residences", image: "/images/projects/condominium-development.jpg" },
      { name: "Townhouse Community", description: "Residential neighborhood", image: "/images/projects/townhouse-community.jpg" }
    ],
    cdot: [
      { name: "Highway Maintenance", description: "Road repair project", image: "/images/projects/highway-maintenance.jpg" },
      { name: "Bridge Inspection", description: "Infrastructure assessment", image: "/images/projects/bridge-inspection.jpg" },
      { name: "Traffic Signal Upgrade", description: "Transportation improvement", image: "/images/projects/traffic-signal-upgrade.jpg" }
    ]
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-surface rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service.category as ServiceCategory)}
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
                <p className="text-muted mb-4">{service.description}</p>
                <p className="text-primary font-medium">{service.projects}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-md transition duration-300">
            View All Markets
          </button>
        </motion.div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-secondary">
                    {services.find(s => s.category === selectedService)?.title} Projects
                  </h3>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-muted hover:text-secondary text-2xl"
                  >
                    ×
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectsData[selectedService]?.map((project, index) => (
                    <div key={index} className="bg-accent rounded-lg overflow-hidden">
                      <div className="h-40 relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-secondary mb-2">{project.name}</h4>
                        <p className="text-muted text-sm">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;