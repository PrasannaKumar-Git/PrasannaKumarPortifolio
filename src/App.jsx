import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsThemeChanging(true);
    setTimeout(() => {
      setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
      setIsThemeChanging(false);
    }, 300);
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-500 ease-in-out ${
        isThemeChanging ? 'opacity-0' : 'opacity-100'
      } ${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-50'}`}
    >
      <BackgroundAnimation theme={theme} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="relative">
        {/* Hero section background - always dark */}
        <div className="absolute inset-0 h-[100vh] -z-10 bg-gradient-to-b from-zinc-900 to-zinc-800" />
        
        <Hero theme={theme} />
        <div className={`transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-50'}`}>
          <Projects theme={theme} />
          <Skills theme={theme} />
          <Experience theme={theme} />
          <Education theme={theme} />
          <Certifications theme={theme} />
          <Contact theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default App;