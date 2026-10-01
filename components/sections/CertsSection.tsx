"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { certifications } from "@/data/certifications";
import { isPlaceholderValue, SHOW_PLACEHOLDER_CONTENT } from "@/data/siteConfig";
import { SectionContainer, SectionEyebrow, type HomepageSectionProps } from "./SectionPrimitives";

const CertsSection = ({ sectionNumber }: HomepageSectionProps) => {
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
    <section className="pt-20 pb-16 lg:pt-24 lg:pb-20 bg-concrete relative overflow-hidden">
      <SectionContainer>
        {/* Section Header - Editorial Scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 lg:mb-32"
        >
          <SectionEyebrow number={sectionNumber} label="Certifications" />
          <h2 className="section-heading max-w-5xl text-ink">
            Strength in certifications.
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-base lg:text-lg text-ink/70 max-w-4xl leading-relaxed font-light"
          >
            Our earned credentials and strategic certifications represent a commitment to excellence,
            safety, and partnership with Chicago&apos;s finest institutions. These are not badges—they are
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
          {certifications.map((cert, index) => {
            const showCertMeta =
              SHOW_PLACEHOLDER_CONTENT ||
              (!isPlaceholderValue(cert.certificateNumber) && !isPlaceholderValue(cert.expiration));

            return (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              className="group cursor-pointer"
            >
              <Link
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full cursor-pointer block"
              >
                {/* Certification Logo Container */}
                <motion.div
                  variants={hoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="relative w-full aspect-square mb-8 bg-white border border-ink/10 group-hover:border-ink/40 overflow-hidden transition-all duration-500 flex items-center justify-center p-6"
                >
                  <Image
                    src={cert.logo}
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
                    className="text-lg font-bold text-ink mb-2 leading-snug"
                  >
                    {cert.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-ink/65 group-hover:text-ink transition-colors duration-300 font-light"
                  >
                    {cert.certifyingAgency}
                  </motion.p>
                  {showCertMeta && (
                    <p className="mt-2 text-xs text-ink/60 leading-relaxed">
                      Cert #: {cert.certificateNumber}
                      <br />
                      Expires: {cert.expiration}
                    </p>
                  )}
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-ink/15 group-hover:border-ink/40 transition-colors duration-300"
                  >
                    <span className="font-technical text-xs uppercase tracking-[0.1em] text-ink/70 group-hover:text-ink transition-colors duration-300">
                      Learn more →
                    </span>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
            );
          })}
        </motion.div>

        {/* Supporting Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 lg:mt-32 pt-24 lg:pt-32 border-t border-ink/15 max-w-3xl"
        >
          <p className="text-base lg:text-lg text-ink/75 leading-relaxed font-light">
            Each credential represents thousands of hours of dedicated work, rigorous compliance,
            and a deep commitment to partnering with the institutions that build Chicago.
            We don&apos;t just hold these certifications—we earn them every single day.
          </p>
        </motion.div>
      </SectionContainer>
    </section>
  );
};

export default CertsSection;
