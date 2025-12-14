import React from 'react';
import * as Lucide from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, size = 24, className }) => {
  const IconComponent = (Lucide as any)[name];
  
  if (!IconComponent) {
    return <Lucide.Sparkles size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};
