type AnalysisPoint = {
  number: string;
  title: string;
  text: string;
};

type FacadeAnalysisProps = {
  points: AnalysisPoint[];
};

export default function FacadeAnalysis({
  points,
}: FacadeAnalysisProps) {
  return (
    <section className="overflow-hidden bg-[#0b0f10] py-24 text-[#f3f0e9] md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a66b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Avant d&apos;intervenir
              </p>
            </div>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <h2 className="font-serif text-5xl leading-[0.93] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Comprendre
              <br />
              <span className="italic text-[#dfbf87]">la façade.</span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#94958f]">
              Observer l&apos;existant permet de mieux définir la préparation
              nécessaire et l&apos;aspect recherché pour l&apos;ensemble du
              bâtiment.
            </p>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          {points.map((point) => (
            <article
              key={point.number}
              className="group grid gap-6 border-t border-white/10 py-9 md:grid-cols-12 md:items-start md:gap-8 md:py-12"
            >
              <div className="md:col-span-1">
                <span className="font-serif text-lg text-[#c9a66b]">
                  {point.number}
                </span>
              </div>

              <div className="md:col-span-5">
                <h3 className="font-serif text-3xl transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                  {point.title}
                </h3>
              </div>

              <div className="md:col-span-5 md:col-start-8">
                <p className="max-w-md text-sm leading-7 text-[#94958f]">
                  {point.text}
                </p>
              </div>
            </article>
          ))}

          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}