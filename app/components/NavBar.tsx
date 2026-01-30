import Link from 'next/link';
import { Roboto_Condensed } from "next/font/google";

const RobotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  
});

export default function Navbar() {
    return (
        <nav className={`w-full bg-white border-b border-gray-100 py-6 px-6 md:px-12 lg:px-16 ${RobotoCondensed.className}`}>
            <div className="flex items-center justify-between w-full mx-auto">

                {/* Center: Logo */}
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="inline-block relative">
                        <h1 className="text-5xl md:text-6xl text-[#6B8E7B] font-normal leading-none tracking-tighter" style={{ fontFamily: 'var(--font-libre-bodoni)' }}>
                            LOGO
                        </h1>
                        {/* Overlay the "O" to create the monogram effect if possible, or just use text for now */}
                        {/* For now, just "THE" text centered as per screenshot structure */}
                    </Link>
                </div>

                {/* center div */}
                <div>
                    <ul className='flex justify-between items-center gap-15 text-lg'>
                        <li>About Us</li>
                        <li>Collections</li>
                        <li>Gallery</li>
                    </ul>

                </div>

                {/* Right: Account & Cart */}
                <div className="flex-1 flex justify-end items-center gap-6 md:gap-8">
                    <Link href="/account" className="text-xs md:text-xs text-gray-500 hover:text-gray-800 uppercase tracking-wider font-light transition-colors">
                        Account
                    </Link>
                    <Link href="/cart" className="text-xs md:text-xs text-gray-500 hover:text-gray-800 uppercase tracking-wider font-light transition-colors">
                        Cart (0)
                    </Link>
                </div>
            </div>
        </nav>
    );
}