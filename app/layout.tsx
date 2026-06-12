import type { Metadata } from 'next';
import { Bebas_Neue, Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';

/* ─── Fonts ─────────────────────────────────────────────────────────────── */
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Commercial Vehicle Body Fabricators — Navsari, India`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'tippers trailers',
    'tipper trailers manufacturer',
    'tipper body manufacturer',
    'tipper trailer fabricator India',
    'commercial vehicle body fabricator',
    'BlueRock tippers',
    'BlueRock trailers',
    'bluerocktippers',
    'bluerock',
    'tipper bodies Navsari',
    'trailer manufacturer India',
    'hook loader fabricator',
    'cargo body manufacturer',
    'tanker body fabricator',
    'MIG welding truck bodies',
    'industrial fabricator Gujarat',
    'LCV MCV HCV body builder',
    'custom truck body India',
    'heavy duty trailer manufacturers',
    'commercial tipper fabrication',
    'truck body fabricators Navsari',
    'transport equipment manufacturer',
    'vehicle body customization',
  ],
  authors: [{ name: 'BlueRock Tippers', url: SITE_URL }],
  creator: 'BlueRock Tippers',
  publisher: 'BlueRock Tippers',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Commercial Vehicle Body Fabricators`,
    description: SITE_DESCRIPTION,
    locale: 'en_IN',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'BlueRock Tippers — Commercial Vehicle Body Fabricators, Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Commercial Vehicle Body Fabricators`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

/* ─── JSON-LD Structured Data ────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 400,
        height: 100,
      },
      foundingDate: '1984',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Survey No: 4/5, Vitthalnagar, Dehugaon',
        addressLocality: 'Navsari',
        postalCode: '396521',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-93726-49121',
        contactType: 'sales',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
      sameAs: [],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      telephone: '+91-93726-49121',
      email: 'excellence@bluerocktippers.com',
      foundingDate: '1984',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Survey No: 4/5, Vitthalnagar, Dehugaon',
        addressLocality: 'Navsari',
        postalCode: '396521',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '20.9517',
        longitude: '72.9789',
      },
      openingHours: 'Mo-Sa 09:00-18:00',
      priceRange: '₹₹₹',
    },
  ],
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-rock-navy text-rock-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
