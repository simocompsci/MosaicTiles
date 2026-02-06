'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

// Fonts
const Montserratfont = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

// Types
type Category = 'All' | 'Zellij Tiles' | 'Floor Tiles' | 'Zellij Colors' | 'Zellij Tile Borders';

interface Product {
  id: number;
  name: string;
  category: Category;
  image: string;
  hoverImage: string;
  price?: string;
}

// Data (Mock)
const products: Product[] = [
  { id: 1, name: "Emerald Star Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$28.85 / ft²" },
  { id: 2, name: "Terracotta Star Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$19.85 / ft²" },
  { id: 3, name: "Cobalt Blue Geometric", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$32.00 / ft²" },
  { id: 4, name: "White & Beige Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$15.50 / ft²" },
];


const categories: Category[] = ['All', 'Zellij Tiles', 'Floor Tiles', 'Zellij Colors', 'Zellij Tile Borders'];


// ... (existing imports and definitions)

interface CollectionsProps {
  limit?: number;
  showLink?: boolean;
}

export default function Collections({ limit, showLink = false }: CollectionsProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // Filter first
  let displayProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory);

  // Then limit if prop provided
  if (limit) {
    displayProducts = displayProducts.slice(0, limit);
  }

  return (
    <section className={`w-full bg-[#FAFAFA] py-20 md:py-32 ${Montserratfont.className}`}>
      <div className="mx-auto px-6 md:px-12 lg:px-16">

        {/* Header & Filter */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl text-black font-medium tracking-tight">
              Our Collections
            </h2>

            {/* Desktop View All Button */}
            {showLink && (
              <Link
                href="/collections"
                className="hidden md:inline-block px-8 py-3 bg-black text-white text-xs uppercase tracking-widest font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Explore Full Collection
              </Link>
            )}
          </div>

        
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-square w-full bg-[#EAEAEA] mb-4 overflow-hidden">
                {/* Main Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out px-8 py-8 ${hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                {/* Hover Image (Lifestyle) */}
                <Image
                  src={product.hoverImage}
                  alt={`${product.name} styling`}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out absolute inset-0 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                {/* Wishlist Icon (Optional nice touch) */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base text-black font-medium tracking-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {product.category}
                </p>
                <p className="text-sm text-black mt-1 font-normal">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
          <div className="md:hidden mt-16 text-center">
            <Link
              href="/collections"
              className="inline-block px-10 py-3 bg-black text-white text-sm uppercase tracking-widest font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Explore Full Collection
            </Link>
          </div>

      </div>
    </section>
  );
}