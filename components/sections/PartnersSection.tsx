"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const PartnersSection = () => {
  const partners = [
    {
      name: "McShane Construction",
      logo: "/images/partners/mcshane/partners-01%20mcshane.png",
      href: "https://www.mcshaneconstruction.com",
    },
    {
      name: "FHP Construction",
      logo: "/images/partners/fhp/partners-02%20fhp.png",
      href: "https://www.fhp-inc.com",
    },
    {
      name: "Skender",
      logo: "/images/partners/skender/partners-03%20skender.png",
      href: "https://www.skender.com",
    },
    {
      name: "Weis Builders",
      logo: "/images/partners/weis-builders/partners-04%20weis.png",
      href: "https://www.weisbuilders.com",
    },
    {
      name: "McHugh Construction",
      logo: "/images/partners/mchugh/partners-05%20mchugh.png",
      href: "https://www.mchughconstruction.com",
    },
    {
      name: "Powers & Sons",
      logo: "/images/partners/powers-sons/partners-06-1%20p%26s.png",
      href: "https://www.powersandsons.com",
    },
  ];

  return (
    <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 lg:mb-24"
        >
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-gray-900">
            Strength in <br />
            Collaboration
          </h2>
        </motion.div>
      </div>

      {/* Infinite Scrolling Logo Band */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full overflow-hidden py-12 lg:py-16"
      >
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex animate-infinite-scroll hover:pause-animation">
          {/* First Set of Logos */}
          <div className="flex items-center justify-around min-w-max gap-16 lg:gap-24 px-8 lg:px-12">
            {partners.map((partner, index) => (
              <PartnerLogo key={`original-${index}`} partner={partner} />
            ))}
          </div>

          {/* Duplicate Set for Seamless Loop */}
          <div className="flex items-center justify-around min-w-max gap-16 lg:gap-24 px-8 lg:px-12">
            {partners.map((partner, index) => (
              <PartnerLogo key={`duplicate-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Optional Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 lg:mt-20"
      >
        <p className="text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed font-light">
          Trusted by Chicago's leading general contractors, we bring specialized expertise 
          to ambitious projects that shape our city's future.
        </p>
      </motion.div>
    </section>
  );
};

// Individual Partner Logo Component
const PartnerLogo = ({ partner }: { partner: { name: string; logo: string; href: string } }) => {
  return (
    <Link
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex-shrink-0 transition-all duration-500 ease-out"
    >
      <div className="relative h-16 w-40 lg:h-20 lg:w-48 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 160px, 192px"
        />
      </div>
    </Link>
  );
};

export default PartnersSection;
