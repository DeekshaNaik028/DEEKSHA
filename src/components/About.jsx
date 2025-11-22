// src/components/About.jsx
import React, { useEffect, useRef } from 'react';
import { aboutData } from '../data/aboutData';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-6 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 scroll-reveal font-space">
          About <span className="text-gradient">Me</span>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded"></div>
        </h2>
        <p className="text-center text-slate-400 mb-12 scroll-reveal font-mono text-sm">
          &lt;Who I Am&gt;
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Photo Section */}
          <div className="flex justify-center scroll-reveal">
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
              
              {/* Decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src="/profile.jpg" 
                  alt="Deeksha Naik"
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  onLoad={(e) => e.target.classList.add('loaded')}
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-slate-800 border-2 border-pink-500 rounded-xl px-4 py-2 shadow-lg animate-float">
                  <p className="text-pink-400 font-bold text-sm font-mono">Available for Work</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Section */}
          <div className="space-y-6 scroll-reveal">
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx} className="text-slate-400 text-lg leading-relaxed hover:text-slate-300 transition-colors">
                {para}
              </p>
            ))}
            
            {/* Quick facts */}
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-pink-500/50 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Based in</p>
                  <p className="text-sm font-semibold text-pink-400 font-mono">Mangalore, IN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {aboutData.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl text-center hover:-translate-y-3 transition-all border border-slate-700 hover:border-pink-500 scroll-reveal card-shine relative overflow-hidden"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <h3 className="text-5xl font-bold text-gradient mb-3 font-space group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                </h3>
                <p className="text-slate-400 text-sm uppercase tracking-wider font-mono">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;