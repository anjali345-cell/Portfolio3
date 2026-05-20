"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, X } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:40px_40px]"></div>

      {/* Gradient orbs - more subtle */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Professional greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Anjali Shrivastava
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
                Frontend Developer & UI Designer
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Crafting pixel-perfect, responsive web applications with modern
                technologies. Passionate about creating seamless user
                experiences that blend aesthetics with functionality.
              </p>
            </motion.div>

            {/* Tech stack badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                (tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {tech}
                  </span>
                ),
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Magnetic>
                <motion.button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                </motion.button>
              </Magnetic>
              <Magnetic>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 shadow-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  Download CV
                </motion.button>
              </Magnetic>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <p className="text-sm font-medium text-slate-600">Connect:</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/anjali345-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/anjali-s-15187b22a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:anjali.sh93026@gmail.com"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
                 <motion.a
                  href="https://x.com/anjali63664"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Professional photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-3 opacity-10"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl -rotate-3 opacity-20"></div>

              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200">
                {/* Professional portrait - using a placeholder that represents a professional woman */}
                <Image
                  src="/profile.jpeg"
                  alt="Anjali Shrivastava"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-200"
              >
                <p className="text-xs font-semibold text-blue-600">
                  Available for Work
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-200"
              >
                <p className="text-xs font-semibold text-purple-600">
                  1+ Years Experience
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium text-slate-600">
              Scroll down
            </span>
            <ArrowDown className="text-blue-600" size={24} />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-slate-100 {
          background-image:
            linear-gradient(to right, #f1f5f9 1px, transparent 1px),
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
