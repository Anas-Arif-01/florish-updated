'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Compass } from 'lucide-react';

interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  titleItalic: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'wallpapers',
    badge: 'Imported Wallpapers',
    title: 'Walls That Tell',
    titleItalic: 'Your Story',
    description:
      'Imported textured paper wallpapers with rich patterns and finishes for striking feature and accent walls.',
    ctaText: 'Explore Wallpapers',
    ctaLink: '/catalog?category=wall-coverings',
    image:
      'https://wallux.com.sg/wp-content/uploads/2026/07/3d-wallpaper-hero.png',
  },
  {
    id: 'flooring',
    badge: 'Engineered Flooring',
    title: 'Warmth Underfoot',
    titleItalic: 'Engineered & Solid',
    description:
      'Engineered & solid hardwood flooring durable, water-resistant planks available in oak, teak and modern finishes.',
    ctaText: 'Browse Flooring',
    ctaLink: '/catalog?category=flooring',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2022/12/SI/SJ/PC/42226208/wpc-flooring.jpg',
  },
  {
    id: 'blinds',
    badge: 'Window Coverings',
    title: 'Light & Privacy',
    titleItalic: 'Blinds & Shades',
    description:
      'Motorized and manual blinds, roller shades and elegant drapery tailored solutions for light control and privacy.',
    ctaText: 'See Window Coverings',
    ctaLink: '/catalog/window-coverings',
    image:
      'https://cdn.prod.website-files.com/605d169147d09561b4485ec3/659c84387b8d6079ea62d48a_image1-9.jpg',
  },
];

export default function CleanHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeSlide = HERO_SLIDES[currentIndex];

  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-[#2E1F42] px-4 py-20 text-[#E6D9F0] sm:px-6 lg:px-8">
      {/* Background Carousel Images (Interior Furniture Focused) */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive
                ? 'z-0 opacity-100'
                : 'pointer-events-none z-0 opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              className={`object-cover transition-transform duration-[8000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Plum Aesthetic Gradients for Readability (theme-aligned) */}
          <div className="absolute inset-0 bg-[#2E1F42]/35" />
<div className="absolute inset-0 bg-gradient-to-t from-[#2E1F42]/55 via-transparent to-[#2E1F42]/15" />
<div className="absolute inset-0 bg-gradient-to-r from-[#2E1F42]/45 via-[#2E1F42]/20 to-transparent" />
</div>
        );
      })}

      {/* Main Hero Content */}
      <div className="relative z-20 mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col justify-between">
        <div className="my-auto max-w-3xl pt-8">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFAFCC]/40 bg-[#FFAFCC]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FFC8DD] backdrop-blur-md">
            <Compass className="h-3.5 w-3.5 text-[#FFAFCC]" />
            {activeSlide.badge}
          </div>

          {/* Heading */}
          <h1 className="mb-6 font-serif text-4xl font-light leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            {activeSlide.title} <br />
            <span className="bg-[linear-gradient(90deg,#FFC8DD,#CDB4DB,#A2D2FF)] bg-clip-text font-normal italic text-transparent">
              {activeSlide.titleItalic}
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-[#E6D9F0] sm:text-xl">
            {activeSlide.description}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={activeSlide.ctaLink}
              className="rounded-full border border-white/70 bg-[linear-gradient(135deg,#FFAFCC,#FFC8DD)] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#3B2A4F] shadow-[0_10px_28px_-12px_rgba(255,110,165,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-12px_rgba(255,110,165,0.9)]"
            >
              {activeSlide.ctaText}
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-3.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:border-white/70 hover:bg-white/20"
            >
              Contact Designer
            </Link>
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center justify-between border-t border-white/15 pt-8">
          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-[#FFAFCC]'
                    : 'w-2 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Manual Arrows */}
          {/* <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="rounded-xl border border-white/25 bg-white/10 p-3 text-white/80 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[#FFAFCC] hover:bg-[#FFAFCC] hover:text-[#3B2A4F]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="rounded-xl border border-white/25 bg-white/10 p-3 text-white/80 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[#FFAFCC] hover:bg-[#FFAFCC] hover:text-[#3B2A4F]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}