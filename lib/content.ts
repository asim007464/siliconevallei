export const hero = {
  eyebrow: "Professionele kitwerkzaamheden",
  title: "Strakke afwerking voor uw woning of project",
  lead: "Van keuken en badkamer tot plinten en tegelwerk: precisie, nette lijnen en kleur die past bij uw interieur. Snel bereikbaar via WhatsApp — ook in de avond en het weekend.",
  stats: [
    {
      label: "Gemiddelde beoordeling",
      value: "5.0",
      suffix: "sterren",
      hint: "",
    },
    {
      label: "Tevreden klanten",
      value: "100+",
      suffix: "projecten",
      hint: "",
    },
    { label: "Bereikbaarheid", value: "7/7", suffix: "op afspraak", hint: "" },
  ],
} as const;

export const about = {
  introTitle: "Uw specialist voor kit en afwerking",
  introLead:
    "Silicone Vallei staat voor vakmanschap en duidelijke communicatie. Geen verborgen kosten: u weet vooraf waar u aan toe bent.",
  paragraphs: [
    `Ik ben Cagri, kitspecialist met focus op keuken, plinten en sanitair. Of het nu gaat om een nieuwe keuken, een gerenoveerde badkamer of nette aansluitingen bij uw vloer — ik werk netjes, stofarm waar het kan, en lever een duurzaam resultaat.`,
    `Samen kijken we naar het juiste kit- en kleurtype, de juiste RAL- of tegelmatch en een planning die past bij uw verbouwing of dagelijkse bezigheden.`,
  ],
  whyTitle: "Waarom klanten voor mij kiezen",
  whyPoints: [
    "Advies op maat over kleur, materiaal en onderhoud",
    "Strakke afwerking rond werkbladen, spoelbakken en tegels",
    "Flexibele planning en snelle reactie via WhatsApp",
    "Ervaren in woningen en kleine utiliteitsprojecten",
    "Werkplek netjes achterlaten na afloop",
  ],
  stats: [
    { value: "5.0", label: "Sterren" },
    { value: "100+", label: "Klussen" },
    { value: "10+", label: "Jaar ervaring" },
  ],
} as const;

export const services = [
  {
    title: "Keuken & werkblad",
    text: "Kitnaden tussen werkblad, spoelbak, kraan en wandtegels. Hygiënische, gladde aansluitingen die bestand zijn tegen vocht en dagelijks gebruik — perfect passend bij composiet, keramiek of RVS.",
  },
  {
    title: "Badkamer & sanitair",
    text: "Waterdichte kitnaden rond bad, douchebak, wc en wastafel. Voorkomt lekkage en schimmel; strak in de hoeken en naadloos in lijn met uw tegelwerk.",
  },
  {
    title: "Plinten & vloeren",
    text: "Overgang tussen laminaat, PVC of tegel en plinten. Geen zichtbare kieren; professioneel afgewerkt voor een rustige, afgewogen uitstraling in elke ruimte.",
  },
  {
    title: "Kleur & matching",
    text: "Hulp bij het kiezen van de juiste kitkleur bij uw vloer, tegels of kozijn. Desgewenst meedenken over RAL-nuances en monsters voor het beste resultaat.",
  },
  {
    title: "Renovatie & verbouw",
    text: "Kitwerk tijdens of na uw verbouwing: aansluitingen bij nieuwe kozijnen, doucheruimtes en keukenopstellingen. Eén aanspreekpunt voor de afwerkende laag.",
  },
  {
    title: "Kleine reparaties",
    text: "Losse naden bijwerken, oude kit verwijderen en opnieuw afdichten. Ideaal voor verhuurders, verkoop of onderhoud zonder grote verbouwing.",
  },
] as const;

export type PortfolioItem = {
  title: string;
  category: string;
  text: string;
  images: string[];
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Roompot vakantiepark Bloemendaal",
    category: "Project",
    text: "Siliconevernieuwing in badkamers en toiletten in 113 vakantiehuisjes — een grootschalig project van bijna een jaar.",
    images: [
      "/portfolio/roompot-bloemendaal.png",
      "/portfolio/werk-14.jpg",
      "/portfolio/roompot3.jpg",
      "/portfolio/roompot4.jpeg",
      "/portfolio/roompot.jpeg",
    ],
  },
  {
    title: "Badkamer afwerking",
    category: "Badkamer",
    text: "Strakke kitnaden rond bad, douche, wastafel en tegels — waterdicht en schimmelbestendig.",
    images: [
      "/portfolio/badkamer-1.jpg",
      "/portfolio/badkamer-2.jpg",
      "/portfolio/badkamer-3.jpg",
      "/portfolio/werk-03.jpg",
      "/portfolio/werk-09.jpg",
    ],
  },
  {
    title: "WC / apart toilet",
    category: "WC",
    text: "Kitwerk rond toiletpot, tegels en leidingen in aparte wc-ruimtes — hygiënisch en strak.",
    images: [
      "/portfolio/toilet-1.jpg",
      "/portfolio/toilet-2.jpg",
      "/portfolio/werk-12.jpg",
      "/portfolio/werk-04.jpg",
    ],
  },
  {
    title: "Douche kit vernieuwd",
    category: "Douche",
    text: "Vernieuwde kitvoegen in de douche: waterdicht, schoon en als nieuw.",
    images: [
      "/portfolio/douche-1.jpg",
      "/portfolio/werk-05.jpg",
      "/portfolio/werk-06.jpg",
    ],
  },
  {
    title: "Nis & detail afwerking",
    category: "Detail",
    text: "Precisie bij nissen, hoeken en randen — strakke kitlijnen waar het verschil zichtbaar is.",
    images: [
      "/portfolio/niche-1.jpg",
      "/portfolio/werk-02.jpg",
      "/portfolio/werk-07.jpg",
      "/portfolio/werk-08.jpg",
    ],
  },
  {
    title: "Overige werkzaamheden",
    category: "Overig",
    text: "Diverse kitwerkzaamheden op maat — van kleine reparaties tot complete afwerking.",
    images: [
      "/portfolio/overig-1.jpg",
      "/portfolio/werk-10.jpg",
      "/portfolio/werk-11.jpg",
      "/portfolio/werk-13.jpg",
    ],
  },
];

export const reviews = [
  {
    name: "Marieke van den Berg",
    meta: "3 reviews",
    time: "2 weken geleden",
    text: "We hebben de keuken laten vernieuwen en Cagri heeft de afwerking rond het werkblad en de kraan gedaan. Super strak, hij dacht mee over de kleur en was op tijd. Zeker een aanrader.",
    reply:
      "Dank je wel Marieke — mooi om te horen dat het zo goed past bij jullie keuken!",
  },
  {
    name: "Thomas J.",
    meta: "Lokale gids · 12 reviews",
    time: "1 maand geleden",
    text: "Tweede keer dat ik Silicone Vallei inschakel voor kitwerk na een verbouwing. Weer netjes werk, duidelijke communicatie via WhatsApp en nette prijsafspraak vooraf.",
  },
  {
    name: "Fatima El Idrissi",
    meta: "5 reviews · 2 foto's",
    time: "1 maand geleden",
    text: "Badkamer volledig opnieuw ingekit. Geen luchtbellen, mooie lijnen in de hoeken. Ook geholpen met het kiezen van de juiste kit voor vochtige ruimte.",
  },
  {
    name: "Peter & Linda",
    meta: "1 review",
    time: "2 maanden geleden",
    text: "Plinten na leggen van de PVC-vloer: alles strak en stofvrij achtergelaten. Fijn dat er dezelfde week nog tijd was.",
  },
] as const;

export const reviewSummary = {
  rating: "5.0",
  countLabel: "12 reviews",
} as const;

export const contactExtra = {
  hoursTitle: "Bereikbaarheid",
  hoursLines: [
    "Ma–zo: op afspraak",
    "Reactie op WhatsApp meestal binnen enkele uren",
    "Spoed in overleg mogelijk",
  ],
  ratingLine: "5.0 sterren gemiddeld op basis van klantbeoordelingen.",
} as const;

export const workTypes = [
  "Badkamer",
  "Keuken",
  "Plinten",
  "Toilet",
  "Ramen",
] as const;
