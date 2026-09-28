import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { markets } from "@/data/markets";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ashlaurconstruction.com";
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/about/become-a-subcontractor",
    "/about/culture",
    "/about/locations",
    "/about/market-sectors",
    "/about/safety-quality",
    "/about/team",
    "/about/who-we-are",
    "/careers",
    "/contact",
    "/gallery",
    "/policies",
    "/process",
    "/projects",
    "/projects/map",
    "/projects/upcoming",
    "/recognition",
    "/safety-quality-planning",
    "/services",
    "/services/architect-services",
    "/services/construction-management",
    "/services/design-build",
    "/services/general-contracting",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
  }));

  const marketEntries = markets.map((market) => ({
    url: `${baseUrl}${market.path}`,
    lastModified: now,
  }));

  const projectEntries = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: now,
  }));

  return [...staticEntries, ...marketEntries, ...projectEntries];
}
