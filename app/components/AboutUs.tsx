import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import MoroccanMosaicArt from '@/public/moroccan_mosaic_art.png';

const Montserratfont = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

function AboutUs() {
  return (
    <section className="relative w-full bg-white py-24 md:py-36 text-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

          {/* Image Content - Broken Grid / Asymmetrical */}
          <div className="w-full lg:w-1/2 relative order-last lg:order-first">
            <div className="relative h-[500px] lg:h-[700px] w-full lg:w-[90%] ">
              <Image
                src={MoroccanMosaicArt}
                alt="Handcrafted Moroccan Mosaic Art"
                fill
                className="object-cover"
              />
              {/* Subtle overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Decorative Element */}
            <div className="hidden lg:block absolute -bottom-8 -right-4 w-64 h-64 border border-white/10 -z-10"></div>
          </div>

          {/* Text Content */}
          <div className={`w-full lg:w-1/2 ${Montserratfont.className}`}>
            <span className="block text-black tracking-widest text-sm uppercase mb-6 font-medium">
              Heritage & Craft
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 leading-tight">
              The Art of <br /> <span className="italic font-serif">Imperfection</span>
            </h2>

            <p className="text-lg text-black leading-relaxed font-light mb-8 max-w-lg">
              At MosaicTiles, we persist in the preservation of an ancient legacy.
              Born from the heart of Morocco, our zellij tiles are fragments of history,
              shaped by the hands of master artisans.
            </p>
            <p className="text-lg text-black leading-relaxed font-light mb-12 max-w-lg">
              Each tile tells a story of patience, precision, and timeless beauty,
              bridging the gap between sacred tradition and modern luxury.
            </p>

            <button className="group flex items-center gap-4 text-black transition-colors duration-300">
              <span className="text-lg tracking-widest uppercase font-light border-b border-transparent group-hover:border-black pb-1">Read Our Story</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs