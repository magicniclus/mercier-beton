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
  title: "MERCIER BÉTON - Entreprise de Revêtement de Sol dans les Hauts-de-France",
  description: "MERCIER BÉTON, entrepreneur du bâtiment spécialisé en revêtement de sol. Devis gratuit dans le 62950 et les Hauts-de-France.",
  keywords: [
    "revêtement de sol Hauts-de-France",
    "béton ciré 62950",
    "entrepreneur bâtiment Hauts-de-France",
    "revêtement sol 62950",
    "travaux revêtement sol",
    "béton décoratif",
    "revêtement industriel",
    "sol béton",
    "devis gratuit",
    "MERCIER BÉTON",
    "Norman Lebreton",
    "revêtement Hauts-de-France",
    "entrepreneur bâtiment",
    "revêtement professionnel",
    "travaux bâtiment 62950"
  ],
  author: "Norman Lebreton",
  siteUrl: "https://mercier-beton.fr",
  siteName: "MERCIER BÉTON - Revêtement de Sol",
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
  "name": "MERCIER BÉTON",
  "legalName": "Mercier Béton - Entrepreneur du bâtiment",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Norman Lebreton"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "62950",
    "postalCode": "62950",
    "addressRegion": "Hauts-de-France",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33621352375",
    "contactType": "customer service",
    "email": "nourmane-62@hotmail.fr",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Hauts-de-France"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Pas-de-Calais"
    },
    {
      "@type": "City",
      "name": "62950"
    }
  ],
  "serviceType": [
    "Revêtement de sol béton",
    "Béton ciré", 
    "Revêtement industriel",
    "Revêtement décoratif",
    "Réparation et rénovation"
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
  "serviceType": "Floor Coating Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de revêtement de sol",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Revêtement de sol béton",
          "description": "Spécialiste du béton ciré et des revêtements décoratifs pour espaces intérieurs et extérieurs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Revêtement industriel",
          "description": "Revêtements de sol industriels haute performance pour locaux professionnels"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Revêtement décoratif",
          "description": "Revêtements décoratifs personnalisés avec large gamme de textures et couleurs"
        }
      }
    ]
  }
};
