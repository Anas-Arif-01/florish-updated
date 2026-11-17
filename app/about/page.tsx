import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Flourish Interiors',
  description:
    'Meet Flourish Interiors, a Pakistan-wide interior design and finishing studio bringing considered materials, bespoke details, and lasting artistry to every space.',
};

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Spatial Concept',
    description:
      'We understand your lifestyle, architecture, and aesthetic goals to shape a cohesive design direction.',
  },
  {
    number: '02',
    title: 'Curated Material Selection',
    description:
      'We source imported wall coverings, engineered flooring, custom ceilings, and refined finishes for your space.',
  },
  {
    number: '03',
    title: 'Precision Execution & Handover',
    description:
      'From grey structure or renovation through final styling, we bring hands-on site supervision and meticulous installation.',
  },
];

const metrics = [
  { value: '8+', label: 'Years of Design & Finishing Artistry' },
  { value: '142+', label: 'Residential & Commercial Spaces Styled' },
  { value: '100%', label: 'Tailored Material & Execution Guidance' },
  { value: 'All Pakistan', label: 'Consultations & Project Delivery' },
];

const values = [
  {
    title: 'Craft Over Shortcuts',
    description:
      'Every surface, joint, and finish is installed with long-term durability and detail in mind.',
  },
  {
    title: 'Honest, Transparent Guidance',
    description:
      'We recommend materials and layouts that genuinely serve your space and budget—never unnecessary extras.',
  },
  {
    title: 'Spaces Built Around You',
    description:
      'We design around how you actually live and work, so every room feels effortless and enduring.',
  },
];

const eyebrowClass =
  'text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#92754F]';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D1B2E]">
      <section className="relative overflow-hidden bg-[#2D1B2E] px-5 py-24 text-[#FDFBF7] sm:px-8 sm:py-32 lg:px-12 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-5 border border-[#CDBB9D]/20 sm:inset-8 lg:inset-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full border border-[#CDBB9D]/10 sm:-right-20 sm:-top-48 sm:h-[38rem] sm:w-[38rem]"
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#D8C6A7]">
            <span aria-hidden="true" className="h-px w-8 bg-[#D8C6A7]" />
            FLOURISH INTERIORS
          </p>
          <h1 className="mt-8 max-w-5xl font-serif text-4xl font-normal leading-[1.13] tracking-[-0.035em] sm:text-6xl md:text-7xl">
            Crafting Spaces That Reflect Refined Taste &amp; Timeless Artistry
          </h1>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#E3DAD0] sm:text-base sm:leading-8">
            Flourish Interiors is a premier interior design, architectural
            finishing, and curated surface studio serving residential and
            commercial clients across Pakistan. We bring considered design,
            enduring materials, and meticulous craftsmanship together to make
            every space feel distinctly yours.
          </p>
          <div
            aria-hidden="true"
            className="mt-12 h-px w-20 bg-gradient-to-r from-[#D8C6A7] to-transparent"
          />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <p className={eyebrowClass}>OUR STORY &amp; MISSION</p>
            <h2 className="mt-5 max-w-xl font-serif text-3xl font-normal leading-tight tracking-[-0.025em] sm:text-4xl lg:text-[2.8rem]">
              Born from a passion for spaces that feel personal, considered,
              and lasting.
            </h2>
          </div>
          <div className="space-y-5 self-end border-l border-[#D8C6A7] pl-5 text-sm leading-7 text-[#655866] sm:pl-8 sm:text-base sm:leading-8">
            <p>
              We believe a well-designed interior is more than a beautiful
              finish. It is the thoughtful meeting point between architecture
              and the everyday rituals that make a place feel like home or
              work. Flourish Interiors exists to bridge that gap—turning raw
              structure into warm, livable luxury.
            </p>
            <p>
              Our mission is to make the journey feel as considered as the
              result. Through curated materials, bespoke finishes, and
              thoughtful spatial planning, we help each client make confident
              choices and bring a cohesive vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F3EEE6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className={eyebrowClass}>HOW WE WORK</p>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              A Seamless Path from Vision to Completion
            </h2>
          </div>
          <div className="grid border-y border-[#D8CFC2] md:grid-cols-3 md:divide-x md:divide-[#D8CFC2]">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="border-b border-[#D8CFC2] py-7 first:pt-8 last:border-b-0 md:border-b-0 md:px-7 md:py-9 md:first:pl-0 md:last:pr-0"
              >
                <p className="font-serif text-3xl text-[#92754F]">
                  {step.number}
                </p>
                <h3 className="mt-5 max-w-xs font-serif text-xl leading-snug sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[#655866]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="Flourish Interiors by the numbers"
        className="bg-[#2D1B2E] px-5 py-12 text-[#FDFBF7] sm:px-8 sm:py-14 lg:px-12"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-4 md:gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-l border-[#CDBB9D]/50 pl-4 sm:pl-5"
            >
              <p className="font-serif text-3xl leading-tight tracking-tight text-[#E4D2B3] sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 max-w-[15rem] text-xs leading-5 text-[#E3DAD0] sm:text-sm sm:leading-6">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 inset-x-3 top-3 rounded-t-full border border-[#D8C6A7] sm:-bottom-4 sm:-right-4 sm:inset-x-4 sm:top-4"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-[#CDBB9D] bg-[linear-gradient(155deg,#49334A_0%,#2D1B2E_54%,#B49A76_145%)] p-3 shadow-[0_24px_70px_-45px_rgba(45,27,46,0.65)]">
              <div
                aria-hidden="true"
                className="absolute inset-3 rounded-t-full border border-[#E4D2B3]/50 sm:inset-4"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-1/2 top-[18%] h-[64%] w-px -translate-x-1/2 bg-[#E4D2B3]/20"
              />
              <div
                aria-hidden="true"
                className="absolute left-[18%] right-[18%] top-1/2 h-px bg-[#E4D2B3]/20"
              />
              <div className="relative flex h-full flex-col items-center justify-center">
                <span className="font-serif text-7xl tracking-[-0.1em] text-[#F4E9D4] sm:text-8xl">
                  OZ
                </span>
                <span
                  aria-hidden="true"
                  className="mt-5 h-px w-10 bg-[#D8C6A7]"
                />
                <span className="mt-4 text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#E4D2B3]">
                  Flourish Interiors
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className={eyebrowClass}>LEADERSHIP</p>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              A vision shaped by detail.
            </h2>
            <blockquote className="mt-7 border-l border-[#B49A76] pl-5 text-sm leading-7 text-[#655866] sm:pl-7 sm:text-base sm:leading-8">
              “Every surface we install carries our name. That&apos;s why we
              treat every project, big or small, like it&apos;s the only one
              that matters. We do not simply supply materials; we work with our
              clients to understand their space, explore the right finishes,
              and bring their vision together.”
            </blockquote>
            <div className="mt-7 border-t border-[#E5DED3] pt-5">
              <p className="font-serif text-xl sm:text-2xl">Omar Zulfiqar</p>
              <p className="mt-1 text-sm text-[#92754F]">
                Founder &amp; Creative Director
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#655866]">
                Omar leads the creative direction of Flourish Interiors,
                bringing a considered perspective to the way colour, texture,
                and light shape our experience of a space.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3EEE6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className={eyebrowClass}>OUR CORE VALUES</p>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              Principles That Guide Every Project
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="border border-[#D8CFC2] bg-[#FDFBF7] p-6 sm:p-8"
              >
                <p className="font-serif text-2xl text-[#92754F]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-serif text-xl leading-snug sm:text-2xl">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#655866]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 border border-[#D8C6A7] bg-[#F7F1E8] px-6 py-9 sm:px-10 sm:py-11 md:flex-row md:items-center">
          <h2 className="max-w-2xl font-serif text-2xl leading-snug tracking-[-0.02em] sm:text-3xl">
            Ready to elevate your space or explore our curated surfaces?
          </h2>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/catalog"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#2D1B2E] px-6 py-3 text-sm font-medium text-[#FDFBF7] transition-colors hover:bg-[#49334A]"
            >
              Explore Full Catalog
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-[#B9A88D] px-6 py-3 text-sm font-medium text-[#2D1B2E] transition-colors hover:bg-[#EDE4D7]"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
