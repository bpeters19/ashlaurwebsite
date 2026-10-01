import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SHOW_PLACEHOLDER_CONTENT } from "@/data/siteConfig";

export const metadata = {
  title: "Policies - Ashlaur Construction",
  description: "Policies and guidelines for Ashlaur Construction.",
};

const policySections = [
  {
    title: "Policy Introduction",
    description:
      "Replace this placeholder with your opening summary, overview statement, or policy purpose. This area is intended for a concise introduction to the page.",
    points: [
      "Add the primary policy purpose here.",
      "Summarize who the policy applies to.",
      "Include any effective date or version information.",
    ],
  },
  {
    title: "Detailed Policy Terms",
    description:
      "Use this section for the main long-form policy text. It is structured to support readable paragraphs, headings, and lists for easy replacement.",
    points: [
      "Replace with the detailed terms and conditions.",
      "Add subsections as needed for clarity.",
      "Include links to related pages or documents if required.",
    ],
  },
  {
    title: "Questions and Contact",
    description:
      "Finish the page with your contact guidance, support process, or escalation details so visitors know how to get help.",
    points: [
      "Add the preferred contact method.",
      "Include response expectations if needed.",
      "Link to the contact page or other resources.",
    ],
  },
];

export default function PoliciesPage() {
  if (!SHOW_PLACEHOLDER_CONTENT) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-[var(--header-h)]">
          <section className="py-28 md:py-32 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl space-y-6">
                <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Policies</p>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Policies and Guidelines
                </h1>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[var(--header-h)]">
        <section className="py-28 md:py-32 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-6">
              <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Policies</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Policies and Guidelines
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
                This page is ready for your final policy content. The layout mirrors the rest of the site and is designed for long-form text, structured sections, and straightforward updates.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Replace This Content</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Paste your policy copy into the sections on the right. Each block is intentionally simple so you can replace the placeholder text without changing the layout.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-8">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                  <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3">Paste Content Here</p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Start here with your primary policy language. This opening block is the best place for the main introduction, purpose statement, or a summary of the policy scope.
                  </p>
                </div>

                <div className="space-y-8">
                  {policySections.map((section) => (
                    <article key={section.title} className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{section.description}</p>
                      <ul className="space-y-3 pl-5 text-gray-700 list-disc">
                        {section.points.map((point) => (
                          <li key={point} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 md:p-10 lg:p-12">
              <div className="max-w-3xl space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold">Need to Add More Policy Detail?</h2>
                <p className="text-white/85 text-lg leading-relaxed">
                  You can expand this page with additional subsections, linked references, or compliance language while keeping the same visual structure and responsive behavior.
                </p>
                <p className="text-white/85 text-base leading-relaxed">
                  Paste additional content above, below, or inside the placeholder cards depending on how you want to organize the final document.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}