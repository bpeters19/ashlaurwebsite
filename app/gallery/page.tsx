"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const galleryImages = [
  { src: "/images/projects/corporate-hq/1.jpg", category: "commercial", title: "Corporate Headquarters", subtitle: "Commercial" },
  { src: "/images/projects/apartment-complex/1.jpg", category: "residential", title: "Apartment Complex", subtitle: "Residential" },
  { src: "/images/projects/wicker-park-hyatt/1.jpg", category: "hospitality", title: "Wicker Park Hyatt", subtitle: "Hospitality" },
  { src: "/images/projects/sophy-hotel/1.jpg", category: "hospitality", title: "Sophy Hotel", subtitle: "Hospitality" },
  { src: "/images/projects/zachary-hotel/1.jpg", category: "hospitality", title: "Zachary Hotel", subtitle: "Hospitality" },
  { src: "/images/projects/retail-mall/1.jpg", category: "commercial", title: "Retail Mall", subtitle: "Commercial" },
  { src: "/images/projects/belmont-cragin-health/1.jpg", category: "healthcare", title: "Belmont Health Center", subtitle: "Healthcare" },
  { src: "/images/projects/stroger-hospital-doors/1.jpg", category: "healthcare", title: "Stroger Hospital", subtitle: "Healthcare" },
  { src: "/images/projects/friend-health-woodlawn/1.jpg", category: "healthcare", title: "Friend Health Woodlawn", subtitle: "Healthcare" },
  { src: "/images/projects/condominium-development/1.jpg", category: "residential", title: "Condominium Development", subtitle: "Residential" },
  { src: "/images/projects/downtown-office/1.jpg", category: "commercial", title: "Downtown Office", subtitle: "Commercial" },
  { src: "/images/projects/research-lab/1.jpg", category: "education", title: "Research Lab", subtitle: "Education" },
  { src: "/images/projects/townhouse-community/1.jpg", category: "residential", title: "Townhouse Community", subtitle: "Residential" },
  { src: "/images/projects/indiana-university-raintree/1.jpg", category: "education", title: "Raintree Hall", subtitle: "Education" },
  { src: "/images/projects/near-west-cps/1.jpg", category: "education", title: "CPS Offices", subtitle: "Education" },
  { src: "/images/projects/foglia-residences/1.jpg", category: "residential", title: "Foglia Residences", subtitle: "Residential" },
  { src: "/images/projects/westhaven-park/1.jpg", category: "hospitality", title: "Westhaven Park", subtitle: "Hospitality" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "commercial", name: "Commercial" },
    { id: "residential", name: "Residential" },
    { id: "hospitality", name: "Hospitality" },
    { id: "healthcare", name: "Healthcare" },
    { id: "education", name: "Education" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Project Gallery
            </h1>
            <p className="text-lg text-gray-600">
              Explore our portfolio of completed projects.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 text-sm rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid - Edge-to-Edge Masonry */}
        <section className="bg-white">
          <div className="mx-auto px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 auto-rows-max">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden cursor-pointer w-full aspect-square"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-colors duration-300" />

                  {/* Text - Always visible */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-white text-base md:text-lg font-semibold leading-tight">
                      {image.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm mt-2 tracking-wide uppercase">
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500 text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
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
