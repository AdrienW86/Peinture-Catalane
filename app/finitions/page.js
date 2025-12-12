import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Préparation des supports & finitions à Perpignan | Travail soigné & durable",
  description:
    "Préparation des surfaces, rebouchage, ponçage, enduits, sous-couches et finitions professionnelles. Interventions soignées à Perpignan et dans tout le 66.",
};

export default function page() {

  const slides = [
    { image: '/finition3.png', alt: 'Préparation des surfaces' },
    { image: '/finition2.png', alt: 'Travaux de finitions' },
    { image: '/finition.png', alt: 'Application des sous-couches' },
  ];

  const description = `
  Peinture Catalane réalise tous vos travaux de préparation de supports et de finitions 
  à Perpignan et dans l’ensemble des Pyrénées-Orientales (66). La qualité d’une peinture 
  ou d’un revêtement dépend avant tout d’une préparation soignée et adaptée à chaque 
  surface.

  Nous intervenons sur tous types de supports : murs, plafonds, boiseries, façades, 
  métaux et surfaces délicates. Notre équipe assure un travail complet incluant le 
  rebouchage des fissures, l’application d’enduits, le ponçage fin, la correction des 
  irrégularités et la pose de sous-couches techniques pour garantir une finition parfaite.

  Chaque étape est réalisée avec précision afin d’assurer une excellente adhérence de la 
  peinture et une durabilité optimale. Nous proposons également un large choix de 
  finitions : mates, satinées, brillantes, velours, techniques ou décoratives, adaptées 
  à l’esthétique et aux contraintes de votre projet.

  Faire appel à Peinture Catalane pour la préparation et les finitions, c’est bénéficier 
  d’un travail professionnel, propre et minutieux, garantissant un résultat soigné et 
  durable pour l’ensemble de vos surfaces intérieures ou extérieures.
  `;

  return (
    <>
      <SectionBanner
        title="Préparation des supports & finitions à Perpignan"
        subtitle="Un travail soigné pour un résultat durable et impeccable"
        backgroundImage="/finition.png"
      />
      <Menu
        title="Préparation et finitions"
        description={description}
        slides={slides}
        phoneNumber="0662125611"
        bookingLink="/contact"
      />
    </>
  )
}
