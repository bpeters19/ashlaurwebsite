import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { projects } from "@/data/projects";

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

function getTileSizeClass(index: number, slug: string, totalCount: number) {
  const remainingItems = totalCount - index;

  // Prevent trailing gaps by shrinking large cards near the end of the list.
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

export default function Projects() {
  const fillerCount = 6;
  const fillerProjects = Array.from({ length: fillerCount }, (_, index) => projects[index % projects.length]);
  const mergedProjects = [...projects, ...fillerProjects];
  const displayProjects = Array.from(new Map(mergedProjects.map((project) => [project.slug, project])).values());

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-2 grid-flow-dense">
            {displayProjects.map((project, index) => (
              <Link
                key={`${project.slug}-${index}`}
                href={`/projects/${project.slug}`}
                className={`relative group overflow-hidden ${getTileSizeClass(index, project.slug, displayProjects.length)}`}
              >
                <Image
                  src={project.mainImage}
                  alt={project.title}
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
      </main>
      
      <Footer />
    </div>
  );
}