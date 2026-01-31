'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

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
  { id: 5, name: "Midnight Black Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$29.00 / ft²" },
  { id: 6, name: "Classic Fez Mix", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$22.00 / ft²" },

  { id: 7, name: "Royal Green Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$30.00 / ft²" },
  { id: 8, name: "Atlas Blue Star", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$31.50 / ft²" },
  { id: 9, name: "Ivory Palace Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$27.75 / ft²" },
  { id: 10, name: "Sahara Sand Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$26.40 / ft²" },

  { id: 11, name: "Marrakesh Clay Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$21.90 / ft²" },
  { id: 12, name: "Kasbah Stone Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$23.50 / ft²" },
  { id: 13, name: "Riad Pattern Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$24.00 / ft²" },
  { id: 14, name: "Medina Checker Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$20.75 / ft²" },

  { id: 15, name: "Sapphire Blue Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$33.00 / ft²" },
  { id: 16, name: "Olive Green Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$29.75 / ft²" },
  { id: 17, name: "Amber Yellow Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$28.25 / ft²" },
  { id: 18, name: "Ruby Red Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$34.10 / ft²" },

  { id: 19, name: "Traditional Fez Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$16.20 / ft²" },
  { id: 20, name: "Blue Wave Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$17.00 / ft²" },
  { id: 21, name: "Green Star Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$16.80 / ft²" },
  { id: 22, name: "Golden Riad Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$18.25 / ft²" },

  { id: 23, name: "Ocean Teal Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$31.20 / ft²" },
  { id: 24, name: "Pearl White Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$27.90 / ft²" },
  { id: 25, name: "Charcoal Night Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$30.80 / ft²" },
  { id: 26, name: "Sunset Orange Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$29.40 / ft²" },

  { id: 27, name: "Tangier Mosaic Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$25.00 / ft²" },
  { id: 28, name: "Essaouira Breeze Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$23.80 / ft²" },
  { id: 29, name: "Andalusian Pattern Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$26.10 / ft²" },
  { id: 30, name: "Zagora Earth Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$21.60 / ft²" },

  { id: 31, name: "Imperial Blue Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$18.60 / ft²" },
  { id: 32, name: "Palm Green Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$17.90 / ft²" },
  { id: 33, name: "Saffron Line Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$16.95 / ft²" },
  { id: 34, name: "Desert Gold Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$19.10 / ft²" },

  { id: 35, name: "Azure Star Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$32.40 / ft²" },
  { id: 36, name: "Forest Green Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$29.95 / ft²" },
  { id: 37, name: "Snow White Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$26.80 / ft²" },
  { id: 38, name: "Deep Indigo Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$33.50 / ft²" },

  { id: 39, name: "Bronze Glow Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$31.70 / ft²" },
  { id: 40, name: "Mint Green Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$28.60 / ft²" },

  { id: 41, name: "Heritage Fez Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$24.40 / ft²" },
  { id: 42, name: "Casablanca Classic Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$26.00 / ft²" },

  { id: 43, name: "Royal Arch Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$19.80 / ft²" },
  { id: 44, name: "Ocean Line Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$17.40 / ft²" },

  { id: 45, name: "Emerald Bloom Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$31.90 / ft²" },
  { id: 46, name: "Copper Flame Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$30.50 / ft²" },
  { id: 47, name: "Ivory Lace Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$27.30 / ft²" },
  { id: 48, name: "Night Sky Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$34.00 / ft²" },

  { id: 49, name: "Old Medina Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$25.60 / ft²" },
  { id: 50, name: "Souk Pattern Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$23.30 / ft²" },

  { id: 51, name: "Palm Shadow Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$18.10 / ft²" },
  { id: 52, name: "Mosaic Wave Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$17.85 / ft²" },

  { id: 53, name: "Golden Olive Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$30.20 / ft²" },
  { id: 54, name: "Crimson Clay Zellij", category: "Zellij Colors", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$31.00 / ft²" },

  { id: 55, name: "Rif Mountain Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$24.90 / ft²" },
  { id: 56, name: "Atlas Stone Floor", category: "Floor Tiles", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$26.70 / ft²" },

  { id: 57, name: "Pearl Edge Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$18.95 / ft²" },
  { id: 58, name: "Shadow Line Border", category: "Zellij Tile Borders", image: "/floor_tile_front.png", hoverImage: "/moroccan_mosaic_art.png", price: "$17.60 / ft²" },

  { id: 59, name: "Majestic Blue Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$33.80 / ft²" },
  { id: 60, name: "Timeless White Zellij", category: "Zellij Tiles", image: "/zellij_tile_front.png", hoverImage: "/zellij_tile_lifestyle.png", price: "$26.50 / ft²" }
];


const categories: Category[] = ['All', 'Zellij Tiles', 'Floor Tiles', 'Zellij Colors', 'Zellij Tile Borders'];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section className={`w-full bg-[#FAFAFA] py-20 md:py-32 ${Montserratfont.className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16">

        {/* Header & Filter */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl text-black font-medium tracking-tight mb-8">
            Our Collections
          </h2>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-gray-200 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm md:text-base tracking-wide transition-colors duration-300 relative pb-4 -mb-4.5
                                    ${activeCategory === category
                    ? 'text-black font-medium border-b-2 border-black'
                    : 'text-gray-500 hover:text-black'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
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

      </div>
    </section>
  );
}