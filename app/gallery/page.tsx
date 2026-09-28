import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Project Gallery | Ashlaur Construction",
  description:
    "Explore completed Ashlaur Construction projects and site locations across Chicago and surrounding communities.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
