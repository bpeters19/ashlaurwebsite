import ServicePageLayout from "../ServicePageLayout";

export const metadata = {
  title: "Construction Management - Ashlaur Construction",
  description: "Construction management that aligns budget, schedule, and scope through proactive planning and oversight.",
};

export default function ConstructionManagement() {
  const sections = [
    {
      title: "Overview",
      paragraphs: [
        "Ashlaur provides construction management that balances planning with decisive action in the field. We guide projects from preconstruction into delivery with clear scope alignment, realistic scheduling, and disciplined budget control.",
        "Our team keeps stakeholders informed and trade partners aligned, allowing owners to make confident decisions without losing momentum.",
      ],
    },
    {
      title: "What Is Included",
      paragraphs: [
        "Our construction management services bring structure to complex builds, ensuring that cost, schedule, and quality remain visible and controlled.",
      ],
      bullets: [
        "Preconstruction planning, estimating, and value analysis",
        "Bid packaging, trade leveling, and procurement strategy",
        "Phasing plans, logistics coordination, and milestone tracking",
        "Budget reporting, change evaluation, and cash flow forecasting",
        "Quality oversight, safety management, and closeout planning",
      ],
    },
    {
      title: "Approach / Process",
      paragraphs: [
        "We start with a detailed preconstruction plan that establishes scope clarity, procurement timing, and realistic milestone commitments. During construction, we keep a steady cadence of coordination meetings and performance reporting.",
        "Ashlaur uses open communication and consistent documentation so teams are aligned on responsibilities, decisions, and risk management. That structure helps prevent late-stage surprises.",
      ],
    },
    {
      title: "Why Choose Us",
      paragraphs: [
        "Clients benefit from a partner who protects budget and schedule without losing sight of design intent. Our disciplined oversight keeps quality consistent and trade partners coordinated.",
        "The result is a predictable construction process, improved cost certainty, and smoother project delivery from start to finish.",
      ],
    },
  ];

  return (
    <ServicePageLayout
      title="Construction Management"
      subtitle="Planning-led oversight that aligns scope, budget, and schedule while keeping teams coordinated."
      sections={sections}
    />
  );
}
