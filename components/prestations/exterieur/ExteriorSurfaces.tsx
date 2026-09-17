type Surface = {
  number: string;
  title: string;
  text: string;
};

type ExteriorSurfacesProps = {
  surfaces: Surface[];
};

export default function ExteriorSurfaces({
  surfaces,
}: ExteriorSurfacesProps) {
  return (
    <section className="overflow-hidden bg-[#0b0f10] py-24 text-[#f3f0e9] md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a66b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Les surfaces
              </p>
            </div>

            <h2 className="mt-7 font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Un même extérieur.
              <br />
              <span className="italic text-[#dfbf87]">
                Plusieurs matières.
              </span>
            </h2>
          </div>

          <div className="md:col-span-3 md:col-start-10 md:self-end">
            <p className="text-sm leading-7 text-[#94958f]">
              Chaque élément possède ses propres caractéristiques. Le travail
              commence par comprendre le support avant d&apos;envisager sa
              finition.
            </p>
          </div>
        </div>

        <div className="mt-20 grid border-l border-t border-white/10 sm:grid-cols-2 md:mt-28">
          {surfaces.map((surface) => (
            <article
              key={surface.number}
              className="group min-h-[320px] border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.03] md:min-h-[390px] md:p-10 lg:p-12"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-lg text-[#c9a66b]">
                    {surface.number}
                  </span>

                  <span
                    className="text-xl text-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#c9a66b]"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <div className="mt-24">
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl">
                    {surface.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#94958f]">
                    {surface.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}