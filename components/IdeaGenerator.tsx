import React, { useState } from 'react';
import { generateAppConcepts } from '../services/geminiService';
import { AppIdea } from '../types';
import { Sparkles, Loader2, Mail, Lightbulb } from 'lucide-react';
import { DynamicIcon } from './Icons';

export const IdeaGenerator: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [ideas, setIdeas] = useState<AppIdea[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType.trim()) return;
    
    setLoading(true);
    setIdeas(null);
    const results = await generateAppConcepts(businessType);
    setIdeas(results);
    setLoading(false);
  };

  const getMailtoLink = () => {
    if (!ideas) return "mailto:ali@braskgroup.com";
    
    const subject = encodeURIComponent(`App Concept Quote: ${businessType}`);
    const ideasText = ideas.map(i => `- ${i.title}: ${i.description}`).join('\n');
    const body = encodeURIComponent(
      `Hi Ali,\n\nI generated some app ideas for my ${businessType} business on your website:\n\n${ideasText}\n\nI'd like to get a quote for building this.\n\nBest,`
    );
    return `mailto:ali@braskgroup.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-white rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-indigo-900 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
             <Lightbulb className="w-6 h-6 text-yellow-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">What Could An App Do For <span className="text-blue-200">Your Business?</span></h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">Enter your business type (e.g., "Coffee Shop", "Gym", "Consultant") and our AI will suggest 3 revenue-generating features tailored to you.</p>
        </div>

        <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-4 mb-12 max-w-xl mx-auto">
          <input
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            placeholder="e.g. Dog Groomer"
            className="flex-1 px-6 py-4 rounded-xl bg-white border border-transparent text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all shadow-xl"
          />
          <button
            type="submit"
            disabled={loading || !businessType.trim()}
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl whitespace-nowrap"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
            Generate Ideas
          </button>
        </form>

        {ideas && (
          <div className="grid gap-6 md:grid-cols-3 animate-fade-in-up">
            {ideas.map((idea, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  <DynamicIcon name={idea.icon} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{idea.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{idea.description}</p>
              </div>
            ))}
            
            <div className="md:col-span-3 mt-10 text-center">
              <a 
                href={getMailtoLink()}
                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-colors backdrop-blur-sm border border-white/20"
              >
                Get a Quote for these Features <Mail className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};