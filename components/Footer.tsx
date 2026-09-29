"use client";

import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { companyInfo } from "@/data/company";
import { serviceLinks } from "@/data/services";
import { capabilitiesStatement } from "@/data/documents";
import { SHOW_PLACEHOLDER_CONTENT } from "@/data/siteConfig";
import { trackEvent } from "@/lib/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const showCapabilitiesCta = SHOW_PLACEHOLDER_CONTENT || !capabilitiesStatement.isPlaceholder;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111214] border-t border-white/15 text-[#f5f3ef]">
      <div className="max-w-7xl mx-auto py-24 px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* About */}
          <div>
            <p className="section-label text-white/70 mb-5">Ashlaur Construction</p>
            <h3 className="font-display text-5xl leading-[0.9] mb-6">Built To Endure.</h3>
            <p className="text-[#d5d1ca] mb-6 leading-relaxed">
              Building Tomorrow, Today. Precision. Power. Performance. Where vision meets extraordinary execution.
            </p>
            <SocialIcons size="md" variant="light" />
          </div>

          {/* Services */}
          <div>
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
          <div>
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
          <div>
            <h4 className="text-xs font-semibold text-white/75 mb-6 uppercase tracking-[0.16em]">Contact</h4>
            <div className="space-y-4 text-[#d5d1ca] mb-8 text-sm">
              <p>{companyInfo.address.full}</p>
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
            {showCapabilitiesCta && (
              <a
                href={capabilitiesStatement.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("capabilities_download", { source: "footer" })}
                className="mb-4 inline-flex items-center gap-2 text-[#f5f3ef] text-sm border-b border-white/50 pb-1 hover:border-white"
              >
                Capabilities Statement <span className="btn-arrow">→</span>
              </a>
            )}
            <Link href="/contact" className="btn-editorial">
              Request Consultation <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Back to Top + Copyright */}
        <div className="mt-16 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#b9b2a7] text-xs tracking-[0.04em]">&copy; {currentYear} Ashlaur Construction. All rights reserved. | Building Tomorrow, Today.</p>
          <button
            onClick={scrollToTop}
            className="text-[#d5d1ca] hover:text-white transition-colors duration-300 cursor-pointer text-xs uppercase tracking-[0.14em] flex items-center gap-2 group"
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