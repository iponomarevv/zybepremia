import React from 'react';

export const Badge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-3 pl-1 pr-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-900/80 backdrop-blur-md shadow-xl mb-6 animate-fade-in-up">
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-neon-cyan to-blue-600 text-sm shadow-lg shadow-cyan-500/20">
        🌊
      </span>
      <span className="text-xs text-slate-300 tracking-wide">
        Чат <strong className="text-white font-semibold">«Ветровая Зыбь»</strong> представляет
      </span>
    </div>
  );
};
