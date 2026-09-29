"use client";

import { motion } from "framer-motion";
import { companyStats } from "@/data/company";

const LiveProjectCounter = () => {
  return (
    <section className="editorial-section bg-[#111214] text-[#f5f3ef]">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label text-white/70 mb-4">03 — Performance</p>
          <h2 className="font-display font-black uppercase text-[clamp(2.2rem,5vw,5.6rem)] leading-[0.92] tracking-tight mb-4">
            Ashlaur by the numbers.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Our track record speaks for itself. Here&apos;s what we&apos;ve achieved together with our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15 border-y border-white/15">
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-12 px-2 md:px-10"
            >
              <div className="font-display text-6xl md:text-7xl tabular-nums text-[#f5f3ef] mb-2 leading-none">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <p className="text-xs uppercase tracking-[0.15em] text-white/55">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveProjectCounter;
