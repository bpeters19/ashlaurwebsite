export type Certification = {
  logo: string;
  name: string;
  certifyingAgency: string;
  certificateNumber: string;
  expiration: string;
  verificationUrl: string;
};

export const certifications: Certification[] = [
  {
    logo: "/images/certs/cha-logo-cert.png",
    name: "CHA Certified",
    certifyingAgency: "Chicago Housing Authority",
    certificateNumber: "TODO-CHA-CERT-NUMBER",
    expiration: "TODO-CHA-EXPIRATION",
    verificationUrl: "https://www.thecha.org/",
  },
  {
    logo: "/images/certs/cms-logo-cert.jpg",
    name: "CMS Certified",
    certifyingAgency: "Illinois Department of Central Management Services",
    certificateNumber: "TODO-CMS-CERT-NUMBER",
    expiration: "TODO-CMS-EXPIRATION",
    verificationUrl: "https://cms.illinois.gov/",
  },
  {
    logo: "/images/certs/mbe-logo-cert.png",
    name: "MBE Certified",
    certifyingAgency: "City of Chicago",
    certificateNumber: "TODO-MBE-CERT-NUMBER",
    expiration: "TODO-MBE-EXPIRATION",
    verificationUrl:
      "https://www.chicago.gov/city/en/depts/dps/provdrs/cert/svcs/minority_and_womenownedbusinessenterprisecertificationmbewbe.html",
  },
  {
    logo: "/images/certs/dbe-logo-cert.png",
    name: "DBE Certified",
    certifyingAgency: "U.S. Department of Transportation",
    certificateNumber: "TODO-DBE-CERT-NUMBER",
    expiration: "TODO-DBE-EXPIRATION",
    verificationUrl:
      "https://www.chicago.gov/city/en/depts/dps/provdrs/cert/svcs/airport_concessionsdisadvantagedbusinessenterpriseacdbeordisadva.html",
  },
  {
    logo: "/images/certs/cdot-logo-cert.png",
    name: "CDOT Approved",
    certifyingAgency: "Chicago Department of Transportation",
    certificateNumber: "TODO-CDOT-CERT-NUMBER",
    expiration: "TODO-CDOT-EXPIRATION",
    verificationUrl: "https://www.chicago.gov/city/en/depts/cdot.html",
  },
];

// TODO(client-content): Replace placeholder certificate numbers, expirations, and verification URLs with official records.
