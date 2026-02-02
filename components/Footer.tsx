'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.button
            onClick={scrollToTop}
            className="text-2xl font-bold text-crimson-400 hover:text-crimson-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Anjali
          </motion.button>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <button
              onClick={() => {
                const element = document.getElementById('home');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-crimson-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-crimson-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('experience');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-crimson-400 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('skills');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-crimson-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-crimson-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-crimson-400 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="w-full max-w-xs h-px bg-gray-700"></div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} Anjali — Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="text-crimson-500 fill-crimson-500" size={16} />
            </motion.div>
            <span>& code</span>
          </div>

          <p className="text-gray-500 text-xs text-center">
            Designed & Developed by Anjali
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
