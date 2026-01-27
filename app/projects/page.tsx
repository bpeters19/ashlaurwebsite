import Navbar from "../../components/Navbar";
import ProjectsCarousel from "../../components/sections/ProjectsCarousel";
import Footer from "../../components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectsCarousel />
      <Footer />
    </div>
  );
}