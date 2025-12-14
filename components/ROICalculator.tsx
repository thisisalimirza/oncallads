import React, { useState } from 'react';
import { ArrowRight, RefreshCw } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  const [revenue, setRevenue] = useState(50000); // Monthly Revenue
  const [clients, setClients] = useState(200);   // Active Clients
  
  // Math logic: 
  // 1. Churn Loss: 15% of clients don't return due to memory decay.
  // 2. Recovery: App prevents 60% of that churn.
  const churnRate = 0.15;
  const appRecoveryRate = 0.60;
  
  const lostRevenue = revenue * churnRate;
  const recoveredRevenue = lostRevenue * appRecoveryRate;
  const annualImpact = recoveredRevenue * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Side */}
          <div className="lg:col-span-5">
             <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3 block">ROI Projection Engine</span>
             <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
               Do The Math.<br/>
               <span className="text-slate-400">See The Leak.</span>
             </h2>
             <p className="text-slate-600 text-lg mb-8">
               Most business owners don't realize that a 15% "silent churn" rate is costing them six figures a year. 
               Use the sliders to model your specific business scenario.
             </p>
             <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                <p className="text-sm text-blue-800 font-medium mb-2 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" /> The Retention Formula
                </p>
                <p className="text-blue-900/70 text-sm leading-relaxed">
                    We assume a standard 15% drop-off of clients who forget to re-book, and a conservative 60% recovery rate using Push Notifications.
                </p>
             </div>
          </div>

          {/* Calculator Side */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-200 overflow-hidden">
             
             {/* Inputs */}
             <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                
                {/* Revenue Slider */}
                <div className="mb-8">
                    <div className="flex justify-between mb-4">
                        <label className="font-bold text-slate-900">Monthly Revenue</label>
                        <span className="font-mono text-blue-600 font-bold bg-blue-100 px-3 py-1 rounded-lg">
                            {formatCurrency(revenue)}
                        </span>
                    </div>
                    <input 
                        type="range" 
                        min="10000" 
                        max="500000" 
                        step="5000" 
                        value={revenue} 
                        onChange={(e) => setRevenue(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                </div>

                {/* Clients Slider */}
                <div>
                    <div className="flex justify-between mb-4">
                        <label className="font-bold text-slate-900">Active Clients</label>
                        <span className="font-mono text-blue-600 font-bold bg-blue-100 px-3 py-1 rounded-lg">
                            {clients} Clients
                        </span>
                    </div>
                    <input 
                        type="range" 
                        min="50" 
                        max="2000" 
                        step="10" 
                        value={clients} 
                        onChange={(e) => setClients(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                </div>

             </div>

             {/* Results */}
             <div className="p-8 bg-slate-900 text-white">
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Current Monthly Leakage</p>
                        <p className="text-2xl font-mono text-red-400">-{formatCurrency(lostRevenue)}</p>
                    </div>
                     <div>
                        <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Recoverable / Mo</p>
                        <p className="text-2xl font-mono text-green-400">+{formatCurrency(recoveredRevenue)}</p>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-blue-400 text-xs uppercase tracking-widest font-bold mb-1">Projected Annual Uplift</p>
                        <p className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">{formatCurrency(annualImpact)}</p>
                    </div>
                    <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full md:w-auto px-6 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                    >
                        Lock In This Revenue <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};