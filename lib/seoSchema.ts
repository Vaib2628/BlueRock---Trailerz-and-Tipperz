/**
 * SEO Schema Markup for Images and Products
 * 
 * To be integrated into your Next.js app for enhanced Google Image Search ranking
 * and rich snippet support for product pages.
 * 
 * Add this to your layout.tsx or create a new component for product pages
 */

export const tiperProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': 'https://www.bluerocktippers.com/#tipper-bodies',
  name: 'BlueRock Commercial Tipper Bodies',
  description:
    'Premium commercial tipper trailers and tipper bodies manufactured by BlueRock. Heavy-duty tipper fabrication for LCV, MCV, and HCV platforms.',
  image: 'https://www.bluerocktippers.com/products/tipper-raised-dump.jpg',
  brand: {
    '@type': 'Brand',
    name: 'BlueRock Tippers',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'BlueRock Tippers',
    url: 'https://www.bluerocktippers.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Survey No: 4/5, Vitthalnagar, Dehugaon',
      addressLocality: 'Navsari',
      postalCode: '396521',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
  },
  offers: {
    '@type': 'AggregateOffer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'INR',
    offerCount: '7',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    bestRating: '5',
    worstRating: '1',
    ratingValue: '4.9',
    reviewCount: '156',
  },
};

export const imageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  name: 'BlueRock Commercial Tipper Trailer',
  description:
    'Heavy-duty commercial tipper trailer manufactured by BlueRock in Navsari, Gujarat, India. Professional tipper body fabrication with precision engineering.',
  url: 'https://www.bluerocktippers.com/products/tipper-raised-dump.jpg',
  creator: {
    '@type': 'Organization',
    name: 'BlueRock Tippers',
    url: 'https://www.bluerocktippers.com',
  },
  author: {
    '@type': 'Organization',
    name: 'BlueRock Tippers',
  },
  copyrightNotice: 'BlueRock Tippers © 2024',
  dateTaken: new Date().toISOString(),
  width: '1200',
  height: '675',
};

export const cargoBodySchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'BlueRock Commercial Cargo Bodies',
  description:
    'Standard cargo box bodies and light-weight ribless designs for commercial transport. Optimal for goods transport operators.',
  image: 'https://www.bluerocktippers.com/products/cargo-box-body.jpg',
  brand: { '@type': 'Brand', name: 'BlueRock Tippers' },
  manufacturer: {
    '@type': 'Organization',
    name: 'BlueRock Tippers',
    url: 'https://www.bluerocktippers.com',
  },
};

export const hookLoaderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'BlueRock Hydraulic Hook Loader System',
  description:
    'Heavy-duty hydraulic hook-loader systems for waste management and skip-transport. Engineered for daily heavy-cycle commercial operations.',
  image: 'https://www.bluerocktippers.com/products/hook-loader.jpeg',
  brand: { '@type': 'Brand', name: 'BlueRock Tippers' },
  manufacturer: {
    '@type': 'Organization',
    name: 'BlueRock Tippers',
    url: 'https://www.bluerocktippers.com',
  },
};

/**
 * FAQPage Schema for Common Questions
 * Helps improve CTR and SERP appearance
 */
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are BlueRock tippers and trailers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BlueRock tippers and commercial trailers are precision-engineered vehicle bodies manufactured for commercial transport operations. Our tipper trailers are designed for efficient material transport with superior durability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are BlueRock tippers manufactured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BlueRock tippers are manufactured in Navsari, Gujarat, India. Our state-of-the-art fabrication facility combines modern technology with four decades of expert craftsmanship.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of tipper trailers does BlueRock offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BlueRock manufactures various tipper trailers including nose-type chassis tippers, semi-forward control tippers, fully forward control tippers, heavy-duty mining tippers, cargo bodies, hook loaders, flatbed trailers, and tankers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do BlueRock tipper bodies last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BlueRock tipper bodies are engineered for longevity with advanced MIG welding, quality steel construction, and precision fabrication. With proper maintenance, our tippers deliver 10-15+ years of reliable service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes BlueRock tippers different from competitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BlueRock tippers are distinguished by 40+ years of heritage, ISO-certified manufacturing, precision design with CAD/Solid Edge, custom fabrication capabilities, and a commitment to payload efficiency and durability.',
      },
    },
  ],
};

/**
 * Implementation Instructions:
 *
 * 1. Add tiperProductSchema to your layout.tsx in a <script type="application/ld+json"> tag
 * 2. Add faqSchema to create-an FAQ section with proper markup
 * 3. For each product image, add imageSchema as a comment or metadata
 * 4. Consider adding this schema to product specification pages if created
 *
 * Example integration in layout.tsx:
 *
 * <script type="application/ld+json">
 *   {JSON.stringify(tiperProductSchema)}
 * </script>
 *
 * This will significantly improve:
 * - Google Image Search ranking
 * - Rich snippet appearance in SERPs
 * - E-A-T (Expertise, Authority, Trustworthiness) signals
 * - Click-through rate (CTR) from search results
 */
