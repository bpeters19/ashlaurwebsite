"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Star } from "lucide-react";

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      project: "Kitchen Renovation",
      rating: 5,
      thumbnail: "/images/testimonials/video-1.jpg",
      videoUrl: "https://example.com/video1.mp4", // Replace with actual video URL
      quote: "ASHLAUR transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      project: "Office Renovation",
      rating: 5,
      thumbnail: "/images/testimonials/video-2.jpg",
      videoUrl: "https://example.com/video2.mp4", // Replace with actual video URL
      quote: "Working with ASHLAUR was a game-changer for our office space. They delivered on time and within budget, creating a workspace we're proud of.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Property Developer",
      project: "Multi-Unit Renovation",
      rating: 5,
      thumbnail: "/images/testimonials/video-3.jpg",
      videoUrl: "https://example.com/video3.mp4", // Replace with actual video URL
      quote: "ASHLAUR's expertise in large-scale renovations is unmatched. They managed our complex project seamlessly and delivered exceptional results.",
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Client Success Stories</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Hear directly from our satisfied clients about their transformation experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={testimonial.thumbnail}
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Play Button */}
                <button
                  onClick={() => setSelectedVideo(testimonial.id)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>

                <blockquote className="text-muted mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div>
                  <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[80vh] bg-black rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <video
                  controls
                  autoPlay
                  className="w-full h-full max-h-[70vh] object-contain"
                  poster={testimonials.find(t => t.id === selectedVideo)?.thumbnail}
                >
                  <source
                    src={testimonials.find(t => t.id === selectedVideo)?.videoUrl}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoTestimonials;