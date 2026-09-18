export default function Expertise() {
  const commitments = [
    {
      number: "01",
      title: "Préparation soignée",
      text: "Un beau résultat commence par un support correctement préparé. Chaque surface fait l’objet d’une attention particulière avant la mise en peinture.",
    },
    {
      number: "02",
      title: "Finitions maîtrisées",
      text: "Angles, raccords, contours et uniformité : le soin apporté aux détails participe pleinement à la qualité du résultat final.",
    },
    {
      number: "03",
      title: "Chantier respecté",
      text: "Protection des espaces, organisation et propreté font partie intégrante de notre manière d’aborder chaque intervention.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Partie haute */}
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          {/* Colonne gauche */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#9f7b43]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Notre savoir-faire
              </p>
            </div>

            <p className="mt-8 max-w-xs text-sm leading-7 text-[#66665f]">
              Une approche exigeante de la peinture et de la rénovation, avec
              une attention portée à chaque étape du projet.
            </p>
          </div>

          {/* Grande accroche */}
          <div className="md:col-span-8">
            <h2 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
              La qualité se joue
              <br />
              <span className="italic text-[#9f7b43]">
                avant le premier coup de pinceau.
              </span>
            </h2>

            <p className="mt-9 max-w-2xl text-base leading-8 text-[#555650]">
              Chez Peinture Occitane, nous accordons autant d’importance à la
              préparation des surfaces qu’à leur finition. L’objectif : obtenir
              un rendu propre, harmonieux et pensé pour durer.
            </p>
          </div>
        </div>

        {/* Engagements */}
        <div className="mt-20 border-t border-black/15 md:mt-28">
          {commitments.map((commitment) => (
            <div
              key={commitment.number}
              className="group grid gap-6 border-b border-black/15 py-9 md:grid-cols-12 md:items-center md:gap-8 md:py-11"
            >
              <div className="md:col-span-1">
                <span className="font-serif text-lg text-[#9f7b43]">
                  {commitment.number}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="font-serif text-3xl tracking-[-0.02em] md:text-4xl">
                  {commitment.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="max-w-lg text-sm leading-7 text-[#62635d]">
                  {commitment.text}
                </p>
              </div>

              <div className="hidden md:col-span-2 md:flex md:justify-end">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-[#9f7b43] transition-transform duration-500 group-hover:rotate-45">
                  <span className="text-lg font-light">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Signature */}
        <div className="grid gap-8 pt-12 md:grid-cols-12 md:pt-16">
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9f7b43]">
              Peinture Occitane
            </p>

            <p className="mt-3 font-serif text-2xl leading-snug">
              Peinture & rénovation
              <br />
              à Perpignan et alentours.
            </p>
          </div>
        </div>
      </div>

      {/* Décoration */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-12 select-none font-serif text-[220px] leading-none text-black/[0.025] md:text-[320px]"
        aria-hidden="true"
      >
        PC
      </div>
    </section>
  );
}