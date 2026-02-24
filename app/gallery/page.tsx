"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import ProjectMap from "../../components/ProjectMap";
import { projects } from "@/data/projects";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll to project when hash changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const openProjectSlug = params.get('openProject');
    
    if (openProjectSlug) {
      const project = projects.find(p => p.slug === openProjectSlug);
      if (project) {
        // Open the lightbox modal with this project's image
        setSelectedImage(project.image);
        
        // Also scroll to the project
        setTimeout(() => {
          const element = document.getElementById(openProjectSlug);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 100);
      }
    }
  }, []);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "commercial", name: "Commercial" },
    { id: "residential", name: "Residential" },
    { id: "hospitality", name: "Hospitality" },
    { id: "healthcare", name: "Healthcare" },
    { id: "education", name: "Education" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === selectedCategory
        );

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
              {filteredProjects.map((project, index) => (
                <div
                  id={project.slug}
                  key={project.slug}
                  className="group relative overflow-hidden cursor-pointer w-full aspect-square transition-all duration-300"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-colors duration-300" />

                  {/* Text - Always visible */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-white text-base md:text-lg font-semibold leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm mt-2 tracking-wide uppercase">
                      {project.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500 text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Project Map Section */}
        <section className="bg-white border-t border-gray-200 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">
                  Project Locations
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our work across the region
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Explore the geographic distribution of our completed projects throughout the Chicago area.
                </p>
              </div>
              <ProjectMap />
            </div>
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
