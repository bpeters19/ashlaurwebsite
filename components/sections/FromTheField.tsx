"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const FromTheField = () => {
  const articlesContainerRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const featuredArticle = {
    id: 1,
    title: "JTDC Bathroom Renovations",
    image: "/images/from-the-field/ccjc.jpg",
    slug: "jtdc-bathroom-renovations",
  };

  const articles = [
    {
      id: 2,
      title: "Park Forest Indianwood/Blackhawk Plaza",
      image: "/images/from-the-field/parkforest.jpg",
      slug: "park-forest-indianwood-blackhawk-plaza",
    },
    {
      id: 3,
      title: "Cook County Health – Buildings and Grounds Storage Trailer site developement",
      image: "/images/from-the-field/cook-county-health-building.jpg",
      slug: "cook-county-health-buildings-and-grounds-storage-trailer-site-development",
    },
    {
      id: 4,
      title: "Skokie Courthouse Project",
      image: "/images/from-the-field/skokie-court-house.jpg",
      slug: "skokie-courthouse-project",
    },
    {
      id: 5,
      title: "CCAB 1st Floor Toilet Project",
      image: "/images/from-the-field/cook-county-courthouse.jpg",
      slug: "ccab-1st-floor-toilet",
    },
  ];

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

  useEffect(() => {
    const container = articlesContainerRef.current;
    if (!container) return;

    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isRightHovered) return;

      const atTop = container.scrollTop === 0;
      const atBottom =
        Math.abs(container.scrollHeight - container.clientHeight - container.scrollTop) < 50;

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

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleArticlesScroll = () => {
    setIsScrolling(true);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 650);
  };

  return (
    <section className="bg-gradient-to-r from-blue-900/20 via-blue-800/15 to-blue-700/10 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <Link href="/projects/upcoming" className="group inline-block">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
              From the Field
            </h2>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2">
            <Link href={`/projects/upcoming#${featuredArticle.slug}`} className="block group">
              <div className="relative w-full h-[460px] overflow-hidden rounded-lg">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  quality={100}
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-5 group-hover:text-blue-700 transition-colors duration-300">
                {featuredArticle.title}
              </h3>
            </Link>
          </div>

          <div
            ref={articlesContainerRef}
            onScroll={handleArticlesScroll}
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
            className={`from-the-field-scroll flex flex-col gap-5 overflow-y-scroll overflow-x-hidden h-[500px] lg:col-span-1 pr-2 ${
              isScrolling ? "is-scrolling" : ""
            }`}
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style>{`
              .from-the-field-scroll {
                scrollbar-width: thin;
                scrollbar-color: transparent transparent;
              }

              .from-the-field-scroll::-webkit-scrollbar {
                width: 8px;
              }

              .from-the-field-scroll::-webkit-scrollbar-track {
                background: transparent;
              }

              .from-the-field-scroll::-webkit-scrollbar-button {
                display: none;
                width: 0;
                height: 0;
              }

              .from-the-field-scroll::-webkit-scrollbar-thumb {
                background: rgba(107, 114, 128, 0);
                border-radius: 9999px;
                opacity: 0;
                transition: opacity 260ms ease, background-color 260ms ease;
              }

              .from-the-field-scroll.is-scrolling {
                scrollbar-color: rgba(107, 114, 128, 0.75) transparent;
              }

              .from-the-field-scroll.is-scrolling::-webkit-scrollbar-thumb {
                background: rgba(107, 114, 128, 0.75);
                opacity: 1;
              }
            `}</style>

            {articles.map((article) => (
              <div key={article.id} className="flex-shrink-0">
                <Link href={`/projects/upcoming#${article.slug}`} className="block group">
                  <div className="relative w-full h-[185px] overflow-hidden rounded-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mt-3 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {article.title}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromTheField;
