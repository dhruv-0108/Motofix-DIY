import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1A1A1A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-[#F5A623] font-bold text-xl uppercase tracking-wider">Motofix</span>
              <span className="text-[#F0EDE8] font-bold text-xl uppercase tracking-wider ml-1">DIY</span>
            </Link>
            <p className="mt-4 text-[#F0EDE8]/70 text-sm max-w-sm">
              Know Your Bike. Own Your Ride. Model-specific maintenance guides, service timelines, and DIY instructions — built for Indian riders.
            </p>
          </div>
          
          <div>
            <h3 className="text-[#F0EDE8] font-bold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#F0EDE8]/70">
              <li><Link href="/select-bike" className="hover:text-[#F5A623] transition-colors">My Bike</Link></li>
              <li><Link href="/guides" className="hover:text-[#F5A623] transition-colors">DIY Guides</Link></li>
              <li><Link href="/checklist/select" className="hover:text-[#F5A623] transition-colors">Service Checklist</Link></li>
              <li><Link href="/about" className="hover:text-[#F5A623] transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#F0EDE8] font-bold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-[#F0EDE8]/70">
              <li><span className="cursor-not-allowed">Terms of Service</span></li>
              <li><span className="cursor-not-allowed">Privacy Policy</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#F0EDE8]/50 text-xs">
            © {new Date().getFullYear()} Motofix DIY. All rights reserved.
          </p>
          <p className="text-[#F5A623] text-sm font-bold mt-4 md:mt-0 uppercase tracking-widest">
            Built for riders. By a rider.
          </p>
        </div>
      </div>
    </footer>
  );
}
