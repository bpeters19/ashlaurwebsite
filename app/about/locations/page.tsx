import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Locations - Ashlaur Construction",
  description: "Ashlaur's regional presence and service areas across the Midwest.",
};

export default function Locations() {
  const locations = [
    {
      type: "Headquarters",
      city: "Chicago",
      state: "Illinois",
      description: "Our home base. Where vision meets execution. 20+ years of Chicago construction excellence.",
      services: ["Full-service construction", "Project management", "Preconstruction"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-6 text-white">
              <p className="text-sm font-semibold tracking-wide text-blue-400">PRESENCE</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                Our Locations
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                Serving Chicago and beyond with construction excellence rooted in accountability and partnership.
              </p>
            </div>
          </div>
        </section>

        {/* Headquarters */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Headquarters
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-black text-gray-900 mb-4">Calumet City, Illinois</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-3">
                    1595 Valencia Ct, Calumet City, IL 60409-5410, United States
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Our headquarters sits in the heart of Chicago's construction ecosystem. For over two decades, we've served as a trusted partner to Chicago's leading general contractors and owners.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Services Available</p>
                  <ul className="space-y-2">
                    {["Full-Service Construction", "Project Management", "Preconstruction Services", "Self-Perform Work"].map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold mt-1">✓</span>
                        <span className="text-gray-600">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=1595%20Valencia%20Ct%2C%20Calumet%20City%2C%20IL%2060409-5410%2C%20United%20States"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-gray-100 rounded-lg h-80 overflow-hidden border border-gray-200"
                aria-label="Open map for 1595 Valencia Ct, Calumet City, IL"
              >
                <iframe
                  title="Calumet City Headquarters Map"
                  src="https://maps.google.com/maps?q=1595%20Valencia%20Ct%2C%20Calumet%20City%2C%20IL%2060409-5410%2C%20United%20States&z=15&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full bg-black/10" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900">
              Reach Out to Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Located in Chicago. Serving the Midwest. Ready to discuss your next project.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
