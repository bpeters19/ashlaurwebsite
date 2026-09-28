import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectsGridWithFilter from "../../components/projects/ProjectsGridWithFilter";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Construction Projects in Chicago | Ashlaur Construction",
  description:
    "Browse Ashlaur Construction projects across healthcare, education, municipal, hospitality, and affordable housing markets.",
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <ProjectsGridWithFilter projects={projects} />
      </main>
      
      <Footer />
    </div>
  );
}