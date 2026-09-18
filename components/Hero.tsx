import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0f10]">
      {/* Image principale */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-peinture.jpg"
          alt="Intérieur contemporain réalisé par Peinture Occitane à Perpignan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Voile sombre */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Dégradé pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f10]/95 via-[#0b0f10]/65 to-[#0b0f10]/15" />

        {/* Dégradé bas */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0f10] to-transparent" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">
        <div className="max-w-3xl">
          {/* Sur-titre */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#c9a66b]" />

            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c9a66b]">
              Votre peintre à Perpignan
            </p>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.02em] text-[#f3f0e9] sm:text-6xl md:text-7xl lg:text-[88px]">
            Des couleurs
            <br />
            qui valorisent
            <br />
            <span className="text-[#dfbf87]">votre intérieur.</span>
          </h1>

          {/* Texte */}
          <p className="mt-8 max-w-xl text-base leading-7 text-[#d0cdc5] md:text-lg md:leading-8">
            Peinture Occitane accompagne vos projets de peinture et de
            rénovation à Perpignan avec un savoir-faire artisanal, des
            finitions soignées et une attention particulière aux détails.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-4 bg-[#c9a66b] px-7 py-4 text-sm font-medium text-[#0b0f10] transition-all duration-300 hover:bg-[#dfbf87]"
            >
              Demander un devis

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/realisations"
              className="group inline-flex items-center justify-center gap-3 border border-white/25 px-7 py-4 text-sm font-medium text-[#f3f0e9] transition-all duration-300 hover:border-[#c9a66b] hover:text-[#c9a66b]"
            >
              Découvrir nos réalisations

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

      {/* Localisation */}
      <div className="absolute bottom-10 right-6 z-10 hidden items-center gap-3 text-xs text-[#d0cdc5] md:flex lg:right-10">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c9a66b]/50 text-[#c9a66b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path
              d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="12"
              cy="10"
              r="2.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </span>

        <span>Perpignan & alentours</span>
      </div>
    </section>
  );
}