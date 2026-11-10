const BASE_URL = 'https://flourishinteriors.com.pk';

export async function GET() {
  const txt = `User-agent: *\nAllow: /\nSitemap: ${BASE_URL}/sitemap.xml\n`;

  return new Response(txt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
