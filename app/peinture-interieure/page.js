import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Peinture intérieure à Perpignan | Rafraîchissement & rénovation",
  description:
    "Peinture intérieure à Perpignan : murs, plafonds, finitions haut de gamme, rénovation complète et décoration personnalisée. Travail soigné, rapide et professionnel dans tout le 66.",
};

export default function page() {

  const slides = [
    { image: '/interieur.png', alt: 'Peinture intérieure murs' },
    { image: '/interieur2.png', alt: 'Travaux de peinture salon' },
    { image: '/inside.png', alt: 'Rénovation intérieure peinture' },
  ];

  const description = `
  Peinture Catalane vous accompagne pour tous vos travaux de peinture intérieure 
  à Perpignan et dans les Pyrénées-Orientales. Nous réalisons la peinture de vos murs, 
  plafonds, boiseries, escaliers, cuisines, salons et chambres avec un niveau de finition 
  irréprochable et des produits de haute qualité.

  Notre équipe intervient aussi bien dans le cadre d’une rénovation que pour un simple 
  rafraîchissement. Avant chaque application, nous assurons une préparation 
  professionnelle des surfaces : rebouchage, ponçage, traitement des fissures et application 
  d’une sous-couche afin de garantir un résultat durable, lisse et harmonieux.

  Grâce à notre savoir-faire, nous travaillons avec précision, propreté et rapidité, 
  tout en respectant votre intérieur et vos meubles. Nous proposons également des conseils 
  personnalisés sur le choix des couleurs, des textures et des finitions pour créer un 
  espace qui vous ressemble : mat, satiné, velouté, laqué, peinture décorative ou 
  effets personnalisés.

  Faire appel à Couverture Catalane pour votre peinture intérieure, c’est faire le choix 
  d’un travail soigné, durable et élégant, réalisé par des professionnels expérimentés 
  reconnus dans tout le 66.

  Pour vos projets à Perpignan, Saint-Estève, Cabestany, Toulouges, Canohès ou dans tout 
  le département, nous sommes votre partenaire de confiance pour sublimer votre intérieur.
`;

  return (
    <>
      <SectionBanner
        title="Peinture intérieure à Perpignan"
        subtitle="Rafraîchissement et rénovation avec finitions professionnelles"
        backgroundImage="/inside.png"
      />
      <Menu
        title="Peinture intérieure"
        description={description}
        slides={slides}
        phoneNumber="0662125611"
        bookingLink="/contact"
      />
    </>
  )
}

