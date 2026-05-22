import Link from 'next/link';
import { royalEnfieldModels, BikeModel } from '../../../data/royal-enfield/models';
import { ChevronRight, Wrench, Info, CheckCircle2 } from 'lucide-react';

export default function RoyalEnfieldBrandPage() {
  // Check which models have illustrations
  const hasIllustration = (id: string) => {
    return ['classic-350', 'bullet-350', 'meteor-350', 'himalayan-450'].includes(id);
  };

  const getIllustrationSrc = (id: string) => {
    if (id === 'himalayan-450') {
      return '/illustrations/royal-enfield/royal-enfield-himalayan-452.svg';
    }
    return `/illustrations/royal-enfield/royal-enfield-${id}.svg`;
  };

  const hasInteractiveParts = (id: string) => {
    return id === 'classic-350';
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] py-12">
      {/* Radial Amber Header Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] pointer-events-none opacity-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F5A623] via-[#0D0D0D] to-[#0D0D0D] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F0EDE8]/40 mb-6">
          <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#F0EDE8]/80">Royal Enfield</span>
        </nav>

        {/* Header Title */}
        <header className="mb-12 border-b border-[#333] pb-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#F0EDE8] mb-4">
            Royal Enfield <span className="text-[#F5A623]">Manuals</span>
          </h1>
          <p className="text-[#F0EDE8]/60 max-w-2xl text-sm md:text-base leading-relaxed">
            Select your Royal Enfield model below to view interactive engineering drawings, step-by-step DIY removal instructions, torque specifications, and compatible replacement parts.
          </p>
        </header>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {royalEnfieldModels.map((model: BikeModel) => {
            const liveDraw = hasIllustration(model.id);
            const liveParts = hasInteractiveParts(model.id);
            const drawSrc = getIllustrationSrc(model.id);

            return (
              <div
                key={model.id}
                className={`group bg-[#1A1A1A] border transition-all duration-300 flex flex-col justify-between h-[360px] relative ${
                  liveParts
                    ? 'border-[#F5A623]/40 hover:border-[#F5A623] shadow-[0_0_20px_rgba(245,166,35,0.05)]'
                    : 'border-[#333] hover:border-[#F0EDE8]/30'
                }`}
              >
                {/* Status Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5 pointer-events-none">
                  {liveParts ? (
                    <span className="bg-[#F5A623] text-[#0D0D0D] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-md">
                      Interactive Manual
                    </span>
                  ) : liveDraw ? (
                    <span className="bg-[#F0EDE8]/10 border border-[#F0EDE8]/20 text-[#F0EDE8]/80 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm">
                      Blueprint Available
                    </span>
                  ) : (
                    <span className="bg-transparent border border-[#333] text-[#F0EDE8]/35 text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                      Upcoming
                    </span>
                  )}
                </div>

                {/* Card Header Illustration Thumbnail / Placeholder */}
                <div className="h-44 bg-[#0D0D0D] border-b border-[#333] flex items-center justify-center relative overflow-hidden group-hover:bg-[#111] transition-colors duration-300">
                  {liveDraw ? (
                    <>
                      {/* Technical drawing line art */}
                      <img
                        src={drawSrc}
                        alt={`${model.name} blueprint`}
                        className="w-full h-full object-contain p-4 opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none select-none"
                      />
                      {/* Grid background on image */}
                      <div 
                        className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, #333 1px, transparent 1px),
                            linear-gradient(to bottom, #333 1px, transparent 1px)
                          `,
                          backgroundSize: '20px 20px',
                        }}
                      />
                    </>
                  ) : (
                    /* Drawing Coming Soon drafting sheet styling */
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
                      <div 
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, #333 1px, transparent 1px),
                            linear-gradient(to bottom, #333 1px, transparent 1px)
                          `,
                          backgroundSize: '12px 12px',
                        }}
                      />
                      <span className="text-[#333] font-black text-4xl uppercase tracking-tighter absolute rotate-12 scale-125 opacity-20">
                        {model.name}
                      </span>
                      <Info className="w-5 h-5 text-[#F0EDE8]/20 mb-2 animate-pulse" />
                      <span className="text-[#F0EDE8]/40 text-xs font-bold uppercase tracking-widest">
                        Illustration Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Info Body */}
                <div className="p-6 flex-grow flex flex-col justify-between bg-[#1A1A1A]">
                  <div>
                    <h3 className="text-2xl font-black uppercase text-[#F0EDE8] tracking-tight group-hover:text-[#F5A623] transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-xs font-bold text-[#F0EDE8]/40 uppercase tracking-widest mt-1">
                      {model.specs.engineCc} • {model.specs.engineType.split(',')[0]}
                    </p>
                  </div>

                  {/* Action Link Button */}
                  <div className="mt-auto">
                    {liveParts ? (
                      <Link
                        href={`/bikes/royal-enfield/${model.id}`}
                        className="w-full flex items-center justify-center gap-1 bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0D0D0D] font-bold py-3 text-xs uppercase tracking-wider transition-all duration-300 rounded-sm"
                      >
                        Explore Interactive Parts
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <Link
                        href={`/bikes/royal-enfield/${model.id}`}
                        className="w-full flex items-center justify-center gap-1 bg-transparent border border-[#333] text-[#F0EDE8]/50 hover:text-[#F0EDE8] hover:border-[#F5A623]/40 font-bold py-3 text-xs uppercase tracking-wider transition-all duration-300 rounded-sm"
                      >
                        View Specifications
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
