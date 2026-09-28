"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const IntroSection = () => {
  return (
    <section id="intro" className="py-20 lg:py-28 bg-concrete">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-technical text-xs tracking-[0.2em] uppercase text-ink/55 mb-4"
        >
          25+ Years of Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink leading-[0.9] tracking-tight mb-6 max-w-4xl"
          style={{ fontVariationSettings: "'opsz' 72, 'wght' 900" }}
        >
          Building excellence for over 25 years.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-ink/80 text-lg leading-relaxed mb-8 max-w-2xl"
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
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-ink font-medium border-b-2 border-ink/30 hover:border-ink transition-all duration-300 hover:gap-3"
          >
            Our story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
