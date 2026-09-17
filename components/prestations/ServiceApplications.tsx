type ApplicationItem = {
  number: string;
  title: string;
  text: string;
};

type ServiceApplicationsProps = {
  eyebrow: string;
  title: string;
  accent: string;
  items: ApplicationItem[];
};

export default function ServiceApplications({
  eyebrow,
  title,
  accent,
  items,
}: ServiceApplicationsProps) {
  return (
    <section className="bg-[#0b0f10] py-24 text-[#f3f0e9] md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a66b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                {eyebrow}
              </p>
            </div>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
              {title}
              <br />
              <span className="italic text-[#dfbf87]">{accent}</span>
            </h2>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 md:mt-28">
          {items.map((item) => (
            <article
              key={item.number}
              className="grid gap-5 border-b border-white/10 py-9 md:grid-cols-12 md:items-center md:gap-8 md:py-11"
            >
              <div className="md:col-span-1">
                <span className="font-serif text-lg text-[#c9a66b]">
                  {item.number}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="font-serif text-3xl md:text-4xl">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-6">
                <p className="max-w-xl text-sm leading-7 text-[#94958f]">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}