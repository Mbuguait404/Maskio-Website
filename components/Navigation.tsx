'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl border-2 border-primary shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Skio Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary hidden sm:inline">SKIO</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-md shadow-primary/30">
              LET'S TALK
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border border-primary/20 bg-primary/10 text-primary"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-primary/10 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4 p-4">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className="text-sm font-semibold text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-primary text-white px-6 py-3 rounded-full font-bold text-sm w-full hover:bg-primary-dark transition-all">
                LET'S TALK
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
