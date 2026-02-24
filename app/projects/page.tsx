"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import ProjectsCarousel from "../../components/sections/ProjectsCarousel";
import ProjectMap from "../../components/ProjectMap";
import Footer from "../../components/Footer";

export default function Projects() {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectsCarousel />
      
      {/* Project Map Section - Clickable */}
      <section className="bg-white border-t border-gray-200 py-20 cursor-pointer hover:bg-gray-50 transition" onClick={() => setMapOpen(true)}>
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
                Click to explore the geographic distribution of our completed projects throughout the Chicago area.
              </p>
            </div>
            <button
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              View Map
            </button>
          </div>
        </div>
      </section>

      {/* Map Modal */}
      {mapOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full h-[90vh] max-w-6xl flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Project Locations</h2>
              <button
                onClick={() => setMapOpen(false)}
                className="text-4xl text-gray-600 hover:text-gray-900 transition"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <ProjectMap height="100%" />
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}