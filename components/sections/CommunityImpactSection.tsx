import Link from "next/link";

export default function CommunityImpactSection() {
  return (
    <section className="py-20 md:py-24 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Community</p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-gray-900">
              Building Opportunity Beyond the Jobsite
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We support neighborhoods through local hiring, mentorship, and partnerships that create long-term economic impact.
            </p>
            <p className="text-sm text-gray-500">
              TODO(client-content): Replace this section with approved community impact metrics and program details.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 md:p-10 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Community Focus Areas</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Local workforce development and apprenticeship pathways</li>
              <li>Vendor inclusion and MWBE partner growth</li>
              <li>Neighborhood partnerships tied to active projects</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
