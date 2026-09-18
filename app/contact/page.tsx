import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & devis peinture à Perpignan",
  description:
    "Présentez votre projet de peinture, rénovation ou façade à Peinture Occitane à Perpignan et dans les Pyrénées-Orientales.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & devis peinture à Perpignan",
    description:
      "Échangez avec Peinture Occitane au sujet de votre projet de peinture, rénovation ou façade dans les Pyrénées-Orientales.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#0b0f10] text-[#f3f0e9]">
      {/* HERO */}
      <section className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44 lg:pb-40 lg:pt-52">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-24 hidden select-none font-serif text-[240px] italic leading-none text-white/[0.018] lg:block"
        >
          Projet
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Breadcrumb
            className="mb-12"
            items={[
              { label: "Accueil", href: "/" },
              { label: "Contact" },
            ]}
          />

          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#c9a66b]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                  Contact · Peinture Occitane
                </p>
              </div>

              <h1 className="mt-8 max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[104px]">
                Parlons de
                <br />

                <span className="italic text-[#dfbf87]">
                  votre projet.
                </span>
              </h1>
            </div>

            <div className="md:col-span-3 md:col-start-10 md:pb-2">
              <p className="max-w-sm text-sm leading-7 text-[#a9aaa4]">
                Peinture intérieure, extérieure, rénovation ou façade :
                présentez votre projet et vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 md:grid-cols-12 md:gap-10">
            {/* COLONNE ÉDITORIALE */}
            <div className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                  Votre demande
                </p>

                <h2 className="mt-7 max-w-md font-serif text-4xl leading-[0.98] tracking-[-0.03em] sm:text-5xl">
                  Quelques informations
                  <br />
                  <span className="italic text-[#9f7b43]">
                    pour commencer.
                  </span>
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-7 text-[#62635d]">
                  Décrivez simplement la nature du chantier, sa localisation
                  et ce que vous souhaitez réaliser. Ces premiers éléments
                  permettront de mieux comprendre votre projet.
                </p>

                <div className="mt-10 border-t border-black/10 pt-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b8982]">
                    Vous préférez nous appeler ?
                  </p>

                  <a
                    href="tel:+33743260451"
                    aria-label="Appeler Peinture Occitane au 07 43 26 04 51"
                    className="group mt-5 inline-flex items-center gap-5"
                  >
                    <span className="font-serif text-2xl text-[#111719] transition-colors duration-300 group-hover:text-[#9f7b43] sm:text-3xl">
                      07 43 26 04 51
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-[#9f7b43] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>

                  <p className="mt-3 max-w-xs text-xs leading-6 text-[#777871]">
                    Un appel suffit pour présenter rapidement votre projet.
                  </p>
                </div>

                <div className="mt-10 border-t border-black/10 pt-8"></div>

                <div className="mt-12 border-t border-black/10 pt-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b8982]">
                    Types de projets
                  </p>

                  <div className="mt-5 space-y-3 font-serif text-xl text-[#343936]">
                    <p>Peinture intérieure</p>
                    <p>Peinture extérieure</p>
                    <p>Rénovation</p>
                    <p>Ravalement de façade</p>
                  </div>
                </div>

                <div className="mt-10 border-t border-black/10 pt-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b8982]">
                    Secteur
                  </p>

                  <p className="mt-4 font-serif text-xl italic text-[#9f7b43]">
                    Perpignan & Pyrénées-Orientales
                  </p>
                </div>
              </div>
            </div>

            {/* FORMULAIRE */}
            <div className="md:col-span-7 md:col-start-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden bg-[#0b0f10] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-[#c9a66b]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                  Inspiration
                </p>
              </div>

              <h2 className="mt-7 font-serif text-5xl leading-[0.94] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Avant de vous lancer,
                <br />

                <span className="italic text-[#dfbf87]">
                  découvrez nos projets.
                </span>
              </h2>
            </div>

            <div className="md:col-span-3 md:col-start-10">
              <p className="text-sm leading-7 text-[#94958f]">
                Parcourez une sélection d&apos;intérieurs, de façades et de
                rénovations pour découvrir notre univers.
              </p>

              <Link
                href="/realisations"
                className="group mt-8 inline-flex items-center gap-5 text-xs font-medium uppercase tracking-[0.18em] text-[#f3f0e9] transition-colors hover:text-[#c9a66b]"
              >
                Voir les réalisations

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}