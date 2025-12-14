import React, { useState } from 'react';
import { Send, Bell, TrendingUp, Check, Loader2 } from 'lucide-react';

const SCENARIOS = [
  {
    id: 'slow-day',
    title: 'Fill Slow Tuesday',
    icon: 'Calendar',
    notification: {
      title: '⚡ Flash Opening',
      body: 'We have 2 spots left for tomorrow afternoon. Tap to claim $20 off!',
      time: 'NOW'
    },
    stats: { openRate: '42%', bookings: 3, revenue: 450 }
  },
  {
    id: 'weather',
    title: 'Storm Alert',
    icon: 'CloudRain',
    notification: {
      title: '⛈️ Storm Warning',
      body: 'Heavy rain expected Friday. Schedule your gutter check before it hits.',
      time: '2m ago'
    },
    stats: { openRate: '68%', bookings: 12, revenue: 1800 }
  },
  {
    id: 'lapse',
    title: 'Re-Activate Client',
    icon: 'History',
    notification: {
      title: 'We miss you, Sarah!',
      body: 'It’s been 6 months since your last visit. Book this week for a free upgrade.',
      time: '12m ago'
    },
    stats: { openRate: '35%', bookings: 1, revenue: 125 }
  }
];

export const InteractiveDemo: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(SCENARIOS[0]);
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT'>('IDLE');
  const [displayStats, setDisplayStats] = useState({ openRate: '0%', bookings: 0, revenue: 0 });

  const handleSend = () => {
    if (status !== 'IDLE') return;
    setStatus('SENDING');
    setDisplayStats({ openRate: '0%', bookings: 0, revenue: 0 });
    
    // Simulate Network Request
    setTimeout(() => {
        setStatus('SENT');
        animateStats();
    }, 800);
  };

  const animateStats = () => {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        if (progress > 100) {
            clearInterval(interval);
            return;
        }
        
        // Simple linear interpolation for visuals
        setDisplayStats({
            openRate: activeScenario.stats.openRate,
            bookings: Math.ceil((activeScenario.stats.bookings * progress) / 100),
            revenue: Math.ceil((activeScenario.stats.revenue * progress) / 100)
        });
    }, 50);
  };

  const reset = (scenario: typeof SCENARIOS[0]) => {
    setActiveScenario(scenario);
    setStatus('IDLE');
    setDisplayStats({ openRate: '0%', bookings: 0, revenue: 0 });
  };

  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Bell className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Interactive Simulator</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">See How Fast It Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Pick a real-world business scenario, send a campaign, and watch the revenue generate in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: Command Center */}
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-400" /> Command Center
                    </h3>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                </div>

                {/* Scenario Selector */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                    {SCENARIOS.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => reset(s)}
                            className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                                activeScenario.id === s.id 
                                ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/50' 
                                : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600 hover:bg-slate-750'
                            }`}
                        >
                            <span className="block text-xs font-bold uppercase tracking-wider mb-1 opacity-70">Scenario</span>
                            <span className="block font-bold text-sm leading-tight">{s.title}</span>
                        </button>
                    ))}
                </div>

                {/* Action Area */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-slate-400 text-sm font-medium">Campaign Ready</span>
                        <span className="text-green-400 text-xs font-bold bg-green-400/10 px-2 py-1 rounded">EST. REVENUE: ${activeScenario.stats.revenue}</span>
                    </div>
                    <button
                        onClick={handleSend}
                        disabled={status !== 'IDLE'}
                        className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                            status === 'IDLE' 
                            ? 'bg-white text-slate-900 hover:bg-blue-50' 
                            : 'bg-green-500 text-white cursor-default'
                        }`}
                    >
                        {status === 'IDLE' && <><Send className="w-5 h-5" /> Launch Campaign</>}
                        {status === 'SENDING' && <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>}
                        {status === 'SENT' && <><Check className="w-5 h-5" /> Campaign Sent</>}
                    </button>
                </div>

                {/* Live Stats */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 text-center">
                        <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Open Rate</span>
                        <span className={`text-xl font-bold font-mono transition-colors ${status === 'SENT' ? 'text-white' : 'text-slate-600'}`}>
                            {status === 'SENT' ? displayStats.openRate : '--'}
                        </span>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 text-center">
                        <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Bookings</span>
                        <span className={`text-xl font-bold font-mono transition-colors ${status === 'SENT' ? 'text-white' : 'text-slate-600'}`}>
                            {status === 'SENT' ? displayStats.bookings : '--'}
                        </span>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 text-center relative overflow-hidden">
                        {status === 'SENT' && <div className="absolute inset-0 bg-green-500/10 animate-pulse"></div>}
                        <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Revenue</span>
                        <span className={`text-xl font-bold font-mono transition-colors ${status === 'SENT' ? 'text-green-400' : 'text-slate-600'}`}>
                            {status === 'SENT' ? `$${displayStats.revenue}` : '--'}
                        </span>
                    </div>
                </div>
            </div>

            {/* RIGHT: Phone Mockup */}
            <div className="flex justify-center perspective-1000">
                <div className="relative w-[320px] h-[640px] bg-black rounded-[3rem] border-8 border-slate-800 shadow-2xl shadow-black ring-1 ring-slate-700 overflow-hidden transform rotate-y-12 transition-transform duration-700 hover:rotate-0">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-2xl z-20"></div>
                    
                    {/* Screen Content */}
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554110397-9bac083977c6?auto=format&fit=crop&q=80&w=1000")' }}>
                        {/* Status Bar */}
                        <div className="absolute top-0 w-full p-4 flex justify-between text-white text-xs font-medium z-10 pt-3">
                            <span>9:41</span>
                            <div className="flex gap-1.5">
                                <div className="w-4 h-2.5 bg-white rounded-sm"></div>
                            </div>
                        </div>

                        {/* Lock Screen Overlay */}
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]">
                            <div className="mt-24 text-center">
                                <h1 className="text-6xl text-white font-thin tracking-tight">9:41</h1>
                                <p className="text-white text-lg font-medium mt-2">Tuesday, June 12</p>
                            </div>

                            {/* Notifications Area */}
                            <div className="mt-12 px-4 space-y-3">
                                
                                {/* Dynamic Notification */}
                                {status === 'SENT' && (
                                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg animate-slide-down transform transition-all duration-500 cursor-pointer hover:bg-white/90">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 bg-blue-600 rounded-md flex items-center justify-center">
                                                    <span className="text-white font-bold text-[10px]">A</span>
                                                </div>
                                                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">APPFLOW • {activeScenario.notification.time}</span>
                                            </div>
                                        </div>
                                        <h4 className="text-slate-900 font-bold text-sm mb-1">{activeScenario.notification.title}</h4>
                                        <p className="text-slate-700 text-xs leading-snug">{activeScenario.notification.body}</p>
                                    </div>
                                )}

                                {/* Fake older notifications for realism */}
                                <div className={`bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-sm transform scale-95 opacity-50 origin-top transition-all duration-500 ${status === 'SENT' ? 'mt-2' : ''}`}>
                                     <div className="flex items-center gap-2 mb-2">
                                         <div className="w-5 h-5 bg-green-500 rounded-md"></div>
                                         <span className="text-xs font-bold text-slate-800 uppercase">MESSAGES</span>
                                     </div>
                                     <p className="text-slate-800 text-xs font-semibold">Mom: Are you coming for dinner?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};