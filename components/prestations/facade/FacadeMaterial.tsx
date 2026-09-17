import Image from "next/image";

export default function FacadeMaterial() {
  return (
    <section className="overflow-hidden bg-[#f0ede5] pb-24 md:pb-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {/* GRANDE IMAGE VERTICALE */}
          <div className="md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/5]">
              <Image
                src="/images/ravalement-facade-detail.jpg"
                alt="Façade aux tons minéraux et détails architecturaux"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* COLONNE DROITE */}
          <div className="flex flex-col md:col-span-4 md:col-start-9 md:pt-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9f7b43]">
                Matière
              </p>

              <p className="mt-6 font-serif text-3xl leading-[1.08] text-[#30322f] md:text-4xl">
                L&apos;aspect final commence
                <span className="italic text-[#9f7b43]">
                  {" "}bien avant la finition.
                </span>
              </p>

              <p className="mt-7 max-w-sm text-sm leading-7 text-[#62635d]">
                L&apos;état du support et la préparation des surfaces
                participent directement à la lecture finale de la façade.
              </p>
            </div>

            <div className="relative mt-16 aspect-[4/3] overflow-hidden md:mt-auto">
              <Image
                src="/images/ravalement-facade-matiere.jpg"
                alt="Détail de texture d'une façade minérale"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover"
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <span className="h-px w-8 bg-[#9f7b43]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9f7b43]">
                Support · relief · finition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}