import Image from "next/image";

export type ProjectCard = {
  name: string;
  image: string;
  contractor: string;
  address: string;
  contractValue: string;
  scope: string;
  duration: string;
};

type ProjectGridProps = {
  projects: ProjectCard[];
};

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="space-y-24">
      {projects.map((project, index) => (
        <article key={project.name} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className={`relative aspect-[16/10] overflow-hidden image-reveal ${index % 2 === 0 ? "lg:col-span-7" : "lg:col-span-6 lg:order-2"}`}>
            <Image
              src={project.image}
              alt={`${project.name} project image`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 56vw"
            />
          </div>

          <div className={`${index % 2 === 0 ? "lg:col-span-5" : "lg:col-span-6 lg:order-1"}`}>
            <p className="section-label mb-2">{String(index + 1).padStart(2, "0")} — Featured Project</p>
            <h3 className="font-display text-[clamp(2rem,4vw,4.6rem)] leading-[0.92] text-foreground mb-4">
              {project.name}
            </h3>
            <div className="border-y border-border">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 py-3 border-b border-border">
                <p className="md:col-span-4 text-xs uppercase tracking-[0.14em] text-muted">Contractor</p>
                <p className="md:col-span-8 text-sm text-foreground">{project.contractor}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 py-3 border-b border-border">
                <p className="md:col-span-4 text-xs uppercase tracking-[0.14em] text-muted">Address</p>
                <p className="md:col-span-8 text-sm text-foreground">{project.address}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 py-3 border-b border-border">
                <p className="md:col-span-4 text-xs uppercase tracking-[0.14em] text-muted">Contract Value</p>
                <p className="md:col-span-8 text-sm text-foreground">{project.contractValue}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 py-3 border-b border-border">
                <p className="md:col-span-4 text-xs uppercase tracking-[0.14em] text-muted">Scope</p>
                <p className="md:col-span-8 text-sm text-foreground">{project.scope}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 py-3">
                <p className="md:col-span-4 text-xs uppercase tracking-[0.14em] text-muted">Duration</p>
                <p className="md:col-span-8 text-sm text-foreground">{project.duration}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectGrid;
