"use client";

import { useState } from "react";
import Link from "next/link";
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
    "all",
    "commercial",
    "residential",
    "hospitality",
    "healthcare",
    "education",
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const formatCategoryName = (cat: string) =>
    cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Fixed Left Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-gray-100 flex flex-col border-r border-gray-300 z-40 overflow-y-auto">
        <div className="p-6">
          <Link href="/" className="inline-block">
            <div className="flex items-baseline gap-0">
              <span className="text-2xl font-black text-blue-600">Ash</span>
              <span className="text-2xl font-bold text-gray-900">Laur</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 py-8">
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="text-gray-900 font-semibold"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Category Filter */}
        <div className="px-6 py-6 border-t border-gray-300">
          <p className="text-xs font-semibold text-gray-600 uppercase mb-4">
            Filter by Category
          </p>
          <ul className="space-y-2 text-xs">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left py-1.5 px-2 rounded transition ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {formatCategoryName(cat)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="px-6 py-6 border-t border-gray-300">
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-blue-600 transition"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-blue-600 transition"
              title="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-blue-600 transition"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Gallery Content */}
      <main className="ml-64 flex-1 overflow-y-auto bg-black">
        <div className="p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
              Portfolio
            </h1>
            <p className="text-lg text-gray-400">
              {filteredImages.length} {selectedCategory === "all" ? "projects" : `${selectedCategory} projects`}
            </p>
          </div>

          {/* Masonry Grid - Edge-to-Edge */}
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
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Gradient Overlay - Always visible, darkens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-colors duration-300" />

                {/* Text - Always visible, positioned bottom-left */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
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
    </div>
  );
}
