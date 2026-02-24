"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Executive {
  id: number;
  name: string;
  title: string;
  category: "Executive" | "Project" | "Operations";
  bio: string;
  image: string;
  linkedIn?: string;
}

export function ExecutiveCard({ executive }: { executive: Executive }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
          <Image
            src={executive.image}
            alt={executive.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            style={{ 
              objectPosition: `center ${executive.name === "Richard Courtney" ? "10%" : executive.name === "Courtney W. Mitchell, NCARB" ? "30%" : "20%"}`,
              transform: executive.name === "Courtney W. Mitchell, NCARB" ? "scale(1.7)" : "scale(1)"
            }}
            sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gray-900">{executive.name}</h3>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{executive.title}</p>
            <p className="text-gray-600 text-base leading-relaxed">{executive.bio}</p>
          </div>

          {/* LinkedIn Icon */}
          {executive.linkedIn && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <a
                href={executive.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <span>→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
