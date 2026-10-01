"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionContainer, SectionEyebrow, type HomepageSectionProps } from "./SectionPrimitives";

const IntroSection = ({ sectionNumber }: HomepageSectionProps) => {
  return (
    <section id="intro" className="editorial-section bg-background border-b border-border">
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow number={sectionNumber} label="About" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading max-w-5xl text-foreground"
        >
          Dependable delivery, built on experience.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-wide mb-10"
        >
          Ashlaur Construction delivers building solutions across Chicago and the Midwest.
          We combine traditional craftsmanship with current construction practices to deliver projects that stand the test of time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/about" className="btn-editorial-outline">
            Our Story <span className="btn-arrow">→</span>
          </Link>
        </motion.div>
      </SectionContainer>
    </section>
  );
};

export default IntroSection;
