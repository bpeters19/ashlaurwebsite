"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CertsSection = () => {
  const certifications = [
    {
      name: "Chicago Housing Authority",
      image: "/images/certs/cha-logo-cert.png",
      description: "Chicago Housing Authority",
      href: "/certifications#cha"
    },
    {
      name: "CMS Certified",
      image: "/images/certs/cms-logo-cert.jpg",
      description: "Central Management Services",
      href: "/certifications#cms"
    },
    {
      name: "MBE Certified",
      image: "/images/certs/mbe-logo-cert.png",
      description: "Minority Business Enterprise",
      href: "/certifications#mbe"
    },
    {
      name: "DBE Certified",
      image: "/images/certs/dbe-logo-cert.png",
      description: "Disadvantaged Business Enterprise",
      href: "/certifications#dbe"
    },
    {
      name: "CDOT Approved",
      image: "/images/certs/cdot-logo-cert.png",
      description: "Chicago Department of Transportation",
      href: "/certifications#cdot"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.34, 1.56, 0.64, 1] as const, // Custom easing: slow start, momentum, soft settle
      },
    },
  };

  const hoverVariants = {
    rest: {
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="pt-20 pb-16 lg:pt-24 lg:pb-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header - Editorial Scale */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: false, margin: "-100px" }}
          className="mb-24 lg:mb-32"
        >
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-gray-900 mb-8 lg:mb-10">
            Strength in <br />
            Certifications
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed font-light"
          >
            Our earned credentials and strategic certifications represent a commitment to excellence, 
            safety, and partnership with Chicago's finest institutions. These are not badges—they are 
            proof of capability and trust.
          </motion.p>
        </motion.div>

        {/* Certifications Grid - Structured with Staggered Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              className="group cursor-pointer"
            >
              <Link
                href={cert.href}
                className="flex flex-col h-full cursor-pointer block"
              >
                {/* Certification Logo Container */}
                <motion.div
                  variants={hoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="relative w-full aspect-square mb-8 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-blue-300 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500 flex items-center justify-center p-6"
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-110 transition-transform duration-700"
                    priority={index < 3}
                  />
                </motion.div>

                {/* Certification Info */}
                <div className="flex flex-col flex-grow">
                  <motion.h3
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-snug"
                  >
                    {cert.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-light"
                  >
                    {cert.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200 group-hover:border-blue-300 transition-colors duration-300"
                  >
                    <span className="text-xs font-semibold text-blue-700 group-hover:text-blue-900 transition-colors duration-300">
                      Learn more →
                    </span>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting Statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: false, margin: "-100px" }}
          className="mt-24 lg:mt-32 pt-24 lg:pt-32 border-t border-gray-200 max-w-3xl"
        >
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed font-light">
            Each credential represents thousands of hours of dedicated work, rigorous compliance, 
            and a deep commitment to partnering with the institutions that build Chicago. 
            We don't just hold these certifications—we earn them every single day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertsSection;
