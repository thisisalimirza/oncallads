import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white border-b-4 border-black relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-black text-white px-4 py-2 font-mono font-bold uppercase text-sm mb-4 transform -rotate-2">
             Transparent Pricing
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-black mb-6 uppercase tracking-tight">
            Pick Your <span className="text-stroke-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-indigo" style={{ WebkitTextStroke: '2px black' }}>Weapon</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-xl font-medium border-b-2 border-black pb-8 inline-block">
            Pause or cancel anytime. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-end">
            {/* Tier 1 */}
            <div className="bg-white border-4 border-black p-8 shadow-hard hover:-translate-y-2 hover:shadow-hard-lg transition-all duration-200">
                <div className="font-mono text-sm font-bold text-zinc-500 uppercase mb-2">Level 01</div>
                <h3 className="text-3xl font-bold text-black mb-2 font-display">Essential</h3>
                <p className="text-zinc-600 text-sm mb-8 font-medium">For startups &lt;$10k/mo spend.</p>
                <div className="text-5xl font-display font-bold text-black mb-8">$1,995<span className="text-lg text-zinc-500 font-bold">/mo</span></div>
                
                <button className="w-full py-4 bg-white border-2 border-black text-black font-bold uppercase tracking-wider hover:bg-zinc-100 transition-colors mb-8 shadow-hard-sm">
                    Book Call
                </button>
                
                <div className="space-y-4">
                    <li className="flex gap-3 text-sm font-bold text-zinc-800"><Check className="w-5 h-5 text-black border border-black p-0.5" /> Unlimited Requests</li>
                    <li className="flex gap-3 text-sm font-bold text-zinc-800"><Check className="w-5 h-5 text-black border border-black p-0.5" /> 1 Active Channel</li>
                    <li className="flex gap-3 text-sm font-bold text-zinc-800"><Check className="w-5 h-5 text-black border border-black p-0.5" /> 48h Turnaround</li>
                    <li className="flex gap-3 text-sm font-bold text-zinc-800"><Check className="w-5 h-5 text-black border border-black p-0.5" /> Pause Anytime</li>
                </div>
            </div>

            {/* Tier 2 - POP */}
            <div className="bg-brand-indigo border-4 border-black p-8 shadow-hard-lg relative transform scale-105 z-10">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-300 border-2 border-black text-black text-xs font-bold px-4 py-2 uppercase tracking-wider shadow-hard-sm flex items-center gap-2">
                    <Star className="w-4 h-4 fill-black" /> Most Popular
                </div>
                
                <div className="font-mono text-sm font-bold text-indigo-200 uppercase mb-2">Level 02</div>
                <h3 className="text-3xl font-bold text-white mb-2 font-display">Growth</h3>
                <p className="text-indigo-100 text-sm mb-8 font-medium">For scaling brands $10k-$50k.</p>
                <div className="text-5xl font-display font-bold text-white mb-8">$3,495<span className="text-lg text-indigo-200 font-bold">/mo</span></div>
                
                <button className="w-full py-4 bg-brand-orange border-2 border-black text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors mb-8 shadow-hard-sm flex justify-center items-center gap-2 group">
                    Start Scaling <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="space-y-4">
                    <li className="flex gap-3 text-sm font-bold text-white"><Check className="w-5 h-5 bg-white text-black p-0.5" /> Unlimited Requests</li>
                    <li className="flex gap-3 text-sm font-bold text-white"><Check className="w-5 h-5 bg-white text-black p-0.5" /> 2 Active Channels</li>
                    <li className="flex gap-3 text-sm font-bold text-white"><Check className="w-5 h-5 bg-white text-black p-0.5" /> Slack Access</li>
                    <li className="flex gap-3 text-sm font-bold text-white"><Check className="w-5 h-5 bg-white text-black p-0.5" /> Bi-Weekly Strategy</li>
                    <li className="flex gap-3 text-sm font-bold text-white"><Check className="w-5 h-5 bg-white text-black p-0.5" /> UGC Coordination</li>
                </div>
            </div>

            {/* Tier 3 */}
             <div className="bg-white border-4 border-black p-8 shadow-hard hover:-translate-y-2 hover:shadow-hard-lg transition-all duration-200">
                <div className="font-mono text-sm font-bold text-zinc-500 uppercase mb-2">Level 03</div>
                <h3 className="text-3xl font-bold text-black mb-2 font-display">Dominance</h3>
                <p className="text-zinc-600 text-sm mb-8 font-medium">For brands spending $50k+.</p>
                <div className="text-5xl font-display font-bold text-black mb-8">$5,995<span className="text-lg text-zinc-500 font-bold">/mo</span></div>
                
                <button className="w-full py-4 bg-white border-2 border-black text-black font-bold uppercase tracking-wider hover:bg-zinc-100 transition-colors mb-8 shadow-hard-sm">
                    Book Strategy
                </button>
                
                <div className="space-y-4">
                    <li className="flex gap-3 text-sm font-bold text-zinc-800"><Check className="w-5 h-5 text-black border border-black p-0.5" /> All Channels</li>
                    <li className="flex gap-3 text-sm font-bold text-zinc-800"><Check className="w-5 h-5 text-black border border-black p-0.5" /> Senior Strategist</li>
                    <li className="flex gap-3 text-sm font-bold text-zinc-800"><Check className="w-5 h-5 text-black border border-black p-0.5" /> Landing Page Opt.</li>
                    <li className="flex gap-3 text-sm font-bold text-zinc-800"><Check className="w-5 h-5 text-black border border-black p-0.5" /> Priority Support</li>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};