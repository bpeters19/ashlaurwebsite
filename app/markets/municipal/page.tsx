import ProjectGrid from "./ProjectGrid";
import { municipalProjects } from "./projects/data";
import MarketHero from "../MarketHero";

export default function Municipal() {
  return (
    <>
      <MarketHero
        title="Municipal"
        subtitle="Public works delivered with integrity and precision."
        backgroundImage="/markets/municipal/hero.jpg"
      />

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-6">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wide text-blue-500">PROJECTS</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Featured Municipal</h2>
            </div>
          </div>

          <ProjectGrid projects={municipalProjects} />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Project Focus</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>Civic buildings</li>
              <li>Public works facilities</li>
              <li>Infrastructure support spaces</li>
              <li>Community service upgrades</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Capabilities</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>Regulatory compliance</li>
              <li>Stakeholder coordination</li>
              <li>Public bid execution</li>
              <li>Schedule accountability</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
