import React from 'react';
import { Search, BrainCircuit, AlertCircle } from 'lucide-react';

export const WhyApp: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3 block">The Core Problem</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                    Why are you paying to acquire the same customer twice?
                </h2>
            </div>
            <div className="text-right hidden md:block">
                 <div className="inline-block p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Average CAC (Cost Per Acquisition)</p>
                    <p className="text-2xl font-bold text-slate-900">$50 - $150</p>
                    <p className="text-xs text-red-500 mt-1">Per booking via Google Ads</p>
                 </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* The Retention Problem */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 text-blue-600">
                    <BrainCircuit className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The "Memory Gap"</h3>
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-bold text-slate-900">68%</span>
                    <span className="text-slate-500">of customers</span>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                    forget the name of a service provider within 3 months. When they need you again, they don't call you directly. They go back to Google.
                </p>
            </div>

            {/* The Google Trap */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 text-orange-500">
                    <Search className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The "Search Trap"</h3>
                <p className="text-slate-600 mb-6 text-lg">
                    When existing customers search "landscaper near me" or "plumber cityname", they see your competitors' ads first. 
                </p>
                
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                     <div className="flex justify-between p-4 border-b border-slate-100 text-sm">
                         <span className="font-semibold text-slate-400">Google Search Result 1</span>
                         <span className="text-red-500 font-medium">Competitor Ad</span>
                     </div>
                     <div className="flex justify-between p-4 border-b border-slate-100 text-sm">
                         <span className="font-semibold text-slate-400">Google Search Result 2</span>
                         <span className="text-red-500 font-medium">Aggregator (Yelp/Angi)</span>
                     </div>
                     <div className="flex justify-between p-4 bg-blue-50 text-sm">
                         <span className="font-semibold text-blue-700">Google Search Result 3</span>
                         <span className="text-blue-700 font-medium">Your Website (Maybe)</span>
                     </div>
                </div>
            </div>
        </div>

        {/* The Impact */}
        <div className="w-full bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
                 <div>
                     <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                         <AlertCircle className="w-6 h-6 text-orange-400" />
                         Financial Impact
                     </h3>
                     <p className="text-slate-400 text-sm">
                         For a business with 1,000 customers, this leakage costs:
                     </p>
                 </div>
                 
                 <div className="flex items-center gap-6">
                     <div className="text-right">
                        <span className="block text-4xl md:text-5xl font-bold text-white tracking-tight">$11,000+</span>
                        <span className="text-sm text-slate-400">Annual Lost Revenue</span>
                     </div>
                 </div>
             </div>
        </div>

      </div>
    </section>
  );
};