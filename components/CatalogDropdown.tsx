'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MENU_TREE } from '@/data/menu-tree';

const catalogCategories = MENU_TREE.filter(
  (category) =>
    category.id !== 'all' && category.id !== 'artificial-grass'
);

export default function CatalogDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="inline-flex items-center gap-1.5 rounded-full border border-[#EBD9F1] bg-white px-4 py-2 text-sm font-semibold text-[#3B2A4F] transition-colors hover:border-[#D3B6D1] hover:bg-[#FFF0F6]"
      >
        Catalog
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open ? (
        <nav
          aria-label="Catalog categories"
          role="menu"
          className="absolute right-0 top-full z-50 mt-3 w-[min(19rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#EBD9F1] bg-white p-2 shadow-xl"
        >
          <Link
            href="/catalog"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#3B2A4F] transition-colors hover:bg-[#FFF0F6]"
          >
            All Products
          </Link>
          <div className="my-1 border-t border-[#EBD9F1]" />
          {catalogCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm text-[#5B4A6E] transition-colors hover:bg-[#FFF0F6] hover:text-[#A63D77]"
            >
              {category.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
