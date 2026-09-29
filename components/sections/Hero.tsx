"use client";

import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [prefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#111214]">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/projects/invest-southwest/cover.jpg"
        aria-label="Ashlaur Construction project highlight video"
      >
        <source src="/ashlaur-intro-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-black/50" />
      {!prefersReducedMotion && <div className="absolute inset-0 z-10 bg-black/10 pointer-events-none" />}

      <div className="relative z-20 flex min-h-screen items-end pb-14 sm:pb-20 lg:pb-24">
        <div className="editorial-container w-full">
          <p className="section-label text-white/75 mb-5">01 — Home</p>
          <h1 className="max-w-5xl text-[#f5f3ef] text-[clamp(3rem,10vw,11rem)] leading-[0.88] mb-8">
            Built with discipline.
          </h1>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/projects" className="btn-editorial">
              View Projects <span className="btn-arrow">→</span>
            </Link>
            <Link href="/services" className="btn-editorial-quiet text-[#f5f3ef]">
              Explore Services <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
