import Link from "next/link";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Prestations", href: "/prestations" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis", href: "/#avis" },
  { label: "Contact", href: "/contact" },
];

const services = [
  {
    label: "Peinture intérieure",
    href: "/prestations/peinture-interieure",
  },
  {
    label: "Peinture extérieure",
    href: "/prestations/peinture-exterieure",
  },
  {
    label: "Ravalement de façade",
    href: "/prestations/ravalement-facade",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080b0c] text-[#f3f0e9]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Partie principale */}
        <div className="grid gap-14 border-b border-white/10 py-16 md:grid-cols-12 md:gap-8 md:py-20">
          {/* Marque */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-4"
              aria-label="Peinture Catalane - Accueil"
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="h-11 w-11 text-[#c9a66b]"
                aria-hidden="true"
              >
                <path
                  d="M7 35L24 9L41 35"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M15 35L24 21L33 35"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M24 9V21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>

              <div>
                <p className="font-serif text-xl tracking-[0.08em]">
                  PEINTURE CATALANE
                </p>

                <p className="mt-1 text-[8px] font-medium tracking-[0.28em] text-[#c9a66b]">
                  PEINTURE & RÉNOVATION
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#858781]">
              Travaux de peinture intérieure, extérieure et rénovation à
              Perpignan et ses alentours.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
              Navigation
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-[#aaa8a2] transition-colors hover:text-[#f3f0e9]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Prestations */}
          <div className="md:col-span-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
              Prestations
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="w-fit text-sm text-[#aaa8a2] transition-colors hover:text-[#f3f0e9]"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Localisation */}
          <div className="md:col-span-2">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
              Secteur
            </p>

            <p className="mt-6 text-sm leading-7 text-[#aaa8a2]">
              Perpignan
              <br />
              Pyrénées-Orientales
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-3 text-xs font-medium text-[#f3f0e9]"
            >
              Nous contacter
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-5 py-7 text-[10px] text-[#666963] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Peinture Catalane. Tous droits
            réservés.
          </p>

          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-[#aaa8a2]"
            >
              Mentions légales
            </Link>

            <Link
              href="/politique-de-confidentialite"
              className="transition-colors hover:text-[#aaa8a2]"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}