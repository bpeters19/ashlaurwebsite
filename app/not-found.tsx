import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content" className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
            <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">404</p>
            <h1 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600">
              The page you are looking for may have moved or no longer exists.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/" className="rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800">
                Go Home
              </Link>
              <Link href="/projects" className="rounded-md border border-blue-700 px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                View Projects
              </Link>
              <Link href="/contact" className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
