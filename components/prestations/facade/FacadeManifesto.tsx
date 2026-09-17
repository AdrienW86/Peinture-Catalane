export default function FacadeManifesto() {
  return (
    <section className="overflow-hidden bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#9f7b43]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Façade & matière
              </p>
            </div>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[86px]">
              Respecter
              <br />
              <span className="italic text-[#9f7b43]">la matière.</span>
              <br />
              Révéler
              <br />
              l&apos;architecture.
            </h2>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
              <p className="text-sm leading-7 text-[#62635d]">
                Une façade ne se résume pas à sa couleur. Sa matière, ses
                ouvertures, ses reliefs et ses proportions participent à
                l&apos;identité du bâtiment.
              </p>

              <p className="text-sm leading-7 text-[#62635d]">
                Un projet de ravalement commence donc par l&apos;observation de
                l&apos;existant afin d&apos;envisager une remise en état et une
                finition cohérentes avec l&apos;ensemble.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}