'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1212] text-white overflow-hidden relative">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Main Footer */}
      <div className="px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 border-r border-white/5 pr-8">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl border-2 border-primary shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Skio Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">SKIO</span>
            </div>
            <p className="text-sm text-gray-medium leading-relaxed font-medium">
              Sound awareness through touch, intelligence, and design. Bridging the gap for the deaf and hard of hearing community.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-primary text-xs tracking-widest uppercase mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-medium font-medium">
              <li>
                <Link href="#products" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Wristband
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-primary text-xs tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-medium font-medium">
              <li>
                <Link href="#why" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-primary text-xs tracking-widest uppercase mb-6">Connect</h4>
            <div className="flex gap-4">
              {[
                { name: 'Twitter', url: 'https://twitter.com' },
                { name: 'LinkedIn', url: 'https://linkedin.com' },
                { name: 'GitHub', url: 'https://github.com' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-5 h-5 opacity-70" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-muted-foreground font-medium opacity-60">
            © {currentYear} Skio Inc. All rights reserved. Built with precision for awareness.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-muted-foreground font-bold hover:text-primary transition-colors uppercase tracking-widest">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground font-bold hover:text-primary transition-colors uppercase tracking-widest">
              Terms
            </Link>
            <Link href="#" className="text-xs text-muted-foreground font-bold hover:text-primary transition-colors uppercase tracking-widest">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
