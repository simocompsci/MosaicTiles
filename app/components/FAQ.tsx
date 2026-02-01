'use client'

import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';

const Montserratfont = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

const faqs = [
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship our authentic Moroccan zellij to almost anywhere in the world. We work with specialized logistics partners to ensure your tiles arrive safely and on time."
  },
  {
    question: "Are these tiles suitable for outdoor use?",
    answer: "Absolutely. Our zellij and terracotta tiles are fired at high temperatures, making them durable for both indoor and outdoor applications, including patios, pools, and fountains."
  },
  {
    question: "Can I customize the colors and patterns?",
    answer: "Yes, customization is at the heart of our craft. We can create bespoke color combinations and patterns to match your specific design vision. Please contact us for a consultation."
  },
  {
    question: "How do I maintain zellij tiles?",
    answer: "Zellij is relatively low maintenance. Regular cleaning with mild soap and water is sufficient. We recommend sealing unglazed terracotta tiles to protect them from staining."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`bg-[#F9F9F9] py-20 md:py-32 ${Montserratfont.className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">

        <h2 className="text-3xl md:text-5xl text-black font-light text-center mb-16 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg md:text-xl text-black font-light group-hover:text-[#6B8E7B] transition-colors pr-8">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-[#6B8E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
              >
                <p className="text-gray-600 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Have more questions?</p>
          <a href="#contact" className="text-black border-b border-black pb-0.5 hover:text-[#6B8E7B] hover:border-[#6B8E7B] transition-colors">
            Visit our Help Center
          </a>
        </div>

      </div>
    </section>
  );
}