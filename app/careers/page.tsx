"use client";

import { FormEvent, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type StatusState = {
  type: "idle" | "success" | "error";
  message: string;
};

const MAX_RESUME_SIZE_MB = 5;

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusState>({ type: "idle", message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const resume = formData.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setStatus({ type: "error", message: "Please upload your resume before submitting." });
      return;
    }

    if (resume.size > MAX_RESUME_SIZE_MB * 1024 * 1024) {
      setStatus({ type: "error", message: `Resume must be ${MAX_RESUME_SIZE_MB} MB or smaller.` });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/job-application", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Unable to submit application right now.");
      }

      form.reset();
      setStatus({ type: "success", message: "Application submitted. Our team will review it and contact you soon." });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Submission failed. Please try again.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-white space-y-6">
            <p className="text-sm font-semibold tracking-wide text-blue-400 uppercase">Careers</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter">
              Apply To Join The Team
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl">
              We are always looking for talented people who take pride in safety, quality, and craftsmanship.
              Submit your application and resume below.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-xl shadow-lg space-y-6">
              {status.type !== "idle" && (
                <div
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-green-50 border-green-300 text-green-800"
                      : "bg-red-50 border-red-300 text-red-800"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Jane Applicant"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="jane@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-gray-900 mb-2">
                    Position Applying For *
                  </label>
                  <input
                    id="position"
                    name="position"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Project Engineer"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Why You Are A Great Fit *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  placeholder="Share relevant experience, certifications, and availability."
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-semibold text-gray-900 mb-2">
                  Upload Resume (PDF, DOC, DOCX - up to {MAX_RESUME_SIZE_MB}MB) *
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 file:mr-4 file:px-4 file:py-2 file:border-0 file:rounded-md file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
              </div>

              {/* Honeypot spam field (hidden from users) */}
              <input type="text" name="companyWebsite" autoComplete="off" tabIndex={-1} className="hidden" />

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </button>
              </div>

              <p className="text-sm text-gray-600">* Required fields</p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
