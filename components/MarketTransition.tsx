"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";

type MarketTransitionProps = {
  children: ReactNode;
  className?: string;
};

const variants = {
  initial: { clipPath: "inset(0 100% 0 0)", opacity: 0.92 },
  animate: { clipPath: "inset(0 0 0 0)", opacity: 1 },
  exit: { clipPath: "inset(0 0 0 0)", opacity: 0.88, x: -6 },
};

const transition = { duration: 1.4, ease: [0.4, 0, 0.2, 1] as const };

const MarketTransition = ({ children, className }: MarketTransitionProps) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={transition}
        className={className}
        style={{ willChange: "clip-path, opacity, transform" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MarketTransition;
