import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type ServiceSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type ServicePageLayoutProps = {
  title: string;
  subtitle: string;
  sections: ServiceSection[];
};

export default function ServicePageLayout({ title, subtitle, sections }: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary">{title}</h1>
            <p className="text-lg text-muted max-w-3xl">{subtitle}</p>
          </div>
          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-2xl font-semibold text-secondary">{section.title}</h2>
                <div className="space-y-4 text-base text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
