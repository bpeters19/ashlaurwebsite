"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);

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
        { name: "Leadership", href: "/about#leadership" },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="logo-link">
                <div className="logo-text-styled">
                  <span className="logo-ash text-blue-600">ASH</span>
                  <span className={`logo-laur ${isScrolled ? 'logo-laur-scrolled' : 'logo-laur-transparent'}`}>LAUR</span>
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
                    className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary px-4 py-2 text-lg font-semibold flex items-center transition-colors nav-link`}
                    aria-haspopup="true"
                    aria-expanded={projectsMenuOpen}
                    id="projects-menu-trigger"
                    type="button"
                  >
                    {item.name}
                    <ChevronDown className="ml-2 h-5 w-5" />
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
                    className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary px-4 py-2 text-lg font-semibold flex items-center transition-colors nav-link`}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === "About"}
                    id="about-menu-trigger"
                    type="button"
                  >
                    {item.name}
                    <ChevronDown className="ml-2 h-5 w-5" />
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
                    className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary px-4 py-2 text-lg font-semibold flex items-center transition-colors nav-link`}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === "Services"}
                    id="services-menu-trigger"
                    type="button"
                  >
                    {item.name}
                    <ChevronDown className="ml-2 h-5 w-5" />
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
                    className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary px-4 py-2 text-lg font-semibold flex items-center transition-colors`}
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
              <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded transition duration-300 transform hover:scale-105">
                SEE OUR PROJECTS
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary p-3 transition-colors`}
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
                    className="text-foreground hover:text-primary text-2xl font-bold transition-colors"
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
                    className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded transition duration-300 text-xl mt-8"
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
    </nav>
  );
};

export default Navbar;