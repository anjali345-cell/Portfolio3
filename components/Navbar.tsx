"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Anjali<span className="text-[#A66A3F]">.</span>
          </motion.button>

          {/* NAV LINKS */}
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

          {/* CTA BUTTON */}
          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#4B2E1E] text-[#FFFDFC] text-sm font-medium shadow-[0_10px_30px_rgba(75,46,30,0.18)] hover:bg-[#3A2417] transition-all duration-300"
          >
            Let's Talk
            <span className="text-base">↗</span>
          </motion.button>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2.5 rounded-xl bg-[#4B2E1E] text-white text-sm font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
