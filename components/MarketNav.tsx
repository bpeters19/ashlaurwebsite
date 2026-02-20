"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { markets } from "@/data/markets";

const MarketNav = () => {
  const pathname = usePathname();
  const currentMarket = pathname.split("/")[2];

  return (
    <nav className="bg-[#0B1F3B]">
      <div className="w-full px-6 sm:px-8 lg:px-6">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 min-w-max py-4 justify-center">
            {markets.map((market) => {
              const isActive = currentMarket === market.slug;
              return (
                <div key={market.slug}>
                  <Link
                    href={market.path}
                    className={`text-sm font-medium whitespace-nowrap transition-all duration-300 relative block ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {market.name}
                    <motion.span
                      layoutId="underline"
                      initial={false}
                      animate={isActive ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-left"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MarketNav;
