import React from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const Montserratfont = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export default function Footer() {
  return (
    <footer className={`bg-[#111111] text-white pt-20 pb-10 border-t border-white/5 ${Montserratfont.className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl tracking-tighter text-white block">
              MosaicTiles
            </Link>
            <p className="text-gray-400 font-light leading-relaxed max-w-xs">
              Handcrafted Moroccan zellij and terracotta tiles, bridging the gap between ancient heritage and modern design.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[#C5A065] text-sm uppercase tracking-widest mb-8 font-medium">Shop</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors font-light">All Collections</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors font-light">Zellij Tiles</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors font-light">Floor Tiles</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors font-light">Samples</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#C5A065] text-sm uppercase tracking-widest mb-8 font-medium">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors font-light">Our Story</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors font-light">Artisans</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors font-light">Trade Program</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors font-light">Journal</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#C5A065] text-sm uppercase tracking-widest mb-8 font-medium">Newsletter</h4>
            <p className="text-gray-400 font-light mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex border-b border-gray-600 pb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-500 font-light"
              />
              <button type="submit" className="text-white hover:text-[#C5A065] transition-colors uppercase text-sm tracking-wider">
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; 2026 MosaicTiles. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Pinterest</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Facebook</a>
          </div>
        </div>

      </div>
    </footer>
  );
}