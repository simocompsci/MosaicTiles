'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const Montserratfont = Montserrat({
    subsets: ['latin'],
    weight: '500',
    display: 'swap',
});

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            className={`w-full bg-white border-b border-gray-300 px-6 md:px-12 lg:px-16 ${Montserratfont.className}`}
        >
            <div className="flex items-center justify-between h-20 mx-auto">

                {/* Logo */}
                <Link href="/" className="text-3xl md:text-5xl text-[#6B8E7B] tracking-tighter">
                    MosaicTiles
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-16 text-lg">
                    <li className="hover:text-[#6B8E7B] cursor-pointer">About Us</li>
                    <li className="hover:text-[#6B8E7B] cursor-pointer">Collections</li>
                    <li className="hover:text-[#6B8E7B] cursor-pointer">Gallery</li>
                </ul>

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    <Link href="/contact">
                        <button className="bg-black text-white text-lg tracking-wider font-light px-6 py-3 hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all">
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div className="space-y-2">
                        <span className={`block h-0.5 w-6 bg-black transition ${open && 'rotate-45 translate-y-2.5'}`} />
                        <span className={`block h-0.5 w-6 bg-black transition ${open && 'opacity-0'}`} />
                        <span className={`block h-0.5 w-6 bg-black transition ${open && '-rotate-45 -translate-y-2.5'}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden border-t border-gray-200">
                    <ul className="flex flex-col items-center gap-6 py-8 text-lg">
                        <li onClick={() => setOpen(false)}>About Us</li>
                        <li onClick={() => setOpen(false)}>Collections</li>
                        <li onClick={() => setOpen(false)}>Gallery</li>
                        <Link href="/contact" onClick={() => setOpen(false)}>
                            <button className="bg-black text-white px-6 py-3 tracking-wider">
                                Contact Us
                            </button>
                        </Link>
                    </ul>
                </div>
            )}
        </nav>
    );
}
