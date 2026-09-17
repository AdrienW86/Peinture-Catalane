import Image from "next/image";

type ServiceEditorialImageProps = {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
};

export default function ServiceEditorialImage({
  src,
  alt,
  caption,
  credit = "Peinture Catalane",
}: ServiceEditorialImageProps) {
  return (
    <section className="bg-[#f0ede5] pb-24 md:pb-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        <div className="mt-5 flex items-center justify-between gap-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9f7b43]">
            {caption}
          </p>

          <p className="hidden text-[10px] text-[#77776f] sm:block">
            {credit}
          </p>
        </div>
      </div>
    </section>
  );
}