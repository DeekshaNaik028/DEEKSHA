// src/components/Contact.jsx
import React from 'react';
import { contactData } from '../data/contactData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In Touch
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded"></div>
        </h2>
        
        <p className="text-center text-slate-400 mb-8 text-lg">
          I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
        </p>
        
        <div className="space-y-4">
          {contactData.contactInfo.map((info, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4 hover:bg-slate-800 hover:translate-x-2 transition-all border border-slate-700/50 hover:border-pink-500/50">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                {info.icon}
              </div>
              {info.link ? (
                <a href={info.link} className="text-slate-200 text-lg hover:text-pink-400 transition-colors">
                  {info.text}
                </a>
              ) : (
                <span className="text-slate-200 text-lg">{info.text}</span>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex gap-6 justify-center mt-12">
          {contactData.socialLinks.map((social, idx) => (
            <a 
              key={idx}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 hover:-translate-y-2 transition-all duration-300 border border-slate-700 hover:border-transparent"
              title={social.platform}
            >
              {social.icon}
              <span className="absolute -bottom-8 text-xs text-slate-400 group-hover:text-pink-400 transition-colors">
                {social.platform}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;