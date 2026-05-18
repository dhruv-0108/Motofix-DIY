import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Wrench, Clock } from 'lucide-react';

const guides = [
  { id: 'engine-oil', title: 'How to check and top up engine oil', category: 'Engine', diff: 'Easy', time: '15 min', tools: 2 },
  { id: 'chain-lube', title: 'How to clean and lubricate your chain', category: 'Chain & Sprockets', diff: 'Easy', time: '20 min', tools: 3 },
  { id: 'tyre-pressure', title: 'How to check tyre pressure correctly', category: 'Tyres', diff: 'Easy', time: '5 min', tools: 1 },
  { id: 'brake-pads', title: 'How to check brake pad wear', category: 'Brakes', diff: 'Moderate', time: '30 min', tools: 2 },
  { id: 'air-filter', title: 'How to check and clean the air filter', category: 'Engine', diff: 'Moderate', time: '45 min', tools: 4 },
  { id: 'pre-ride', title: 'Pre-ride safety check (5-minute routine)', category: 'Pre-Ride Checks', diff: 'Easy', time: '5 min', tools: 0 },
  { id: 'battery-check', title: 'How to check battery terminals', category: 'Electricals', diff: 'Easy', time: '15 min', tools: 2 },
  { id: 'clutch-play', title: 'How to adjust clutch cable free play', category: 'Engine', diff: 'Moderate', time: '20 min', tools: 2 },
  { id: 'spoke-tension', title: 'How to check spoke tension', category: 'Tyres', diff: 'Advanced', time: '30 min', tools: 1 },
  { id: 'monsoon-prep', title: 'Monsoon prep checklist for your bike', category: 'Pre-Ride Checks', diff: 'Moderate', time: '60 min', tools: 5 }
];

const categories = ['All', 'Engine', 'Chain & Sprockets', 'Tyres', 'Brakes', 'Electricals', 'Pre-Ride Checks'];

export default function Guides() {
  const [filter, setFilter] = useState('All');
  
  const filteredGuides = filter === 'All' ? guides : guides.filter(g => g.category === filter);

  return (
    <div className="min-h-screen bg-[#0D0D0D] pb-24">
      {/* Header */}
      <section className="bg-[#1A1A1A] border-b border-[#333] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#F0EDE8] mb-4">
            DIY Maintenance Guides
          </h1>
          <p className="text-lg text-[#F0EDE8]/80 max-w-2xl">
            Step-by-step instructions. Know your tools, know your time, know your machine.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${filter === cat ? 'bg-[#F5A623] text-[#0D0D0D]' : 'bg-[#1A1A1A] text-[#F0EDE8] hover:bg-[#333] border border-[#333]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map(guide => (
            <Link href={`/guides/${guide.id}`} key={guide.id} className="group flex flex-col bg-[#1A1A1A] border border-[#333] hover:border-[#F5A623] transition-colors h-full">
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#0D0D0D] text-[#F0EDE8]/70 px-2 py-1 text-xs font-bold uppercase tracking-widest border border-[#333]">
                      {guide.category}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-widest ${guide.diff === 'Easy' ? 'text-green-500' : guide.diff === 'Moderate' ? 'text-yellow-500' : 'text-red-500'}`}>
                      {guide.diff}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F0EDE8] group-hover:text-[#F5A623] transition-colors uppercase leading-tight mb-6">
                    {guide.title}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#333]">
                  <div className="flex space-x-4">
                    <div className="flex items-center text-[#F0EDE8]/60 text-sm font-bold uppercase tracking-widest">
                      <Clock className="w-4 h-4 mr-1.5 text-[#F5A623]" /> {guide.time}
                    </div>
                    <div className="flex items-center text-[#F0EDE8]/60 text-sm font-bold uppercase tracking-widest">
                      <Wrench className="w-4 h-4 mr-1.5 text-[#F5A623]" /> {guide.tools}
                    </div>
                  </div>
                  <ArrowRight className="text-[#333] group-hover:text-[#F5A623] transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
