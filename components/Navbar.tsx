"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "bookshelf",
        "contact",
      ];

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "bookshelf", label: "Bookshelf" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[#F7F3EE]/80 border-b border-[#E5D8C9]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-24 flex items-center justify-between">

            {/* LOGO */}
            <motion.button
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="text-[2rem] font-semibold tracking-tight text-[#2B1D16]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Anjali<span className="text-[#A66A3F]">.</span>
            </motion.button>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-[#4B2E1E]"
                      : "text-[#6F6258] hover:text-[#A66A3F]"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                      className="absolute inset-0 rounded-full bg-[#EFE7DD]"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            {/* CTA DESKTOP */}
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#4B2E1E] text-white text-sm font-medium shadow-[0_10px_30px_rgba(75,46,30,0.18)] hover:bg-[#3A2417] transition-all duration-300"
            >
              Let&apos;s Talk <span className="text-base">↗</span>
            </motion.button>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(true)}
                className="text-[#2B1D16] text-3xl"
              >
                ☰
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#F7F3EE]/95 backdrop-blur-xl"
        >
          <div className="flex flex-col h-full px-8 py-10">

            {/* TOP BAR */}
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-[#2B1D16]">
                Menu
              </span>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-3xl text-[#2B1D16]"
              >
                ✕
              </button>
            </div>

            {/* LINKS */}
            <div className="mt-16 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMenuOpen(false);
                  }}
                  className={`text-left text-2xl font-medium transition-all ${
                    activeSection === item.id
                      ? "text-[#4B2E1E]"
                      : "text-[#6F6258]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setMenuOpen(false);
                }}
                className="w-full py-4 rounded-2xl bg-[#4B2E1E] text-white text-sm font-medium"
              >
                Let&apos;s Talk ↗
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;