import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PopularFinishes from '@/components/PopularFinishes';

export const metadata: Metadata = {
  title: 'Popular Finishes | Flourish Interiors',
  description:
    'Explore a curated selection of Flourish Interiors’ popular timber and laminate flooring finishes.',
};

export default function PopularFinishesPage() {
  return (
    <main className="min-h-screen bg-[#FFF8FB] text-[#3B2A4F]">
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#FFC8DD_0%,#FFAFCC_32%,#CDB4DB_68%,#A2D2FF_100%)] py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3 py-1.5 text-xs font-semibold tracking-wide">
            Flourish Interiors
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Popular Finishes
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 sm:text-base">
            A focused edit of distinctive timber and laminate flooring,
            selected to bring warmth and character to your space.
          </p>
          <Link
            href="/catalog"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#3B2A4F] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2E1F42]"
          >
            Browse all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <PopularFinishes />
    </main>
  );
}
