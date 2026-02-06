"use client";

import { motion } from "framer-motion";

const ExpertiseMarkets = () => {
  const markets = [
    "Affordable Housing",
    "Healthcare",
    "Hospitality",
    "Industrial",
    "Education",
    "Multifamily",
    "Municipal",
    "Office",
    "Retail",
    "Senior Living",
  ];

  return (
    <section className="w-full bg-white py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-gray-900 mb-8">
            Expertise for every market.
          </h2>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-medium">
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
              className="group border-b border-gray-300 hover:border-gray-700 transition-colors duration-300 py-6 px-6 cursor-pointer"
            >
              <p className="text-gray-900 font-medium text-lg md:text-xl group-hover:text-primary transition-colors duration-300">
                {market}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMarkets;
