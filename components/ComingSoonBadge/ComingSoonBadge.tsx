import { Box } from 'lucide-react';

export default function ComingSoonBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#F5A623] rounded-full bg-[#F5A623]/5 text-[#F5A623] text-xs font-bold uppercase tracking-wider select-none shadow-[0_0_12px_rgba(245,166,35,0.1)] transition-all duration-300 hover:bg-[#F5A623]/10">
      <Box className="w-3.5 h-3.5 animate-pulse" />
      <span>3D Model — Coming Soon</span>
    </div>
  );
}
