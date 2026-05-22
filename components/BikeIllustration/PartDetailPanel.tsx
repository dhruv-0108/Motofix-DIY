import { useEffect, useRef } from 'react';
import { X, Wrench, ChevronRight, ClipboardList, Tag, ShieldCheck } from 'lucide-react';
import { Part } from '../../data/royal-enfield/parts/types';

interface PartDetailPanelProps {
  part: Part | null;
  onClose: () => void;
}

export default function PartDetailPanel({ part, onClose }: PartDetailPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close panel on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!part) return null;

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'engine':
        return 'bg-red-950/60 text-red-400 border-red-800/80';
      case 'brakes':
        return 'bg-amber-950/60 text-amber-400 border-amber-800/80';
      case 'suspension':
        return 'bg-blue-950/60 text-blue-400 border-blue-800/80';
      case 'electrical':
        return 'bg-purple-950/60 text-purple-400 border-purple-800/80';
      case 'body':
        return 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80';
      case 'drivetrain':
        return 'bg-yellow-950/60 text-yellow-400 border-yellow-800/80';
      case 'fuel':
        return 'bg-orange-950/60 text-orange-400 border-orange-800/80';
      default:
        return 'bg-slate-900 text-slate-300 border-slate-700';
    }
  };

  return (
    <div
      ref={panelRef}
      className="absolute top-0 right-0 h-full w-full md:w-[340px] bg-[#1A1A1A] border-l border-[#333] z-30 flex flex-col transition-transform duration-300 transform translate-x-0 overflow-y-auto max-md:fixed max-md:bottom-0 max-md:top-auto max-md:left-0 max-md:right-0 max-md:h-[70vh] max-md:border-t max-md:border-l-0 max-md:rounded-t-xl shadow-2xl"
      role="dialog"
      aria-labelledby="panel-part-title"
      tabIndex={-1}
    >
      {/* Panel Header */}
      <div className="sticky top-0 bg-[#1A1A1A] border-b border-[#333] p-4 flex items-center justify-between z-10">
        <div className="flex flex-col gap-1">
          <span className={`inline-block self-start text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 border rounded-sm ${getCategoryStyles(part.category)}`}>
            {part.category}
          </span>
          <h3 id="panel-part-title" className="text-xl font-black text-[#F0EDE8] uppercase tracking-wide">
            {part.name}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-[#333] text-[#F0EDE8]/60 hover:text-[#F5A623] transition-colors rounded-sm cursor-pointer"
          aria-label="Close panel"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Panel Body Content */}
      <div className="p-5 flex-grow space-y-6 overflow-y-auto text-sm">
        {/* Description */}
        <section>
          <p className="text-[#F0EDE8]/90 leading-relaxed italic">
            "{part.description}"
          </p>
        </section>

        {/* Quick specs like torque if applicable */}
        {part.torqueSpec && (
          <section className="bg-[#0D0D0D] border-l-2 border-[#F5A623] p-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F0EDE8]/50 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
              Torque Spec
            </div>
            <span className="text-[#F5A623] font-mono font-bold text-sm bg-[#F5A623]/10 px-2 py-0.5 rounded-sm">
              {part.torqueSpec}
            </span>
          </section>
        )}

        {/* Tools Required */}
        <section className="space-y-2.5">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#F0EDE8]/50 flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-[#F5A623]" />
            Tools Required
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {part.toolsRequired.map((tool, idx) => (
              <span key={idx} className="bg-[#0D0D0D] border border-[#333] text-[#F0EDE8] text-xs font-semibold px-2.5 py-1 rounded-sm">
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Removal Steps */}
        <section className="space-y-3">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#F0EDE8]/50 flex items-center gap-1.5">
            <ClipboardList className="w-3.5 h-3.5 text-[#F5A623]" />
            Removal Steps
          </h4>
          <ol className="space-y-2">
            {part.removalSteps.map((step, idx) => (
              <li key={idx} className="flex gap-3 text-[#F0EDE8]/80 leading-relaxed align-top">
                <span className="w-5 h-5 flex items-center justify-center shrink-0 rounded-full bg-[#0D0D0D] border border-[#333] text-[#F5A623] font-bold font-mono text-xs">
                  {idx + 1}
                </span>
                <span className="flex-grow pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Spare Part Options Table */}
        <section className="space-y-2.5">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#F0EDE8]/50 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-[#F5A623]" />
            Spare Part Options
          </h4>
          <div className="border border-[#333] overflow-hidden rounded-sm bg-[#0D0D0D]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1A1A1A] border-b border-[#333] text-[10px] uppercase tracking-wider text-[#F0EDE8]/50 font-bold">
                    <th className="p-2">Brand / Part</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Part No.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#333] text-[11px]">
                  {part.sparePartOptions.map((opt, idx) => (
                    <tr key={idx} className="hover:bg-[#151515] transition-colors">
                      <td className="p-2 font-bold text-[#F0EDE8]">
                        <div>{opt.name}</div>
                        {opt.notes && <div className="text-[10px] font-normal text-[#F0EDE8]/50 mt-0.5">{opt.notes}</div>}
                      </td>
                      <td className="p-2">
                        <span className={`inline-block px-1.5 py-0.5 text-[9px] font-extrabold uppercase rounded-sm border ${
                          opt.type === 'OEM'
                            ? 'bg-emerald-950/40 text-emerald-400 border-emerald-900/60'
                            : opt.type === 'OEM-equivalent'
                            ? 'bg-blue-950/40 text-blue-400 border-blue-900/60'
                            : 'bg-amber-950/40 text-amber-400 border-amber-900/60'
                        }`}>
                          {opt.type}
                        </span>
                      </td>
                      <td className="p-2 font-mono text-[#F5A623] whitespace-nowrap">
                        {opt.partNumber || 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
