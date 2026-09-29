"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { companyInfo } from "@/data/company";
import { serviceLinks } from "@/data/services";
import { capabilitiesStatement } from "@/data/documents";
import { SHOW_PLACEHOLDER_CONTENT } from "@/data/siteConfig";
import { trackEvent } from "@/lib/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const showCapabilitiesCta = SHOW_PLACEHOLDER_CONTENT || !capabilitiesStatement.isPlaceholder;
  const [openSection, setOpenSection] = useState<"services" | "company" | "contact" | null>(null);
  const mapAddress = encodeURIComponent(companyInfo.address.full);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111214] border-t border-white/15 text-[#f5f3ef]">
      <div className="max-w-7xl mx-auto py-24 px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* About */}
          <div>
            <Image
              src="/logo.png"
              alt="Ashlaur Construction"
              width={196}
              height={72}
              className="h-10 w-auto"
              sizes="196px"
              unoptimized
            />
            <p className="section-label text-white/70 mb-5">Ashlaur Construction</p>
            <h3 className="font-display text-5xl leading-[0.9] mb-6">Built To Endure.</h3>
            <p className="text-[#d5d1ca] mb-6 leading-relaxed">
              Building Tomorrow, Today. Precision. Power. Performance. Where vision meets extraordinary execution.
            </p>
            <SocialIcons size="md" variant="light" />
          </div>

          {/* Services */}
          <div className="hidden md:block">
            <h4 className="text-xs font-semibold text-white/75 mb-6 uppercase tracking-[0.16em]">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="hidden md:block">
            <h4 className="text-xs font-semibold text-white/75 mb-6 uppercase tracking-[0.16em]">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">About Us</Link></li>
              <li><Link href="/careers" className="text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Careers</Link></li>
              <li><Link href="/safety" className="text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Safety</Link></li>
              <li><Link href="/privacy" className="text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Privacy</Link></li>
              <li><Link href="/policies" className="text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Policies</Link></li>
              <li><Link href="/projects" className="text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Projects</Link></li>
              <li><Link href="/contact" className="text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="hidden md:block">
            <h4 className="text-xs font-semibold text-white/75 mb-6 uppercase tracking-[0.16em]">Contact</h4>
            <div className="space-y-4 text-[#d5d1ca] mb-8 text-sm">
              <p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.address.full}
                </a>
              </p>
              <p>
                Phone: {" "}
                <a
                  href="tel:+17736511900"
                  className="hover:text-white transition-colors duration-300"
                  onClick={() => trackEvent("phone_click", { source: "footer" })}
                >
                  {companyInfo.phone}
                </a>
              </p>
              <p>
                Email: {" "}
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors duration-300">
                  {companyInfo.email}
                </a>
              </p>
            </div>
            <div className="mt-2 flex flex-col items-start gap-4">
              {showCapabilitiesCta && (
                <a
                  href={capabilitiesStatement.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("capabilities_download", { source: "footer" })}
                  className="footer-action-link footer-action-link-secondary"
                >
                  Capabilities Statement <span className="btn-arrow">→</span>
                </a>
              )}
              <Link href="/contact" className="footer-action-link footer-action-link-primary">
                Request Consultation <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          <div className="md:hidden border-t border-white/10 pt-4 space-y-3">
            {([
              {
                key: "services" as const,
                label: "Services",
                content: (
                  <ul className="space-y-3 pt-2">
                    {serviceLinks.map((service) => (
                      <li key={service.href}>
                        <Link href={service.href} className="inline-flex min-h-11 items-center text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                key: "company" as const,
                label: "Company",
                content: (
                  <ul className="space-y-3 pt-2">
                    <li><Link href="/about" className="inline-flex min-h-11 items-center text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">About Us</Link></li>
                    <li><Link href="/careers" className="inline-flex min-h-11 items-center text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Careers</Link></li>
                    <li><Link href="/safety" className="inline-flex min-h-11 items-center text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Safety</Link></li>
                    <li><Link href="/privacy" className="inline-flex min-h-11 items-center text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Privacy</Link></li>
                    <li><Link href="/policies" className="inline-flex min-h-11 items-center text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Policies</Link></li>
                    <li><Link href="/projects" className="inline-flex min-h-11 items-center text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Projects</Link></li>
                    <li><Link href="/contact" className="inline-flex min-h-11 items-center text-[#d5d1ca] hover:text-white transition-colors duration-300 text-sm">Contact</Link></li>
                  </ul>
                ),
              },
              {
                key: "contact" as const,
                label: "Contact",
                content: (
                  <div className="space-y-3 pt-2 text-sm text-[#d5d1ca]">
                    <p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center hover:text-white transition-colors"
                      >
                        {companyInfo.address.full}
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+17736511900"
                        className="inline-flex min-h-11 items-center hover:text-white transition-colors"
                        onClick={() => trackEvent("phone_click", { source: "footer_mobile" })}
                      >
                        {companyInfo.phone}
                      </a>
                    </p>
                    <p>
                      <a href={`mailto:${companyInfo.email}`} className="inline-flex min-h-11 items-center hover:text-white transition-colors">
                        {companyInfo.email}
                      </a>
                    </p>
                    <div className="mt-3 flex flex-col items-start gap-3">
                      {showCapabilitiesCta && (
                        <a
                          href={capabilitiesStatement.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackEvent("capabilities_download", { source: "footer_mobile" })}
                          className="footer-action-link footer-action-link-secondary"
                        >
                          Capabilities Statement <span className="btn-arrow">→</span>
                        </a>
                      )}
                      <Link href="/contact" className="footer-action-link footer-action-link-primary">
                        Request Consultation <span className="btn-arrow">→</span>
                      </Link>
                    </div>
                  </div>
                ),
              },
            ]).map((section) => {
              const isExpanded = openSection === section.key;
              return (
                <div key={section.key} className="border-b border-white/10 pb-3">
                  <button
                    type="button"
                    className="flex min-h-11 w-full items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-white/80"
                    aria-expanded={isExpanded}
                    aria-controls={`footer-mobile-${section.key}`}
                    onClick={() => setOpenSection(isExpanded ? null : section.key)}
                  >
                    <span>{section.label}</span>
                    <span className="text-white/55">{isExpanded ? "−" : "+"}</span>
                  </button>
                  <div id={`footer-mobile-${section.key}`} className={isExpanded ? "block" : "hidden"}>
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Back to Top + Copyright */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#b9b2a7] text-[11px] tracking-[0.03em] text-center sm:text-left">&copy; {currentYear} Ashlaur Construction. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="text-[#d5d1ca] hover:text-white transition-colors duration-300 cursor-pointer text-[11px] uppercase tracking-[0.14em] flex min-h-11 items-center gap-2 group"
          >
            Back to Top
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;