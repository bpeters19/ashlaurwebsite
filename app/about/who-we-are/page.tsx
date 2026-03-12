"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import { markets } from "@/data/markets";

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-6 text-white">
              <p className="text-sm font-semibold tracking-wide text-blue-400">OUR STORY</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                Who We Are
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                Construction works best when it's built on trust. We work closely with owners, general contractors, architects, and subcontractors to bring projects from concept to completion with accountability, safety, and clear communication.
              </p>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-12">
                  Our Journey
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p>
                      Ashlaur Construction began with a commitment to doing things the right way—focusing on relationships, reliability, and consistent performance.
                    </p>
                    <p>
                      What started as a small operation serving trusted clients has grown into a team supporting projects across Chicago and surrounding communities. Through every stage of that growth, our focus has remained the same: building strong partnerships and delivering dependable results.
                    </p>
                  </div>
                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p>
                      Today, we continue to work alongside some of the industry's most respected contractors and project teams, contributing to projects that shape the city we call home.
                    </p>
                    <p>
                      As a certified Minority and Disadvantaged Business Enterprise, we take pride in contributing to projects that strengthen our communities while building strong partnerships across the industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-8">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  To deliver construction services rooted in accountability, safety, and partnership—bringing experience and reliability to every project we support.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We believe that strong relationships and disciplined execution are what turn good projects into successful ones.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-8">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  To be a trusted construction partner recognized for reliability, collaboration, and quality work that strengthens the communities we serve.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every project is an opportunity to build something lasting—both in the built environment and in the partnerships behind it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Values */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Certified MBE</p>
                <p className="text-xs text-gray-600 mt-2">Minority-Owned Business Enterprise</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Certified DBE</p>
                <p className="text-xs text-gray-600 mt-2">Disadvantaged Business Enterprise</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Safety Focused</p>
                <p className="text-xs text-gray-600 mt-2">Zero incidents commitment</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Relationship Driven</p>
                <p className="text-xs text-gray-600 mt-2">Partnership-based approach</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-gray-900">Accountability First</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We own every deliverable. Every timeline. Every commitment. When we say something will happen, it happens—on schedule, on budget, safely.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-gray-900">Safety as Foundation</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Zero incidents isn&apos;t a goal—it&apos;s the only outcome we accept. Safe projects are successful projects, and we never compromise on safety.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-gray-900">Partnership Models</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We collaborate, not cooperate. Our partners&apos; success is our success. This mindset drives innovation and delivers results that matter.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-gray-900">Precision Execution</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Master planning meets flawless execution. Every detail matters. Every phase is optimized. That&apos;s how we deliver power and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tighter text-gray-900 mb-16">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {markets.map((market) => (
                <div key={market.slug} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <p className="text-xl font-bold text-gray-900">{market.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
