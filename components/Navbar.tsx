"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { markets } from "@/data/markets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navWrapperRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) setActiveDropdown(null);
  }, [isOpen]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!activeDropdown) return;
      const target = event.target as Node;
      if (navWrapperRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      setActiveDropdown(null);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [activeDropdown]);

  const navItems = [
    { name: "About", href: "/about", hasDropdown: true },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/projects", hasDropdown: true },
    { name: "Process", href: "/process", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];
  const marketLinks = markets.map((market) => ({ name: market.name, href: market.path }));
  const megaMenuContent = {
    About: {
      title: "About Us",
      description:
        "Ashlaur delivers construction leadership rooted in accountability, safety, and partnership across every project phase.",
      cta: { label: "Get to Know Us →", href: "/about" },
      columns: [
        {
          heading: "Company",
          links: [
            { name: "Who We Are", href: "/about/who-we-are" },
            { name: "Leadership", href: "/about/leadership" },
          ],
        },
        {
          heading: "Markets",
          links: [
            { name: "Market Sectors", href: "/about/market-sectors" },
            { name: "Locations", href: "/about/locations" },
          ],
        },
        {
          heading: "Culture",
          links: [
            { name: "Culture", href: "/about/culture" },
            { name: "Safety & Quality", href: "/about/safety-quality" },
          ],
        },
      ],
      feature: {
        title: "Become a Subcontractor",
        href: "/about/become-a-subcontractor",
        image: "/images/about/about-bg.jpg",
        cta: "Learn How",
      },
    },
    Services: {
      title: "Services",
      description:
        "Integrated preconstruction and delivery services tailored to complex, schedule-driven builds.",
      cta: { label: "Explore Services →", href: "/services" },
      columns: [
        {
          heading: "Core Services",
          links: [
            { name: "General Contracting", href: "/services/general-contracting" },
            { name: "Construction Management", href: "/services/construction-management" },
            { name: "Design-Build", href: "/services/design-build" },
            { name: "Architect Services", href: "/services/architect-services" },
          ],
        },
      ],
      feature: {
        title: "Safety & Quality Planning",
        href: "/safety-quality-planning",
        image: "/images/about/about-bg.jpg",
        cta: "View Safety Approach",
      },
    },
    Projects: {
      title: "Projects",
      description:
        "Sector-led teams delivering healthcare, industrial, and commercial builds with predictable outcomes.",
      cta: { label: "See Featured Projects →", href: "/projects" },
      columns: [
        {
          heading: "Market Sectors",
          links: marketLinks,
        },
        {
          heading: "Highlights",
          links: [
            { name: "Featured Projects", href: "/projects" },
            { name: "Project Map", href: "/gallery" },
          ],
        },
      ],
      feature: {
        title: "Project Gallery",
        href: "/gallery",
        image: "/images/about/about-bg.jpg",
        cta: "View Gallery",
      },
    },
  } as const;

  const menuContent = activeDropdown
    ? megaMenuContent[activeDropdown as keyof typeof megaMenuContent]
    : null;

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleLogoClick = () => {
    if (pathname === "/") {
      // On home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // On other pages, navigate to home
      window.location.href = "/";
    }
  };

  // Determine navbar background based on route and scroll state
  const getNavbarClasses = () => {
    if (!isHomePage) {
      // All non-home pages: always blue
      return 'bg-[#0B1F3B] border-b border-white/10';
    }
    // Home page: responsive to scroll
    return isScrolled 
      ? 'bg-[#0B1F3B] shadow-lg border-b border-white/10' 
      : 'bg-transparent border-b border-transparent';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${getNavbarClasses()}`}>
      <div
        ref={navWrapperRef}
        className="relative"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button 
                  onClick={handleLogoClick}
                  className="logo-link hover:opacity-80 transition-opacity duration-300 bg-none border-none p-0 cursor-pointer"
                  aria-label="Home"
                >
                  <Image
                    src="/logo.png"
                    alt="Ashlaur Construction"
                    width={180}
                    height={50}
                    className="h-10 md:h-12 w-auto drop-shadow-lg"
                    priority
                  />
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const hasMegaMenu = Boolean(
                  item.hasDropdown && megaMenuContent[item.name as keyof typeof megaMenuContent]
                );

                if (!hasMegaMenu) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-[#AFC6FF] px-4 py-2 text-lg font-semibold flex items-center transition-colors drop-shadow-lg"
                    >
                      {item.name}
                    </Link>
                  );
                }

                return (
                  <div key={item.name} className="relative" onMouseEnter={() => setActiveDropdown(item.name)}>
                    <button
                      className="text-white hover:text-[#AFC6FF] px-4 py-2 text-lg font-semibold flex items-center transition-colors nav-link drop-shadow-lg"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.name}
                      type="button"
                      onFocus={() => setActiveDropdown(item.name)}
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                    >
                      {item.name}
                      <ChevronDown className="ml-2 h-5 w-5 text-white" />
                    </button>
                  </div>
                );
              })}
            </div>

          <div className="hidden md:flex items-center gap-8">
            <SocialIcons size="sm" variant="light" />
            <Link href="/projects">
              <button className="bg-[#123563] hover:bg-[#1c3a66] text-white font-bold py-3 px-6 rounded transition duration-300 transform hover:scale-105 border border-white/25 shadow-lg">
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

        <AnimatePresence mode="wait" initial={false}>
          {menuContent && (
            <motion.div
              key={menuContent.title}
              ref={menuRef}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mega-menu fixed left-0 right-0 top-20 w-full bg-white border-t border-blue-100 shadow-2xl z-40 min-h-[320px] overflow-hidden"
              role="menu"
              aria-label={`${menuContent.title} Mega Menu`}
              tabIndex={-1}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setActiveDropdown(null);
              }}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  <div className="lg:col-span-3 bg-[#0B2A57] text-white rounded-lg p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-blue-200 mb-3">
                        {menuContent.title}
                      </p>
                      <h3 className="text-3xl font-semibold mb-4">{menuContent.title}</h3>
                      <p className="text-sm leading-relaxed text-blue-100">
                        {menuContent.description}
                      </p>
                    </div>
                    <Link
                      href={menuContent.cta.href}
                      className="mt-6 inline-flex items-center text-base font-semibold text-white hover:text-blue-200 transition-colors"
                    >
                      {menuContent.cta.label}
                    </Link>
                  </div>

                  <div
                    className={`bg-white rounded-lg p-6 ${
                      menuContent.feature ? "lg:col-span-6" : "lg:col-span-9"
                    }`}
                  >
                    <div
                      className={`grid grid-cols-1 ${menuContent.columns.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}
                    >
                      {menuContent.columns.map((section) => (
                        <div key={section.heading}>
                          <h4 className="text-lg font-semibold text-slate-900 mb-3">{section.heading}</h4>
                          <ul className="space-y-2">
                            {section.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {menuContent.feature && (
                    <div className="lg:col-span-3 bg-[#F5F7FA] rounded-lg p-6 flex flex-col">
                      <div className="relative w-full h-40 rounded-lg overflow-hidden">
                        <Image
                          src={menuContent.feature.image}
                          alt={menuContent.feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 mt-4">
                        {menuContent.feature.title}
                      </h4>
                      <Link
                        href={menuContent.feature.href}
                        className="mt-3 inline-flex items-center text-sm font-semibold text-[#0B2A57] hover:text-[#123563] transition-colors"
                      >
                        {menuContent.feature.cta}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
                {navItems.map((item, index) => {
                  const hasMegaMenu = Boolean(
                    item.hasDropdown && megaMenuContent[item.name as keyof typeof megaMenuContent]
                  );

                  if (hasMegaMenu) {
                    return (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-white hover:text-[#AFC6FF] text-2xl font-bold transition-colors flex items-center justify-between w-full"
                        onClick={() => {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name);
                          setIsOpen(false);
                        }}
                      >
                        {item.name}
                        <ChevronDown className="ml-3 h-6 w-6" />
                      </motion.button>
                    );
                  }

                  return (
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
                  );
                })}
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
    </nav>
  );
};

export default Navbar;