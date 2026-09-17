import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/realisations/data";

type FeaturedProjectProps = {
  project: Project;
};

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  return (
    <section className="overflow-hidden bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ─────────────────────────────
            INTRO
        ───────────────────────────── */}

        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-3">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#9f7b43]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Projet sélectionné
              </p>
            </div>

            <p className="mt-5 font-serif text-xl italic text-[#6d6c66]">
              {project.city}
            </p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <h2 className="font-serif text-5xl leading-[0.96] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Le travail se révèle
              <br />

              <span className="italic text-[#9f7b43]">
                dans l&apos;ensemble.
              </span>
            </h2>
          </div>
        </div>

        {/* ─────────────────────────────
            FEATURED IMAGE
        ───────────────────────────── */}

        <Link
          href={`/realisations/${project.slug}`}
          aria-label={`Découvrir le projet ${project.title}`}
          className="group mt-16 block md:mt-24"
        >
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[16/9]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/[0.04] transition-colors duration-700 group-hover:bg-transparent" />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* CTA image */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
              <div className="flex items-center overflow-hidden bg-[#f0ede5] text-[#111719] transition-colors duration-500 group-hover:bg-[#c9a66b]">
                <span className="hidden px-5 text-[10px] font-semibold uppercase tracking-[0.18em] sm:block">
                  Voir le projet
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center border-l border-black/10 text-lg transition-transform duration-500 group-hover:translate-x-0.5 md:h-16 md:w-16"
                >
                  ↗
                </span>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────
              PROJECT INFORMATIONS
          ───────────────────────────── */}

          <div className="mt-8 grid gap-8 border-b border-black/10 pb-10 md:grid-cols-12 md:pb-12">
            <div className="md:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9f7b43]">
                {project.category} · {project.city}
              </p>

              <h3 className="mt-4 font-serif text-4xl leading-none tracking-[-0.02em] sm:text-5xl">
                {project.shortTitle}
              </h3>
            </div>

            <div className="md:col-span-4 md:col-start-9 md:self-end">
              <p className="text-sm leading-7 text-[#62635d]">
                {project.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9f7b43]">
                Découvrir

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}