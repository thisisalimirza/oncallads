import React from 'react';
import { ArrowRight, Zap, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

export const Hero: React.FC = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b-4 border-black">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      
      {/* Floating Elements (Abstract) */}
      <div className="absolute top-20 right-[10%] w-24 h-24 bg-brand-orange rounded-full border-4 border-black shadow-hard hidden lg:block animate-bounce"></div>
      <div className="absolute bottom-20 left-[5%] w-16 h-16 bg-brand-indigo rounded-none rotate-12 border-4 border-black shadow-hard hidden lg:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 bg-yellow-300 border-2 border-black px-5 py-2 mb-10 shadow-hard transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
           <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse border border-black"></div>
           <span className="text-xs font-mono font-bold text-black uppercase tracking-wider">Capacity: 3 Spots Left for {currentMonth}</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-black mb-8 leading-[0.9]">
          FIRE YOUR <br />
          <span className="relative inline-block px-4">
             <span className="absolute inset-0 bg-brand-indigo transform skew-x-[-4deg] border-4 border-black shadow-hard"></span>
             <span className="relative text-white z-10">AD AGENCY.</span>
          </span>
        </h1>
        
        {/* Subheadline - The "Mechanism" */}
        <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-zinc-800 leading-relaxed font-medium border-l-4 border-brand-orange pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          The <span className="font-bold bg-zinc-200 px-1 border border-black">performance creative</span> partner for brands scaling past $10k/mo. 
          No % of ad spend. No hostages. Just relentless testing velocity for a flat monthly fee.
        </p>

        {/* Benefits Grid - Utilitarian Style */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 font-mono text-sm font-bold text-black uppercase">
            <span className="flex items-center gap-2 bg-white border-2 border-black px-4 py-2 shadow-hard-sm">
                <AlertTriangle className="w-4 h-4 text-brand-orange" /> Zero "Management Fees"
            </span>
            <span className="flex items-center gap-2 bg-white border-2 border-black px-4 py-2 shadow-hard-sm">
                <TrendingUp className="w-4 h-4 text-green-600" /> Data-Driven Angles
            </span>
            <span className="flex items-center gap-2 bg-white border-2 border-black px-4 py-2 shadow-hard-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-indigo" /> 48h Turnaround
            </span>
        </div>
        
        {/* CTA Area */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6 items-center">
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 text-xl font-bold text-white bg-black border-2 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center justify-center gap-3 group"
          >
            See Plans & Pricing
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 text-xl font-bold text-black bg-white border-2 border-black shadow-hard hover:bg-brand-orange hover:text-white hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center justify-center gap-3"
          >
            <Zap className="w-6 h-6" />
            Our Creative Process
          </button>
        </div>
      </div>
    </div>
  );
};