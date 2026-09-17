const testimonials = [
  {
    quote:
      "Un travail très soigné du début à la fin. Les surfaces ont été parfaitement préparées et le résultat correspond exactement à ce que nous souhaitions.",
    author: "Prénom N.",
    location: "Perpignan",
    source: "Avis client",
  },
  {
    quote:
      "Très satisfaits du résultat. Le chantier a été réalisé proprement et avec beaucoup de soin, notamment sur les finitions.",
    author: "Prénom N.",
    location: "Pyrénées-Orientales",
    source: "Avis client",
  },
  {
    quote:
      "Une réalisation de qualité et un très beau rendu final. Nous recommandons Peinture Catalane pour son sérieux et son attention aux détails.",
    author: "Prénom N.",
    location: "Perpignan",
    source: "Avis client",
  },
];

export default function Testimonials() {
  const [featured, ...others] = testimonials;

  return (
    <section
      id="avis"
      className="relative overflow-hidden bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* En-tête */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#9f7b43]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Ils nous font confiance
              </p>
            </div>

            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
              Leur satisfaction,
              <br />
              <span className="italic text-[#9f7b43]">
                notre plus belle finition.
              </span>
            </h2>
          </div>

          <div className="md:col-span-4">
            <p className="max-w-sm text-sm leading-7 text-[#62635d] md:ml-auto">
              La qualité d&apos;un travail se mesure aussi à la satisfaction de
              celles et ceux qui nous confient leur projet.
            </p>
          </div>
        </div>

        {/* Avis principal */}
        <article className="mt-20 border-y border-black/15 py-14 md:mt-28 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            {/* Guillemets */}
            <div className="md:col-span-2">
              <span
                className="block font-serif text-8xl leading-[0.7] text-[#9f7b43]"
                aria-hidden="true"
              >
                “
              </span>
            </div>

            {/* Avis */}
            <div className="md:col-span-8">
              <blockquote>
                <p className="font-serif text-3xl leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                  {featured.quote}
                </p>
              </blockquote>

              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
                <p className="text-sm font-semibold">{featured.author}</p>

                <span
                  className="h-1 w-1 rounded-full bg-[#9f7b43]"
                  aria-hidden="true"
                />

                <p className="text-xs text-[#77776f]">
                  {featured.location}
                </p>

                <span
                  className="hidden h-1 w-1 rounded-full bg-[#9f7b43] sm:block"
                  aria-hidden="true"
                />

                <p className="w-full text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9f7b43] sm:w-auto">
                  {featured.source}
                </p>
              </div>
            </div>

            {/* Décoration */}
            <div className="hidden md:col-span-2 md:flex md:justify-end">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#9f7b43]/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-[#9f7b43]"
                  aria-hidden="true"
                >
                  <path
                    d="m7 12 3 3 7-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </article>

        {/* Avis secondaires */}
        <div className="grid md:grid-cols-2">
          {others.map((testimonial, index) => (
            <article
              key={`${testimonial.author}-${index}`}
              className={`py-12 md:py-14 ${
                index === 0
                  ? "border-b border-black/15 md:border-b-0 md:border-r md:pr-12"
                  : "md:pl-12"
              }`}
            >
              <span
                className="font-serif text-5xl leading-none text-[#9f7b43]"
                aria-hidden="true"
              >
                “
              </span>

              <blockquote className="mt-6">
                <p className="max-w-xl font-serif text-2xl leading-[1.3] tracking-[-0.01em] md:text-3xl">
                  {testimonial.quote}
                </p>
              </blockquote>

              <div className="mt-8">
                <p className="text-sm font-semibold">{testimonial.author}</p>

                <div className="mt-2 flex items-center gap-3">
                  <p className="text-xs text-[#77776f]">
                    {testimonial.location}
                  </p>

                  <span
                    className="h-1 w-1 rounded-full bg-[#9f7b43]"
                    aria-hidden="true"
                  />

                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9f7b43]">
                    {testimonial.source}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bas de section */}
        <div className="flex flex-col gap-6 border-t border-black/15 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-sm leading-7 text-[#62635d]">
            Votre projet mérite lui aussi toute notre attention.
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-5 bg-[#111719] px-7 py-4 text-sm font-medium text-[#f3f0e9] transition-colors duration-300 hover:bg-[#9f7b43]"
          >
            Parler de votre projet

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>

      {/* Élément typographique décoratif */}
      <div
        className="pointer-events-none absolute -bottom-12 -right-8 select-none font-serif text-[150px] leading-none text-black/[0.025] sm:text-[220px] lg:text-[300px]"
        aria-hidden="true"
      >
        AVIS
      </div>
    </section>
  );
}