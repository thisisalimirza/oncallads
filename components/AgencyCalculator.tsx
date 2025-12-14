import React, { useState } from 'react';
import { ArrowRight, Calculator, RefreshCw } from 'lucide-react';

export const AgencyCalculator: React.FC = () => {
  const [adSpend, setAdSpend] = useState(25000); 
  
  // Traditional Agency Model
  const agencyRetainer = 3000;
  const percentFee = 0.15; // 15%
  const agencyTotal = agencyRetainer + (adSpend * percentFee);
  
  // OnCallAds Model
  const onCallFee = 3495; // Growth Plan
  
  const savings = agencyTotal - onCallFee;
  const annualSavings = savings * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
             <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3 block font-mono">/// Calculator</span>
             <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 mb-6 leading-tight">
               Calculate Your<br/>
               <span className="text-zinc-400">"Agency Tax."</span>
             </h2>
             <p className="text-zinc-600 text-lg mb-8">
               Traditional agencies punish you for success. As you scale, their fee goes up—for doing the exact same work.
             </p>
             <p className="text-zinc-900 font-bold mb-4 font-mono">
               > Don't give away your margin. Re-invest it.
             </p>
             <div className="bg-indigo-50 border-2 border-black p-6 shadow-hard-sm">
                <p className="text-sm text-indigo-900 font-bold uppercase mb-2 flex items-center gap-2">
                    <Calculator className="w-4 h-4" /> The Math
                </p>
                <p className="text-indigo-900/80 text-sm leading-relaxed font-mono">
                    Standard Agency: $3k Retainer + 15% of Ad Spend.<br/>
                    OnCallAds: Flat Monthly Fee.
                </p>
             </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-900 p-8 md:p-12 text-white border-4 border-black shadow-hard-lg">
             
             {/* Slider */}
             <div className="mb-12">
                 <div className="flex justify-between mb-4">
                     <label className="font-bold text-white uppercase tracking-wider text-sm font-mono">Your Monthly Ad Spend</label>
                     <span className="font-mono text-indigo-400 font-bold bg-zinc-800 border border-zinc-700 px-3 py-1">
                         {formatCurrency(adSpend)}
                     </span>
                 </div>
                 <input 
                     type="range" 
                     min="5000" 
                     max="100000" 
                     step="5000" 
                     value={adSpend} 
                     onChange={(e) => setAdSpend(parseInt(e.target.value))}
                     className="w-full h-4 bg-zinc-800 border-2 border-black appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400"
                 />
             </div>

             {/* Comparison */}
             <div className="grid grid-cols-2 gap-8 pb-8 border-b-2 border-zinc-800 border-dashed">
                 <div>
                     <p className="text-zinc-500 text-xs font-bold uppercase mb-1 font-mono">Traditional Agency Cost</p>
                     <p className="text-3xl font-bold text-red-500 font-mono">{formatCurrency(agencyTotal)}<span className="text-sm text-zinc-500 font-normal">/mo</span></p>
                     <p className="text-xs text-zinc-500 mt-1 font-mono">($3k + 15% of spend)</p>
                 </div>
                 <div>
                     <p className="text-zinc-500 text-xs font-bold uppercase mb-1 font-mono">OnCallAds Cost</p>
                     <p className="text-3xl font-bold text-green-400 font-mono">{formatCurrency(onCallFee)}<span className="text-sm text-zinc-500 font-normal">/mo</span></p>
                     <p className="text-xs text-zinc-500 mt-1 font-mono">(Flat Growth Plan)</p>
                 </div>
             </div>

             <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div>
                     <p className="text-indigo-400 text-xs uppercase tracking-widest font-bold mb-1 font-mono">Capital You Can Re-Invest</p>
                     <p className="text-5xl font-display font-bold text-white tracking-tight">{formatCurrency(annualSavings)}<span className="text-lg text-zinc-500">/yr</span></p>
                 </div>
                 <button 
                     onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                     className="w-full md:w-auto px-6 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center gap-2 border-2 border-black shadow-hard hover:translate-y-1 hover:shadow-none"
                 >
                     <RefreshCw className="w-4 h-4" /> Keep Your Profit
                 </button>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};