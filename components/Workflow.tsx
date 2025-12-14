import React, { useState } from 'react';
import { Target, PenTool, BarChart3, CheckCircle2, FlaskConical, Rocket } from 'lucide-react';

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'strategize',
      title: '1. The Strategy',
      desc: 'We don\'t just take orders. We identify the "Efficiency Gap" in your account and propose 3 new angles to test immediately.',
      icon: Target,
      color: 'bg-indigo-500'
    },
    {
      id: 'produce',
      title: '2. The Production',
      desc: 'Our team builds static, video, and UGC assets. Designed for the click, not for the art gallery. Delivered in 48h.',
      icon: PenTool,
      color: 'bg-orange-500'
    },
    {
      id: 'optimize',
      title: '3. The Optimization',
      desc: 'We manage the bids and kill the losers. We cycle creative weekly to combat fatigue before it kills your ROAS.',
      icon: Rocket,
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="demo" className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-bold tracking-wide uppercase text-sm mb-3 block">The Engine</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">Velocity</span> = Growth.
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              The winner in 2025 isn't the brand with the prettiest ads. It's the brand that tests the most angles, fastest.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Steps List */}
            <div className="space-y-6">
                {steps.map((step, idx) => (
                    <div 
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                            activeStep === idx 
                            ? 'bg-zinc-800 border-indigo-500 shadow-xl' 
                            : 'bg-transparent border-zinc-800 hover:bg-zinc-800/50'
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${step.color}`}>
                                <step.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-1 ${activeStep === idx ? 'text-white' : 'text-zinc-400'}`}>{step.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Simulated UI */}
            <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/20 blur-[80px]"></div>
                <div className="relative bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl p-6 min-h-[400px] flex flex-col">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                        <div className="flex items-center gap-2">
                             <div className="w-3 h-3 rounded-full bg-red-500"></div>
                             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                             <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-zinc-500 text-xs font-mono">OnCallAds // Campaign Manager</div>
                    </div>

                    {/* Content Changing based on Step */}
                    <div className="flex-1 flex flex-col justify-center animate-fade-in-up key={activeStep}">
                        {activeStep === 0 && (
                            <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs">OCA</div>
                                    <div className="text-zinc-300 text-sm font-medium">@strategy_team Proposed Angle: "Us vs Them"</div>
                                </div>
                                <div className="ml-11 bg-zinc-800 p-3 rounded-lg text-sm text-zinc-400 mb-2">
                                    "Competitor X charges shipping. You don't. Let's run a split screen visual highlighting the $15 fee vs your $0 fee. Direct logic appeal."
                                </div>
                                <div className="ml-11 flex gap-2">
                                     <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded">Approved</span>
                                </div>
                            </div>
                        )}

                        {activeStep === 1 && (
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-zinc-800 aspect-square rounded-lg flex flex-col border border-zinc-700 relative overflow-hidden group">
                                    <div className="flex-1 flex items-center justify-center bg-black/50">
                                        <span className="font-display font-bold text-zinc-600">STATIC_V1</span>
                                    </div>
                                    <div className="p-2 bg-zinc-900 border-t border-zinc-800 flex justify-between items-center">
                                        <span className="text-[10px] text-zinc-500">Variation A</span>
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    </div>
                                </div>
                                <div className="bg-zinc-800 aspect-square rounded-lg flex flex-col border border-zinc-700 relative overflow-hidden group">
                                    <div className="flex-1 flex items-center justify-center bg-black/50">
                                        <span className="font-display font-bold text-zinc-600">VIDEO_HOOK</span>
                                    </div>
                                    <div className="p-2 bg-zinc-900 border-t border-zinc-800 flex justify-between items-center">
                                        <span className="text-[10px] text-zinc-500">Variation B</span>
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeStep === 2 && (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase font-bold">Campaign ROAS</p>
                                        <p className="text-2xl font-bold text-green-500">4.2x</p>
                                    </div>
                                    <BarChart3 className="text-zinc-600" />
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-400 border-l-2 border-orange-500 pl-3">
                                    <FlaskConical className="w-4 h-4 text-orange-500" /> 
                                    <span>Fatigue Detected on Ad Set #3. Cycling creative...</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-400 border-l-2 border-green-500 pl-3">
                                    <Rocket className="w-4 h-4 text-green-500" /> 
                                    <span>Scaling Budget on Winner #1 (+20%)</span>
                                </div>
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