import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Nomination {
  id: string;
  label: string;
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  color: string; // Tailwind text color class (e.g., 'text-orange-500')
  gradient: string; // CSS gradient class for hover effects
}

export interface Step {
  id: number;
  title: string;
  description: string | React.ReactNode;
  icon: LucideIcon;
}