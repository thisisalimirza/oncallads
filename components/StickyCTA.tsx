import React, { useState, useEffect } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-white border-b-4 border-black transform transition-transform duration-300 animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-4">
             <div className="hidden md:flex flex-col">
                <span className="font-bold text-black font-display uppercase tracking-tight leading-none text-lg">OnCallAds</span>
             </div>
             <div className="h-8 w-0.5 bg-black hidden md:block"></div>
             <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-brand-orange animate-pulse" />
                <p className="text-xs font-bold font-mono text-black uppercase">
                    Status: <span className="bg-red-500 text-white px-1">Low Capacity</span>
                </p>
             </div>
          </div>

          <div className="flex items-center gap-4">
             <button 
               onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
               className="bg-black text-white px-6 py-2 border-2 border-black text-xs font-bold font-mono uppercase hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-hard-sm hover:translate-y-[2px] hover:shadow-none"
             >
               View Plans <ArrowRight className="w-4 h-4" />
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};