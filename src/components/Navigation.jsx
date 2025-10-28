// src/components/Navigation.jsx
import React, { useState } from 'react';

const Navigation = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo with animation */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center font-bold text-white text-xl group-hover:scale-110 transition-transform">
              DN
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
          </div>
          <span className="text-xl font-space font-bold text-gradient hidden sm:block">
            Deeksha Naik
          </span>
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, idx) => (
            <li key={link} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <a 
                href={`#${link.toLowerCase()}`}
                className="relative text-slate-200 hover:text-emerald-400 transition-colors font-medium group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-slate-200 hover:text-emerald-400 transition-colors focus:outline-none z-50 relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
            <span className={`absolute top-2 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-effect transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="px-6 py-4 space-y-4">
          {navLinks.map((link, idx) => (
            <li 
              key={link}
              className={`transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <a 
                href={`#${link.toLowerCase()}`}
                onClick={closeMenu}
                className="block text-slate-200 hover:text-emerald-400 transition-colors font-medium py-2 hover:translate-x-2 transition-transform"
              >
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  {link}
                </span>
              </a>
            </li>
          ))}
          <li className="pt-4 border-t border-slate-700">
            <a 
              href="/DeekshaNaik_Resume.pdf"
              download
              onClick={closeMenu}
              className="block text-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;