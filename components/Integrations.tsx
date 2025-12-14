import React from 'react';
import { Database } from 'lucide-react';

const Logo = ({ name }: { name: string }) => (
  <div className="group flex items-center justify-center px-8 py-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
     <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors font-display">{name}</span>
  </div>
);

export const Integrations: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide mb-8">
            <Database className="w-3 h-3" />
            Seamless Integration
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4">
            Works With Your Existing Stack
        </h3>
        <p className="text-slate-500 max-w-2xl mx-auto mb-12">
            We connect directly to your CRM and booking software. No manual data entry.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 opacity-80">
            <Logo name="ServiceTitan" />
            <Logo name="Mindbody" />
            <Logo name="Salesforce" />
            <Logo name="HubSpot" />
            <Logo name="Jane App" />
            <Logo name="Jobber" />
        </div>
        
        <p className="text-xs text-slate-400 mt-8">
            *All trademarks are property of their respective owners. AppFlow acts as a verified developer partner.
        </p>

      </div>
    </section>
  );
};