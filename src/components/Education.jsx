import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-zinc-900">Education</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-50 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              {/* Replace with your university image */}
              <img
                src="imgs\CLG.jpg"
                alt="University"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-zinc-900">Siddartha Institute Of Technlogy And Science</h3>
              <p className="text-zinc-600 mb-4">Bachelor of Science in Computer Science</p>
              <p className="text-zinc-700 mb-4">2022 - 2026 | Current Percentage: 69%</p>
              <ul className="text-zinc-600 space-y-2">
                <li>•- Achieved academic excellence in core subjects.</li>
                <li>• Engaged in sports events, demonstrating discipline, strategic thinking, and a competitive spirit.</li>
                <li>• Actively participated in cultural programs, showcasing teamwork through music, dance</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;