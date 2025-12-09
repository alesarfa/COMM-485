import React from 'react';
import { Image, Play, FileChartColumn } from 'lucide-react';

interface MediaPlaceholderProps {
  type: 'image' | 'video' | 'graphic';
  description: string;
  className?: string;
  height?: string;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({ 
  type, 
  description, 
  className = '',
  height = 'h-64 md:h-80'
}) => {
  const getIcon = () => {
    switch (type) {
      case 'video': return <Play className="w-12 h-12 mb-4 opacity-50" />;
      case 'graphic': return <FileChartColumn className="w-12 h-12 mb-4 opacity-50" />;
      default: return <Image className="w-12 h-12 mb-4 opacity-50" />;
    }
  };

  return (
    <div className={`w-full ${height} bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-600 flex flex-col items-center justify-center p-6 text-center group transition-colors hover:bg-gray-800/70 hover:border-brand-blue/50 ${className}`}>
      <div className="text-gray-400 group-hover:text-brand-blue transition-colors">
        {getIcon()}
      </div>
      <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">
        {type.toUpperCase()} PLACEHOLDER
      </p>
      <p className="text-gray-300 font-medium max-w-sm">
        {description}
      </p>
    </div>
  );
};