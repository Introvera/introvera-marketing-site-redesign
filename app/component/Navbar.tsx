"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#aboutus" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("#");

  const toggleNavbar = (): void => setMobileDrawerOpen((v) => !v);

  // Hide/Show Navbar on scroll + close drawer if scrolling
  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      // Close mobile drawer when user scrolls
      if (mobileDrawerOpen) {
        setMobileDrawerOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileDrawerOpen]);

  // Extract section IDs from navItems
  const observedIds = useMemo<string[]>(
    () =>
      navItems
        .map((n) => (n.href.startsWith("#") ? n.href.slice(1) : ""))
        .filter(Boolean),
    []
  );

  // Observe visible sections
  useEffect(() => {
    if (typeof window === "undefined" || observedIds.length === 0) return;

    const elements = observedIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const id = `#${visible[0].target.id}`;
          setActiveSection(id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [observedIds]);

  // Smooth scroll to section
  const handleNavClick =
    (href: string) => (e: MouseEvent<HTMLAnchorElement>): void => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const id = href.slice(1);
        const target = id ? document.getElementById(id) : document.body;

        if (target) {
          const y =
            (target as HTMLElement).getBoundingClientRect().top +
            window.pageYOffset -
            72;
          window.scrollTo({ top: y, behavior: "smooth" });
        } else {
          window.location.hash = href;
        }
        setMobileDrawerOpen(false);
      }
    };

  const linkBase = "transition-colors duration-200";
  const linkInactive = "text-neutral-300 hover:text-white";
  const linkActive = "text-white font-medium underline underline-offset-8";

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full flex items-center justify-between h-[68px] px-4 sm:px-6 lg:px-24 bg-black/20 backdrop-blur-md border-b border-gray-800"
    >
      <div className="container mx-auto relative lg:text-sm w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image
  src="/icons/logocolor.svg"
  alt="Logo"
  width={40}       
  height={40}
  priority
  className="mr-2 w-24 h-24 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-30 lg:h-30"
/>

          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick(item.href)}
                    className={`${linkBase} ${
                      isActive ? linkActive : linkInactive
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end ">
            <button
              onClick={toggleNavbar}
              aria-label="Toggle menu"
              type="button"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-[68px] z-20 bg-black/95 backdrop-blur-lg w-full p-12 flex flex-col justify-center items-center lg:hidden rounded-b-2xl transition-all duration-300">
            <ul className="text-center">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href} className="py-4">
                    <a
                      href={item.href}
                      onClick={handleNavClick(item.href)}
                      className={`${linkBase} ${
                        isActive ? "text-white font-medium" : "text-neutral-300"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
