// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Code2, Palette, Server, Database } from 'lucide-react';
// // import { Skiper40 } from '@/components/ui/skiper-ui/skiper31';

// const Skills = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   const skillCategories = [
//     {
//       title: 'Frontend Development',
//       icon: Code2,
//       color: 'crimson',
//       skills: [
//         { name: 'HTML5', level: 95 },
//         { name: 'CSS3', level: 95 },
//         { name: 'JavaScript', level: 90 },
//         { name: 'React.js', level: 90 },
//         { name: 'Next.js', level: 85 },
//         { name: 'TypeScript', level: 80 },
//       ],
//     },
//     {
//       title: 'Styling & Design',
//       icon: Palette,
//       color: 'blush',
//       skills: [
//         { name: 'Tailwind CSS', level: 95 },
//         { name: 'Sass/SCSS', level: 85 },
//         { name: 'Bootstrap', level: 90 },
//         {name: 'shadcn/ui', level: 70 },
//         { name: 'Framer Motion', level: 80 },
//         { name: 'Responsive Design', level: 95 },
//         { name: 'Figma', level: 75 },
//       ],
//     },
//     {
//       title: 'Backend & Tools',
//       icon: Server,
//       color: 'cinnamon',
//       skills: [
//         { name: 'Node.js', level: 75 },
//         { name: 'Express.js', level: 70 },
//         { name: 'Git & GitHub', level: 90 },
//         { name: 'REST APIs', level: 80 },
//         { name: 'Webpack', level: 70 },
//         { name: 'Vite', level: 85 },
//       ],
//     },
//     {
//       title: 'Database',
//       icon: Database,
//       color: 'crimson',
//       skills: [
//         { name: 'MongoDB', level: 65 },
//         { name: 'Supabase', level: 65 },
//       ],
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
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

//   return (
//     <section id="skills" className="py-20 bg-white" ref={ref}>
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <motion.div
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           variants={containerVariants}
//         >
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Skills & Technologies
//             </h2>
//             <div className="w-20 h-1 bg-crimson-600 mx-auto rounded-full"></div>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               A comprehensive set of tools and technologies I use to bring ideas to life
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {skillCategories.map((category, categoryIndex) => (
//               <motion.div
//                 key={categoryIndex}
//                 variants={itemVariants}
//                 whileHover={{ y: -5 }}
//                 className="bg-gradient-to-br from-white to-blush-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
//               >
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className={`w-14 h-14 bg-${category.color}-100 rounded-xl flex items-center justify-center`}>
//                     <category.icon className={`text-${category.color}-600`} size={28} />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
//                 </div>

//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div key={skillIndex}>
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-gray-700 font-medium">{skill.name}</span>
//                         <span className="text-gray-500 text-sm">{skill.level}%</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
//                         <motion.div
//                           className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-full`}
//                           initial={{ width: 0 }}
//                           animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
//                           transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             variants={itemVariants}
//             className="mt-12 text-center"
//           >
//             <p className="text-gray-600 italic">
//               Always learning and exploring new technologies to stay current in the ever-evolving web development landscape.
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { CharacterV1, CharacterV2, CharacterV3 } from "./ui/skiper-ui/skiper31";

const Skills = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);
  const targetRef4 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
  });
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: targetRef4,
  });

  const chars = ["M", "Y", " ", "S", "K", "I", "L", "L", "S"];
  const centerIndex = Math.floor(chars.length / 2);

  const frontendIcons = [
    "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=102838&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=123603&format=png&color=000000", 
    "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=H997wGMPVphe&format=png&color=000000",
    "https://skiper-ui.com/mac/Github.png",
  ];
  const frontendCenterIndex = Math.floor(frontendIcons.length / 2);

  const backendIcons = [
    "https://skiper-ui.com/mac/Postman.png",
    "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
    "https://skiper-ui.com/mac/Monog.png",
    "https://img.icons8.com/?size=100&id=grZaE9tjqDyr&format=png&color=000000",
  ];
  const backendCenterIndex = Math.floor(backendIcons.length / 2);

  const toolIcons = [
    "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=rD15EcpCkinR&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=2xFS7aynbwiR&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000",
  ];
  const toolCenterIndex = Math.floor(toolIcons.length / 2);

  return (
    <section id="skills">
      <main className="w-full bg-white">
        {/* Scroll indicator - responsive positioning and sizing */}
        <div className="absolute left-1/2 top-16 z-10 grid -translate-x-1/2 content-start justify-items-center gap-4 text-center text-black sm:top-20 sm:gap-6 md:top-22">
          <span className="relative max-w-[12ch] px-4 text-[10px] uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-12 after:w-px after:bg-gradient-to-b after:from-[#f5f4f3] after:to-black after:content-[''] sm:px-0 sm:text-xs sm:after:h-16">
            Scroll to see more
          </span>
        </div>

        {/* Section 1: MY SKILLS text */}
        <div
          ref={targetRef}
          className="relative box-border flex h-[210vh] items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-4 sm:p-6 md:p-8 lg:p-[2vw]"
        >
          <div
            className="font-geist w-full max-w-xs text-center text-3xl font-bold uppercase tracking-tighter text-black sm:max-w-xl sm:text-4xl md:max-w-2xl md:text-5xl lg:max-w-4xl lg:text-6xl"
            style={{
              perspective: "500px",
            }}
          >
            {chars.map((char, index) => (
              <CharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={centerIndex}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Section 2: Frontend Icons */}
        <div
          ref={targetRef2}
          className="relative -mt-[100vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-4 sm:p-6 md:p-8 lg:p-[2vw]"
        >
          <div className="font-geist w-full max-w-xs text-center text-3xl font-bold uppercase tracking-tighter text-black sm:max-w-xl sm:text-4xl md:max-w-2xl md:text-5xl lg:max-w-4xl lg:text-6xl">
            {frontendIcons.map((char, index) => (
              <CharacterV2
                key={index}
                char={char}
                index={index}
                centerIndex={frontendCenterIndex}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
        </div>

        {/* Section 3: Backend Icons */}
        <div
          ref={targetRef3}
          className="relative -mt-[95vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-4 sm:p-6 md:p-8 lg:p-[2vw]"
        >
          <div
            className="font-geist w-full max-w-xs text-center text-3xl font-bold uppercase tracking-tighter text-black sm:max-w-xl sm:text-4xl md:max-w-2xl md:text-5xl lg:max-w-4xl lg:text-6xl"
            style={{
              perspective: "500px",
            }}
          >
            {backendIcons.map((char, index) => (
              <CharacterV3
                key={index}
                char={char}
                index={index}
                centerIndex={backendCenterIndex}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
        </div>

        {/* Section 4: Tool Icons */}
        <div
          ref={targetRef4}
          className="relative -mt-[95vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-4 sm:p-6 md:p-8 lg:p-[2vw]"
        >
          <div
            className="font-geist w-full max-w-xs text-center text-3xl font-bold uppercase tracking-tighter text-black sm:max-w-xl sm:text-4xl md:max-w-2xl md:text-5xl lg:max-w-4xl lg:text-6xl"
            style={{
              perspective: "500px",
            }}
          >
            {toolIcons.map((char, index) => (
              <CharacterV3
                key={index}
                char={char}
                index={index}
                centerIndex={toolCenterIndex}
                scrollYProgress={scrollYProgress4}
              />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Skills;