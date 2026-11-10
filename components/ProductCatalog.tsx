'use client';

import { useState } from 'react';
import CatalogCard from '@/components/CatalogCard';
import { PRODUCTS } from '@/data/products';

const categories = [
  { label: 'All Products', value: 'all' },
  { label: 'Flooring', value: 'flooring' },
  { label: 'Wall Coverings', value: 'wall-coverings' },
  { label: 'Ceilings', value: 'ceiling' },
  { label: 'Window Coverings', value: 'window-coverings' },
  { label: 'Doors', value: 'doors' },
  { label: 'Glass Paper', value: 'glass-paper' },
  { label: 'Artificial Grass', value: 'artificial-grass' },
];

export default function ProductCatalog({
  initialCategory = 'all',
}: {
  initialCategory?: string;
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const products = PRODUCTS.filter(
    (product) =>
      activeCategory === 'all' || product.category === activeCategory
  );

  return (
    <section
      id="catalog-browser"
      className="bg-[#FFF8FB] pb-24 pt-10 sm:pb-24 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A63D77]">
            Explore the collection
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#3B2A4F] sm:text-3xl lg:text-4xl">
            Products
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#5B4A6E] sm:text-base">
            {activeCategory === 'flooring'
              ? 'Explore our flooring collection, from warm wood finishes to durable modern surfaces, and find the right foundation for your space.'
              : 'Browse our full selection by category and find the right materials for your space.'}
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter products by category"
          className="mb-6 flex flex-wrap gap-2 sm:mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              aria-pressed={activeCategory === category.value}
              className={`rounded-full border px-3 py-2 text-[11px] font-semibold transition-colors sm:px-4 sm:text-xs ${
                activeCategory === category.value
                  ? 'border-[#3B2A4F] bg-[#3B2A4F] text-white'
                  : 'border-[#EBD9F1] bg-white text-[#5B4A6E] hover:border-[#CDB4DB] hover:bg-[#FFF0F6]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {products.length > 0 ? (
          <div className="grid min-w-0 grid-cols-2 items-start gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:gap-5">
            {products.map((product) => {
              const categoryLabel =
                categories.find(
                  (category) => category.value === product.category
                )?.label ?? product.subCategory;

              return (
                <CatalogCard
                  key={product.id}
                  product={{
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    href: `/catalog/${product.slug}`,
                    badgeText: categoryLabel,
                    showCategoryBadge: true,
                  }}
                />
              );
            })}
          </div>
        ) : (
          <p className="rounded-3xl border border-[#EBD9F1] bg-white p-10 text-center text-sm text-[#5B4A6E]">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
