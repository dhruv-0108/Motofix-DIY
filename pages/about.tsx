import { Mail, MessageSquare, AlertTriangle, PieChart, Info, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] pb-24">
      {/* Header */}
      <section className="bg-[#1A1A1A] border-b border-[#333] pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F0EDE8] mb-8">
            The Mission
          </h1>
          <p className="text-xl md:text-2xl text-[#F5A623] font-bold max-w-3xl mx-auto uppercase tracking-wide leading-relaxed">
            Every rider deserves to understand their machine. Not to become a mechanic — but to never be taken for a ride.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Origin Story */}
        <section>
          <h2 className="text-3xl font-bold uppercase tracking-wider text-[#F0EDE8] mb-6 border-b border-[#333] pb-4">
            Why we built this
          </h2>
          <div className="bg-[#1A1A1A] p-8 border border-[#333] text-lg text-[#F0EDE8]/80 leading-relaxed">
            <p className="mb-6">
              Motofix DIY was born from a simple, frustrating truth: <strong className="text-[#F0EDE8]">84% of riders in a survey of 32 bikers felt overcharged at a service center</strong> — and most didn't know enough to push back.
            </p>
            <p>
              When you don't know your service intervals, parts lifespan, or fluid grades, you're at the mercy of the mechanic's invoice. We're changing that. We dug into the official service manuals to bring you exactly what you need to know about your specific bike, with zero jargon.
            </p>
          </div>
        </section>

        {/* Research Stats */}
        <section>
          <h2 className="text-3xl font-bold uppercase tracking-wider text-[#F0EDE8] mb-6 border-b border-[#333] pb-4 flex items-center">
            <PieChart className="mr-3 text-[#F5A623]" /> The Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1A1A1A] border-l-4 border-[#F5A623] p-6">
              <div className="text-4xl font-black text-[#F0EDE8] mb-2">78%</div>
              <p className="text-[#F0EDE8]/70 font-bold uppercase tracking-wide text-sm">Don't know their service intervals</p>
            </div>
            <div className="bg-[#1A1A1A] border-l-4 border-[#F5A623] p-6">
              <div className="text-4xl font-black text-[#F0EDE8] mb-2">84%</div>
              <p className="text-[#F0EDE8]/70 font-bold uppercase tracking-wide text-sm">Felt overcharged at a service center</p>
            </div>
            <div className="bg-[#1A1A1A] border-l-4 border-[#F5A623] p-6">
              <div className="text-4xl font-black text-[#F0EDE8] mb-2">91%</div>
              <p className="text-[#F0EDE8]/70 font-bold uppercase tracking-wide text-sm">Find YouTube too scattered to be useful</p>
            </div>
            <div className="bg-[#1A1A1A] border-l-4 border-[#F5A623] p-6">
              <div className="text-4xl font-black text-[#F0EDE8] mb-2">100%</div>
              <p className="text-[#F0EDE8]/70 font-bold uppercase tracking-wide text-sm">Want a single, reliable source of truth</p>
            </div>
          </div>
        </section>

        {/* What We Are Not */}
        <section>
          <h2 className="text-3xl font-bold uppercase tracking-wider text-[#F0EDE8] mb-6 border-b border-[#333] pb-4 flex items-center">
            <Shield className="mr-3 text-[#F5A623]" /> What We Are Not
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1A] border border-[#333] p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-[#F5A623] mx-auto mb-4" />
              <h3 className="font-bold text-[#F0EDE8] uppercase mb-2">Not a Booking App</h3>
              <p className="text-sm text-[#F0EDE8]/60">We don't book mechanics for you. We give you the knowledge to handle them yourself.</p>
            </div>
            <div className="bg-[#1A1A1A] border border-[#333] p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-[#F5A623] mx-auto mb-4" />
              <h3 className="font-bold text-[#F0EDE8] uppercase mb-2">Not Affiliated</h3>
              <p className="text-sm text-[#F0EDE8]/60">We are completely independent. No brand sponsorships dictating our advice.</p>
            </div>
            <div className="bg-[#1A1A1A] border border-[#333] p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-[#F5A623] mx-auto mb-4" />
              <h3 className="font-bold text-[#F0EDE8] uppercase mb-2">Not a Parts Store</h3>
              <p className="text-sm text-[#F0EDE8]/60">In Phase 1, we don't sell parts. We just tell you exactly what you need to buy.</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-[#1A1A1A] border border-[#333] p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-[#F0EDE8] mb-4">
              Ride With Us
            </h2>
            <p className="text-[#F0EDE8]/70">Got feedback? Want a specific model added? Let us know.</p>
          </div>
          
          <form className="max-w-2xl mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#F0EDE8]/70 font-bold uppercase text-sm tracking-widest mb-2">Name</label>
                <input type="text" className="w-full bg-[#0D0D0D] border border-[#333] p-3 text-[#F0EDE8] focus:border-[#F5A623] focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[#F0EDE8]/70 font-bold uppercase text-sm tracking-widest mb-2">Email</label>
                <input type="email" className="w-full bg-[#0D0D0D] border border-[#333] p-3 text-[#F0EDE8] focus:border-[#F5A623] focus:outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-[#F0EDE8]/70 font-bold uppercase text-sm tracking-widest mb-2">Bike Model</label>
              <input type="text" className="w-full bg-[#0D0D0D] border border-[#333] p-3 text-[#F0EDE8] focus:border-[#F5A623] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-[#F0EDE8]/70 font-bold uppercase text-sm tracking-widest mb-2">Message</label>
              <textarea rows={4} className="w-full bg-[#0D0D0D] border border-[#333] p-3 text-[#F0EDE8] focus:border-[#F5A623] focus:outline-none transition-colors"></textarea>
            </div>
            <button className="w-full bg-[#F5A623] text-[#0D0D0D] font-bold uppercase tracking-widest py-4 hover:bg-[#F5A623]/90 transition-colors">
              Send Message
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}
