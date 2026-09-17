export default function ExteriorIntro() {
  return (
    <section className="overflow-hidden bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#9f7b43]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Peinture extérieure
              </p>
            </div>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <h2 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              L&apos;extérieur donne
              <br />
              <span className="italic text-[#9f7b43]">
                le premier ton.
              </span>
            </h2>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
              <p className="text-sm leading-7 text-[#62635d]">
                La peinture extérieure participe directement à l&apos;aspect
                d&apos;une habitation. Façades, boiseries et menuiseries
                composent un ensemble qui doit rester cohérent avec
                l&apos;architecture du bâtiment.
              </p>

              <p className="text-sm leading-7 text-[#62635d]">
                Exposées aux conditions extérieures, ces surfaces demandent
                également une observation attentive de leur état et une
                préparation adaptée avant la réalisation des finitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}