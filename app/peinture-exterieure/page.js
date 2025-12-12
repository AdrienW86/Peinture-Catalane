import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Peinture extérieure à Perpignan | Façades, boiseries & protections",
  description:
    "Peintre extérieur à Perpignan : ravalement de façade, peinture extérieure, boiseries, ferronneries, protections et rénovation complète. Travaux soignés et durables dans tout le 66.",
};

export default function page() {

  const slides = [
    { image: '/exterieur.png', alt: 'Peinture de façade' },
    { image: '/exterieur2.png', alt: 'Travaux de peinture extérieure' },
    { image: '/outside.png', alt: 'Rénovation de façade' },
  ];

  const description = `
  Peinture Catalane est spécialisée dans la peinture extérieure à Perpignan et dans l'ensemble 
  des Pyrénées-Orientales (66). Nous intervenons pour la mise en peinture de façades, 
  boiseries, portails, ferronneries, volets, murets, corniches et tous les éléments extérieurs 
  nécessitant protection et rénovation.

  Nos équipes professionnelles assurent une préparation complète des surfaces avant la mise en 
  peinture : nettoyage, décapage, grattage des anciennes couches, traitement anti-mousse, 
  rebouchage des fissures, application d'une sous-couche adaptée et finitions longue durée. 
  Chaque étape garantit une adhérence parfaite et une protection durable contre les intempéries, 
  les UV et l'humidité.

  Nous utilisons des peintures professionnelles spécialement conçues pour l'extérieur : 
  peintures minérales, acryliques, hydrofuges, microporeuses ou étanches selon le type de 
  support. Résultat : une façade éclatante, protégée et durable pendant de nombreuses années.

  Faire appel à Peinture Catalane pour vos travaux extérieurs, c’est choisir une entreprise 
  locale reconnue pour son sérieux, sa rigueur et la qualité de ses finitions. Nous vous 
  accompagnons également dans le choix des couleurs, des textures et des finitions les plus 
  adaptées à votre habitation.

  Pour vos projets de peinture extérieure à Perpignan, Canet, Saint-Estève, Cabestany, 
  Bompas, Argelès ou partout dans les Pyrénées-Orientales, Peinture Catalane est votre 
  spécialiste de confiance.
`;

  return (
    <>
      <SectionBanner
        title="Peinture extérieure à Perpignan"
        subtitle="Façades, boiseries et protections longue durée"
        backgroundImage="/outside.png"
      />
      <Menu
        title="Peinture extérieure"
        description={description}
        slides={slides}
        phoneNumber="0662125611"
        bookingLink="/contact"
      />
    </>
  )
}

