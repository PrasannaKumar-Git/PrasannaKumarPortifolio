import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: Math.random() * 2 - 1,
          vy: Math.random() * 2 - 1,
          originalAlpha: Math.random() * 0.5 + 0.1,
          alpha: Math.random() * 0.5 + 0.1,
          angle: Math.random() * 360
        });
      }
    };

    const getGradientColors = () => {
      return theme === 'dark' ? {
        primary: '#18181b',
        secondary: '#27272a',
        accent: '#3f3f46'
      } : {
        primary: '#fafafa',
        secondary: '#f4f4f5',
        accent: '#e4e4e7'
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getGradientColors();
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, colors.primary);
      gradient.addColorStop(0.5, colors.secondary);
      gradient.addColorStop(1, colors.accent);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Update angle for rotation
        particle.angle += 0.5;
        
        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.angle * Math.PI) / 180);
        
        if (theme === 'dark') {
          // Dark mode particles
          ctx.beginPath();
          ctx.arc(0, 0, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha * 0.5})`;
          ctx.fill();
        } else {
          // Light mode particles - geometric shapes
          ctx.beginPath();
          const sides = Math.floor(Math.random() * 3) + 3; // 3 to 5 sides
          for (let i = 0; i < sides; i++) {
            const angle = (i * 2 * Math.PI) / sides;
            const x = particle.radius * Math.cos(angle);
            const y = particle.radius * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fillStyle = `rgba(0, 0, 0, ${particle.alpha * 0.2})`;
          ctx.fill();
        }
        ctx.restore();
      });

      // Connect nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = theme === 'dark'
              ? `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`
              : `rgba(0, 0, 0, ${0.05 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 transition-opacity duration-500"
      style={{ opacity: 0.8 }}
    />
  );
};

export default BackgroundAnimation;