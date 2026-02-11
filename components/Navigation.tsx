'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary border-2 border-black flex items-center justify-center font-display font-bold text-black text-lg">
              M
            </div>
            <span className="text-lg font-display font-bold text-black hidden sm:inline">MASKIO</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#why" className="text-sm font-medium text-black hover:text-primary transition-colors">
              Why Maskio
            </Link>
            <Link href="#products" className="text-sm font-medium text-black hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="#technology" className="text-sm font-medium text-black hover:text-primary transition-colors">
              Technology
            </Link>
            <Link href="#blog" className="text-sm font-medium text-black hover:text-primary transition-colors">
              Blog
            </Link>
            <button className="bg-primary border-2 border-black text-black px-6 py-2 font-display font-bold text-sm hover:bg-white hover:text-primary transition-all">
              LET'S TALK
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border-2 border-black bg-primary"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-black bg-background">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#why" className="text-sm font-medium text-black hover:text-primary">
                Why Maskio
              </Link>
              <Link href="#products" className="text-sm font-medium text-black hover:text-primary">
                Products
              </Link>
              <Link href="#technology" className="text-sm font-medium text-black hover:text-primary">
                Technology
              </Link>
              <Link href="#blog" className="text-sm font-medium text-black hover:text-primary">
                Blog
              </Link>
              <button className="bg-primary border-2 border-black text-black px-6 py-2 font-display font-bold text-sm w-full hover:bg-white hover:text-primary transition-all">
                LET'S TALK
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
