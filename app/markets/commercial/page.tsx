import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { getMarketMetadata } from "@/data/markets";
import MarketHero from "../MarketHero";
import ProjectsGridWithFilter from "../../../components/projects/ProjectsGridWithFilter";

const commercialProjects = projects.filter((project) => project.category === "Commercial");

export const metadata: Metadata = getMarketMetadata("commercial");

export default function CommercialPage() {
  return (
    <>
      <MarketHero
        title="Commercial"
        subtitle="Explore Ashlaur Construction's commercial projects in Chicago."
        backgroundImage={commercialProjects[0]?.mainImage ?? "/images/projects/coming-soon.svg"}
      />
      <ProjectsGridWithFilter projects={commercialProjects} />
    </>
  );
}
