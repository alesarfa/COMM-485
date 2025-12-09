import React from 'react';

interface SectionProps {
  id?: string;
  theme?: 'dark' | 'light' | 'gradient';
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, theme = 'dark', children, className = '' }) => {
  let bgClass = '';
  
  switch (theme) {
    case 'light':
      bgClass = 'bg-[#F5F5F5] text-[#1E1E1E]';
      break;
    case 'gradient':
      bgClass = 'bg-gradient-to-br from-black via-[#0015FF] to-black text-white';
      break;
    case 'dark':
    default:
      bgClass = 'bg-[#000000] text-white';
      break;
  }

  return (
    <section id={id} className={`w-full py-20 md:py-32 px-6 overflow-hidden ${bgClass} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};