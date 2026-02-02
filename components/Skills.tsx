'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Server, Database } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'crimson',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
      ],
    },
    {
      title: 'Styling & Design',
      icon: Palette,
      color: 'blush',
      skills: [
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Sass/SCSS', level: 85 },
        { name: 'Bootstrap', level: 90 },
        {name: 'shadcn/ui', level: 70 },
        { name: 'Framer Motion', level: 80 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Figma', level: 75 },
      ],
    },
    {
      title: 'Backend & Tools',
      icon: Server,
      color: 'cinnamon',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'REST APIs', level: 80 },
        { name: 'Webpack', level: 70 },
        { name: 'Vite', level: 85 },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'crimson',
      skills: [
        { name: 'MongoDB', level: 65 },
        { name: 'Supabase', level: 65 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-crimson-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A comprehensive set of tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-blush-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-${category.color}-100 rounded-xl flex items-center justify-center`}>
                    <category.icon className={`text-${category.color}-600`} size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 italic">
              Always learning and exploring new technologies to stay current in the ever-evolving web development landscape.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
