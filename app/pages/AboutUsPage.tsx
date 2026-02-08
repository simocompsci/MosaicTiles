"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Montserrat, Cinzel } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    display: 'swap',
});

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    display: 'swap',
});

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white mt-10">

            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden shadow-lg">
                                <Image
                                    src="/moroccan_mosaic_art.png"
                                    alt="Artisan working on Zellij"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            {/* Floating Caption */}
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 border border-gray-200 max-w-xs hidden md:block">
                                <p className={`text-md text-black italic ${cinzel.className}`}>
                                    "The clay of Morocco is unlike any other on earth."
                                </p>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className={`w-full lg:w-1/2 ${montserrat.className}`}>
                            <h2 className={`text-4xl md:text-5xl text-black mb-8 leading-tight ${cinzel.className}`}>
                                Born from the <br /> Earth of Morocco
                            </h2>
                            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                                <p>
                                    Our journey begins in the ancient cities of Morocco. Here, the unique composition of the pale clay allows for a distinct robustness and a finish that has been coveted by emperors and architects for a millennium.
                                </p>
                                <p>
                                    We do not merely manufacture tiles; we curate history. Every piece is hand-chiseled by Maâlems (master craftsmen) who have inherited their skills through generations, ensuring that the soul of the artisan is embedded in every geometric pattern.
                                </p>
                            </div>

                            <div className="mt-12">
                                <Image
                                    src="/HeroMosaic.jpg"
                                    alt="Zellij Texture"
                                    width={120}
                                    height={120}
                                    className="rounded-full opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-white text-black py-32">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="text-center mb-20">
                        <span className={`block text-black tracking-[0.2em] text-sm uppercase mb-4 ${montserrat.className}`}>
                            Our Principles
                        </span>
                        <h2 className={`text-4xl md:text-5xl ${cinzel.className}`}>
                            Standard of Excellence
                        </h2>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center ${montserrat.className}`}>

                        {/* Value 1 */}
                        <div className="group p-8 border border-gray-300">
                            <div className="w-16 h-16 mx-auto mb-8 bg-black text-white rounded-full flex items-center justify-center">
                                <span className={`text-2xl ${cinzel.className}`}>01</span>
                            </div>
                            <h3 className="text-xl font-medium mb-4 uppercase tracking-wider">Authenticity</h3>
                            <p className="text-gray-950 font-light leading-relaxed">
                                100% handmade in Morocco. We reject industrial shortcuts in favor of the human touch that grants each tile its unique character.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="group p-8 border border-gray-300">
                            <div className="w-16 h-16 mx-auto mb-8 bg-black text-white rounded-full flex items-center justify-center">
                                <span className={`text-2xl ${cinzel.className}`}>02</span>
                            </div>
                            <h3 className="text-xl font-medium mb-4 uppercase tracking-wider">Sustainability</h3>
                            <p className="text-gray-950 font-light leading-relaxed">
                                Sourced from nature, returned to nature. Our process relies on sun-drying, natural pigments, and locally sourced clay.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="group p-8 border border-gray-300">
                            <div className="w-16 h-16 mx-auto mb-8 bg-black text-white rounded-full flex items-center justify-center">
                                <span className={`text-2xl ${cinzel.className}`}>03</span>
                            </div>
                            <h3 className="text-xl font-medium mb-4 uppercase tracking-wider">Timelessness</h3>
                            <p className="text-gray-950 font-light leading-relaxed">
                                Designed to outlast trends. Our mosaics are not just decor; they are architectural investments that age gracefully.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
        ------------------------------------------
        4. CRAFTSMANSHIP TEASER
        ------------------------------------------
      */}
            <section className="relative py-32 bg-[#F5F5F0]">
                <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h2 className={`text-4xl md:text-6xl text-black mb-6 ${cinzel.className}`}>
                            The Hands <br /> Behind the Art
                        </h2>
                        <Link
                            href="/how-its-made"
                            className={`inline-block border-b border-black pb-1 text-lg uppercase tracking-widest hover:text-[#A0522D] hover:border-[#A0522D] transition-all duration-300 ${montserrat.className}`}
                        >
                            Discover the Process
                        </Link>
                    </div>
                    <div className="md:w-1/2 pl-0 md:pl-12">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-64 bg-gray-300 relative overflow-hidden">
                                <Image src="/HeroMosaic.jpg" alt="Process 1" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="h-64 bg-gray-200 relative overflow-hidden mt-12">
                                <Image src="/hero_high_quality.png" alt="Process 2" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
