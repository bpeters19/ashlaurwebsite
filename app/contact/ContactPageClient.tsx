"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { serviceLinks } from "@/data/services";
import TurnstileWidget from "@/components/forms/TurnstileWidget";
import { trackEvent } from "@/lib/analytics";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    companyWebsite: "",
  });

  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("form_submit_attempt", { form: "contact" });
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setErrorMessage(result.message || "Unable to send your request. Please try again.");
        return;
      }

      setSubmitted(true);
      trackEvent("form_submit_success", { form: "contact" });
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
        companyWebsite: "",
      });
      setTurnstileToken("");
    } catch {
      setErrorMessage("Unable to send your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content" className="pt-[var(--header-h)]">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-6 text-white">
              <p className="text-sm font-semibold tracking-wide text-blue-400">GET IN TOUCH</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                Let&apos;s Build Together.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                Have a project in mind? Our team is ready to discuss your construction needs and deliver excellence every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {/* Address */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Office Location</h3>
                <div className="text-gray-600 space-y-2">
                  <p className="font-semibold">Ashlaur Construction</p>
                  <p>509 E 75th St</p>
                  <p>Chicago, IL 60619</p>
                  <p>United States</p>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Phone</h3>
                <div className="text-gray-600">
                  <a
                    href="tel:(773) 651-1900"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                    onClick={() => trackEvent("phone_click", { source: "contact_info_card" })}
                  >
                    (773) 651-1900
                  </a>
                  <p className="text-sm mt-2">Available during business hours</p>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Email</h3>
                <div className="text-gray-600">
                  <a href="mailto:info@ashlaurconstruction.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                    info@ashlaurconstruction.com
                  </a>
                  <p className="text-sm mt-2">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Hours</h3>
                <div className="text-gray-600">
                  <p className="font-semibold">Monday - Friday</p>
                  <p>7:00 AM - 3:00 PM</p>
                  <p className="text-sm mt-2">Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-6 mb-16">
              <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">SEND US A MESSAGE</p>
              <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900">
                Start Your Project
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Fill out the form below and our team will be in touch to discuss your construction needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-lg shadow-lg space-y-6">
              {submitted && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg" role="status" aria-live="polite">
                  Thank you for reaching out! We&apos;ll be in touch shortly.
                </div>
              )}

              {errorMessage && (
                <div
                  id="contact-form-error"
                  className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                  role="alert"
                  aria-live="assertive"
                >
                  {errorMessage}
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

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={Boolean(errorMessage)}
                    aria-describedby={errorMessage ? "contact-form-error" : undefined}
                    className="w-full min-h-11 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-gray-900 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    autoComplete="organization"
                    className="w-full min-h-11 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-base"
                    placeholder="Company or organization"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={Boolean(errorMessage)}
                    aria-describedby={errorMessage ? "contact-form-error" : undefined}
                    className="w-full min-h-11 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-base"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    className="w-full min-h-11 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-base"
                    placeholder="(773) 651-1900"
                  />
                </div>
              </div>

              {/* Project Type Row */}
              <div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errorMessage)}
                    aria-describedby={errorMessage ? "contact-form-error" : undefined}
                    className="w-full min-h-11 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-base"
                  >
                    <option value="">Select a project type</option>
                    {serviceLinks.map((service) => (
                      <option key={service.projectTypeValue} value={service.projectTypeValue}>
                        {service.label}
                      </option>
                    ))}
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errorMessage)}
                  aria-describedby={errorMessage ? "contact-form-error" : undefined}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none text-base"
                  placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                />
              </div>

              <TurnstileWidget onTokenChange={setTurnstileToken} />

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto min-h-11 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <a
                  href="tel:(773) 651-1900"
                  className="w-full sm:w-auto inline-flex items-center justify-center min-h-11 px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
                  onClick={() => trackEvent("phone_click", { source: "contact_form" })}
                >
                  Call Now
                </a>
              </div>

              <p className="text-sm text-gray-600">* Required fields</p>
            </form>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-10">
              Whether you need a consultation or ready to move forward with your project, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(773) 651-1900"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
                onClick={() => trackEvent("phone_click", { source: "contact_cta" })}
              >
                Call (773) 651-1900
              </a>
              <a
                href="mailto:info@ashlaurconstruction.com"
                className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
