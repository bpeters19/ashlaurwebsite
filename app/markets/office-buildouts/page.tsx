import ProjectGrid from "./ProjectGrid";
import { officeBuildoutsProjects } from "./projects/data";
import MarketHero from "../MarketHero";

export default function OfficeBuildouts() {
  return (
    <>
      <MarketHero
        title="Office Build-outs"
        subtitle="High-performance workplaces delivered with speed and precision."
        backgroundImage="/markets/office-buildouts/hero.jpg"
      />

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-6">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wide text-blue-500">PROJECTS</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Featured Office Build-outs</h2>
            </div>
          </div>

          <ProjectGrid projects={officeBuildoutsProjects} />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Project Focus</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>Tenant improvements</li>
              <li>Workplace reconfigurations</li>
              <li>Lobby and amenity upgrades</li>
              <li>MEP and IT integration</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Capabilities</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>Fast-track scheduling</li>
              <li>Luxury finish coordination</li>
              <li>Brand standards execution</li>
              <li>Occupied environment planning</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
