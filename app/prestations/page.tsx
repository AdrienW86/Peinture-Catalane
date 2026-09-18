import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Travaux de peinture à Perpignan",
  description:
    "Découvrez les prestations de Peinture Occitane à Perpignan : peinture intérieure, peinture extérieure, rénovation et ravalement de façade.",
  alternates: {
    canonical: "/prestations",
  },
};

const services = [
  {
    number: "01",
    title: "Peinture intérieure",
    description:
      "Murs, plafonds et boiseries : une préparation attentive des supports et des finitions soignées pour mettre en valeur votre intérieur.",
    image: "/images/service-peinture-interieure.jpg",
    href: "/prestations/peinture-interieure",
  },
  {
    number: "02",
    title: "Peinture extérieure",
    description:
      "Des travaux de peinture adaptés aux surfaces extérieures afin de rénover, protéger et valoriser votre habitation.",
    image: "/images/service-peinture-exterieure.jpg",
    href: "/prestations/peinture-exterieure",
  },
  {
    number: "03",
    title: "Rénovation",
    description:
      "Préparation des supports, reprises et remise en état des surfaces avant finition pour retrouver des espaces propres et harmonieux.",
    image: "/images/service-renovation.jpg",
    href: "/contact",
  },
  {
    number: "04",
    title: "Ravalement de façade",
    description:
      "Une intervention soignée pour remettre en état et valoriser durablement l'apparence extérieure de votre façade.",
    image: "/images/service-facade.jpg",
    href: "/prestations/ravalement-facade",
  },
];

export default function PrestationsPage() {
  return (
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#0b0f10] pb-24 pt-40 text-[#f3f0e9] md:pb-32 md:pt-48 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#c9a66b]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                    Nos prestations
                  </p>
                </div>

                <h1 className="max-w-5xl font-serif text-5xl leading-[0.93] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[88px]">
                  Peinture & rénovation
                  <br />
                  <span className="italic text-[#dfbf87]">à Perpignan.</span>
                </h1>
              </div>

              <div className="md:col-span-4">
                <p className="max-w-sm text-sm leading-7 text-[#aaa8a2] md:ml-auto">
                  Peinture Occitane accompagne vos projets intérieurs et
                  extérieurs avec une attention particulière portée à la
                  préparation des surfaces et aux finitions.
                </p>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute -bottom-10 right-0 select-none font-serif text-[130px] leading-none text-white/[0.018] sm:text-[200px] lg:text-[280px]"
            aria-hidden="true"
          >
            SAVOIR-FAIRE
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-[#f0ede5] py-20 text-[#111719] md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-12 lg:px-10">
            <div className="md:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Peinture Occitane
              </p>
            </div>

            <div className="md:col-span-7">
              <p className="font-serif text-3xl leading-[1.2] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                Un travail soigné commence par comprendre le support, préparer
                chaque surface et choisir une finition adaptée au projet.
              </p>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-[#62635d] md:text-base md:leading-8">
                Nous intervenons sur différents projets de peinture et de
                rénovation à Perpignan et dans les environs, aussi bien à
                l&apos;intérieur qu&apos;à l&apos;extérieur.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#f0ede5] pb-24 text-[#111719] md:pb-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {services.map((service, index) => (
              <article
                key={service.number}
                className="grid gap-8 border-t border-black/15 py-12 md:grid-cols-12 md:items-center md:gap-10 md:py-16"
              >
                <div
                  className={`md:col-span-6 ${
                    index % 2 !== 0 ? "md:order-2" : ""
                  }`}
                >
                  <Link
                    href={service.href}
                    className="group relative block aspect-[16/11] overflow-hidden bg-[#d9d5cc]"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </Link>
                </div>

                <div
                  className={`md:col-span-5 ${
                    index % 2 !== 0
                      ? "md:order-1 md:col-start-1"
                      : "md:col-start-8"
                  }`}
                >
                  <p className="font-serif text-lg text-[#9f7b43]">
                    {service.number}
                  </p>

                  <h2 className="mt-5 font-serif text-4xl leading-none tracking-[-0.025em] sm:text-5xl">
                    {service.title}
                  </h2>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-[#62635d]">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="group mt-8 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.16em]"
                  >
                    Découvrir la prestation

                    <span className="text-[#9f7b43] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* MÉTHODE */}
        <section className="bg-[#0b0f10] py-24 text-[#f3f0e9] md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 lg:px-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#c9a66b]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                  Notre approche
                </p>
              </div>

              <h2 className="mt-7 font-serif text-5xl leading-[0.98] tracking-[-0.025em] sm:text-6xl">
                Chaque détail
                <br />
                <span className="italic text-[#dfbf87]">compte.</span>
              </h2>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <p className="text-base leading-8 text-[#aaa8a2]">
                Préparation des supports, protection des espaces, application
                et finitions : chaque étape contribue à la qualité du résultat
                final.
              </p>

              <div className="mt-10 border-t border-white/10">
                {[
                  "Préparation des surfaces",
                  "Protection des espaces",
                  "Application soignée",
                  "Contrôle des finitions",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 border-b border-white/10 py-5"
                  >
                    <span className="font-serif text-sm text-[#c9a66b]">
                      0{index + 1}
                    </span>

                    <p className="font-serif text-xl">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
  );
}