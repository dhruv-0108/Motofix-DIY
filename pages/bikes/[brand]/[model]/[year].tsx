import { useRouter } from 'next/router';
import Link from 'next/link';
import { royalEnfieldModels } from '../../../../data/royal-enfield/models';
import { ChevronRight, Droplet, Wind, Battery, Settings, Wrench, ChevronLeft, Calendar, FileText, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function ModelDetail() {
  const router = useRouter();
  const { brand, model: modelId, year } = router.query;

  // We only support Royal Enfield for now
  const model = royalEnfieldModels.find(m => m.id === modelId);

  if (!model) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#F0EDE8] mb-4">Model Not Found</h1>
          <Link href="/select-bike" className="text-[#F5A623] hover:underline uppercase tracking-wide">
            ← Back to Selector
          </Link>
        </div>
      </div>
    );
  }

  const milestones = [
    { km: '500 km', label: '1st Service', time: '1-2 hrs', tasks: ['Replace Engine Oil', 'Replace Oil Filter', 'Check Chain Tension'] },
    { km: '5,000 km', label: '2nd Service', time: '1 hr', tasks: ['Inspect Brake Pads', 'Lubricate Chain', 'Check Tyre Pressure'] },
    { km: '10,000 km', label: '3rd Service', time: '2-3 hrs', tasks: ['Replace Engine Oil', 'Replace Air Filter', 'Replace Spark Plug'] },
    { km: '15,000 km', label: '4th Service', time: '2 hrs', tasks: ['Inspect Valve Clearance', 'Replace Fork Oil', 'Check Battery'] },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Bike Header */}
      <section className="relative pt-12 pb-24 border-b border-[#333]">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F5A623] via-[#0D0D0D] to-[#0D0D0D]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/select-bike" className="inline-flex items-center text-[#F0EDE8]/50 hover:text-[#F5A623] mb-8 transition-colors uppercase tracking-widest text-xs font-bold">
            <ChevronLeft className="w-4 h-4 mr-1" /> Change Bike
          </Link>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="bg-[#1A1A1A] w-full h-[300px] border border-[#333] flex items-center justify-center relative overflow-hidden">
                <span className="text-[#333] font-black text-6xl md:text-8xl absolute -rotate-12 uppercase">{model.name}</span>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-[#F0EDE8] text-[#0D0D0D] font-bold px-3 py-1 text-sm uppercase tracking-widest mb-4">
                {model.brand} • {year}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-[#F0EDE8] mb-6">
                {model.name}
              </h1>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1A1A1A] border border-[#333] p-4 flex items-center">
                  <Settings className="text-[#F5A623] w-8 h-8 mr-4" />
                  <div>
                    <div className="text-[#F0EDE8]/50 text-xs uppercase tracking-widest">Engine</div>
                    <div className="text-[#F0EDE8] font-bold text-lg">{model.specs.engineCc}</div>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] border border-[#333] p-4 flex items-center">
                  <Droplet className="text-[#F5A623] w-8 h-8 mr-4" />
                  <div>
                    <div className="text-[#F0EDE8]/50 text-xs uppercase tracking-widest">Tank</div>
                    <div className="text-[#F0EDE8] font-bold text-lg">{model.specs.fuelTankCapacity}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Maintenance Timeline Section */}
            <section>
              <div className="flex items-center justify-between mb-8 border-b border-[#333] pb-4">
                <h2 className="text-3xl font-bold uppercase tracking-wider text-[#F0EDE8] flex items-center">
                  <Calendar className="mr-3 text-[#F5A623]" /> Timeline
                </h2>
                <span className="text-[#F0EDE8]/50 text-sm uppercase tracking-widest hidden sm:inline-block">Milestones</span>
              </div>
              
              <div className="space-y-6">
                {milestones.map((m, index) => (
                  <div key={index} className="bg-[#1A1A1A] border border-[#333] p-6 hover:border-[#F5A623]/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-4 border-b border-[#333]">
                      <div className="flex items-center">
                        <div className="bg-[#F5A623] text-[#0D0D0D] font-bold text-xl px-4 py-2 uppercase tracking-wider mr-4">
                          {m.km}
                        </div>
                        <h3 className="text-xl font-bold text-[#F0EDE8] uppercase">{m.label}</h3>
                      </div>
                      <div className="text-[#F0EDE8]/50 flex items-center mt-4 sm:mt-0 uppercase tracking-widest text-sm font-bold">
                        <Wrench className="w-4 h-4 mr-2" /> {m.time}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {m.tasks.map((task, i) => (
                        <li key={i} className="flex items-start text-[#F0EDE8]/80">
                          <CheckCircle2 className="w-5 h-5 mr-3 text-[#F5A623] shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Checklist CTA */}
            <section className="bg-[#F5A623] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border-4 border-[#1A1A1A]">
              <div className="mb-6 md:mb-0 md:mr-8 text-[#0D0D0D]">
                <h2 className="text-3xl font-bold uppercase tracking-wider mb-2">Going to the mechanic?</h2>
                <p className="font-medium text-lg opacity-90">Take our standardized checklist to avoid getting overcharged.</p>
              </div>
              <Link href={`/checklist/${modelId}`} className="shrink-0 bg-[#0D0D0D] text-[#F0EDE8] font-bold px-8 py-4 uppercase tracking-widest hover:bg-[#1A1A1A] transition-colors border-2 border-[#0D0D0D] flex items-center group">
                Open Checklist <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </section>
            
            {/* DIY Guides Section */}
            <section>
              <div className="flex items-center justify-between mb-8 border-b border-[#333] pb-4">
                <h2 className="text-3xl font-bold uppercase tracking-wider text-[#F0EDE8] flex items-center">
                  <FileText className="mr-3 text-[#F5A623]" /> DIY Guides
                </h2>
                <Link href="/guides" className="text-[#F5A623] text-sm uppercase tracking-widest font-bold hover:underline">
                  View All Guides
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Engine Oil Top-up", diff: "Easy", time: "15 min" },
                  { title: "Chain Lubrication", diff: "Easy", time: "20 min" },
                  { title: "Air Filter Clean", diff: "Moderate", time: "45 min" },
                  { title: "Brake Pad Check", diff: "Moderate", time: "30 min" }
                ].map((guide, i) => (
                  <Link href={`/guides/guide-${i+1}`} key={i} className="group bg-[#1A1A1A] border border-[#333] p-6 hover:border-[#F5A623] transition-colors block">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-[#F0EDE8] group-hover:text-[#F5A623] transition-colors uppercase pr-4">{guide.title}</h3>
                      <ArrowRight className="text-[#333] group-hover:text-[#F5A623] transition-colors shrink-0" />
                    </div>
                    <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
                      <span className={guide.diff === 'Easy' ? 'text-green-500' : 'text-yellow-500'}>{guide.diff}</span>
                      <span className="text-[#F0EDE8]/50">{guide.time}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </div>
          
          {/* Sidebar (Right) */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Quick Stats Card */}
            <div className="bg-[#1A1A1A] border border-[#333] sticky top-24">
              <div className="bg-[#0D0D0D] border-b border-[#333] p-6">
                <h3 className="text-xl font-bold text-[#F0EDE8] uppercase tracking-wider flex items-center">
                  <AlertTriangle className="mr-2 text-[#F5A623]" /> Quick Specs
                </h3>
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <div className="text-[#F0EDE8]/50 text-xs font-bold uppercase tracking-widest mb-1 flex items-center"><Droplet className="w-3 h-3 mr-1"/> Engine Oil Grade</div>
                  <div className="text-[#F0EDE8] font-bold">{model.specs.engineOilGrade}</div>
                </div>
                
                <div>
                  <div className="text-[#F0EDE8]/50 text-xs font-bold uppercase tracking-widest mb-1 flex items-center"><Droplet className="w-3 h-3 mr-1"/> Oil Capacity</div>
                  <div className="text-[#F0EDE8] font-bold">{model.specs.oilCapacity}</div>
                </div>
                
                <div>
                  <div className="text-[#F0EDE8]/50 text-xs font-bold uppercase tracking-widest mb-1 flex items-center"><Wind className="w-3 h-3 mr-1"/> Tyre Pressures</div>
                  <div className="bg-[#0D0D0D] border border-[#333] p-3 mt-2 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-[#F5A623] font-bold uppercase text-xs">Front</span><br/>
                      <span className="text-[#F0EDE8]">{model.specs.tyrePressure.city.front}</span>
                    </div>
                    <div>
                      <span className="text-[#F5A623] font-bold uppercase text-xs">Rear</span><br/>
                      <span className="text-[#F0EDE8]">{model.specs.tyrePressure.city.rear}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[#F0EDE8]/50 text-xs font-bold uppercase tracking-widest mb-1 flex items-center"><Battery className="w-3 h-3 mr-1"/> Battery</div>
                  <div className="text-[#F0EDE8] font-bold">{model.specs.battery}</div>
                </div>
              </div>
              
              <div className="bg-[#0D0D0D] p-4 text-xs text-[#F0EDE8]/40 border-t border-[#333] flex items-start">
                <AlertTriangle className="w-4 h-4 mr-2 shrink-0 opacity-50" />
                <p>Specs sourced from Royal Enfield official service manual. Always verify with your owner's manual before maintenance.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
