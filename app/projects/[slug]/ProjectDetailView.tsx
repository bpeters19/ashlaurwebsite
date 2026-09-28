"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { type Project, type ProjectStatus } from "@/data/projects";

type TimelinePhase = {
  key: ProjectStatus;
  label: string;
};

type ProjectDetailViewProps = {
  project: Project;
  previousProject: Project;
  nextProject: Project;
  timelinePhases: TimelinePhase[];
  currentPhaseIndex: number;
};

export default function ProjectDetailView({
  project,
  previousProject,
  nextProject,
  timelinePhases,
  currentPhaseIndex,
}: ProjectDetailViewProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const projectGallery = project.gallery ?? [];
  const legacyGallery = project.galleryImages
    .filter((img) => !img.includes("coming-soon"))
    .filter((img) => img !== project.mainImage)
    .map((src, index) => ({
      src,
      alt: `${project.title} gallery photo ${index + 1}`,
    }));
  const projectImages = projectGallery.length ? projectGallery : legacyGallery;
  const progressWidth = `${(currentPhaseIndex / (timelinePhases.length - 1)) * 100}%`;

  const selectedImage =
    selectedImageIndex === null ? null : projectImages[selectedImageIndex]?.src ?? null;

  const factItems = [
    { label: "Contract Value", value: project.facts?.contractValueRange },
    { label: "Square Footage", value: project.facts?.squareFootage },
    { label: "Duration", value: project.facts?.duration },
    { label: "Delivery Method", value: project.facts?.deliveryMethod },
    { label: "Role", value: project.facts?.role },
    {
      label: "Partners",
      value: project.facts?.partners?.length ? project.facts.partners.join(", ") : undefined,
    },
  ].filter((item) => item.value);

  const storyItems = [
    { label: "Challenge", value: project.story?.challenge },
    { label: "Approach", value: project.story?.approach },
    { label: "Result", value: project.story?.result },
  ].filter((item) => item.value);

  const openPreviousImage = () => {
    if (selectedImageIndex === null) {
      return;
    }

    setSelectedImageIndex(
      (selectedImageIndex - 1 + projectImages.length) % projectImages.length
    );
  };

  const openNextImage = () => {
    if (selectedImageIndex === null) {
      return;
    }

    setSelectedImageIndex((selectedImageIndex + 1) % projectImages.length);
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowLeft")
        setSelectedImageIndex((i) =>
          i === null ? null : (i - 1 + projectImages.length) % projectImages.length
        );
      if (e.key === "ArrowRight")
        setSelectedImageIndex((i) =>
          i === null ? null : (i + 1) % projectImages.length
        );
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImageIndex, projectImages.length]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-full bg-neutral-950"
        >
          <div className="relative min-h-[72vh] w-full overflow-hidden">
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

            <div className="absolute left-6 top-6 z-10 md:left-10">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/40"
              >
                ← Back to Project Gallery
              </Link>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:px-10 lg:px-12 lg:pb-12">
              <div className="max-w-4xl text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                  {project.category}
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="w-full border-t border-white/10 bg-neutral-950"
        >
          <div className="px-6 py-10 md:px-10 lg:px-12">
            <div className="overflow-x-auto">
              <div className="relative min-w-[720px]">
                <div className="absolute left-0 right-0 top-3 h-px bg-white/20" />
                <div className="absolute left-0 top-3 h-px bg-white/80" style={{ width: progressWidth }} />

                <div className="grid grid-cols-6">
                  {timelinePhases.map((phase, index) => {
                    const isCompleted = index < currentPhaseIndex;
                    const isCurrent = index === currentPhaseIndex;

                    return (
                      <div key={phase.key} className="flex flex-col items-center">
                        <div
                          className={`h-6 w-6 rounded-full border-2 transition-colors duration-300 ${
                            isCurrent
                              ? "border-amber-300 bg-amber-400"
                              : isCompleted
                                ? "border-white bg-white"
                                : "border-white/35 bg-neutral-950"
                          }`}
                        />
                        <p
                          className={`mt-4 whitespace-nowrap text-[11px] uppercase tracking-[0.16em] ${
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
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }}
          className="border-b border-gray-200 bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 md:px-10 lg:px-12">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Location</p>
              <p className="mt-3 text-lg font-semibold text-gray-900">
                {project.location?.address ?? "Location available upon request"}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Project Type</p>
              <p className="mt-3 text-lg font-semibold text-gray-900">{project.category}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Scope</p>
              <p className="mt-3 text-lg font-semibold leading-relaxed text-gray-900">
                {project.scope ?? "Scope details available upon request"}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Phase</p>
              <p className="mt-3 text-lg font-semibold text-gray-900">
                {timelinePhases[currentPhaseIndex]?.label ?? "Project Phase"}
              </p>
            </div>
          </div>
        </motion.section>

        {factItems.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="border-b border-gray-200 bg-white"
          >
            <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Project Facts</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {factItems.map((item) => (
                  <div key={item.label} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {storyItems.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.23, ease: "easeOut" }}
            className="border-b border-gray-200 bg-white"
          >
            <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Project Story</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {storyItems.map((item) => (
                  <article key={item.label} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">{item.label}</p>
                    <p className="mt-3 text-gray-700 leading-relaxed">{item.value}</p>
                  </article>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {project.testimonial?.quote && (
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
            className="border-b border-gray-200 bg-white"
          >
            <div className="mx-auto max-w-4xl px-6 py-14 md:px-10 lg:px-12">
              <blockquote className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                <p className="text-2xl leading-relaxed text-gray-900">&ldquo;{project.testimonial.quote}&rdquo;</p>
                {(project.testimonial.name || project.testimonial.title || project.testimonial.company) && (
                  <footer className="mt-6 text-sm text-gray-600">
                    {project.testimonial.name ?? ""}
                    {project.testimonial.title ? `, ${project.testimonial.title}` : ""}
                    {project.testimonial.company ? `, ${project.testimonial.company}` : ""}
                  </footer>
                )}
              </blockquote>
            </div>
          </motion.section>
        )}

        {projectImages.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="bg-white"
          >
            <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                  Gallery
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                  Project Images
                </h2>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
                {projectImages.map((image, index) => (
                  <motion.button
                    key={`${project.slug}-${image.src}-${index}`}
                    type="button"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: 0.06 * index, ease: "easeOut" }}
                    onClick={() => setSelectedImageIndex(index)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 text-left"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                      Expand Image
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.26, ease: "easeOut" }}
          className="border-t border-gray-200 bg-neutral-50"
        >
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-12 md:grid-cols-2 md:px-10 lg:px-12">
            <Link
              href={`/projects/${previousProject.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Previous Project</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">{previousProject.title}</p>
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Next Project</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">{nextProject.title}</p>
            </Link>
          </div>
        </motion.section>
      </main>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              type="button"
              aria-label="Close image viewer"
              onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
              className="absolute right-6 top-6 z-10 text-4xl text-white transition-colors hover:text-gray-300"
            >
              ×
            </button>

            {projectImages.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => { e.stopPropagation(); openPreviousImage(); }}
                  className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-2xl text-white transition-colors hover:bg-black/45"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => { e.stopPropagation(); openNextImage(); }}
                  className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-2xl text-white transition-colors hover:bg-black/45"
                >
                  →
                </button>
              </>
            )}

            <div
              className="relative mx-auto h-full w-full max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={`${project.title} expanded gallery image`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}