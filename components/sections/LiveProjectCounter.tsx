"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const LiveProjectCounter = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const targetValues = {
    projects: 500,
    experience: 25,
    satisfaction: 99,
  };

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        projects: Math.floor(targetValues.projects * easeOutQuart),
        experience: Math.floor(targetValues.experience * easeOutQuart),
        satisfaction: Math.floor(targetValues.satisfaction * easeOutQuart),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  const stats = [
    {
      label: "Projects Completed",
      value: counters.projects,
      suffix: "+",
    },
    {
      label: "Client Satisfaction",
      value: counters.satisfaction,
      suffix: "%",
    },
    {
      label: "Years Experience",
      value: counters.experience,
      suffix: "+",
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-ink">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="font-display font-black uppercase text-4xl md:text-5xl text-bone leading-[0.95] tracking-tight mb-4"
            style={{ fontVariationSettings: "'opsz' 72, 'wght' 900" }}
          >
            ASHLAUR by the numbers.
          </h2>
          <p className="text-bone/65 text-lg max-w-2xl">
            Our track record speaks for itself. Here&apos;s what we&apos;ve achieved together with our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-bone/15 border-t border-b border-bone/15">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-10 px-2 md:px-10"
            >
              <div className="font-technical text-5xl md:text-6xl tabular-nums text-bone mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <p className="font-technical text-xs uppercase tracking-[0.15em] text-bone/55">
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
