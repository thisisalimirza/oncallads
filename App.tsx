import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { VSL } from './components/VSL';
import { ComparisonTable } from './components/ComparisonTable';
import { Workflow } from './components/Workflow';
import { AgencyCalculator } from './components/AgencyCalculator';
import { AdHookGenerator } from './components/AdHookGenerator';
import { Pricing } from './components/Pricing';
import { AuditOffer } from './components/AuditOffer';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { StickyCTA } from './components/StickyCTA';
import { ExitIntent } from './components/ExitIntent';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Zap, Menu, X, Terminal, ArrowRight } from 'lucide-react';

type View = 'MAIN' | 'PRIVACY' | 'TERMS';

const Header: React.FC<{ onViewChange: (view: View) => void }> = ({ onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo Area */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => { onViewChange('MAIN'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
            <div className="bg-black p-2 border-2 border-transparent group-hover:border-black group-hover:bg-white transition-all shadow-hard-sm">
              <Zap className="text-white w-6 h-6 group-hover:text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display text-black tracking-tighter uppercase leading-none">OnCallAds</span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:block">GrowthProtocol_v2.0</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => { onViewChange('MAIN'); setTimeout(() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-sm font-bold font-mono uppercase text-black hover:bg-black hover:text-white px-2 py-1 transition-all">Protocol</button>
            <button onClick={() => { onViewChange('MAIN'); setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-sm font-bold font-mono uppercase text-black hover:bg-black hover:text-white px-2 py-1 transition-all">Pricing</button>
            <button 
              onClick={() => { onViewChange('MAIN'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
              className="bg-brand-indigo text-white px-6 py-3 border-2 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all font-bold uppercase tracking-wider text-xs flex items-center gap-2"
            >
              Book Intro Call <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-black border-2 border-black p-1 shadow-hard-sm active:translate-y-1 active:shadow-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b-4 border-black p-0 shadow-xl">
          <div className="flex flex-col">
             <button onClick={() => { setIsMobileMenuOpen(false); onViewChange('MAIN'); setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-left font-bold font-mono uppercase text-black p-6 border-b border-zinc-200 hover:bg-zinc-50">Pricing</button>
             <button onClick={() => { setIsMobileMenuOpen(false); onViewChange('MAIN'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-left font-bold font-mono uppercase text-white bg-black p-6 hover:bg-zinc-900">Book Intro Call</button>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC<{ onViewChange: (view: View) => void }> = ({ onViewChange }) => (
  <footer className="bg-zinc-950 text-zinc-400 py-16 border-t-8 border-brand-orange relative overflow-hidden">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
           <div className="flex items-center space-x-3 mb-6">
            <div className="bg-white p-2 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
              <Zap className="text-black w-5 h-5" />
            </div>
            <span className="text-2xl font-bold font-display text-white uppercase tracking-tighter">OnCallAds</span>
          </div>
          <p className="text-zinc-500 font-mono text-sm leading-relaxed max-w-sm border-l-2 border-zinc-800 pl-4">
            > SYSTEM STATUS: ONLINE<br/>
            > MISSION: KILL HOURLY BILLING.<br/>
            > LOCATION: GLOBAL.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold font-mono uppercase mb-6 border-b border-zinc-800 pb-2 inline-block">Legal Protocols</h4>
          <ul className="space-y-3 text-sm font-mono">
            <li><button onClick={() => { onViewChange('PRIVACY'); window.scrollTo(0,0); }} className="hover:text-brand-orange hover:underline transition-colors decoration-2 underline-offset-4">Privacy Policy</button></li>
            <li><button onClick={() => { onViewChange('TERMS'); window.scrollTo(0,0); }} className="hover:text-brand-orange hover:underline transition-colors decoration-2 underline-offset-4">Terms of Service</button></li>
          </ul>
        </div>
        <div>
           <h4 className="text-white font-bold font-mono uppercase mb-6 border-b border-zinc-800 pb-2 inline-block">Connect</h4>
           <a href="mailto:hello@oncallads.com" className="flex items-center gap-2 text-white hover:text-brand-orange transition-colors font-bold text-lg">
              <Terminal className="w-5 h-5" /> hello@oncallads.com
           </a>
        </div>
      </div>
      <div className="pt-8 border-t border-zinc-900 text-xs font-mono text-zinc-600 flex justify-between items-center">
        <p>© {new Date().getFullYear()} Brask Group LLC dba OnCall Ads. All Rights Reserved.</p>
        <div className="flex gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="uppercase tracking-widest">Systems Operational</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState<View>('MAIN');

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <StickyCTA />
      <ExitIntent />
      <Header onViewChange={setView} />
      
      {view === 'MAIN' && (
        <main>
          <Hero />
          <TrustBadges />
          <VSL />
          <Workflow />
          <AdHookGenerator />
          <ComparisonTable />
          <AgencyCalculator />
          <Pricing />
          <AuditOffer />
          <FAQ />
          <Contact />
        </main>
      )}

      {view === 'PRIVACY' && <PrivacyPolicy onBack={() => setView('MAIN')} />}
      {view === 'TERMS' && <TermsOfService onBack={() => setView('MAIN')} />}

      <Footer onViewChange={setView} />
    </div>
  );
}