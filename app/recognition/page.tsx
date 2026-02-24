import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Recognition & Partners - AshLaur",
  description: "AshLaur's certifications, accreditations, and trusted industry partners.",
};

export default function Recognition() {
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
          {/* Header */}
          <header className="space-y-4 text-center">
            <p className="text-sm font-semibold tracking-wide text-blue-400">Credentials & Partnerships</p>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary">Recognition & Partners</h1>
            <p className="text-lg text-white/85 max-w-3xl mx-auto">
              AshLaur is proud to hold industry-leading certifications and work alongside trusted partners who share our commitment to excellence.
            </p>
          </header>

          {/* Awards Section */}
          <section id="awards" className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-secondary">Awards & Recognition</h2>
              <p className="text-white/85 max-w-4xl">
                Our dedication to excellence has been recognized through numerous awards and accolades from industry organizations and clients.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Safety Excellence Award</h3>
                    <p className="text-sm text-blue-300">2025</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  Recognized for outstanding safety performance and commitment to zero-incident job sites.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Project of the Year</h3>
                    <p className="text-sm text-blue-300">2024</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  Awarded for exceptional delivery of the Westhaven Park Transit Hub project.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Diversity Leadership</h3>
                    <p className="text-sm text-blue-300">2024</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  Honored for commitment to workforce diversity and community engagement initiatives.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Innovation Award</h3>
                    <p className="text-sm text-blue-300">2023</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  Recognized for innovative construction methods and technology integration.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Client Satisfaction</h3>
                    <p className="text-sm text-blue-300">2023</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  Awarded for consistently exceeding client expectations and maintaining 98% satisfaction rate.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Community Impact</h3>
                    <p className="text-sm text-blue-300">2022</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  Honored for contributions to local community development and infrastructure improvements.
                </p>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-secondary">Certifications & Accreditations</h2>
              <p className="text-white/85 max-w-4xl">
                Our certifications demonstrate our commitment to excellence, diversity, and compliance with industry standards. These credentials enable us to serve a wide range of clients and projects across multiple sectors.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/images/certs/CHA+logo%20cert.png" alt="CHA Logo" className="w-full h-full object-contain p-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">CHA Certified</h3>
                    <p className="text-sm text-blue-300">Chicago Housing Authority</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  Certified to work on projects with the Chicago Housing Authority, serving public housing initiatives across the city.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/images/certs/CMS+logo%20cert.jpg" alt="CMS Logo" className="w-full h-full object-contain p-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">CMS Certified</h3>
                    <p className="text-sm text-blue-300">Central Management Services</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  State of Illinois certification enabling participation in state-funded construction and development projects.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/images/certs/MBE+logo%20cert.png" alt="MBE Logo" className="w-full h-full object-contain p-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">MBE Certified</h3>
                    <p className="text-sm text-blue-300">Minority Business Enterprise</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  Recognized as a certified Minority Business Enterprise, supporting diversity and inclusion in construction contracting.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/images/certs/DBE+logo%20cert.png" alt="DBE Logo" className="w-full h-full object-contain p-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">DBE Certified</h3>
                    <p className="text-sm text-blue-300">Disadvantaged Business Enterprise</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  U.S. Department of Transportation DBE certification for federally-funded transportation and infrastructure projects.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/images/certs/CDOT-Logo%20cert.png" alt="CDOT Logo" className="w-full h-full object-contain p-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">CDOT Approved</h3>
                    <p className="text-sm text-blue-300">Chicago Department of Transportation</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  Approved contractor for Chicago Department of Transportation projects, including roadway, bridge, and infrastructure work.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md space-y-4 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Additional Credentials</h3>
                    <p className="text-sm text-blue-300">Industry Compliance</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm">
                  Fully licensed, bonded, and insured with comprehensive coverage. OSHA-compliant safety programs and regular training for all field personnel.
                </p>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section id="partners" className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-secondary">Trusted Partners</h2>
              <p className="text-white/85 max-w-4xl">
                We're proud to collaborate with industry-leading organizations that share our commitment to quality, safety, and innovation.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a href="https://www.fhpaschen.com/" target="_blank" rel="noopener noreferrer" className="p-6 rounded-xl bg-white border border-white/20 shadow-md hover:shadow-lg transition-all group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-full h-24 flex items-center justify-center">
                    <img src="/images/partners/fhp/partners-02%20fhp.png" alt="FHP" className="max-w-full max-h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">FHP</h3>
                </div>
              </a>

              <div className="p-6 rounded-xl bg-white border border-white/20 shadow-md hover:shadow-lg transition-all group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-full h-24 flex items-center justify-center">
                    <img src="/images/partners/mchugh/partners-05%20mchugh.png" alt="McHugh Construction" className="max-w-full max-h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">McHugh Construction</h3>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-white/20 shadow-md hover:shadow-lg transition-all group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-full h-24 flex items-center justify-center">
                    <img src="/images/partners/mcshane/partners-01%20mcshane.png" alt="McShane Construction" className="max-w-full max-h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">McShane Construction</h3>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-white/20 shadow-md hover:shadow-lg transition-all group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-full h-24 flex items-center justify-center">
                    <img src="/images/partners/powers-sons/partners-06-1%20p%26s.png" alt="Powers & Sons Construction" className="max-w-full max-h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">Powers & Sons Construction</h3>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-white/20 shadow-md hover:shadow-lg transition-all group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-full h-24 flex items-center justify-center">
                    <img src="/images/partners/skender/partners-03%20skender.png" alt="Skender" className="max-w-full max-h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">Skender</h3>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-white/20 shadow-md hover:shadow-lg transition-all group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-full h-24 flex items-center justify-center">
                    <img src="/images/partners/weis-builders/partners-04%20weis.png" alt="Weis Builders" className="max-w-full max-h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">Weis Builders</h3>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="p-8 rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-secondary text-white shadow-lg">
            <div className="space-y-3 text-center">
              <h3 className="text-2xl font-semibold">Partner with AshLaur</h3>
              <p className="max-w-3xl mx-auto text-white/90">
                Interested in learning more about our certifications or exploring partnership opportunities? Let's connect.
              </p>
              <div className="inline-flex flex-wrap gap-3 justify-center">
                <a
                  href="/contact"
                  className="px-5 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md transition-transform hover:-translate-y-0.5"
                >
                  Get in Touch
                </a>
                <a
                  href="/about"
                  className="px-5 py-3 border border-white/60 font-semibold rounded-full transition-colors hover:bg-white hover:text-secondary"
                >
                  Learn More About Us
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
