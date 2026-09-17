import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/realisations/data";

type ProjectsGridProps = {
  projects: Project[];
  showHeading?: boolean;
  startIndex?: number;
};

export default function ProjectsGrid({
  projects,
  showHeading = true,
  startIndex = 0,
}: ProjectsGridProps) {
  return (
    <section
      className={`overflow-hidden bg-[#0b0f10] text-[#f3f0e9] ${
        showHeading
          ? "py-24 md:py-32 lg:py-40"
          : "pb-24 pt-8 md:pb-32 md:pt-12 lg:pb-40 lg:pt-16"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {showHeading && (
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#c9a66b]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                  Sélection de projets
                </p>
              </div>

              <h2 className="mt-7 font-serif text-5xl leading-[0.94] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Chaque lieu
                <br />

                <span className="italic text-[#dfbf87]">
                  a son caractère.
                </span>
              </h2>
            </div>
          </div>
        )}

        <div
          className={
            showHeading
              ? "mt-20 space-y-28 md:mt-28 md:space-y-40"
              : "space-y-28 md:space-y-40"
          }
        >
          {projects.map((project, index) => {
            const globalIndex = startIndex + index;
            const even = globalIndex % 2 === 0;

            const portrait = globalIndex % 3 === 0;

            return (
              <article
                key={project.slug}
                className="grid gap-8 md:grid-cols-12 md:items-end"
              >
                {/* IMAGE */}

                <Link
                  href={`/realisations/${project.slug}`}
                  aria-label={`Voir le projet ${project.title}`}
                  className={`group block ${
                    even
                      ? "md:col-span-7"
                      : "md:col-span-7 md:col-start-6"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      portrait
                        ? "aspect-[4/5]"
                        : "aspect-[5/4]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 65vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent" />
                  </div>
                </Link>

                {/* CONTENT */}

                <div
                  className={
                    even
                      ? "md:col-span-4 md:col-start-9 md:pb-8"
                      : "md:col-span-4 md:col-start-1 md:row-start-1 md:pb-8"
                  }
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
                    {project.category}
                  </p>

                  <h3 className="mt-5 font-serif text-4xl leading-[1] md:text-5xl">
                    {project.shortTitle}
                  </h3>

                  <p className="mt-4 font-serif text-lg italic text-[#dfbf87]">
                    {project.city}
                  </p>

                  <p className="mt-6 max-w-sm text-sm leading-7 text-[#94958f]">
                    {project.excerpt}
                  </p>

                  <Link
                    href={`/realisations/${project.slug}`}
                    aria-label={`Découvrir ${project.title}`}
                    className="group/link mt-8 inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.18em] text-[#f3f0e9] transition-colors hover:text-[#c9a66b]"
                  >
                    Voir le projet

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}