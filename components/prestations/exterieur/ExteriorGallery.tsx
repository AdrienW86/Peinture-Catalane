import Image from "next/image";

export default function ExteriorGallery() {
  return (
    <section className="overflow-hidden bg-[#f0ede5] pb-24 md:pb-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-5 md:grid-cols-12 md:gap-7">
          {/* IMAGE PRINCIPALE */}
          <div className="md:col-span-8">
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[5/4]">
              <Image
                src="/images/peinture-exterieure-detail.jpg"
                alt="Architecture extérieure aux tons clairs et minéraux"
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* IMAGE VERTICALE */}
          <div className="md:col-span-4 md:pt-28">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/peinture-exterieure-architecture.jpg"
                alt="Détail architectural d'une façade extérieure"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover"
              />
            </div>

            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-8 bg-[#9f7b43]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9f7b43]">
                Matière · lumière · architecture
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-2">
            <p className="font-serif text-2xl leading-snug text-[#30322f] md:text-3xl">
              La couleur dialogue avec les volumes,
              <span className="italic text-[#9f7b43]">
                {" "}la lumière et les matières.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}