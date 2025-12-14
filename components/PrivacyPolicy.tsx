import React from 'react';

export const PrivacyPolicy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-zinc-100 pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 border-4 border-black shadow-hard-lg">
        <button 
          onClick={onBack}
          className="mb-8 font-mono font-bold uppercase text-sm border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors shadow-hard-sm active:translate-y-[2px] active:shadow-none"
        >
          ← Return to Base
        </button>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold text-black mb-8 uppercase border-b-4 border-black pb-4">Privacy Protocol</h1>
        <div className="space-y-6 font-mono text-sm leading-relaxed">
          <p className="bg-zinc-100 p-4 border-l-4 border-black"><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          
          <p>
            Brask Group LLC dba OnCall Ads ("we", "us", or "our") operates this website. 
            This document outlines our strict protocols regarding data collection. We treat your data like a trade secret.
          </p>

          <h3 className="text-xl font-bold bg-black text-white inline-block px-2 py-1 mt-8 uppercase">1. Intel Collection</h3>
          <p>
            We collect minimal data required to execute operations:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-black">
             <li><strong>Identity Data:</strong> Name, Email, Business URL.</li>
             <li><strong>Telemetry:</strong> How you interact with our site (Cookies, Analytics).</li>
          </ul>

          <h3 className="text-xl font-bold bg-black text-white inline-block px-2 py-1 mt-8 uppercase">2. Operational Use</h3>
          <p>We use this data to:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-black">
            <li>Execute your service requests.</li>
            <li>Send critical mission updates.</li>
            <li>Improve our creative algorithms.</li>
          </ul>

          <h3 className="text-xl font-bold bg-black text-white inline-block px-2 py-1 mt-8 uppercase">3. Data Security</h3>
          <p>
            We use industry-standard encryption. However, no transmission over the internet is 100% impenetrable. We do not sell your data to third-party brokers.
          </p>

          <h3 className="text-xl font-bold bg-black text-white inline-block px-2 py-1 mt-8 uppercase">4. Contact Channel</h3>
          <p>Direct inquiries to: <strong>hello@oncallads.com</strong></p>
        </div>
      </div>
    </div>
  );
};