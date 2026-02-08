'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600'], // Bringing in heavier weights for clarity
    display: 'swap',
});

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Premium styling constants
    const bgColor = 'bg-[#F9F8F6]'; // Soft cream always
    const textColor = 'text-black'; // Pure black for max clarity
    const hoverColor = 'hover:text-[#A0522D]'; // Sienna/Terracotta

    interface NavLink {
        name: string;
        href: string;
        dropdown?: { name: string; href: string }[];
    }

    const navLinks: NavLink[] = [
        { name: 'About Us', href: '/about-us' },
        { name: 'Projects', href: '/projects' },
        { name: 'Location', href: '/location' },
        { name: "How it's made", href: '/how-its-made' },
        { name: 'Packaging', href: '/packaging' },
        {
            name: 'Collections',
            href: '/collections',
            dropdown: [
                { name: 'All', href: '/collections' },
                { name: 'Mosaic', href: '/collections' },
                { name: 'Basic', href: '/collections' },
                { name: 'Colors', href: '/collections' },
                { name: 'Border', href: '/collections' },
            ]
        },
        { name: 'Stones', href: '/stones' },
    ];

    return (
        <nav
            className={`w-full fixed px-6 md:px-10 lg:px-12 transition-all duration-500 ease-in-out ${montserrat.className} ${bgColor} border-b border-gray-200 py-5 shadow-sm z-50 top-0 left-0`}
        >
            <div className="flex items-center justify-between mx-auto max-w-[1920px]">

                {/* Logo - Fixed on the side as requested */}
                <Link
                    href="/"
                    className={`text-2xl md:text-3xl lg:text-6xl tracking-tighter transition-colors duration-300 italic font-serif z-50 relative ${textColor}`}
                >
                    MosaicTiles
                </Link>

                {/* Desktop Menu */}
                <ul className={`hidden xl:flex items-center justify-center gap-8 2xl:gap-12 text-base font-medium tracking-wide transition-colors duration-300 ${textColor}`}>
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative group h-full flex items-center">
                            <Link
                                href={link.href}
                                className={`cursor-pointer transition-colors duration-300 ${hoverColor} uppercase py-4`}
                            >
                                {link.name}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <ul className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-[#F9F8F6] shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-gray-800 text-sm z-50">
                                    {link.dropdown.map((item) => (
                                        <li key={item.name} className="border-b border-gray-100 last:border-none">
                                            <Link
                                                href={item.href}
                                                className="block px-6 py-3 hover:bg-[#A0522D] hover:text-white transition-colors duration-200 uppercase tracking-widest text-center"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li>
                        <Link
                            href="#contact"
                            className="px-8 py-3 bg-black text-white border border-black uppercase hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Mobile/Tablet Menu Button (Visible below XL) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="xl:hidden focus:outline-none z-50"
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5 focus:outline-none">
                        <span className={`block h-0.5 w-7 transition-colors duration-300 ${open ? 'bg-black' : 'bg-black'} ${open && 'rotate-45 translate-y-2'}`} />
                        <span className={`block h-0.5 w-7 transition-colors duration-300 ${open ? 'bg-black' : 'bg-black'} ${open && 'opacity-0'}`} />
                        <span className={`block h-0.5 w-7 transition-colors duration-300 ${open ? 'bg-black' : 'bg-black'} ${open && '-rotate-45 -translate-y-2'}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#F9F8F6] z-40 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <ul className="flex flex-col items-center gap-8 text-2xl text-black font-semibold tracking-wide uppercase">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="hover:text-[#A0522D] transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="px-8 py-3 bg-black text-white border border-black uppercase hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >
    );
}
