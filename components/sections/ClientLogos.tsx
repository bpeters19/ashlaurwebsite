"use client";

import { motion } from "framer-motion";

const ClientLogos = () => {
  const logos = [
    "Client 1", "Client 2", "Client 3", "Client 4", "Client 5",
    "Client 6", "Client 7", "Client 8", "Client 9", "Client 10"
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-secondary mb-2">Trusted by Industry Leaders</h3>
          <p className="text-muted">We're proud to partner with these organizations</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -100 * logos.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 bg-accent rounded flex items-center justify-center text-muted font-semibold hover:bg-blue-50 transition-colors"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;