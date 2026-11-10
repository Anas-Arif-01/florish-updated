import { PRODUCTS } from '@/data/products';

const BASE_URL = 'https://flourishinteriors.com.pk';

export async function GET() {
  const pages = [
    '/',
    '/about',
    '/catalog',
    '/popular-finishes',
    '/design-and-finishing',
  ];

  const urls = [
    ...pages,
    ...PRODUCTS.map((p) => `/catalog/${p.slug}`),
  ];

  const unique = Array.from(new Set(urls));

  const xmlItems = unique.map((path) => {
    const loc = `${BASE_URL}${path}`;
    const priority = path === '/' ? '1.0' : path.startsWith('/catalog/') ? '0.8' : '0.7';
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlItems}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
