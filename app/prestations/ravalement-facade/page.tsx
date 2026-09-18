import type { Metadata } from "next";

import ServiceHero from "@/components/prestations/ServiceHero";
import ServiceFAQ from "@/components/prestations/ServiceFAQ";
import ServiceNavigation from "@/components/prestations/ServiceNavigation";

import FacadeManifesto from "@/components/prestations/facade/FacadeManifesto";
import FacadeMaterial from "@/components/prestations/facade/FacadeMaterial";
import FacadeAnalysis from "@/components/prestations/facade/FacadeAnalysis";
import FacadeProcess from "@/components/prestations/facade/FacadeProcess";
import FacadeLocalCTA from "@/components/prestations/facade/FacadeLocalCTA";

import CTA from "@/components/CTA";

import { analysisPoints, steps, faqs } from "./data";

export const metadata: Metadata = {
  title: "Ravalement de façade à Perpignan",
  description:
    "Ravalement de façade à Perpignan : préparation, remise en état et finition des façades avec Peinture Occitane.",
  alternates: {
    canonical: "/prestations/ravalement-facade",
  },
  openGraph: {
    title: "Ravalement de façade à Perpignan | Peinture Occitane",
    description:
      "Découvrez l’approche de Peinture Occitane pour vos projets de ravalement de façade à Perpignan.",
    url: "/prestations/ravalement-facade",
  },
};

export default function RavalementFacadePage() {
  return (
    <main>
      <ServiceHero
        eyebrow="Ravalement de façade · Perpignan"
        title="Ravalement"
        accent="de façade."
        description="Peinture Occitane accompagne vos projets de ravalement de façade avec une attention particulière portée à l’état du support, à sa préparation et à la qualité de la finition."
        image="/images/ravalement-facade-hero.jpg"
        imageAlt="Façade aux tons minéraux et à l'architecture méditerranéenne"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Prestations", href: "/prestations" },
          { label: "Ravalement de façade" },
        ]}
      />

      <FacadeManifesto />

      <FacadeMaterial />

      <FacadeAnalysis points={analysisPoints} />

      <FacadeProcess steps={steps} />

      <FacadeLocalCTA />

      <ServiceFAQ
        title={"Ravalement\nde façade."}
        items={faqs}
      />

      <ServiceNavigation
        links={[
          {
            label: "Peinture intérieure",
            href: "/prestations/peinture-interieure",
          },
          {
            label: "Peinture extérieure",
            href: "/prestations/peinture-exterieure",
          },
        ]}
      />

      <CTA />
    </main>
  );
}