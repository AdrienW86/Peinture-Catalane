import Link from "next/link";

export default function ExteriorLocalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 font-serif text-[260px] leading-none text-black/[0.025] lg:block"
        aria-hidden="true"
      >
        66
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
            Perpignan & alentours
          </p>

          <h2 className="mt-7 font-serif text-5xl leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Votre extérieur mérite
            <br />
            <span className="italic text-[#9f7b43]">
              la même attention.
            </span>
          </h2>
        </div>

        <div className="md:col-span-4 md:col-start-9 md:self-end">
          <p className="text-sm leading-7 text-[#62635d]">
            Vous souhaitez rénover une façade, des boiseries ou d&apos;autres
            surfaces extérieures à Perpignan ou dans les environs ?
            Présentez-nous votre projet.
          </p>

         <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-6 bg-[#111719] px-7 py-4 text-sm font-medium text-[#f3f0e9] transition-colors duration-300 hover:bg-[#c9a66b] hover:!text-[#0b0f10]"
        >
            Demander un devis

            <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
            </span>
        </Link>
        </div>
      </div>
    </section>
  );
}