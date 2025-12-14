import React, { useState } from 'react';
import { Play } from 'lucide-react';

export const VideoDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Play className="w-4 h-4 text-blue-600 fill-current mr-2" />
            <span className="text-blue-800 text-xs font-bold uppercase tracking-widest">See It In Action</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">3 Minutes to <span className="text-blue-600">Record Revenue</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Watch how a single push notification turns a slow Tuesday into your busiest day of the week.</p>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200 bg-slate-900 aspect-video group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
            
            {/* Background Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                 {/* Abstract UI Elements to simulate app interface */}
                 <div className="absolute inset-0 opacity-10 flex flex-col p-8 gap-4 scale-105 group-hover:scale-100 transition-transform duration-1000">
                    <div className="flex gap-4">
                        <div className="w-1/4 h-64 bg-white rounded-xl"></div>
                        <div className="w-3/4 h-64 bg-white rounded-xl"></div>
                    </div>
                    <div className="flex gap-4 h-full">
                        <div className="w-full bg-white rounded-xl"></div>
                    </div>
                 </div>

                 {/* Play Button Overlay */}
                 {!isPlaying && (
                     <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
                        <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center pl-2 border border-white/20 shadow-2xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                            <Play className="w-10 h-10 text-white fill-current" />
                        </div>
                        <p className="mt-6 text-white font-bold text-lg tracking-wider uppercase drop-shadow-lg">Play Walkthrough</p>
                     </div>
                 )}
                 
                 {/* Simulated Active State */}
                 {isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20">
                        <p className="text-white text-xl font-mono animate-pulse">Loading Demo Stream...</p>
                    </div>
                 )}
            </div>
        </div>
      </div>
    </section>
  );
};