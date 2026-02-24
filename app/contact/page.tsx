"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be connected to email service later (SendGrid, Mailgun, etc.)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-6 text-white">
              <p className="text-sm font-semibold tracking-wide text-blue-400">GET IN TOUCH</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                Let's Build Together.
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
                  <p className="font-semibold">AshLaur Construction</p>
                  <p>1595 Valencia Ct</p>
                  <p>Calumet City, IL 60409-5410</p>
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
                  <a href="tel:(773) 651-1900" className="text-blue-600 hover:text-blue-700 font-semibold">
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
                  <a href="mailto:info@ashlaur.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                    info@ashlaur.com
                  </a>
                  <p className="text-sm mt-2">We'll respond within 24 hours</p>
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
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for reaching out! We'll be in touch shortly.
                </div>
              )}

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="John Doe"
                  />
                </div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone & Project Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="(773) 651-1900"
                  />
                </div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select a project type</option>
                    <option value="general-contracting">General Contracting</option>
                    <option value="construction-management">Construction Management</option>
                    <option value="design-build">Design-Build</option>
                    <option value="architect-services">Architect Services</option>
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
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
                <a
                  href="tel:(773) 651-1900"
                  className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
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
              Whether you need a consultation or ready to move forward with your project, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(773) 651-1900"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Call (773) 651-1900
              </a>
              <a
                href="mailto:info@ashlaur.com"
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