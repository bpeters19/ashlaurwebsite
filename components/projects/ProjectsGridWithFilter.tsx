"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { markets } from "@/data/markets";
import { type Project } from "@/data/projects";

const tileSizes = [
  "col-span-2 row-span-2",
  "row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
] as const;

type ProjectsGridWithFilterProps = {
  projects: Project[];
};

function getTileSizeClass(index: number, slug: string, totalCount: number) {
  const remainingItems = totalCount - index;

  if (remainingItems <= 2) {
    return "col-span-1 row-span-1";
  }

  const seed = (index + slug.length) % tileSizes.length;
  const candidateSize = tileSizes[seed];

  if (remainingItems <= 4 && candidateSize.includes("row-span-2")) {
    return "col-span-1 row-span-1";
  }

  if (remainingItems <= 6 && candidateSize === "col-span-2 row-span-2") {
    return "col-span-2 row-span-1";
  }

  return candidateSize;
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
      <section className="border-b border-gray-200 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 sm:px-6 lg:px-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setSelectedMarket(filter.value)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                selectedMarket === filter.value
                  ? "bg-[#0B1F3B] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-2 grid-flow-dense">
          {filteredProjects.map((project, index) => (
            <Link
              key={`${project.slug}-${index}`}
              href={`/projects/${project.slug}`}
              className={`relative group overflow-hidden ${getTileSizeClass(index, project.slug, filteredProjects.length)}`}
            >
              <Image
                src={project.mainImage}
                alt={`${project.title} project photo`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg pr-4">
                {project.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
