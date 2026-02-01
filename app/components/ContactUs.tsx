import React from 'react';
import { Montserrat } from 'next/font/google';

const Montserratfont = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export default function ContactUs() {
  return (
    <section id="contact" className={`bg-white py-20 md:py-32 ${Montserratfont.className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Info Side */}
          <div className="lg:w-1/3">
            <span className="block text-[#C5A065] tracking-widest text-sm uppercase mb-4 font-medium">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl text-black font-light tracking-tight mb-8">
              Let's Discuss Your Project
            </h2>
            <p className="text-gray-600 leading-relaxed font-light mb-12">
              Whether you're an architect, interior designer, or homeowner, we're here to help you bring the timeless beauty of Moroccan zellij to your space.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Email</h4>
                <a href="mailto:hello@mosaictiles.com" className="text-xl text-black hover:text-[#6B8E7B] transition-colors">
                  hello@mosaictiles.com
                </a>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Phone</h4>
                <a href="tel:+212524444444" className="text-xl text-black hover:text-[#6B8E7B] transition-colors">
                  +212 524 44 44 44
                </a>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Showroom (Appt Only)</h4>
                <p className="text-xl text-black font-light">
                  123 Rue de la Liberté<br />
                  Gueliz, Marrakech<br />
                  Morocco
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 bg-[#F9F9F9] p-8 md:p-12 lg:p-16">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm uppercase tracking-wide text-gray-500">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm uppercase tracking-wide text-gray-500">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm uppercase tracking-wide text-gray-500">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm uppercase tracking-wide text-gray-500">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="bg-black text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#6B8E7B] transition-colors duration-300 mt-4 w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}