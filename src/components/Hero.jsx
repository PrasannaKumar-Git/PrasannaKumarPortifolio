import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// No import needed for the image when it's in the 'public' folder

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Your useEffect logic remains the same
    const container = containerRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      text.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(50px)`;
      image.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) translateZ(100px)`;
    };

    const handleMouseLeave = () => {
      text.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
      image.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 bg-zinc-900 overflow-hidden"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div 
          ref={textRef}
          className="transition-transform duration-300 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Your text and button code remains the same */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Prasanna Kumar
            </h1>
          </motion.div>
          <motion.p 
            className="text-xl text-zinc-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            "Hellow there! I’m Prasanna Kumar, An Aspiring Web Developer
            As a Computer Science student who transforms ideas into dynamic digital experiences. Less code, more impact—let’s innovate together!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-block"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
        <motion.div
          ref={imageRef}
          className="transition-transform duration-300 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative">
            <div className="w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-purple-500/20 relative">
              <img
                src="imgs\Picsart_25-02-04_00-57-24-857.jpg" // 👈 Use a simple string path
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-full h-full rounded-full border-t-2 border-purple-500/30" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;