import React, { useState } from 'react';
import { Play, Volume2, AlertOctagon } from 'lucide-react';

export const VSL: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-zinc-950 text-white border-b-4 border-black relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/3 text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 border border-black text-white text-xs font-mono font-bold uppercase mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                <AlertOctagon className="w-3 h-3" /> The Conflict of Interest
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-none">
                THE MATH IS <br/><span className="text-brand-orange">RIGGED.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-mono text-sm">
                {'>'} AGENCY MODEL DETECTED: <span className="text-red-500">FLAWED.</span><br/>
                {'>'} IF THEY TAKE % OF SPEND...<br/>
                {'>'} THEY WANT YOU TO SPEND MORE.<br/>
                {'>'} NOT PROFIT MORE.
            </p>
            <div className="text-white text-lg border-l-4 border-brand-orange pl-4 bg-zinc-900/50 p-4">
               <p className="font-bold italic">"Why would they work hard to lower your CPA, if it means their commission check gets smaller?"</p>
            </div>
          </div>

          {/* Video Monitor Container */}
          <div className="md:w-2/3 w-full">
            <div className="relative bg-zinc-900 border-4 border-zinc-800 rounded-xl p-2 shadow-hard-lg shadow-black">
                {/* Monitor Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b-2 border-zinc-950 mb-2">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono text-zinc-500 uppercase">SYS.ROOT.TRUTH_PROTOCOL</div>
                </div>

                <div 
                    className="relative w-full aspect-video bg-black overflow-hidden cursor-pointer group border-2 border-zinc-950"
                    onClick={() => setIsPlaying(true)}
                >
                    {!isPlaying ? (
                        <>
                            {/* REC Indicator */}
                            <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                                <span className="text-white font-mono text-xs font-bold">REC</span>
                            </div>

                            {/* Thumbnail Image */}
                            <img 
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                                alt="Meeting" 
                                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            
                            {/* Center Play Button */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                <div className="w-24 h-24 bg-white border-4 border-black flex items-center justify-center shadow-hard group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                                    <Play className="w-10 h-10 fill-current" />
                                </div>
                                <p className="mt-6 font-bold font-mono text-sm tracking-widest uppercase bg-black text-white px-2 py-1">Watch Briefing</p>
                            </div>
                            
                            {/* Grid Overlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-black flex items-center justify-center">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0" 
                                title="VSL" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};