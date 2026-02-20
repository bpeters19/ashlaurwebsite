import ProjectGrid from "./ProjectGrid";
import { affordableHousingProjects } from "./projects/data";
import MarketHero from "../MarketHero";

export default function AffordableHousing() {
  return (
    <>
      <MarketHero
        title="Affordable Housing"
        subtitle="Building Communities That Last."
        backgroundImage="/markets/affordable-housing/hero.jpg"
      />

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-6">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wide text-blue-500">PROJECTS</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Featured Affordable Housing</h2>
            </div>
          </div>

          <ProjectGrid projects={affordableHousingProjects} />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Project Focus</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>Public &amp; Private Developments</li>
              <li>LIHTC &amp; Subsidized Housing</li>
              <li>Phased Construction</li>
              <li>Urban Infill Projects</li>
              <li>Occupied Renovations</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Capabilities</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>Budget control</li>
              <li>Compliance management</li>
              <li>Stakeholder coordination</li>
              <li>Schedule acceleration</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
