import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="w-full">
          <div className="relative w-full min-h-[70vh]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm uppercase tracking-wider opacity-90">{project.category}</p>
              <h1 className="text-4xl md:text-6xl font-bold mt-2">{project.title}</h1>
            </div>
          </div>
        </section>

        <section className="w-full py-10 px-6 md:px-10 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6 text-gray-900">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">Status</p>
              <p className="mt-2 text-lg font-semibold capitalize">{project.status}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">Location</p>
              <p className="mt-2 text-lg font-semibold">{project.location.address}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">Description</p>
              <p className="mt-2 text-lg leading-relaxed">{project.description}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
