import ServicePageLayout from "../ServicePageLayout";

export const metadata = {
  title: "General Contracting - Ashlaur Construction",
  description: "End-to-end general contracting led by experienced field teams, disciplined coordination, and quality-first execution.",
};

export default function GeneralContracting() {
  const sections = [
    {
      title: "Overview",
      paragraphs: [
        "Ashlaur delivers general contracting with hands-on field leadership, clear accountability, and a focus on building it right the first time. We manage the full construction phase, from procurement and mobilization to closeout and warranty, with transparent reporting throughout.",
        "Our teams coordinate trades, site logistics, and safety planning so work progresses safely, efficiently, and in the right sequence. That steady control keeps quality high and schedules dependable.",
      ],
    },
    {
      title: "What Is Included",
      paragraphs: [
        "We provide the day-to-day leadership and project controls that keep complex construction moving forward with clarity and discipline.",
      ],
      bullets: [
        "Trade partner procurement and contract administration",
        "Site logistics, safety planning, and field supervision",
        "Quality control inspections and punch list management",
        "Schedule management with weekly look-ahead planning",
        "Cost tracking, change management, and closeout support",
      ],
    },
    {
      title: "Approach / Process",
      paragraphs: [
        "We build the schedule around critical path activities and maintain weekly coordination with all trades to remove constraints early. Our project controls focus on real-time visibility, so owners know what is happening and why.",
        "Ashlaur treats quality as a daily commitment, not a final phase. By integrating QA/QC into field execution, we reduce rework and protect both timeline and budget.",
      ],
    },
    {
      title: "Why Choose Us",
      paragraphs: [
        "Clients choose Ashlaur for reliable execution, disciplined coordination, and experienced field leadership. We protect schedules with clear sequencing and keep budgets aligned through proactive cost tracking and change control.",
        "The result is a controlled construction phase that delivers durable quality, fewer surprises, and a smooth path to occupancy.",
      ],
    },
  ];

  return (
    <ServicePageLayout
      title="General Contracting"
      subtitle="Full-scope construction delivery led by experienced field teams, disciplined coordination, and quality-first execution."
      sections={sections}
    />
  );
}
