'use client';

import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Code2,
  Lightbulb,
  Users,
  Rocket,
} from 'lucide-react';

/* ---------------- EDUCATION CARD ---------------- */

interface EducationCardProps {
  degree: string;
  university: string;
  years: string;
}

const EducationCard = memo(
  ({ degree, university, years }: EducationCardProps) => (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-[#FFFDFC] border border-[#E5D8C9] rounded-[28px] p-8 shadow-[0_10px_40px_rgba(75,46,30,0.06)] transition-all duration-300"
    >
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-2xl bg-[#EFE7DD] flex items-center justify-center flex-shrink-0">
          <GraduationCap
            className="text-[#A66A3F]"
            size={26}
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#A66A3F] mb-2">
            {years}
          </p>

          <h3 className="text-2xl text-[#2B1D16] font-semibold mb-2">
            {degree}
          </h3>

          <p className="text-[#6F6258] leading-7">
            {university}
          </p>
        </div>
      </div>
    </motion.div>
  ),
);

EducationCard.displayName = 'EducationCard';

/* ---------------- ABOUT CARD ---------------- */

interface AboutCardProps {
  icon: React.ComponentType<{
    className?: string;
    size?: string | number;
  }>;
  title: string;
  description: string;
}

const AboutCard = memo(
  ({ icon: Icon, title, description }: AboutCardProps) => (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="bg-[#FFFDFC] border border-[#E5D8C9] rounded-[28px] p-7 shadow-[0_10px_40px_rgba(75,46,30,0.05)]"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#EFE7DD] flex items-center justify-center mb-5">
        <Icon
          className="text-[#A66A3F]"
          size={26}
        />
      </div>

      <h3 className="text-xl font-semibold text-[#2B1D16] mb-3">
        {title}
      </h3>

      <p className="text-[#6F6258] leading-7 text-[15px]">
        {description}
      </p>
    </motion.div>
  ),
);

AboutCard.displayName = 'AboutCard';

/* ---------------- STATS CARD ---------------- */

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ComponentType<{
    className?: string;
    size?: string | number;
  }>;
}

const StatCard = memo(
  ({ number, label, icon: Icon }: StatCardProps) => (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-[#FFFDFC] border border-[#E5D8C9] rounded-[28px] p-8 text-center shadow-[0_10px_40px_rgba(75,46,30,0.05)]"
    >
      <div className="flex justify-center mb-5">
        <div className="w-14 h-14 rounded-2xl bg-[#EFE7DD] flex items-center justify-center">
          <Icon
            className="text-[#A66A3F]"
            size={26}
          />
        </div>
      </div>

      <h4 className="text-4xl font-semibold text-[#2B1D16] mb-2">
        {number}
      </h4>

      <p className="text-[#6F6258]">
        {label}
      </p>
    </motion.div>
  ),
);

StatCard.displayName = 'StatCard';

/* ---------------- MAIN COMPONENT ---------------- */

const AboutContent = memo(() => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const educationItems: EducationCardProps[] = [
    {
      degree: "Master's in Computer Science",
      university:
        'Awadhesh Pratap Singh University, Rewa (MP)',
      years: '2022 - 2024',
    },

    {
      degree: "Bachelor's in Mathematics",
      university:
        'Awadhesh Pratap Singh University, Rewa (MP)',
      years: '2019 - 2022',
    },
  ];

  const skillCards = [
    {
      icon: Code2,
      title: 'Clean Code',
      description:
        'Writing maintainable and scalable applications with modern frontend practices.',
    },

    {
      icon: Users,
      title: 'User Focused',
      description:
        'Designing thoughtful interfaces that feel intuitive and seamless.',
    },

    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description:
        'Turning complex challenges into elegant digital solutions.',
    },

    {
      icon: Rocket,
      title: 'Fast Learner',
      description:
        'Always exploring new technologies and evolving design systems.',
    },
  ];

  const stats = [
    {
      number: '1+',
      label: 'Years Experience of self learning',
      icon: Award,
    },

    {
      number: '20+',
      label: 'Projects Completed',
      icon: Rocket,
    },

    {
      number: '100%',
      label: 'Happy Clients',
      icon: Users,
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-28 bg-[#F7F3EE]"
    >
      {/* background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EFE3D3] rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* SECTION HEADER */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <p className="uppercase tracking-[0.25em] text-sm text-[#A66A3F] mb-5">
              About Me
            </p>

            <h2
              className="text-5xl md:text-6xl text-[#2B1D16] leading-tight max-w-3xl"
              style={{
                fontFamily: 'var(--font-cormorant)',
              }}
            >
              Crafting ideas into digital reality.
            </h2>
          </motion.div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start mb-24">
            {/* LEFT CONTENT */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="bg-[#FFFDFC] border border-[#E5D8C9] rounded-[32px] p-10 shadow-[0_10px_50px_rgba(75,46,30,0.05)]">
                <p className="text-lg leading-9 text-[#6F6258] mb-7">
                  I’m a frontend developer who loves building clean,
                  modern and meaningful web experiences. I enjoy
                  turning complex problems into simple, beautiful and
                  intuitive interfaces.
                </p>

                <p className="text-lg leading-9 text-[#6F6258] mb-7">
                  My journey started with curiosity about how digital
                  products work and evolved into a passion for
                  creating experiences that combine aesthetics with
                  performance.
                </p>

                <p className="text-lg leading-9 text-[#6F6258]">
                  I care deeply about clean architecture, thoughtful
                  interactions and building products that feel alive.
                </p>

                {/* small info cards */}
                <div className="grid sm:grid-cols-3 gap-5 mt-10 pt-10 border-t border-[#E5D8C9]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-[#A66A3F] mb-2">
                      Location
                    </p>

                    <p className="text-[#2B1D16] font-medium">
                      India
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-[#A66A3F] mb-2">
                      Education
                    </p>

                    <p className="text-[#2B1D16] font-medium">
                      M.Sc CS
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-[#A66A3F] mb-2">
                      Availability
                    </p>

                    <p className="text-[#2B1D16] font-medium">
                      Open to Work
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CARDS */}
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-5"
            >
              {skillCards.map((card, index) => (
                <div
                  key={card.title}
                  className={index % 2 === 1 ? 'sm:mt-8' : ''}
                >
                  <AboutCard {...card} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* STATS */}
          <motion.div
            variants={itemVariants}
            className="mb-24"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  {...stat}
                />
              ))}
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div variants={itemVariants}>
            <div className="flex items-end justify-between flex-wrap gap-5 mb-10">
              <div>
                <p className="uppercase tracking-[0.2em] text-sm text-[#A66A3F] mb-3">
                  Education
                </p>

                <h3
                  className="text-4xl text-[#2B1D16]"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                  }}
                >
                  My Academic Journey
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {educationItems.map((edu) => (
                <EducationCard
                  key={edu.degree}
                  {...edu}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

AboutContent.displayName = 'AboutContent';

const About = memo(AboutContent);

export default About;