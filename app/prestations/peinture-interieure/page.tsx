import type { Metadata } from "next";

import ServiceHero from "@/components/prestations/ServiceHero";
import ServiceIntro from "@/components/prestations/ServiceIntro";
import ServiceEditorialImage from "@/components/prestations/ServiceEditorialImage";
import ServiceApplications from "@/components/prestations/ServiceApplications";
import ServiceProcess from "@/components/prestations/ServiceProcess";
import ServiceLocalCTA from "@/components/prestations/ServiceLocalCTA";
import ServiceFAQ from "@/components/prestations/ServiceFAQ";
import ServiceNavigation from "@/components/prestations/ServiceNavigation";
import CTA from "@/components/CTA";

import { applications, steps, faqs } from "./data";

export const metadata: Metadata = {
  title: "Peinture intérieure à Perpignan",
  description:
    "Peinture intérieure à Perpignan : murs, plafonds, boiseries, préparation des supports et finitions soignées avec Peinture Occitane.",
  alternates: {
    canonical: "/prestations/peinture-interieure",
  },
  openGraph: {
    title: "Peinture intérieure à Perpignan | Peinture Occitane",
    description:
      "Confiez vos travaux de peinture intérieure à Peinture Occitane à Perpignan : préparation des surfaces et finitions soignées.",
    url: "/prestations/peinture-interieure",
  },
};

export default function PeintureInterieurePage() {
  return (
    <main>
      <ServiceHero
        eyebrow="Peinture intérieure · Perpignan"
        title="Peinture intérieure"
        accent="à Perpignan."
        description="Murs, plafonds et boiseries : Peinture Occitane accompagne vos projets de peinture intérieure avec une attention particulière portée à la préparation des supports et aux finitions."
        image="/images/peinture-interieure-hero.jpg"
        imageAlt="Intérieur aux murs soigneusement peints dans une maison contemporaine"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Prestations", href: "/prestations" },
          { label: "Peinture intérieure" },
        ]}
      />

      <ServiceIntro
        eyebrow="Votre intérieur"
        title="Une belle finition commence"
        accent="par un support bien préparé."
        paragraphs={[
          "Repeindre un intérieur ne consiste pas uniquement à changer sa couleur. L’état des surfaces, leur préparation et la qualité de l’application participent directement au rendu final.",
          "Notre approche vise à obtenir des surfaces harmonieuses et des finitions propres, tout en respectant l’architecture et l’ambiance de votre intérieur.",
        ]}
      />

      <ServiceEditorialImage
        src="/images/peinture-interieure-detail.jpg"
        alt="Détail d'un mur intérieur avec une finition mate soignée"
        caption="Préparation · Application · Finitions"
      />

      <ServiceApplications
        eyebrow="Nos interventions"
        title="Chaque surface demande"
        accent="une attention différente."
        items={applications}
      />

      <ServiceProcess
        eyebrow="Notre méthode"
        title="Du support"
        accent="à la finition."
        steps={steps}
      />

      <ServiceLocalCTA
        title="Votre projet de peinture intérieure à Perpignan."
        description="Vous souhaitez rafraîchir une pièce, rénover des surfaces ou repenser les couleurs de votre intérieur ? Présentez-nous votre projet pour échanger sur vos besoins."
      />

      <ServiceFAQ
        title={"Peinture\nintérieure."}
        items={faqs}
      />

      <ServiceNavigation
        links={[
          {
            label: "Peinture extérieure",
            href: "/prestations/peinture-exterieure",
          },
          {
            label: "Ravalement de façade",
            href: "/prestations/ravalement-facade",
          },
        ]}
      />

      <CTA />
    </main>
  );
}