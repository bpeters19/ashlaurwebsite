"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const FromTheField = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const articlesContainerRef = useRef<HTMLDivElement>(null);
  const scrollVelocityRef = useRef(0);
  const scrollAnimationRef = useRef<number | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isSectionActive, setIsSectionActive] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [rightColumnHeight, setRightColumnHeight] = useState<number | null>(null);
  const [featuredMinHeight, setFeaturedMinHeight] = useState<number | null>(null);
  const featuredColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const articlesListRef = useRef<HTMLDivElement>(null);
  const firstArticleRef = useRef<HTMLAnchorElement>(null);

  // Featured article displayed on the left
  const featuredArticle = {
    id: 1,
    project: "Stroger Hospital",
    headline: "Doors and Hardware Replacement Progresses Through Upper Floors",
    summary: "Phase two installation reaches the 8th floor with precision scheduling keeping the project on track amid ongoing hospital operations.",
    date: "February 3, 2026",
    image: "https://picsum.photos/seed/construction-site-field/1200/800",
  };

  // Articles for the right-side stacked list
  const articlesList = [
    {
      id: 2,
      project: "Friend Health Woodlawn",
      headline: "Foundation and Structural Frame Complete",
      summary: "Structural work wrapped ahead of schedule. Interior buildout begins next phase with MEP systems coordinated for installation.",
      date: "January 28, 2026",
      image: "https://picsum.photos/seed/construction-site-2/1200/800",
    },
    {
      id: 3,
      project: "Wicker Park Hyatt",
      headline: "Interior Buildout Begins on Guest Room Floors",
      summary: "Construction teams mobilize with finishes installation starting on floors 4-7. Project tracking ahead of milestone dates.",
      date: "January 22, 2026",
      image: "https://picsum.photos/seed/construction-site-3/1200/800",
    },
    {
      id: 4,
      project: "Cook County Health – Belmont Cragin",
      headline: "MEP Rough-In Coordinated Completion Achieved",
      summary: "Mechanical, electrical, and plumbing systems coordinated for seamless integration. Rough-in phase completed on schedule.",
      date: "January 15, 2026",
      image: "https://picsum.photos/seed/construction-site-4/1200/800",
    },
    {
      id: 5,
      project: "Lincoln Park Research Facility",
      headline: "Steel Framing Reaches Full Height",
      summary: "Structural steel erection milestone reached ahead of schedule. Concrete decking installation commences next week.",
      date: "January 8, 2026",
      image: "https://picsum.photos/seed/construction-site-5/1200/800",
    },
    {
      id: 6,
      project: "Downtown Office Complex",
      headline: "Exterior Facade Installation Underway",
      summary: "Curtain wall installation progressing across all 12 floors. High-performance glazing system meets sustainability targets.",
      date: "December 28, 2025",
      image: "https://picsum.photos/seed/construction-site-6/1200/800",
    },
  ];

  // Smooth scroll with momentum and easing (premium physics)
  const applyScrollMomentum = (container: HTMLDivElement, initialDelta: number) => {
    if (scrollAnimationRef.current !== null) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }

    // Ultra-aggressive normalization for editorial reading pace
    // Heavily reduces initial velocity to prevent any rapid movement
    // Mouse wheel (120) → ~9.6 pixels; Fast mouse (200) → ~16 pixels (clamped)
    // Trackpad (10) → ~0.8 pixels; Fast trackpad (80) → ~6.4 pixels
    // Result: All inputs feel extremely controlled, intentional, editorial
    const normalizedDelta = Math.max(-16, Math.min(16, initialDelta * 0.08));
    
    // Ultra-heavy damping for premium editorial scroll feel
    let velocity = normalizedDelta;
    const friction = 0.96; // Ultra-heavy friction (4% decay per frame) = slow, intentional, premium motion
    const minVelocity = 0.02; // Very low threshold for ultra-smooth final deceleration
    
    // Easing acceleration: gradually accelerate to full velocity
    let frame = 0;
    const easeInFrames = 2; // Smooth acceleration over 2 frames
    let easeMultiplier = 1;
    
    const animate = () => {
      if (Math.abs(velocity) > minVelocity) {
        // Easing: gradually increase velocity in first few frames
        if (frame < easeInFrames) {
          easeMultiplier = (frame + 1) / easeInFrames;
          frame++;
        }
        
        const currentScroll = container.scrollTop;
        const easedVelocity = velocity * easeMultiplier;
        const newScroll = currentScroll + easedVelocity;
        
        // Clamp to container bounds (no overshoot)
        const maxScroll = container.scrollHeight - container.clientHeight;
        container.scrollTop = Math.max(0, Math.min(newScroll, maxScroll));
        
        // Apply heavy friction for smooth, controlled deceleration
        // This creates an ease-out curve that feels weighted and intentional
        velocity *= friction;
        
        scrollAnimationRef.current = requestAnimationFrame(animate);
      } else {
        scrollAnimationRef.current = null;
      }
    };
    
    animate();
  };

  // Check if articles container can scroll
  useEffect(() => {
    const container = articlesContainerRef.current;
    const section = sectionRef.current;
    if (!container) return;

    const checkScrollability = () => {
      const canScroll = container.scrollHeight > container.clientHeight;
      setIsScrollable(canScroll);
      
      // Check if at end
      const isAtBottom = Math.abs(
        container.scrollHeight - container.clientHeight - container.scrollTop
      ) < 50;
      setIsAtEnd(isAtBottom);
    };

    checkScrollability();
    window.addEventListener("resize", checkScrollability);

    // Monitor scroll position
    const handleScroll = () => {
      const isAtBottom = Math.abs(
        container.scrollHeight - container.clientHeight - container.scrollTop
      ) < 50;
      setIsAtEnd(isAtBottom);
    };

    container.addEventListener("scroll", handleScroll);

    // Intersection Observer to detect when section is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      window.removeEventListener("resize", checkScrollability);
      container.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Scroll behavior scoped to right column only (hover required)
  useEffect(() => {
    const container = articlesContainerRef.current;
    if (!container) return;

    // Disable scroll lock on mobile
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isRightHovered || !isScrollable) return;

      // Check if we're at the boundaries
      const atTop = container.scrollTop === 0;
      const atBottom = Math.abs(
        container.scrollHeight - container.clientHeight - container.scrollTop
      ) < 50;

      // Prevent default scroll if in middle of list
      if (!atTop && !atBottom) {
        e.preventDefault();
        // Apply smooth momentum-based scroll
        applyScrollMomentum(container, e.deltaY);
      }
      // Allow natural scroll if at top (scroll up) or at bottom (scroll down to next section)
      else if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
        // Allow default behavior
        return;
      } else {
        e.preventDefault();
        applyScrollMomentum(container, e.deltaY);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (scrollAnimationRef.current !== null) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, [isRightHovered, isScrollable, isAtEnd]);

  // Lock visible count to 2 full sub-articles and align heights
  useEffect(() => {
    const featuredCol = featuredColumnRef.current;
    const listEl = articlesListRef.current;
    const firstArticleEl = firstArticleRef.current;
    if (!featuredCol || !listEl || !firstArticleEl) return;

    const updateHeights = () => {
      const articleHeight = firstArticleEl.getBoundingClientRect().height;
      if (!articleHeight) return;

      const listStyles = window.getComputedStyle(listEl);
      const paddingTop = parseFloat(listStyles.paddingTop || "0");
      const paddingBottom = parseFloat(listStyles.paddingBottom || "0");
      const baseHeight = Math.ceil(articleHeight * 2 + paddingTop + paddingBottom);

      setFeaturedMinHeight(baseHeight);

      const featuredHeight = featuredCol.getBoundingClientRect().height;
      const alignedHeight = Math.ceil(Math.max(featuredHeight, baseHeight));
      setRightColumnHeight(alignedHeight);
    };

    updateHeights();
    const observer = new ResizeObserver(updateHeights);
    observer.observe(featuredCol);
    observer.observe(firstArticleEl);
    observer.observe(listEl);

    window.addEventListener("resize", updateHeights);
    return () => {
      window.removeEventListener("resize", updateHeights);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative"
    >
      <div className="flex flex-col">
        {/* Section Header - Corporate editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 sm:px-8 lg:px-12 pt-12 lg:pt-16 pb-8 lg:pb-10 flex-shrink-0 border-b border-gray-100"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 lg:mb-5 tracking-tight">
            From the Field
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl leading-relaxed font-light">
            Project updates, milestones, and progress from our active jobsites.
          </p>
        </motion.div>

        {/* Two-Column Layout - Turner Construction style (65-70% left, narrower right) */}
        <div className="flex-1 flex gap-0 items-start">
          {/* LEFT COLUMN: Featured Article (Static) - Primary Content (65-70% width) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            ref={featuredColumnRef}
            className="w-2/3 flex flex-col px-6 sm:px-8 lg:px-12 py-6 lg:py-8 border-r border-gray-100"
            style={featuredMinHeight ? { minHeight: featuredMinHeight } : undefined}
          >
            <a href="/projects" className="flex flex-col cursor-pointer group">
              {/* Featured Image - Large hero image with generous aspect ratio */}
              <div className="relative w-full flex-shrink-0 overflow-hidden rounded-xl mb-8 lg:mb-10 shadow-xl group-hover:shadow-2xl transition-all duration-500" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.headline}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  priority
                  sizes="100%"
                />
              </div>

              {/* Featured Content - Large, prominent editorial styling */}
              <div className="flex flex-col flex-shrink-0 max-w-full">
                {/* Eyebrow label */}
                <p className="text-xs lg:text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3 lg:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {featuredArticle.project}
                </p>

                {/* Headline - DOMINANT, corporate editorial scale, fully clickable */}
                <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-5 lg:mb-6 leading-tight tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                  {featuredArticle.headline}
                </h3>

                {/* Summary - Larger, more readable, editorial weight */}
                <p className="text-base lg:text-xl text-gray-700 mb-5 lg:mb-7 leading-relaxed font-light max-w-2xl group-hover:text-gray-900 transition-colors duration-300">
                  {featuredArticle.summary}
                </p>

                {/* Metadata and CTA */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 lg:gap-5">
                  <p className="text-sm lg:text-base text-gray-500 font-light">
                    {featuredArticle.date}
                  </p>
                  <div className="inline-flex items-center gap-2 text-gray-900 font-semibold text-base lg:text-lg group-hover:text-blue-600 transition-colors duration-300 w-fit">
                    <span>Read more</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* RIGHT COLUMN: Secondary Articles Feed (Scrollable) - Narrow secondary column (30-35% width) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            ref={rightColumnRef}
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
            className="flex-1 flex flex-col overflow-hidden min-w-0 bg-gray-50 self-start"
            style={rightColumnHeight ? { height: rightColumnHeight } : undefined}
          >
            <div
              ref={articlesContainerRef}
              className="flex-1 overflow-y-scroll overflow-x-hidden"
              style={{
                WebkitOverflowScrolling: "touch",
                msOverflowStyle: "none", // Hide scrollbar in IE/Edge
                scrollbarWidth: "none", // Hide scrollbar in Firefox
              }}
            >
              {/* Hide scrollbar CSS via style tag */}
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {/* Secondary article feed - clear hierarchy and spacing */}
              <div ref={articlesListRef} className="flex flex-col px-5 sm:px-6 lg:px-8 py-6 lg:py-8 gap-0">
                {articlesList.map((article, index) => (
                  <motion.a
                    key={article.id}
                    ref={index === 0 ? firstArticleRef : undefined}
                    href="/projects"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="group cursor-pointer pb-5 lg:pb-6 border-b border-gray-200 last:border-b-0 hover:bg-white transition-all duration-300 px-0 block"
                  >
                    <div className="flex flex-col gap-2.5 lg:gap-3">
                      {/* Article Thumbnail - Proportional rectangular for secondary content */}
                      <div className="w-full flex-shrink-0">
                        <div className="relative w-full overflow-hidden rounded-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105" style={{ aspectRatio: "16/9" }}>
                          <Image
                            src={article.image}
                            alt={article.headline}
                            fill
                            className="object-cover transition-transform duration-700 ease-out"
                            sizes="100%"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Article Content - Clearly secondary to featured */}
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors duration-300">
                          {article.project}
                        </p>

                        <h4 className="text-sm lg:text-base font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition-colors duration-300">
                          {article.headline}
                        </h4>

                        <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-2 font-light group-hover:text-gray-900 transition-colors duration-300">
                          {article.summary}
                        </p>
                      </div>

                      {/* Metadata with CTA */}
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-gray-500 font-light">
                          {article.date}
                        </p>
                        <div className="inline-flex items-center gap-1 text-gray-900 font-semibold text-xs group-hover:text-blue-700 transition-colors duration-300">
                          <span>Read</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}

                {/* End indicator - editorial style */}
                <div className="py-6 lg:py-7 text-center">
                  <p className="text-xs text-gray-400 font-light tracking-wide">End of Latest Updates</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator (desktop only, when there's content to scroll) */}
      {isScrollable && !isAtEnd && isSectionActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 pointer-events-none"
        >
          <p className="text-xs text-gray-400 font-medium">Scroll to continue</p>
          <svg
            className="w-5 h-5 text-gray-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      )}
    </section>
  );
};

export default FromTheField;
