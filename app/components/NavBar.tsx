'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Montserrat } from 'next/font/google';

const Montserratfont = Montserrat({
    subsets: ['latin'],
    weight: '500',
    display: 'swap',
});

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Transparent if on home, not scrolled, and menu is closed
    const isTransparent = isHome && !isScrolled && !open;

    return (
        <nav
            className={`w-full fixed px-6 md:px-12 lg:px-16 transition-all duration-300 ease-in-out ${Montserratfont.className} ${isHome ? 'absolute top-0 left-0 z-50' : ''
                } ${isTransparent
                    ? 'bg-transparent border-transparent'
                    : 'bg-white border-b border-gray-300'
                }`}
        >
            <div className="flex items-center justify-between h-20 mx-auto">

                {/* Logo */}
                <Link
                    href="/"
                    className={`text-3xl md:text-5xl tracking-tighter transition-colors duration-300 italic font-serif ${isTransparent ? 'text-white' : 'text-black'
                        }`}
                >
                    MosaicTiles
                </Link>

                {/* Desktop Menu */}
                <ul className={`hidden lg:flex items-center gap-16 text-lg transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-black'
                    }`}>
                    <li className={`cursor-pointer`}>About Us</li>
                    <li className={`cursor-pointer`}>Collections</li>
                    <li className={`cursor-pointer`}>Gallery</li>
                </ul>

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    <Link href="/contact">
                        <button className={`text-lg tracking-wider font-light px-6 py-3 transition-all duration-300 ${isTransparent
                            ? 'bg-white text-black hover:bg-black hover:text-white border-2 border-transparent hover:border-white'
                            : 'bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black'
                            }`}>
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
                        <span className={`block h-0.5 w-6 transition duration-300 ${isTransparent ? 'bg-white' : 'bg-black'
                            } ${open && 'rotate-45 translate-y-2.5 bg-black!'}`} />
                        <span className={`block h-0.5 w-6 transition duration-300 ${isTransparent ? 'bg-white' : 'bg-black'
                            } ${open && 'opacity-0'}`} />
                        <span className={`block h-0.5 w-6 transition duration-300 ${isTransparent ? 'bg-white' : 'bg-black'
                            } ${open && '-rotate-45 -translate-y-2.5 bg-black!'}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden border-t border-gray-200 absolute top-20 left-0 w-full bg-white z-40">
                    <ul className="flex flex-col items-center gap-6 py-8 text-lg text-black">
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
