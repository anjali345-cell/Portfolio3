'use client';

import { memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Heart, Code2 } from 'lucide-react';

// ✅ Define prop types for EducationCard
interface EducationCardProps {
  degree: string;
  university: string;
  years: string;
}

const EducationCard = memo(({ degree, university, years }: EducationCardProps) => (
  <div className="bg-gradient-to-br from-crimson-50 to-white p-8 md:p-12 rounded-3xl shadow-xl">
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-crimson-600 rounded-2xl flex items-center justify-center">
          <GraduationCap className="text-white" size={32} />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{degree}</h3>
        <div className="space-y-2">
          <p className="text-gray-700">{university}</p>
          <p className="text-gray-600">{years}</p>
        </div>
      </div>
    </div>
  </div>
));
EducationCard.displayName = 'EducationCard';

// ✅ Define prop types for AboutCard
interface AboutCardProps {
  icon: React.ComponentType<{ className?: string; size?: string | number }>;
  title: string;
  description: string;
  gradientClass: string;
}

const AboutCard = memo(({ icon: Icon, title, description, gradientClass }: AboutCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`p-6 rounded-2xl shadow-lg ${gradientClass}`}
  >
    <Icon className="text-crimson-600 mb-4" size={32} />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
));
AboutCard.displayName = 'AboutCard';

const AboutContent = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  const educationItems: EducationCardProps[] = [
    {
      degree: "Bachelor's in Mathematics",
      university: 'Awadhesh Pratap Singh University, Rewa (MP)',
      years: '2019 - 2022',
    },
    {
      degree: "Master's in Computer Science",
      university: 'Awadhesh Pratap Singh University, Rewa (MP)',
      years: '2022 - 2024',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-crimson-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hello! I&apos;m Anjali, a passionate Frontend Developer with a focus on the MERN stack.
                I specialize in creating beautiful, responsive, and user-friendly web applications
                that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My journey in web development started with a curiosity about how websites work,
                and it has evolved into a career where I combine creativity with technical skills
                to build digital solutions that make a difference.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to
                open-source projects, or learning about the latest frontend technologies.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <AboutCard
                  icon={Code2}
                  title="Clean Code"
                  description="Writing maintainable and scalable code"
                  gradientClass="bg-gradient-to-br from-crimson-50 to-blush-50"
                />
                <AboutCard
                  icon={Heart}
                  title="User-Focused"
                  description="Designing with users in mind"
                  gradientClass="bg-gradient-to-br from-blush-50 to-cinnamon-50 mt-8"
                />
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="space-y-4">
            {educationItems.map((edu) => (
              <EducationCard key={edu.degree} {...edu} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
AboutContent.displayName = 'AboutContent';

const About = memo(AboutContent);
export default About;