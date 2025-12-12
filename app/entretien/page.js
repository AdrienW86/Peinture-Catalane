import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Rénovation et entretien à Perpignan | Rafraîchissement et remise en état",
  description:
    "Rénovation complète, entretien des surfaces, reprise de peintures, traitement des matériaux et remise à neuf. Interventions soignées et durables dans tout le 66.",
};

export default function page() {

  const slides = [
    { image: '/entretien.png', alt: 'Travaux de rénovation' },
    { image: '/entretien3.png', alt: 'Rafraîchissement des surfaces' },
    { image: '/renovation.png', alt: 'Entretien des peintures' },
  ];

  const description = `
  Peinture Catalane prend en charge tous vos travaux de rénovation et d’entretien 
  à Perpignan et dans l’ensemble des Pyrénées-Orientales (66). Avec le temps, les murs, 
  boiseries, plafonds et façades s’abîment : fissures, décolorations, traces d’humidité, 
  peinture qui s'écaille… Nous intervenons pour redonner à vos surfaces leur éclat et 
  assurer une protection durable.

  Nous réalisons le rafraîchissement complet des pièces, la reprise des peintures anciennes, 
  la rénovation des supports abîmés, le traitement des matériaux fragilisés, la remise à neuf 
  des boiseries et la protection des surfaces exposées. Chaque intervention est adaptée à 
  l'état des supports et aux besoins de votre habitation.

  Notre équipe assure un entretien soigné et durable : retouches de peinture, traitement 
  anti-humidité, réparation des zones endommagées, révision régulière des boiseries et 
  vérification de la tenue des revêtements. L'objectif : préserver vos surfaces sur le 
  long terme et maintenir un intérieur comme un extérieur propre, sain et esthétique.

  Faire appel à Peinture Catalane pour la rénovation et l’entretien, c’est profiter d’un 
  service professionnel, minutieux et durable, idéal pour prolonger la vie de vos surfaces 
  peintes ou décoratives.
  `;

  return (
    <>
      <SectionBanner
        title="Rénovation et entretien à Perpignan"
        subtitle="Préserver, réparer et redonner vie à vos surfaces"
        backgroundImage="/renovation.png"
      />
      <Menu
        title="Rénovation et entretien"
        description={description}
        slides={slides}
        phoneNumber="0662125611"
        bookingLink="/contact"
      />
    </>
  )
}
