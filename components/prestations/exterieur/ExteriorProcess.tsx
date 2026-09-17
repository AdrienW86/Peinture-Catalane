type Step = {
  number: string;
  title: string;
  text: string;
};

type ExteriorProcessProps = {
  steps: Step[];
};

export default function ExteriorProcess({
  steps,
}: ExteriorProcessProps) {
  return (
    <section className="overflow-hidden bg-[#e4e0d7] py-24 text-[#111719] md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#9f7b43]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Notre approche
              </p>
            </div>

            <h2 className="mt-7 font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl">
              Préparer
              <br />
              <span className="italic text-[#9f7b43]">
                avant de révéler.
              </span>
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group grid gap-5 border-t border-black/15 py-8 md:grid-cols-[80px_1fr] md:gap-8 md:py-10"
              >
                <span className="font-serif text-sm text-[#9f7b43]">
                  {step.number}
                </span>

                <div className="grid gap-5 sm:grid-cols-2">
                  <h3 className="font-serif text-3xl transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#62635d]">
                    {step.text}
                  </p>
                </div>

                {index === steps.length - 1 && (
                  <div className="hidden" aria-hidden="true" />
                )}
              </article>
            ))}

            <div className="border-t border-black/15" />
          </div>
        </div>
      </div>
    </section>
  );
}