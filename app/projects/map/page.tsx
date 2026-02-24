"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ProjectMap from "../../../components/ProjectMap";

export default function ProjectMapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Project Locations
            </h1>
            <p className="text-lg text-gray-600">
              Explore the geographic distribution of our completed projects throughout the Chicago area. Hover over pins to see project details.
            </p>
          </div>
        </section>

        {/* Full-Screen Map */}
        <section className="flex-1 bg-gray-100">
          <div className="w-full h-full">
            <ProjectMap height="calc(100vh - 280px)" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
