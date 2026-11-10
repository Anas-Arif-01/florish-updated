import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { findNode, nodeImage, nodeHref, slugify } from '@/data/menu-helpers';
import { CatalogBrowser } from '@/components/CatalogCards';
import CatalogCard from '@/components/CatalogCard';

const CATEGORY_GRID =
  'grid grid-cols-2 items-start gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4';

const DESCRIPTION =
  'Explore window coverings designed to balance privacy, light control, and style. Browse our blinds and curtains collections for your space.';

export default function WindowCoveringsCatalog({
  subcategory,
}: {
  subcategory?: string;
}) {
  const found = findNode(
    'window-coverings',
    subcategory ? [subcategory] : []
  );
  if (!found) notFound();

  const isOverview = !subcategory;
  const title = found.node.label;
  const description = isOverview
    ? DESCRIPTION
    : title === 'Curtains'
      ? 'Curtain collections coming soon.'
      : 'Explore our window blinds, with options for light control, privacy, and a tailored fit.';

  return (
    <main className="catalog-page min-h-screen bg-[#FFF8FB] font-sans text-[#3B2A4F] antialiased">
      <style>{`
        main.catalog-page .catalog-category-card{
          background-color:#D3B6D1;
          box-shadow:0 0 0 1px rgba(105,75,110,.2),0 24px 40px -24px rgba(83,52,91,.6);
        }
        main.catalog-page .catalog-category-card .catalog-category-card-placeholder{
          background:linear-gradient(135deg,#E7D3E5 0%,#D3B6D1 100%);
        }
        main.catalog-page .catalog-category-card .catalog-category-card-icon{color:#6B4D70}
        main.catalog-page .catalog-category-card .catalog-category-card-overlay{
          background:linear-gradient(to top,rgba(46,31,66,.62) 0%,rgba(46,31,66,.18) 45%,rgba(46,31,66,0) 100%);
        }
      `}</style>
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#FFC8DD_0%,#FFAFCC_32%,#CDB4DB_68%,#A2D2FF_100%)] pb-24 pt-16 sm:pb-32 sm:pt-20 md:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.6),transparent_65%)]"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#3B2A4F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D94F8C] shadow-[0_0_0_3px_rgba(255,175,204,0.4)]" />
            Catalog
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-[#3B2A4F] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <div className="mt-6 h-[3px] w-16 rounded-full bg-[linear-gradient(90deg,#FFAFCC,#CDB4DB,#A2D2FF)]" />
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#3B2A4F] sm:text-base">
            {description}
          </p>
        </div>
      </section>

      <section className="relative bg-[#FFF8FB] pb-16 pt-12 sm:pb-20 sm:pt-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {isOverview ? (
            <div>
              <nav
                aria-label="Breadcrumb"
                className="mb-4 flex flex-wrap items-center gap-1 text-xs text-[#75668A] sm:text-sm"
              >
                <Link
                  href="/catalog"
                  className="transition-colors hover:text-[#A63D77]"
                >
                  Catalog
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="font-semibold text-[#3B2A4F]">
                  Window Coverings
                </span>
              </nav>
              <div className={CATEGORY_GRID}>
                {found.node.children?.map((child) => (
                  <CatalogCard
                    key={child.label}
                    variant="category"
                    product={{
                      id: child.label,
                      title: child.label,
                      image: nodeImage(child, PRODUCTS),
                      href: nodeHref('window-coverings', [
                        slugify(child.label),
                      ]),
                      badgeText: `${child.label} collection`,
                      showCategoryBadge: true,
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <CatalogBrowser
              found={found}
              products={PRODUCTS}
              individualProducts={title === 'Blinds'}
              emptyState={
                title === 'Curtains' ? (
                  <div className="rounded-3xl border border-[#EBD9F1] bg-white px-5 py-8 text-center shadow-[0_8px_24px_-16px_rgba(157,127,181,0.4)] sm:px-7">
                    <p className="text-sm leading-7 text-[#5B4A6E]">
                      Curtain collections coming soon.
                    </p>
                  </div>
                ) : undefined
              }
            />
          )}
        </div>
      </section>
    </main>
  );
}
