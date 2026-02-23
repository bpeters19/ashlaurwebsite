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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {projects.map((project) => (
        <div key={project.name} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="relative w-full" style={{ aspectRatio: "5 / 3" }}>
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100%, (max-width: 1024px) 50%, 33%"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white opacity-0 translate-y-3 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
              <h3 className="text-xl font-bold mb-3">{project.name}</h3>
              <div className="space-y-2 text-sm text-white/85 leading-tight">
                <p>
                  <span className="font-semibold text-white">General Contractor:</span> {project.contractor}
                </p>
                <p>
                  <span className="font-semibold text-white">Address:</span> {project.address}
                </p>
                <p>
                  <span className="font-semibold text-white">Contract Value:</span> {project.contractValue}
                </p>
                <p>
                  <span className="font-semibold text-white">Scope:</span> {project.scope}
                </p>
                <p>
                  <span className="font-semibold text-white">Duration:</span> {project.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
