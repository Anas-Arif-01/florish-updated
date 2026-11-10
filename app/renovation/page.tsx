import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RenovationProjectGallery from '@/components/RenovationProjectGallery';
import { RENOVATION_PROJECTS } from '@/data/renovation-projects';

export const metadata: Metadata = {
  title: 'Renovation & Remodeling | Flourish Interiors',
  description:
    'Plan a complete interior renovation with Flourish Interiors, from material selection and design coordination to professional installation.',
};

export default function RenovationPage() {
  return (
    <main className="bg-[#FFF8FB] text-[#3B2A4F]">
      <section className="bg-[linear-gradient(115deg,#FFC8DD_0%,#FFAFCC_32%,#CDB4DB_68%,#A2D2FF_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex rounded-full border border-white/80 bg-white/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest">
            Renovation &amp; Remodeling
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Turnkey Remodeling, From Structure to Finished Home
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#3B2A4F] sm:text-lg">
            We coordinate design choices, material selection, and finishing
            work to help transform your space into a cohesive, comfortable
            home. Our team supports your project from the first conversation
            through installation and handover.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/923299906666?text=Hi!%20I%20would%20like%20to%20discuss%20a%20renovation%20and%20remodeling%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3B2A4F] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2E1F42]"
            >
              Discuss your renovation <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <Link
              href="/design-and-finishing"
              className="inline-flex items-center justify-center rounded-full border border-[#3B2A4F]/30 bg-white/60 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white"
            >
              Explore design &amp; finishing
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-7 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A63D77]">
            Selected work
          </p>
          <h2 className="mt-2 font-serif text-3xl font-light sm:text-4xl">
            Renovation details, thoughtfully finished
          </h2>
        </div>
        <RenovationProjectGallery projects={RENOVATION_PROJECTS} />
      </section>
    </main>
  );
}
