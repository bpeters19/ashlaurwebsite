"use client";

import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Building Excellence Since 2008
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-4xl mx-auto leading-relaxed mb-8">
            ASHLAUR Construction has been at the forefront of innovative building solutions for over 15 years.
            We combine traditional craftsmanship with cutting-edge technology to deliver projects that stand the test of time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;