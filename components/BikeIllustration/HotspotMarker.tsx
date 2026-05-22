import { Part } from '../../data/royal-enfield/parts/types';

interface HotspotMarkerProps {
  part: Part;
  isActive: boolean;
  onClick: () => void;
}

export default function HotspotMarker({ part, isActive, onClick }: HotspotMarkerProps) {
  return (
    <div
      className="absolute group z-20"
      style={{
        left: `${part.hotspot.x}%`,
        top: `${part.hotspot.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* 44x44px Minimum Tap Target for Mobile Accessibility */}
      <button
        type="button"
        onClick={onClick}
        className="w-11 h-11 flex items-center justify-center bg-transparent border-0 cursor-pointer rounded-full relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D] transition-all"
        title={part.name}
        aria-label={`View details for ${part.name}`}
      >
        {/* Pulsing Outer Ring */}
        <span
          className={`absolute w-6 h-6 rounded-full border-2 border-[#F5A623] transition-all duration-300 ${
            isActive
              ? 'scale-110 opacity-100 bg-[#F5A623]/20'
              : 'animate-ping opacity-75 scale-100 group-hover:scale-110'
          }`}
        />

        {/* Center Solid Dot */}
        <span
          className={`absolute w-3 h-3 rounded-full border border-[#0D0D0D] shadow-[0_0_8px_rgba(245,166,35,0.8)] transition-all duration-300 ${
            isActive ? 'bg-[#F5A623] scale-125' : 'bg-[#F5A623] group-hover:bg-[#F0EDE8]'
          }`}
        />
      </button>

      {/* Hover Tooltip (Centered above hotspot) */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-30 whitespace-nowrap">
        <div className="bg-[#1A1A1A] text-[#F0EDE8] border border-[#333] px-2.5 py-1 text-xs font-bold uppercase tracking-wider shadow-lg rounded-sm flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
          {part.name}
        </div>
        {/* Tooltip arrow */}
        <div className="w-2 h-2 bg-[#1A1A1A] border-r border-b border-[#333] rotate-45 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1" />
      </div>
    </div>
  );
}
