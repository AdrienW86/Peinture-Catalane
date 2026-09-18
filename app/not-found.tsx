import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#0b0f10] text-[#f3f0e9]">
      {/* 404 DÉCORATIF */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span className="select-none font-serif text-[45vw] leading-none tracking-[-0.08em] text-white/[0.018]">
          404
        </span>
      </div>

      {/* LIGNES DÉCORATIVES */}
      <div
        aria-hidden="true"
        className="absolute left-6 top-1/2 hidden h-px w-24 bg-[#c9a66b]/30 md:block lg:left-10"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 hidden h-24 w-px bg-white/10 lg:block"
      />

      {/* CONTENU */}
      <div className="relative mx-auto flex w-full max-w-7xl items-center px-6 pb-20 pt-40 lg:px-10">
        <div className="grid w-full gap-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a66b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Erreur · 404
              </p>
            </div>

            <h1 className="mt-8 max-w-4xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[104px]">
              Cette page
              <br />

              <span className="italic text-[#dfbf87]">
                n&apos;existe plus.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-7 text-[#a9aaa4]">
              L&apos;adresse que vous avez suivie est peut-être incorrecte
              ou la page a été déplacée. Retrouvez Peinture Occitane depuis
              l&apos;accueil ou découvrez nos prestations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-7 bg-[#c9a66b] px-7 py-4 text-sm font-medium text-[#0b0f10] transition-colors duration-300 hover:bg-[#dfbf87]"
              >
                Retour à l&apos;accueil

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href="/prestations"
                className="group inline-flex items-center gap-6 border border-white/15 px-7 py-4 text-sm font-medium text-[#f3f0e9] transition-colors duration-300 hover:border-[#c9a66b] hover:text-[#c9a66b]"
              >
                Nos prestations

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden md:col-span-3 md:col-start-10 md:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#777a75]">
              Peinture Occitane
            </p>

            <p className="mt-4 font-serif text-2xl italic leading-tight text-[#c9a66b]">
              Perpignan
              <br />
              Pyrénées-Orientales
            </p>

            <a
              href="tel:+33743260451"
              className="mt-7 block w-fit text-sm text-[#f3f0e9] transition-colors hover:text-[#c9a66b]"
              aria-label="Appeler Peinture Occitane au 07 43 26 04 51"
            >
              07 43 26 04 51
            </a>
          </div>
        </div>
      </div>

      {/* INDICATION BAS DE PAGE */}
      <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.22em] text-[#5f625e] lg:left-10 lg:right-10">
        <span>Page introuvable</span>
        <span>66 · Pyrénées-Orientales</span>
      </div>
    </main>
  );
}