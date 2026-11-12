import Link from 'next/link';
import type { ReactNode } from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import CatalogCard from '@/components/CatalogCard';
import { MENU_TREE, type MenuNode } from '@/data/menu-tree';
import {
  nodeHref,
  nodeImage,
  productsFor,
  slugify,
  type FoundNode,
} from '@/data/menu-helpers';
import type { Product } from '@/data/products';

/* The /catalog browser. Click a card → its sub-items show as cards → … →
   finally the products, and a product opens its normal product page.
   Phones show 2 cards per row.

   The structure comes from data/menu-tree.ts (same as the navbar dropdown),
   the products from data/products.ts. */
  
const GRID =
  'grid grid-cols-2 items-start gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4';

/* a card = photo + name; the whole card is a link */
function NodeCard({
  href,
  label,
  image,
}: {
  href: string;
  label: string;
  image?: string;
}) {
  return (
    <CatalogCard
      product={{
        id: label,
        title: label,
        image,
        href,
        badgeText: 'Curated collection',
      }}
      variant="category"
    />
  );
}

/* shown when an item has no sub-items and no products yet */
function NoItemsCard({ label, note }: { label: string; note?: string }) {
  return (
    <div className="rounded-3xl border border-[#EBD9F1] bg-white p-5 shadow-[0_8px_24px_-16px_rgba(157,127,181,0.4)] sm:p-7">
      <p className="max-w-xl text-sm leading-7 text-[#5B4A6E]">
        {note ??
          `Message us about ${label} and we will send you the available options and prices.`}
      </p>

      <a
        href={`https://wa.me/923299906666?text=${encodeURIComponent(
          `Hi! I am interested in ${label}.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2E1F42] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3B2A4F]"
      >
        <MessageCircle className="h-4 w-4" />
        Ask on WhatsApp
      </a>
    </div>
  );
}

function Breadcrumb({ found }: { found: FoundNode }) {
  const crumbs = [
    { label: 'Catalog', href: '/catalog' },
    { label: found.root.label, href: nodeHref(found.root.id) },
    ...found.trail.map((step) => ({
      label: step.node.label,
      href: nodeHref(found.root.id, step.slugs),
    })),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 flex flex-wrap items-center gap-1 text-xs text-[#75668A] sm:text-sm"
    >
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <span key={crumb.href} className="flex items-center gap-1">
            {isLast ? (
              <span className="font-semibold text-[#3B2A4F]">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="transition-colors hover:text-[#A63D77]"
              >
                {crumb.label}
              </Link>
            )}
            {!isLast ? <ChevronRight className="h-3.5 w-3.5" /> : null}
          </span>
        );
      })}
    </nav>
  );
}

export function CatalogBrowser({
  found,
  products,
  emptyState,
  individualProducts = false,
}: {
  found: FoundNode | null;
  products: Product[];
  emptyState?: ReactNode;
  individualProducts?: boolean;
}) {
  /* /catalog — the main item cards */
  if (!found) {
    return (
      <div className={GRID}>
        {MENU_TREE.filter((root) => root.id !== 'all').map((root) => (
          <NodeCard
            key={root.id}
            href={nodeHref(root.id)}
            label={root.label}
            image={nodeImage(root, products)}
          />
        ))}
      </div>
    );
  }

  /* a category / sub-item page */
  const { root, node, trail } = found;
  const children: MenuNode[] = node.children ?? [];
  const slugs = trail.length ? trail[trail.length - 1].slugs : [];
  const own = productsFor(node, products);

  return (
    <div>
      <Breadcrumb found={found} />

      {children.length > 0 ? (
        <div className={GRID}>
          {children.map((child) => (
            <NodeCard
              key={child.label}
              href={nodeHref(root.id, [...slugs, slugify(child.label)])}
              label={child.label}
              image={nodeImage(child, products)}
            />
          ))}
        </div>
      ) : null}

      {own.length > 0 ? (
        <div className={children.length > 0 ? 'mt-8 sm:mt-10' : ''}>
          {children.length > 0 ? (
            <h3 className="mb-3 text-base font-bold text-[#3B2A4F] sm:mb-4 sm:text-xl">
              Products
            </h3>
          ) : null}
          <div className={GRID}>
            {individualProducts
              ? own.map((product, index) => (
                  <CatalogCard
                    key={product.id}
                    variant="category"
                    product={{
                      id: product.id,
                      title: `Window Blinds - Design ${index + 1}`,
                      image: product.image,
                      href: `/catalog/${product.slug}`,
                      badgeText: 'Window Blinds',
                      showCategoryBadge: true,
                    }}
                  />
                ))
              : own.map((product) => (
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
      ) : null}

      {children.length === 0 && own.length === 0 ? (
        emptyState ?? <NoItemsCard label={node.label} note={node.note} />
      ) : null}
    </div>
  );
}
