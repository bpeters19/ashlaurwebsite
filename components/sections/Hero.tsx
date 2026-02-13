"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const excavatorRef = useRef<HTMLDivElement>(null);
  const progressTargetRef = useRef(0);
  const progressDisplayRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const applyTransforms = (value: number) => {
      const clamped = Math.max(0, Math.min(100, value));
      if (progressLineRef.current) {
        progressLineRef.current.style.transform = `translateX(${clamped - 100}%)`;
      }
      if (excavatorRef.current) {
        excavatorRef.current.style.transform = `translateX(calc(${clamped}vw - 50%))`;
      }
    };

    if (prefersReducedMotion) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      applyTransforms(0);
      return;
    }

    let lastTimestamp = performance.now();

    const updateProgress = (timestamp: number) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (video.duration) {
        progressTargetRef.current = (video.currentTime / video.duration) * 100;
      }

      // Linear catch-up toward the video's exact progress for buttery-smooth motion.
      const frameNormalized = Math.min(1, delta / (1000 / 60));
      progressDisplayRef.current +=
        (progressTargetRef.current - progressDisplayRef.current) * frameNormalized;

      applyTransforms(progressDisplayRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    const handlePlay = () => {
      lastTimestamp = performance.now();
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    const handlePause = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };

    const handleEnded = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      progressTargetRef.current = 0;
      progressDisplayRef.current = 0;
      applyTransforms(0);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    if (!video.paused) {
      handlePlay();
    } else {
      applyTransforms(0);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative h-screen overflow-hidden group cursor-pointer" onClick={() => window.location.href = '/gallery'}>
      {/* Full-width, full-height background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 group-hover:brightness-110 transition-all duration-700"
        src="/video.mp4.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay for readability - brighter on hover */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 z-10 transition-colors duration-700" />
      
      {/* Content overlays - Skender-style left-aligned, large headline */}
      <div className="relative z-20 h-full flex flex-col items-start justify-end text-white pb-32">
        <div className="max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/projects" className="group/headline inline-block">
              <h1 className="text-[4rem] sm:text-[6rem] lg:text-[8rem] xl:text-[11rem] 2xl:text-[15rem] font-black leading-none tracking-tight mb-8 cursor-pointer hover:text-blue-300 transition-colors duration-500 hover:drop-shadow-lg">
                We build with intent.
                <br />
                We deliver with certainty.
              </h1>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-lg font-semibold border-b-2 border-white hover:border-blue-300 transition-all duration-300 hover:gap-3 cursor-pointer hover:text-blue-200"
            >
              Learn more <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-lg font-semibold border-b-2 border-white hover:border-blue-300 transition-all duration-300 hover:gap-3 cursor-pointer hover:text-blue-200"
            >
              View Gallery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Excavator progress indicator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 z-30 bg-white/20">
        {/* Filled progress background */}
        <div className="absolute top-0 left-0 h-full w-full origin-left bg-gradient-to-r from-primary to-blue-400">
          <div 
            ref={progressLineRef}
            className="absolute top-0 right-0 bottom-0 bg-white/20 will-change-transform"
            style={{ 
              width: '100%',
              transform: 'translateX(-100%)'
            }}
          />
        </div>
        
        {/* Excavator icon that moves with progress */}
        <div
          ref={excavatorRef}
          className="absolute -top-7 -translate-x-1/2 will-change-transform"
          style={{ 
            transform: 'translateX(-50%)',
            left: 0
          }}
        >
          {/* Highly detailed excavator */}
          <svg
            width="56"
            height="36"
            viewBox="0 0 56 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <linearGradient id="cabinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
              <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>
            
            {/* Track base - lower undercarriage */}
            <rect x="8" y="24" width="24" height="6" rx="1.5" fill="url(#bodyGrad)" />
            
            {/* Track tread pattern */}
            <rect x="9" y="25" width="2" height="4" rx="0.5" fill="#1E40AF" opacity="0.7" />
            <rect x="13" y="25" width="2" height="4" rx="0.5" fill="#1E40AF" opacity="0.7" />
            <rect x="17" y="25" width="2" height="4" rx="0.5" fill="#1E40AF" opacity="0.7" />
            <rect x="21" y="25" width="2" height="4" rx="0.5" fill="#1E40AF" opacity="0.7" />
            <rect x="25" y="25" width="2" height="4" rx="0.5" fill="#1E40AF" opacity="0.7" />
            <rect x="29" y="25" width="2" height="4" rx="0.5" fill="#1E40AF" opacity="0.7" />
            
            {/* Front idler wheel */}
            <circle cx="11" cy="30" r="2.5" fill="#1E40AF" />
            <circle cx="11" cy="30" r="1.8" fill="#334155" />
            <circle cx="11" cy="30" r="1" fill="#475569" />
            <circle cx="11" cy="30" r="0.5" fill="#1E40AF" />
            
            {/* Middle track rollers */}
            <circle cx="16" cy="30" r="1.8" fill="#1E40AF" />
            <circle cx="16" cy="30" r="1.2" fill="#334155" />
            <circle cx="16" cy="30" r="0.4" fill="#475569" />
            
            <circle cx="20" cy="30" r="1.8" fill="#1E40AF" />
            <circle cx="20" cy="30" r="1.2" fill="#334155" />
            <circle cx="20" cy="30" r="0.4" fill="#475569" />
            
            <circle cx="24" cy="30" r="1.8" fill="#1E40AF" />
            <circle cx="24" cy="30" r="1.2" fill="#334155" />
            <circle cx="24" cy="30" r="0.4" fill="#475569" />
            
            {/* Rear drive sprocket */}
            <circle cx="29" cy="30" r="2.5" fill="#1E40AF" />
            <circle cx="29" cy="30" r="1.8" fill="#334155" />
            <circle cx="29" cy="30" r="1" fill="#475569" />
            <circle cx="29" cy="30" r="0.5" fill="#1E40AF" />
            
            {/* Sprocket teeth */}
            <path d="M29 27.5 L30 28.5 L29 29.5 L28 28.5 Z" fill="#1E40AF" />
            <path d="M31.5 30 L32.5 30 L32 31.5 Z" fill="#1E40AF" />
            <path d="M29 32.5 L30 31.5 L29 30.5 L28 31.5 Z" fill="#1E40AF" />
            
            {/* Rotating platform/superstructure */}
            <ellipse cx="20" cy="23.5" rx="10" ry="2" fill="#1E3A8A" opacity="0.6" />
            <path d="M12 17 L28 17 L30 20 L30 24 L10 24 L10 20 Z" fill="url(#bodyGrad)" />
            
            {/* Main cabin/operator house */}
            <path d="M14 10 L26 10 L28 12 L28 17 L12 17 L12 12 Z" fill="url(#cabinGrad)" />
            
            {/* Cabin windows */}
            <rect x="14" y="11.5" width="5" height="4" rx="0.5" fill="#60A5FA" opacity="0.4" />
            <rect x="14" y="11.5" width="5" height="0.4" fill="#93C5FD" opacity="0.6" />
            <line x1="16.5" y1="11.5" x2="16.5" y2="15.5" stroke="#3B82F6" strokeWidth="0.3" opacity="0.5" />
            
            <rect x="20" y="11.5" width="5" height="4" rx="0.5" fill="#60A5FA" opacity="0.4" />
            <rect x="20" y="11.5" width="5" height="0.4" fill="#93C5FD" opacity="0.6" />
            <line x1="22.5" y1="11.5" x2="22.5" y2="15.5" stroke="#3B82F6" strokeWidth="0.3" opacity="0.5" />
            
            {/* Roof warning lights */}
            <rect x="17" y="9.5" width="2" height="1" rx="0.5" fill="#FBBF24" opacity="0.8" />
            <rect x="21" y="9.5" width="2" height="1" rx="0.5" fill="#FBBF24" opacity="0.8" />
            
            {/* Exhaust pipe */}
            <rect x="24" y="7" width="1.8" height="4" rx="0.7" fill="#334155" />
            <ellipse cx="24.9" cy="6.5" rx="1.3" ry="0.9" fill="#334155" />
            <ellipse cx="24.9" cy="6.8" rx="0.9" ry="0.6" fill="#475569" />
            
            {/* Counterweight (rear) */}
            <rect x="10" y="18" width="4" height="5" rx="0.5" fill="#1E3A8A" />
            <rect x="10.5" y="19" width="3" height="1.5" fill="#334155" opacity="0.4" />
            
            {/* Boom (main arm) - extends upward and forward */}
            <path d="M25 13 L32 8 L34 9 L27 14 Z" fill="url(#armGrad)" />
            <ellipse cx="25.5" cy="13.5" rx="1.2" ry="1.2" fill="#D97706" />
            <circle cx="25.5" cy="13.5" r="0.6" fill="#334155" />
            
            {/* Hydraulic cylinder for boom */}
            <path d="M23 15 L29 10 L29.8 10.5 L23.8 15.5 Z" fill="#334155" opacity="0.6" />
            <ellipse cx="23.4" cy="15.25" rx="0.8" ry="0.6" fill="#475569" />
            
            {/* Stick (second arm section) */}
            <path d="M32 8 L40 6 L41 7 L33 9 Z" fill="url(#armGrad)" />
            <ellipse cx="32.5" cy="8.5" rx="1" ry="1" fill="#D97706" />
            <circle cx="32.5" cy="8.5" r="0.5" fill="#334155" />
            
            {/* Hydraulic cylinder for stick */}
            <path d="M31 10 L37 7.5 L37.6 8 L31.6 10.5 Z" fill="#334155" opacity="0.6" />
            <ellipse cx="31.3" cy="10.25" rx="0.7" ry="0.5" fill="#475569" />
            
            {/* Bucket linkage */}
            <path d="M40 6 L44 5 L44.5 5.8 L40.5 6.8 Z" fill="#D97706" />
            <ellipse cx="40.3" cy="6.4" rx="0.8" ry="0.8" fill="#F59E0B" />
            <circle cx="40.3" cy="6.4" r="0.4" fill="#334155" />
            
            {/* Bucket (digging attachment) */}
            <path d="M44 5 L48 4 L50 5 L52 8 L50 9 L46 7 Z" fill="#475569" />
            <path d="M48 4 L50 5 L52 8 L50 9 L48 8 Z" fill="#334155" />
            
            {/* Bucket teeth */}
            <path d="M50 9 L51 10 L50.5 11 Z" fill="#1E293B" />
            <path d="M48.5 8.5 L49.5 9.5 L49 10.5 Z" fill="#1E293B" />
            <path d="M47 8 L48 9 L47.5 10 Z" fill="#1E293B" />
            
            {/* Hydraulic hoses (details) */}
            <path d="M26 14 L33 9" stroke="#1E293B" strokeWidth="0.4" opacity="0.4" strokeDasharray="1,0.5" />
            <path d="M33 9 L41 7" stroke="#1E293B" strokeWidth="0.4" opacity="0.4" strokeDasharray="1,0.5" />
            
            {/* Connection pins */}
            <circle cx="33" cy="9" r="0.6" fill="#475569" />
            <circle cx="33" cy="9" r="0.3" fill="#1E293B" />
            
            <circle cx="41" cy="7" r="0.6" fill="#475569" />
            <circle cx="41" cy="7" r="0.3" fill="#1E293B" />
            
            <circle cx="44.5" cy="5.8" r="0.6" fill="#475569" />
            <circle cx="44.5" cy="5.8" r="0.3" fill="#1E293B" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;