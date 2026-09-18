import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Peinture Occitane, entreprise exploitée par Alexandre Jacques André Robba.",
  alternates: {
    canonical: "/mentions-legales",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mentions légales | Peinture Occitane",
    description:
      "Informations légales relatives au site Peinture Occitane.",
    url: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-[#0b0f10] text-[#f3f0e9]">
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44 lg:pt-52">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-24 hidden select-none font-serif text-[220px] italic leading-none text-white/[0.018] lg:block"
        >
          Légal
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Breadcrumb
            className="mb-12"
            items={[
              { label: "Accueil", href: "/" },
              { label: "Mentions légales" },
            ]}
          />

          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a66b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Informations légales
              </p>
            </div>

            <h1 className="mt-8 font-serif text-6xl leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[96px]">
              Mentions
              <br />
              <span className="italic text-[#dfbf87]">légales.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="bg-[#f0ede5] py-20 text-[#111719] md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 md:grid-cols-12 md:gap-10">
            {/* SOMMAIRE */}
            <aside className="md:col-span-3">
              <div className="md:sticky md:top-32">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9f7b43]">
                  Peinture Occitane
                </p>

                <p className="mt-6 max-w-xs text-sm leading-7 text-[#62635d]">
                  Informations relatives à l&apos;éditeur et à l&apos;hébergement
                  du site peinture-occitane.fr.
                </p>

                <div className="mt-8 h-px w-12 bg-[#c9a66b]" />
              </div>
            </aside>

            {/* TEXTE LÉGAL */}
            <div className="md:col-span-7 md:col-start-5">
              <LegalSection number="01" title="Éditeur du site">
                <p>
                  Le site Peinture Occitane est édité par :
                </p>

                <div className="mt-6 space-y-2 text-[#343936]">
                  <p>
                    <strong className="font-medium text-[#111719]">
                      Nom commercial :
                    </strong>{" "}
                    Peinture Occitane
                  </p>

                  <p>
                    <strong className="font-medium text-[#111719]">
                      Entrepreneur :
                    </strong>{" "}
                    Alexandre Jacques André ROBBA
                  </p>

                  <p>
                    <strong className="font-medium text-[#111719]">
                      Forme juridique :
                    </strong>{" "}
                    Entrepreneur individuel
                  </p>

                  <p>
                    <strong className="font-medium text-[#111719]">
                      SIREN :
                    </strong>{" "}
                    821 489 358
                  </p>

                  <p>
                    <strong className="font-medium text-[#111719]">
                      SIRET :
                    </strong>{" "}
                    821 489 358 00019
                  </p>

                  <p>
                    <strong className="font-medium text-[#111719]">
                      Immatriculation au RNE :
                    </strong>{" "}
                    11 juillet 2016
                  </p>

                  <p>
                    <strong className="font-medium text-[#111719]">
                      Adresse :
                    </strong>{" "}
                    65 chemin des Charrettes, 66380 Pia, France
                  </p>

                  <p>
                    <strong className="font-medium text-[#111719]">
                      Téléphone :
                    </strong>{" "}
                    <a
                      href="tel:+33743260451"
                      className="transition-colors hover:text-[#9f7b43]"
                    >
                      07 43 26 04 51
                    </a>
                  </p>

                  <p>
                    <strong className="font-medium text-[#111719]">
                      E-mail :
                    </strong>{" "}
                    <a
                      href="mailto:contact@peinture-occitane.fr"
                      className="transition-colors hover:text-[#9f7b43]"
                    >
                      contact@peinture-occitane.fr
                    </a>
                  </p>
                </div>
              </LegalSection>

              <LegalSection number="02" title="Activité">
                <p>
                  L&apos;activité principale déclarée au Registre national des
                  entreprises est :
                </p>

                <p className="mt-5 text-[#343936]">
                  <strong className="font-medium text-[#111719]">
                    Couverture, charpente, zinguerie
                  </strong>
                  , sous le code APE{" "}
                  <strong className="font-medium text-[#111719]">
                    4391B — Travaux de couverture par éléments.
                  </strong>
                </p>

                <p className="mt-5">
                  Les autres activités déclarées comprennent notamment
                  l&apos;étanchéité, les travaux de ravalements et de façades
                  ainsi que la peinture intérieure et extérieure.
                </p>
              </LegalSection>

              <LegalSection number="03" title="Hébergement">
                <p>
                  Le site peinture-occitane.fr est hébergé par :
                </p>

                <div className="mt-6 space-y-2 text-[#343936]">
                  <p>
                    <strong className="font-medium text-[#111719]">
                      Vercel Inc.
                    </strong>
                  </p>

                  <p>
                    440 N Barranca Avenue #4133
                    <br />
                    Covina, CA 91723
                    <br />
                    États-Unis
                  </p>
                </div>
              </LegalSection>

              <LegalSection number="04" title="Propriété intellectuelle">
                <p>
                  Les éléments présents sur ce site, notamment les textes,
                  éléments graphiques, identité visuelle, mise en page et
                  autres contenus originaux, sont protégés par les dispositions
                  applicables en matière de propriété intellectuelle.
                </p>

                <p className="mt-5">
                  Toute reproduction, représentation, adaptation ou
                  exploitation non autorisée de tout ou partie du site est
                  interdite, sauf autorisation préalable du titulaire des
                  droits concernés ou lorsque la loi l&apos;autorise.
                </p>
              </LegalSection>

              <LegalSection number="05" title="Responsabilité">
                <p>
                  Peinture Occitane s&apos;efforce de fournir sur ce site des
                  informations exactes et à jour. Toutefois, les informations
                  présentées ont un caractère général et peuvent être modifiées
                  ou mises à jour.
                </p>

                <p className="mt-5">
                  L&apos;utilisateur reste responsable de l&apos;usage qu&apos;il
                  fait des informations disponibles sur le site.
                </p>
              </LegalSection>

              <LegalSection number="06" title="Données personnelles">
                <p>
                  Des données personnelles peuvent être collectées lorsque vous
                  utilisez le formulaire de contact du site.
                </p>

                <p className="mt-5">
                  Pour connaître les données traitées, leurs finalités, leurs
                  destinataires et les modalités d&apos;exercice de vos droits,
                  consultez notre{" "}
                  <Link
                    href="/politique-de-confidentialite"
                    className="border-b border-[#9f7b43] text-[#111719] transition-colors hover:text-[#9f7b43]"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>

                <p className="mt-5">
                  Pour toute demande relative à vos données personnelles, vous
                  pouvez également écrire à{" "}
                  <a
                    href="mailto:contact@peinture-occitane.fr"
                    className="border-b border-[#9f7b43] text-[#111719] transition-colors hover:text-[#9f7b43]"
                  >
                    contact@peinture-occitane.fr
                  </a>
                  .
                </p>
              </LegalSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-black/10 py-10 first:pt-0 md:py-14">
      <div className="flex items-baseline gap-5">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-[#9f7b43]">
          {number}
        </span>

        <h2 className="font-serif text-3xl tracking-[-0.02em] text-[#111719] sm:text-4xl">
          {title}
        </h2>
      </div>

      <div className="mt-7 text-sm leading-7 text-[#62635d]">
        {children}
      </div>
    </section>
  );
}