import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Flourish Interiors',
  description:
    'Meet Flourish Interiors: a design studio creating thoughtful, refined spaces with considered materials and skilled craftsmanship.',
};

const standards = [
  {
    title: 'Quality First',
    description:
      'We select trusted materials and bring care and attention to every finish.',
  },
  {
    title: 'Thoughtful Design',
    description:
      'We shape each space around the people who live, work, and gather in it.',
  },
  {
    title: 'Craftsmanship',
    description:
      'Our team focuses on precise installation and a considered final result.',
  },
  {
    title: 'Reliable Partnership',
    description:
      'Clear communication and dependable support guide every project.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF8FB] text-[#3B2A4F]">
      <section className="bg-[linear-gradient(115deg,#FFC8DD_0%,#FFAFCC_32%,#CDB4DB_68%,#A2D2FF_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex rounded-full border border-white/80 bg-white/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest">
            About Flourish Interiors
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Crafting Spaces That Reflect Refined Taste &amp; Timeless Artistry
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#3B2A4F] sm:text-lg">
            We bring thoughtful design, considered materials, and careful
            craftsmanship together to create welcoming spaces across Islamabad,
            Rawalpindi, and Taxila.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:gap-4">
            {[
              { value: '8+', label: 'Years of Artistry' },
              { value: '142+', label: 'Homes Styled' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/70 bg-white/60 px-4 py-4 text-center backdrop-blur-sm sm:py-5"
              >
                <p className="font-serif text-3xl font-semibold sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-[#5B4A6E] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#EBD9F1] bg-white p-6 shadow-[0_14px_34px_-22px_rgba(83,52,91,0.42)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A63D77]">
            A note from our founder
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light leading-tight sm:text-4xl">
            A considered approach to every space.
          </h2>
          <blockquote className="mt-5 border-l-2 border-[#D3B6D1] pl-5 text-sm leading-7 text-[#5B4A6E] sm:text-base">
            “Every surface we install carries our name. That&apos;s why we treat
            every project, big or small, like it&apos;s the only one that
            matters. We do not simply supply materials; we work with our clients
            to understand their space, explore the right finishes, and bring
            their vision together.”
          </blockquote>
          <div className="mt-6 border-t border-[#EBD9F1] pt-5">
            <p className="font-serif text-xl font-semibold italic">
              Omar Zulfiqar
            </p>
            <p className="mt-1 text-sm text-[#75668A]">
              Founder &amp; Creative Director
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4ECF8] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A63D77]">
              How we work
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">
              Our Core Standards
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((standard) => (
              <article
                key={standard.title}
                className="rounded-2xl border border-[#EBD9F1] bg-white p-5 sm:p-6"
              >
                <Check
                  aria-hidden="true"
                  className="mb-4 h-5 w-5 text-[#A63D77]"
                />
                <h3 className="font-serif text-lg font-semibold">
                  {standard.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5B4A6E]">
                  {standard.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light sm:text-4xl">
            Discover the Flourish collection
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#5B4A6E] sm:text-base">
            Explore finishes and materials selected to help you shape a space
            that feels like yours.
          </p>
          <Link
            href="/catalog"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2E1F42] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3B2A4F]"
          >
            Explore Full Catalog
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
