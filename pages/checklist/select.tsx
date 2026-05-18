import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ChecklistSelect() {
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('motofix-selected-bike');
    if (saved) {
      const { modelId } = JSON.parse(saved);
      router.push(`/checklist/${modelId}`);
    } else {
      router.push('/select-bike');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
      <div className="text-[#F5A623] text-xl font-bold uppercase tracking-wider animate-pulse">Loading...</div>
    </div>
  );
}
