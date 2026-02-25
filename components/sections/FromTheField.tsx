"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const FromTheField = () => {
  const articlesContainerRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number | null>(null);
  const [isRightHovered, setIsRightHovered] = useState(false);

  // Featured article on left
  const featuredArticle = {
    id: 1,
    title: "Stroger Hospital - Doors and Hardware Replacement",
    summary: "Phase two installation reaches the 8th floor with precision scheduling keeping the project on track amid ongoing hospital operations.",
    image: "https://picsum.photos/seed/construction-site-field/1200/800",
  };

  // Articles for right column (exactly 4 with scroll)
  const articles = [
    {
      id: 2,
      title: "Friend Health Woodlawn - Foundation Complete",
      summary: "Structural work wrapped ahead of schedule. Interior buildout begins next phase.",
      image: "https://picsum.photos/seed/construction-site-2/1200/800",
    },
    {
      id: 3,
      title: "Wicker Park Hyatt - Interior Buildout Begins",
      summary: "Construction teams mobilize with finishes installation starting on floors 4-7.",
      image: "https://picsum.photos/seed/construction-site-3/1200/800",
    },
    {
      id: 4,
      title: "Cook County Health - MEP Coordination Complete",
      summary: "Mechanical, electrical, and plumbing systems coordinated for seamless integration.",
      image: "https://picsum.photos/seed/construction-site-4/1200/800",
    },
    {
      id: 5,
      title: "Lincoln Park Research Facility - Steel Framing",
      summary: "Structural steel erection milestone reached ahead of schedule.",
      image: "https://picsum.photos/seed/construction-site-5/1200/800",
    },
  ];

  // Smooth scroll with momentum and easing
  const applyScrollMomentum = (container: HTMLDivElement, initialDelta: number) => {
    if (scrollAnimationRef.current !== null) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }

    const normalizedDelta = Math.max(-16, Math.min(16, initialDelta * 0.08));
    let velocity = normalizedDelta;
    const friction = 0.96;
    const minVelocity = 0.02;
    
    let frame = 0;
    const easeInFrames = 2;
    let easeMultiplier = 1;
    
    const animate = () => {
      if (Math.abs(velocity) > minVelocity) {
        if (frame < easeInFrames) {
          easeMultiplier = (frame + 1) / easeInFrames;
          frame++;
        }
        
        const currentScroll = container.scrollTop;
        const easedVelocity = velocity * easeMultiplier;
        const newScroll = currentScroll + easedVelocity;
        
        const maxScroll = container.scrollHeight - container.clientHeight;
        container.scrollTop = Math.max(0, Math.min(newScroll, maxScroll));
        
        velocity *= friction;
        
        scrollAnimationRef.current = requestAnimationFrame(animate);
      } else {
        scrollAnimationRef.current = null;
      }
    };
    
    animate();
  };

  // Scroll behavior scoped to right column only
  useEffect(() => {
    const container = articlesContainerRef.current;
    if (!container) return;

    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isRightHovered) return;

      const atTop = container.scrollTop === 0;
      const atBottom = Math.abs(
        container.scrollHeight - container.clientHeight - container.scrollTop
      ) < 50;

      if (!atTop && !atBottom) {
        e.preventDefault();
        applyScrollMomentum(container, e.deltaY);
      } else if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
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
  }, [isRightHovered]);

  return (
    <section className="bg-neutral-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">
            From the Field
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">

          {/* LEFT: Large Featured Card (2 columns) */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[500px] overflow-hidden group rounded-lg">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-5 mb-3">
              {featuredArticle.title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {featuredArticle.summary}
            </p>
          </div>

          {/* RIGHT: Two Stacked Cards with Scroll (1 column) */}
          <div 
            ref={articlesContainerRef}
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
            className="flex flex-col gap-5 overflow-y-auto overflow-x-hidden h-[540px] lg:col-span-1 pr-2"
            style={{
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {articles.map((article) => (
              <div key={article.id} className="flex-shrink-0">
                <div className="relative w-full h-[200px] overflow-hidden group rounded-lg">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-base font-bold text-gray-900 mt-3 mb-2">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {article.summary}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FromTheField;
