import React, { useState } from 'react';
import { generateAdHooks } from '../services/geminiService';
import { AdHook } from '../types';
import { Sparkles, Loader2, Target, Terminal } from 'lucide-react';
import { DynamicIcon } from './Icons';

export const AdHookGenerator: React.FC = () => {
  const [product, setProduct] = useState('');
  const [hooks, setHooks] = useState<AdHook[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product.trim()) return;
    
    setLoading(true);
    setHooks(null);
    const results = await generateAdHooks(product);
    setHooks(results);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-brand-indigo border-y-4 border-black relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-black text-white font-mono text-sm font-bold uppercase mb-6 shadow-hard-sm transform -rotate-1">
             <Terminal className="w-4 h-4" /> AI Strategy Engine
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase leading-none">
            Generate 7-Figure <br/><span className="text-black bg-white px-2">Ad Hooks</span> Free
          </h2>
          <p className="text-indigo-100 text-xl max-w-2xl mx-auto font-medium">
            Enter your product below. Our engine will generate 3 psychological angles used by top brands.
          </p>
        </div>

        <div className="bg-white border-4 border-black p-4 shadow-hard-lg max-w-2xl mx-auto mb-16">
            <div className="bg-zinc-100 border-2 border-black p-4 mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-black border border-zinc-500"></div>
                    <div className="w-3 h-3 rounded-full bg-black border border-zinc-500"></div>
                </div>
                <div className="text-xs font-mono font-bold text-zinc-500 uppercase">Input Terminal</div>
            </div>
            
            <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-4">
            <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="e.g. Organic Dog Food for Puppies"
                className="flex-1 px-6 py-4 bg-white border-2 border-black text-black placeholder-zinc-500 focus:outline-none focus:ring-0 focus:bg-yellow-50 font-mono text-sm transition-colors"
            />
            <button
                type="submit"
                disabled={loading || !product.trim()}
                className="px-8 py-4 bg-black text-white font-bold uppercase tracking-wider border-2 border-black hover:bg-brand-orange hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-hard-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                Generate
            </button>
            </form>
        </div>

        {hooks && (
          <div className="grid gap-8 md:grid-cols-3 animate-fade-in-up">
            {hooks.map((hook, idx) => (
              <div key={idx} className="bg-white border-4 border-black p-6 shadow-hard hover:-translate-y-2 hover:shadow-hard-lg transition-all duration-200 group">
                <div className="w-12 h-12 bg-yellow-300 border-2 border-black flex items-center justify-center mb-6 text-black shadow-hard-sm group-hover:rotate-12 transition-transform">
                  <DynamicIcon name={hook.icon} />
                </div>
                <span className="text-xs font-bold bg-black text-white px-2 py-1 uppercase tracking-widest mb-4 inline-block">{hook.angle}</span>
                <h4 className="text-xl font-display font-bold text-black mb-4 leading-tight">"{hook.headline}"</h4>
                <div className="p-4 bg-zinc-50 border-2 border-black border-dashed">
                     <p className="text-xs font-bold text-zinc-500 uppercase mb-1">Visual Concept</p>
                     <p className="text-sm text-black font-mono leading-snug">{hook.visualIdea}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};