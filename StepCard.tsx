import React from 'react';
import { Step } from '../types';

interface StepCardProps {
  step: Step;
}

export const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const Icon = step.icon;
  
  return (
    <div className="relative group rounded-2xl p-6 bg-slate-900/50 border border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-neon-cyan shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Icon size={20} strokeWidth={2} />
          </div>
          <span className="text-xs font-bold text-slate-600">0{step.id}</span>
        </div>
        
        <div>
          <h4 className="text-base font-bold text-slate-200 mb-2 group-hover:text-neon-cyan transition-colors">
            {step.title}
          </h4>
          <div className="text-sm text-slate-400 leading-relaxed">
            {step.description}
          </div>
        </div>
      </div>
    </div>
  );
};