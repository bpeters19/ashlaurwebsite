import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy practices for Ashlaur Construction website visitors and form submissions.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content" className="pt-20">
        <section className="py-20 lg:py-28 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
            <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Privacy</p>
            <h1 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900">
              Privacy Notice
            </h1>
            <p className="text-lg text-gray-700">
              We respect your privacy and use collected information to respond to inquiries, deliver services,
              and improve site performance.
            </p>
            <p className="text-sm text-gray-500">
              TODO(legal-review): Replace this page with legal-approved privacy policy language, retention periods,
              cookie disclosures, and jurisdiction-specific notices.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8 text-gray-700">
            <article>
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              <p className="mt-3">Contact details, project information, and files you submit through forms.</p>
            </article>
            <article>
              <h2 className="text-2xl font-bold text-gray-900">How We Use Information</h2>
              <p className="mt-3">To respond to requests, evaluate bid opportunities, and communicate project updates.</p>
            </article>
            <article>
              <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
              <p className="mt-3">We use privacy-friendly analytics configured without invasive tracking cookies.</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
