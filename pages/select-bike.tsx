import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { royalEnfieldModels } from '../data/royal-enfield/models';
import { ChevronRight, Settings } from 'lucide-react';

export default function SelectBike() {
  const router = useRouter();
  const [brand, setBrand] = useState('royal-enfield');
  const [modelId, setModelId] = useState('');
  const [year, setYear] = useState('');
  
  const selectedModel = royalEnfieldModels.find(m => m.id === modelId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (brand && modelId && year) {
      localStorage.setItem('motofix-selected-bike', JSON.stringify({ brand, modelId, year }));
      router.push(`/bikes/${brand}/${modelId}/${year}`);
    }
  };

  return (
    <div className="min-h-screen py-24 bg-[#0D0D0D]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Settings className="w-16 h-16 text-[#F5A623] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-[#F0EDE8] mb-4">
            Select Your Machine
          </h1>
          <p className="text-lg text-[#F0EDE8]/70">
            Tell us what you ride. We'll show you exactly how to maintain it.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#333] p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Brand */}
            <div>
              <label className="block text-[#F0EDE8] font-bold uppercase tracking-wide mb-3">
                1. Brand
              </label>
              <select 
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-[#0D0D0D] border border-[#333] text-[#F0EDE8] p-4 focus:outline-none focus:border-[#F5A623] transition-colors"
                required
              >
                <option value="royal-enfield">Royal Enfield (Phase 1)</option>
              </select>
            </div>

            {/* Step 2: Model */}
            <div>
              <label className="block text-[#F0EDE8] font-bold uppercase tracking-wide mb-3">
                2. Model
              </label>
              <select 
                value={modelId}
                onChange={(e) => {
                  setModelId(e.target.value);
                  setYear(''); // Reset year when model changes
                }}
                className="w-full bg-[#0D0D0D] border border-[#333] text-[#F0EDE8] p-4 focus:outline-none focus:border-[#F5A623] transition-colors disabled:opacity-50"
                disabled={!brand}
                required
              >
                <option value="" disabled>Select Model</option>
                {royalEnfieldModels.map(model => (
                  <option key={model.id} value={model.id}>{model.name}</option>
                ))}
              </select>
            </div>

            {/* Step 3: Year */}
            <div>
              <label className="block text-[#F0EDE8] font-bold uppercase tracking-wide mb-3">
                3. Year
              </label>
              <select 
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full bg-[#0D0D0D] border border-[#333] text-[#F0EDE8] p-4 focus:outline-none focus:border-[#F5A623] transition-colors disabled:opacity-50"
                disabled={!modelId}
                required
              >
                <option value="" disabled>Select Year</option>
                {selectedModel?.years.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <button 
              type="submit"
              disabled={!brand || !modelId || !year}
              className="w-full mt-8 bg-[#F5A623] disabled:bg-[#333] disabled:text-[#F0EDE8]/50 text-[#0D0D0D] font-bold text-lg px-8 py-5 rounded-sm transition-all uppercase tracking-wider flex justify-center items-center group"
            >
              Get Maintenance Data
              <ChevronRight className="ml-2 group-disabled:hidden" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
