"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Lightbulb, Users, Target } from "lucide-react";

const ValuePropositions = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to safety standards and practices that protect our teams and communities.",
      href: "/services"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and methods to deliver efficient, sustainable solutions.",
      href: "/projects"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals with decades of combined experience in construction excellence.",
      href: "/about"
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every project meets the highest standards.",
      href: "/projects"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose ASHLAUR
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
            >
              <Link 
                href={value.href}
                className="group text-center block p-6 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-600/10 group-hover:bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{value.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;