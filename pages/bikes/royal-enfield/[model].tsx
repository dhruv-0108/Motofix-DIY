import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { royalEnfieldModels } from '../../../data/royal-enfield/models';
import { parts as classicParts } from '../../../data/royal-enfield/parts/classic-350';
import { Part } from '../../../data/royal-enfield/parts/types';
import BikeIllustration from '../../../components/BikeIllustration/BikeIllustration';
import { 
  ChevronLeft, 
  ChevronRight, 
  Settings, 
  Droplet, 
  Wind, 
  Battery, 
  Wrench, 
  HelpCircle, 
  Layers, 
  Eye,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function ModelPartsDetails() {
  const router = useRouter();
  const { model: modelId } = router.query;

  // Find model metadata
  const model = royalEnfieldModels.find(m => m.id === modelId);

  // Active hotspot selection state shared across elements
  const [activePartId, setActivePartId] = useState<string | null>(null);

  // Track expanded categories for parts index on mobile
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    engine: true,
    fuel: false,
    drivetrain: false,
    brakes: false,
    suspension: false,
    electrical: false,
    body: false,
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  if (!model) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D]">
        <div className="text-center">
          <h1 className="text-3xl font-black text-[#F0EDE8] uppercase mb-4 tracking-wider">Model Not Found</h1>
          <Link href="/bikes/royal-enfield" className="text-[#F5A623] hover:underline uppercase tracking-widest text-xs font-bold">
            ← Back to Models
          </Link>
        </div>
      </div>
    );
  }

  // Load parts data if Classic 350, otherwise return empty / stubs
  const hasInteractive = model.id === 'classic-350';
  const parts: Part[] = hasInteractive ? classicParts : [];

  const getIllustrationSrc = (id: string) => {
    if (id === 'himalayan-450') {
      return '/illustrations/royal-enfield/royal-enfield-himalayan-452.svg';
    }
    const standardIds = ['classic-350', 'bullet-350', 'meteor-350'];
    if (standardIds.includes(id)) {
      return `/illustrations/royal-enfield/royal-enfield-${id}.svg`;
    }
    // Return classic 350 as default if illustration doesn't exist yet
    return '/illustrations/royal-enfield/royal-enfield-classic-350.svg';
  };

  // Group parts by category for Left Sidebar and Index
  const categoriesList = [
    { id: 'engine', name: 'Engine & Transmission' },
    { id: 'fuel', name: 'Fuel System' },
    { id: 'drivetrain', name: 'Drivetrain & Chain' },
    { id: 'brakes', name: 'Brakes & ABS' },
    { id: 'suspension', name: 'Suspension System' },
    { id: 'electrical', name: 'Electrical & Fuses' },
    { id: 'body', name: 'Body Panels & Chassis' },
  ];

  const getPartsByCategory = (cat: string) => {
    return parts.filter(p => p.category === cat);
  };

  const handlePartClick = (partId: string) => {
    setActivePartId(partId);
    // Scroll smoothly to the illustration viewport if clicked from index
    const element = document.getElementById('bike-illustration-viewport');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F0EDE8]">
      
      {/* 3-Column Layout Shell */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/bikes/royal-enfield" className="inline-flex items-center text-[#F0EDE8]/50 hover:text-[#F5A623] transition-colors uppercase tracking-widest text-xs font-black">
            <ChevronLeft className="w-4 h-4 mr-1" /> Royal Enfield Models
          </Link>
          <span className="text-[#F0EDE8]/30 text-xs font-bold uppercase tracking-widest hidden sm:inline">
            Phase 2 Interactive
          </span>
        </div>

        {/* Layout Grid: Left Sidebar (col-1) | Center (col-2) | Right Sidebar (col-1) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR: PARTS LIBRARY ================= */}
          <aside className="lg:col-span-1 bg-[#1A1A1A] border border-[#333] p-4 rounded-sm space-y-6 max-h-[85vh] overflow-y-auto sticky top-24 hidden lg:block">
            <div className="border-b border-[#333] pb-3 mb-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#F0EDE8] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#F5A623]" />
                Parts Library
              </h3>
              <p className="text-[10px] text-[#F0EDE8]/45 uppercase font-bold tracking-widest mt-1">Select a part to locate</p>
            </div>

            {hasInteractive ? (
              <div className="space-y-4 text-xs">
                {categoriesList.map(cat => {
                  const catParts = getPartsByCategory(cat.id);
                  if (catParts.length === 0) return null;

                  return (
                    <div key={cat.id} className="space-y-1.5">
                      <span className="text-[10px] uppercase font-black tracking-wider text-[#F5A623]/80">
                        {cat.name}
                      </span>
                      <div className="flex flex-col gap-1 pl-2 border-l border-[#333]">
                        {catParts.map(part => (
                          <button
                            key={part.id}
                            onClick={() => setActivePartId(activePartId === part.id ? null : part.id)}
                            className={`text-left py-1 px-2 rounded-sm transition-all truncate uppercase font-bold ${
                              activePartId === part.id
                                ? 'bg-[#F5A623] text-[#0D0D0D]'
                                : 'text-[#F0EDE8]/70 hover:text-[#F0EDE8] hover:bg-[#333]/40'
                            }`}
                          >
                            {part.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-6 text-xs text-[#F0EDE8]/40 uppercase font-bold tracking-wider leading-relaxed">
                Parts library coming soon for this model.
              </div>
            )}
          </aside>

          {/* ================= CENTRAL CONTENT: INTERACTIVE ILLUSTRATION ================= */}
          <main className="lg:col-span-2 space-y-10">
            
            {/* Header info */}
            <div>
              <div className="inline-block bg-[#F0EDE8] text-[#0D0D0D] font-black px-2.5 py-0.5 text-xs uppercase tracking-widest mb-3">
                {model.brand} • Specs & Blueprints
              </div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F0EDE8]">
                {model.name}
              </h1>
              <p className="text-xs uppercase tracking-widest text-[#F0EDE8]/50 mt-1 font-bold">
                Manual-Verified Specifications & Components Layout
              </p>
            </div>

            {/* Interactive Bike Illustration Viewport */}
            <section id="bike-illustration-viewport" className="space-y-4">
              {hasInteractive ? (
                <BikeIllustration
                  illustrationSrc={getIllustrationSrc(model.id)}
                  parts={parts}
                  activePartId={activePartId}
                  onActivePartChange={setActivePartId}
                />
              ) : (
                /* Illustration with stubs message */
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-[#333] text-[#F0EDE8]/60 text-xs px-3 py-1.5 uppercase font-bold tracking-wider rounded-full border border-[#444]">
                      Hotspots Coming Soon
                    </div>
                  </div>
                  
                  <div className="border border-[#333] bg-[#0D0D0D] aspect-[1200/700] rounded-sm overflow-hidden flex items-center justify-center p-4 relative">
                    {/* Blueprint Grid Background Pattern */}
                    <div 
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, #333 1px, transparent 1px),
                          linear-gradient(to bottom, #333 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                      }}
                    />
                    
                    {/* Check if illustration SVG exists */}
                    {['bullet-350', 'meteor-350', 'himalayan-450'].includes(model.id) ? (
                      <img
                        src={getIllustrationSrc(model.id)}
                        alt={`${model.name} technical illustration`}
                        className="w-full h-full object-contain pointer-events-none select-none max-h-[85%] opacity-60"
                      />
                    ) : (
                      <div className="text-center p-8">
                        <Wrench className="w-12 h-12 text-[#F0EDE8]/20 mx-auto mb-4 animate-pulse" />
                        <h4 className="text-lg font-black uppercase tracking-wider text-[#F0EDE8]/60">Illustration Blueprint Coming Soon</h4>
                        <p className="text-xs text-[#F0EDE8]/40 uppercase font-bold tracking-widest mt-1">We are digitizing manual vector blueprints</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-[#1A1A1A] border border-[#333] p-4 text-center mt-4">
                    <p className="text-xs uppercase font-extrabold tracking-wider text-[#F5A623]">
                      Interactive Hotspot Overlays Coming Soon
                    </p>
                    <p className="text-[11px] text-[#F0EDE8]/50 uppercase font-bold tracking-wider mt-1">
                      Specifications are verified and fully viewable in the console on the right!
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* ================= PARTS INDEX SECTION (COLLAPSIBLE ON MOBILE) ================= */}
            <section className="bg-[#1A1A1A] border border-[#333] p-5 rounded-sm">
              <div className="border-b border-[#333] pb-3 mb-6">
                <h2 className="text-2xl font-black uppercase tracking-wider text-[#F0EDE8] flex items-center gap-2">
                  <Eye className="w-6 h-6 text-[#F5A623]" />
                  Parts Index
                </h2>
                <p className="text-xs text-[#F0EDE8]/50 uppercase font-bold tracking-widest mt-1">
                  Alphabetical listing by assembly category. Click to highlight on illustration above.
                </p>
              </div>

              {hasInteractive ? (
                <div className="space-y-6 text-sm">
                  {categoriesList.map(cat => {
                    const catParts = getPartsByCategory(cat.id);
                    if (catParts.length === 0) return null;
                    const isExpanded = expandedCategories[cat.id];

                    return (
                      <div key={cat.id} className="border border-[#333] rounded-sm bg-[#0D0D0D] overflow-hidden">
                        {/* Header trigger (Collapsible on mobile, toggleable) */}
                        <button
                          type="button"
                          onClick={() => toggleCategory(cat.id)}
                          className="w-full bg-[#1A1A1A] hover:bg-[#222] p-4 text-left font-black uppercase tracking-wider text-xs text-[#F0EDE8] flex justify-between items-center transition-colors border-b border-[#333]"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                            {cat.name} ({catParts.length})
                          </span>
                          <span className="md:hidden">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </span>
                        </button>

                        {/* Collapsible Content */}
                        <div className={`${isExpanded ? 'block' : 'hidden md:block'} p-4`}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {catParts.map(part => (
                              <button
                                key={part.id}
                                onClick={() => handlePartClick(part.id)}
                                className={`flex items-center justify-between text-left p-3 border transition-all uppercase font-bold text-xs ${
                                  activePartId === part.id
                                    ? 'bg-[#F5A623]/10 border-[#F5A623] text-[#F5A623]'
                                    : 'bg-[#1A1A1A] border-[#333] text-[#F0EDE8] hover:border-[#F5A623]/50'
                                }`}
                              >
                                <span>{part.name}</span>
                                <ChevronRight className={`w-4 h-4 transition-transform ${activePartId === part.id ? 'translate-x-0.5 text-[#F5A623]' : 'text-[#333]'}`} />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-10 text-xs text-[#F0EDE8]/40 uppercase font-black tracking-wider leading-relaxed">
                  Interactive indexing is presently under development.
                </div>
              )}
            </section>

          </main>

          {/* ================= RIGHT SIDEBAR: QUICK SPECS & CONSOLE ================= */}
          <aside className="lg:col-span-1 bg-[#1A1A1A] border border-[#333] rounded-sm sticky top-24">
            <div className="bg-[#0D0D0D] border-b border-[#333] p-4">
              <h3 className="text-sm font-black text-[#F0EDE8] uppercase tracking-wider flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#F5A623]" />
                Quick Specs
              </h3>
            </div>

            <div className="p-4 space-y-6 text-xs leading-relaxed">
              
              {/* Engine Spec */}
              <div>
                <div className="text-[#F0EDE8]/45 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-[#F5A623]/60" />
                  Engine Details
                </div>
                <div className="bg-[#0D0D0D] border border-[#333] p-3 rounded-sm space-y-1.5">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#F0EDE8]/50">Displacement:</span>
                    <div className="text-[#F0EDE8] font-bold text-sm">{model.specs.engineCc}</div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#F0EDE8]/50">Type:</span>
                    <div className="text-[#F0EDE8] font-semibold text-[11px] leading-tight">{model.specs.engineType}</div>
                  </div>
                </div>
              </div>

              {/* Oil Spec */}
              <div>
                <div className="text-[#F0EDE8]/45 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <Droplet className="w-3.5 h-3.5 text-[#F5A623]/60" />
                  Lubrication
                </div>
                <div className="bg-[#0D0D0D] border border-[#333] p-3 rounded-sm space-y-1.5">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#F0EDE8]/50">Oil Grade:</span>
                    <div className="text-[#F0EDE8] font-bold">{model.specs.engineOilGrade}</div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#F0EDE8]/50">Capacity:</span>
                    <div className="text-[#F0EDE8] font-bold">{model.specs.oilCapacity}</div>
                  </div>
                </div>
              </div>

              {/* Tyre Pressure Spec */}
              <div>
                <div className="text-[#F0EDE8]/45 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-[#F5A623]/60" />
                  Tyre Specs
                </div>
                <div className="bg-[#0D0D0D] border border-[#333] p-3 rounded-sm space-y-2">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-[#F5A623]">Tyre Sizes</span>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <div>
                        <span className="text-[9px] text-[#F0EDE8]/55 uppercase">Front:</span>
                        <div className="text-[#F0EDE8] font-bold font-mono text-[10px]">{model.specs.tyres.front}</div>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#F0EDE8]/55 uppercase">Rear:</span>
                        <div className="text-[#F0EDE8] font-bold font-mono text-[10px]">{model.specs.tyres.rear}</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-[#222] pt-2">
                    <span className="text-[9px] uppercase font-bold text-[#F5A623]">Pressure (City)</span>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <div>
                        <span className="text-[9px] text-[#F0EDE8]/55 uppercase">Front:</span>
                        <div className="text-[#F0EDE8] font-bold">{model.specs.tyrePressure.city.front}</div>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#F0EDE8]/55 uppercase">Rear:</span>
                        <div className="text-[#F0EDE8] font-bold leading-tight">{model.specs.tyrePressure.city.rear.split(' ')[0]} psi</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Battery Spec */}
              <div>
                <div className="text-[#F0EDE8]/45 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <Battery className="w-3.5 h-3.5 text-[#F5A623]/60" />
                  Electrical
                </div>
                <div className="bg-[#0D0D0D] border border-[#333] p-3 rounded-sm">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#F0EDE8]/50">Battery rating:</span>
                    <div className="text-[#F0EDE8] font-bold text-[13px]">{model.specs.battery}</div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="border-t border-[#333] pt-4 text-[10px] text-[#F0EDE8]/40 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 shrink-0 text-[#F5A623]/40" />
                <p>
                  Specs are gathered from the original Royal Enfield service manuals. Ensure verification against your vehicle owner's handbook before carrying out DIY adjustments.
                </p>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
