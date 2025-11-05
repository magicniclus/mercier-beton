import ServicePage from '@/components/ServicePage';
import { generateMetadata } from '@/lib/seo-config';

export default function CarrelagePage() {
  const serviceData = {
    serviceName: "Carrelage",
    heroImage: "/facade.png",
    heroTitle: "Pose de Carrelage Professionnel en Île-de-France",
    heroSubtitle: "ARCADE BTP, expert en pose de carrelage dans le 93260. Devis gratuit pour tous vos projets carrelage sol et mural avec finitions parfaites.",
    sector: "Bâtiment",
    location: "Île-de-France",
    mainDescription: "ARCADE BTP vous propose ses services de pose de carrelage en Île-de-France. Spécialisés dans la pose de carrelage sol et mural, nous intervenons sur tous types de supports et matériaux. Notre expertise couvre le carrelage intérieur et extérieur, la faïence, la mosaïque et les pierres naturelles. Chaque projet bénéficie d'une étude technique préalable et d'un devis gratuit personnalisé.",
    
    subServices: [
      {
        title: "Carrelage Sol Intérieur",
        description: "Pose de carrelage sol toutes dimensions. Grès cérame, pierre naturelle, carreaux de ciment pour tous vos espaces intérieurs."
      },
      {
        title: "Faïence Murale",
        description: "Pose de faïence salle de bain, cuisine. Carrelage mural décoratif avec joints parfaits et finitions soignées."
      },
      {
        title: "Mosaïque Décorative",
        description: "Pose de mosaïque verre, pierre, métal. Créations décoratives personnalisées pour sublimer vos espaces."
      },
      {
        title: "Pierre Naturelle",
        description: "Pose de pierre naturelle, marbre, travertin. Matériaux nobles pour des réalisations d'exception."
      },
      {
        title: "Grès Cérame Grand Format",
        description: "Pose de carrelage grand format, effet béton, bois. Techniques spécialisées pour les formats XXL."
      },
      {
        title: "Étanchéité et Joints",
        description: "Étanchéité sous carrelage, joints silicone. Protection durable contre l'humidité et les infiltrations."
      }
    ],
    
    advantages: [
      "Devis gratuit et personnalisé",
      "Pose professionnelle garantie",
      "Matériaux haut de gamme sélectionnés",
      "Étanchéité parfaite assurée",
      "Finitions impeccables et durables",
      "Conseil design et technique",
      "Respect strict des délais",
      "Garantie sur tous nos travaux",
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
  "Carrelage Île-de-France - Devis Gratuit",
  "ARCADE BTP, expert pose carrelage dans le 93260 et Île-de-France. Devis gratuit. Carrelage sol, faïence salle de bain, pose professionnelle.",
  "/facade.png",
  "/services/carrelage"
);
