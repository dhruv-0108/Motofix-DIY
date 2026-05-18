import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'My Bike', path: '/select-bike' },
    { name: 'DIY Guides', path: '/guides' },
    { name: 'Service Checklist', path: '/checklist/select' }, // Using a generic path for now
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0D0D0D] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-[#F5A623] font-bold text-2xl uppercase tracking-wider">Motofix</span>
              <span className="text-[#F0EDE8] font-bold text-2xl uppercase tracking-wider ml-1">DIY</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className="text-[#F0EDE8] hover:text-[#F5A623] px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F0EDE8] hover:text-[#F5A623] p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-b border-[#1A1A1A]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-[#F0EDE8] hover:text-[#F5A623] block px-3 py-2 text-base font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
