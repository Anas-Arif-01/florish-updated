'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';
import CatalogDropdown from '@/components/CatalogDropdown';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-[#EBD9F1] bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src="/logo.png"
              alt="Flourish Interiors logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-[#3B2A4F]">
            Flourish{' '}
            <span className="bg-[linear-gradient(90deg,#C2467F,#8B5FB0)] bg-clip-text font-normal text-transparent">
              Interiors
            </span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <CatalogDropdown />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="site-side-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#5B4A6E] transition-colors hover:bg-[#FFF0F6] hover:text-[#A63D77]"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* lavender focus ring (scoped to navbar links) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            header a:focus-visible,header button:focus-visible{outline:2px solid #9D7FB5;outline-offset:3px;border-radius:999px}
          `,
        }}
      />
    </header>
      <>
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
          aria-hidden={!menuOpen}
          className={`fixed inset-0 z-[60] bg-[#2E1F42]/40 transition-opacity duration-300 ease-in-out ${
            menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        />
        <aside
          id="site-side-menu"
          role="dialog"
          aria-modal={menuOpen}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          aria-label="Site navigation"
          className={`fixed inset-y-0 right-0 z-[70] flex w-[min(88vw,24rem)] flex-col border-l border-[#EBD9F1] bg-white shadow-2xl transition-transform duration-300 ease-in-out will-change-transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#EBD9F1] px-6 py-5">
            <span className="text-lg font-semibold text-[#3B2A4F]">
              Explore Flourish
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="rounded-full p-2 text-[#5B4A6E] hover:bg-[#FFF0F6]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 p-4">
            {[
              { label: 'Home', href: '/' },
              { label: 'Design & Finishing', href: '/design-and-finishing' },
              { label: 'Renovation & Remodeling', href: '/renovation' },
              { label: 'Projects', href: '/#projects' },
              { label: 'About Us', href: '/about' },
              { label: 'Contact Us', href: '/about#contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#5B4A6E] transition-colors hover:bg-[#FFF0F6] hover:text-[#A63D77]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 border-t border-[#EBD9F1] px-6 py-5">
            <a
              href="tel:+923299906666"
              className="flex items-center gap-3 text-sm font-medium text-[#5B4A6E] transition-colors hover:text-[#A63D77]"
            >
              <Phone className="h-4 w-4 shrink-0" />
              +92 329 9906666
            </a>
            <a
              href="https://wa.me/923299906666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-[#5B4A6E] transition-colors hover:text-[#A63D77]"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              WhatsApp Flourish
            </a>
            <div className="flex items-start gap-3 text-sm leading-5 text-[#75668A]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#A63D77]" />
              <span>
                Grand Trunk (G.T.) Road, Zone 5,
                <br />
                Federal Capital Islamabad, Pakistan
              </span>
            </div>
          </div>
        </aside>
      </>
    </>
  );
}