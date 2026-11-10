import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found | Flourish Interiors',
      description: 'The product you are looking for is not available.',
    };
  }

  return {
    title: `${product.title} | Flourish Interiors`,
    description: product.description,
    keywords: `${product.title}, ${product.category}, ${product.subCategory}, interior design`,
    openGraph: {
      title: product.title,
      description: product.description,
      type: 'website',
      url: `https://flourishinteriors.com/catalog/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: `https://flourishinteriors.com/catalog/${product.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const slug = (await params).slug;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const categoryLabel = {
    flooring: 'Flooring',
    'wall-coverings': 'Wall Coverings',
    ceiling: 'Ceilings',
    'window-coverings': 'Window Coverings',
    doors: 'Doors',
    'glass-paper': 'Glass Paper',
  }[product.category];

  return (
    <main className="bg-white">
      {/* Product structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.title,
            description: product.description,
            image: product.image,
            sku: product.slug,
            brand: {
              '@type': 'Brand',
              name: 'Flourish Interiors',
            },
            category: product.subCategory,
            url: `https://flourishinteriors.com/catalog/${product.slug}`,
          }),
        }}
      />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-medium">Home</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <Link href="/catalog" className="text-emerald-600 hover:text-emerald-700 font-medium">Catalog</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <Link href={`/catalog?category=${product.category}`} className="text-emerald-600 hover:text-emerald-700 font-medium">{categoryLabel}</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-600 font-medium">{product.title}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Image Section */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.gallery.map((image, index) => (
                  <div key={image} className="relative aspect-square bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                    <Image
                      src={image}
                      alt={`${product.title} view ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 25vw, 12vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col gap-6">
            {/* Category Badge */}
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded w-fit">
              {product.subCategory}
            </span>

            {/* Title */}
            <h1 className="text-4xl font-bold text-slate-900">{product.title}</h1>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed">{product.description}</p>

            {/* Specifications */}
            {Object.keys(product.specs).filter(key => product.specs[key as keyof typeof product.specs]).length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Specifications</h2>
                <div className="bg-slate-50 rounded-lg p-6 space-y-4 border border-slate-200">
                  {product.specs.origin && (
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-1">Origin</p>
                      <p className="text-slate-600">{product.specs.origin}</p>
                    </div>
                  )}
                  {product.specs.material && (
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-1">Material</p>
                      <p className="text-slate-600">{product.specs.material}</p>
                    </div>
                  )}
                  {product.specs.thickness && product.specs.thickness.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-2">Available Thickness</p>
                      <div className="flex flex-wrap gap-2">
                        {product.specs.thickness.map((t, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded text-sm text-slate-600">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.specs.finishes && product.specs.finishes.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-2">Available Finishes</p>
                      <div className="flex flex-wrap gap-2">
                        {product.specs.finishes.map((f, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded text-sm text-slate-600">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.specs.finish && (
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-1">Finish</p>
                      <p className="text-slate-600">{product.specs.finish}</p>
                    </div>
                  )}
                  {product.specs.types && product.specs.types.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-2">{product.specs.typesLabel ?? 'Available Types'}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.specs.types.map((t, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded text-sm text-slate-600">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.specs.warranty && (
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-1">Warranty</p>
                      <p className="text-slate-600">{product.specs.warranty}</p>
                    </div>
                  )}
                  {product.specs.installation && (
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-1">Installation</p>
                      <p className="text-slate-600">{product.specs.installation}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Features */}
            {product.features.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Key Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications */}
            {product.applications.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200">
              <a
                href={`https://wa.me/923299906666?text=Hi Flourish Interiors, I am interested in ${product.title}. Could you please share product details and samples?`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-center"
              >
                Request Quote on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-12 border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/catalog/${relatedProduct.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {relatedProduct.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}