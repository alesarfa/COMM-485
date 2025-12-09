import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'dark' | 'light';
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', theme = 'dark' }) => {
  const baseStyles = "rounded-2xl backdrop-blur-md shadow-xl p-8 border transition-transform duration-300 hover:scale-[1.01]";
  
  const themeStyles = theme === 'dark' 
    ? "bg-white/10 border-white/10 text-white shadow-black/20"
    : "bg-white/80 border-white/40 text-gray-900 shadow-brand-blue/10";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`${baseStyles} ${themeStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};