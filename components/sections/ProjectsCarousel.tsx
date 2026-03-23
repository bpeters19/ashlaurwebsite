"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const ProjectsCarousel = () => {
  // Display ALL featured projects
  const featuredProjects = projects;

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

        {/* Responsive Grid - displays all projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Link
              key={`${project.slug}-${index}`}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative w-full h-[300px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsCarousel;