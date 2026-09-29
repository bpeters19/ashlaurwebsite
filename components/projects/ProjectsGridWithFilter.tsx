"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { markets } from "@/data/markets";
import { type Project } from "@/data/projects";

type ProjectsGridWithFilterProps = {
  projects: Project[];
};

function getTileSizeClass(index: number) {
  if (index === 0) return "md:col-span-12 lg:col-span-7";
  if (index === 1) return "md:col-span-12 lg:col-span-5";
  return "md:col-span-6 lg:col-span-4";
}

export default function ProjectsGridWithFilter({ projects }: ProjectsGridWithFilterProps) {
  const [selectedMarket, setSelectedMarket] = useState<string>("all");

  const availableMarketNames = useMemo(
    () => new Set(projects.map((project) => project.category)),
    [projects]
  );

  const filters = useMemo(
    () => [
      { value: "all", label: "All" },
      ...markets
        .filter((market) => availableMarketNames.has(market.name))
        .map((market) => ({ value: market.name, label: market.name })),
    ],
    [availableMarketNames]
  );

  const filteredProjects = useMemo(() => {
    if (selectedMarket === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === selectedMarket);
  }, [projects, selectedMarket]);

  return (
    <>
      <section className="border-b border-border bg-background py-8">
        <div className="editorial-container flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setSelectedMarket(filter.value)}
              className={`px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] border transition-colors ${
                selectedMarket === filter.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="editorial-section bg-background">
        <div className="editorial-container grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
          {filteredProjects.map((project, index) => (
            <Link
              key={`${project.slug}-${index}`}
              href={`/projects/${project.slug}`}
              className={`group block ${getTileSizeClass(index)}`}
            >
              <div className="relative overflow-hidden aspect-[16/10] image-reveal">
                <Image
                  src={project.mainImage}
                  alt={`${project.title} project photo`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
              <div className="mt-5 border-t border-border pt-4">
                <p className="section-label mb-2">{String(index + 1).padStart(2, "0")} — {project.category}</p>
                <h3 className="font-display text-4xl leading-[0.95] text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-muted max-w-[56ch]">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
