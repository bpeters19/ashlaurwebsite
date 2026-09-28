"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TurnstileWidget from "@/components/forms/TurnstileWidget";
import { certifications } from "@/data/certifications";
import { workWithUsPlaceholders } from "@/data/safety";
import { isPlaceholderValue, SHOW_PLACEHOLDER_CONTENT } from "@/data/siteConfig";
import { trackEvent } from "@/lib/analytics";

const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
const ALLOWED_UPLOAD_TYPES = new Set(["application/pdf", "application/zip", "application/x-zip-compressed"]);

type BidFormState = {
  company: string;
  contact: string;
  email: string;
  phone: string;
  projectName: string;
  bidDate: string;
  scope: string;
  plansLink: string;
  companyWebsite: string;
};

const initialForm: BidFormState = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  projectName: "",
  bidDate: "",
  scope: "",
  plansLink: "",
  companyWebsite: "",
};

export default function WorkWithUsPageClient() {
  const [formData, setFormData] = useState<BidFormState>(initialForm);
  const [plansUpload, setPlansUpload] = useState<File | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const showBondingDetails =
    SHOW_PLACEHOLDER_CONTENT ||
    (!isPlaceholderValue(workWithUsPlaceholders.bondingCapacity) &&
      !isPlaceholderValue(workWithUsPlaceholders.insuranceLimits));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("form_submit_attempt", { form: "invite_to_bid" });

    if (uploadError) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
      payload.append("turnstileToken", turnstileToken);

      if (plansUpload) {
        payload.append("plansUpload", plansUpload);
      }

      const response = await fetch("/api/invite-to-bid", {
        method: "POST",
        body: payload,
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setErrorMessage(result.message || "Unable to submit bid invitation.");
        return;
      }

      setSubmitted(true);
      trackEvent("form_submit_success", { form: "invite_to_bid" });
      setFormData(initialForm);
      setPlansUpload(null);
      setUploadError("");
      setTurnstileToken("");
    } catch {
      setErrorMessage("Unable to submit bid invitation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUploadChange = (file: File | null) => {
    setUploadError("");

    if (!file) {
      setPlansUpload(null);
      return;
    }

    const extension = file.name.toLowerCase().split(".").pop() || "";
    const extensionAllowed = extension === "pdf" || extension === "zip";
    const mimeAllowed = ALLOWED_UPLOAD_TYPES.has(file.type);

    if (file.size > MAX_UPLOAD_BYTES) {
      setUploadError("Upload must be 4 MB or less.");
      setPlansUpload(null);
      return;
    }

    if (!extensionAllowed && file.type && !mimeAllowed) {
      setUploadError("Upload must be a PDF or ZIP file.");
      setPlansUpload(null);
      return;
    }

    setPlansUpload(file);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content" className="pt-20">
        <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
            <p className="text-sm font-semibold tracking-wide text-blue-400 uppercase">Work With Us</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter">
              Trade Partner + Bid Opportunities
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-4xl">
              We partner with qualified subcontractors and suppliers who share our standards for safety,
              quality, and accountability.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid gap-8 lg:grid-cols-3">
            <article className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">Self-Perform Trades</h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>General carpentry and framing coordination</li>
                <li>Concrete scope coordination support</li>
                <li>Interior buildout supervision</li>
              </ul>
              <p className="mt-3 text-sm text-gray-500">
                TODO(client-content): Replace with approved self-perform trade list.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">Bonding + Insurance</h2>
              <p className="mt-4 text-gray-700">Coverage details available on request during prequalification.</p>
              {showBondingDetails && (
                <div className="mt-3 text-sm text-gray-600 space-y-1">
                  <p>Bonding Capacity: {workWithUsPlaceholders.bondingCapacity}</p>
                  <p>Insurance Limits: {workWithUsPlaceholders.insuranceLimits}</p>
                </div>
              )}
              {SHOW_PLACEHOLDER_CONTENT && (
                <p className="mt-3 text-sm text-gray-500">
                  TODO(client-content): Add official bonding capacity and insurance limits.
                </p>
              )}
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900">Prequalification</h2>
              <p className="mt-4 text-gray-700">Request our latest prequalification packet and compliance checklist.</p>
              <a
                href="mailto:info@ashlaurconstruction.com?subject=Prequalification%20Packet%20Request"
                className="mt-4 inline-flex rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Request Packet
              </a>
            </article>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Current Certifications</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => {
                const showCertMeta =
                  SHOW_PLACEHOLDER_CONTENT || !isPlaceholderValue(cert.certificateNumber);

                return (
                  <div key={cert.name} className="rounded-xl border border-gray-200 p-4">
                    <p className="font-semibold text-gray-900">{cert.name}</p>
                    <p className="text-sm text-gray-600">{cert.certifyingAgency}</p>
                    {showCertMeta && <p className="text-sm text-gray-500 mt-2">Cert #: {cert.certificateNumber}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="mb-8">
              <h2 className="text-4xl font-black text-gray-900">Invite Us To Bid</h2>
              <p className="mt-3 text-gray-600">Submit project details and plans link/upload to start bid review.</p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-lg space-y-6">
              {submitted && (
                <div className="p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg" role="status" aria-live="polite">
                  Thanks. Your bid invitation has been submitted.
                </div>
              )}
              {errorMessage && (
                <div id="bid-form-error" className="p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg" role="alert" aria-live="assertive">
                  {errorMessage}
                </div>
              )}
              {uploadError && (
                <div id="bid-upload-error" className="p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg" role="alert" aria-live="assertive">
                  {uploadError}
                </div>
              )}

              <div className="hidden" aria-hidden="true">
                <label htmlFor="companyWebsite">Company Website</label>
                <input
                  id="companyWebsite"
                  name="companyWebsite"
                  type="text"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">Company *</label>
                  <input id="company" name="company" required aria-required="true" aria-describedby={errorMessage ? "bid-form-error" : undefined} value={formData.company} onChange={handleChange} className="w-full rounded-md border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-semibold text-gray-900 mb-2">Contact Name *</label>
                  <input id="contact" name="contact" required aria-required="true" aria-describedby={errorMessage ? "bid-form-error" : undefined} value={formData.contact} onChange={handleChange} className="w-full rounded-md border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                  <input id="email" name="email" type="email" required aria-required="true" aria-describedby={errorMessage ? "bid-form-error" : undefined} value={formData.email} onChange={handleChange} className="w-full rounded-md border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                  <input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-md border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label htmlFor="projectName" className="block text-sm font-semibold text-gray-900 mb-2">Project Name *</label>
                  <input id="projectName" name="projectName" required aria-required="true" aria-describedby={errorMessage ? "bid-form-error" : undefined} value={formData.projectName} onChange={handleChange} className="w-full rounded-md border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label htmlFor="bidDate" className="block text-sm font-semibold text-gray-900 mb-2">Bid Date *</label>
                  <input id="bidDate" name="bidDate" type="date" required aria-required="true" aria-describedby={errorMessage ? "bid-form-error" : undefined} value={formData.bidDate} onChange={handleChange} className="w-full rounded-md border border-gray-300 px-4 py-3" />
                </div>
              </div>

              <div>
                <label htmlFor="scope" className="block text-sm font-semibold text-gray-900 mb-2">Scope Details *</label>
                <textarea id="scope" name="scope" required aria-required="true" aria-describedby={errorMessage ? "bid-form-error" : undefined} rows={5} value={formData.scope} onChange={handleChange} className="w-full rounded-md border border-gray-300 px-4 py-3" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="plansLink" className="block text-sm font-semibold text-gray-900 mb-2">Plans Link *</label>
                  <input id="plansLink" name="plansLink" type="url" required aria-required="true" aria-describedby={errorMessage ? "bid-form-error" : undefined} value={formData.plansLink} onChange={handleChange} placeholder="https://" className="w-full rounded-md border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label htmlFor="plansUpload" className="block text-sm font-semibold text-gray-900 mb-2">Upload Plans (Optional PDF/ZIP, max 4 MB)</label>
                  <input
                    id="plansUpload"
                    name="plansUpload"
                    type="file"
                    accept=".pdf,.zip,application/pdf,application/zip,application/x-zip-compressed"
                    aria-describedby={uploadError ? "bid-upload-error" : undefined}
                    onChange={(e) => handleUploadChange(e.target.files?.[0] ?? null)}
                    className="w-full rounded-md border border-gray-300 px-4 py-3"
                  />
                </div>
              </div>

              <TurnstileWidget onTokenChange={setTurnstileToken} />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit Bid Invitation"}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
