import React from 'react';

export const TermsOfService: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-zinc-100 pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-black">
       <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 border-4 border-black shadow-hard-lg">
        <button 
          onClick={onBack}
          className="mb-8 font-mono font-bold uppercase text-sm border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors shadow-hard-sm active:translate-y-[2px] active:shadow-none"
        >
          ← Return to Base
        </button>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold text-black mb-8 uppercase border-b-4 border-black pb-4">Terms of Engagement</h1>
        <div className="space-y-6 font-mono text-sm leading-relaxed">
          <p className="bg-zinc-100 p-4 border-l-4 border-black"><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          
          <p>
            By accessing the website operated by Brask Group LLC dba OnCall Ads, you agree to these Terms. Read them.
          </p>

          <h3 className="text-xl font-bold bg-black text-white inline-block px-2 py-1 mt-8 uppercase">1. Agreement</h3>
          <p>
            If you disagree with any part of these terms, you may not access the Service.
          </p>

          <h3 className="text-xl font-bold bg-black text-white inline-block px-2 py-1 mt-8 uppercase">2. Intellectual Property</h3>
          <p>
            The Service and its original content are the exclusive property of Brask Group LLC dba OnCall Ads.
          </p>

          <h3 className="text-xl font-bold bg-black text-white inline-block px-2 py-1 mt-8 uppercase">3. Termination</h3>
          <p>
            We may terminate or suspend access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h3 className="text-xl font-bold bg-black text-white inline-block px-2 py-1 mt-8 uppercase">4. Governing Law</h3>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Delaware, United States.
          </p>

          <h3 className="text-xl font-bold bg-black text-white inline-block px-2 py-1 mt-8 uppercase">5. Contact</h3>
          <p>Questions? Contact us at: <strong>hello@oncallads.com</strong></p>
        </div>
      </div>
    </div>
  );
};