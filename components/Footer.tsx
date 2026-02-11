'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-2 border-gray-dark">
      {/* Main Footer */}
      <div className="px-4 py-12 border-b-2 border-gray-dark">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary border-2 border-white flex items-center justify-center font-display font-bold text-black text-lg">
                M
              </div>
              <span className="text-lg font-display font-bold text-white">MASKIO</span>
            </div>
            <p className="text-sm text-gray-medium">Sound awareness through touch and intelligence.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">PRODUCT</h4>
            <ul className="space-y-2 text-sm text-gray-medium">
              <li>
                <Link href="#products" className="hover:text-primary transition-colors">
                  Wristband
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-primary transition-colors">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-medium">
              <li>
                <Link href="#why" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">CONNECT</h4>
            <ul className="space-y-2 text-sm text-gray-medium">
              <li>
                <a href="https://twitter.com" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-4 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-medium">
            © {currentYear} Maskio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-medium hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-medium hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-medium hover:text-primary transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>

      {/* Accent Bar */}
      <div className="h-2 bg-primary" />
    </footer>
  );
}
