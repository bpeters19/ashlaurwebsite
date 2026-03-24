export type ProjectStatus =
  | "preconstruction"
  | "permitting"
  | "mobilization"
  | "in-progress"
  | "substantial-completion"
  | "complete";

export type ProjectLocation = {
  lat: number;
  lng: number;
  address: string;
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  mainImage: string;
  galleryImages: string[];
  description: string;
  location?: ProjectLocation;
  scope?: string;
  status: ProjectStatus;
};

const COMING_SOON_IMAGE = "/images/projects/coming-soon.svg";

const buildGallery = (mainImage: string) => [mainImage, COMING_SOON_IMAGE];

export const projects: Project[] = [
  {
    title: "Zachary Hotel",
    slug: "zachary-hotel",
    category: "Hospitality",
    mainImage: "/markets/hospitality/projects/zachary-hotel.png",
    galleryImages: buildGallery("/markets/hospitality/projects/zachary-hotel.png"),
    description:
      "Boutique hospitality work delivered with tight sequencing, polished finishes, and active-operations coordination across guest-facing areas.",
    scope: "Interior renovation, finish coordination, and phased hospitality upgrades.",
    status: "complete",
    location: {
      lat: 41.8781,
      lng: -87.6298,
      address: "Chicago, IL",
    },
  },
  {
    title: "Stroger Hospital",
    slug: "stroger-hospital",
    category: "Healthcare",
    mainImage: "/markets/healthcare/projects/stroger.png",
    galleryImages: buildGallery("/markets/healthcare/projects/stroger.png"),
    description:
      "Hospital infrastructure and door upgrades executed in active care environments with strict infection-control and patient-flow planning.",
    scope: "Healthcare infrastructure improvements, door replacements, and phased facility work.",
    status: "complete",
    location: {
      lat: 41.8696,
      lng: -87.6761,
      address: "1969 W Ogden Ave, Chicago, IL 60612",
    },
  },
  {
    title: "Friend Health Woodlawn",
    slug: "friend-health-woodlawn",
    category: "Healthcare",
    mainImage: "/markets/healthcare/projects/Friend-Health.png",
    galleryImages: buildGallery("/markets/healthcare/projects/Friend-Health.png"),
    description:
      "Community health facility improvements organized around patient-first phasing, durable finishes, and uninterrupted daily operations.",
    scope: "Clinical space improvements, finish upgrades, and operational phasing.",
    status: "complete",
    location: {
      lat: 41.8044,
      lng: -87.5887,
      address: "Chicago, IL",
    },
  },
  {
    title: "Raintree Hall",
    slug: "raintree-hall",
    category: "Education",
    mainImage: "/markets/education/projects/raintree.png",
    galleryImages: buildGallery("/markets/education/projects/raintree.png"),
    description:
      "Academic facilities modernization delivered with campus stakeholder coordination, controlled access planning, and finish quality oversight.",
    scope: "Campus modernization, interior upgrades, and stakeholder coordination.",
    status: "complete",
    location: {
      lat: 41.7867,
      lng: -87.621,
      address: "Chicago, IL",
    },
  },
  {
    title: "CPS Near West Offices",
    slug: "cps-near-west-offices",
    category: "Education",
    mainImage: "/markets/education/projects/CPS-Near-West-Offices-1.jpg",
    galleryImages: buildGallery("/markets/education/projects/CPS-Near-West-Offices-1.jpg"),
    description:
      "Public education administration offices delivered under active occupancy constraints with disciplined sequencing and turnover planning.",
    scope: "Office renovation, occupied-space coordination, and closeout sequencing.",
    status: "complete",
    location: {
      lat: 41.8783,
      lng: -87.6289,
      address: "Chicago, IL",
    },
  },
  {
    title: "Foglia Residences",
    slug: "foglia-residences",
    category: "Residential",
    mainImage: "/markets/affordable-housing/foglia-residences.jpg",
    galleryImages: buildGallery("/markets/affordable-housing/foglia-residences.jpg"),
    description:
      "Affordable housing delivered with structured inspection milestones, resident-safety planning, and disciplined closeout management.",
    scope: "Residential construction, building envelope coordination, and turnover execution.",
    status: "complete",
    location: {
      lat: 41.891,
      lng: -87.618,
      address: "Chicago, IL",
    },
  },
  {
    title: "Westhaven Park",
    slug: "westhaven-park",
    category: "Residential",
    mainImage: "/markets/affordable-housing/westhaven-park.jpg",
    galleryImages: buildGallery("/markets/affordable-housing/westhaven-park.jpg"),
    description:
      "Mixed-use community development coordinated across multiple scopes, inspection checkpoints, and neighborhood access requirements.",
    scope: "Mixed-use residential development and multi-scope field coordination.",
    status: "complete",
    location: {
      lat: 41.7521,
      lng: -87.6555,
      address: "Chicago, IL",
    },
  },
  {
    title: "JTDC Bathroom Renovations",
    slug: "jtdc-bathroom-renovations",
    category: "Education",
    mainImage: "/images/from-the-field/ccjc.jpg",
    galleryImages: buildGallery("/images/from-the-field/ccjc.jpg"),
    description:
      "Phased restroom renovation work coordinated to maintain day-to-day facility operations while improving durability and code compliance.",
    scope: "Restroom renovations, finish replacement, and phased occupied-facility work.",
    status: "in-progress",
    location: {
      lat: 41.8783,
      lng: -87.6289,
      address: "Chicago, IL",
    },
  },
  {
    title: "CCAB 1st Floor Toilet",
    slug: "ccab-1st-floor-toilet",
    category: "Municipal",
    mainImage: "/images/from-the-field/cook-county-courthouse.jpg",
    galleryImages: buildGallery("/images/from-the-field/cook-county-courthouse.jpg"),
    description:
      "First-floor toilet modernization delivered with controlled access, active-facility coordination, and precise turnover scheduling.",
    scope: "Civic facility renovation, interior upgrades, and constrained-access sequencing.",
    status: "in-progress",
    location: {
      lat: 41.8866,
      lng: -87.6627,
      address: "Chicago, IL",
    },
  },
  {
    title: "Cook County Health Storage Trailer Site Development",
    slug: "cook-county-health-storage-trailer-site",
    category: "Healthcare",
    mainImage: "/images/from-the-field/cook-county-health-building.jpg",
    galleryImages: buildGallery("/images/from-the-field/cook-county-health-building.jpg"),
    description:
      "Site development for support facilities at Cook County Health, planned around access logistics, durable civil work, and active-campus coordination.",
    scope: "Site development, utility coordination, and support-facility installation.",
    status: "preconstruction",
    location: {
      lat: 41.8717038,
      lng: -87.6754992,
      address: "1950 W Polk St, Chicago, IL 60612",
    },
  },
  {
    title: "Park Forest Blackhawk Plaza",
    slug: "park-forest-blackhawk-plaza",
    category: "Municipal",
    mainImage: "/images/from-the-field/parkforest.jpg",
    galleryImages: buildGallery("/images/from-the-field/parkforest.jpg"),
    description:
      "Site development for a civic plaza with utility planning, concrete sequencing, and field coordination across public-facing areas.",
    scope: "Site development, hardscape work, and public-realm coordination.",
    status: "preconstruction",
    location: {
      lat: 41.4699234,
      lng: -87.6822878,
      address: "Blackhawk Dr, Park Forest, IL 60466",
    },
  },
  {
    title: "Skokie Courthouse",
    slug: "skokie-courthouse",
    category: "Municipal",
    mainImage: "/images/from-the-field/skokie-court-house.jpg",
    galleryImages: buildGallery("/images/from-the-field/skokie-court-house.jpg"),
    description:
      "Courthouse improvement work coordinated to maintain continuity in an active civic facility with secure-access requirements.",
    scope: "Civic building upgrades, secure-access coordination, and phased construction planning.",
    status: "preconstruction",
    location: {
      lat: 42.038352,
      lng: -87.750126,
      address: "5600 Old Orchard Rd, Skokie, IL 60077",
    },
  },
  {
    title: "Walsh School Cafeteria Flooring",
    slug: "walsh-school-flooring",
    category: "Education",
    mainImage: "/markets/municipal/projects/walsh-elementary-school-lockport-il-primaryphoto.jpg",
    galleryImages: buildGallery("/markets/municipal/projects/walsh-elementary-school-lockport-il-primaryphoto.jpg"),
    description:
      "Full cafeteria flooring replacement and door upgrades delivered with school-calendar coordination and durable finish selection.",
    scope: "Flooring replacement, door upgrades, and school operations coordination.",
    status: "preconstruction",
    location: {
      lat: 41.6039758,
      lng: -88.0348505,
      address: "514 MacGregor Rd, Lockport, IL 60441",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
