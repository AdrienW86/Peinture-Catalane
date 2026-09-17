import type { Metadata } from "next";

import ProjectsHero from "@/components/realisations/ProjectsHero";
import FeaturedProject from "@/components/realisations/FeaturedProject";
import ProjectsGrid from "@/components/realisations/ProjectsGrid";
import ProjectEditorial from "@/components/realisations/ProjectEditorial";
import ProjectsClosing from "@/components/realisations/ProjectsClosing";

import { projects } from "./data";

export const metadata: Metadata = {
  title: "Réalisations peinture et rénovation à Perpignan",
  description:
    "Découvrez une sélection de projets de peinture intérieure, extérieure, rénovation et façade de Peinture Catalane à Perpignan et dans les Pyrénées-Orientales.",

  alternates: {
    canonical: "/realisations",
  },

  openGraph: {
    title: "Réalisations peinture et rénovation à Perpignan",
    description:
      "Découvrez une sélection de projets de peinture intérieure, extérieure, rénovation et façade à Perpignan et dans les Pyrénées-Orientales.",
    url: "/realisations",
  },
};

export default function RealisationsPage() {
  const featuredProject =
    projects.find((project) => project.featured) ?? projects[0];

  const remainingProjects = projects.filter(
    (project) => project.slug !== featuredProject.slug
  );

  const firstProjects = remainingProjects.slice(0, 2);
  const lastProjects = remainingProjects.slice(2);

  return (
    <main>
      <ProjectsHero />

      <FeaturedProject project={featuredProject} />

      <ProjectsGrid projects={firstProjects} />

      <ProjectEditorial projects={projects} />

      <ProjectsGrid
        projects={lastProjects}
        showHeading={false}
        startIndex={2}
      />

      <ProjectsClosing />
    </main>
  );
}