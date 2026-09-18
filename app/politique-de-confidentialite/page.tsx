import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles du site Peinture Occitane.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Politique de confidentialité | Peinture Occitane",
    description:
      "Informations relatives au traitement des données personnelles sur le site Peinture Occitane.",
    url: "/politique-de-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-[#0b0f10] text-[#f3f0e9]">
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44 lg:pt-52">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-24 hidden select-none font-serif text-[220px] italic leading-none text-white/[0.018] lg:block"
        >
          Privé
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Breadcrumb
            className="mb-12"
            items={[
              { label: "Accueil", href: "/" },
              { label: "Politique de confidentialité" },
            ]}
          />

          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a66b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Protection des données
              </p>
            </div>

            <h1 className="mt-8 font-serif text-5xl leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[96px]">
              Politique de
              <br />
              <span className="italic text-[#dfbf87]">
                confidentialité.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="bg-[#f0ede5] py-20 text-[#111719] md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 md:grid-cols-12 md:gap-10">
            <aside className="md:col-span-3">
              <div className="md:sticky md:top-32">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9f7b43]">
                  Vos données
                </p>

                <p className="mt-6 max-w-xs text-sm leading-7 text-[#62635d]">
                  Cette page explique quelles données sont traitées lorsque
                  vous utilisez le site Peinture Occitane et comment exercer
                  vos droits.
                </p>

                <div className="mt-8 h-px w-12 bg-[#c9a66b]" />
              </div>
            </aside>

            <div className="md:col-span-7 md:col-start-5">
              <PrivacySection
                number="01"
                title="Responsable du traitement"
              >
                <p>
                  Le responsable du traitement des données personnelles
                  collectées sur le site peinture-occitane.fr est :
                </p>

                <div className="mt-6 space-y-2 text-[#343936]">
                  <p>
                    <strong className="font-medium text-[#111719]">
                      Alexandre Jacques André ROBBA
                    </strong>
                    , entrepreneur individuel, exerçant sous le nom commercial
                    Peinture Occitane.
                  </p>

                  <p>
                    65 chemin des Charrettes
                    <br />
                    66380 Pia
                    <br />
                    France
                  </p>

                  <p>
                    <a
                      href="mailto:contact@peinture-occitane.fr"
                      className="border-b border-[#9f7b43] transition-colors hover:text-[#9f7b43]"
                    >
                      contact@peinture-occitane.fr
                    </a>
                  </p>

                  <p>
                    <a
                      href="tel:+33743260451"
                      className="transition-colors hover:text-[#9f7b43]"
                    >
                      07 43 26 04 51
                    </a>
                  </p>
                </div>
              </PrivacySection>

              <PrivacySection
                number="02"
                title="Données collectées"
              >
                <p>
                  Lorsque vous utilisez le formulaire de contact, les données
                  susceptibles d&apos;être collectées sont :
                </p>

                <ul className="mt-6 space-y-2 text-[#343936]">
                  <li>— le type de projet sélectionné ;</li>
                  <li>— votre nom ;</li>
                  <li>— votre adresse e-mail ;</li>
                  <li>— votre numéro de téléphone, si vous le renseignez ;</li>
                  <li>— la ville du chantier ;</li>
                  <li>— le contenu de votre demande.</li>
                </ul>

                <p className="mt-6">
                  Les champs signalés par un astérisque dans le formulaire sont
                  obligatoires pour permettre le traitement de la demande. Le
                  numéro de téléphone et le type de projet peuvent être laissés
                  vides.
                </p>
              </PrivacySection>

              <PrivacySection
                number="03"
                title="Finalité et base légale"
              >
                <p>
                  Les informations transmises par le formulaire sont utilisées
                  afin de recevoir votre demande, comprendre votre projet, vous
                  recontacter et, le cas échéant, préparer les échanges
                  nécessaires à l&apos;établissement d&apos;une proposition ou
                  d&apos;un devis.
                </p>

                <p className="mt-5">
                  Le traitement des demandes adressées spontanément par
                  l&apos;utilisateur est fondé sur les démarches
                  précontractuelles effectuées à sa demande lorsqu&apos;elles
                  concernent un projet susceptible de donner lieu à une
                  prestation.
                </p>
              </PrivacySection>

              <PrivacySection
                number="04"
                title="Destinataires"
              >
                <p>
                  Les données sont destinées à Peinture Occitane et aux
                  prestataires techniques intervenant uniquement dans la mesure
                  nécessaire au fonctionnement du site et à la transmission des
                  demandes.
                </p>

                <p className="mt-5">
                  L&apos;envoi des messages issus du formulaire est assuré à
                  l&apos;aide du service Resend.
                </p>

                <p className="mt-5">
                  Les données ne sont pas utilisées par Peinture Occitane pour
                  vendre des fichiers de contacts.
                </p>
              </PrivacySection>

              <PrivacySection
                number="05"
                title="Durée de conservation"
              >
                <p>
                  Lorsqu&apos;une demande de contact ne donne pas lieu à une
                  relation contractuelle, les informations reçues via le
                  formulaire sont conservées pendant une durée maximale de
                  12 mois à compter du dernier échange relatif à la demande,
                  puis supprimées.
                </p>

                <p className="mt-5">
                  Lorsqu&apos;une relation contractuelle est engagée, certaines
                  informations peuvent être conservées pendant des durées
                  différentes lorsque cela est nécessaire à la gestion de la
                  relation ou au respect d&apos;obligations légales,
                  comptables ou fiscales.
                </p>
              </PrivacySection>

              <PrivacySection
                number="06"
                title="Hébergement et transmission technique"
              >
                <p>
                  Le site est hébergé par Vercel Inc. Le formulaire utilise
                  également Resend pour assurer la transmission des messages
                  électroniques.
                </p>

                <p className="mt-5">
                  L&apos;utilisation de ces prestataires peut impliquer des
                  traitements ou transferts de données en dehors de
                  l&apos;Espace économique européen, notamment vers les
                  États-Unis, conformément aux mécanismes de protection
                  applicables mis en œuvre par les prestataires concernés.
                </p>
              </PrivacySection>

              <PrivacySection
                number="07"
                title="Mesure d’audience"
              >
                <p>
                  Le site utilise Vercel Analytics afin d&apos;obtenir des
                  informations agrégées sur sa fréquentation et ses
                  performances.
                </p>

                <p className="mt-5">
                  Ces mesures permettent notamment de mieux comprendre
                  l&apos;utilisation générale du site et d&apos;en améliorer
                  le fonctionnement.
                </p>
              </PrivacySection>

              <PrivacySection
                number="08"
                title="Vos droits"
              >
                <p>
                  Conformément à la réglementation applicable en matière de
                  protection des données personnelles, vous pouvez, selon les
                  conditions prévues par les textes, demander l&apos;accès à
                  vos données, leur rectification, leur effacement ou la
                  limitation de leur traitement.
                </p>

                <p className="mt-5">
                  Pour exercer vos droits ou poser une question relative au
                  traitement de vos données, vous pouvez écrire à :
                </p>

                <p className="mt-5">
                  <a
                    href="mailto:contact@peinture-occitane.fr"
                    className="border-b border-[#9f7b43] text-[#111719] transition-colors hover:text-[#9f7b43]"
                  >
                    contact@peinture-occitane.fr
                  </a>
                </p>

                <p className="mt-5">
                  Vous pouvez également adresser votre demande par courrier à :
                  Peinture Occitane — Alexandre Jacques André ROBBA, 65 chemin
                  des Charrettes, 66380 Pia, France.
                </p>

                <p className="mt-5">
                  Si vous estimez, après avoir contacté Peinture Occitane, que
                  vos droits ne sont pas respectés, vous pouvez introduire une
                  réclamation auprès de la CNIL.
                </p>
              </PrivacySection>

              <PrivacySection
                number="09"
                title="Sécurité"
              >
                <p>
                  Des mesures techniques et organisationnelles adaptées sont
                  mises en œuvre afin de limiter les risques d&apos;accès non
                  autorisé, de perte, d&apos;altération ou de divulgation des
                  données traitées dans le cadre du site.
                </p>
              </PrivacySection>

              <PrivacySection
                number="10"
                title="Mise à jour"
              >
                <p>
                  La présente politique peut être modifiée afin de tenir compte
                  d&apos;une évolution du site, des services utilisés ou de la
                  réglementation applicable.
                </p>

                <p className="mt-5">
                  Dernière mise à jour : 18 septembre 2026.
                </p>

                <p className="mt-8">
                  Consultez également les{" "}
                  <Link
                    href="/mentions-legales"
                    className="border-b border-[#9f7b43] text-[#111719] transition-colors hover:text-[#9f7b43]"
                  >
                    mentions légales
                  </Link>
                  .
                </p>
              </PrivacySection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PrivacySection({
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