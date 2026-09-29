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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-full bg-[#111214]"
        >
          <div className="relative min-h-[86vh] w-full overflow-hidden">
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute left-6 top-6 z-10 md:left-10">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 border border-white/35 bg-black/20 px-4 py-2 text-[11px] tracking-[0.14em] font-semibold uppercase text-white transition-colors hover:bg-black/35"
              >
                ← Back to Project Gallery
              </Link>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:px-10 lg:px-12 lg:pb-12">
              <div className="max-w-4xl text-white">
                <p className="section-label text-white/75">
                  {project.category}
                </p>
                <h1 className="mt-4 font-display text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.9] tracking-tight">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-white/82">
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
          className="w-full border-t border-white/15 bg-[#111214]"
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
                              ? "border-white bg-white"
                              : isCompleted
                                ? "border-white bg-white"
                                  : "border-white/35 bg-[#111214]"
                          }`}
                        />
                        <p
                          className={`mt-4 whitespace-nowrap text-[11px] uppercase tracking-[0.16em] ${
                            isCurrent
                              ? "text-white"
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
          className="border-b border-border bg-background"
        >
          <div className="editorial-container grid gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Location</p>
              <p className="mt-3 text-lg font-semibold text-foreground">
                {project.location?.address ?? "Location available upon request"}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Project Type</p>
              <p className="mt-3 text-lg font-semibold text-foreground">{project.category}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Scope</p>
              <p className="mt-3 text-lg font-semibold leading-relaxed text-foreground">
                {project.scope ?? "Scope details available upon request"}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Phase</p>
              <p className="mt-3 text-lg font-semibold text-foreground">
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
            className="border-b border-border bg-background"
          >
            <div className="editorial-container py-20">
              <p className="section-label mb-4">Project Facts</p>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.92] text-foreground">Project Facts</h2>
              <div className="mt-10 border-y border-border">
                {factItems.map((item) => (
                  <div key={item.label} className="grid grid-cols-1 md:grid-cols-12 gap-3 py-5 border-b border-border last:border-b-0">
                    <p className="md:col-span-4 text-xs uppercase tracking-[0.18em] text-muted">{item.label}</p>
                    <p className="md:col-span-8 text-lg font-semibold text-foreground">{item.value}</p>
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
            className="border-b border-border bg-background"
          >
            <div className="editorial-container py-20">
              <h2 className="font-display text-5xl md:text-6xl leading-[0.92] text-foreground">Project Story</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {storyItems.map((item) => (
                  <article key={item.label} className="border-t border-border pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{item.label}</p>
                    <p className="mt-3 text-foreground/80 leading-relaxed">{item.value}</p>
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
            className="border-b border-border bg-background"
          >
            <div className="editorial-container py-20">
              <blockquote className="border-t border-b border-border py-10">
                <p className="text-3xl leading-relaxed text-foreground">&ldquo;{project.testimonial.quote}&rdquo;</p>
                {(project.testimonial.name || project.testimonial.title || project.testimonial.company) && (
                  <footer className="mt-6 text-sm text-muted uppercase tracking-[0.12em]">
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
            className="bg-background"
          >
            <div className="editorial-container py-20">
              <div className="max-w-3xl">
                <p className="section-label">
                  Gallery
                </p>
                <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[0.92] text-foreground">
                  Project Images
                </h2>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
                {projectImages.map((image, index) => (
                  <motion.button
                    key={`${project.slug}-${image.src}-${index}`}
                    type="button"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: 0.06 * index, ease: "easeOut" }}
                    onClick={() => setSelectedImageIndex(index)}
                    className="group relative aspect-[16/11] overflow-hidden bg-surface text-left image-reveal"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
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
          className="border-t border-border bg-surface"
        >
          <div className="editorial-container grid gap-4 py-12 md:grid-cols-2">
            <Link
              href={`/projects/${previousProject.slug}`}
              className="border border-border bg-background p-6 transition-colors hover:border-foreground/30"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Previous Project</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{previousProject.title}</p>
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="border border-border bg-background p-6 transition-colors hover:border-foreground/30"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Next Project</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{nextProject.title}</p>
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