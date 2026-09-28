import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectDetailView from "./ProjectDetailView";
import { getProjectBySlug, projects, type ProjectStatus } from "@/data/projects";

const timelinePhases: Array<{ key: ProjectStatus; label: string }> = [
  { key: "preconstruction", label: "Pre-Construction" },
  { key: "permitting", label: "Permitting" },
  { key: "mobilization", label: "Mobilization" },
  { key: "in-progress", label: "In Progress" },
  { key: "substantial-completion", label: "Substantial Completion" },
  { key: "complete", label: "Complete" },
] as const;

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Ashlaur Construction",
      description: "The requested project could not be found.",
    };
  }

  const title = `${project.title} | ${project.category} Construction in Chicago | Ashlaur Construction`;
  const description = project.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: project.mainImage,
          alt: `${project.title} project hero image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.mainImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const currentPhaseIndex = timelinePhases.findIndex((phase) => phase.key === project.status);

  return (
    <ProjectDetailView
      project={project}
      previousProject={previousProject}
      nextProject={nextProject}
      timelinePhases={timelinePhases}
      currentPhaseIndex={currentPhaseIndex === -1 ? 0 : currentPhaseIndex}
    />
  );
}
