type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

type ServiceProcessProps = {
  eyebrow?: string;
  title: string;
  accent: string;
  steps: ProcessStep[];
};

export default function ServiceProcess({
  eyebrow = "Notre méthode",
  title,
  accent,
  steps,
}: ServiceProcessProps) {
  return (
    <section className="bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#9f7b43]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-7 font-serif text-5xl leading-[0.98] tracking-[-0.025em] sm:text-6xl">
              {title}
              <br />
              <span className="italic text-[#9f7b43]">{accent}</span>
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            {steps.map((step) => (
              <article
                key={step.number}
                className="grid grid-cols-[50px_1fr] gap-5 border-b border-black/15 py-7 first:border-t"
              >
                <span className="font-serif text-sm text-[#9f7b43]">
                  {step.number}
                </span>

                <div>
                  <h3 className="font-serif text-2xl">{step.title}</h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#62635d]">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}