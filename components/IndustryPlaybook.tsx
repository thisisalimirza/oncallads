import React, { useState } from 'react';
import { Shovel, Thermometer, Scissors, Dumbbell, Car, ArrowRight, Zap } from 'lucide-react';

const INDUSTRIES = [
  {
    id: 'hvac',
    label: 'HVAC & Plumbing',
    icon: Thermometer,
    trigger: 'Weather Change',
    scenario: 'Temperatures drop below 32°F tonight.',
    notification: {
      title: '❄️ Freeze Warning',
      body: 'Pipes can burst tonight. Tap to book a $49 rapid-insulation check.'
    },
    result: 'Prevents emergency calls, generates consistent revenue.'
  },
  {
    id: 'landscape',
    label: 'Landscaping',
    icon: Shovel,
    trigger: 'Seasonal Shift',
    scenario: 'Spring is 2 weeks away.',
    notification: {
      title: '🌱 Early Bird Mulch Special',
      body: 'Get on the schedule before the rush. 10% off if you book this week.'
    },
    result: 'Fills your schedule in March before the phone even rings.'
  },
  {
    id: 'beauty',
    label: 'Med Spa / Salon',
    icon: Scissors,
    trigger: 'Time Elapsed',
    scenario: 'Client hasn\'t visited in 90 days (Botox wears off).',
    notification: {
      title: '✨ Time for a refresh?',
      body: 'It’s been 3 months. Sarah has an opening this Thursday at 2pm.'
    },
    result: 'Automates client retention without awkward follow-up calls.'
  },
  {
    id: 'fitness',
    label: 'Gym / Yoga',
    icon: Dumbbell,
    trigger: 'Attendance Gap',
    scenario: 'Member hasn\'t checked in for 10 days.',
    notification: {
      title: '💪 We miss you, Mike!',
      body: 'Come in today and get a free smoothie on us. Let\'s get back on track.'
    },
    result: 'Reduces churn by catching "at-risk" members early.'
  },
  {
    id: 'auto',
    label: 'Auto Detailing',
    icon: Car,
    trigger: 'Rain Forecast',
    scenario: 'Rain is clearing up for the weekend.',
    notification: {
      title: '☀️ Sunny Weekend Ahead',
      body: 'Perfect weather for a wash. We’ll come to your driveway.'
    },
    result: 'Turns weather patterns into predictable cash flow.'
  }
];

export const IndustryPlaybook: React.FC = () => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0]);

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3 block">The Playbook</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Strategies For <span className="text-blue-600">Your Trade</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We don't use generic templates. We build specific "Nudge Engines" tailored to your industry's triggers.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
            {/* Tabs */}
            <div className="lg:w-1/3 flex flex-col gap-3">
                {INDUSTRIES.map((ind) => (
                    <button
                        key={ind.id}
                        onClick={() => setActiveTab(ind)}
                        className={`text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-all duration-200 border-2 ${
                            activeTab.id === ind.id 
                            ? 'border-blue-600 bg-blue-50 shadow-md transform scale-105' 
                            : 'border-transparent hover:bg-slate-50 text-slate-500'
                        }`}
                    >
                        <div className={`p-2 rounded-lg ${activeTab.id === ind.id ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                            <ind.icon className="w-5 h-5" />
                        </div>
                        <span className={`font-bold ${activeTab.id === ind.id ? 'text-blue-900' : 'text-slate-600'}`}>
                            {ind.label}
                        </span>
                        {activeTab.id === ind.id && <ArrowRight className="w-4 h-4 ml-auto text-blue-600" />}
                    </button>
                ))}
            </div>

            {/* Display Area */}
            <div className="lg:w-2/3 bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center min-h-[400px]">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
                
                <div className="relative z-10 animate-fade-in-up key={activeTab.id}">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-blue-300 text-xs font-bold uppercase tracking-wide mb-6">
                        <Zap className="w-3 h-3" /> The Strategy
                    </div>

                    <h3 className="text-3xl font-bold mb-2">When {activeTab.trigger.toLowerCase()} happens...</h3>
                    <p className="text-slate-400 text-lg mb-8 italic">"{activeTab.scenario}"</p>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8 max-w-md">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                                <span className="text-white font-bold text-[10px]">A</span>
                            </div>
                            <span className="text-[10px] font-bold text-white/70 uppercase">YOUR APP • NOW</span>
                        </div>
                        <p className="font-bold text-white text-sm mb-1">{activeTab.notification.title}</p>
                        <p className="text-slate-300 text-sm leading-relaxed">{activeTab.notification.body}</p>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-1 h-12 bg-green-500 rounded-full"></div>
                        <div>
                            <p className="text-xs text-green-400 font-bold uppercase tracking-wider mb-1">The Result</p>
                            <p className="text-xl font-bold">{activeTab.result}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};