"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="editorial-section bg-background border-t border-border">
      <div className="editorial-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-4">09 — Next Step</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6 leading-[0.92]">
            Ready to Start Your Project?
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
      </div>
    </section>
  );
};

export default CTASection;