import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Décoration intérieure à Perpignan | Peinture, ambiance & harmonisation",
  description:
    "Décorateur intérieur à Perpignan : mise en peinture décorative, harmonisation des espaces, choix des couleurs, effets muraux et relooking complet. Création d’ambiances modernes et chaleureuses dans tout le 66.",
};

export default function page() {

  const slides = [
    { image: '/decoration3.png', alt: 'Décoration intérieure moderne' },
    { image: '/decoration2.png', alt: 'Ambiance chaleureuse et moderne' },
    { image: '/decoration.png', alt: 'Effets décoratifs muraux' },
  ];

  const description = `
  Peinture Catalane propose un service complet de décoration intérieure à Perpignan
  et dans l’ensemble du département des Pyrénées-Orientales (66). Nous vous aidons à créer
  une ambiance harmonieuse, moderne et chaleureuse en repensant vos murs, vos couleurs
  et vos espaces de vie.

  Notre équipe vous accompagne dans le choix des teintes, des matières, des finitions et des
  effets décoratifs afin de donner du caractère à chaque pièce : salon, chambre, cuisine,
  pièces de vie ou espaces professionnels.

  Nous réalisons tous les types de peintures décoratives : effets texturés, murs à la chaux,
  béton ciré, patines, enduits décoratifs, teintes mates, satinées ou velours. Chaque projet
  est réalisé avec précision pour sublimer votre intérieur et lui donner une identité unique.

  Avant chaque intervention, nous effectuons une préparation complète des supports pour
  garantir une tenue durable : nettoyage, rebouchage, ponçage, application de sous-couches
  adaptées et finitions haut de gamme.

  Confier votre décoration intérieure à Peinture Catalane, c’est choisir une entreprise locale
  reconnue pour son savoir-faire, sa précision et son sens du détail. Nous créons pour vous
  un intérieur élégant, cohérent et durable.

  Pour vos projets de décoration intérieure à Perpignan, Cabestany, Canet, Saint-Estève,
  Toulouges, Le Soler ou partout dans les Pyrénées-Orientales, Peinture Catalane est votre
  spécialiste de confiance.
`;

  return (
    <>
      <SectionBanner
        title="Décoration intérieure à Perpignan"
        subtitle="Création d’ambiances modernes et harmonieuses"
        backgroundImage="/decoration.png"
      />
      <Menu
        title="Décoration intérieure"
        description={description}
        slides={slides}
        phoneNumber="0662125611"
        bookingLink="/contact"
      />
    </>
  )
}
