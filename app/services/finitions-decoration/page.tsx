import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';

export default function FinitionsDecorationPage() {
  const serviceData = {
    serviceName: "Finitions et Décoration",
    heroImage: "/plomberie.png",
    heroTitle: "Finitions et Décoration Intérieure en Île-de-France",
    heroSubtitle: "ARCADE BTP, expert en finitions décoratives dans le 93260. Devis gratuit pour sublimer vos intérieurs avec des finitions haut de gamme.",
    sector: "Bâtiment",
    location: "Île-de-France",
    mainDescription: "ARCADE BTP vous accompagne dans la réalisation de vos finitions décoratives et aménagements intérieurs en Île-de-France. Nous créons des ambiances uniques avec des matériaux de qualité et un savoir-faire artisanal. De la peinture décorative aux aménagements sur mesure, nous donnons vie à vos projets avec un souci constant du détail et de la perfection.",
    
    subServices: [
      {
        title: "Peinture Décorative",
        description: "Peintures à effets, patines, enduits décoratifs. Techniques artistiques pour personnaliser vos murs et créer des ambiances uniques."
      },
      {
        title: "Pose de Papier Peint",
        description: "Papier peint traditionnel, intissé, vinyle. Pose soignée avec raccords parfaits pour un rendu professionnel."
      },
      {
        title: "Moulures et Corniches",
        description: "Pose de moulures décoratives, corniches, rosaces. Éléments architecturaux pour valoriser vos espaces."
      },
      {
        title: "Aménagements sur Mesure",
        description: "Bibliothèques, dressings, rangements intégrés. Créations personnalisées adaptées à vos besoins et contraintes."
      },
      {
        title: "Parquets et Sols Décoratifs",
        description: "Pose de parquets massifs, contrecollés, stratifiés. Finitions et traitements pour sublimer vos sols."
      },
      {
        title: "Éclairage Décoratif",
        description: "Spots encastrés, bandeaux LED, éclairage d'ambiance. Mise en valeur de vos espaces par la lumière."
      }
    ],
    
    advantages: [
      "Devis gratuit et personnalisé",
      "Conseil déco et choix matériaux",
      "Matériaux haut de gamme sélectionnés",
      "Finitions soignées et durables",
      "Savoir-faire artisanal reconnu",
      "Respect des délais convenus",
      "Garantie sur tous nos travaux",
      "Suivi personnalisé du projet",
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
  "Finitions Décoration Île-de-France - Devis Gratuit",
  "ARCADE BTP, expert finitions décoratives dans le 93260 et Île-de-France. Devis gratuit. Peinture décorative, aménagements sur mesure.",
  "/plomberie.png",
  "/services/finitions-decoration"
);
