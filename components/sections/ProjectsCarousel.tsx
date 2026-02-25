"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const ProjectsCarousel = () => {
  // Get first 3 projects regardless of status
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="bg-neutral-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">
            Featured Projects
          </h2>

          <Link
            href="/projects"
            className="bg-red-600 text-white px-6 py-3 text-sm font-semibold tracking-wide hover:bg-red-700 transition"
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* LEFT FEATURED PROJECT */}
          {featuredProjects.length > 0 && (
            <div className="lg:col-span-2">
              <div className="relative w-full h-[520px] overflow-hidden group">
                <Image
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-semibold">
                    {featuredProjects[0].title}
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* RIGHT STACKED PROJECTS */}
          <div className="flex flex-col gap-6">

            {featuredProjects.length > 1 && (
              <div className="relative w-full h-[250px] overflow-hidden group">
                <Image
                  src={featuredProjects[1].image}
                  alt={featuredProjects[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-6 left-6 text-white text-lg font-semibold">
                  {featuredProjects[1].title}
                </div>
              </div>
            )}

            {featuredProjects.length > 2 && (
              <div className="relative w-full h-[250px] overflow-hidden group">
                <Image
                  src={featuredProjects[2].image}
                  alt={featuredProjects[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-6 left-6 text-white text-lg font-semibold">
                  {featuredProjects[2].title}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectsCarousel;