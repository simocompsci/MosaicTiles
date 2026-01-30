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
                        <h1 className="text-4xl md:text-6xl text-[#6B8E7B] font-normal leading-none tracking-tighter" style={{ fontFamily: 'var(--font-libre-bodoni)' }}>
                            MoroccanMosaic
                        </h1>
                    </Link>
                </div>

                {/* center div */}
                <div>
                    <ul className='flex justify-between items-center gap-20 text-lg'>
                        <li>About Us</li>
                        <li>Collections</li>
                        <li>Gallery</li>
                    </ul>

                </div>

                {/* Right: Account & Cart */}
                <div className="flex-1 flex justify-end items-center gap-6 md:gap-8">
                    <Link href="/contact">
                        <button className='bg-black text-white text-sm md:text-lg tracking-wider font-light p-5 hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-100 ease-in-out hover:cursor-pointer'>
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}