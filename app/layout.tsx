import type { Metadata } from 'next';
import { Syne, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { PRODUCTS } from '@/data/products';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourishinteriors.com.pk'),
  title: 'Flourish Interiors Premium Flooring, Wall Coverings & Design Solutions in Islamabad, Rawalpindi & Taxila',
  description: 'Flourish Interiors provides premium flooring, wall coverings, ceiling systems, and interior design solutions across Islamabad, Rawalpindi, and Taxila with expert installation and imported materials.',
  keywords: Array.from(new Set([
    'flooring in Islamabad', 'wall coverings in Rawalpindi', 'interior design Taxila', 'Islamabad interior solutions', 'Rawalpindi interior design', 'Taxila interior services', 'flooring', 'laminate', 'wood flooring', 'wall coverings', 'false ceiling', 'window blinds', 'interior design', 'Islamabad', 'Rawalpindi', 'Taxila', 'Pakistan',
    ...PRODUCTS.map(p => p.title),
    ...PRODUCTS.map(p => p.subCategory),
    ...PRODUCTS.flatMap(p => p.features || []),
  ])).slice(0, 80).join(', '),
  authors: [{ name: 'Flourish Interiors' }],
  openGraph: {
    title: 'Flourish Interiors Interior Design & Materials in Islamabad, Rawalpindi & Taxila',
    description: 'Premium flooring, wall coverings, window treatments, and design solutions for homes and businesses in Islamabad, Rawalpindi, and Taxila.',
    type: 'website',
    url: 'https://flourishinteriors.com.pk',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Flourish Interiors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flourish Interiors Premium Interior Design Solutions in Islamabad, Rawalpindi & Taxila',
    description: 'Premium flooring, wall coverings, and interior material services for homes and businesses in Islamabad, Rawalpindi, and Taxila.',
    images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Flourish Interiors',
              url: 'https://flourishinteriors.com.pk',
              logo: 'https://flourishinteriors.com.pk/favicon.svg',
              areaServed: ['Islamabad', 'Rawalpindi', 'Taxila'],
              sameAs: [
                'https://www.facebook.com/',
                'https://www.instagram.com/',
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+92 329 9906666',
                  contactType: 'customer service',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-stone-50 text-stone-800 font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}