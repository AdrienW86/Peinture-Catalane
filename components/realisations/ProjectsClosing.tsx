import Link from "next/link";

export default function ProjectsClosing() {
  return (
    <section className="relative overflow-hidden bg-[#f0ede5] py-28 text-[#111719] md:py-36 lg:py-44">
      {/* Mot décoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[260px] italic leading-none text-black/[0.025] lg:block"
      >
        Projet
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:items-end lg:px-10">
        {/* TITRE */}
        <div className="md:col-span-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#9f7b43]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
              Votre projet
            </p>
          </div>

          <h2 className="mt-7 font-serif text-5xl leading-[0.94] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Le prochain espace
            <br />

            <span className="italic text-[#9f7b43]">
              pourrait être le vôtre.
            </span>
          </h2>
        </div>

        {/* CTA */}
        <div className="md:col-span-3 md:col-start-10">
          <div className="border-t border-black/10 pt-6">
            <p className="text-sm leading-7 text-[#62635d]">
              Intérieur, extérieur ou façade : présentez-nous votre projet
              pour échanger sur vos besoins.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-6 bg-[#111719] px-7 py-4 text-sm font-medium text-[#f3f0e9] transition-colors duration-300 hover:bg-[#c9a66b] hover:text-[#0b0f10]"
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
  );
}