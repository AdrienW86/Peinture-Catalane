// ─────────────────────────────────────────────────────────────
// DEMO CONTENT
// Les projets ci-dessous sont fictifs et servent uniquement
// à la maquette client.
//
// À remplacer par les véritables chantiers avant mise en ligne.
// ─────────────────────────────────────────────────────────────

export type Project = {
  slug: string;

  title: string;
  shortTitle: string;

  city: string;
  department: string;

  category:
    | "Peinture intérieure"
    | "Peinture extérieure"
    | "Ravalement de façade"
    | "Rénovation";

  excerpt: string;
  introduction: string;

  work: string[];

  image: string;
  imageAlt: string;

  gallery: {
    src: string;
    alt: string;
  }[];

  seo: {
    title: string;
    description: string;
  };

  featured?: boolean;
};

export const projects: Project[] = [
  // ───────────────────────────────────────────────────────────
  // 01 — PERPIGNAN · VILLA
  // ───────────────────────────────────────────────────────────
  {
    slug: "peinture-interieure-villa-perpignan",

    title: "Rénovation intérieure d’une villa à Perpignan",
    shortTitle: "Villa aux tons minéraux",

    city: "Perpignan",
    department: "Pyrénées-Orientales",

    category: "Peinture intérieure",

    excerpt:
      "Rénovation des peintures d’un espace de vie lumineux autour d’une palette douce et minérale.",

    introduction:
      "Ce projet de rénovation intérieure met l’accent sur la lumière, la continuité des surfaces et l’équilibre des tonalités dans les différentes pièces de la maison.",

    work: [
      "Préparation des murs",
      "Reprise des surfaces",
      "Peinture des murs et plafonds",
      "Finitions",
    ],

    image: "/images/realisations/villa-perpignan/hero.jpg",

    imageAlt:
      "Pièce de vie aux murs minéraux rénovés dans une villa à Perpignan",

    gallery: [
      {
        src: "/images/realisations/villa-perpignan/detail-01.jpg",
        alt: "Détail d’un angle mural aux tons minéraux dans une villa à Perpignan",
      },
      {
        src: "/images/realisations/villa-perpignan/detail-02.jpg",
        alt: "Lumière naturelle sur une finition murale intérieure aux tons ivoire",
      },
    ],

    seo: {
      title: "Peinture intérieure d’une villa à Perpignan",
      description:
        "Découvrez un projet de rénovation et de peinture intérieure d’une villa à Perpignan par Peinture Occitane.",
    },

    featured: true,
  },

  // ───────────────────────────────────────────────────────────
  // 02 — THUIR · FAÇADE
  // ───────────────────────────────────────────────────────────
  {
    slug: "ravalement-facade-thuir",

    title: "Ravalement d’une façade à Thuir",
    shortTitle: "Maison au pied des Aspres",

    city: "Thuir",
    department: "Pyrénées-Orientales",

    category: "Ravalement de façade",

    excerpt:
      "Remise en valeur d’une maison aux tonalités minérales, entre architecture méditerranéenne et paysage des Aspres.",

    introduction:
      "Ce projet de façade s’articule autour d’une palette claire et minérale, pensée pour accompagner l’architecture de la maison, ses menuiseries sombres et son environnement méditerranéen.",

    work: [
      "Observation de la façade",
      "Préparation des surfaces",
      "Remise en état des supports",
      "Finition de façade",
    ],

    image: "/images/realisations/facade-thuir/hero.jpg",

    imageAlt:
      "Façade rénovée d’une maison méditerranéenne à Thuir",

    gallery: [
      {
        src: "/images/realisations/facade-thuir/detail-01.jpg",
        alt: "Fenêtre et volets sur une façade aux tons minéraux à Thuir",
      },
      {
        src: "/images/realisations/facade-thuir/detail-02.jpg",
        alt: "Détail du soubassement et des finitions d’une façade à Thuir",
      },
    ],

    seo: {
      title: "Ravalement de façade à Thuir",
      description:
        "Découvrez un projet de rénovation et de ravalement de façade à Thuir dans les Pyrénées-Orientales.",
    },
  },

  // ───────────────────────────────────────────────────────────
  // 03 — SAINT-ESTÈVE · RÉNOVATION
  // ───────────────────────────────────────────────────────────
  {
    slug: "renovation-maison-saint-esteve",

    title: "Rénovation d’une maison à Saint-Estève",
    shortTitle: "Maison lumineuse",

    city: "Saint-Estève",
    department: "Pyrénées-Orientales",

    category: "Rénovation",

    excerpt:
      "Rénovation des espaces intérieurs autour d’une palette grège et argile pensée pour accompagner la lumière naturelle.",

    introduction:
      "Cette rénovation intérieure associe des tonalités grège et argile afin de redonner de la cohérence aux volumes, de souligner les passages entre les espaces et de conserver une atmosphère lumineuse.",

    work: [
      "Préparation des supports",
      "Reprises ponctuelles",
      "Mise en peinture",
      "Finitions",
    ],

    image: "/images/realisations/maison-saint-esteve/hero.jpg",

    imageAlt:
      "Pièce de vie rénovée aux tons grège et argile dans une maison à Saint-Estève",

    gallery: [
      {
        src: "/images/realisations/maison-saint-esteve/detail-01.jpg",
        alt: "Escalier et passage aux teintes grège et argile dans une maison rénovée à Saint-Estève",
      },
    ],

    seo: {
      title: "Rénovation et peinture d’une maison à Saint-Estève",
      description:
        "Découvrez un projet de rénovation intérieure et de peinture d’une maison à Saint-Estève par Peinture Occitane.",
    },
  },

  // ───────────────────────────────────────────────────────────
  // 04 — CANET-EN-ROUSSILLON · EXTÉRIEUR
  // ───────────────────────────────────────────────────────────
  {
    slug: "peinture-exterieure-maison-canet-en-roussillon",

    title: "Peinture extérieure d’une maison à Canet-en-Roussillon",
    shortTitle: "Maison méditerranéenne",

    city: "Canet-en-Roussillon",
    department: "Pyrénées-Orientales",

    category: "Peinture extérieure",

    excerpt:
      "Une palette claire associée à des volets vert sauge pour accompagner le caractère méditerranéen de la maison.",

    introduction:
      "Le projet extérieur s’appuie sur des tonalités claires et des menuiseries vert sauge afin de conserver une lecture douce de l’architecture et de l’intégrer naturellement à son environnement résidentiel.",

    work: [
      "Préparation des surfaces",
      "Mise en peinture extérieure",
      "Traitement des éléments architecturaux",
      "Finitions",
    ],

    image: "/images/realisations/maison-canet/hero.jpg",

    imageAlt:
      "Maison aux façades claires et volets vert sauge à Canet-en-Roussillon",

    gallery: [
      {
        src: "/images/realisations/maison-canet/detail-01.jpg",
        alt: "Détail d’une façade claire et de volets vert sauge à Canet-en-Roussillon",
      },
    ],

    seo: {
      title: "Peinture extérieure à Canet-en-Roussillon",
      description:
        "Découvrez un projet de peinture extérieure d’une maison à Canet-en-Roussillon par Peinture Occitane.",
    },
  },

  // ───────────────────────────────────────────────────────────
  // 05 — PERPIGNAN · APPARTEMENT
  // ───────────────────────────────────────────────────────────
  {
    slug: "peinture-appartement-perpignan",

    title: "Mise en peinture d’un appartement à Perpignan",
    shortTitle: "Appartement de caractère",

    city: "Perpignan",
    department: "Pyrénées-Orientales",

    category: "Peinture intérieure",

    excerpt:
      "Une rénovation intérieure qui associe murs ivoire, tonalité olive et boiseries claires dans un appartement de caractère.",

    introduction:
      "La mise en peinture de cet appartement joue sur le contraste entre une base ivoire lumineuse et une tonalité olive plus profonde, tout en mettant en valeur les moulures, les boiseries et les volumes existants.",

    work: [
      "Préparation des murs",
      "Reprise des boiseries",
      "Mise en peinture des murs et plafonds",
      "Finitions",
    ],

    image: "/images/realisations/appartement-perpignan/hero.jpg",

    imageAlt:
      "Appartement rénové aux tons ivoire et olive à Perpignan",

    gallery: [
      {
        src: "/images/realisations/appartement-perpignan/detail-01.jpg",
        alt: "Détail d’un mur olive, de moulures et de boiseries peintes dans un appartement à Perpignan",
      },
      {
        src: "/images/realisations/appartement-perpignan/detail-02.jpg",
        alt: "Séjour lumineux aux murs ivoire et moulures rénovées dans un appartement à Perpignan",
      },
    ],

    seo: {
      title: "Peinture d’un appartement à Perpignan",
      description:
        "Découvrez un projet de peinture intérieure d’un appartement à Perpignan, entre murs ivoire, tonalité olive et boiseries.",
    },
  },

  // ───────────────────────────────────────────────────────────
  // 06 — POLLESTRES · FAÇADE
  // ───────────────────────────────────────────────────────────
  {
    slug: "renovation-facade-pollestres",

    title: "Rénovation d’une façade à Pollestres",
    shortTitle: "Façade aux tons naturels",

    city: "Pollestres",
    department: "Pyrénées-Orientales",

    category: "Ravalement de façade",

    excerpt:
      "Une façade claire associée à des menuiseries anthracite pour retrouver une lecture nette et équilibrée de la maison.",

    introduction:
      "Cette rénovation extérieure s’articule autour d’un enduit clair et d’éléments anthracite qui structurent la façade, tout en conservant le caractère méditerranéen et résidentiel de la maison.",

    work: [
      "Observation de la façade",
      "Préparation des surfaces",
      "Remise en état des supports",
      "Finitions",
    ],

    image: "/images/realisations/facade-pollestres/hero.jpg",

    imageAlt:
      "Façade rénovée d’une maison aux tons clairs et menuiseries anthracite à Pollestres",

    gallery: [
      {
        src: "/images/realisations/facade-pollestres/detail-01.jpg",
        alt: "Détail d’une façade claire et de menuiseries anthracite à Pollestres",
      },
    ],

    seo: {
      title: "Rénovation de façade à Pollestres",
      description:
        "Découvrez un projet de rénovation et de ravalement de façade à Pollestres dans les Pyrénées-Orientales.",
    },
  },
];