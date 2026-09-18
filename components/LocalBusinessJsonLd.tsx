export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://peinture-occitane.fr/#business",

    name: "Peinture Occitane",

    legalName: "Alexandre Jacques André ROBBA",

    url: "https://peinture-occitane.fr",

    telephone: "+33743260451",

    email: "contact@peinture-occitane.fr",

    address: {
      "@type": "PostalAddress",
      streetAddress: "65 chemin des Charrettes",
      postalCode: "66380",
      addressLocality: "Pia",
      addressRegion: "Occitanie",
      addressCountry: "FR",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Perpignan",
      },
      {
        "@type": "AdministrativeArea",
        name: "Pyrénées-Orientales",
      },
    ],

    description:
      "Peinture Occitane réalise des travaux de peinture intérieure et extérieure ainsi que des travaux de ravalement et de façade dans les Pyrénées-Orientales.",

    identifier: {
      "@type": "PropertyValue",
      propertyID: "SIREN",
      value: "821489358",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}