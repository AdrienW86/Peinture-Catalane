type Step = {
  number: string;
  title: string;
  text: string;
};

type FacadeProcessProps = {
  steps: Step[];
};

export default function FacadeProcess({
  steps,
}: FacadeProcessProps) {
  return (
    <section className="overflow-hidden bg-[#e4e0d7] py-24 text-[#111719] md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#9f7b43]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                Les étapes
              </p>
            </div>

            <h2 className="mt-7 font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              De
              <br />
              l&apos;existant
              <br />
              <span className="italic text-[#9f7b43]">à la finition.</span>
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`border-t border-black/15 py-9 ${
                  index % 2 === 1 ? "md:pl-16" : ""
                }`}
              >
                <div className="grid grid-cols-[55px_1fr] gap-5">
                  <span className="font-serif text-sm text-[#9f7b43]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-[#62635d]">
                      {step.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <div className="border-t border-black/15" />
          </div>
        </div>
      </div>
    </section>
  );
}