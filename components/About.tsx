// 'use client';

// import { memo } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { GraduationCap, Heart, Code2 } from 'lucide-react';

// // ✅ Define prop types for EducationCard
// interface EducationCardProps {
//   degree: string;
//   university: string;
//   years: string;
// }

// const EducationCard = memo(({ degree, university, years }: EducationCardProps) => (
//   <div className="bg-gradient-to-br from-crimson-50 to-white p-8 md:p-12 rounded-3xl shadow-xl">
//     <div className="flex items-start gap-6">
//       <div className="flex-shrink-0">
//         <div className="w-16 h-16 bg-crimson-600 rounded-2xl flex items-center justify-center">
//           <GraduationCap className="text-white" size={32} />
//         </div>
//       </div>
//       <div className="flex-1">
//         <h3 className="text-2xl font-bold text-gray-900 mb-3">{degree}</h3>
//         <div className="space-y-2">
//           <p className="text-gray-700">{university}</p>
//           <p className="text-gray-600">{years}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// ));
// EducationCard.displayName = 'EducationCard';

// // ✅ Define prop types for AboutCard
// interface AboutCardProps {
//   icon: React.ComponentType<{ className?: string; size?: string | number }>;
//   title: string;
//   description: string;
//   gradientClass: string;
// }

// const AboutCard = memo(({ icon: Icon, title, description, gradientClass }: AboutCardProps) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     className={`p-6 rounded-2xl shadow-lg ${gradientClass}`}
//   >
//     <Icon className="text-crimson-600 mb-4" size={32} />
//     <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//     <p className="text-gray-600 text-sm">{description}</p>
//   </motion.div>
// ));
// AboutCard.displayName = 'AboutCard';

// const AboutContent = memo(() => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   const educationItems: EducationCardProps[] = [
//     {
//       degree: "Bachelor's in Mathematics",
//       university: 'Awadhesh Pratap Singh University, Rewa (MP)',
//       years: '2019 - 2022',
//     },
//     {
//       degree: "Master's in Computer Science",
//       university: 'Awadhesh Pratap Singh University, Rewa (MP)',
//       years: '2022 - 2024',
//     },
//   ];

//   return (
//     <section id="about" className="py-20 bg-white" ref={ref}>
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <motion.div
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           variants={containerVariants}
//         >
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               About Me
//             </h2>
//             <div className="w-20 h-1 bg-crimson-600 mx-auto rounded-full" />
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//             <motion.div variants={itemVariants}>
//               <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                 Hello! I&apos;m Anjali, a passionate Frontend Developer with a focus on the MERN stack.
//                 I specialize in creating beautiful, responsive, and user-friendly web applications
//                 that deliver exceptional user experiences.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                 My journey in web development started with a curiosity about how websites work,
//                 and it has evolved into a career where I combine creativity with technical skills
//                 to build digital solutions that make a difference.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to
//                 open-source projects, or learning about the latest frontend technologies.
//               </p>
//             </motion.div>

//             <motion.div variants={itemVariants} className="relative">
//               <div className="grid grid-cols-2 gap-4">
//                 <AboutCard
//                   icon={Code2}
//                   title="Clean Code"
//                   description="Writing maintainable and scalable code"
//                   gradientClass="bg-gradient-to-br from-crimson-50 to-blush-50"
//                 />
//                 <AboutCard
//                   icon={Heart}
//                   title="User-Focused"
//                   description="Designing with users in mind"
//                   gradientClass="bg-gradient-to-br from-blush-50 to-cinnamon-50 mt-8"
//                 />
//               </div>
//             </motion.div>
//           </div>

//           <motion.div variants={itemVariants} className="space-y-4">
//             {educationItems.map((edu) => (
//               <EducationCard key={edu.degree} {...edu} />
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// });
// AboutContent.displayName = 'AboutContent';

// const About = memo(AboutContent);
// export default About;

'use client';

import { memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Code2, Lightbulb, Users, Rocket } from 'lucide-react';

// ✅ Define prop types for EducationCard
interface EducationCardProps {
  degree: string;
  university: string;
  years: string;
}

const EducationCard = memo(({ degree, university, years }: EducationCardProps) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.01 }}
    className="bg-white border border-slate-200 p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
          <GraduationCap className="text-white" size={28} />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{degree}</h3>
        <div className="space-y-1">
          <p className="text-slate-700 font-medium">{university}</p>
          <p className="text-slate-500 text-sm font-medium">{years}</p>
        </div>
      </div>
    </div>
  </motion.div>
));
EducationCard.displayName = 'EducationCard';

// ✅ Define prop types for AboutCard
interface AboutCardProps {
  icon: React.ComponentType<{ className?: string; size?: string | number }>;
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
}

const AboutCard = memo(({ icon: Icon, title, description, iconColor, bgColor }: AboutCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ duration: 0.2 }}
    className={`${bgColor} p-6 rounded-xl shadow-md hover:shadow-lg border border-slate-100 transition-all duration-300`}
  >
    <div className={`w-12 h-12 ${iconColor} rounded-lg flex items-center justify-center mb-4`}>
      <Icon className="text-white" size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
));
AboutCard.displayName = 'AboutCard';

// Stats card component
interface StatCardProps {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: string | number }>;
}

const StatCard = memo(({ number, label, icon: Icon }: StatCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-slate-200 text-center"
  >
    <div className="flex justify-center mb-3">
      <Icon className="text-blue-600" size={32} />
    </div>
    <h4 className="text-3xl font-bold text-slate-900 mb-1">{number}</h4>
    <p className="text-sm font-medium text-slate-600">{label}</p>
  </motion.div>
));
StatCard.displayName = 'StatCard';

const AboutContent = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const educationItems: EducationCardProps[] = [
    {
      degree: "Master's in Computer Science",
      university: 'Awadhesh Pratap Singh University, Rewa (MP)',
      years: '2022 - 2024',
    },
    {
      degree: "Bachelor's in Mathematics",
      university: 'Awadhesh Pratap Singh University, Rewa (MP)',
      years: '2019 - 2022',
    },
  ];

  const skillCards = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following industry best practices",
      iconColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      bgColor: "bg-blue-50/50"
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Designing intuitive interfaces with accessibility and user experience at the forefront",
      iconColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      bgColor: "bg-purple-50/50"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Tackling complex challenges with creative solutions and innovative thinking",
      iconColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50/50"
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Constantly exploring new technologies and adapting to evolving web standards",
      iconColor: "bg-gradient-to-br from-pink-500 to-pink-600",
      bgColor: "bg-pink-50/50"
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Projects Completed", icon: Rocket },
    { number: "30+", label: "Happy Clients", icon: Users },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:40px_40px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Get to know me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left side - Text content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Anjali Sharma</span>
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  A passionate Frontend Developer specializing in the MERN stack. I create beautiful, 
                  responsive, and user-friendly web applications that deliver exceptional user experiences.
                </p>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                My journey in web development started with curiosity about how websites work, 
                and it has evolved into a career where I combine creativity with technical expertise 
                to build digital solutions that make a real difference.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                technologies and best practices. Every project is an opportunity to learn something new 
                and push the boundaries of what's possible on the web.
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">When I'm not coding:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">Exploring new design trends and UI/UX principles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">Contributing to open-source projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">Learning about emerging frontend technologies</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right side - Skill cards */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCards.map((card, index) => (
                  <div key={card.title} className={index % 2 === 1 ? 'sm:mt-6' : ''}>
                    <AboutCard {...card} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Education</h3>
              <p className="text-slate-600">My academic journey</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {educationItems.map((edu) => (
                <EducationCard key={edu.degree} {...edu} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-slate-100 {
          background-image: linear-gradient(to right, #f1f5f9 1px, transparent 1px),
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
});
AboutContent.displayName = 'AboutContent';

const About = memo(AboutContent);
export default About;