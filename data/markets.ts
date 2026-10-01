// TODO(client-content): Approve these short market descriptions before production.
export const markets = [
  {
    name: "Affordable Housing",
    slug: "affordable-housing",
    path: "/markets/affordable-housing",
    shortDescription: "Purpose-built homes and neighborhood redevelopment.",
    description:
      "Delivering quality housing solutions that serve Chicago's most critical need. Our expertise spans new construction, adaptive reuse, and renovation projects designed to maximize value and community impact.",
    capabilities: ["New Construction", "Adaptive Reuse", "Mixed-Use Development", "Community Engagement"],
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    path: "/markets/healthcare",
    shortDescription: "Clinical spaces shaped around safe, reliable care.",
    description:
      "Complex medical facilities require precision, safety, and coordination. We specialize in hospitals, clinics, surgical centers, and medical office buildings designed for operational excellence.",
    capabilities: ["Hospital Construction", "Surgical Centers", "Medical Offices", "Regulatory Compliance"],
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    path: "/markets/hospitality",
    shortDescription: "Guest-focused places delivered with schedule precision.",
    description:
      "Hotels, restaurants, and hospitality venues demand flawless execution and schedule precision. Our teams deliver turnkey hospitality projects from preconstruction through opening.",
    capabilities: ["Hotel Construction", "Restaurant Build-outs", "Renovation & Upgrades", "Brand Standards Compliance"],
  },
  {
    name: "Education",
    slug: "education",
    path: "/markets/education",
    shortDescription: "Learning environments built for evolving communities.",
    description:
      "Schools, universities, and educational facilities require specialized knowledge of academic environments. We deliver learning spaces that inspire and stand the test of time.",
    capabilities: ["K-12 Construction", "University Facilities", "Laboratory Spaces", "Technology-Integrated Design"],
  },
  {
    name: "Modular Housing",
    slug: "modular-housing",
    path: "/markets/modular-housing",
    shortDescription: "Efficient housing systems planned for lasting value.",
    description:
      "From mid-rise to high-rise, we deliver residential projects that balance quality, schedule, and budget. Our modular housing expertise spans new development to renovation.",
    capabilities: ["New Development", "High-Rise Construction", "Renovation Projects", "Unit Turnover Efficiency"],
  },
  {
    name: "Municipal",
    slug: "municipal",
    path: "/markets/municipal",
    shortDescription: "Public facilities made for daily civic life.",
    description:
      "Public works and municipal infrastructure require accountability, compliance, and community perspective. We serve cities and municipalities with integrity and precision.",
    capabilities: ["Public Works", "Infrastructure", "Civic Buildings", "Regulatory Compliance"],
  },
  {
    name: "Office Build-outs",
    slug: "office-buildouts",
    path: "/markets/office-buildouts",
    shortDescription: "Workplaces tailored to teams and operations.",
    description:
      "Corporate headquarters, office parks, and commercial spaces built for productivity and performance. Our office build-out projects reflect brand strength and operational excellence.",
    capabilities: ["Corporate HQ", "Office Parks", "Office Renovation", "Tenant Improvement"],
  },
  {
    name: "Senior Living",
    slug: "senior-living",
    path: "/markets/senior-living",
    shortDescription: "Supportive residential spaces built around dignity.",
    description:
      "Senior living facilities demand specialized design, safety systems, and operational planning. We build communities where seniors thrive with dignity and independence.",
    capabilities: ["Assisted Living", "Memory Care", "Independent Living", "Regulatory Expertise"],
  },
] as const;

export type Market = (typeof markets)[number];

export function getMarketBySlug(slug: string): Market | undefined {
  return markets.find((market) => market.slug === slug);
}

export function getMarketMetadata(slug: string) {
  const market = getMarketBySlug(slug);

  if (!market) {
    return {
      title: "Market Sector | Ashlaur Construction",
      description: "Explore market sectors served by Ashlaur Construction.",
    };
  }

  return {
    title: `${market.name} Construction in Chicago | Ashlaur Construction`,
    description: market.description,
  };
}

