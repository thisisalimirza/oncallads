import React, { useState } from 'react';
import { ArrowRight, CheckSquare, Shield } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', website: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@oncallads.com?subject=Growth Inquiry: ${formData.website}&body=Name: ${formData.name}%0AEmail: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-24 bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Pitch */}
          <div>
            <div className="inline-block bg-brand-orange border-2 border-black px-4 py-2 font-mono font-bold uppercase text-xs mb-6 shadow-hard-sm">
                Capacity: Low
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-black mb-6 uppercase leading-none">
                Secure Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-blue-600">Slot.</span>
            </h2>
            <p className="text-xl text-zinc-800 font-medium mb-8 leading-relaxed border-l-4 border-black pl-6">
                We are not a "volume" agency. We work with a limited number of brands to maintain our 48h turnaround time.
            </p>
            
            <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                    <CheckSquare className="w-5 h-5 text-black" />
                    <span className="font-bold">Free Audit of Current Ad Account</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckSquare className="w-5 h-5 text-black" />
                    <span className="font-bold">Review Our "Winners" Vault</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckSquare className="w-5 h-5 text-black" />
                    <span className="font-bold">No-Pressure Strategy Chat</span>
                </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-zinc-100 p-8 border-4 border-black shadow-hard-lg relative">
             <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 font-mono text-xs font-bold uppercase">
                Secure Connection
             </div>

             <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-black uppercase font-mono">Company Website</label>
                    <input 
                        required 
                        className="w-full bg-white border-2 border-black p-4 focus:bg-yellow-50 focus:outline-none transition-colors font-mono text-sm" 
                        placeholder="www.yourbrand.com" 
                        value={formData.website} 
                        onChange={(e) => setFormData({...formData, website: e.target.value})} 
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm font-bold text-black uppercase font-mono">Work Email</label>
                    <input 
                        required 
                        type="email" 
                        className="w-full bg-white border-2 border-black p-4 focus:bg-yellow-50 focus:outline-none transition-colors font-mono text-sm" 
                        placeholder="growth@company.com" 
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-black uppercase font-mono">Founder Name</label>
                    <input 
                        required 
                        type="text" 
                        className="w-full bg-white border-2 border-black p-4 focus:bg-yellow-50 focus:outline-none transition-colors font-mono text-sm" 
                        placeholder="John Doe" 
                        value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    />
                </div>

                <button type="submit" className="w-full py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-brand-indigo hover:shadow-none transition-all border-2 border-black shadow-hard flex items-center justify-center gap-3 mt-4 group">
                  Submit Application <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center text-xs text-zinc-500 font-mono mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-3 h-3" /> Data is encrypted. No spam.
                </p>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};