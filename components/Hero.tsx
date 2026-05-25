"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  X,
} from "lucide-react";
import Image from "next/image";
import Magnetic from "./ui/magnetic";

const Hero = () => {
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

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F7F3EE]"
    >
      {/* subtle radial background */}
      <div className="absolute inset-0 opacity-[0.35]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#E8D8C5] blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EFE3D3] blur-3xl rounded-full" />
      </div>

      {/* decorative curves */}
      <div className="absolute top-32 right-10 w-[500px] h-[500px] border border-[#D9C2A7]/40 rounded-full" />
      <div className="absolute bottom-20 left-[-150px] w-[400px] h-[400px] border border-[#D9C2A7]/30 rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* small intro */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[0.25em] text-sm text-[#A66A3F] font-medium mb-6"
            >
              Hello, I'm
            </motion.p>

            {/* name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[4rem] md:text-[5.5rem] leading-[0.95] font-semibold text-[#2B1D16] mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Anjali{" "}
              <span className="text-[#A66A3F]">Shrivastava</span>
            </motion.h1>

            {/* role */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-medium text-[#4B2E1E] mb-6"
            >
              Frontend Developer & UI Designer
            </motion.h2>

            {/* description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg leading-9 text-[#6F6258] max-w-xl mb-10"
            >
              I build accessible, responsive and user friendly web
              applications that combine design and technology to
              create smooth digital experiences.
            </motion.p>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-5 mb-12"
            >
              <Magnetic>
                <motion.button
                  onClick={() => scrollToSection("projects")}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-2xl bg-[#4B2E1E] text-[#FFFDFC] font-medium shadow-[0_10px_30px_rgba(75,46,30,0.18)] hover:bg-[#3A2417] transition-all duration-300 flex items-center gap-2"
                >
                  View My Work
                </motion.button>
              </Magnetic>

              <Magnetic>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-[#4B2E1E] font-medium hover:text-[#A66A3F] transition-colors"
                >
                  <Download size={18} />
                  Download Resume
                </motion.button>
              </Magnetic>
            </motion.div>

            {/* socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-5"
            >
              {[
                {
                  icon: <Github size={18} />,
                  href: "https://github.com/anjali345-cell",
                },
                {
                  icon: <Linkedin size={18} />,
                  href: "https://www.linkedin.com/in/anjali-s-15187b22a/",
                },
                {
                  icon: <Mail size={18} />,
                  href: "mailto:anjali.sh93026@gmail.com",
                },
                {
                  icon: <X size={18} />,
                  href: "https://x.com/anjali63664",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl border border-[#E5D8C9] bg-[#FFFDFC] flex items-center justify-center text-[#4B2E1E] hover:bg-[#4B2E1E] hover:text-white transition-all duration-300 shadow-sm"
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* image container */}
              <div className="relative w-[320px] h-[420px] md:w-[430px] md:h-[540px] rounded-[2rem] overflow-hidden bg-[#EADFD3] shadow-[0_25px_80px_rgba(75,46,30,0.18)]">
                <Image
                  src="/anjali-img2.png"
                  alt="Anjali Shrivastava"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -right-6 bg-[#FFFDFC] border border-[#E5D8C9] rounded-2xl px-5 py-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div>
                    <p className="text-sm font-medium text-[#2B1D16]">
                      Available for
                    </p>
                    <p className="text-sm text-[#6F6258]">
                      opportunities
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* experience badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                className="absolute top-6 -left-10 bg-[#FFFDFC] border border-[#E5D8C9] rounded-2xl px-5 py-4 shadow-xl"
              >
                <p className="text-2xl font-semibold text-[#A66A3F]">
                  1+
                </p>
                <p className="text-sm text-[#6F6258]">
                  Years Experience
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-[#6F6258]">
              Scroll Down
            </span>

            <ArrowDown
              size={20}
              className="text-[#A66A3F]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;