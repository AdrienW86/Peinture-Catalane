import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111719] py-24 text-[#f3f0e9] md:py-32 lg:py-40"
    >
      {/* Décoration */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          {/* Gauche */}
          <div className="md:col-span-8">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a66b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Parlons de votre projet
              </p>
            </div>

            <h2 className="max-w-5xl font-serif text-5xl leading-[0.93] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Une nouvelle couleur
              <br />
              pour votre{" "}
              <span className="italic text-[#dfbf87]">projet ?</span>
            </h2>

            <p className="mt-9 max-w-xl text-base leading-8 text-[#aaa8a2]">
              Vous avez un projet de peinture ou de rénovation à Perpignan et
              ses alentours ? Présentez-nous votre besoin afin que nous
              puissions échanger sur votre projet.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-6 bg-[#c9a66b] px-8 py-5 text-sm font-medium text-[#0b0f10] transition-colors duration-300 hover:bg-[#dfbf87]"
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

          {/* Droite */}
          <div className="flex flex-col justify-end md:col-span-4 md:border-l md:border-white/10 md:pl-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9a66b]">
              Zone d&apos;intervention
            </p>

            <p className="mt-5 font-serif text-3xl leading-tight">
              Perpignan
              <br />
              <span className="text-[#8f918c]">& alentours</span>
            </p>

            <div className="mt-9 h-px w-full bg-white/10" />

            <p className="mt-7 text-sm leading-7 text-[#94958f]">
              Peinture intérieure, extérieure, rénovation et ravalement de
              façade.
            </p>
          </div>
        </div>

        {/* Ligne basse */}
        <div className="mt-20 flex items-center gap-5 border-t border-white/10 pt-8 md:mt-28">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a66b]/40 text-[#c9a66b]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
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
          </div>

          <p className="text-xs tracking-[0.08em] text-[#94958f]">
            Peinture Occitane — Perpignan, Pyrénées-Orientales
          </p>
        </div>
      </div>

      {/* Texte décoratif */}
      <div
        className="pointer-events-none absolute -bottom-10 right-0 select-none font-serif text-[120px] leading-none text-white/[0.018] sm:text-[180px] lg:text-[250px]"
        aria-hidden="true"
      >
        PERPIGNAN
      </div>
    </section>
  );
}