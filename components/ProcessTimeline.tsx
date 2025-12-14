import React from 'react';
import { PhoneCall, FileText, Layout, PenTool, Code2, Rocket } from 'lucide-react';

const Step = ({ icon: Icon, number, title, weeks, description, details, isLast }: any) => (
  <div className="relative flex gap-8 group">
    {/* Line connector - Only render if NOT the last step */}
    {!isLast && (
      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-100 group-hover:bg-blue-200 transition-colors duration-500"></div>
    )}
    
    <div className="flex flex-col items-center shrink-0">
      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:border-blue-500 group-hover:text-blue-500 transition-all duration-300 shadow-sm z-10 relative">
        <Icon className="w-6 h-6" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white">
            {number}
        </div>
      </div>
    </div>

    <div className="flex-1 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h3>
          {weeks && <span className="text-xs font-bold py-1 px-3 rounded-full bg-slate-100 text-slate-500 w-fit">{weeks}</span>}
      </div>
      <p className="text-slate-600 leading-relaxed max-w-2xl mb-5 font-medium">{description}</p>
      
      {/* Details Box */}
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 max-w-2xl text-sm hover:border-blue-100 transition-colors">
          <ul className="space-y-2">
            {details.map((detail: string, i: number) => (
                <li key={i} className="flex gap-2 text-slate-500">
                    <span className="text-blue-500">•</span> {detail}
                </li>
            ))}
          </ul>
      </div>
    </div>
  </div>
);

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">The Roadmap</p>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Exactly What Happens After You Book</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Zero surprises. Zero hidden steps. Here is our transparent process.</p>
        </div>

        <div className="space-y-2 pl-4 md:pl-0">
          <Step 
            number="1"
            icon={PhoneCall}
            title="Discovery Call"
            weeks="30 Mins"
            description="We calculate your specific revenue leakage to see if an app is worth it."
            details={[
                "Understand your customer journey and booking flow.",
                "Calculate potential revenue recovery.",
                "We provide a fixed price quote. No estimates."
            ]}
          />
          <Step 
            number="2"
            icon={FileText}
            title="Proposal & Agreement"
            weeks="24 Hours"
            description="You get a detailed feature breakdown and a fixed-price quote."
            details={[
                "Complete scope of work.",
                "Milestone-based payment structure (30% deposit).",
                "Timeline guarantee."
            ]}
          />
          <Step 
            number="3"
            icon={Layout}
            title="Kickoff & Strategy"
            weeks="Week 1"
            description="We map out your app's 'Nudge Strategy' and gather your branding."
            details={[
                "Define notification triggers.",
                "Collect logo, brand colors, and assets.",
                "Set up your Apple Business account."
            ]}
          />
          <Step 
            number="4"
            icon={PenTool}
            title="Design & Approval"
            weeks="Week 2-3"
            description="We design every screen. You review and approve."
            details={[
                "Interactive prototype you can test on your phone.",
                "Unlimited design revisions.",
                "We don't write code until you love the look."
            ]}
          />
           <Step 
            number="5"
            icon={Code2}
            title="Development"
            weeks="Week 3-6"
            description="We build the app, the database, and the notification engine."
            details={[
                "Weekly video updates showing progress.",
                "Integration with your existing booking software.",
                "Building your admin dashboard."
            ]}
          />
          <Step 
            number="6"
            icon={Rocket}
            title="Launch & Training"
            weeks="Week 8"
            description="We publish to the App Store and teach your team how to use it."
            isLast={true}
            details={[
                "App Store submission handled by us.",
                "Marketing materials provided (QR codes, email templates).",
                "Team training session."
            ]}
          />
        </div>
      </div>
    </section>
  );
};