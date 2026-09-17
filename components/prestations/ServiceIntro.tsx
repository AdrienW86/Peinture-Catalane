type ServiceIntroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  paragraphs: string[];
};

export default function ServiceIntro({
  eyebrow,
  title,
  accent,
  paragraphs,
}: ServiceIntroProps) {
  return (
    <section className="bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-3">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#9f7b43]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9f7b43]">
              {eyebrow}
            </p>
          </div>
        </div>

        <div className="md:col-span-8 md:col-start-5">
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            {title}
            <br />
            <span className="italic text-[#9f7b43]">{accent}</span>
          </h2>

          <div className="mt-10 grid gap-7 text-sm leading-7 text-[#62635d] sm:grid-cols-2">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}