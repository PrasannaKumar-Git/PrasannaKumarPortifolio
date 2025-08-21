import React from 'react';
import { motion } from 'framer-motion';

const base = import.meta.env.BASE_URL;

const certifications = [
  {
    title: "Web Development Using AI Tools",
    organization: "Siddhartha Institute of Technology & Sciences",
    issueDate: "January 2023",
    image: `${base}imgs/MeritCertificate.jpg`,
    description: "Merit Certificate for winning National Level Three Days Hackathon"
  },
  {
    title: "Salesforce AI Associate",
    organization: "Salesforce Trailhead",
    issueDate: "December 2024",
    image: `${base}imgs/Salesforce.jpg`,
    badge: `${base}imgs/Badge.png`,
    description: "Certified AI Associate specializing in Salesforce AI implementations"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    organization: "IBM",
    issueDate: "March 04, 2025",
    image: `${base}imgs/IBM_AI.jpg`,
    description: "I am proud to announce that I have received the Artificial Intelligence Fundamentals certification from IBM SkillsBuild. 🎓🤖."
  },
  {
    title: "Young Python Professional",
    organization: "Infosys Springboard",
    issueDate: "July 29, 2024",
    image: `${base}imgs/PythonCertificate.jpg`,
    description: "Successfully completed the 'Young Python Professional' program by Infosys Springboard, demonstrating expertise in Python programming and problem-solving."
  },
  {
    title: "Principles of Generative AI Certification",
    organization: "Infosys Springboard",
    issueDate: "August 20, 2024",
    image: `${base}imgs/GenerativeAI.jpg`,
    description: "Successfully completed the Principles of Generative AI Certification from Infosys Springboard."
  },
  {
    title: "Introduction to Artificial Intelligence",
    organization: "Infosys Springboard",
    issueDate: "August 13, 2024",
    image: `${base}imgs/Introduction_to_AI.jpg`,
    description: "Successfully completed the Introduction to Artificial Intelligence course from Infosys Springboard."
  },
  {
    title: "Introduction to Data Science",
    organization: "Infosys Springboard",
    issueDate: "August 6, 2024",
    image: `${base}imgs/DataScience.jpg`,
    description: "Successfully completed the Introduction to Data Science course, covering foundational concepts in data science and analytics."
  },
  {
    title: "Introduction to Deep Learning",
    organization: "Infosys Springboard",
    issueDate: "August 19, 2024",
    image: `${base}imgs/DeepLearning.jpg`,
    description: "Successfully completed the course Introduction to Deep Learning."
  },
  {
    title: "Introduction to Natural Language Processing",
    organization: "Infosys Springboard",
    issueDate: "August 13, 2024",
    image: `${base}imgs/NaturalLanguageProcessing.jpg`,
    description: "Successfully completed the course Introduction to Natural Language Processing."
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-zinc-900">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-zinc-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {cert.badge && (
                    <div className="absolute top-0 right-0 m-4">
                      <img
                        src={cert.badge}
                        alt="Badge"
                        className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-zinc-900">{cert.title}</h3>
                  <p className="text-purple-500 font-medium mb-2">{cert.organization}</p>
                  <p className="text-zinc-600 mb-4">{cert.description}</p>
                  <div className="flex items-center text-sm text-zinc-500">
                    <span>{cert.issueDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
