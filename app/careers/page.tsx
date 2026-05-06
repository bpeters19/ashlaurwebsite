"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { jobOpenings } from "../../data/jobOpenings";

export default function CareersPage() {
  const [selectedJobSlug, setSelectedJobSlug] = useState(jobOpenings[0]?.slug ?? "");
  const selectedJob = jobOpenings.find((job) => job.slug === selectedJobSlug) ?? jobOpenings[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-white space-y-6">
            <p className="text-sm font-semibold tracking-wide text-blue-400 uppercase">Careers</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter">
              Build With Ashlaur
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl">
              Explore current openings, review the role details, and apply through LinkedIn where our live job postings are managed.
            </p>
            <a
              href="https://www.linkedin.com/company/ashlaur-construction/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              View All Jobs On LinkedIn
            </a>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {jobOpenings.length === 0 && (
              <div className="rounded-3xl border border-blue-100 bg-white p-10 text-center shadow-lg">
                <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Careers Update</p>
                <h2 className="mt-3 text-4xl sm:text-5xl font-black leading-[0.95] tracking-tighter text-gray-900">
                  Opportunities Coming Soon
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                  We do not have any open positions right now. Follow us on LinkedIn to be the first to know when new roles are posted.
                </p>
                <a
                  href="https://www.linkedin.com/company/ashlaur-construction/jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
                >
                  Follow Openings On LinkedIn
                </a>
              </div>
            )}

            {jobOpenings.length > 0 && (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.35fr]">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Open Roles</p>
                  <h2 className="text-4xl sm:text-5xl font-black leading-[0.95] tracking-tighter text-gray-900">
                    Current Opportunities
                  </h2>
                  <p className="text-lg text-gray-600">
                    Select a role to review the description, responsibilities, and qualifications before applying on LinkedIn.
                  </p>
                </div>

                <div className="space-y-4">
                  {jobOpenings.map((job) => {
                    const isActive = job.slug === selectedJob?.slug;

                    return (
                      <button
                        key={job.slug}
                        type="button"
                        onClick={() => setSelectedJobSlug(job.slug)}
                        className={`w-full rounded-2xl border p-6 text-left transition ${
                          isActive
                            ? "border-blue-700 bg-blue-700 text-white shadow-lg"
                            : "border-gray-200 bg-white text-gray-900 hover:border-blue-300 hover:shadow-md"
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
                          <span className={isActive ? "text-blue-100" : "text-blue-700"}>{job.location}</span>
                          <span className={isActive ? "text-white/60" : "text-gray-400"}>•</span>
                          <span className={isActive ? "text-blue-100" : "text-gray-600"}>{job.type}</span>
                          <span className={isActive ? "text-white/60" : "text-gray-400"}>•</span>
                          <span className={isActive ? "text-blue-100" : "text-gray-600"}>{job.schedule}</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-bold">{job.title}</h3>
                        <p className={`mt-3 text-sm leading-relaxed ${isActive ? "text-blue-50" : "text-gray-600"}`}>
                          {job.summary}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedJob && (
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg sm:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-6 border-b border-gray-200 pb-8">
                    <div className="space-y-4">
                      <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">Role Details</p>
                      <h2 className="text-4xl font-black leading-tight tracking-tighter text-gray-900">
                        {selectedJob.title}
                      </h2>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="rounded-full bg-gray-100 px-3 py-1">{selectedJob.location}</span>
                        <span className="rounded-full bg-gray-100 px-3 py-1">{selectedJob.type}</span>
                        <span className="rounded-full bg-gray-100 px-3 py-1">{selectedJob.schedule}</span>
                      </div>
                    </div>

                    <a
                      href={selectedJob.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
                    >
                      Apply On LinkedIn
                    </a>
                  </div>

                  <div className="grid grid-cols-1 gap-8 pt-8 xl:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-8">
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">Overview</h3>
                        <p className="text-base leading-relaxed text-gray-600">{selectedJob.overview}</p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">Responsibilities</h3>
                        <ul className="space-y-3 text-base leading-relaxed text-gray-600">
                          {selectedJob.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="flex gap-3">
                              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-2xl bg-gray-50 p-6">
                        <h3 className="text-xl font-bold text-gray-900">Qualifications</h3>
                        <ul className="mt-4 space-y-3 text-base leading-relaxed text-gray-600">
                          {selectedJob.qualifications.map((qualification) => (
                            <li key={qualification} className="flex gap-3">
                              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                              <span>{qualification}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                        <h3 className="text-xl font-bold text-gray-900">How To Apply</h3>
                        <p className="mt-3 text-base leading-relaxed text-gray-700">
                          Applications are handled through LinkedIn. Review the role details, open the LinkedIn posting,
                          and submit your application there.
                        </p>
                        <a
                          href={selectedJob.applyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center rounded-lg border border-blue-700 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
                        >
                          Open LinkedIn Posting
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
