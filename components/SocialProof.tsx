import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonial = ({ name, role, business, quote, image }: any) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col h-full">
    <div className="flex gap-1 mb-6">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
      ))}
    </div>
    <div className="relative mb-6 flex-1">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100 -z-10" />
        <p className="text-slate-600 italic leading-relaxed text-lg">"{quote}"</p>
    </div>
    <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-blue-600 overflow-hidden">
        {image ? <img src={image} alt={name} className="w-full h-full object-cover" /> : name.charAt(0)}
      </div>
      <div>
        <div className="font-bold text-slate-900">{name}</div>
        <div className="text-slate-500 text-sm">{role}, {business}</div>
      </div>
    </div>
  </div>
);

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Client Success Stories</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">They Stopped Waiting & Started Growing</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            name="Mike Ross"
            role="Owner"
            business="Ross Family Landscaping"
            quote="I used to pray for calls during the winter. Now, I just send a 'Winter Prep' push notification and my schedule fills up in 20 minutes. It changed our cash flow overnight."
          />
          <Testimonial 
            name="Sarah Jenkins"
            role="Founder"
            business="Glow Aesthetics"
            quote="My email open rates were 15%. My app push notifications get seen by 100% of my clients. We filled a 'Slow Tuesday' in literally 14 minutes last week."
          />
          <Testimonial 
            name="David Chen"
            role="Owner"
            business="QuickFix HVAC"
            quote="We don't spend money on Google Ads anymore. We just market to the customers we already have. The app paid for itself in the first 3 months."
          />
        </div>
      </div>
    </section>
  );
};