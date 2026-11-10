import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { CatalogBrowser } from '@/components/CatalogCards';
import { findNode, productsFor } from '@/data/menu-helpers';
import { MessageCircle } from 'lucide-react';
import ServiceOptions from '@/components/ServiceOptions';
import ProductCatalog from '@/components/ProductCatalog';
import PopularFinishes from '@/components/PopularFinishes';

export const metadata: Metadata = {
  title:
    'Product Catalog — Flooring, Wall Coverings & Interior Solutions | Flourish Interiors',
  description:
    'Browse our comprehensive catalog of premium flooring, wall coverings, ceilings, window blinds, and doors. Imported and curated products for residential and commercial spaces.',
  keywords:
    'flooring catalog, wall coverings, ceiling systems, window blinds, interior products, Islamabad, Pakistan',
  openGraph: {
    title: 'Product Catalog — Flourish Interiors',
    description: 'Premium interior products catalog',
    type: 'website',
    url: 'https://flourishinteriors.com/catalog',
  },
};

/* =========================================================
   PAGE-LOCAL ANIMATION + FOCUS RING (no theme tokens used)
========================================================= */

const PAGE_CSS = `
@keyframes cat-float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(6deg)}}
@keyframes cat-twinkle{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:.95;transform:scale(1.1)}}
.cat-float{animation:cat-float 9s ease-in-out infinite}
.cat-twinkle{animation:cat-twinkle 3.6s ease-in-out infinite}
main.catalog-page :focus-visible{outline:2px solid #9D7FB5;outline-offset:3px}
main.catalog-page .catalog-category-card{
  background-color:#D3B6D1;
  box-shadow:0 0 0 1px rgba(105,75,110,.2),0 24px 40px -24px rgba(83,52,91,.6);
}
main.catalog-page .catalog-category-card .catalog-category-card-placeholder{
  background:linear-gradient(135deg,#E7D3E5 0%,#D3B6D1 100%);
}
main.catalog-page .catalog-category-card .catalog-category-card-icon{color:#6B4D70}
main.catalog-page .catalog-category-card .catalog-category-card-overlay{
  background:linear-gradient(to top,rgba(0,0,0,.85) 0%,rgba(0,0,0,.4) 55%,rgba(0,0,0,0) 100%);
}
@media (prefers-reduced-motion:reduce){
  .cat-float,.cat-twinkle{animation:none!important}
}
`;

/* =========================================================
   DECORATIVE MOTIFS (server-safe — no hooks)
========================================================= */

function Sparkle({
  className = '',
  style,
  color = '#FFAFCC',
}: {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M50 0C54 30 70 46 100 50C70 54 54 70 50 100C46 70 30 54 0 50C30 46 46 30 50 0Z"
        fill={color}
      />
    </svg>
  );
}

function SwatchFan({
  className = '',
  style,
  colors = ['#CDB4DB', '#FFC8DD', '#FFAFCC', '#BDE0FE', '#A2D2FF'],
}: {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {colors.map((c, i) => {
        const deg = -60 + i * 30;
        return (
          <rect
            key={i}
            x="46"
            y="6"
            width="9"
            height="46"
            rx="3"
            fill={c}
            transform={`rotate(${deg} 50 56)`}
          />
        );
      })}
      <circle cx="50" cy="56" r="5" fill="#2E1F42" />
      <circle cx="50" cy="56" r="2" fill="#FFF8FB" />
    </svg>
  );
}

function ArchOutline({
  className = '',
  style,
  stroke = '#9D7FB5',
}: {
  className?: string;
  style?: React.CSSProperties;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 140"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M14 138 V56 A36 36 0 0 1 86 56 V138"
        fill="none"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; path?: string }>;
}) {
  const resolvedParams = await searchParams;
  const activeCategory = resolvedParams.category;

  // ?category=flooring&path=wooden-floor/solid-wood → the item to show
  const pathSlugs = (resolvedParams.path ?? '').split('/').filter(Boolean);
  const found =
    findNode(activeCategory, pathSlugs) ?? findNode(activeCategory, []);

  const heroTitle = found ? found.node.label : 'Product Catalog';
  const selectedProduct = found
    ? productsFor(found.node, PRODUCTS)[0]
    : undefined;
  const heroDescription =
    found?.node.note ??
    selectedProduct?.description ??
    (found
      ? `Explore ${found.node.label} options in our ${found.root.label.toLowerCase()} collection, with styles and finishes for your space.`
      : 'Discover quality, style, and innovation all in one place. Explore our wide range of products, carefully selected to meet your needs and make your everyday life easier. We focus on delivering excellent quality, great value, and a smooth shopping experience. Find your perfect choice and enjoy shopping with confidence!');

  return (
    <main className="catalog-page min-h-screen bg-[#FFF8FB] font-sans text-[#3B2A4F] antialiased">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* =====================================================
          HERO — pastel gradient band
      ===================================================== */}
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#FFC8DD_0%,#FFAFCC_32%,#CDB4DB_68%,#A2D2FF_100%)] pb-24 pt-16 sm:pb-32 sm:pt-20 md:pt-24">
        {/* decorative soft glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6),transparent_65%)]"
        />

        {/* floating motifs */}
        <Sparkle
          className="cat-twinkle pointer-events-none absolute right-[12%] top-[18%] h-6 w-6"
          color="#FFFFFF"
        />
        <Sparkle
          className="cat-twinkle pointer-events-none absolute bottom-[22%] left-[8%] h-5 w-5"
          color="#FFFFFF"
          style={{ animationDelay: '-1.4s' }}
        />
        <ArchOutline
          className="cat-float pointer-events-none absolute left-[4%] top-[22%] hidden h-24 w-16 opacity-50 md:block"
          stroke="#FFFFFF"
        />
        <SwatchFan
          className="cat-float pointer-events-none absolute right-[4%] top-[30%] hidden h-20 w-20 opacity-60 md:block"
          style={{ animationDelay: '-3s' }}
          colors={['#FFFFFF', '#FFC8DD', '#FFAFCC', '#CDB4DB', '#A2D2FF']}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#3B2A4F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D94F8C] shadow-[0_0_0_3px_rgba(255,175,204,0.4)]" />
            Catalog
          </span>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-[#3B2A4F] sm:text-5xl md:text-6xl">
            {heroTitle}
          </h1>

          <div className="mt-6 h-[3px] w-16 rounded-full bg-[linear-gradient(90deg,#FFAFCC,#CDB4DB,#A2D2FF)]" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#3B2A4F] sm:text-base">
            {heroDescription}
          </p>
        </div>
      </section>

      <ServiceOptions />

      {pathSlugs.length > 0 && found?.trail.length ? (
        <section className="relative bg-[#FFF8FB] pb-16 pt-12 sm:pb-20 sm:pt-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CatalogBrowser found={found} products={PRODUCTS} />
          </div>
        </section>
      ) : (
        <>
          <PopularFinishes />
          <ProductCatalog initialCategory={activeCategory ?? 'all'} />
        </>
      )}

      {/* =====================================================
          CLOSING CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#FFC8DD_0%,#FFAFCC_32%,#CDB4DB_68%,#A2D2FF_100%)] pb-16 pt-20 sm:pb-20 sm:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/4 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6),transparent_65%)]"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#3B2A4F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D94F8C] shadow-[0_0_0_3px_rgba(255,175,204,0.4)]" />
            Need Guidance?
          </span>

          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[#3B2A4F] sm:text-3xl md:text-4xl">
            Not sure which material fits your space?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#3B2A4F] md:text-base">
            Request a physical sample, or speak directly with our team to
            narrow down the right finish.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/923299906666?text=Hi!%20I%20would%20like%20guidance%20on%20choosing%20a%20material."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2E1F42] px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B2A4F] hover:shadow-[0_16px_30px_-14px_rgba(46,31,66,0.7)] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with Us
            </a>

            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#3B2A4F] shadow-[0_12px_26px_-14px_rgba(46,31,66,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF0F6] hover:shadow-[0_18px_32px_-14px_rgba(46,31,66,0.5)] sm:w-auto"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}