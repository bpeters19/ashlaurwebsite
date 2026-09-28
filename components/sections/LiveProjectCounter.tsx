"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { companyStats } from "@/data/company";

const LiveProjectCounter = () => {
  const finalStats = companyStats;
  const [animatedValues, setAnimatedValues] = useState<number[]>(() =>
    finalStats.map((stat) => stat.value)
  );
  const [isHydrated, setIsHydrated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    setIsHydrated(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    if (!isInView) return;
    if (prefersReducedMotion) {
      setAnimatedValues(finalStats.map((stat) => stat.value));
      return;
    }

    setAnimatedValues(finalStats.map(() => 0));

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedValues(
        finalStats.map((stat) => Math.floor(stat.value * easeOutQuart))
      );

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedValues(finalStats.map((stat) => stat.value));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [finalStats, isHydrated, isInView, prefersReducedMotion]);

  const displayedValues = isHydrated ? animatedValues : finalStats.map((stat) => stat.value);

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
            Ashlaur by the numbers.
          </h2>
          <p className="text-bone/65 text-lg max-w-2xl">
            Our track record speaks for itself. Here&apos;s what we&apos;ve achieved together with our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-bone/15 border-t border-b border-bone/15">
          {finalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-10 px-2 md:px-10"
            >
              <div className="font-technical text-5xl md:text-6xl tabular-nums text-bone mb-2">
                {displayedValues[index].toLocaleString()}
                {stat.suffix}
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
