"use client";

import { motion } from "framer-motion";

export function LeadershipPrinciples() {
  const principles = [
    {
      title: "Vision-Driven Strategy",
      description:
        "Our leadership sets a clear vision for every project and empowers teams to execute with precision and confidence.",
      delay: 0,
    },
    {
      title: "Safety Leadership",
      description:
        "Safety culture starts at the top. Zero incidents isn't aspirational—it's the standard our leadership enforces daily.",
      delay: 0.1,
    },
    {
      title: "Accountability & Transparency",
      description:
        "We own every decision, every outcome, every challenge. No excuses. Clear communication. Transparent results.",
      delay: 0.2,
    },
    {
      title: "Partnership Mentality",
      description:
        "Our leaders collaborate with partners as equals, driving innovation and delivering solutions that matter.",
      delay: 0.3,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {principles.map((principle) => (
        <motion.div
          key={principle.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: principle.delay }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-lg space-y-4 hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-900">{principle.title}</h3>
          <p className="text-gray-600 leading-relaxed">{principle.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
