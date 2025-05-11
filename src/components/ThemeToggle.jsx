import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-xl shadow-lg transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-zinc-800/80 hover:bg-zinc-700/80' 
          : 'bg-white/80 hover:bg-gray-100/80'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'dark' ? (
          <FaSun className="w-6 h-6 text-yellow-400" />
        ) : (
          <FaMoon className="w-6 h-6 text-indigo-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;