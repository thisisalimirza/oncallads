import React from 'react';
import { ArrowRight, ShieldCheck, Ticket } from 'lucide-react';

export const AuditOffer: React.FC = () => {
  return (
    <section className="py-24 bg-yellow-400 border-y-4 border-black relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border-4 border-black shadow-hard-lg flex flex-col lg:flex-row relative">
          
          {/* Perforated Line Visual for Mobile/Desktop */}
          <div className="hidden lg:block absolute right-[35%] top-0 bottom-0 w-1 bg-black border-l-2 border-dashed border-white"></div>
          
          {/* Left Side: The Hook */}
          <div className="lg:w-2/3 p-10 md:p-14 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-black border-dashed">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-mono font-bold uppercase text-xs mb-6 shadow-hard-sm transform -rotate-1">
              <Ticket className="w-4 h-4" />
              One-Time Entry Pass
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-6 leading-none uppercase">
              Not Ready to <br/>Commit?
            </h2>
            
            <p className="text-zinc-800 text-xl font-medium mb-8 leading-relaxed max-w-xl">
              Get the <span className="bg-yellow-300 px-1 border border-black font-bold">"Profit Leak Audit"</span>. We tear down your ad account, find the wasted spend, and give you a roadmap. No retainer required.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3 border-l-4 border-black pl-4">
                    <div>
                        <h4 className="text-black font-bold text-lg font-display uppercase">Deep-Dive Analysis</h4>
                        <p className="text-zinc-600 text-sm mt-1 font-medium">We spot the fatigue you missed.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-3 border-l-4 border-black pl-4">
                    <div>
                        <h4 className="text-black font-bold text-lg font-display uppercase">24-Hour Delivery</h4>
                        <p className="text-zinc-600 text-sm mt-1 font-medium">Actionable PDF in your inbox.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="w-full sm:w-auto px-8 py-4 bg-red-500 hover:bg-red-400 text-white border-2 border-black font-bold uppercase tracking-wider rounded-none shadow-hard transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                    Buy The Audit — $97
                    <ArrowRight className="w-6 h-6 border-l-2 border-white/30 pl-2" />
                </button>
                <p className="text-black text-xs font-bold font-mono bg-white border border-black px-3 py-1 shadow-sm">
                    <ShieldCheck className="w-3 h-3 inline mr-1" /> 
                    100% Refund if we don't find savings.
                </p>
            </div>
          </div>

          {/* Right Side: The Ticket Stub */}
          <div className="lg:w-1/3 bg-zinc-50 p-10 md:p-14 flex flex-col justify-center relative">
            
            <h3 className="text-zinc-400 font-mono font-bold uppercase text-sm mb-6 tracking-widest">INCLUDES:</h3>
            <ul className="space-y-4 relative z-10 font-bold text-black text-sm">
                <li className="flex items-center justify-between border-b-2 border-zinc-200 pb-3">
                    <span>Creative Fatigue Report</span>
                    <span className="text-zinc-400 line-through">$297</span>
                </li>
                <li className="flex items-center justify-between border-b-2 border-zinc-200 pb-3">
                    <span>Audience Quality Check</span>
                    <span className="text-zinc-400 line-through">$197</span>
                </li>
                <li className="flex items-center justify-between border-b-2 border-zinc-200 pb-3">
                    <span>Competitor Ad Spy</span>
                    <span className="text-zinc-400 line-through">$149</span>
                </li>
                <li className="flex items-center justify-between border-b-2 border-zinc-200 pb-3">
                    <span>Scaling Roadmap PDF</span>
                    <span className="text-zinc-400 line-through">$497</span>
                </li>
                 <li className="flex items-center justify-between pt-2">
                    <span className="text-red-600 font-bold text-lg uppercase">Total Value</span>
                    <span className="text-black font-bold text-xl">$1,140</span>
                </li>
            </ul>

            <div className="mt-8 bg-black p-6 border-2 border-black text-center transform rotate-2 shadow-hard">
                <p className="text-white/70 text-xs font-mono mb-1 uppercase tracking-widest">One-Time Price</p>
                <p className="text-5xl font-display font-bold text-white">$97</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};