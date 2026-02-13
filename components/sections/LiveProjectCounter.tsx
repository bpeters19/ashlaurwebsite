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
    <section ref={ref} className="py-16 bg-gradient-to-r from-blue-900/20 via-blue-800/15 to-blue-700/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">ASHLAUR by the Numbers</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved together with our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <motion.div
                  className="text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.value.toLocaleString()}{stat.suffix}
                </motion.div>
                <h3 className="text-lg font-semibold text-secondary">{stat.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveProjectCounter;