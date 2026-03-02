import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { projects } from "@/data/projects";

const timelinePhases = [
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

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const upcomingStatuses = new Set<string>(["preconstruction", "permitting", "mobilization"]);
  const projectGroup = upcomingStatuses.has(project.status)
    ? projects.filter((item) => upcomingStatuses.has(item.status))
    : projects;
  const projectIndex = projectGroup.findIndex((item) => item.slug === project.slug);
  const previousProject = projectGroup[(projectIndex - 1 + projectGroup.length) % projectGroup.length];
  const nextProject = projectGroup[(projectIndex + 1) % projectGroup.length];

  const currentPhaseIndex = timelinePhases.findIndex((phase) => phase.key === project.status);
  const safePhaseIndex = currentPhaseIndex === -1 ? 0 : currentPhaseIndex;
  const progressWidth = `${(safePhaseIndex / (timelinePhases.length - 1)) * 100}%`;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="w-full bg-neutral-950">
          <div className="relative w-full min-h-[70vh]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
            <Link
              href={`/projects/${previousProject.slug}`}
              aria-label="Previous project"
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/35 bg-black/35 text-white flex items-center justify-center text-xl md:text-2xl hover:bg-black/55 transition-colors"
            >
              ←
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              aria-label="Next project"
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/35 bg-black/35 text-white flex items-center justify-center text-xl md:text-2xl hover:bg-black/55 transition-colors"
            >
              →
            </Link>
            <div className="absolute bottom-8 left-6 md:left-10 lg:left-12 text-white max-w-xl">
              <h1 className="text-xl md:text-2xl font-semibold tracking-tight">{project.title}</h1>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.16em] text-white/85">
                {project.location.address} • {project.category}
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-neutral-950 border-t border-white/10">
          <div className="px-6 md:px-10 lg:px-12 py-10 md:py-12">
            <div className="overflow-x-auto">
              <div className="relative min-w-[720px]">
                <div className="absolute left-0 right-0 top-3 h-px bg-white/20" />
                <div className="absolute left-0 top-3 h-px bg-white/80" style={{ width: progressWidth }} />

                <div className="grid grid-cols-6">
                  {timelinePhases.map((phase, index) => {
                    const isCompleted = index < safePhaseIndex;
                    const isCurrent = index === safePhaseIndex;

                    return (
                      <div key={phase.key} className="flex flex-col items-center">
                        <div
                          className={`h-6 w-6 rounded-full border-2 transition-colors duration-300 ${
                            isCurrent
                              ? "bg-amber-400 border-amber-300"
                              : isCompleted
                                ? "bg-white border-white"
                                : "bg-neutral-950 border-white/35"
                          }`}
                        />
                        <p
                          className={`mt-4 text-[11px] uppercase tracking-[0.16em] whitespace-nowrap ${
                            isCurrent
                              ? "text-amber-300"
                              : isCompleted
                                ? "text-white/85"
                                : "text-white/45"
                          }`}
                        >
                          {phase.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 px-6 md:px-10 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-gray-900">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">Location</p>
              <p className="mt-2 text-lg font-semibold">{project.location.address}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">Type</p>
              <p className="mt-2 text-lg font-semibold">{project.category}</p>
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
