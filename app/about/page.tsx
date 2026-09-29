import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { companyStats } from "@/data/company";
import { capabilitiesStatement } from "@/data/documents";
import { SHOW_PLACEHOLDER_CONTENT } from "@/data/siteConfig";

export const metadata = {
  title: "About Ashlaur Construction",
  description: "Learn how Ashlaur Construction delivers projects with accountability, safety, and disciplined execution.",
};

export default function About() {
  const showCapabilitiesCta = SHOW_PLACEHOLDER_CONTENT || !capabilitiesStatement.isPlaceholder;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content" className="pt-20">
        <section className="relative overflow-hidden border-b border-white/20 bg-[#111214] py-28 md:py-32">
          {/* TODO(content): Replace with final approved About hero image. */}
          <Image
            src="/images/projects/invest-southwest/cover.jpg"
            alt="Ashlaur team onsite"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-6 text-white">
              <p className="section-label text-white/75">About</p>
              <h1 className="text-[clamp(2.5rem,10.5vw,4.7rem)] md:text-6xl font-bold leading-tight text-white">
                Building With Precision. Leading With Integrity.
              </h1>
              <p className="max-w-3xl text-lg text-white/85 md:text-xl">
                Ashlaur delivers complex construction projects with disciplined execution, clear accountability, and long-term partnership. We combine field expertise with operational rigor to build environments that perform for decades.
              </p>
            </div>
          </div>
        </section>

        <section id="our-story" className="py-20 md:py-24 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:gap-14 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
              </div>
              <div className="lg:col-span-8 space-y-5 text-lg text-gray-700">
                <p>
                  For over 25 years, Ashlaur has delivered construction programs across commercial, institutional, healthcare, education, and public-sector markets.
                </p>
                <p>
                  We serve clients throughout the Midwest with the capacity to execute in complex regulatory and operational environments, including occupied facilities and accelerated schedules.
                </p>
                <p>
                  Our core strengths are preconstruction discipline, field leadership, safety culture, and transparent project controls that keep teams aligned from planning through closeout.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Principles</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Safety First</h3>
                <p className="text-gray-700">Every decision starts with protecting people, sites, and operations through proactive planning and consistent standards.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Quality Without Compromise</h3>
                <p className="text-gray-700">We execute with precision and hold every trade partner accountable to the same level of workmanship.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Client Partnership</h3>
                <p className="text-gray-700">We communicate early, clearly, and consistently so owners can make informed decisions with confidence.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Accountability</h3>
                <p className="text-gray-700">We own outcomes, solve issues directly, and follow through from kickoff to final turnover.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Sets Us Apart</h2>
              <p className="text-lg text-gray-700">Our teams are built for performance in high-stakes environments where schedule, safety, and quality all matter equally.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Proactive Project Management</h3>
                <p className="text-gray-700">We identify risks early, coordinate decisively, and keep work moving with disciplined planning.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Transparent Communication</h3>
                <p className="text-gray-700">Owners and partners receive clear reporting, real status updates, and direct visibility into progress.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Self-Perform Capabilities</h3>
                <p className="text-gray-700">When critical path control is required, our teams execute key scopes with speed and consistency.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Experienced Leadership</h3>
                <p className="text-gray-700">Seasoned field and project leaders bring steady decision-making through every project phase.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 border border-gray-200">
              {companyStats.map((stat) => (
                <div key={stat.key} className="space-y-2 border-b border-r border-gray-200 p-6 text-center even:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r lg:[&:nth-child(4)]:border-r-0">
                  <p className="text-4xl md:text-5xl font-bold text-gray-900">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="text-sm md:text-base text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Let&apos;s Build Something That Lasts.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="#our-story"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold border border-primary hover:bg-secondary hover:border-secondary transition-colors"
                >
                  Our Story
                </Link>
                {showCapabilitiesCta && (
                  <a
                    href={capabilitiesStatement.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Download Capabilities Statement
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}