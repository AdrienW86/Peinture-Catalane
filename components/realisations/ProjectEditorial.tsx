import Image from "next/image";
import type { Project } from "@/app/realisations/data";

type ProjectEditorialProps = {
  projects: Project[];
};

export default function ProjectEditorial({
  projects,
}: ProjectEditorialProps) {
  /*
   * On sélectionne volontairement des détails issus de projets différents
   * pour éviter que la composition éditoriale soit dominée par un seul
   * chantier.
   *
   * CONTENU DE DÉMONSTRATION :
   * cette sélection pourra être adaptée lorsque les vrais projets
   * remplaceront les projets fictifs.
   */

  const preferredSlugs = [
    "peinture-interieure-villa-perpignan",
    "ravalement-facade-thuir",
    "peinture-appartement-perpignan",
  ];

  const images = preferredSlugs
    .map((slug) => {
      const project = projects.find(
        (project) => project.slug === slug
      );

      if (!project || project.gallery.length === 0) {
        return null;
      }

      return {
        ...project.gallery[0],
        city: project.city,
        category: project.category,
      };
    })
    .filter(
      (
        image
      ): image is {
        src: string;
        alt: string;
        city: string;
        category: Project["category"];
      } => image !== null
    );

  if (images.length < 3) {
    return null;
  }

  return (
    <section className="overflow-hidden bg-[#e4e0d7] py-24 text-[#111719] md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ─────────────────────────────
            INTRODUCTION
        ───────────────────────────── */}

        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#9f7b43]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Le détail
              </p>
            </div>

            <h2 className="mt-7 font-serif text-5xl leading-[0.94] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              La qualité se lit
              <br />

              <span className="italic text-[#9f7b43]">
                aussi de près.
              </span>
            </h2>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <p className="text-sm leading-7 text-[#62635d]">
              Une arête, une matière, une transition de couleur ou la
              rencontre entre deux surfaces participent à la perception
              d&apos;un ensemble.
            </p>
          </div>
        </div>

        {/* ─────────────────────────────
            COMPOSITION ÉDITORIALE
        ───────────────────────────── */}

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-12 md:gap-7">
          {/* IMAGE 01 — VERTICALE */}

          <figure className="md:col-span-5 md:pt-28">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <figcaption className="mt-5 flex items-center justify-between gap-5 border-t border-black/10 pt-4">
              <p className="font-serif text-lg italic text-[#6d6c66]">
                {images[0].city}
              </p>

              <p className="text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8a8983]">
                {images[0].category}
              </p>
            </figcaption>
          </figure>

          {/* COLONNE DROITE */}

          <div className="md:col-span-7">
            {/* IMAGE 02 — PRINCIPALE */}

            <figure>
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              <figcaption className="mt-5 flex items-center justify-between gap-5 border-t border-black/10 pt-4">
                <p className="font-serif text-lg italic text-[#6d6c66]">
                  {images[1].city}
                </p>

                <p className="text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8a8983]">
                  {images[1].category}
                </p>
              </figcaption>
            </figure>

            {/* IMAGE 03 — PETIT FORMAT */}

            <div className="mt-12 grid md:mt-16 md:grid-cols-7">
              <figure className="md:col-span-4 md:col-start-3">
                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10]">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <figcaption className="mt-5 flex items-center justify-between gap-4 border-t border-black/10 pt-4">
                  <p className="font-serif text-lg italic text-[#6d6c66]">
                    {images[2].city}
                  </p>

                  <p className="text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8a8983]">
                    {images[2].category}
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}