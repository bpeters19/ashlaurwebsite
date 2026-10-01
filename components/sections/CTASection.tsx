"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionContainer, SectionEyebrow, type HomepageSectionProps } from "./SectionPrimitives";

const CTASection = ({ sectionNumber }: HomepageSectionProps) => {
  return (
    <section className="editorial-section bg-background border-t border-border">
      <SectionContainer className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionEyebrow number={sectionNumber} label="Next Step" />
          <h2 className="section-heading text-foreground">
            Ready to start your project?
          </h2>
          <p className="body-wide mb-10 mx-auto">
            Explore our portfolio and see what we can build together.
          </p>
          <div className="flex justify-center">
            <Link href="/projects" className="btn-editorial">
              See Our Projects <span className="btn-arrow">→</span>
            </Link>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
};

export default CTASection;