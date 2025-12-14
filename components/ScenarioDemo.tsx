import React from 'react';
import { XCircle, CheckCircle2, Smartphone } from 'lucide-react';

export const ScenarioDemo: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Reactive vs. Proactive</h2>
           <p className="text-slate-500 mt-4 text-lg">Are you paying to re-acquire the same people over and over?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* The Old Way */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-slate-200 rounded-lg">
                <XCircle className="text-slate-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-700">The "Reactive" Way</h3>
            </div>

            <ul className="space-y-6 relative">
                 <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-200 -z-10"></div>

                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white text-sm font-bold text-slate-400 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">1</div>
                  <div>
                    <strong className="block text-slate-900">Customer needs service</strong>
                    <span className="text-slate-500">They don't remember your name from 6 months ago.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white text-sm font-bold text-slate-400 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">2</div>
                  <div>
                    <strong className="block text-slate-900">They Search Google</strong>
                    <span className="text-slate-500">They see 3 competitor ads above your website.</span>
                  </div>
                </li>
                 <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white text-sm font-bold text-slate-400 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">3</div>
                  <div>
                    <strong className="block text-slate-900">They Pick Based on Price</strong>
                    <span className="text-slate-500">You have to re-bid for the customer you already won.</span>
                  </div>
                </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
                <span className="text-slate-500 font-medium">Re-Acquisition Cost</span>
                <span className="text-xl font-bold text-red-500">$50.00 / Lead</span>
            </div>
          </div>

          {/* The App Way */}
          <div className="bg-white rounded-3xl p-8 border-2 border-blue-600 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 bg-blue-600 rounded-bl-xl text-white text-xs font-bold uppercase tracking-wider">
                Recommended
            </div>
            
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-blue-100 rounded-lg">
                 <CheckCircle2 className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">The "AppFlow" Way</h3>
            </div>
              
              <div className="space-y-8">
                 {/* Notification Simulation */}
                <div className="relative">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg text-white font-bold text-xl">
                                Y
                            </div>
                            <div>
                                <div className="flex justify-between w-full">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">YOUR APP • JUST NOW</p>
                                </div>
                                <p className="text-slate-900 font-bold text-sm mt-1">⛈️ Heavy Rain Tonight</p>
                                <p className="text-slate-600 text-sm leading-snug">Don't let your garden drown. Tap to book a drainage check before the rain hits!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                        <Smartphone className="w-4 h-4" />
                     </div>
                     <div>
                        <strong className="block text-slate-900">Direct Connection</strong>
                        <p className="text-slate-500 text-sm">No Google. No Competitors. Just you and your customer.</p>
                     </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Acquisition Cost</span>
                    <span className="text-xl font-bold text-green-600">$0.00 / Lead</span>
                </div>
              </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};