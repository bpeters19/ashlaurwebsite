import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About AshLaur - Building Tomorrow, Today",
  description: "Learn about AshLaur's commitment to precision, power, and performance in modern construction.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.78) 100%), url('/images/about/about-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
          <header className="space-y-4">
            <p className="text-sm font-semibold tracking-wide text-blue-400">Who we are</p>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary">About AshLaur</h1>
            <div className="space-y-4 text-lg text-white/85 max-w-3xl">
              <p>
                Ashlaur is a construction and development firm built on precision, accountability, and long-term partnerships. We specialize in delivering complex projects with clarity—from early planning through final closeout—while maintaining a relentless focus on quality, safety, and schedule.
              </p>
              <p>
                Our team brings together hands-on field experience and disciplined project management to ensure every detail is coordinated, every stakeholder is aligned, and every project is executed with purpose. We believe successful construction is not just about building structures, but about building trust.
              </p>
              <p>
                Ashlaur works collaboratively with owners, architects, engineers, and trade partners to anticipate challenges early, streamline decision-making, and deliver solutions that add real value. Whether managing tight schedules, navigating occupied spaces, or coordinating multiple trades, we approach each project with the same level of care and commitment.
              </p>
              <p>
                At our core, Ashlaur is driven by integrity, transparency, and results. We take pride in being a reliable partner—one that communicates clearly, stands behind its work, and consistently deliver results.
              </p>
            </div>
          </header>

          <section className="grid gap-8 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg space-y-3">
              <h2 className="text-2xl font-semibold text-secondary">What we do</h2>
              <p className="text-white/80">
                From preconstruction to handover, we manage the full lifecycle of complex builds. Our teams
                handle site planning, structural work, MEP coordination, and interior delivery with a focus on
                predictable schedules and cost control.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg space-y-3">
              <h2 className="text-2xl font-semibold text-secondary">How we work</h2>
              <p className="text-white/80">
                We pair seasoned superintendents with digital tools for real-time coordination. Transparent
                reporting keeps owners informed, while proactive risk management keeps crews safe and the
                job moving.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg space-y-3">
              <h2 className="text-2xl font-semibold text-secondary">Where we focus</h2>
              <p className="text-white/80">
                Core sectors include manufacturing facilities, logistics hubs, tenant improvements, education,
                and public works. Each project team is tailored to the site, code environment, and delivery
                timeline.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg space-y-3">
              <h3 className="text-xl font-semibold text-secondary">Why partners choose us</h3>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Field-first leadership that keeps quality and safety non-negotiable.</li>
                <li>Lean planning to compress schedules without compromising workmanship.</li>
                <li>Vendor and subcontractor network vetted for consistency and accountability.</li>
                <li>Clear communication with owners, architects, and inspectors at every milestone.</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg space-y-3">
              <h3 className="text-xl font-semibold text-secondary">Highlights</h3>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Design-assist and value engineering to de-risk early decisions.</li>
                <li>Self-perform capabilities for critical path trades when schedules demand it.</li>
                <li>Commissioning support to ensure systems start cleanly and handoffs are smooth.</li>
                <li>Warranty follow-through and post-occupancy check-ins to keep spaces performing.</li>
              </ul>
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-secondary text-white shadow-lg">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">Ready to build?</h3>
              <p className="max-w-3xl text-white/90">
                Tell us about your site, schedule, and goals. We will assemble the right team and plan to bring
                your project online with precision.
              </p>
              <div className="inline-flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="px-5 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md transition-transform hover:-translate-y-0.5"
                >
                  Talk with our team
                </a>
                <a
                  href="/services"
                  className="px-5 py-3 border border-white/60 font-semibold rounded-full transition-colors hover:bg-white hover:text-secondary"
                >
                  See our services
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}