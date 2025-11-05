'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Revêtement de Sol Béton",
      subtitle: "Béton ciré et décoratif",
      content: "Spécialiste du béton ciré et des revêtements décoratifs. Création de sols modernes et durables pour vos espaces intérieurs et extérieurs.",
      image: "/peinture.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/revetement-beton"
    },
    {
      title: "Revêtement de Sol Industriel",
      subtitle: "Solutions professionnelles",
      content: "Revêtements de sol industriels haute performance. Solutions adaptées aux contraintes techniques et esthétiques de vos locaux professionnels.",
      image: "/maison-work.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/revetement-industriel"
    },
    {
      title: "Revêtement Décoratif",
      subtitle: "Finitions esthétiques",
      content: "Revêtements décoratifs personnalisés. Large gamme de textures, couleurs et finitions pour créer des sols uniques et esthétiques.",
      image: "/plomberie.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/revetement-decoratif"
    },
    {
      title: "Réparation et Rénovation",
      subtitle: "Remise en état professionnelle",
      content: "Réparation et rénovation de revêtements existants. Expertise technique pour redonner vie à vos sols avec des solutions durables.",
      image: "/placo.png",
      gradientFrom: "#6366f1",
      gradientTo: "#8b5cf6",
      href: "/services/reparation-renovation"
    }
  ];



  const contactInfo = {
    address: "62950\nHauts-de-France\nRayon d'intervention : Hauts-de-France",
    phone: "06 21 35 23 75",
    email: "nourmane-62@hotmail.fr",
    mapEmbedUrl: "https://maps.google.com/maps?q=62950,France&t=&z=12&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      <ServicesSection id="services" cards={servicesData} />
      <ProjectGallery id="realisations" config={config.gallery} />
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection config={config.team} />
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de votre projet de revêtement de sol dans le 62950 et les Hauts-de-France"
        contactInfo={contactInfo} 
      />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
