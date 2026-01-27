import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Leadership - AshLaur Construction",
  description: "Meet the experienced team leading AshLaur's commitment to excellence in construction and development.",
};

export default function Leadership() {
  const leaders = [
    {
      name: "Zollie Carridine",
      title: "Chief Executive Officer",
      bio: "Zollie leads AshLaur's strategic vision and client relationships. His extensive experience in construction management drives the company's commitment to excellence and innovation in project delivery.",
      image: "/images/team/Artboard-1%20zollie.png",
    },
    {
      name: "Roosevelt McGee",
      title: "Chief Financial Officer",
      bio: "Roosevelt oversees all financial operations, strategic planning, and fiscal management. His leadership ensures sound financial practices and sustainable growth across all company initiatives.",
      image: "/images/team/LM18386-scaled%20roosevelt.jpg",
    },
    {
      name: "Matt McGill",
      title: "Director of Business Development",
      bio: "Matt cultivates partnerships with owners, architects, and developers. His industry relationships and market knowledge help position AshLaur for strategic opportunities and long-term growth.",
      image: "/images/team/Artboard-2%20matt.png",
    },
    {
      name: "Mohit Rajwade",
      title: "Estimator",
      bio: "Mohit leads cost analysis, value engineering, and preconstruction planning. His technical expertise enables precise forecasting and constructability reviews that keep projects on budget.",
      image: "/images/team/Artboard-3%20mohit.png",
    },
    {
      name: "Richard Courtney",
      title: "Project Manager",
      bio: "Richard oversees project execution from planning through closeout. His attention to detail and proactive coordination ensure quality standards, schedule commitments, and client satisfaction.",
      image: "/images/team/Artboard-4%20rich.png",
    },
    {
      name: "Rob Leeds",
      title: "Program Director",
      bio: "Rob manages multi-project programs and strategic initiatives. His leadership coordinates complex portfolios, aligns stakeholder objectives, and delivers results across concurrent projects.",
      image: "https://picsum.photos/seed/rob-leeds/400/400",
    },
  ];

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
          <header className="space-y-4 max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-blue-400">Our Team</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Leadership</h1>
            <p className="text-lg text-white/85">
              AshLaur is guided by a leadership team with decades of combined experience in construction management, 
              project delivery, and client service. Our leaders bring technical expertise, operational discipline, 
              and a shared commitment to building lasting partnerships.
            </p>
          </header>

          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 space-y-4"
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-secondary">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                  <p className="text-blue-400 font-semibold">{leader.title}</p>
                  <p className="text-white/75 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="p-8 rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-secondary text-white shadow-lg">
            <div className="space-y-3 max-w-3xl">
              <h3 className="text-2xl font-semibold">Join our team</h3>
              <p className="text-white/90">
                We're always looking for talented professionals who share our commitment to quality, 
                safety, and client service. Explore career opportunities at AshLaur.
              </p>
              <div className="inline-flex flex-wrap gap-3 pt-2">
                <a
                  href="/about#careers"
                  className="px-5 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md transition-transform hover:-translate-y-0.5"
                >
                  View open positions
                </a>
                <a
                  href="/contact"
                  className="px-5 py-3 border border-white/60 font-semibold rounded-full transition-colors hover:bg-white hover:text-secondary"
                >
                  Contact us
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
