import React, { useRef, useState } from 'react';
import { Nomination } from '../types';

interface NominationCardProps {
  data: Nomination;
}

export const NominationCard: React.FC<NominationCardProps> = ({ data }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleMouseEnter = () => setIsFocused(true);
  const handleMouseLeave = () => setIsFocused(false);

  const Icon = data.icon;

  return (
    <article
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col gap-3 rounded-2xl p-6 border border-slate-800 bg-slate-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      {/* Animated Colored Gradient Blob on Hover */}
      <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${data.gradient} blur-[60px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className={`p-3 rounded-xl bg-slate-950/50 border border-slate-800 shadow-sm group-hover:border-slate-700 transition-colors ${data.color}`}>
            <Icon size={24} strokeWidth={2} />
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 bg-slate-950/30 px-2 py-1 rounded-md border border-slate-800/50">
            {data.label}
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">
          {data.title}
        </h3>
        
        <p className="text-sm text-slate-400 leading-relaxed mb-4 group-hover:text-slate-300 transition-colors">
          {data.description}
        </p>
        
        <div className="mt-auto self-start inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 group-hover:border-slate-600 transition-colors">
          {data.tag}
        </div>
      </div>
    </article>
  );
};
