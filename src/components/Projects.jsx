import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Financial Aid Platform (Hackathon Project)",
    description: "An AI Powered web-based platform connecting students facing financial challenges with donors willing to support their education..",
    technologies: ["JavaScript", "ChatGpt", "AiTools", "MySql"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI for smart responses and language translation.",
    technologies: ["React Native", "OpenAI", "Firebase"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard for visualizing complex data sets with customizable charts and filters.",
    technologies: ["Next.js", "D3.js", "PostgreSQL"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  },
  {
    title: "Social Media Platform",
    description: "Feature-rich social media platform with real-time updates and media sharing capabilities.",
    technologies: ["Vue.js", "GraphQL", "AWS"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white relative">
      <div className="absolute top-0 left-1/2 w-px h-20 bg-zinc-200" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-zinc-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group block"
            >
              <div className="bg-zinc-50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-zinc-900">{project.title}</h3>
                  <p className="text-zinc-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;