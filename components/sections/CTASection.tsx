"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Explore our portfolio and see what we can build together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <button className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded transition duration-300 transform hover:scale-105 hover:shadow-lg">
                SEE OUR PROJECTS
              </button>
            </Link>
            <button className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded transition duration-300">
              BUILD YOUR CAREER
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;