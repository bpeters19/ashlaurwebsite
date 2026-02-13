"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ServiceCategory = "commercial" | "hospitality" | "healthcare" | "education" | "residential" | "cdot";

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  const services = [
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and mixed-use developments",
      image: "/images/services/commercial/commercial.png",
      projects: "50+ Projects",
      category: "commercial",
      href: "/services?service=commercial"
    },
    {
      title: "Hospitality",
      description: "Hotels, resorts, and hospitality venues",
      image: "/images/services/hospitality/hospitality.jpg",
      projects: "15+ Projects",
      category: "hospitality",
      href: "/services?service=hospitality"
    },
    {
      title: "Healthcare",
      description: "Hospitals, clinics, and medical facilities",
      image: "/images/services/healthcare/healthcare%20photo.png",
      projects: "25+ Projects",
      category: "healthcare",
      href: "/services?service=healthcare"
    },
    {
      title: "Education",
      description: "Schools, universities, and educational facilities",
      image: "/images/services/education/education.png",
      projects: "40+ Projects",
      category: "education",
      href: "/services?service=education"
    },
    {
      title: "Residential",
      description: "Multi-family housing and residential communities",
      image: "/images/services/residential/residential%20photo.png",
      projects: "35+ Projects",
      category: "residential",
      href: "/services?service=residential"
    },
    {
      title: "CDOT",
      description: "Chicago Department of Transportation projects",
      image: "/images/services/cdot/cdot%20image.jpg",
      projects: "20+ Projects",
      category: "cdot",
      href: "/services?service=cdot"
    }
  ];

  const projectsData = {
    commercial: [
      { name: "Downtown Office Complex", description: "25-story office building", image: "https://picsum.photos/seed/ashlaur-downtown-office/800/600" },
      { name: "Retail Mall Development", description: "Mixed-use retail space", image: "https://picsum.photos/seed/ashlaur-retail-mall/800/600" },
      { name: "Corporate Headquarters", description: "Modern office campus", image: "https://picsum.photos/seed/ashlaur-corporate-hq/800/600" }
    ],
    hospitality: [
      { name: "Wicker Park Hyatt Hotel", description: "Boutique hotel in Wicker Park", image: "https://picsum.photos/seed/ashlaur-wicker-hyatt/800/600" },
      { name: "Sophy Hotel Hyde Park", description: "Modern hotel near University of Chicago", image: "https://picsum.photos/seed/ashlaur-sophy-hotel/800/600" },
      { name: "Zachary Hotel", description: "Contemporary downtown hotel", image: "https://picsum.photos/seed/ashlaur-zachary-hotel/800/600" }
    ],
    healthcare: [
      { name: "Cook County Health Belmont – Cragin Health Center", description: "Community health facility", image: "https://picsum.photos/seed/ashlaur-belmont-cragin/800/600" },
      { name: "Stroger Hospital Doors and Hardware Replacement", description: "Lower Level to 8th Floor", image: "https://picsum.photos/seed/ashlaur-stroger-doors/800/600" },
      { name: "Friend Health Woodlawn HQ", description: "Healthcare headquarters", image: "https://picsum.photos/seed/ashlaur-friend-health/800/600" }
    ],
    education: [
      { name: "Indiana University – Raintree Hall", description: "Student residence hall", image: "https://picsum.photos/seed/ashlaur-indiana-raintree/800/600" },
      { name: "Near West CPS Offices", description: "CPS administrative facility", image: "https://picsum.photos/seed/ashlaur-near-west-cps/800/600" }
    ],
    residential: [
      { name: "Westhaven Park Station – Mixed-Income Apartments", description: "12-story mixed-income residential building with retail space. 96 apartment units (one- and two-bedroom), with three ground-floor retail spaces. Built as part of the redevelopment of the former Henry Horner Homes site on Chicago's Near West Side.", image: "https://picsum.photos/seed/ashlaur-westhaven-park/800/600" },
      { name: "The Foglia Residences – Affordable Housing for Blind & Visually Impaired", description: "Multi-family affordable housing development. 76 affordable apartments for residents who are blind, visually impaired, disabled, and veterans. Nine-story podium structure with accessibility features.", image: "https://picsum.photos/seed/ashlaur-foglia-residences/800/600" },
      { name: "Apartment Complex", description: "Multi-family housing", image: "https://picsum.photos/seed/ashlaur-apartment-complex/800/600" },
      { name: "Condominium Development", description: "Luxury residences", image: "https://picsum.photos/seed/ashlaur-condominium-development/800/600" },
      { name: "Townhouse Community", description: "Residential neighborhood", image: "https://picsum.photos/seed/ashlaur-townhouse-community/800/600" }
    ],
    cdot: [
      { name: "Highway Maintenance", description: "Road repair project", image: "https://picsum.photos/seed/ashlaur-highway-maintenance/800/600" },
      { name: "Bridge Inspection", description: "Infrastructure assessment", image: "https://picsum.photos/seed/ashlaur-bridge-inspection/800/600" },
      { name: "Traffic Signal Upgrade", description: "Transportation improvement", image: "https://picsum.photos/seed/ashlaur-traffic-signal-upgrade/800/600" }
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
              className="group"
            >
              <Link 
                href={service.href}
                className="bg-surface rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer block hover:scale-105 hover:brightness-110"
              >
                <div className="h-48 relative overflow-hidden bg-gray-200 group-hover:brightness-110 transition-all duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-300">{service.description}</p>
                  <p className="text-blue-700 font-medium group-hover:text-blue-900 transition-colors duration-300">{service.projects}</p>
                </div>
              </Link>
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

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 cursor-pointer" onClick={() => setSelectedService(null)}>
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto cursor-default" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {services.find(s => s.category === selectedService)?.title} Projects
                  </h3>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-600 hover:text-gray-900 text-2xl cursor-pointer transition-colors duration-300"
                  >
                    ×
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectsData[selectedService]?.map((project, index) => (
                    <a key={index} href="/projects" className="group cursor-pointer">
                      <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="h-40 relative overflow-hidden group-hover:brightness-110 transition-all duration-300">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{project.name}</h4>
                          <p className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors duration-300">{project.description}</p>
                        </div>
                      </div>
                    </a>
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