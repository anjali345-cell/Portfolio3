'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      duration: 'November 2025 - August 2026',
      description: 'Developed responsive web applications using React and Tailwind CSS. Collaborated with the design team to implement pixel-perfect UI components and improved website performance by 40%.',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Git'],
    },
    {
      role: 'Web Development Intern',
      company: 'Digital Innovations Inc.',
      duration: 'January 2023 - May 2023',
      description: 'Built and maintained multiple client websites using HTML, CSS, and JavaScript. Implemented responsive designs and ensured cross-browser compatibility across all projects.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    },
    {
      role: 'MERN Stack Developer',
      company: 'University Capstone Project',
      duration: 'August 2023 - December 2023',
      description: 'Led a team of 4 to develop a full-stack e-commerce platform using the MERN stack. Implemented user authentication, payment integration, and an admin dashboard.',
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js'],
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-blush-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-crimson-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-crimson-200 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 ${
                    index % 2 === 0 ? '' : ''
                  }`}>
                    <div className="w-4 h-4 bg-crimson-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-20 md:ml-0 bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${
                    index % 2 === 0 ? 'md:mr-auto md:w-5/12' : 'md:ml-auto md:w-5/12'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="text-crimson-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-crimson-600 font-semibold mb-2">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.duration}</span>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-crimson-50 text-crimson-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
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
