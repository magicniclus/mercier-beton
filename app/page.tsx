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
      title: "Rénovation Intérieure",
      subtitle: "Rénovation complète d'intérieur",
      content: "Travaux de rénovation intérieure professionnels. Transformation complète de vos espaces de vie avec des finitions parfaites (tout sauf électricité et plomberie).",
      image: "/peinture.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/renovation-interieure"
    },
    {
      title: "Ravalement de Façade",
      subtitle: "Ravalement et façades",
      content: "Ravalement de façade et rénovation extérieure. Protection et embellissement de vos façades avec des techniques professionnelles.",
      image: "/maison-work.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/ravalement-facade"
    },
    {
      title: "Finitions et Décoration",
      subtitle: "Finitions et aménagement",
      content: "Finitions décoratives et aménagement d'espaces. Création d'ambiances uniques avec des matériaux de qualité pour sublimer vos intérieurs.",
      image: "/plomberie.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/finitions-decoration"
    }
  ];



  const contactInfo = {
    address: "93260\nÎle-de-France\nRayon d'intervention : Île-de-France",
    phone: "06 22 84 77 04",
    email: "batinove2020@gmail.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=93260,France&t=&z=12&ie=UTF8&iwloc=&output=embed"
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
        subtitle="Parlons de votre projet de rénovation intérieure ou ravalement dans le 93260 et Île-de-France"
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
