import type { Metadata } from "next";
import CareersPageClient from "./CareersPageClient";

export const metadata: Metadata = {
  title: "Construction Careers in Chicago",
  description:
    "Explore careers at Ashlaur Construction and connect with our team to join upcoming opportunities.",
};

export default function CareersPage() {
  return <CareersPageClient />;
}
