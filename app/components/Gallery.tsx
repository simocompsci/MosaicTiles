import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import ProjectPool from '@/public/project_pool.png';
// Using placeholders for missing images due to quota limits
import ProjectPatio from '@/public/zellij_tile_lifestyle.png';
import ProjectKitchen from '@/public/moroccan_mosaic_art.png';

const Montserratfont = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    display: 'swap',
});

function Gallery() {
    return (
        <section className="bg-white py-24 md:py-32 text-black">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">

                {/* Header */}
                <div className={`mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 ${Montserratfont.className}`}>
                    <div className="max-w-2xl">
                        <span className="block text-black tracking-widest text-sm uppercase mb-4 font-medium">
                            Realized Projects
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                            Spaces Transformed by <span className="italic font-serif">Tradition</span>
                        </h2>
                    </div>

                    <button className="group flex items-center gap-3 text-black pb-2 border-b border-white/20">
                        <span className="text-lg tracking-wide font-light">Explore Full Gallery</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                {/* Gallery Grid - Masonry/Asymmetrical Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[400px]">

                    {/* Large Featured Image */}
                    <div className="md:col-span-2 relative group overflow-hidden cursor-pointer">
                        <Image
                            src={ProjectPool}
                            alt="Luxury Riad Pool with Turquoise Zellij"
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                        <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <p className={`${Montserratfont.className} text-xl text-white font-medium`}>Marrakech Riad Pool</p>
                            <p className={`${Montserratfont.className} text-sm text-white`}>Turquoise & Cobalt Zellij</p>
                        </div>
                    </div>

                    {/* Vertical Image */}
                    <div className="md:row-span-2 relative group overflow-hidden cursor-pointer">
                        <Image
                            src={ProjectPatio}
                            alt="Mediterranean Patio with Terracotta Floor"
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                        <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <p className={`${Montserratfont.className} text-xl text-white font-medium`}>Andalusian Patio</p>
                            <p className={`${Montserratfont.className} text-sm text-white`}>Terracotta Star Pattern</p>
                        </div>
                    </div>

                    {/* Smaller Image */}
                    <div className="md:col-span-1 md:col-start-1 relative group overflow-hidden cursor-pointer">
                        <Image
                            src={ProjectKitchen}
                            alt="Modern Kitchen Zellige Backsplash"
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                        <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <p className={`${Montserratfont.className} text-xl text-white font-medium`}>Villa Kitchen</p>
                            <p className={`${Montserratfont.className} text-sm text-white`}>Pearl White Glazed</p>
                        </div>
                    </div>

                    {/* Decorative / CTA Block */}
                    <div className="md:col-span-1 md:col-start-2 bg-gray-200 flex items-center justify-center p-8 text-center group cursor-pointer">
                        <div className={`${Montserratfont.className}`}>
                            <p className="text-black text-lg mb-2">Inspired?</p>
                            <h3 className="text-2xl font-light mb-6">Start Your Project</h3>
                            <span className="inline-block border border-white/20 px-6 py-2 text-sm uppercase tracking-widest bg-white text-black transition-all">
                                Get a Quote
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Gallery;
