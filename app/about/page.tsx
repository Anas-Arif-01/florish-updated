import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Flourish Interiors',
  description:
    'Meet Flourish Interiors, a Pakistan-wide interior design and finishing studio transforming spaces with considered materials and lasting craftsmanship.',
};

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Spatial Concept',
    description:
      'We understand your lifestyle, architecture, and aesthetic goals to shape a cohesive design direction.',
    image: '/images/products/window-coverings/door-2.jpeg',
    imageAlt: 'Finished living space with tailored dark window blinds',
  },
  {
    number: '02',
    title: 'Curated Material Selection',
    description:
      'We source imported wall coverings, engineered flooring, custom ceilings, and refined finishes for your space.',
    image: '/images/products/wall-coverings/wall-covering-1.jpeg',
    imageAlt: 'Textured feature wall panels installed in a finished room',
  },
  {
    number: '03',
    title: 'Precision Execution & Handover',
    description:
      'From grey structure or renovation through final styling, we bring hands-on site supervision and meticulous installation.',
    image: '/images/products/window-coverings/curtains-3.jpeg',
    imageAlt: 'Drapery and curtains installed in a warmly finished room',
  },
];

const metrics = [
  { value: '33+', label: 'Years of Artistry' },
  { value: '500+', label: 'Homes Styled' },
  { value: '30+', label: 'Product Types' },
  { value: '100%', label: 'Custom Fit' },
];

const guarantees = [
  {
    title: 'Craft Over Shortcuts',
    description:
      'We install every surface and finish with long-term durability and detail in mind.',
  },
  {
    title: 'Honest, Transparent Guidance',
    description:
      'We recommend materials and layouts that serve your space and budget—never unnecessary extras.',
  },
  {
    title: 'Spaces Built Around You',
    description:
      'We plan around how you live and work, so every room feels effortless and enduring.',
  },
  {
    title: 'End-to-End Accountability',
    description:
      'We stay involved from the first design conversation through installation and handover.',
  },
];

const eyebrowClass =
  'inline-flex rounded-full border border-white/80 bg-white/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A63D77]';

const cardClass =
  'rounded-3xl border border-white/40 bg-white/35 p-6 shadow-[0_14px_34px_-22px_rgba(83,52,91,0.42)] backdrop-blur-md sm:p-7';

function PhotoFrame({
  src,
  alt,
  sizes,
  aspectClass,
  priority = false,
  unoptimized = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  aspectClass: string;
  priority?: boolean;
  unoptimized?: boolean;
}) {
  return (
    <div className="relative isolate mx-auto w-full">
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-[2.25rem] border border-white/70"
      />
      <div className="relative rounded-[28px] border border-white/40 bg-white/15 p-3 backdrop-blur-sm">
        <div
          className={`relative ${aspectClass} overflow-hidden rounded-[20px] border border-white/70`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            unoptimized={unoptimized}
            sizes={sizes}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#FFF8FB] text-[#3B2A4F]">
      <div className="bg-[linear-gradient(115deg,#FFC8DD_0%,#FFAFCC_32%,#CDB4DB_68%,#A2D2FF_100%)]">
        <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className={eyebrowClass}>ABOUT FLOURISH INTERIORS</p>
              <h1 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight text-[#2D1B2E] sm:text-5xl md:text-6xl">
                Crafting Spaces That Reflect Refined Taste &amp; Timeless
                Artistry
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#3B2A4F] sm:text-lg">
                Flourish Interiors is a Pakistan-wide design and finishing
                studio transforming bare structures and dated interiors into
                refined homes and commercial spaces. From curated materials and
                spatial planning to expert installation, we bring each vision
                to life with considered detail and lasting craftsmanship.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/catalog"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2D1B2E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3B2A4F]"
                >
                  Explore Full Catalog
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#3B2A4F]/30 bg-white/60 px-6 py-3 text-sm font-semibold text-[#2D1B2E] transition-colors hover:bg-white"
                >
                  Discuss your project
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl">
              <PhotoFrame
                src="/images/products/wall-coverings/wall-covering-21.jpeg"
                alt="Contemporary living room with a patterned feature wall and sculptural seating"
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 45vw"
                aspectClass="aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        <section
          aria-label="Flourish Interiors by the numbers"
          className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/70 bg-white/60 px-4 py-4 text-center backdrop-blur-sm sm:py-5"
              >
                <p className="font-serif text-2xl font-semibold text-[#2D1B2E] sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-medium text-[#5B4A6E] sm:text-sm">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-white">
        <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div className="mx-auto w-full max-w-lg">
              <PhotoFrame
                src="/images/banners/hero image.jpeg"
                alt="Arched reception interior with a sculpted desk and detailed wall finish"
                sizes="(max-width: 768px) 100vw, 42vw"
                aspectClass="aspect-[4/3]"
              />
            </div>
            <div className="max-w-2xl">
              <p className={eyebrowClass}>OUR STORY &amp; MISSION</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-[#2D1B2E] sm:text-4xl md:text-5xl">
                Born from a passion for spaces that feel personal, considered,
                and lasting.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-[#5B4A6E] sm:text-base">
                <p>
                  We believe a well-designed interior is where architecture
                  meets the everyday rituals that make a place feel like home.
                  Flourish Interiors exists to transform bare grey structures
                  and outdated interiors across Pakistan into warm, refined,
                  enduring homes.
                </p>
                <p>
                  Our mission is to make the journey as considered as the
                  result. Through curated materials, bespoke finishes, and
                  thoughtful spatial planning, we help every client make
                  confident choices and bring a cohesive vision to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div className="mx-auto w-full max-w-lg">
              <div className="relative isolate mx-auto w-full max-w-sm">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2.25rem] border border-white/70"
                />
                <div className="relative rounded-[28px] border border-white/40 bg-white/15 p-3 backdrop-blur-sm">
                  <div
                    role="img"
                    aria-label="OZ monogram for founder Omar Zulfiqar"
                    className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-[20px] border border-white/70 bg-[linear-gradient(135deg,#FFC8DD_0%,#CDB4DB_55%,#A2D2FF_100%)]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-4 rounded-t-full border border-[#2D1B2E]/25 sm:inset-5"
                    />
                    <span className="relative font-serif text-7xl tracking-[-0.1em] text-[#2D1B2E] sm:text-8xl">
                      OZ
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative mt-5 h-px w-10 bg-[#2D1B2E]/45"
                    />
                    <span className="relative mt-4 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[#2D1B2E]">
                      Flourish Interiors
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className={eyebrowClass}>A NOTE FROM OUR FOUNDER</p>
              <h2 className="mt-3 font-serif text-3xl font-light leading-tight text-[#2D1B2E] sm:text-4xl md:text-5xl">
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
                  our collection is selected to encourage curiosity and make
                  more considered design choices possible.
                </p>
                <p>
                  We do not simply supply materials. We work with our clients to
                  understand the space, explore the right finishes, and bring
                  the final vision together.”
                </p>
              </blockquote>
              <div className="mt-7 border-t border-[#EBD9F1] pt-5">
                <p className="font-serif text-xl font-semibold italic text-[#2D1B2E]">
                  Omar Zulfiqar
                </p>
                <p className="mt-1 text-sm text-[#75668A]">
                  Founder &amp; Creative Director
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#FFF8FB]">
        <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <p className={eyebrowClass}>HOW WE WORK</p>
              <h2 className="mt-4 font-serif text-3xl font-light text-[#2D1B2E] sm:text-4xl md:text-5xl">
                A Seamless Path from Vision to Completion
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {processSteps.map((step) => (
                <article key={step.number} className={cardClass}>
                  <PhotoFrame
                    src={step.image}
                    alt={step.imageAlt}
                    sizes="(max-width: 768px) 100vw, 30vw"
                    aspectClass="aspect-[16/10]"
                  />
                  <p className="mt-5 font-serif text-2xl text-[#2D1B2E]">
                    {step.number}.
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-[#2D1B2E]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5B4A6E]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <p className={eyebrowClass}>OUR CORE VALUES</p>
              <h2 className="mt-4 font-serif text-3xl font-light text-[#2D1B2E] sm:text-4xl md:text-5xl">
                Principles That Guide Every Project
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {guarantees.map((guarantee) => (
                <article key={guarantee.title} className={cardClass}>
                  <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#EBD9F1] bg-[#F4ECF8] text-[#2D1B2E]">
                    <Check aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold leading-snug text-[#2D1B2E]">
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

        <section className="px-4 pb-16 pt-6 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl border border-white/40 bg-white/35 p-6 shadow-[0_14px_34px_-22px_rgba(83,52,91,0.42)] backdrop-blur-md sm:p-10 md:flex-row md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-light leading-tight text-[#2D1B2E] sm:text-4xl">
                Ready to Elevate Your Space?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#5B4A6E] sm:text-base">
                Share your vision with our team, and let&apos;s shape a space
                that feels distinctly yours.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2D1B2E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3B2A4F]"
              >
                Explore Full Catalog
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#3B2A4F]/30 bg-white/60 px-6 py-3 text-sm font-semibold text-[#2D1B2E] transition-colors hover:bg-white"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
