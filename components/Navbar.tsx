"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
  const [certsModalOpen, setCertsModalOpen] = useState(false);
  const [aboutAllModalOpen, setAboutAllModalOpen] = useState(false);
  const [partnersModalOpen, setPartnersModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/about", hasDropdown: true },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/projects", hasDropdown: true },
    { name: "Process", href: "/process", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  // About mega menu content
  const aboutSections = [
    {
      heading: "Who We Are",
      links: [
        { name: "Our Story", href: "/about#story" },
        { name: "Leadership", href: "/leadership" },
        { name: "Values", href: "/about#values" },
        { name: "View All About", href: "/about" },
      ],
    },
    {
      heading: "Recognition",
      links: [
        { name: "Awards", href: "/about#awards" },
        { name: "Certifications", href: "/about#certifications" },
        { name: "Partners", href: "/about#partners" },
        { name: "View All Recognition", href: "/about#recognition" },
      ],
    },
    {
      heading: "Careers",
      links: [
        { name: "Open Positions", href: "/about#careers" },
        { name: "Culture", href: "/about#culture" },
        { name: "Benefits", href: "/about#benefits" },
        { name: "View All Careers", href: "/about#careers" },
      ],
    },
  ];

  // Services mega menu content
  const servicesSections = [
    {
      heading: "Preconstruction",
      links: [
        { name: "Estimating", href: "/services#estimating" },
        { name: "Planning", href: "/services#planning" },
        { name: "Value Engineering", href: "/services#value-engineering" },
        { name: "View All Preconstruction", href: "/services#preconstruction" },
      ],
    },
    {
      heading: "Construction",
      links: [
        { name: "General Contracting", href: "/services#general-contracting" },
        { name: "Design-Build", href: "/services#design-build" },
        { name: "Self-Perform", href: "/services#self-perform" },
        { name: "View All Construction", href: "/services#construction" },
      ],
    },
    {
      heading: "Specialties",
      links: [
        { name: "Sustainability", href: "/services#sustainability" },
        { name: "Technology", href: "/services#technology" },
        { name: "Safety", href: "/services#safety" },
        { name: "View All Specialties", href: "/services#specialties" },
      ],
    },
  ];

  // Placeholder project lists for each status
  const completedProjects = [
    { name: "Westhaven Park Station", href: "/projects/westhaven-park-station" },
    { name: "The Foglia Residences", href: "/projects/foglia-residences" },
    { name: "Project Name 3", href: "/projects/completed-3" },
  ];
  const ongoingProjects = [
    { name: "Project Name 1", href: "/projects/ongoing-1" },
    { name: "Project Name 2", href: "/projects/ongoing-2" },
    { name: "Project Name 3", href: "/projects/ongoing-3" },
  ];
  const upcomingProjects = [
    { name: "Project Name 1", href: "/projects/upcoming-1" },
    { name: "Project Name 2", href: "/projects/upcoming-2" },
    { name: "Project Name 3", href: "/projects/upcoming-3" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0B1F3B] shadow-sm ${
      isScrolled ? 'border-b border-white/10' : 'border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="logo-link">
                <div className="logo-text-styled">
                  <span className="logo-ash text-blue-600">ASH</span>
                  <span className="logo-laur text-white">LAUR</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.name === "Projects" ? (
                <div
                  key={item.name}
                  className="relative projects-mega-menu-wrapper"
                  onMouseEnter={() => setProjectsMenuOpen(true)}
                  onMouseLeave={() => setProjectsMenuOpen(false)}
                  tabIndex={0}
                  onFocus={() => setProjectsMenuOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setProjectsMenuOpen(false);
                  }}
                >
                  <button
                    className="text-white hover:text-[#AFC6FF] px-4 py-2 text-lg font-semibold flex items-center transition-colors nav-link"
                    aria-haspopup="true"
                    aria-expanded={projectsMenuOpen}
                    id="projects-menu-trigger"
                    type="button"
                  >
                    {item.name}
                    <ChevronDown className="ml-2 h-5 w-5 text-white" />
                  </button>
                  <AnimatePresence>
                    {projectsMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.18 }}
                        className="mega-menu absolute left-1/2 -translate-x-1/2 top-full mt-4 w-screen max-w-5xl bg-white border border-border rounded-xl shadow-2xl z-50 p-8"
                        role="menu"
                        aria-label="Projects Mega Menu"
                        tabIndex={-1}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') setProjectsMenuOpen(false);
                        }}
                      >
                        <div className="mega-menu-grid grid grid-cols-1 md:grid-cols-3 gap-8 divide-x divide-blue-200">
                          <div className="mega-menu-col px-6">
                            <h3 className="mega-menu-heading text-lg font-bold mb-4">Completed</h3>
                            <ul>
                              {completedProjects.map((proj) => (
                                <li key={proj.href}>
                                  <Link href={proj.href} className="block py-1 text-gray-800 hover:text-primary transition-colors">{proj.name}</Link>
                                </li>
                              ))}
                              <li className="view-all mt-2"><Link href="/projects?status=completed" className="font-semibold text-primary">View All Completed</Link></li>
                            </ul>
                          </div>
                          <div className="mega-menu-col px-6">
                            <h3 className="mega-menu-heading text-lg font-bold mb-4">Ongoing</h3>
                            <ul>
                              {ongoingProjects.map((proj) => (
                                <li key={proj.href}>
                                  <Link href={proj.href} className="block py-1 text-gray-800 hover:text-primary transition-colors">{proj.name}</Link>
                                </li>
                              ))}
                              <li className="view-all mt-2"><Link href="/projects?status=ongoing" className="font-semibold text-primary">View All Ongoing</Link></li>
                            </ul>
                          </div>
                          <div className="mega-menu-col px-6">
                            <h3 className="mega-menu-heading text-lg font-bold mb-4">Upcoming</h3>
                            <ul>
                              {upcomingProjects.map((proj) => (
                                <li key={proj.href}>
                                  <Link href={proj.href} className="block py-1 text-gray-800 hover:text-primary transition-colors">{proj.name}</Link>
                                </li>
                              ))}
                              <li className="view-all mt-2"><Link href="/projects?status=upcoming" className="font-semibold text-primary">View All Upcoming</Link></li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.name === "About" ? (
                <div
                  key={item.name}
                  className="relative about-mega-menu-wrapper"
                  onMouseEnter={() => setActiveDropdown("About")}
                  onMouseLeave={() => setActiveDropdown(null)}
                  tabIndex={0}
                  onFocus={() => setActiveDropdown("About")}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setActiveDropdown(null);
                  }}
                >
                  <button
                    className="text-white hover:text-[#AFC6FF] px-4 py-2 text-lg font-semibold flex items-center transition-colors nav-link"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === "About"}
                    id="about-menu-trigger"
                    type="button"
                  >
                    {item.name}
                    <ChevronDown className="ml-2 h-5 w-5 text-white" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "About" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.18 }}
                        className="mega-menu absolute left-1/2 -translate-x-1/2 top-full mt-4 w-screen max-w-5xl bg-white border border-border rounded-xl shadow-2xl z-50 p-8"
                        role="menu"
                        aria-label="About Mega Menu"
                        tabIndex={-1}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') setActiveDropdown(null);
                        }}
                      >
                        <div className="mega-menu-grid grid grid-cols-1 md:grid-cols-3 gap-8 divide-x divide-blue-200">
                          {aboutSections.map((section) => (
                            <div className="mega-menu-col px-6" key={section.heading}>
                              <h3 className="mega-menu-heading text-lg font-bold mb-4">{section.heading}</h3>
                              <ul>
                                {section.links.map((link) => (
                                  <li key={link.href ?? link.name}>
                                    {link.name === "Certifications" ? (
                                      <button
                                        onClick={() => setCertsModalOpen(true)}
                                        className="block py-1 text-gray-800 hover:text-primary transition-colors text-left w-full"
                                      >
                                        {link.name}
                                      </button>
                                    ) : link.name === "Partners" ? (
                                      <button
                                        onClick={() => setPartnersModalOpen(true)}
                                        className="block py-1 text-gray-800 hover:text-primary transition-colors text-left w-full"
                                      >
                                        {link.name}
                                      </button>
                                    ) : link.name === "View All About" ? (
                                      <button
                                        onClick={() => setAboutAllModalOpen(true)}
                                        className="block py-1 text-gray-800 hover:text-primary transition-colors text-left w-full"
                                      >
                                        {link.name}
                                      </button>
                                    ) : (
                                      <Link href={link.href} className="block py-1 text-gray-800 hover:text-primary transition-colors">{link.name}</Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.name === "Services" ? (
                <div
                  key={item.name}
                  className="relative services-mega-menu-wrapper"
                  onMouseEnter={() => setActiveDropdown("Services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                  tabIndex={0}
                  onFocus={() => setActiveDropdown("Services")}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setActiveDropdown(null);
                  }}
                >
                  <button
                    className="text-white hover:text-[#AFC6FF] px-4 py-2 text-lg font-semibold flex items-center transition-colors nav-link"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === "Services"}
                    id="services-menu-trigger"
                    type="button"
                  >
                    {item.name}
                    <ChevronDown className="ml-2 h-5 w-5 text-white" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "Services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.18 }}
                        className="mega-menu absolute left-1/2 -translate-x-1/2 top-full mt-4 w-screen max-w-5xl bg-white border border-border rounded-xl shadow-2xl z-50 p-8"
                        role="menu"
                        aria-label="Services Mega Menu"
                        tabIndex={-1}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') setActiveDropdown(null);
                        }}
                      >
                        <div className="mega-menu-grid grid grid-cols-1 md:grid-cols-3 gap-8 divide-x divide-blue-200">
                          {servicesSections.map((section) => (
                            <div className="mega-menu-col px-6" key={section.heading}>
                              <h3 className="mega-menu-heading text-lg font-bold mb-4">{section.heading}</h3>
                              <ul>
                                {section.links.map((link) => (
                                  <li key={link.href}>
                                    <Link href={link.href} className="block py-1 text-gray-800 hover:text-primary transition-colors">{link.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="text-white hover:text-[#AFC6FF] px-4 py-2 text-lg font-semibold flex items-center transition-colors"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="ml-2 h-5 w-5" />}
                  </a>
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-4 w-72 bg-accent border border-border rounded-xl py-4 shadow-2xl"
                        >
                          <div className="px-6 py-2">
                            <p className="text-sm text-muted">
                              {item.name === "About" ? "About AshLaur" : "Explore our services"}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/projects">
              <button className="bg-[#123563] hover:bg-[#1c3a66] text-white font-bold py-3 px-6 rounded transition duration-300 transform hover:scale-105 border border-white/15">
                SEE OUR PROJECTS
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#AFC6FF] p-3 transition-colors"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-accent border-l border-border p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-8 mt-20">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white hover:text-[#AFC6FF] text-2xl font-bold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <Link href="/projects">
                  <motion.button
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-[#123563] hover:bg-[#1c3a66] text-white font-bold py-4 px-8 rounded transition duration-300 text-xl mt-8 border border-white/15"
                    onClick={() => setIsOpen(false)}
                  >
                    SEE OUR PROJECTS
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certifications Modal */}
      <AnimatePresence>
        {certsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setCertsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-4xl font-bold text-secondary">Certifications & Accreditations</h2>
                  <button
                    onClick={() => setCertsModalOpen(false)}
                    className="text-muted hover:text-secondary text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>
                <p className="text-lg text-muted mb-8">
                  Our commitment to excellence is backed by industry-leading certifications and credentials.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  {[
                    { name: "Chicago Housing Authority", image: "/images/certs/CHA+logo%20cert.png", description: "Chicago Housing Authority" },
                    { name: "CMS Certified", image: "/images/certs/CMS+logo%20cert.jpg", description: "Central Management Services" },
                    { name: "MBE Certified", image: "/images/certs/MBE+logo%20cert.png", description: "Minority Business Enterprise" },
                    { name: "DBE Certified", image: "/images/certs/DBE+logo%20cert.png", description: "Disadvantaged Business Enterprise" },
                    { name: "CDOT Approved", image: "/images/certs/CDOT-Logo%20cert.png", description: "Chicago Department of Transportation" },
                  ].map((cert) => (
                    <div key={cert.name} className="flex flex-col items-center text-center">
                      <div className="relative w-32 h-32 mb-4 bg-surface rounded-lg shadow-sm overflow-hidden p-4">
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-secondary mb-1">{cert.name}</h3>
                      <p className="text-xs text-muted">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Partners Modal */}
      <AnimatePresence>
        {partnersModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setPartnersModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-4xl font-bold text-secondary">Our Partners</h2>
                  <button
                    onClick={() => setPartnersModalOpen(false)}
                    className="text-muted hover:text-secondary text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>
                <p className="text-lg text-muted mb-8">
                  We work with trusted partners to deliver excellence on every project.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  {[
                    { name: "McShane Construction Company", image: "/images/partners/mcshane/partners-01%20mcshane.png", bgColor: "#006B3F" },
                    { name: "FHP", image: "/images/partners/fhp/partners-02%20fhp.png", bgColor: "#000000" },
                    { name: "Skender", image: "/images/partners/skender/partners-03%20skender.png", bgColor: "#FFFFFF" },
                    { name: "Weis Builders", image: "/images/partners/weis-builders/partners-04%20weis.png", bgColor: "#F5F5DC" },
                    { name: "McHugh", image: "/images/partners/mchugh/partners-05%20mchugh.png", bgColor: "#003B7A" },
                    { name: "Powers & Sons Construction", image: "/images/partners/powers-sons/partners-06-1%20p%26s.png", bgColor: "#C8102E" },
                  ].map((partner) => (
                    <div key={partner.name} className="flex flex-col items-center text-center w-40">
                      <div 
                        className="w-32 h-32 mb-4 rounded-lg shadow-sm flex items-center justify-center overflow-hidden"
                        style={{ backgroundColor: partner.bgColor }}
                      >
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          width={128}
                          height={128}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-secondary">{partner.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* All About Modal */}
      <AnimatePresence>
        {aboutAllModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setAboutAllModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-4xl font-bold text-secondary">About AshLaur</h2>
                  <button
                    onClick={() => setAboutAllModalOpen(false)}
                    className="text-muted hover:text-secondary text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {aboutSections.map((section) => (
                    <div key={section.heading}>
                      <h3 className="text-xl font-semibold text-secondary mb-3">{section.heading}</h3>
                      <ul className="space-y-2">
                        {section.links.map((link) => (
                          <li key={link.href ?? link.name}>
                            {link.name === 'Certifications' ? (
                              <button
                                onClick={() => { setAboutAllModalOpen(false); setCertsModalOpen(true); }}
                                className="text-blue-700 hover:underline"
                              >
                                {link.name}
                              </button>
                            ) : link.name === 'Partners' ? (
                              <button
                                onClick={() => { setAboutAllModalOpen(false); setPartnersModalOpen(true); }}
                                className="text-blue-700 hover:underline"
                              >
                                {link.name}
                              </button>
                            ) : (
                              <Link href={link.href} className="text-blue-700 hover:underline">{link.name}</Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;