import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Real Results. <span className="text-blue-600">Simple Math.</span></h2>
          <p className="text-slate-600 max-w-2xl text-lg">We don't deal in "brand awareness." We deal in booked appointments and revenue. Here is exactly how it works.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Case Study 1 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-xl transition-all duration-300 group">
            <div className="p-8 pb-0">
               <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-4">CASE STUDY: SALON</span>
               <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Filling The "Dead Tuesday"</h3>
               <p className="text-slate-500 mb-6">How a local salon added $1,800/mo in recurring revenue.</p>
            </div>
            
            <div className="bg-slate-50 p-8 border-t border-slate-100">
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Impact</p>
                    <div className="flex items-center gap-2 text-green-600 font-bold text-3xl font-display">
                       <TrendingUp className="w-6 h-6" /> 100%
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Slots Filled</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Speed</p>
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-3xl font-display">
                       <Users className="w-6 h-6 text-blue-500" /> 14m
                    </div>
                    <p className="text-sm text-slate-600 mt-1">To Sell Out</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-xl transition-all duration-300 group">
            <div className="p-8 pb-0">
               <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-4">CASE STUDY: HVAC</span>
               <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">The Weather Trigger</h3>
               <p className="text-slate-500 mb-6">Using weather forecasts to trigger preventative maintenance bookings.</p>
            </div>
            
            <div className="bg-slate-50 p-8 border-t border-slate-100">
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Bookings</p>
                    <div className="flex items-center gap-2 text-green-600 font-bold text-3xl font-display">
                       <Users className="w-6 h-6" /> 42
                    </div>
                    <p className="text-sm text-slate-600 mt-1">In 2 Hours</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Revenue</p>
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-3xl font-display">
                       <DollarSign className="w-6 h-6 text-blue-500" /> $6.2k
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Generated</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};