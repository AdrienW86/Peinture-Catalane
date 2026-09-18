import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Peintre à Perpignan | Peinture intérieure, extérieure & façade",
  description:
    "Peinture Occitane intervient à Perpignan pour vos travaux de peinture intérieure, extérieure, rénovation et ravalement de façade.",
  alternates: {
    canonical: "/peinture-perpignan",
  },
  openGraph: {
    title: "Peintre à Perpignan | Peinture Occitane",
    description:
      "Peinture intérieure, extérieure, rénovation et ravalement de façade à Perpignan et dans les Pyrénées-Orientales.",
    url: "/peinture-perpignan",
  },
};

const services = [
  {
    number: "01",
    title: "Peinture intérieure",
    description:
      "Murs, plafonds et boiseries : préparation des supports et application soignée pour remettre en valeur vos espaces intérieurs.",
    href: "/prestations/peinture-interieure",
  },
  {
    number: "02",
    title: "Peinture extérieure",
    description:
      "Travaux de peinture sur les surfaces extérieures avec une attention particulière portée à leur état et à leur préparation.",
    href: "/prestations/peinture-exterieure",
  },
  {
    number: "03",
    title: "Ravalement de façade",
    description:
      "Préparation, remise en état et finition des façades pour restaurer et valoriser l'apparence extérieure du bâtiment.",
    href: "/prestations/ravalement-facade",
  },
];

const steps = [
  {
    number: "01",
    title: "Échanger",
    text: "Votre projet commence par un échange sur les surfaces concernées, vos attentes et le résultat recherché.",
  },
  {
    number: "02",
    title: "Préparer",
    text: "L’état des supports est pris en compte avant l’application afin de préparer les surfaces selon les besoins du chantier.",
  },
  {
    number: "03",
    title: "Réaliser",
    text: "Les travaux sont réalisés avec une attention particulière portée à la régularité de l’application et aux détails.",
  },
  {
    number: "04",
    title: "Finaliser",
    text: "Les finitions viennent compléter l’intervention pour obtenir un ensemble propre et harmonieux.",
  },
];

export default function PeinturePerpignanPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-[#0b0f10] text-[#f3f0e9]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-peinture.jpg"
            alt="Travaux de peinture dans un intérieur contemporain"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#0b0f10]/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f10]/90 via-[#0b0f10]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f10] via-transparent to-[#0b0f10]/25" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-6 pb-12 pt-36 lg:px-10 lg:pb-16 lg:pt-44">
          <Breadcrumb
            className="mb-16"
            items={[
              { label: "Accueil", href: "/" },
              { label: "Peintre à Perpignan" },
            ]}
          />

          <div className="grid flex-1 items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-9">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#c9a66b]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#dfbf87]">
                  Peinture Occitane · Pyrénées-Orientales
                </p>
              </div>

              <h1 className="max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[108px]">
                Peintre
                <br />
                <span className="italic text-[#dfbf87]">à Perpignan.</span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-[#d0cec8] sm:text-base">
                Peinture Occitane intervient à Perpignan pour vos projets de
                peinture intérieure, extérieure, rénovation et ravalement de
                façade.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-8 bg-[#c9a66b] px-7 py-4 text-sm font-medium text-[#0b0f10] transition-colors duration-300 hover:bg-[#dfbf87]"
                >
                  Parler de votre projet
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>

                <a
                  href="tel:+33743260451"
                  aria-label="Appeler Peinture Occitane au 07 43 26 04 51"
                  className="inline-flex items-center border border-white/20 px-7 py-4 text-sm text-[#f3f0e9] transition-colors hover:border-[#c9a66b] hover:text-[#dfbf87]"
                >
                  07 43 26 04 51
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex items-end justify-between border-t border-white/10 pt-6">
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#898b86]">
              Perpignan · 66
            </p>

            <p className="max-w-xs text-right text-[10px] uppercase leading-5 tracking-[0.18em] text-[#898b86]">
              Intervention dans toutes
              <br />
              les Pyrénées-Orientales
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Peinture à Perpignan
              </p>

              <div className="mt-7 h-px w-12 bg-[#c9a66b]" />
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2 className="max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.03em] sm:text-5xl md:text-6xl">
                Des travaux pensés
                <br />
                <span className="italic text-[#9f7b43]">
                  pour chaque surface.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 text-sm leading-7 text-[#62635d] sm:grid-cols-2">
                <p>
                  Un projet de peinture ne commence pas avec la première
                  couche. L&apos;état du support, les reprises nécessaires et
                  la préparation des surfaces participent directement à la
                  qualité du résultat.
                </p>

                <p>
                  Peinture Occitane intervient à Perpignan pour des travaux
                  intérieurs et extérieurs, de la remise en état d&apos;une
                  pièce au traitement esthétique d&apos;une façade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-[#e4e0d7] py-24 text-[#111719] md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 border-b border-black/10 pb-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Nos interventions
              </p>

              <h2 className="mt-7 font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl">
                Trois savoir-faire,
                <br />
                <span className="italic text-[#9f7b43]">un même niveau d’attention.</span>
              </h2>
            </div>

            <div className="md:col-span-3 md:col-start-10">
              <p className="text-sm leading-7 text-[#62635d]">
                Des prestations adaptées à l&apos;intérieur comme à
                l&apos;enveloppe extérieure de votre habitation.
              </p>
            </div>
          </div>

          <div>
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group grid gap-6 border-b border-black/10 py-10 transition-colors md:grid-cols-12 md:items-center md:py-12"
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#9f7b43] md:col-span-1">
                  {service.number}
                </span>

                <h3 className="font-serif text-3xl tracking-[-0.02em] transition-colors group-hover:text-[#9f7b43] sm:text-4xl md:col-span-4">
                  {service.title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-[#62635d] md:col-span-5">
                  {service.description}
                </p>

                <span
                  aria-hidden="true"
                  className="text-right text-xl text-[#9f7b43] transition-transform duration-300 group-hover:translate-x-2 md:col-span-2"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE ÉDITORIALE */}
      <section className="bg-[#0b0f10] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/9] lg:aspect-[2/1]">
            <Image
              src="/images/peinture-interieure-detail.jpg"
              alt="Détail d'une finition de peinture intérieure"
              fill
              sizes="(max-width: 640px) 100vw, 1200px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#f3f0e9] md:bottom-8 md:left-8 md:right-8">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/70">
                Préparation · Application · Finition
              </p>

              <span className="hidden font-serif text-3xl italic text-[#dfbf87] sm:block">
                Le détail compte.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="bg-[#0b0f10] py-24 text-[#f3f0e9] md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Notre approche
              </p>

              <h2 className="mt-7 font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl">
                Du premier
                <br />
                <span className="italic text-[#dfbf87]">échange aux finitions.</span>
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-t border-white/10 py-8 sm:grid-cols-[70px_1fr]"
                >
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#c9a66b]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-3xl">{step.title}</h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#9fa19c]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="relative overflow-hidden bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[300px] leading-none text-black/[0.025] lg:block"
        >
          66
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Zone d&apos;intervention
              </p>

              <h2 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl">
                Perpignan et
                <br />
                <span className="italic text-[#9f7b43]">
                  toutes les Pyrénées-Orientales.
                </span>
              </h2>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <p className="text-sm leading-7 text-[#62635d]">
                Peinture Occitane est établie à Pia et intervient pour les
                projets de peinture et de rénovation à Perpignan ainsi que
                dans l&apos;ensemble du département des Pyrénées-Orientales.
              </p>

              <p className="mt-6 text-xs leading-6 text-[#777871]">
                Perpignan · Pia · Saint-Estève · Cabestany · Rivesaltes ·
                Canet-en-Roussillon · Thuir · Argelès-sur-Mer · et
                l&apos;ensemble du 66.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-[#0b0f10] py-24 text-[#f3f0e9] md:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-0 select-none font-serif text-[260px] italic leading-none text-white/[0.018] sm:text-[360px]"
        >
          66
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Votre projet
              </p>

              <h2 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.94] tracking-[-0.03em] sm:text-6xl md:text-7xl">
                Un projet de peinture
                <br />
                <span className="italic text-[#dfbf87]">à Perpignan ?</span>
              </h2>
            </div>

            <div className="md:col-span-3 md:col-start-10">
              <p className="mb-7 text-sm leading-7 text-[#9fa19c]">
                Présentez-nous votre projet pour échanger sur vos besoins et
                les travaux envisagés.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-8 bg-[#c9a66b] px-7 py-4 text-sm font-medium text-[#0b0f10] transition-colors duration-300 hover:bg-[#dfbf87]"
              >
                Demander un devis

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