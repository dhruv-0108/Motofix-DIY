import Link from 'next/link';
import { ChevronRight, Wrench, FileText, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-[#0D0D0D] overflow-hidden">
        {/* Background mechanical texture/overlay (abstract) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F5A623] via-[#0D0D0D] to-[#0D0D0D]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-[#F0EDE8] mb-6">
            Know Your Bike.<br />
            <span className="text-[#F5A623]">Own Your Ride.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F0EDE8]/80 max-w-2xl mb-10">
            Model-specific maintenance guides, service timelines, and DIY instructions — built for riders all around the world.
          </p>
          <Link href="/select-bike" className="group flex items-center bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0D0D0D] font-bold text-lg px-8 py-4 rounded-sm transition-all uppercase tracking-wider">
            Select Your Bike
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0D0D0D] p-8 border border-[#333] hover:border-[#F5A623]/50 transition-colors">
              <div className="text-5xl font-bold text-[#F5A623] mb-4">78%</div>
              <p className="text-[#F0EDE8] font-medium text-lg">of riders don't know their service intervals.</p>
            </div>
            <div className="bg-[#0D0D0D] p-8 border border-[#333] hover:border-[#F5A623]/50 transition-colors">
              <div className="text-5xl font-bold text-[#F5A623] mb-4">84%</div>
              <p className="text-[#F0EDE8] font-medium text-lg">felt overcharged at a service center.</p>
            </div>
            <div className="bg-[#0D0D0D] p-8 border border-[#333] hover:border-[#F5A623]/50 transition-colors">
              <div className="text-5xl font-bold text-[#F5A623] mb-4">91%</div>
              <p className="text-[#F0EDE8] font-medium text-lg">find YouTube too scattered to be useful.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center uppercase tracking-wider text-[#F0EDE8] mb-16">
            How It Works
          </h2>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#333] -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#1A1A1A] border-2 border-[#F5A623] rounded-full flex items-center justify-center mb-6">
                  <Wrench size={40} className="text-[#F5A623]" />
                </div>
                <h3 className="text-xl font-bold text-[#F0EDE8] mb-3 uppercase tracking-wide">1. Select your bike</h3>
                <p className="text-[#F0EDE8]/70">Brand → Model → Year. We load exactly what applies to your machine.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#1A1A1A] border-2 border-[#F5A623] rounded-full flex items-center justify-center mb-6">
                  <FileText size={40} className="text-[#F5A623]" />
                </div>
                <h3 className="text-xl font-bold text-[#F0EDE8] mb-3 uppercase tracking-wide">2. See your timeline</h3>
                <p className="text-[#F0EDE8]/70">Know exactly what's due for service based on your current odometer reading.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#1A1A1A] border-2 border-[#F5A623] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-[#F5A623]" />
                </div>
                <h3 className="text-xl font-bold text-[#F0EDE8] mb-3 uppercase tracking-wide">3. Learn or verify</h3>
                <p className="text-[#F0EDE8]/70">Use our step-by-step DIY guides or take the checklist to your mechanic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-[#F0EDE8]">
              Royal Enfield
            </h2>
            <Link href="/select-bike" className="text-[#F5A623] hover:text-[#F0EDE8] font-bold uppercase tracking-widest flex items-center transition-colors">
              View All <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Classic 350', 'Meteor 350', 'Himalayan 450'].map((bike) => (
              <div key={bike} className="group bg-[#0D0D0D] border border-[#333] hover:border-[#F5A623] transition-all overflow-hidden cursor-pointer flex flex-col h-full">
                <div className="h-48 bg-[#222] flex items-center justify-center relative overflow-hidden">
                  <span className="text-[#F5A623] font-bold text-lg opacity-50 absolute -rotate-12 transform scale-150 group-hover:scale-110 transition-transform duration-500 uppercase">{bike}</span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#F0EDE8] uppercase mb-2">{bike}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs font-bold text-[#0D0D0D] bg-[#F0EDE8] px-2 py-1 uppercase">RE</span>
                      <span className="text-xs font-bold text-[#0D0D0D] bg-[#F0EDE8] px-2 py-1 uppercase">Phase 1</span>
                    </div>
                  </div>
                  <Link href={`/bikes/royal-enfield/${bike.toLowerCase().replace(' ', '-')}/2023`} className="w-full text-center bg-transparent border-2 border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-[#0D0D0D] font-bold py-3 uppercase tracking-wider transition-colors mt-auto">
                    View Guide
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="py-12 bg-[#F5A623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#0D0D0D] font-bold text-xl md:text-2xl uppercase tracking-widest">
            Based on research with 32 riders across India. Data-backed. Manual-verified.
          </p>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-24 bg-[#0D0D0D] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-[#F0EDE8] mb-8">
            Ride With <span className="text-[#F5A623]">Knowledge</span>
          </h2>
          <p className="text-lg text-[#F0EDE8]/80 mb-10 leading-relaxed">
            Every rider deserves to understand their machine. Not to become a mechanic — but to never be taken for a ride. Join the movement towards better maintenance and more confident riding.
          </p>
          <Link href="/select-bike" className="inline-flex items-center bg-[#F0EDE8] hover:bg-white text-[#0D0D0D] font-bold text-lg px-8 py-4 rounded-sm transition-all uppercase tracking-wider">
            Explore All Models
            <ChevronRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
