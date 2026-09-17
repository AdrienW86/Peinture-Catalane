import Link from "next/link";

type ServiceLocalCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function ServiceLocalCTA({
  eyebrow = "Perpignan & alentours",
  title,
  description,
}: ServiceLocalCTAProps) {
  return (
    <section className="bg-[#e4e0d7] py-24 text-[#111719] md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9f7b43]">
            {eyebrow}
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <p className="text-sm leading-7 text-[#62635d]">
            {description}
          </p>

         <Link
          href="/contact"
          className="group mt-8 inline-flex items-center gap-5 bg-[#111719] px-7 py-4 text-sm font-medium text-[#f3f0e9] transition-colors duration-300 hover:bg-[#c9a66b] hover:!text-[#0b0f10]"
        >
          Nous contacter

          <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
        </div>
      </div>
    </section>
  );
}