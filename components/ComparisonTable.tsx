import React from 'react';
import { X, Check, AlertTriangle, ShieldCheck } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-white px-4 py-2 font-mono font-bold uppercase text-sm mb-4 transform rotate-1">
             The Honest Comparison
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-6">
            THE OLD WAY IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">BROKEN.</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-xl font-medium">
            Traditional agencies are incentivized to burn your cash. We are incentivized to save your sanity.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
            <div className="min-w-[900px] border-4 border-black bg-white shadow-hard-lg">
                {/* Header */}
                <div className="grid grid-cols-4 bg-black text-white border-b-4 border-black">
                    <div className="p-6 font-mono text-sm uppercase tracking-wider text-zinc-500">Feature</div>
                    <div className="p-6 text-center font-bold font-mono uppercase tracking-wider text-red-400 bg-zinc-900 border-r border-zinc-800">
                        Typical Agency
                    </div>
                    <div className="p-6 text-center font-bold font-mono uppercase tracking-wider text-yellow-400 bg-zinc-900 border-r border-zinc-800">
                        Freelancer
                    </div>
                    <div className="p-6 text-center bg-brand-indigo relative overflow-hidden">
                        <div className="relative z-10 font-bold font-display uppercase tracking-wider text-white text-xl">OnCallAds</div>
                        <div className="absolute top-0 right-0 p-1">
                            <ShieldCheck className="w-4 h-4 text-white opacity-50" />
                        </div>
                    </div>
                </div>

                {/* Row 1: Cost */}
                <div className="grid grid-cols-4 border-b-2 border-black hover:bg-zinc-50 transition-colors group">
                    <div className="p-6 font-bold text-black flex items-center gap-2">
                        Cost Structure
                    </div>
                    <div className="p-6 text-center text-zinc-600 font-medium bg-zinc-50 border-r-2 border-black group-hover:bg-red-50 transition-colors">
                        $3k - $10k/mo + <span className="text-red-600 font-bold">15% of Spend</span>
                    </div>
                    <div className="p-6 text-center text-zinc-600 font-medium bg-zinc-50 border-r-2 border-black">
                        Hourly / Per Project
                    </div>
                    <div className="p-6 text-center text-black font-bold text-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                        Flat Monthly Fee
                    </div>
                </div>

                {/* Row 2: Incentive */}
                <div className="grid grid-cols-4 border-b-2 border-black hover:bg-zinc-50 transition-colors group">
                    <div className="p-6 font-bold text-black flex items-center gap-2">
                        Incentive Alignment
                    </div>
                    <div className="p-6 text-center text-zinc-600 font-medium bg-zinc-50 border-r-2 border-black group-hover:bg-red-50 transition-colors">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-red-600 uppercase mb-1">Conflict of Interest</span>
                            <span>Wants you to spend more</span>
                        </div>
                    </div>
                    <div className="p-6 text-center text-zinc-600 font-medium bg-zinc-50 border-r-2 border-black">
                         Wants more billable hours
                    </div>
                    <div className="p-6 text-center text-black font-bold bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                         Wants you to stay long-term
                    </div>
                </div>

                {/* Row 3: Speed */}
                <div className="grid grid-cols-4 border-b-2 border-black hover:bg-zinc-50 transition-colors group">
                    <div className="p-6 font-bold text-black flex items-center gap-2">
                        Turnaround Time
                    </div>
                    <div className="p-6 text-center text-zinc-600 font-medium bg-zinc-50 border-r-2 border-black group-hover:bg-red-50 transition-colors">
                         5-7 Business Days
                    </div>
                    <div className="p-6 text-center text-zinc-600 font-medium bg-zinc-50 border-r-2 border-black">
                         Inconsistent / Ghosting
                    </div>
                    <div className="p-6 text-center text-black font-bold bg-indigo-50 group-hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-green-600 border-2 border-green-600 rounded-full p-0.5" /> 48 Hours
                    </div>
                </div>

                 {/* Row 4: Contracts */}
                 <div className="grid grid-cols-4 hover:bg-zinc-50 transition-colors group">
                    <div className="p-6 font-bold text-black flex items-center gap-2">
                        Contracts
                    </div>
                    <div className="p-6 text-center text-zinc-600 font-medium bg-zinc-50 border-r-2 border-black group-hover:bg-red-50 transition-colors">
                         <div className="flex flex-col items-center">
                            <AlertTriangle className="w-5 h-5 text-red-500 mb-1" />
                            <span>6-12 Month Lock-in</span>
                        </div>
                    </div>
                    <div className="p-6 text-center text-zinc-600 font-medium bg-zinc-50 border-r-2 border-black">
                         None
                    </div>
                    <div className="p-6 text-center text-black font-bold bg-indigo-50 group-hover:bg-indigo-100 transition-colors text-lg">
                        Pause or Cancel Anytime
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};