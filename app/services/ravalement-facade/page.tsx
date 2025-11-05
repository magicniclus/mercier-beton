'use client';

import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';

export default function RavalementFacadePage() {
  const serviceData = {
    serviceName: "Ravalement de Façade",
    heroImage: "/facade.png",
    heroTitle: "Ravalement de Façade Professionnel en Île-de-France",
    heroSubtitle: "ARCADE BTP, spécialiste du ravalement de façade dans le 93260. Devis gratuit pour redonner vie à vos façades avec des techniques professionnelles.",
    sector: "Bâtiment",
    location: "Île-de-France",
    mainDescription: "ARCADE BTP vous propose ses services de ravalement de façade en Île-de-France. Nous intervenons sur tous types de façades : crépi, enduit, peinture, nettoyage et rénovation complète. Notre expertise garantit une protection durable de vos murs extérieurs tout en améliorant l'esthétique de votre bâtiment. Chaque intervention fait l'objet d'un diagnostic préalable et d'un devis gratuit personnalisé.",
    
    subServices: [
      {
        title: "Nettoyage de Façade",
        description: "Nettoyage haute pression, sablage, décapage. Élimination des salissures, mousses et pollution pour retrouver l'aspect d'origine."
      },
      {
        title: "Réparation et Rebouchage",
        description: "Réparation des fissures, rebouchage des trous. Traitement des désordres avant application des nouveaux revêtements."
      },
      {
        title: "Enduits et Crépis",
        description: "Application d'enduits traditionnels ou modernes. Crépis décoratifs pour personnaliser l'aspect de votre façade."
      },
      {
        title: "Peinture de Façade",
        description: "Peinture acrylique, siloxane ou pliolite. Protection et décoration avec des peintures adaptées aux contraintes extérieures."
      },
      {
        title: "Isolation par l'Extérieur",
        description: "Pose d'isolants thermiques par l'extérieur. Amélioration des performances énergétiques avec finition décorative."
      },
      {
        title: "Étanchéité et Protection",
        description: "Traitement hydrofuge, étanchéité des joints. Protection durable contre les infiltrations et intempéries."
      }
    ],
    
    advantages: [
      "Devis gratuit et personnalisé",
      "Diagnostic façade complet inclus",
      "Matériaux haute qualité résistants",
      "Techniques professionnelles éprouvées",
      "Garantie décennale sur les travaux",
      "Respect des normes et réglementations",
      "Finitions soignées et durables",
      "Conseil en choix de matériaux",
      "Tarification transparente",
      "Estimation gratuite et sans engagement"
    ],
    
    serviceArea: [
      "93260 - Les Lilas",
      "Île-de-France",
      "Seine-Saint-Denis",
      "Paris et petite couronne",
      "Pantin, Bagnolet",
      "Romainville, Noisy-le-Sec",
      "Montreuil, Bobigny"
    ],
    
    contactInfo: {
      phone: "06 22 84 77 04",
      email: "batinove2020@gmail.com",
      address: "93260, Île-de-France"
    }
  };

  return <ServicePage {...serviceData} />;
}

// Métadonnées pour le SEO
export const metadata = generateMetadata(
  "Ravalement Façade Île-de-France - Devis Gratuit",
  "ARCADE BTP, spécialiste ravalement façade dans le 93260 et Île-de-France. Devis gratuit. Nettoyage, enduits, peinture façade professionnelle.",
  "/facade.png",
  "/services/ravalement-facade"
);
