"use client";

import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-3xl font-black text-blue-600 mb-6 cursor-pointer hover:text-blue-400 transition-colors duration-300">ASHLAUR</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building Tomorrow, Today. Precision. Power. Performance. Where vision meets extraordinary execution.
            </p>
            <SocialIcons size="md" variant="light" />
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Commercial Construction</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Infrastructure</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Renovation</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Project Management</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Careers</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Get In Touch</h4>
            <div className="space-y-4 text-gray-400 mb-6">
              <p>1595 Valencia Ct Calumet City, IL 60409-5410 United States</p>
              <p className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Phone: (773) 651-1900</p>
              <p className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Email: info@ashlaur.com</p>
            </div>
            <Link href="/contact" className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg">
              GET QUOTE
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-2xl font-bold text-white mb-2">Stay Connected</h4>
              <p className="text-gray-400">Get the latest updates on our extraordinary projects.</p>
            </div>
            <div className="flex w-full md:w-auto group">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-gray-800 text-white rounded-l-xl border border-gray-700 focus:outline-none focus:border-blue-600 flex-1 md:w-64 group-hover:border-gray-600 transition-colors duration-300"
              />
              <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold px-8 py-3 rounded-r-xl transition-all duration-300 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top + Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">&copy; 2024 ASHLAUR Construction. All rights reserved. | Building Tomorrow, Today.</p>
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer font-semibold flex items-center gap-2 group"
          >
            Back to Top ↑
            <span className="group-hover:translate-y-1 transition-transform duration-300">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;