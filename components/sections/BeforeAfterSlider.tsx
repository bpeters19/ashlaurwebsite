"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Transformation Stories</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            See the dramatic difference our renovation expertise makes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <Image
                src="https://picsum.photos/800/600?random=1"
                alt="Before renovation"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg font-bold">
                BEFORE
              </div>
            </div>

            {/* After Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <Image
                src="https://picsum.photos/800/600?random=2"
                alt="After renovation"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                AFTER
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-lg border-4 border-white"></div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-secondary mb-2">Downtown Loft Renovation</h3>
            <p className="text-muted">Complete transformation from outdated office space to modern luxury loft.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;