import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Rénovation d’une pièce de vie",
    category: "Peinture intérieure",
    location: "Perpignan & alentours",
    image: "/images/realisation-interieur.jpg",
    href: "/realisations",
  },
  {
    title: "Mise en valeur d’un intérieur",
    category: "Finitions & décoration",
    location: "Pyrénées-Orientales",
    image: "/images/realisation-detail.jpg",
    href: "/realisations",
  },
  {
    title: "Rénovation d’une façade",
    category: "Peinture extérieure",
    location: "Perpignan & alentours",
    image: "/images/realisation-facade.jpg",
    href: "/realisations",
  },
];

export default function Realisations() {
  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-[#0b0f10] py-24 text-[#f3f0e9] md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* En-tête */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a66b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Nos réalisations
              </p>
            </div>

            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
              Des espaces transformés,
              <br />
              <span className="italic text-[#dfbf87]">
                pensés dans le détail.
              </span>
            </h2>
          </div>

          <div className="md:col-span-4">
            <p className="max-w-sm text-sm leading-7 text-[#aaa8a2] md:ml-auto">
              Découvrez un aperçu de notre approche : des supports préparés
              avec soin, des teintes maîtrisées et une attention particulière
              portée aux finitions.
            </p>
          </div>
        </div>

        {/* Galerie */}
        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">
          {/* Grande réalisation */}
          <article className="group md:col-span-7">
            <Link href={projects[0].href} className="block">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111719] md:aspect-[5/6]">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                {/* Numéro */}
                <span className="absolute left-5 top-5 font-serif text-sm text-white/70 md:left-7 md:top-7">
                  01
                </span>
              </div>

              <ProjectCaption project={projects[0]} />
            </Link>
          </article>

          {/* Colonne droite */}
          <div className="flex flex-col gap-16 md:col-span-5 md:gap-24 md:pt-24">
            <article className="group">
              <Link href={projects[1].href} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111719]">
                  <Image
                    src={projects[1].image}
                    alt={projects[1].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 font-serif text-sm text-white/70">
                    02
                  </span>
                </div>

                <ProjectCaption project={projects[1]} />
              </Link>
            </article>

            <article className="group md:-ml-12">
              <Link href={projects[2].href} className="block">
                <div className="relative aspect-[5/4] overflow-hidden bg-[#111719]">
                  <Image
                    src={projects[2].image}
                    alt={projects[2].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 font-serif text-sm text-white/70">
                    03
                  </span>
                </div>

                <ProjectCaption project={projects[2]} />
              </Link>
            </article>
          </div>
        </div>

        {/* Bas de section */}
        <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-10 md:mt-28 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg font-serif text-2xl leading-snug text-[#dedbd4] md:text-3xl">
            Chaque projet mérite une finition à la hauteur de votre intérieur.
          </p>

          <Link
            href="/realisations"
            className="group inline-flex w-fit items-center gap-5 border border-[#c9a66b]/60 px-7 py-4 text-sm font-medium transition-all duration-300 hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#0b0f10]"
          >
            Voir nos réalisations

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCaption({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="mt-5 flex items-start justify-between gap-6">
      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
          {project.category}
        </p>

        <h3 className="mt-2 font-serif text-2xl leading-tight text-[#f3f0e9] md:text-3xl">
          {project.title}
        </h3>
      </div>

      <p className="mt-1 hidden whitespace-nowrap text-[10px] uppercase tracking-[0.14em] text-[#777a77] lg:block">
        {project.location}
      </p>
    </div>
  );
}