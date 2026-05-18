import { useRouter } from 'next/router';
import { royalEnfieldModels } from '../../data/royal-enfield/models';
import { CheckCircle2, AlertTriangle, IndianRupee, Printer, Info } from 'lucide-react';

export default function Checklist() {
  const router = useRouter();
  const { model: modelId } = router.query;
  const model = royalEnfieldModels.find(m => m.id === modelId);

  if (!model) {
    return <div className="min-h-screen bg-[#0D0D0D] p-12 text-[#F0EDE8]">Loading...</div>;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] pb-24">
      {/* Header */}
      <section className="bg-[#1A1A1A] border-b border-[#333] pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#F0EDE8] mb-4">
            Service Preparedness Checklist
          </h1>
          <div className="inline-block bg-[#F5A623] text-[#0D0D0D] font-bold px-4 py-1 text-sm uppercase tracking-widest mb-6">
            {model.name}
          </div>
          <p className="text-lg text-[#F0EDE8]/80 max-w-2xl mx-auto">
            Before you go to the mechanic, know what to ask and what to verify. Never get overcharged again.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Actions */}
        <div className="flex justify-end print:hidden">
          <button onClick={handlePrint} className="flex items-center bg-[#333] hover:bg-[#F5A623] hover:text-[#0D0D0D] text-[#F0EDE8] px-4 py-2 font-bold uppercase tracking-wider transition-colors">
            <Printer className="w-5 h-5 mr-2" /> Print / Save PDF
          </button>
        </div>

        {/* Section 1: What to ask */}
        <section className="bg-[#1A1A1A] border border-[#333] p-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-[#F0EDE8] mb-6 flex items-center">
            <Info className="mr-3 text-[#F5A623]" /> What to ask your mechanic
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 mr-3 text-[#F5A623] shrink-0" />
              <p className="text-[#F0EDE8]/90"><strong>"Can I see the old parts you replaced?"</strong> <br/><span className="text-sm text-[#F0EDE8]/60">Always verify that parts were actually changed (like air filter, spark plug, brake pads).</span></p>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 mr-3 text-[#F5A623] shrink-0" />
              <p className="text-[#F0EDE8]/90"><strong>"What grade of engine oil are you using?"</strong> <br/><span className="text-sm text-[#F0EDE8]/60">For your {model.name}, it must be {model.specs.engineOilGrade}.</span></p>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 mr-3 text-[#F5A623] shrink-0" />
              <p className="text-[#F0EDE8]/90"><strong>"Is the chain slack adjusted to spec?"</strong> <br/><span className="text-sm text-[#F0EDE8]/60">Too tight causes wear, too loose causes slapping.</span></p>
            </li>
          </ul>
        </section>

        {/* Section 2: Replaced vs Inspected */}
        <section className="bg-[#1A1A1A] border border-[#333] p-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-[#F0EDE8] mb-6 flex items-center">
            <AlertTriangle className="mr-3 text-[#F5A623]" /> Replace vs Inspect
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#333]">
                  <th className="p-4 text-[#F0EDE8] uppercase tracking-wider">Part</th>
                  <th className="p-4 text-[#F0EDE8] uppercase tracking-wider">Action</th>
                  <th className="p-4 text-[#F0EDE8] uppercase tracking-wider">Why?</th>
                </tr>
              </thead>
              <tbody className="text-[#F0EDE8]/80">
                <tr className="border-b border-[#333] hover:bg-[#333]/30">
                  <td className="p-4 font-bold">Engine Oil & Filter</td>
                  <td className="p-4 text-[#F5A623] font-bold uppercase">Replace</td>
                  <td className="p-4 text-sm">Every service. Non-negotiable for engine life.</td>
                </tr>
                <tr className="border-b border-[#333] hover:bg-[#333]/30">
                  <td className="p-4 font-bold">Air Filter</td>
                  <td className="p-4 uppercase">Inspect/Clean</td>
                  <td className="p-4 text-sm">Replace only if heavily clogged or every 10k km.</td>
                </tr>
                <tr className="border-b border-[#333] hover:bg-[#333]/30">
                  <td className="p-4 font-bold">Brake Pads</td>
                  <td className="p-4 uppercase">Inspect</td>
                  <td className="p-4 text-sm">Replace only if friction material is &lt; 2mm.</td>
                </tr>
                <tr className="border-b border-[#333] hover:bg-[#333]/30">
                  <td className="p-4 font-bold">Chain Sprockets</td>
                  <td className="p-4 uppercase">Inspect</td>
                  <td className="p-4 text-sm">Look for hooked teeth. Usually lasts 15k-20k km if maintained.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Costs */}
        <section className="bg-[#1A1A1A] border border-[#333] p-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-[#F0EDE8] mb-6 flex items-center">
            <IndianRupee className="mr-3 text-[#F5A623]" /> Typical Cost Ranges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0D0D0D] p-4 flex justify-between items-center border border-[#333]">
              <span className="font-bold text-[#F0EDE8] uppercase tracking-wide">Semi-Synth Oil Change</span>
              <span className="text-[#F5A623] font-bold">₹800 - ₹1,200</span>
            </div>
            <div className="bg-[#0D0D0D] p-4 flex justify-between items-center border border-[#333]">
              <span className="font-bold text-[#F0EDE8] uppercase tracking-wide">Fully-Synth Oil Change</span>
              <span className="text-[#F5A623] font-bold">₹1,500 - ₹2,000</span>
            </div>
            <div className="bg-[#0D0D0D] p-4 flex justify-between items-center border border-[#333]">
              <span className="font-bold text-[#F0EDE8] uppercase tracking-wide">Brake Pads (Pair)</span>
              <span className="text-[#F5A623] font-bold">₹250 - ₹600</span>
            </div>
            <div className="bg-[#0D0D0D] p-4 flex justify-between items-center border border-[#333]">
              <span className="font-bold text-[#F0EDE8] uppercase tracking-wide">Chain & Sprocket Kit</span>
              <span className="text-[#F5A623] font-bold">₹2,500 - ₹3,500</span>
            </div>
            <div className="bg-[#0D0D0D] p-4 flex justify-between items-center border border-[#333]">
              <span className="font-bold text-[#F0EDE8] uppercase tracking-wide">General Service Labor</span>
              <span className="text-[#F5A623] font-bold">₹500 - ₹900</span>
            </div>
          </div>
        </section>
        
        {/* Footer Note */}
        <div className="text-center text-[#F0EDE8]/40 text-sm italic border-t border-[#333] pt-8">
          * Prices are indicative based on India market averages. Always get an itemized bill before work starts.
        </div>
        
      </div>
    </div>
  );
}
