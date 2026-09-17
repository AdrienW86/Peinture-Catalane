import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumb: BreadcrumbItem[];
};

export default function ServiceHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt,
  breadcrumb,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#0b0f10] text-[#f3f0e9]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f10]/95 via-[#0b0f10]/70 to-[#0b0f10]/15" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b0f10] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-end px-6 pb-20 pt-40 md:pb-24 lg:px-10 lg:pb-28">
        <div className="max-w-4xl">
          <Breadcrumb className="mb-8" items={breadcrumb} />

          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#c9a66b]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
              {eyebrow}
            </p>
          </div>

          <h1 className="font-serif text-5xl leading-[0.93] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[88px]">
            {title}
            <br />
            <span className="italic text-[#dfbf87]">{accent}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#d0cdc5] md:text-lg">
            {description}
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-6 bg-[#c9a66b] px-7 py-4 text-sm font-medium text-[#0b0f10] transition-colors hover:bg-[#dfbf87]"
          >
            Demander un devis

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}