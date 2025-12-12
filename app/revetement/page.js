import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Revêtements spéciaux de toiture à Perpignan | Protection & durabilité",
  description:
    "Application de revêtements spéciaux à Perpignan : résine d’étanchéité, hydrofuge, anti-mousse, traitements protecteurs et solutions longue durée pour toitures. Interventions dans tout le 66.",
};

export default function page() {

  const slides = [
    { image: '/special2.png', alt: 'Revêtements spéciaux toiture' },
    { image: '/special3.png', alt: 'Traitement hydrofuge toiture' },
    { image: '/special.png', alt: 'Résine étanchéité toit' },
  ];

  const description = `
  Couverture Catalane propose l’application de revêtements spéciaux pour améliorer la 
  protection, l’étanchéité et la durabilité de vos toitures dans tout le département des 
  Pyrénées-Orientales (66). Nos solutions professionnelles renforcent votre toit contre 
  les intempéries, la porosité, les infiltrations et le vieillissement prématuré.

  Nous appliquons différents types de revêtements selon les besoins de votre toiture : 
  traitement hydrofuge, résine d’étanchéité, revêtement anti-mousse, film protecteur, 
  peinture technique pour toiture ou solutions microporeuses adaptées à tous les supports.

  Chaque intervention inclut une préparation minutieuse : nettoyage, démoussage, 
  élimination des résidus, vérification de l’état général et application du revêtement 
  dans les meilleures conditions pour garantir une protection optimale et durable.

  Faire appel à Couverture Catalane pour vos revêtements spéciaux, c’est choisir une 
  expertise reconnue et des solutions techniques de haute performance pour préserver 
  votre toiture et prolonger sa durée de vie.
  `;

  return (
    <>
      <SectionBanner
        title="Revêtements spéciaux de toiture à Perpignan"
        subtitle="Protection renforcée et solutions techniques longue durée"
        backgroundImage="/special.png"
      />
      <Menu
        title="Revêtements spéciaux"
        description={description}
        slides={slides}
        phoneNumber="0662125611"
        bookingLink="/contact"
      />
    </>
  )
}
