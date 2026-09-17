import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Peinture intérieure",
    description:
      "Murs, plafonds et boiseries : nous apportons une attention particulière à la préparation des supports et à la qualité des finitions.",
    href: "/prestations/peinture-interieure",
    image: "/images/service-peinture-interieure.jpg",
    alt: "Peinture intérieure aux finitions soignées à Perpignan",
  },
  {
    number: "02",
    title: "Peinture extérieure",
    description:
      "Des solutions adaptées aux surfaces extérieures pour protéger, rénover et valoriser durablement votre habitation.",
    href: "/prestations/peinture-exterieure",
    image: "/images/service-peinture-exterieure.jpg",
    alt: "Travaux de peinture extérieure sur une maison à Perpignan",
  },
  {
    number: "03",
    title: "Rénovation",
    description:
      "Préparation des supports, enduits et remise en état : chaque étape est réalisée avec soin pour obtenir un résultat propre et durable.",
    href: "/prestations",
    image: "/images/service-renovation.jpg",
    alt: "Rénovation et préparation de murs avant peinture",
  },
  {
    number: "04",
    title: "Ravalement de façade",
    description:
      "Redonnez du caractère à votre façade grâce à une préparation rigoureuse et des finitions pensées pour résister dans le temps.",
    href: "/prestations/ravalement-facade",
    image: "/images/service-facade.jpg",
    alt: "Ravalement et rénovation de façade à Perpignan",
  },
];

export default function Services() {
  return (
    <section
      id="prestations"
      className="relative overflow-hidden bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40"
    >
      {/* Ligne décorative */}
      <div className="absolute left-6 top-0 h-20 w-px bg-[#c9a66b] md:h-24 lg:left-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Introduction */}
        <div className="grid gap-10 border-b border-black/15 pb-16 md:grid-cols-12 md:items-end md:pb-20">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#9f7b43]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Nos prestations
              </p>
            </div>

            <h2 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
              Le soin du détail,
              <br />
              <span className="italic text-[#9f7b43]">
                du support à la finition.
              </span>
            </h2>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="max-w-md text-sm leading-7 text-[#555650] md:text-base">
              Peinture Catalane accompagne vos projets de peinture et de
              rénovation à Perpignan avec une exigence constante portée à la
              préparation, à l&apos;application et aux finitions.
            </p>
          </div>
        </div>

        {/* Prestations */}
        <div>
          {services.map((service) => (
            <article
              key={service.number}
              className="group grid gap-7 border-b border-black/15 py-10 md:grid-cols-12 md:items-center md:gap-8 md:py-12"
            >
              {/* Numéro */}
              <div className="md:col-span-1">
                <span className="font-serif text-lg text-[#9f7b43]">
                  {service.number}
                </span>
              </div>

              {/* Image */}
              <div className="md:col-span-4">
                <Link
                  href={service.href}
                  className="relative block aspect-[16/10] overflow-hidden bg-[#d9d5cc]"
                  aria-label={`Découvrir : ${service.title}`}
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent" />
                </Link>
              </div>

              {/* Texte */}
              <div className="md:col-span-5 md:pl-6 lg:pl-10">
                <h3 className="font-serif text-3xl leading-none tracking-[-0.02em] sm:text-4xl lg:text-[44px]">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#62635d]">
                  {service.description}
                </p>
              </div>

              {/* Flèche */}
              <div className="flex md:col-span-2 md:justify-end">
                <Link
                  href={service.href}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#111719]/25 transition-all duration-300 group-hover:border-[#9f7b43] group-hover:bg-[#9f7b43] group-hover:text-[#f3f0e9]"
                  aria-label={`En savoir plus sur ${service.title}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19M14 7L19 12L14 17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA bas */}
        <div className="flex flex-col gap-7 pt-12 md:flex-row md:items-center md:justify-between md:pt-16">
          <p className="font-serif text-2xl md:text-3xl">
            Vous avez un projet à nous confier ?
          </p>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-5 bg-[#111719] px-7 py-4 text-sm font-medium text-[#f3f0e9] transition-colors duration-300 hover:bg-[#9f7b43]"
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
    </section>
  );
}