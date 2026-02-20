import ProjectGrid from "./ProjectGrid";
import { modularHousingProjects } from "./projects/data";
import MarketHero from "../MarketHero";

export default function ModularHousing() {
  return (
    <>
      <MarketHero
        title="Modular Housing"
        subtitle="Precision-built homes delivered faster."
        backgroundImage="/markets/modular-housing/hero.jpg"
      />

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-6">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wide text-blue-500">PROJECTS</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Featured Modular Housing</h2>
            </div>
          </div>

          <ProjectGrid projects={modularHousingProjects} />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Project Focus</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>Volumetric modular assembly</li>
              <li>Unit stacking logistics</li>
              <li>Envelope integration</li>
              <li>Offsite-to-onsite coordination</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Capabilities</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>Schedule acceleration</li>
              <li>Quality control sequencing</li>
              <li>Trade stacking coordination</li>
              <li>Turnover readiness planning</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
