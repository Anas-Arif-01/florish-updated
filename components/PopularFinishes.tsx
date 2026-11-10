import CatalogCard from '@/components/CatalogCard';
import { PRODUCTS } from '@/data/products';

const featuredSlugs = [
  'solid-wood-okan',
  'solid-wood-kasai',
  'solid-wood-oak',
  'german-laminate-flooring',
  'turkish-laminate-flooring',
];

export default function PopularFinishes() {
  const products = featuredSlugs
    .map((slug) => PRODUCTS.find((product) => product.slug === slug))
    .filter((product) => product !== undefined);

  return (
    <section className="bg-[#FFF8FB] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-2xl sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A63D77]">
            Featured selection
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#3B2A4F] sm:text-3xl lg:text-4xl">
            Popular Finishes
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#5B4A6E] sm:text-base">
            Explore distinctive finishes chosen for their warmth, character,
            and lasting appeal.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-2 items-start gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:gap-5 xl:grid-cols-5">
          {products.map((product) => (
            <CatalogCard
              key={product.id}
              product={{
                id: product.id,
                title: product.title,
                image: product.image,
                href: `/catalog/${product.slug}`,
                badgeText: product.subCategory,
                showCategoryBadge: true,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
