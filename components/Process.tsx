const steps = [
  {
    number: "01",
    title: "Échange",
    text: "Nous échangeons sur votre projet, vos attentes et les particularités des surfaces à traiter afin de définir précisément votre besoin.",
  },
  {
    number: "02",
    title: "Préparation",
    text: "Les espaces sont protégés et les supports préparés avec soin pour créer les meilleures conditions avant la mise en peinture.",
  },
  {
    number: "03",
    title: "Réalisation",
    text: "Les travaux sont réalisés avec méthode et précision, en accordant une attention constante à la régularité et aux détails.",
  },
  {
    number: "04",
    title: "Finitions",
    text: "Les derniers détails sont vérifiés avec attention pour vous laisser un espace propre et un résultat harmonieux.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f10] py-24 text-[#f3f0e9] md:py-32 lg:py-40">
      {/* Ligne décorative verticale */}
      <div className="absolute right-6 top-0 h-20 w-px bg-[#c9a66b] md:h-24 lg:right-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Introduction */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a66b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Votre projet
              </p>
            </div>

            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
              Une méthode claire,
              <br />
              <span className="italic text-[#dfbf87]">
                du premier échange aux finitions.
              </span>
            </h2>
          </div>

          <div className="md:col-span-4">
            <p className="max-w-sm text-sm leading-7 text-[#aaa8a2] md:ml-auto">
              Chaque projet est différent. Notre approche permet d&apos;avancer
              étape par étape, avec une attention particulière portée à la
              préparation et à la qualité d&apos;exécution.
            </p>
          </div>
        </div>

        {/* Process desktop + mobile */}
        <div className="relative mt-20 md:mt-28">
          {/* Ligne horizontale desktop */}
          <div
            className="absolute left-0 right-0 top-[31px] hidden h-px bg-white/10 md:block"
            aria-hidden="true"
          />

          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((step) => (
              <article key={step.number} className="group relative">
                {/* Numéro */}
                <div className="relative z-10 flex items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a66b]/50 bg-[#0b0f10] transition-all duration-500 group-hover:border-[#c9a66b] group-hover:bg-[#c9a66b] group-hover:text-[#0b0f10]">
                    <span className="font-serif text-lg">{step.number}</span>
                  </div>
                </div>

                {/* Texte */}
                <div className="mt-8 md:mt-10">
                  <h3 className="font-serif text-3xl tracking-[-0.02em] md:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-xs text-sm leading-7 text-[#94958f]">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Citation / transition */}
        <div className="mt-20 border-t border-white/10 pt-12 md:mt-28 md:pt-16">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-2">
              <span
                className="font-serif text-6xl leading-none text-[#c9a66b]"
                aria-hidden="true"
              >
                “
              </span>
            </div>

            <div className="md:col-span-8">
              <p className="max-w-3xl font-serif text-3xl leading-[1.15] tracking-[-0.02em] text-[#dedbd4] sm:text-4xl lg:text-5xl">
                Un résultat soigné commence par une préparation qui ne laisse
                rien au hasard.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mot décoratif */}
      <div
        className="pointer-events-none absolute -bottom-12 right-0 select-none font-serif text-[130px] leading-none text-white/[0.018] sm:text-[190px] lg:text-[260px]"
        aria-hidden="true"
      >
        MÉTHODE
      </div>
    </section>
  );
}