import Image from 'next/image'
import HeroMosaic from '@/public/HeroMosaic.jpg'
import { Montserrat, Cinzel } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroMosaic}
          alt="Premium Moroccan Mosaic"
          fill
          priority
          className="object-cover"
          placeholder="blur"
        />
        {/* Elegant overlay: darker at bottom for text readability */}
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex h-full items-center justify-center px-6 md:px-12 text-center">
        <div className="max-w-4xl flex flex-col items-center">

          {/* Eyebrow Text */}
          <span className={`${montserrat.className} text-white/90 uppercase tracking-[0.3em] text-xs md:text-sm mb-6`}>
            Est. 1982
          </span>

          <h1
            className={`${cinzel.className}
            text-5xl md:text-7xl lg:text-8xl
            text-white leading-tight drop-shadow-lg uppercase tracking-wide`}
          >
            Timeless <br className="hidden md:block" />
            <span className="italic">Mosaic</span> Artistry
          </h1>

          <p
            className={`${montserrat.className}
            mt-8 max-w-2xl
            text-lg md:text-xl font-light
            leading-relaxed text-white/95 tracking-wide`}
          >
            Handcrafted zellij tiles shaped by centuries of tradition.
            Elevate your space with the authentic soul of Morocco.
          </p>

          {/* Premium CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <button className={`${montserrat.className} bg-white text-black px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#F9F8F6] hover:scale-105`}>
              Explore Collection
            </button>

            <button className={`${montserrat.className} border border-white text-white px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-white hover:text-black hover:border-white`}>
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
