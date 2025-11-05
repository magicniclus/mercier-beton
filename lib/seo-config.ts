import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "ARCADE BTP - Entreprise de Rénovation en Île-de-France",
  description: "ARCADE BTP, entrepreneur du bâtiment spécialisé en rénovation intérieure et ravalement. Devis gratuit dans le 93260 et Île-de-France.",
  keywords: [
    "rénovation intérieure Île-de-France",
    "ravalement façade 93260",
    "entrepreneur bâtiment Île-de-France",
    "rénovation maison 93260",
    "travaux rénovation intérieure",
    "ravalement professionnel",
    "finitions décoration",
    "aménagement intérieur",
    "devis gratuit",
    "ARCADE BTP",
    "Seif",
    "rénovation Île-de-France",
    "entrepreneur bâtiment",
    "SASU rénovation",
    "travaux bâtiment 93260"
  ],
  author: "Seif",
  siteUrl: "https://arcadebtp.fr",
  siteName: "ARCADE BTP - Rénovation",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@adbetton"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "ARCADE BTP",
  "legalName": "ARCADE BTP - Entrepreneur du bâtiment",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Seif"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "93260",
    "postalCode": "93260",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33622847704",
    "contactType": "customer service",
    "email": "batinove2020@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Île-de-France"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Seine-Saint-Denis"
    },
    {
      "@type": "City",
      "name": "93260"
    }
  ],
  "serviceType": [
    "Rénovation intérieure",
    "Ravalement de façade", 
    "Finitions et décoration",
    "Aménagement intérieur",
    "Travaux de rénovation"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Renovation Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de rénovation",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rénovation intérieure",
          "description": "Travaux de rénovation intérieure professionnels avec finitions parfaites (tout sauf électricité et plomberie)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Ravalement de façade",
          "description": "Ravalement de façade et rénovation extérieure avec techniques professionnelles"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Finitions et décoration",
          "description": "Finitions décoratives et aménagement d'espaces avec matériaux de qualité"
        }
      }
    ]
  }
};
