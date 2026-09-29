"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const IntroSection = () => {
  return (
    <section id="intro" className="editorial-section bg-background border-b border-border">
      <div className="editorial-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          02 — About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black uppercase text-[clamp(2.8rem,7vw,8rem)] text-foreground leading-[0.9] tracking-tight mb-8 max-w-5xl"
          style={{ fontVariationSettings: "'opsz' 72, 'wght' 900" }}
        >
          25 years of dependable delivery.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-wide mb-10"
        >
          Ashlaur Construction has delivered innovative building solutions for over 25 years.
          We combine traditional craftsmanship with cutting-edge technology to deliver projects that stand the test of time.
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
      </div>
    </section>
  );
};

export default IntroSection;
