"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { markets } from "@/data/markets";
import { companyInfo } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navWrapperRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const portalRoot = typeof document !== "undefined" ? document.body : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setActiveDropdown(null);
    setIsOpen((prev) => !prev);
  };

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

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isOpen) {
          setIsOpen(false);
          mobileMenuButtonRef.current?.focus();
        }
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !mobileMenuRef.current) {
      return;
    }

    const focusableElements = Array.from(
      mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );

    focusableElements[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        mobileMenuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) {
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navItems = [
    { name: "About", href: "/about", hasDropdown: true },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/projects", hasDropdown: true },
    { name: "Process", href: "/process", hasDropdown: false },
    { name: "Careers", href: "/careers", hasDropdown: false },
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
            { name: "Team", href: "/about/team" },
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
        image: "/images/about/subcontractor-bg.png",
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
            { name: "Subcontracting", href: "/about/become-a-subcontractor" },
          ],
        },
      ],
      feature: {
        title: "Safety & Quality Planning",
        href: "/safety-quality-planning",
        image: "/images/about/safety-quality-bg.png",
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
            { name: "Featured Projects", href: "/markets/affordable-housing" },
            { name: "Project Map", href: "/projects/map" },
            { name: "Upcoming Projects", href: "/projects/upcoming" },
          ],
        },
      ],
      feature: {
        title: "Project Gallery",
        href: "/gallery",
        image: "/images/about/project-gallery-bg.png",
        cta: "View Gallery",
      },
    },
  } as const;

  const menuContent = activeDropdown
    ? megaMenuContent[activeDropdown as keyof typeof megaMenuContent]
    : null;

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const hasDarkHeroHeader =
    isHomePage ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/careers" ||
    pathname === "/process" ||
    pathname.startsWith("/about/") ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/markets/");
  const useTransparentHeader = hasDarkHeroHeader && !isScrolled && !isOpen;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsOpen(false);
      setActiveDropdown(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("mobile-menu-open");
      const previousOverflow = body.style.overflow;
      const previousTouchAction = body.style.touchAction;
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
      return () => {
        body.classList.remove("mobile-menu-open");
        body.style.overflow = previousOverflow;
        body.style.touchAction = previousTouchAction;
      };
    }

    body.classList.remove("mobile-menu-open");
    body.style.overflow = "";
    body.style.touchAction = "";
    return undefined;
  }, [isOpen]);

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Determine navbar background based on route and scroll state
  const getNavbarClasses = () => {
    if (!useTransparentHeader) {
      return "bg-[#111214]/96 border-b border-white/10 backdrop-blur";
    }
    return "bg-transparent border-b border-transparent";
  };

  const isMobileLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[90] transition-colors duration-300 ease-in-out ${getNavbarClasses()}`}>
      <div
        ref={navWrapperRef}
        className="relative"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <div className="mr-6 flex-shrink-0 md:mr-12">
              <Link
                href="/"
                onClick={handleLogoClick}
                className="logo-link hover:opacity-80 transition-opacity duration-300 bg-none border-none p-0 cursor-pointer block"
                aria-label="Home"
              >
                <Image
                  src="/logo.png"
                  alt="Ashlaur Construction"
                  width={196}
                  height={72}
                  className="h-9 w-auto md:h-11"
                  priority
                  unoptimized
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const hasMegaMenu = Boolean(
                  item.hasDropdown && megaMenuContent[item.name as keyof typeof megaMenuContent]
                );

                if (!hasMegaMenu) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-white/75"
                    >
                      {item.name}
                    </Link>
                  );
                }

                return (
                  <div key={item.name} className="relative" onMouseEnter={() => setActiveDropdown(item.name)}>
                    <button
                      className="nav-link flex items-center px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-white/75"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.name}
                      type="button"
                      onFocus={() => setActiveDropdown(item.name)}
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                    >
                      {item.name}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Right side: Social Icons + CTA + Mobile Menu */}
            <div className="flex items-center gap-4 md:gap-5">
              {/* Mobile menu button */}
              <button
                ref={mobileMenuButtonRef}
                onClick={toggleMobileMenu}
                className="mobile-menu-toggle inline-flex min-h-11 min-w-11 items-center justify-center p-2 text-white transition-colors hover:text-white/75 md:hidden"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-nav-panel"
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
              className="mega-menu fixed left-0 right-0 top-20 w-full bg-background border-t border-border z-40 min-h-[320px] overflow-hidden"
              role="menu"
              aria-label={`${menuContent.title} Mega Menu`}
              tabIndex={-1}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setActiveDropdown(null);
              }}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  <div className="lg:col-span-3 border-r border-border pr-6 flex flex-col justify-between">
                    <div>
                      <p className="section-label mb-3">
                        {menuContent.title}
                      </p>
                      <h3 className="display-lg text-4xl mb-4 text-foreground">{menuContent.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {menuContent.description}
                      </p>
                    </div>
                    <Link
                      href={menuContent.cta.href}
                      className="mt-6 btn-editorial-quiet"
                    >
                      {menuContent.cta.label.replace(" →", "")} <span className="btn-arrow">→</span>
                    </Link>
                  </div>

                  <div
                    className={`p-6 ${
                      menuContent.feature ? "lg:col-span-6" : "lg:col-span-9"
                    }`}
                  >
                    <div
                      className={`grid grid-cols-1 ${menuContent.columns.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}
                    >
                      {menuContent.columns.map((section) => (
                        <div key={section.heading}>
                          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted mb-3">{section.heading}</h4>
                          <ul className="space-y-2">
                            {section.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="text-sm text-foreground/85 hover:text-primary transition-colors"
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
                    <div className="lg:col-span-3 border-l border-border pl-6 flex flex-col">
                      <div className="relative w-full h-44 overflow-hidden image-reveal">
                        <Image
                          src={menuContent.feature.image}
                          alt={menuContent.feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mt-4">
                        {menuContent.feature.title}
                      </h4>
                      <Link
                        href={menuContent.feature.href}
                        className="mt-3 btn-editorial-quiet"
                      >
                        {menuContent.feature.cta} <span className="btn-arrow">→</span>
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
      {portalRoot &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
                className="fixed inset-0 z-[120] h-[100dvh] bg-[#111214] text-[#f5f3ef] md:hidden"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
                  id="mobile-nav-panel"
                  ref={mobileMenuRef}
                  className="absolute inset-0 flex h-full w-full flex-col px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    className="absolute right-4 top-2 inline-flex min-h-11 min-w-11 items-center justify-center text-white hover:text-white/75"
                    onClick={() => {
                      setIsOpen(false);
                      mobileMenuButtonRef.current?.focus();
                    }}
                  >
                    <X className="h-8 w-8" />
                  </button>

                  <div className="flex flex-col items-start gap-4">
                    {navItems.map((item, index) => {
                      return (
                        <motion.div
                          key={item.name}
                          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 14 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.04, duration: 0.2 }}
                        >
                          <Link
                            href={item.href}
                            className={`mobile-menu-link inline-flex min-h-11 items-center text-[1.2rem] font-semibold uppercase tracking-[0.09em] transition-colors ${isMobileLinkActive(item.href) ? "text-[#f5f3ef] underline decoration-white/40 underline-offset-8" : "text-[#d5d1ca] hover:text-[#f5f3ef]"}`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                    <Link href="/projects">
                      <motion.button
                        initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.24, duration: 0.22 }}
                        className="btn-editorial mt-6 text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        See Projects <span className="btn-arrow">→</span>
                      </motion.button>
                    </Link>
                  </div>

                  <div className="mt-auto border-t border-white/15 pt-6">
                    <div className="space-y-3 text-sm text-[#d5d1ca]">
                      <a
                        href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
                        className="inline-flex min-h-11 items-center text-[#f5f3ef] hover:text-white/80"
                        onClick={() => trackEvent("phone_click", { source: "mobile_menu" })}
                      >
                        {companyInfo.phone}
                      </a>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="inline-flex min-h-11 items-center text-[#d5d1ca] hover:text-[#f5f3ef]"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                    <div className="mt-4">
                      <SocialIcons size="sm" variant="light" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          portalRoot
        )}
    </nav>
  );
};

export default Navbar;