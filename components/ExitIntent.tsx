import React, { useState, useEffect } from 'react';
import { X, Target, Download, AlertTriangle } from 'lucide-react';

export const ExitIntent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm transition-opacity"
        onClick={() => setIsVisible(false)}
      ></div>
      
      <div className="bg-white w-full max-w-lg relative z-10 overflow-hidden animate-fade-in-up border-4 border-black shadow-hard-lg">
        {/* Header */}
        <div className="bg-brand-orange border-b-4 border-black p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 font-mono font-bold uppercase text-black">
                <AlertTriangle className="w-5 h-5" />
                <span>System Interruption</span>
            </div>
            <button 
                onClick={() => setIsVisible(false)}
                className="bg-black text-white hover:bg-white hover:text-black border-2 border-black w-8 h-8 flex items-center justify-center font-bold transition-colors"
            >
                <X className="w-5 h-5" />
            </button>
        </div>

        <div className="p-8 text-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
            <div className="inline-flex items-center justify-center p-4 bg-black border-2 border-black mb-6 shadow-hard">
                <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-4xl font-display font-bold text-black mb-4 uppercase leading-none">Wait! Steal Our <br/> Strategy.</h3>
            <p className="text-zinc-600 font-medium mb-8">Before you go, let our AI generate 3 high-converting hooks for your business. Free of charge.</p>

            <button 
                onClick={() => {
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' }); // Scrolls to AdHookGenerator
                    setIsVisible(false);
                }}
                className="w-full py-4 bg-brand-indigo hover:bg-indigo-500 text-white font-bold font-mono uppercase tracking-widest border-2 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 mb-4"
            >
                <Download className="w-5 h-5" /> Generate Hooks
            </button>
            <button 
                onClick={() => setIsVisible(false)}
                className="w-full text-zinc-400 text-xs font-mono uppercase hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-black"
            >
                No thanks, I hate free money.
            </button>
        </div>
      </div>
    </div>
  );
};