import Link from "next/link";

type NavigationLink = {
  label: string;
  href: string;
};

type ServiceNavigationProps = {
  links: NavigationLink[];
};

export default function ServiceNavigation({
  links,
}: ServiceNavigationProps) {
  return (
    <section className="border-t border-white/10 bg-[#0b0f10] py-16 text-[#f3f0e9]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="font-serif text-2xl md:text-3xl">
          Découvrir nos autres prestations
        </p>

        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border border-white/15 px-5 py-3 text-xs transition-colors hover:border-[#c9a66b] hover:text-[#c9a66b]"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}