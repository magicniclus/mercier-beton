'use client';

import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';

export default function RenovationInterieurePage() {
  const serviceData = {
    serviceName: "Rénovation Intérieure",
    heroImage: "/macon.png",
    heroTitle: "Rénovation Intérieure Complète en Île-de-France",
    heroSubtitle: "ARCADE BTP, votre expert en rénovation intérieure dans le 93260. Devis gratuit et personnalisé pour tous vos projets de rénovation.",
    sector: "Bâtiment",
    location: "Île-de-France",
    mainDescription: "ARCADE BTP vous accompagne dans tous vos projets de rénovation intérieure en Île-de-France. Spécialisés dans la transformation complète d'espaces résidentiels et commerciaux, nous intervenons sur tous les corps d'état (sauf électricité et plomberie). Notre expertise couvre la démolition, les cloisons, les sols, la peinture, l'isolation et les finitions. Chaque projet bénéficie d'un suivi personnalisé et d'un devis gratuit détaillé.",
    
    subServices: [
      {
        title: "Cloisons et Aménagement",
        description: "Création, modification et suppression de cloisons. Aménagement d'espaces sur mesure pour optimiser votre intérieur."
      },
      {
        title: "Revêtements de Sol",
        description: "Pose de parquet, carrelage, vinyle, moquette. Ragréage et préparation des supports pour un résultat parfait."
      },
      {
        title: "Peinture et Finitions",
        description: "Peinture murale, plafonds, boiseries. Enduits décoratifs et finitions haut de gamme pour sublimer vos espaces."
      },
      {
        title: "Isolation Thermique",
        description: "Isolation des murs, cloisons et plafonds. Amélioration du confort thermique et acoustique de votre logement."
      },
      {
        title: "Démolition et Gros Œuvre",
        description: "Démolition de cloisons, ouverture de murs porteurs (avec étude). Préparation des espaces pour votre nouveau projet."
      },
      {
        title: "Aménagement sur Mesure",
        description: "Création de rangements, bibliothèques, dressings. Aménagement personnalisé selon vos besoins et contraintes."
      }
    ],
    
    advantages: [
      "Devis gratuit et personnalisé",
      "Projet clé en main de A à Z",
      "Matériaux de qualité sélectionnés",
      "Respect strict des délais convenus",
      "Garantie sur tous nos travaux",
      "Conseil personnalisé et expertise",
      "Finitions soignées et durables",
      "Suivi post-travaux inclus",
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
  "Rénovation Intérieure Île-de-France - Devis Gratuit",
  "ARCADE BTP, expert en rénovation intérieure dans le 93260 et Île-de-France. Devis gratuit et personnalisé. Travaux clé en main, finitions soignées.",
  "/macon.png",
  "/services/renovation-interieure"
);
