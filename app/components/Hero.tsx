import Image from 'next/image'
import Zellij from '@/public/Zellij.jpg'
import Navbar from './NavBar'
import { Montserrat } from 'next/font/google'

const Montserratfont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={Zellij}
          alt="Moroccan mosaic background"
          fill
          priority
          className="object-cover"
        />
        {/* Modern overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center px-6 md:px-12">
        <div className="max-w-5xl text-center">
          <h1
            className={`${Montserratfont.className}
            text-5xl md:text-7xl xl:text-8xl
            font-medium tracking-tight text-white`}
          >
            Moroccan Mosaic Tiles
          </h1>

          <p
            className={`${Montserratfont.className}
            mt-6 md:mt-8
            text-base sm:text-lg md:text-xl
            leading-relaxed text-white/90`}
          >
            Where tradition meets timeless beauty.
            Handcrafted zellij and mosaic tiles shaped by centuries of Moroccan
            craftsmanship designed to elevate modern spaces.
          </p>

          {/* Optional CTA (recommended for modern UX) */}
          <div className="mt-10 flex justify-center gap-6">
            <button className="bg-white text-black px-8 py-4 text-sm tracking-wide hover:bg-transparent hover:text-white hover:border hover:border-white transition">
              Explore Collections
            </button>

            <button className="border border-white text-white px-8 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
