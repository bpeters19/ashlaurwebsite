"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CertsSection = () => {
  const certifications = [
    {
      name: "Chicago Housing Authority",
      image: "/images/certs/CHA+logo%20cert.png",
      description: "Chicago Housing Authority"
    },
    {
      name: "CMS Certified",
      image: "/images/certs/CMS+logo%20cert.jpg",
      description: "Central Management Services"
    },
    {
      name: "MBE Certified",
      image: "/images/certs/MBE+logo%20cert.png",
      description: "Minority Business Enterprise"
    },
    {
      name: "DBE Certified",
      image: "/images/certs/DBE+logo%20cert.png",
      description: "Disadvantaged Business Enterprise"
    },
    {
      name: "CDOT Approved",
      image: "/images/certs/CDOT-Logo%20cert.png",
      description: "Chicago Department of Transportation"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Certifications & Accreditations
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Our commitment to excellence is backed by industry-leading certifications and credentials.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-32 h-32 mb-4 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow overflow-hidden p-4">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-sm font-semibold text-secondary mb-1">{cert.name}</h3>
              <p className="text-xs text-muted">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertsSection;
