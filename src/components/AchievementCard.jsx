// src/components/AchievementCard.jsx
import React from 'react';

const AchievementCard = ({ achievement }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-emerald-500 hover:translate-x-2 transition-transform">
      <h3 className="text-lg font-semibold text-emerald-400 mb-2">{achievement.title}</h3>
      <p className="text-slate-400 text-sm">{achievement.description}</p>
    </div>
  );
};

export default AchievementCard;