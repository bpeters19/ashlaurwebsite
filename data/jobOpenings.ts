export interface JobOpening {
  slug: string;
  title: string;
  location: string;
  type: string;
  schedule: string;
  summary: string;
  overview: string;
  responsibilities: string[];
  qualifications: string[];
  applyUrl: string;
}

const linkedinJobsUrl = "https://www.linkedin.com/company/ashlaur-construction/jobs/";

export const jobOpenings: JobOpening[] = [
  // No active openings right now. Add new roles here when available.
];