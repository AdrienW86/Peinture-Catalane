import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0b0f10] text-[#f3f0e9]">
      {/* ─────────────────────────────
          BACKGROUND
      ───────────────────────────── */}

      <div className="absolute inset-0">
        <Image
          src="/images/realisations/hero-realisations.jpg"
          alt="Intérieur aux tonalités minérales illustrant les réalisations de Peinture Occitane"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Voile général très léger */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Lisibilité du contenu à gauche */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f10]/80 via-[#0b0f10]/35 to-transparent" />

        {/* Transition vers la section suivante */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0b0f10]/80 to-transparent" />
      </div>

      {/* ─────────────────────────────
          CONTENT
      ───────────────────────────── */}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-6 pb-20 pt-40 md:pb-28 lg:px-10">
        <div className="w-full">
          <Breadcrumb
            className="mb-8"
            items={[
              {
                label: "Accueil",
                href: "/",
              },
              {
                label: "Réalisations",
              },
            ]}
          />

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            {/* TITRE */}

            <div className="md:col-span-9">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#c9a66b]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#dfbf87]">
                  Peinture Occitane · Portfolio
                </p>
              </div>

              <h1 className="max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[110px]">
                Des espaces
                <br />

                <span className="italic text-[#dfbf87]">
                  transformés.
                </span>
              </h1>
            </div>

            {/* TEXTE */}

            <div className="md:col-span-3 md:pb-2">
              <div className="border-l border-white/15 pl-5 md:border-l-0 md:pl-0">
                <p className="max-w-sm text-sm leading-7 text-[#d0cec7]">
                  Intérieurs, façades et rénovations : découvrez une
                  sélection de projets autour de Perpignan et dans les
                  Pyrénées-Orientales.
                </p>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────
              FOOTNOTE
          ───────────────────────────── */}

          <div className="mt-14 flex items-center gap-4 md:mt-20">
            <span className="h-px w-12 bg-white/20" />

            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#a7a69f]">
              Peinture · Rénovation · Façade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}