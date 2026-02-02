"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Magnetic from "./ui/magnetic";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with MERN stack and styled with Tailwind CSS.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/anjali345-cell/E-commerce-website",
      live: "https://example.com",
      color: "crimson",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Responsive design for all devices.",
      image:
        "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "TypeScript", "Firebase", "Framer Motion"],
      github: "https://github.com",
      live: "https://example.com",
      color: "blush",
    },
    {
      title: "Earthquake Tracker",
      description:
        "An elegant weather dashboard that displays current weather conditions and forecasts. Features location-based weather data, beautiful visualizations, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1584291527905-f930791fb1ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWFydGhxdWFrZSUyMHZpc3VhbGlzZXIlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
      tech: ["React", "Weather API", "Chart.js", "CSS3"],
      github: "https://github.com/anjali345-cell/earthquake_visualizer",
      live: "https://earthquake-visualizer-02.netlify.app/",
      color: "cinnamon",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing creative work with smooth animations and transitions. Built with performance and accessibility in mind.",
      image:
        "https://i.pinimg.com/736x/a8/70/96/a870963c0aed32ffbe7826f6aeb2794c.jpg",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/anjali345-cell/sample-portfolio-website.git",
      live: "https://sample-portfolio-website-1dte.vercel.app/",
      color: "crimson",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-blush-50 to-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-crimson-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and creativity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60"></div>

                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <Github size={20} className="text-gray-900" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-crimson-600 rounded-full flex items-center justify-center shadow-lg hover:bg-crimson-700 transition-colors"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-crimson-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-${project.color}-50 text-${project.color}-700 rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Want to see more? Check out my GitHub for additional projects and
              contributions.
            </p>
            <Magnetic>
              <motion.a
                href="https://github.com/anjali345-cell"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg"
              >
                <Github size={20} />
                View More on GitHub
              </motion.a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
