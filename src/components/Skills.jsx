// src/components/Skills.jsx
import React, { useEffect, useRef } from 'react';
import { skillsData } from '../data/skillsData';

const Skills = () => {
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
    <section id="skills" className="py-20 px-6 bg-slate-900/50 relative" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 scroll-reveal font-space">
          Technical <span className="text-gradient">Skills</span>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded"></div>
        </h2>
        <p className="text-center text-slate-400 mb-12 scroll-reveal font-mono text-sm">
          &lt;Tech Stack&gt;
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 hover:-translate-y-3 transition-all scroll-reveal card-shine relative overflow-hidden"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Icon background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
              
              <div className="relative">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-400 font-space">{category.category}</h3>
                </div>
                
                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-sm text-slate-200 hover:bg-emerald-500/20 hover:border-emerald-500 hover:scale-105 transition-all cursor-default font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification badge */}
        <div className="mt-12 text-center scroll-reveal">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-full">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-slate-300 font-mono text-sm">
              NPTEL & Pearson Certified Professional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;