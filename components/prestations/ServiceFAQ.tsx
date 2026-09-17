type FAQItem = {
  question: string;
  answer: string;
};

type ServiceFAQProps = {
  title: string;
  items: FAQItem[];
};

export default function ServiceFAQ({
  title,
  items,
}: ServiceFAQProps) {
  return (
    <section className="bg-[#f0ede5] py-24 text-[#111719] md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#9f7b43]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
              Questions fréquentes
            </p>
          </div>

          <h2 className="mt-7 whitespace-pre-line font-serif text-4xl leading-none sm:text-5xl">
            {title}
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-black/15"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7">
                <h3 className="font-serif text-xl leading-snug md:text-2xl">
                  {faq.question}
                </h3>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/20 text-[#9f7b43] transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="max-w-2xl pb-7 pr-12 text-sm leading-7 text-[#62635d]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}