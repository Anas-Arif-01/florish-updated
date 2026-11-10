import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Design & Finishing | Flourish Interiors',
  description:
    'Discover the Flourish Interiors approach to thoughtful design, premium materials, expert installation, and complete interior finishing.',
};

const stats = [
  { value: '33+', label: 'Years of Artistry' },
  { value: '500+', label: 'Homes Styled' },
  { value: '30+', label: 'Product Types' },
  { value: '100%', label: 'Custom Fit' },
];

const guarantees = [
  {
    title: 'Premium Materials',
    description:
      'A considered collection of quality finishes chosen for enduring beauty, feel, and performance.',
  },
  {
    title: 'Material Expertise',
    description:
      'Clear, thoughtful guidance to help you compare textures, colors, origins, and practical details.',
  },
  {
    title: 'Professional Installation',
    description:
      'Experienced installation teams bring each selected finish together with care and precision.',
  },
  {
    title: 'After-Sales Support & Warranty Coverage',
    description:
      'Continued support after installation, with warranty coverage explained for your selected products.',
  },
];

export default function DesignAndFinishingPage() {
  return (
    <main className="bg-[#FFF8FB] text-[#3B2A4F]">
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#FFC8DD_0%,#FFAFCC_32%,#CDB4DB_68%,#A2D2FF_100%)] py-16 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-white/80 bg-white/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest">
              Design &amp; Finishing
            </p>
            <h1 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              Transforming Houses into Homes.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#3B2A4F] sm:text-lg">
              We specialize in transforming grey structures into beautifully
              designed, fully finished homes. Our design and finishing services
              include flooring, ceiling work, painting, electrical and plumbing
              installations, woodwork, kitchen design, and modern interior
              solutions. From concept to completion, we focus on quality
              craftsmanship, elegant designs, and attention to every detail to
              bring your dream home to life.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/923299906666?text=Hi!%20I%20would%20like%20to%20discuss%20a%20design%20and%20finishing%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3B2A4F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2E1F42]"
              >
                Discuss your project <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center rounded-full border border-[#3B2A4F]/30 bg-white/60 px-6 py-3 text-sm font-semibold transition hover:bg-white"
              >
                Browse materials
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.25rem] border border-white/70"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-[0_28px_60px_-30px_rgba(46,31,66,0.55)]">
              <Image
                src="/images/banners/hero image.jpeg"
                alt="Warm living space with coordinated interior finishes"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 px-4 sm:mt-16 sm:grid-cols-4 sm:gap-4 sm:px-6 lg:px-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/70 bg-white/60 px-4 py-4 text-center backdrop-blur-sm sm:py-5"
            >
              <div className="font-serif text-2xl font-semibold sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-[#5B4A6E] sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:px-8">
          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-[#EBD9F1] sm:translate-x-4 sm:translate-y-4"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#F4ECF8]">
              <Image
                src="/images/ceo-photo.svg"
                alt="Illustrated placeholder portrait for Omar Zulfiqar"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-center text-xs text-[#75668A]">
              Founder portrait image placeholder
            </p>
          </div>

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A63D77]">
              A note from our founder
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              A different perspective on interior materials.
            </h2>
            <blockquote className="mt-6 space-y-4 border-l-2 border-[#D3B6D1] pl-5 text-sm leading-7 text-[#5B4A6E] sm:text-base">
              <p>
                “For me, interior design has never been just about filling a
                space. It is about how colors, textures, and light transform
                the way we experience a place.
              </p>
              <p>
                We founded Flourish Interiors to challenge the standard
                approach to interior finishes. Every material and palette in
                our collection is selected to encourage curiosity and make more
                considered design choices possible.
              </p>
              <p>
                We do not simply supply materials. We work with our clients to
                understand the space, explore the right finishes, and bring the
                final vision together.”
              </p>
            </blockquote>
            <div className="mt-7 border-t border-[#EBD9F1] pt-5">
              <p className="font-serif text-xl font-semibold italic">
                Omar Zulfiqar
              </p>
              <p className="mt-1 text-sm text-[#75668A]">
                Founder &amp; Creative Director
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A63D77]">
              The Flourish approach
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl md:text-5xl">
              More than materials. A complete interior finish.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#5B4A6E] sm:text-base">
              Thoughtful advice, carefully selected materials, skilled
              installation, and ongoing support—bringing every detail of your
              interior together.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((guarantee) => (
              <article
                key={guarantee.title}
                className="rounded-3xl border border-[#EBD9F1]/80 bg-white p-6 shadow-[0_14px_34px_-22px_rgba(83,52,91,0.42)] transition-transform duration-300 hover:-translate-y-1 sm:p-7"
              >
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F4ECF8] text-[#A63D77]">
                  <Check aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-lg font-semibold leading-snug">
                  {guarantee.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5B4A6E]">
                  {guarantee.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
