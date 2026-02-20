import ServicePageLayout from "../ServicePageLayout";

export const metadata = {
  title: "Architect Services - Ashlaur Construction",
  description: "Architect services that strengthen documentation, coordination, and buildability for complex projects.",
};

export default function ArchitectServices() {
  const sections = [
    {
      title: "Overview",
      paragraphs: [
        "Ashlaur supports architects with technical and delivery-focused services that improve documentation and reduce construction friction. We help align design intent with field realities so projects move from concept to construction with clarity.",
        "Our team works alongside designers and consultants to strengthen coordination, simplify decision-making, and keep scope aligned with budget and schedule.",
      ],
    },
    {
      title: "What Is Included",
      paragraphs: [
        "We provide targeted support that makes documents build-ready and reduces downstream RFIs and change orders.",
      ],
      bullets: [
        "Design development support and technical detailing",
        "Scope alignment and specification coordination",
        "Multidiscipline clash resolution and drawing review",
        "Budget and schedule validation against design updates",
        "Field feedback loops to improve constructability",
      ],
    },
    {
      title: "Approach / Process",
      paragraphs: [
        "We engage early to identify coordination gaps, clarify system interfaces, and confirm constructability before documents go out to bid. Our reviews focus on the details that most often cause delays or cost escalation in the field.",
        "Ashlaur emphasizes clear communication, predictable documentation cycles, and rapid issue resolution. This keeps design teams focused while reducing risk for owners.",
      ],
    },
    {
      title: "Why Choose Us",
      paragraphs: [
        "Architects and owners benefit from a partner who understands both design intent and construction execution. We help eliminate ambiguity, protect budgets, and build in realistic scheduling from the start.",
        "The result is smoother permitting, fewer construction conflicts, and a finished product that reflects the original vision.",
      ],
    },
  ];

  return (
    <ServicePageLayout
      title="Architect Services"
      subtitle="Technical coordination and design support that strengthen documentation and buildability."
      sections={sections}
    />
  );
}
