export const companyInfo = {
  brandName: "Ashlaur",
  legalName: "Ashlaur Construction",
  address: {
    street: "509 E 75th St",
    city: "Chicago",
    state: "IL",
    postalCode: "60619",
    country: "US",
    full: "509 E 75th St, Chicago, IL 60619",
  },
  phone: "(773) 651-1900",
  email: "info@ashlaurconstruction.com",
  hours: {
    days: "Monday - Friday",
    time: "7:00 AM - 3:00 PM",
  },
  slogan: "Building Tomorrow, Today.",
} as const;

export const companyStats = [
  {
    key: "projects",
    label: "Projects Completed",
    value: 500,
    suffix: "+",
  },
  {
    key: "experience",
    label: "Years Experience",
    value: 25,
    suffix: "+",
  },
  {
    key: "cities",
    label: "Cities Served",
    value: 30,
    suffix: "+",
  },
  {
    key: "repeatClients",
    label: "Repeat Clients",
    value: 99,
    suffix: "%",
  },
] as const;
