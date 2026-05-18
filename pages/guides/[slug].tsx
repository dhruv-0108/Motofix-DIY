import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Clock, Wrench, AlertTriangle, CheckSquare, Square } from 'lucide-react';

export default function GuideDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [completed, setCompleted] = useState(false);

  // Mock data for the guide
  const guide = {
    title: slug ? (slug as string).split('-').join(' ') : 'Guide Title',
    diff: 'Easy',
    time: '15 min',
    tools: ['Clean rag', 'Funnel', '15W50 Engine Oil'],
    safety: 'Ensure engine is warm but not hot. Bike must be on center stand on level ground.',
    compatible: ['Classic 350', 'Meteor 350', 'Hunter 350'],
    steps: [
      { id: 1, text: 'Place the bike on its center stand on a completely flat surface. Wait 5 minutes if the bike was just running.' },
      { id: 2, text: 'Locate the oil level window on the right side of the engine casing.' },
      { id: 3, text: 'Check if the oil level is between the MIN and MAX lines. If it is below MIN, you need to top up.' },
      { id: 4, text: 'Open the oil filler cap located above the window. You may need a pair of pliers if it is tight.' },
      { id: 5, text: 'Place the funnel and pour small amounts of the recommended engine oil. Wait 30 seconds for the oil to settle, then check the window again.' },
      { id: 6, text: 'Stop when the oil level reaches just under the MAX line. Do not overfill.' },
      { id: 7, text: 'Wipe away any spills and tighten the filler cap securely.' }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] pb-24">
      {/* Header */}
      <section className="bg-[#1A1A1A] border-b border-[#333] pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/guides" className="inline-flex items-center text-[#F0EDE8]/50 hover:text-[#F5A623] mb-8 transition-colors uppercase tracking-widest text-xs font-bold">
            <ChevronLeft className="w-4 h-4 mr-1" /> All Guides
          </Link>
          
          <div className="flex gap-4 mb-6">
            <span className="bg-[#0D0D0D] text-[#F0EDE8]/70 px-3 py-1 text-xs font-bold uppercase tracking-widest border border-[#333]">
              Engine
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-green-500 py-1">
              {guide.diff}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#F0EDE8] mb-8 capitalize">
            {guide.title}
          </h1>

          <div className="flex flex-wrap gap-8 text-[#F0EDE8]/80 font-bold uppercase tracking-widest text-sm">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-[#F5A623]" /> Time: {guide.time}
            </div>
            <div className="flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-[#F5A623]" /> {guide.tools.length} Tools
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Requirements Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A1A] border border-[#333] p-6">
            <h3 className="font-bold text-[#F0EDE8] uppercase tracking-wider mb-4 border-b border-[#333] pb-2">Tools Needed</h3>
            <ul className="space-y-2 text-[#F0EDE8]/80 text-sm">
              {guide.tools.map((tool, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mr-3"></div>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#1A1A1A] border border-[#333] p-6">
            <h3 className="font-bold text-[#F0EDE8] uppercase tracking-wider mb-4 border-b border-[#333] pb-2 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-[#F5A623]" /> Safety First
            </h3>
            <p className="text-[#F0EDE8]/80 text-sm leading-relaxed">
              {guide.safety}
            </p>
          </div>
        </div>

        {/* Compatible Bikes */}
        <div className="bg-[#0D0D0D] border border-[#333] p-6 border-l-4 border-l-[#F5A623]">
          <h3 className="text-xs font-bold text-[#F0EDE8]/50 uppercase tracking-widest mb-2">Compatible Models</h3>
          <p className="text-[#F0EDE8] font-medium uppercase text-sm tracking-wide">
            {guide.compatible.join(' • ')}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-[#F0EDE8] mb-8 border-b border-[#333] pb-4">
            Step-by-Step
          </h2>
          
          {guide.steps.map((step, index) => (
            <div key={step.id} className="bg-[#1A1A1A] border border-[#333] overflow-hidden flex flex-col md:flex-row">
              <div className="bg-[#0D0D0D] w-full md:w-32 flex-shrink-0 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#333]">
                <span className="text-4xl font-black text-[#F5A623] opacity-50">0{step.id}</span>
              </div>
              <div className="p-6 md:p-8 flex-grow">
                <p className="text-[#F0EDE8] text-lg leading-relaxed">{step.text}</p>
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-[#0D0D0D] border border-[#333] mt-6 flex items-center justify-center opacity-50">
                  <span className="text-[#F0EDE8]/30 uppercase text-xs font-bold tracking-widest">Image Placeholder</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completion State */}
        <div className="pt-12 border-t border-[#333] text-center">
          <button 
            onClick={() => setCompleted(!completed)}
            className={`inline-flex items-center font-bold uppercase tracking-widest px-8 py-4 transition-colors border-2 ${
              completed 
                ? 'bg-green-500/20 text-green-500 border-green-500' 
                : 'bg-[#F5A623] text-[#0D0D0D] border-[#F5A623] hover:bg-[#F5A623]/90'
            }`}
          >
            {completed ? (
              <><CheckSquare className="w-5 h-5 mr-3" /> Job Completed</>
            ) : (
              <><Square className="w-5 h-5 mr-3" /> Mark as Complete</>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
