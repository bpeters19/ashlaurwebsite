"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionContainer, SectionEyebrow, type HomepageSectionProps } from "./SectionPrimitives";

const Hero = ({ sectionNumber }: HomepageSectionProps) => {
  const [prefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const [showPoster, setShowPoster] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;

    const handleCanPlay = () => {
      setShowPoster(false);
    };

    const attemptPlay = async () => {
      try {
        await video.play();
        setShowPoster(false);
      } catch {
        setShowPoster(true);
      }
    };

    video.addEventListener("canplay", handleCanPlay);
    void attemptPlay();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [prefersReducedMotion]);

  const useMobileSource = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
  const mobileSource = "/ashlaur-intro-video.mp4";
  const desktopSource = "/ashlaur-intro-video.mp4";
  const displayPoster = prefersReducedMotion || showPoster;

  return (
    <section data-home-hero className="relative min-h-screen w-full overflow-hidden bg-[#111214]">
      {displayPoster && (
        <Image
          src="/images/projects/invest-southwest/cover.jpg"
          alt="Ashlaur Construction project highlight"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      )}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/projects/invest-southwest/cover.jpg"
          aria-label="Ashlaur Construction project highlight video"
        >
          <source src={useMobileSource ? mobileSource : desktopSource} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 z-10 bg-black/50" />
      {!prefersReducedMotion && <div className="absolute inset-0 z-10 bg-black/10 pointer-events-none" />}

      <div className="relative z-20 flex min-h-screen items-end pb-14 sm:pb-20 lg:pb-24">
        <SectionContainer className="w-full">
          <SectionEyebrow number={sectionNumber} label="Home" className="text-white/75" />
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
        </SectionContainer>
      </div>
    </section>
  );
};

export default Hero;
