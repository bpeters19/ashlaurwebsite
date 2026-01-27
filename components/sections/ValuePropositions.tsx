"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, Users, Target } from "lucide-react";

const ValuePropositions = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to safety standards and practices that protect our teams and communities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and methods to deliver efficient, sustainable solutions."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals with decades of combined experience in construction excellence."
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every project meets the highest standards."
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Why Choose ASHLAUR
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver construction solutions that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">{value.title}</h3>
              <p className="text-muted leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;