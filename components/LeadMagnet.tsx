import React, { useState } from 'react';
import { Download, CheckCircle2, FileText, Lock } from 'lucide-react';

export const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    // In production, this would fire a webhook to ConvertKit/Mailchimp
    setTimeout(() => {
        window.location.href = `mailto:?subject=Your Retention Checklist&body=Here is your requested guide.`;
    }, 1500);
  };

  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Visual: The "Book" */}
            <div className="shrink-0 relative group perspective-1000">
                <div className="w-64 h-80 bg-slate-900 rounded-r-xl rounded-l-sm shadow-xl relative z-10 flex flex-col p-6 border-l-4 border-slate-800 transform transition-transform duration-500 group-hover:rotate-y-12">
                     <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Internal Protocol</div>
                     <h3 className="text-3xl font-display font-bold text-white leading-tight mb-2">The 6-Step Retention Checklist</h3>
                     <p className="text-slate-400 text-sm mt-auto border-t border-slate-800 pt-4">Brask Group Confidential</p>
                     
                     {/* Decorative Elements */}
                     <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
                </div>
                {/* Pages Effect */}
                <div className="absolute top-2 right-[-10px] w-full h-full bg-white rounded-r-xl border border-slate-200 z-0"></div>
                <div className="absolute top-4 right-[-20px] w-full h-full bg-white rounded-r-xl border border-slate-200 z-[-1]"></div>
            </div>

            {/* Content & Form */}
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase mb-6">
                    <FileText className="w-3 h-3" /> Free Resource
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                    Not Ready for an App Yet?
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Start fixing your churn today manually. Download our internal checklist we use to audit 7-figure service businesses. It includes:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {['The "2-Day Rule" for follow-ups', 'The "Win-Back" SMS Script', 'Google Review Automation', 'Service Frequency Calculator'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                            <span className="text-slate-700 font-medium text-sm">{item}</span>
                        </div>
                    ))}
                </div>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <input 
                            type="email" 
                            required
                            placeholder="Enter your business email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        />
                        <button 
                            type="submit"
                            className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
                        >
                            <Download className="w-5 h-5" /> Download PDF
                        </button>
                    </form>
                ) : (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-center gap-4 animate-fade-in-up">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-green-800">Check your inbox!</h4>
                            <p className="text-green-700 text-sm">We've sent the checklist to {email}.</p>
                        </div>
                    </div>
                )}
                
                <p className="flex items-center gap-2 text-xs text-slate-400 mt-4">
                    <Lock className="w-3 h-3" /> We hate spam as much as you do. Unsubscribe anytime.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};