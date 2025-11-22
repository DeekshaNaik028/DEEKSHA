// src/components/Achievements.jsx
import React, { useEffect, useRef } from 'react';
import AchievementCard from './AchievementCard';
import { achievementsData } from '../data/achievementsData';

const Achievements = () => {
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
    <section id="achievements" className="py-20 px-6 bg-slate-900/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 scroll-reveal">
          Achievements & Certifications
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, idx) => (
            <div 
              key={idx} 
              className="scroll-reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;