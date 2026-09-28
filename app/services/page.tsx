import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Construction Services | Ashlaur Construction",
  description:
    "Explore Ashlaur Construction services including general contracting, construction management, design-build, architect services, and subcontracting.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
