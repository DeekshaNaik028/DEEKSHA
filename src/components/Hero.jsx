// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Software Development Engineer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  return (
    <header id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-background">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-fuchsia-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle bg-pink-500/20 animate-particle-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      <div className="text-center z-10 px-6 max-w-5xl">
        {/* Name with enhanced animation */}
        <div className="mb-4 animate-fade-in-up">
          <div className="inline-block mb-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-sm font-mono animate-glow">
            Hello, I'm
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-space animate-fade-in-up delay-100">
          <span className="inline-block animate-gradient bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent neon-text">
            Deeksha Keshav Naik
          </span>
        </h1>
        
        {/* Typing animation for role */}
        <div className="h-12 mb-6 animate-fade-in-up delay-200">
          <p className="text-xl md:text-2xl text-slate-400 font-mono">
            <span className="text-pink-400">&lt;</span>
            {typedText}
            <span className="animate-pulse">|</span>
            <span className="text-pink-400">/&gt;</span>
          </p>
        </div>
        
        <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
          Passionate about building <span className="text-pink-400 font-semibold">scalable applications</span> with modern frameworks, 
          <span className="text-pink-400 font-semibold"> AI integration</span>, and 
          <span className="text-pink-400 font-semibold"> DevOps automation</span>
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up delay-400">
          <a 
            href="#projects" 
            className="px-8 py-4 border-2 border-pink-500 rounded-full font-semibold hover:bg-pink-500 transition-all hover:-translate-y-1 magnetic-button glass-effect"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-pink-500 rounded-full font-semibold hover:bg-pink-500 transition-all hover:-translate-y-1 magnetic-button glass-effect"
          >
            Get In Touch
          </a>
          <a 
            href="/DEEKSHA KESHAV NAIK(RESUME).pdf" 
            download
            className="px-8 py-4 border-2 border-pink-500 rounded-full font-semibold hover:bg-pink-500 transition-all hover:-translate-y-1 magnetic-button glass-effect"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </span>
          </a>
        </div>

        {/* Tech stack badges */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center animate-fade-in-up delay-500">
          {['React', 'Python', 'FastAPI', 'MongoDB', 'AI/ML', 'DevOps'].map((tech, idx) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-slate-800/50 border border-pink-500/20 rounded-lg text-sm text-slate-300 hover:border-pink-500 hover:text-pink-400 transition-all cursor-default font-mono animate-scale-in"
              style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-pink-400 text-sm font-mono">Scroll Down</span>
          <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Hero;