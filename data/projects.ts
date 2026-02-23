export type Project = {
  title: string;
  category: string;
  image: string;
  slug: string;
  description: string;
  status: "completed" | "ongoing" | "upcoming";
};

export const projects: Project[] = [
  {
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "/images/projects/corporate-hq/1.jpg",
    slug: "corporate-headquarters",
    description: "Executive office build-out with high-performance interiors and secure infrastructure.",
    status: "completed",
  },
  {
    title: "Zachary Hotel",
    category: "Hospitality",
    image: "/markets/hospitality/projects/zachary-hotel.png",
    slug: "zachary-hotel",
    description: "Boutique hospitality project delivered with tight sequencing and premium finishes.",
    status: "completed",
  },
  {
    title: "Stroger Hospital",
    category: "Healthcare",
    image: "/markets/healthcare/projects/Stroger%20Hospital%20Doors.png",
    slug: "stroger-hospital",
    description: "Hospital infrastructure upgrades executed in active care environments.",
    status: "completed",
  },
  {
    title: "Friend Health Woodlawn",
    category: "Healthcare",
    image: "/markets/healthcare/projects/Friend-Health.png",
    slug: "friend-health-woodlawn",
    description: "Community health facility improvements with patient-first phasing controls.",
    status: "completed",
  },
  {
    title: "Downtown Office",
    category: "Commercial",
    image: "/images/projects/downtown-office/1.jpg",
    slug: "downtown-office",
    description: "Modern office build with coordinated tenant improvements and schedule controls.",
    status: "ongoing",
  },
  {
    title: "Townhouse Community",
    category: "Residential",
    image: "/images/projects/townhouse-community/1.jpg",
    slug: "townhouse-community",
    description: "Residential community delivered with consistent trade sequencing and QA/QC oversight.",
    status: "completed",
  },
  {
    title: "Raintree Hall",
    category: "Education",
    image: "/markets/education/projects/raintree.png",
    slug: "raintree-hall",
    description: "Academic facilities modernization with campus stakeholder coordination.",
    status: "upcoming",
  },
  {
    title: "CPS Offices",
    category: "Education",
    image: "/markets/education/projects/CPS-Near-West-Offices-1.jpg",
    slug: "cps-offices",
    description: "Public education administration offices delivered under active occupancy constraints.",
    status: "completed",
  },
  {
    title: "Foglia Residences",
    category: "Residential",
    image: "/markets/affordable-housing/foglia-residences.jpg",
    slug: "foglia-residences",
    description: "Affordable housing project built with structured inspection and closeout discipline.",
    status: "completed",
  },
  {
    title: "Westhaven Park",
    category: "Hospitality",
    image: "/markets/affordable-housing/westhaven-park.jpg",
    slug: "westhaven-park",
    description: "Mixed-use community development with coordinated delivery across multiple scopes.",
    status: "completed",
  },
];
