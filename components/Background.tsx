import React from 'react';

interface WaveProps {
  color: string;
  opacity: number;
  animationClass: string;
  swellClass?: string;
  d: string;
}

const Wave: React.FC<WaveProps> = ({ color, opacity, animationClass, swellClass = '', d }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-full w-full pointer-events-none" style={{ opacity }}>
      <div className={`w-full h-full ${swellClass}`}>
        <div className={`absolute bottom-0 flex w-[200%] h-full ${animationClass}`}>
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path className={color} d={d} />
          </svg>
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path className={color} d={d} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-baltic-dark">
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-soft-light"></div>
      
      {/* Gradients */}
      <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[100px] mix-blend-screen" ></div>
      <div className="absolute bottom-[-10%] left-[50%] translate-x-[-50%] w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[130px] mix-blend-screen"></div>

      {/* Animated Waves */}
      <div className="absolute bottom-0 w-full h-[35vh] z-0">
        {/* Back Wave */}
        <Wave 
          color="fill-blue-900" 
          opacity={0.5} 
          animationClass="animate-wave-slow" 
          swellClass="animate-swell-slow"
          d="M0,160 Q360,100 720,160 T1440,160 L1440,320 L0,320 Z"
        />
        {/* Middle Wave */}
        <Wave 
          color="fill-blue-800" 
          opacity={0.4} 
          animationClass="animate-wave-medium" 
          swellClass="animate-swell-medium"
          d="M0,190 Q360,250 720,190 T1440,190 L1440,320 L0,320 Z"
        />
        {/* Front Wave */}
        <Wave 
          color="fill-cyan-900" 
          opacity={0.3} 
          animationClass="animate-wave-fast" 
          swellClass="animate-swell-fast"
          d="M0,220 Q360,160 720,220 T1440,220 L1440,320 L0,320 Z"
        />
      </div>
    </div>
  );
};
