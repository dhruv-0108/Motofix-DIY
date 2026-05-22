import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Part } from '../../data/royal-enfield/parts/types';
import HotspotMarker from './HotspotMarker';
import PartDetailPanel from './PartDetailPanel';
import ComingSoonBadge from '../ComingSoonBadge/ComingSoonBadge';

interface BikeIllustrationProps {
  illustrationSrc: string;
  parts: Part[];
  activePartId?: string | null;
  onActivePartChange?: (partId: string | null) => void;
}

export default function BikeIllustration({
  illustrationSrc,
  parts,
  activePartId: externalActivePartId,
  onActivePartChange,
}: BikeIllustrationProps) {
  const [internalActivePartId, setInternalActivePartId] = useState<string | null>(null);

  // Sync state if controlled externally
  const activeId = externalActivePartId !== undefined ? externalActivePartId : internalActivePartId;

  const setActiveId = (id: string | null) => {
    if (onActivePartChange) {
      onActivePartChange(id);
    } else {
      setInternalActivePartId(id);
    }
  };

  const activePart = parts.find((p) => p.id === activeId) || null;

  return (
    <div className="relative w-full aspect-[1200/700] min-h-[300px] md:min-h-[450px] border border-[#333] bg-[#0D0D0D] overflow-hidden select-none">
      {/* Blueprint Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '8px 8px',
        }}
      />

      {/* SVG Illustration Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* Render SVG as simple responsive img */}
        <img
          src={illustrationSrc}
          alt="Bike Technical Illustration"
          className="w-full h-full object-contain pointer-events-none select-none max-h-[85%] md:max-h-[90%]"
        />
      </div>

      {/* Hotspots Overlay */}
      <div className="absolute inset-0">
        {parts.map((part) => (
          <HotspotMarker
            key={part.id}
            part={part}
            isActive={activeId === part.id}
            onClick={() => setActiveId(activeId === part.id ? null : part.id)}
          />
        ))}
      </div>

      {/* 3D Coming Soon Badge (Top-Right) */}
      <div className="absolute top-4 right-4 z-10">
        <ComingSoonBadge />
      </div>

      {/* Slide-In Details Panel */}
      {activePart && (
        <PartDetailPanel
          part={activePart}
          onClose={() => setActiveId(null)}
        />
      )}
    </div>
  );
}
