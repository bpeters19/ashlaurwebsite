"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { markets } from "@/data/markets";

const ExpertiseMarkets = () => {
  return (
    <section className="w-full bg-concrete py-20 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h2
            className="font-display font-black uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-ink mb-8"
            style={{ fontVariationSettings: "'opsz' 72, 'wght' 900" }}
          >
            Expertise for every market.
          </h2>
          <p className="text-ink/70 text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed font-normal">
            Across every market and sector, our expertise ensures we meet the unique demands of your project.
          </p>
        </motion.div>

        <div className="md:hidden" role="region" aria-label="Market sectors" tabIndex={0} onKeyDown={(event) => {
          const target = event.currentTarget.querySelector(".mobile-snap-row") as HTMLDivElement | null;
          if (!target) return;
          if (event.key === "ArrowRight") target.scrollBy({ left: 220, behavior: "smooth" });
          if (event.key === "ArrowLeft") target.scrollBy({ left: -220, behavior: "smooth" });
        }}>
          <div className="mobile-snap-row" aria-label="Swipe market cards">
            {markets.map((market) => (
              <Link
                key={market.slug}
                href={market.path}
                className="mobile-snap-card block border border-ink/15 bg-white"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={`/markets/${market.slug}/hero.jpg`}
                    alt={`${market.name} market`}
                    fill
                    sizes="85vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-2xl font-semibold leading-tight">{market.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="mobile-scroll-indicator">Swipe for more sectors</p>
        </div>

        {/* Markets Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-ink/15">
          {markets.map((market, index) => (
            <motion.div
              key={market.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <Link
                href={market.path}
                className="border-b border-ink/15 hover:bg-ink/5 transition-all duration-300 py-8 px-8 cursor-pointer block"
              >
                <p className="text-ink font-medium text-xl md:text-2xl group-hover:translate-x-1 transition-transform duration-300">
                  {market.name}
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
