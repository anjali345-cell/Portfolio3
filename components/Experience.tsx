'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState, Suspense, lazy } from 'react';
import { Zap, MapPin, TrendingUp } from 'lucide-react';

// Lazy load Three.js component
const ThreeBackground = lazy(() => import('../components/ui/threebackground'));

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showThree, setShowThree] = useState(false);

  // Only load Three.js when component is in view
  useEffect(() => {
    if (isInView) {
      // Add a small delay to prioritize content rendering first
      const timer = setTimeout(() => {
        setShowThree(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Freelancing',
      location: 'Remote',
      duration: 'March 2026 - Present',
      description: 'Delivered end-to-end web solutions for clients across various industries. Utilized React, Next.js, and Tailwind CSS to build responsive and performant applications. ',
      achievements: [
        'Successfully completed 3+ projects with client satisfaction rate of 100%',
        'Created 20+ reusable components',
        'Reduced load time by 2 seconds',
      ],
      skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'GitHub'],
      gradient: 'from-indigo-400 via-cyan-500 to-rose-600',
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Ambispine Technologies',
      location: 'Remote',
      duration: 'Nov 2025 - Jan 2026',
      description: 'Developed responsive web applications using React and Tailwind CSS. Collaborated with design team to implement pixel-perfect UI components.',
      achievements: [
        'Improved website performance by 40%',
        'Created 20+ reusable components',
        'Reduced load time by 2 seconds',
      ],
      skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'GitHub'],
      gradient: 'from-purple-400 via-pink-500 to-rose-600',
    },
    {
      role: 'Web developer',
      company: 'Maksoft IT Solutions',
      location: 'Rewa, MP',
      duration: 'Dec 2024 - Nov 2025',
      description: 'Developed and maintained web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built 15+ responsive web applications',
        'Improved code quality by 30%',
        'Mentored 3 junior developers',
      ],
      skills: ['React', 'Next.js', 'JavaScript', 'CSS', 'GitHub'],
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    },
    {
      role: 'Web Developer Intern',
      company: 'Tickyour list',
      location: 'Remote',
      duration: 'Mar 2025 - Jun 2025',
      description: 'Built and maintained multiple client websites using HTML, CSS, and JavaScript. Implemented responsive designs and ensured cross-browser compatibility.',
      achievements: [
        'Delivered 10+ client projects',
        '100% client satisfaction rate',
        'Reduced bugs by 50%',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100, rotateY: -20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
      ref={ref}
    >
      {/* Three.js Background - Lazy loaded */}
      {showThree && (
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>
      )}

      {/* Static fallback gradient (shows while Three.js loads) */}
      {!showThree && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/30 to-slate-950/50"></div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div
            variants={cardVariants}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              className="inline-block mb-4"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-blue-300 text-sm font-medium">Career Timeline</span>
              </div>
            </motion.div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                EXPERIENCE
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Transforming ideas into reality through code and creativity
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  {/* Animated border gradient */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${exp.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`}></div>
                  
                  {/* Card */}
                  <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden">
                    {/* Top accent bar */}
                    <div className={`h-1 bg-gradient-to-r ${exp.gradient}`}></div>
                    
                    <div className="p-8 md:p-10">
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Left: Role & Company */}
                        <div className="md:col-span-2">
                          <div className="flex items-start gap-4 mb-6">
                            <motion.div
                              whileHover={{ rotate: 180, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                            >
                              <Zap className="text-white" size={24} />
                            </motion.div>
                            
                            <div className="flex-1">
                              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                {exp.role}
                              </h3>
                              <div className="flex flex-wrap items-center gap-3 text-slate-300">
                                <span className="font-semibold">{exp.company}</span>
                                <span className="text-slate-600">•</span>
                                <span className="flex items-center gap-1 text-sm">
                                  <MapPin size={14} />
                                  {exp.location}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-slate-300 leading-relaxed mb-6">
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          <div className="space-y-2 mb-6">
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: index * 0.1 + i * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <TrendingUp className="text-green-400 flex-shrink-0 mt-1" size={16} />
                                <span className="text-slate-400 text-sm">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <motion.span
                                key={i}
                                whileHover={{ y: -2 }}
                                className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium hover:border-blue-500/50 transition-all"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Right: Duration */}
                        <div className="flex md:flex-col md:items-end md:justify-between">
                          <div className="text-right">
                            <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${exp.gradient} bg-opacity-10 border border-slate-700`}>
                              <p className="text-slate-300 font-mono text-sm">{exp.duration}</p>
                            </div>
                          </div>
                          
                          {/* Large index number */}
                          <div className={`text-8xl md:text-9xl font-black bg-gradient-to-br ${exp.gradient} bg-clip-text text-transparent opacity-10`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom glow effect */}
                    <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${exp.gradient} opacity-50`}></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;