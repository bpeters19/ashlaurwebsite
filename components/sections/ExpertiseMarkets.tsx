"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ExpertiseMarkets = () => {
  const markets = [
    "Affordable Housing",
    "Healthcare",
    "Hospitality",
    "Education",
    "Multifamily",
    "Municipal",
    "Office",
    "Senior Living",
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-gray-900 mb-10">
            Expertise for every market.
          </h2>
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed font-normal">
            Across every market and sector, our expertise ensures we meet the unique demands of your project.
          </p>
        </motion.div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {markets.map((market, index) => (
            <motion.div
              key={market}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <Link
                href={`/services?market=${market.toLowerCase().replace(/\s+/g, '-')}`}
                className="border-b border-gray-300 hover:border-gray-900 transition-all duration-300 py-8 px-8 cursor-pointer block hover:bg-blue-50/30"
              >
                <p className="text-gray-900 font-medium text-xl md:text-2xl group-hover:text-blue-700 transition-colors duration-300">
                  {market}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMarkets;
