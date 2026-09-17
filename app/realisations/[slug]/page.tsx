import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import { projects } from "../data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const serviceLinks = {
  "Peinture intérieure": "/prestations/peinture-interieure",
  "Peinture extérieure": "/prestations/peinture-exterieure",
  "Ravalement de façade": "/prestations/ravalement-facade",
  Rénovation: "/prestations",
} as const;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.seo.title,
    description: project.seo.description,

    alternates: {
      canonical: `/realisations/${project.slug}`,
    },

    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      url: `/realisations/${project.slug}`,
      images: [
        {
          url: project.image,
          alt: project.imageAlt,
        },
      ],
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (project) => project.slug === slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  const serviceHref = serviceLinks[project.category];

  return (
    <main>
      {/* ─────────────────────────────
          HERO
      ───────────────────────────── */}

      <section className="relative min-h-[92vh] overflow-hidden bg-[#0b0f10] text-[#f3f0e9]">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f10]/85 via-[#0b0f10]/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0b0f10] via-[#0b0f10]/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-16 pt-40 md:pb-24 lg:px-10">
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
                  href: "/realisations",
                },
                {
                  label: project.city,
                },
              ]}
            />

            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-9">
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#c9a66b]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#dfbf87]">
                    {project.category} · {project.city}
                  </p>
                </div>

                <h1 className="max-w-5xl font-serif text-5xl leading-[0.92] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[92px]">
                  {project.shortTitle}
                </h1>
              </div>

              <div className="md:col-span-3 md:pb-2">
                <p className="text-sm leading-7 text-[#d0cec7]">
                  {project.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────
          INTRODUCTION
      ───────────────────────────── */}

      <section className="bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Le projet
              </p>

              <div className="mt-8 border-t border-black/10 pt-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8a8983]">
                  Localisation
                </p>

                <p className="mt-2 font-serif text-xl">
                  {project.city}
                </p>

                <p className="mt-1 text-xs text-[#777872]">
                  {project.department}
                </p>
              </div>

              <div className="mt-6 border-t border-black/10 pt-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8a8983]">
                  Intervention
                </p>

                <p className="mt-2 font-serif text-xl">
                  {project.category}
                </p>
              </div>
            </div>

            <div className="md:col-span-7 md:col-start-5">
              <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.03em] sm:text-6xl">
                Une intervention pensée
                <br />

                <span className="italic text-[#9f7b43]">
                  pour le lieu.
                </span>
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-8 text-[#62635d]">
                {project.introduction}
              </p>

              <Link
                href={serviceHref}
                className="group mt-9 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#111719] transition-colors hover:text-[#9f7b43]"
              >
                Découvrir cette prestation

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────
          GALLERY
      ───────────────────────────── */}

      {project.gallery.length > 0 && (
        <section className="overflow-hidden bg-[#0b0f10] py-24 text-[#f3f0e9] md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                  Matières & finitions
                </p>

                <h2 className="mt-7 font-serif text-5xl leading-[0.94] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                  Le projet
                  <br />

                  <span className="italic text-[#dfbf87]">
                    dans le détail.
                  </span>
                </h2>
              </div>

              <div className="md:col-span-3 md:col-start-10">
                <p className="text-sm leading-7 text-[#94958f]">
                  Les détails permettent de lire les rencontres entre
                  surfaces, matières et éléments architecturaux.
                </p>
              </div>
            </div>

            {/* ─────────────────────────────
                UNE SEULE PHOTO
            ───────────────────────────── */}

            {project.gallery.length === 1 ? (
              <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 md:items-end">
                <div className="hidden md:col-span-3 md:block md:pb-10">
                  <div className="h-px w-full bg-white/10" />

                  <p className="mt-6 font-serif text-2xl italic text-[#dfbf87]">
                    {project.city}
                  </p>

                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#777a75]">
                    {project.category}
                  </p>

                  <p className="mt-7 max-w-xs text-sm leading-7 text-[#94958f]">
                    Une lecture rapprochée des surfaces, des teintes et
                    des éléments architecturaux du projet.
                  </p>
                </div>

                <div className="md:col-span-7 md:col-start-5">
                  <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
                    <Image
                      src={project.gallery[0].src}
                      alt={project.gallery[0].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* ─────────────────────────────
                  DEUX PHOTOS
              ───────────────────────────── */

              <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-5 md:pt-24">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={project.gallery[0].src}
                      alt={project.gallery[0].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={project.gallery[1].src}
                      alt={project.gallery[1].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─────────────────────────────
          TRAVAUX
      ───────────────────────────── */}

      <section className="relative overflow-hidden bg-[#e4e0d7] py-24 text-[#111719] md:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 top-1/2 hidden -translate-y-1/2 font-serif text-[260px] italic leading-none text-black/[0.025] lg:block"
        >
          01
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Intervention
              </p>

              <h2 className="mt-7 font-serif text-5xl leading-[0.96] tracking-[-0.03em] sm:text-6xl">
                Le soin apporté
                <br />

                <span className="italic text-[#9f7b43]">
                  à chaque étape.
                </span>
              </h2>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <div className="border-t border-black/15">
                {project.work.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[45px_1fr] items-center border-b border-black/15 py-6 md:grid-cols-[70px_1fr]"
                  >
                    <span className="font-serif text-sm italic text-[#9f7b43]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="font-serif text-2xl md:text-3xl">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────
          NEXT PROJECT
      ───────────────────────────── */}

      <section className="bg-[#0b0f10] py-24 text-[#f3f0e9] md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
            Projet suivant
          </p>

          <Link
            href={`/realisations/${nextProject.slug}`}
            className="group mt-8 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-8">
              <p className="font-serif text-lg italic text-[#dfbf87]">
                {nextProject.city}
              </p>

              <h2 className="mt-3 font-serif text-5xl leading-[0.94] tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#dfbf87] sm:text-6xl lg:text-7xl">
                {nextProject.shortTitle}
              </h2>
            </div>

            <div className="md:col-span-2 md:col-start-11 md:text-right">
              <span className="inline-block text-4xl transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────
          CTA
      ───────────────────────────── */}

      <section className="relative overflow-hidden bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
              Votre projet
            </p>

            <h2 className="mt-7 font-serif text-5xl leading-[0.94] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Vous avez un projet
              <br />

              <span className="italic text-[#9f7b43]">
                à nous confier ?
              </span>
            </h2>
          </div>

          <div className="md:col-span-3 md:col-start-10 md:self-end">
            <p className="text-sm leading-7 text-[#62635d]">
              Échangeons sur vos surfaces, vos envies et les
              caractéristiques de votre projet.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-5 bg-[#111719] px-7 py-4 text-sm font-medium text-[#f3f0e9] transition-colors duration-300 hover:bg-[#c9a66b] hover:text-[#0b0f10]"
            >
              Demander un devis

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}