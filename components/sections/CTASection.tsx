"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group hover:text-blue-300 transition-colors duration-300">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our portfolio and see what we can build together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              SEE OUR PROJECTS
            </Link>
            <Link href="/contact" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              BUILD YOUR CAREER
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;