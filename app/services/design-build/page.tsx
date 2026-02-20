import ServicePageLayout from "../ServicePageLayout";

export const metadata = {
  title: "Design-Build - Ashlaur Construction",
  description: "Design-build delivery that unifies design and construction for faster decisions and reduced risk.",
};

export default function DesignBuild() {
  const sections = [
    {
      title: "Overview",
      paragraphs: [
        "Design-build at Ashlaur brings design and construction under one accountable team, reducing handoffs and accelerating decision-making. We guide programming, design coordination, budgeting, and permitting with a single point of responsibility.",
        "This model aligns design intent with constructability early, allowing owners to control cost and schedule while the design evolves.",
      ],
    },
    {
      title: "What Is Included",
      paragraphs: [
        "Our design-build scope is structured to deliver speed without sacrificing quality or clarity.",
      ],
      bullets: [
        "Integrated design coordination and constructability reviews",
        "Budget alignment with ongoing cost model updates",
        "Permitting strategy and agency coordination",
        "Trade partner engagement and early procurement",
        "Quality control, commissioning, and closeout planning",
      ],
    },
    {
      title: "Approach / Process",
      paragraphs: [
        "We lead collaborative workshops with stakeholders to define scope, performance goals, and budget priorities. As design progresses, we continuously validate pricing and sequencing so decisions stay grounded in real constraints.",
        "Ashlaur integrates field input early to avoid redesign and compress schedules. That alignment keeps the project moving without sacrificing quality or safety.",
      ],
    },
    {
      title: "Why Choose Us",
      paragraphs: [
        "Clients value the streamlined accountability and faster timeline that design-build provides. With one team guiding both design and construction, risk is reduced and communication is simplified.",
        "The outcome is a cohesive delivery process with stronger cost certainty, fewer surprises, and a build that matches the original vision.",
      ],
    },
  ];

  return (
    <ServicePageLayout
      title="Design-Build"
      subtitle="Unified design and construction delivery that compresses timelines and strengthens cost certainty."
      sections={sections}
    />
  );
}
