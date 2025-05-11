import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Braino Vision Hackathon.",
    role: "National Level Three Days Hackathon • Jan 2024",
    description: "Secured 4th place in a web development hackathon using AI tools. Designed and developed a project showcasing AI-driven web solutions, collaborating with a team under a tight deadline..",
    technologies: ["AI Tools", "HTML", "CSS", "JavaScript"]
  },
  {
    company: "College Event Coordinator.",
    role: "Coordinator and Volunteer",
    duration: "2022 - 2024",
    description: "Developed leadership and problem-solving skills by managing logistics, communication, and teamwork in high-pressure environments..",
    technologies: ["LeaderShip","Problem-Solving Skills","Adaptibility", ]
  },
  {
    company: "AI-Powered Website Project",
    role: "Frontend Developer",
    duration: "3rd Year, Semester 1",
    description: "Designed and developed a website using AI tools and ChatGPT, enhancing user interactions with AI-driven prompts..",
    technologies: ["Web Development", "AI Integrtaion", "UI/UX Design",]
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-zinc-900">Experience</h2>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-zinc-200" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:translate-x-1/2'
                }`}
              >
                <div className={`bg-zinc-50 p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                }`}>
                  <h3 className="text-xl font-bold mb-2 text-zinc-900">{exp.company}</h3>
                  <p className="text-zinc-600 mb-2">{exp.role} • {exp.duration}</p>
                  <p className="text-zinc-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zinc-400 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;