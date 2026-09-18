import type { Metadata } from "next";

import ServiceHero from "@/components/prestations/ServiceHero";
import ServiceFAQ from "@/components/prestations/ServiceFAQ";
import ServiceNavigation from "@/components/prestations/ServiceNavigation";

import ExteriorIntro from "@/components/prestations/exterieur/ExteriorIntro";
import ExteriorGallery from "@/components/prestations/exterieur/ExteriorGallery";
import ExteriorSurfaces from "@/components/prestations/exterieur/ExteriorSurfaces";
import ExteriorProcess from "@/components/prestations/exterieur/ExteriorProcess";
import ExteriorLocalCTA from "@/components/prestations/exterieur/ExteriorLocalCTA";

import CTA from "@/components/CTA";

import { surfaces, steps, faqs } from "./data";

export const metadata: Metadata = {
  title: "Peinture extérieure à Perpignan",
  description:
    "Travaux de peinture extérieure à Perpignan : façades, boiseries et surfaces extérieures avec préparation soignée des supports par Peinture Occitane.",
  alternates: {
    canonical: "/prestations/peinture-exterieure",
  },
  openGraph: {
    title: "Peinture extérieure à Perpignan | Peinture Occitane",
    description:
      "Peinture extérieure et rénovation des surfaces à Perpignan avec Peinture Occitane.",
    url: "/prestations/peinture-exterieure",
  },
};

export default function PeintureExterieurePage() {
  return (
    <main>
      <ServiceHero
        eyebrow="Peinture extérieure · Perpignan"
        title="Peinture extérieure"
        accent="à Perpignan."
        description="Façades, boiseries et surfaces extérieures : Peinture Occitane accompagne vos projets avec une attention particulière portée à l’état des supports, à leur préparation et aux finitions."
        image="/images/peinture-exterieure-hero.jpg"
        imageAlt="Façade claire d'une habitation à l'architecture méditerranéenne"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Prestations", href: "/prestations" },
          { label: "Peinture extérieure" },
        ]}
      />

      <ExteriorIntro />

      <ExteriorGallery />

      <ExteriorSurfaces surfaces={surfaces} />

      <ExteriorProcess steps={steps} />

      <ExteriorLocalCTA />

      <ServiceFAQ
        title={"Peinture\nextérieure."}
        items={faqs}
      />

      <ServiceNavigation
        links={[
          {
            label: "Peinture intérieure",
            href: "/prestations/peinture-interieure",
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