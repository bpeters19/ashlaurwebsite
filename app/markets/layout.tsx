"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MarketNav from "../../components/MarketNav";

type MarketsLayoutProps = {
  children: ReactNode;
};

const variants = {
  initial: { x: 40, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -40, opacity: 0 },
};

const transition = { duration: 0.4, ease: [0.42, 0, 0.58, 1] as const };

const MarketsLayout = ({ children }: MarketsLayoutProps) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <MarketNav />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={transition}
            style={{ willChange: "transform, opacity" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default MarketsLayout;
