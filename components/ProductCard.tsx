'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MessageSquare, CheckCircle2, Layers } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMsg = `Hi Flourish Interiors, I am interested in *${product.title}* (${product.subCategory}). Could you please share product details and sample availability?`;
  const whatsappUrl = `https://wa.me/923299906666?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="group bg-[#161C22] border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Swatch Preview Frame */}
        <div className="relative aspect-[16/10] bg-[#0B0F12] overflow-hidden border-b border-slate-800/80">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />

          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-teal-300 bg-[#0B0F12]/90 px-2.5 py-1 rounded border border-teal-500/30 backdrop-blur-md">
              {product.subCategory}
            </span>
          </div>
        </div>

        {/* Content & Specs */}
        <div className="p-5 sm:p-6">
          <Link href={`/catalog/${product.slug}`}>
            <h3 className="text-xl font-serif text-slate-100 group-hover:text-amber-400 transition-colors">
              {product.title}
            </h3>
          </Link>

          {/* Dynamic Spec Highlights */}
          <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-1 gap-2 text-[11px] font-mono text-slate-300">
            {product.specs?.origin && (
              <div className="flex items-center gap-1.5 text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="truncate">
                  Origin: <strong className="text-slate-200">{product.specs.origin}</strong>
                </span>
              </div>
            )}

            {product.specs?.material && (
              <div className="flex items-center gap-1.5 text-slate-400">
                <Layers className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">
                  Material: <strong className="text-slate-200">{product.specs.material}</strong>
                </span>
              </div>
            )}

            {product.specs?.thickness && product.specs.thickness.length > 0 && (
              <div className="flex items-center gap-1.5 text-slate-400">
                <span className="text-slate-500 uppercase text-[9px] tracking-wider">Thickness:</span>
                <span className="text-slate-200">{product.specs.thickness.join(', ')}</span>
              </div>
            )}

            {product.specs?.types && product.specs.types.length > 0 && (
              <div className="flex items-start gap-1.5 text-slate-400">
                <span className="text-slate-500 uppercase text-[9px] tracking-wider shrink-0 mt-0.5">Types:</span>
                <span className="text-slate-200 line-clamp-2">{product.specs.types.join(', ')}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 pb-5 pt-2 flex items-center gap-2">
        <Link
          href={`/catalog/${product.slug}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#0B0F12] hover:bg-slate-800 text-slate-300 hover:text-slate-100 border border-slate-800 text-xs font-mono py-2.5 px-3 rounded-xl transition-colors"
        >
          Specs <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-mono text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-md"
          title="Inquire on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5" /> Quote
        </a>
      </div>
    </div>
  );
}