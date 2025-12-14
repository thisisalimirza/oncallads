import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const PricingGuarantee: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="bg-gradient-to-br from-slate-50 to-white p-12 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            
            <ShieldCheck className="w-20 h-20 text-blue-600 mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                The "Breakeven" Guarantee
            </h2>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
                We are partners, not vendors. If our audit doesn't project a <span className="font-bold text-slate-900">positive ROI within 6 months</span>, we will not accept your project.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                 <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" /> No Guesswork
                    </h4>
                    <p className="text-sm text-slate-500">We analyze your booking frequency and ticket value before sending an invoice.</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" /> Fixed Pricing
                    </h4>
                    <p className="text-sm text-slate-500">One upfront build fee. One flat monthly support fee. No hidden hourly billing.</p>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};