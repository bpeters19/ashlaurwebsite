"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "commercial", name: "Commercial" },
    { id: "residential", name: "Residential" },
    { id: "hospitality", name: "Hospitality" },
    { id: "healthcare", name: "Healthcare" },
    { id: "education", name: "Education" },
  ];

  const galleryImages = [
    { src: "/images/projects/corporate-hq/1.jpg", category: "commercial", title: "Corporate Headquarters", location: "Chicago, IL" },
    { src: "/images/projects/apartment-complex/1.jpg", category: "residential", title: "Apartment Complex", location: "Oak Park, IL" },
    { src: "/images/projects/wicker-park-hyatt/1.jpg", category: "hospitality", title: "Wicker Park Hyatt Hotel", location: "Chicago, IL" },
    { src: "/images/projects/sophy-hotel/1.jpg", category: "hospitality", title: "Sophy Hotel Hyde Park", location: "Chicago, IL" },
    { src: "/images/projects/zachary-hotel/1.jpg", category: "hospitality", title: "Zachary Hotel", location: "Chicago, IL" },
    { src: "/images/projects/retail-mall/1.jpg", category: "commercial", title: "Retail Mall", location: "Naperville, IL" },
    { src: "/images/projects/belmont-cragin-health/1.jpg", category: "healthcare", title: "Cook County Health Belmont – Cragin Health Center", location: "Chicago, IL" },
    { src: "/images/projects/stroger-hospital-doors/1.jpg", category: "healthcare", title: "Stroger Hospital Doors and Hardware Replacement", location: "Chicago, IL" },
    { src: "/images/projects/friend-health-woodlawn/1.jpg", category: "healthcare", title: "Friend Health Woodlawn HQ", location: "Chicago, IL" },
    { src: "/images/projects/condominium-development/1.jpg", category: "residential", title: "Condominium Development", location: "Lincoln Park, IL" },
    { src: "/images/projects/downtown-office/1.jpg", category: "commercial", title: "Downtown Office", location: "Chicago, IL" },
    { src: "/images/projects/research-lab/1.jpg", category: "education", title: "Research Lab", location: "Urbana, IL" },
    { src: "/images/projects/townhouse-community/1.jpg", category: "residential", title: "Townhouse Community", location: "Wheaton, IL" },
    { src: "/images/projects/indiana-university-raintree/1.jpg", category: "education", title: "Indiana University – Raintree Hall", location: "Bloomington, IN" },
    { src: "/images/projects/near-west-cps/1.jpg", category: "education", title: "Near West CPS Offices", location: "Chicago, IL" },
    { src: "/images/projects/foglia-residences/1.jpg", category: "residential", title: "Foglia Residences", location: "Chicago, IL" },
    { src: "/images/projects/westhaven-park/1.jpg", category: "hospitality", title: "Westhaven Park", location: "Chicago, IL" },
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="relative py-12 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-semibold tracking-wide text-blue-200 mb-2">Our Work</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Project Gallery</h1>
              <p className="text-base text-white/90 max-w-2xl mx-auto">
                Explore our portfolio of completed projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-1.5 text-sm rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-10 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer bg-white"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-sm font-semibold mb-0.5">{image.title}</h3>
                    <p className="text-xs text-blue-200">{image.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-primary via-blue-600 to-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Your Project?</h2>
            <p className="text-base text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/contact"
                className="px-6 py-2.5 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:-translate-y-0.5 transition-transform text-sm"
              >
                Get in Touch
              </a>
              <a
                href="/projects"
                className="px-6 py-2.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all text-sm"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Project preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
