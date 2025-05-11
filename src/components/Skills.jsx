import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaDatabase, FaUserTie, FaLightbulb, FaBrain, FaRobot, FaFilePdf, FaDownload } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { icon: FaHtml5, name: 'HTML', color: '#E34F26' },
      { icon: FaCss3Alt, name: 'CSS', color: '#1572B6' },
      { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
      { icon: FaPython, name: 'Python', color: '#3776AB' },
      { icon: FaJava, name: 'Java', color: '#007396' },
      { icon: FaDatabase, name: 'SQL', color: '#4479A1' },
      { icon: FaRobot, name: 'AI Tools & Prompting', color: '#10B981' }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { icon: FaUserTie, name: 'Communication', color: '#6366F1' },
      { icon: FaLightbulb, name: 'Leadership', color: '#F59E0B' },
      { icon: FaBrain, name: 'Adaptability', color: '#EC4899' }
    ]
  }
];

const Skills = ({ theme }) => {
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  return (
    <section id="skills" className={`py-20 px-4 transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 transition-colors duration-500 ${theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'}`}>
          Skills
        </h2>
        
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 last:mb-0">
            <h3 className={`text-2xl font-semibold mb-8 transition-colors duration-500 ${
              theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
            }`}>
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-16 h-16 flex items-center justify-center rounded-lg transition-all duration-500 ${
                    theme === 'dark' 
                      ? 'bg-zinc-800 shadow-lg shadow-purple-500/10' 
                      : 'bg-zinc-50 shadow-md'
                  }`}>
                    <skill.icon 
                      className="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                  </div>
                  <span className={`text-sm font-medium mt-3 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                  }`}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://drive.google.com/file/d/1m0mejscuN8pWnx1PMgK5U-IhHP6bTUbf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            onMouseEnter={() => setIsResumeHovered(true)}
            onMouseLeave={() => setIsResumeHovered(false)}
            aria-label="View or download my resume"
          >
            <motion.div
              className={`relative overflow-hidden p-6 rounded-lg transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-zinc-800 hover:bg-zinc-700 shadow-lg shadow-purple-500/20'
                  : 'bg-zinc-50 hover:bg-zinc-100 shadow-md'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center justify-center gap-4"
                animate={{
                  x: isResumeHovered ? -20 : 0,
                  opacity: isResumeHovered ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <FaFilePdf className={`w-8 h-8 ${isResumeHovered ? 'text-purple-500' : 'text-red-500'}`} />
                <span className={`text-lg font-semibold transition-colors duration-500 ${
                  theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                }`}>
                  View My Resume
                </span>
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center gap-4"
                initial={{ x: 100, opacity: 0 }}
                animate={{
                  x: isResumeHovered ? 0 : 100,
                  opacity: isResumeHovered ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <FaDownload className={`w-8 h-8 text-purple-500`} />
                <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                  Grab a copy
                </span>
              </motion.div>

              {/* Glowing effect for dark mode */}
              {theme === 'dark' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0"
                  animate={{
                    x: isResumeHovered ? ['-100%', '100%'] : '-100%'
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isResumeHovered ? Infinity : 0,
                    ease: 'linear'
                  }}
                />
              )}
            </motion.div>
          </a>
        </motion.div>

        <div className={`mt-12 p-6 rounded-lg transition-all duration-500 ${
          theme === 'dark'
            ? 'bg-zinc-800/50 shadow-lg shadow-purple-500/10'
            : 'bg-zinc-50 shadow-md'
        }`}>
          <h3 className={`text-xl font-semibold mb-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
          }`}>
            Additional Expertise
          </h3>
          <p className={`transition-colors duration-500 ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Proficient in Data Structures and experienced in utilizing AI tools for web development. 
            Skilled in crafting effective prompts for ChatGPT and other AI platforms to enhance development workflow and productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;