export type Project = {
  title: string;
  category: string;
  image: string;
  slug: string;
  description: string;
  status:
    | "preconstruction"
    | "permitting"
    | "mobilization"
    | "in-progress"
    | "substantial-completion"
    | "complete";
  location: {
    lat: number;
    lng: number;
    address: string;
  };
};

export const projects: Project[] = [
  {
    title: "Zachary Hotel",
    category: "Hospitality",
    image: "/markets/hospitality/projects/zachary-hotel.png",
    slug: "zachary-hotel",
    description: "Boutique hospitality project delivered with tight sequencing and premium finishes.",
    status: "complete",
    location: {
      lat: 41.8781,
      lng: -87.6298,
      address: "Chicago, IL",
    },
  },
  {
    title: "Stroger Hospital",
    category: "Healthcare",
    image: "/markets/healthcare/projects/stroger.png",
    slug: "stroger-hospital",
    description: "Hospital infrastructure upgrades executed in active care environments.",
    status: "complete",
    location: {
      lat: 41.8696,
      lng: -87.6761,
      address: "1969 W Ogden Ave, Chicago, IL 60612",
    },
  },
  {
    title: "Friend Health Woodlawn",
    category: "Healthcare",
    image: "/markets/healthcare/projects/Friend-Health.png",
    slug: "friend-health-woodlawn",
    description: "Community health facility improvements with patient-first phasing controls.",
    status: "complete",
    location: {
      lat: 41.8044,
      lng: -87.5887,
      address: "Chicago, IL",
    },
  },
  {
    title: "Raintree Hall",
    category: "Education",
    image: "/markets/education/projects/raintree.png",
    slug: "raintree-hall",
    description: "Academic facilities modernization with campus stakeholder coordination.",
    status: "complete",
    location: {
      lat: 41.7867,
      lng: -87.6210,
      address: "Chicago, IL",
    },
  },
  {
    title: "CPS Offices",
    category: "Education",
    image: "/markets/education/projects/CPS-Near-West-Offices-1.jpg",
    slug: "cps-offices",
    description: "Public education administration offices delivered under active occupancy constraints.",
    status: "complete",
    location: {
      lat: 41.8783,
      lng: -87.6289,
      address: "Chicago, IL",
    },
  },
  {
    title: "Foglia Residences",
    category: "Residential",
    image: "/markets/affordable-housing/foglia-residences.jpg",
    slug: "foglia-residences",
    description: "Affordable housing project built with structured inspection and closeout discipline.",
    status: "complete",
    location: {
      lat: 41.8910,
      lng: -87.6180,
      address: "Chicago, IL",
    },
  },
  {
    title: "Westhaven Park",
    category: "Hospitality",
    image: "/markets/affordable-housing/westhaven-park.jpg",
    slug: "westhaven-park",
    description: "Mixed-use community development with coordinated delivery across multiple scopes.",
    status: "complete",
    location: {
      lat: 41.7521,
      lng: -87.6555,
      address: "Chicago, IL",
    },
  },
  {
    title: "JTDC Bathroom Renovations",
    category: "Education",
    image: "/images/from-the-field/ccjc.jpg",
    slug: "jtdc-bathroom-renovations",
    description: "Phased restroom renovation work coordinated to maintain day-to-day facility operations.",
    status: "in-progress",
    location: {
      lat: 41.8783,
      lng: -87.6289,
      address: "Chicago, IL",
    },
  },
  {
    title: "CCAB 1st Floor Toilet",
    category: "Municipal",
    image: "/images/from-the-field/cook-county-courthouse.jpg",
    slug: "ccab-1st-floor-toilet",
    description: "First-floor toilet modernization delivered with controlled access and active-facility coordination.",
    status: "in-progress",
    location: {
      lat: 41.8866,
      lng: -87.6627,
      address: "Chicago, IL",
    },
  },
  {
    title: "Cook County Health – Buildings and Grounds Storage Trailer Site Development",
    category: "Healthcare",
    image: "/images/from-the-field/cook-county-health-building.jpg",
    slug: "cook-county-health-buildings-and-grounds-storage-trailer-site-development",
    description: "Site development for storage trailer facilities at Cook County Health buildings and grounds.",
    status: "preconstruction",
    location: {
      lat: 41.8717038,
      lng: -87.6754992,
      address: "1950 W Polk St, Chicago, IL 60612",
    },
  },
  {
    title: "Park Forest Indianwood/Blackhawk Plaza",
    category: "Municipal",
    image: "/images/from-the-field/parkforest.jpg",
    slug: "park-forest-indianwood-blackhawk-plaza",
    description: "Site development for Park Forest Indianwood/Blackhawk Plaza.",
    status: "preconstruction",
    location: {
      lat: 41.4699234,
      lng: -87.6822878,
      address: "Blackhawk Dr, Park Forest, IL 60466",
    },
  },
  {
    title: "Skokie Courthouse Project",
    category: "Municipal",
    image: "/images/from-the-field/skokie-court-house.jpg",
    slug: "skokie-courthouse-project",
    description: "Courthouse improvement project coordinated to maintain continuity in an active civic facility.",
    status: "preconstruction",
    location: {
      lat: 42.038352,
      lng: -87.750126,
      address: "5600 Old Orchard Rd, Skokie, IL 60077",
    },
  },
  {
    title: "Cafeteria Flooring & Door Replacement at Walsh School",
    category: "Education",
    image: "/markets/municipal/projects/walsh-elementary-school-lockport-il-primaryphoto.jpg",
    slug: "cafeteria-flooring-door-replacement-at-walsh-school",
    description: "Cafeteria flooring and door replacement at Walsh School.",
    status: "preconstruction",
    location: {
      lat: 41.6039758,
      lng: -88.0348505,
      address: "514 MacGregor Rd, Lockport, IL 60441",
    },
  },
];
