// ── SEO Configuration ────────────────────────────────────────────────────────
// Edit page titles and meta descriptions here. Changes apply site-wide.
// For city/service pages, edit seo-data.ts instead.

export interface PageSEO {
  title: string
  description: string
  canonical: string
}

const SEO: Record<string, PageSEO> = {
  home: {
    title: 'Everett Lux Detailing | Mobile Car Detailing in Everett, WA',
    description:
      'Premium mobile car detailing in Everett, WA. Interior, exterior, ceramic coating, paint correction & more. We come to you. 5-star rated. Call (425) 230-0876 for a free quote.',
    canonical: '/',
  },
  services: {
    title: 'Car Detailing Services & Pricing | Everett Lux Detailing',
    description:
      'View all mobile car detailing services and pricing — interior detailing, exterior, full service, ceramic coating, paint correction, mold remediation & more. Serving Everett WA and surrounding areas.',
    canonical: '/services',
  },
  gallery: {
    title: 'Before & After Gallery | Mobile Car Detailing Results',
    description:
      'See real before and after results from Everett Lux Detailing. Interior, exterior, paint correction, ceramic coating transformations on cars in Everett, WA and surrounding areas.',
    canonical: '/gallery',
  },
  about: {
    title: 'About Us | Everett Lux Detailing',
    description:
      'Meet the team behind Everett Lux Detailing — a locally owned mobile car detailing business serving Everett, Marysville, Bothell, Kirkland, and surrounding Snohomish & King County areas.',
    canonical: '/about',
  },
  serviceAreas: {
    title: 'Mobile Detailing Service Areas | Everett Lux Detailing',
    description:
      'Everett Lux Detailing serves Everett, Marysville, Bothell, Kirkland, Lynnwood, Mukilteo, Mill Creek, Edmonds, Shoreline, Kenmore, Lake Stevens, and Monroe, WA.',
    canonical: '/service-areas',
  },
  reviews: {
    title: 'Customer Reviews | Everett Lux Detailing',
    description:
      'Read 5-star Google reviews from satisfied customers of Everett Lux Detailing. Real results, real people — mobile car detailing across Everett and Snohomish County.',
    canonical: '/reviews',
  },
  contact: {
    title: 'Contact Us | Get a Free Quote',
    description:
      'Contact Everett Lux Detailing for a free mobile car detailing quote. Call or text (425) 230-0876, or fill out our quick form. We serve Everett, Marysville, and surrounding areas.',
    canonical: '/contact',
  },
  faq: {
    title: 'FAQ | Mobile Car Detailing Questions Answered',
    description:
      'Answers to the most common questions about mobile car detailing — pricing, booking, what to expect, ceramic coating, paint correction, and more from Everett Lux Detailing.',
    canonical: '/faq',
  },
  blog: {
    title: 'Car Detailing Tips & Blog | Everett Lux Detailing',
    description:
      'Car care tips, detailing guides, and local advice from the pros at Everett Lux Detailing. Learn how to protect your vehicle\'s paint, interior, and value.',
    canonical: '/blog',
  },
}

export default SEO
