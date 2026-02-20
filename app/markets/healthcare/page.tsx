import ProjectGrid from "./ProjectGrid";
import { healthcareProjects } from "./projects/data";
import MarketHero from "../MarketHero";

export default function Healthcare() {
  return (
    <>
      <MarketHero
        title="Healthcare"
        subtitle="Precision Construction for Critical Environments."
        backgroundImage="/markets/healthcare/hero.jpg"
      />

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-6">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wide text-blue-500">PROJECTS</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Featured Healthcare</h2>
            </div>
          </div>

          <ProjectGrid projects={healthcareProjects} />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Project Focus</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>Outpatient Clinics</li>
              <li>Medical Office Buildings</li>
              <li>Renovations in Active Facilities</li>
              <li>Infection Control &amp; Phasing</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Capabilities</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>ICRA compliance</li>
              <li>Specialized MEP coordination</li>
              <li>Regulatory standards</li>
              <li>Minimal disruption planning</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
