import React from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`border-2 border-black bg-white mb-4 shadow-hard-sm transition-all ${isOpen ? 'bg-yellow-50' : ''}`}>
      <button 
        className="w-full py-6 px-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold font-display text-black uppercase tracking-tight">
            {question}
        </span>
        <div className={`border-2 border-black p-1 transition-colors ${isOpen ? 'bg-black text-white' : 'bg-white text-black'}`}>
            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 text-zinc-800 leading-relaxed text-base border-t-2 border-black border-dashed pt-4 font-medium">
            {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 border-t-4 border-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-white border-2 border-black rounded-full mb-4 shadow-hard-sm">
                <HelpCircle className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-4xl font-display font-bold text-black uppercase">Interrogation Room</h2>
            <p className="text-zinc-600 mt-2 font-mono text-sm">Everything you need to know before joining.</p>
        </div>
        
        <div className="space-y-2">
          <FAQItem 
            question="Why NO % of Ad Spend?"
            answer="Because it's a conflict of interest. Agencies that charge % of spend get paid MORE when your CPA goes up. We align our incentives with yours: results and speed, for a flat fee."
          />
          <FAQItem 
            question="What exactly is the turnaround time?"
            answer="48 hours for standard creative requests (static & simple video edits). Complex net-new video shoots or landing pages may take 3-4 days. We don't sleep until it's done."
          />
          <FAQItem 
            question="Is it really unlimited?"
            answer="Yes. You can add 100 requests to your backlog. We work through them sequentially every single business day. It's like having a full-time senior designer on staff, without the payroll tax."
          />
          <FAQItem 
            question="What if I hate the ads?"
            answer="We iterate until you love them. We don't have egos. If the data says it's bad, we kill it. If you say it's ugly, we fix it. Unlimited revisions."
          />
          <FAQItem 
            question="Can I pause if we have stock issues?"
            answer="Absolutely. You can pause your subscription instantly and resume when your inventory is back. You don't lose your remaining days."
          />
        </div>
      </div>
    </section>
  );
};