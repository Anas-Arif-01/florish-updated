import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Layers, MessageCircle } from 'lucide-react';

export interface CatalogCardProduct {
  id: string;
  title: string;
  image?: string;
  href?: string;
  badgeText?: string;
  showCategoryBadge?: boolean;
  category?: string;
  count?: number;
}

export default function CatalogCard({
  product,
  variant,
}: {
  product: CatalogCardProduct;
  variant?: 'category';
}) {
  const badgeText =
    product.badgeText ??
    product.category ??
    (product.count === undefined ? 'Premium' : `${product.count} items`);
  const href = product.href ?? `/catalog/${product.id}`;
  const quoteHref = `https://wa.me/923299906666?text=${encodeURIComponent(
    `Hi! I would like to request a quote for ${product.title}.`
  )}`;
  const cardClassName = `group relative block aspect-[3/4] overflow-hidden rounded-t-full rounded-b-2xl bg-[#F4ECF8] shadow-[0_24px_40px_-24px_rgba(157,127,181,0.7)] transition-transform duration-500 hover:-translate-y-1`;

  if (variant === 'category') {
    return (
      <Link
        href={href}
        aria-label={`Explore ${product.title}`}
        className={`catalog-category-card ${cardClassName}`}
        style={{ borderRadius: '9999px 9999px 1.5rem 1.5rem' }}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="catalog-category-card-placeholder absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#FFE3EE,#EBD9F1)]">
            <Layers
              className="catalog-category-card-icon h-10 w-10 text-[#9D7FB5]"
              aria-hidden="true"
            />
          </div>
        )}

        <div
          aria-hidden="true"
          className="catalog-category-card-overlay pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center justify-end gap-3 px-4 text-center">
          <h3 className="line-clamp-2 font-serif text-lg font-bold leading-snug tracking-tight text-white drop-shadow md:text-xl">
            {product.title}
          </h3>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-stone-900 shadow-md transition-all group-hover:bg-white group-active:scale-95">
            Explore
            <ArrowUpRight
              className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <article
      className={cardClassName}
      style={{ borderRadius: '9999px 9999px 1.5rem 1.5rem' }}
    >
      {product.image ? (
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#FFE3EE,#EBD9F1)]">
          <Layers
            className="h-10 w-10 text-[#9D7FB5]"
            aria-hidden="true"
          />
        </div>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
      />

      {product.showCategoryBadge ? (
        <span className="absolute left-1/2 top-5 max-w-[calc(100%-2rem)] -translate-x-1/2 truncate rounded-full border border-white/70 bg-white/90 px-3 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3B2A4F] shadow-sm sm:top-6 sm:text-[11px]">
          {badgeText}
        </span>
      ) : null}

      <div className="absolute inset-x-0 bottom-3 flex flex-col items-center justify-end gap-2 px-3 text-center sm:bottom-5 sm:gap-3 sm:px-4">
        <h3 className="line-clamp-2 font-serif text-base font-bold leading-snug tracking-tight text-white drop-shadow sm:text-lg md:text-xl">
          {product.title}
        </h3>
        <div className="flex w-full flex-col items-center gap-1.5">
          <Link
            href={href}
            className="inline-flex w-full items-center justify-center gap-1 rounded-full bg-white/95 px-2.5 py-1.5 text-[10px] font-semibold text-stone-900 shadow-md transition-colors hover:bg-white sm:px-4 sm:text-xs"
          >
            View Details
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </Link>
          <a
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-1 rounded-full border border-white/80 bg-[#3B2A4F]/90 px-2.5 py-1.5 text-[10px] font-semibold text-white shadow-md transition-colors hover:bg-[#2E1F42] sm:px-4 sm:text-xs"
          >
            Request Quote
            <MessageCircle className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
