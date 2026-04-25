export const hero = {
  eyebrow: "Professionele kitwerkzaamheden",
  title: "Strakke afwerking voor uw woning of project",
  lead: "Van keuken en badkamer tot plinten en tegelwerk: precisie, nette lijnen en kleur die past bij uw interieur. Snel bereikbaar via WhatsApp — ook in de avond en het weekend.",
  stats: [
    {
      label: "Jaren ervaring",
      value: "10",
      suffix: "jaar",
      hint: "",
    },
    {
      label: "Tevreden klanten",
      value: "1000+",
      suffix: "klanten",
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

export const workSection = {
  eyebrow: "Werk",
  title: "Referentieprojecten",
} as const;

export const portfolio: PortfolioItem[] = [
  {
    title: "Referentieprojecten",
    category: "Project",
    text: "Siliconevernieuwing in badkamers en toiletten in 113 vakantiehuisjes — een grootschalig project van bijna een jaar.",
    images: [
      "/portfolio/werk-14.jpg",
      "/portfolio/roompot-logo.png",
      "/portfolio/roompot4.jpeg",
      "/portfolio/oliver-green-amstelveen.png",
      "/portfolio/roompot3.jpg",
      "/portfolio/roompot.jpeg",
      "/portfolio/roompot6.jpeg",
    ],
  },
  {
    title: "Binnen- en nisafwerking",
    category: "Overig",
    text: "Strakke kitnaden rond aansluitvlakken, muren en details — strak afgewerkt en in lijn met uw tegels of natuursteen.",
    images: [
      "/portfolio/badkamer-1.jpg",
      "/portfolio/badkamer-2.jpg",
      "/portfolio/badkamer-3.jpg",
      "/portfolio/werk-03.jpg",
      "/portfolio/werk-09.jpg",
    ],
  },
  {
    title: "Badkamer- en doucheruimte",
    category: "Badkamer",
    text: "Strakke, waterdichte kitnaden in badkamer en douche — rond ombouw, nissen en aansluiting met tegels, hygiënisch en strak afgewerkt.",
    images: [
      "/portfolio/toilet-1.jpg",
      "/portfolio/toilet-2.jpg",
      "/portfolio/werk-12.jpg",
      "/portfolio/werk-13.jpg",
      "/portfolio/roompot-bloemendaal.jpg",
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
      "/portfolio/werk-10.jpg",
    ],
  },
  {
    title: "Trappen, plinten en aansluitingen",
    category: "Overig",
    text: "Strakke kitnaden waar vloer, trap, muur of plinten op elkaar aansluiten — schoon afgewerkt en in lijn met het interieur.",
    images: [
      "/portfolio/overig-1.jpg",
      "/portfolio/werk-11.jpg",
      "/portfolio/werk-04.jpg",
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
    meta: "Lokale gids · 20 reviews",
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
  {
    name: "Bas K.",
    meta: "2 reviews",
    time: "3 weken geleden",
    text: "Nieuwe kit rondom het bad en de douche: professioneel, netjes en duidelijk over wat er mogelijk is. Mooi strak afgewerkt.",
  },
  {
    name: "Ingrid Smit",
    meta: "4 reviews · 1 foto",
    time: "1 maand geleden",
    text: "Zolder-badkamer dichtgekit tegen schimmel en lekkage. Snel afspraken via WhatsApp en netjes in één werkdag geklaard.",
  },
  {
    name: "Marc de Vries",
    meta: "1 review",
    time: "2 weken geleden",
    text: "Aansluiting keukenblad en tegels: precies de kleur die we wilden, geen rommel achtergelaten. Top.",
    reply: "Dank, Marc — goed te horen dat de kleur zo goed matcht met jullie tegels.",
  },
  {
    name: "Sophie & Tom",
    meta: "3 reviews",
    time: "3 maanden geleden",
    text: "Grote verbouwing, kitwerk in meerdere ruimtes. Duidelijk over planning en nétjes volgens afspraak. Echt vakman.",
  },
  {
    name: "Jan Huisman",
    meta: "2 reviews",
    time: "2 maanden geleden",
    text: "Plinten in de woonkamer: strak afgewerkt, precies in dezelfde kitkleur als de vloer. Geen naden zichtbaar.",
  },
  {
    name: "Evelien Vos",
    meta: "1 review",
    time: "1 maand geleden",
    text: "Klein toilet opnieuw ingekit na lekkage. Snelle reactie en heldere uitleg. Voelt weer helemaal strak.",
  },
  {
    name: "Karin en Rob",
    meta: "4 reviews",
    time: "5 weken geleden",
    text: "Renovatie badkamer: hele doucheruimte netjes, ook de hoeken en de douchedeur. Zou hem zo weer inschakelen.",
  },
  {
    name: "Ahmed R.",
    meta: "1 review",
    time: "3 weken geleden",
    text: "Afspraak binnen enkele dagen, werk goed afgesloten. Communicatie duidelijk via WhatsApp.",
  },
  {
    name: "Chantal de Boer",
    meta: "2 reviews",
    time: "2 weken geleden",
    text: "Nieuwe keuken: kit rond spoelbak en werkblad. Hygiënisch en mooi in lijn met het graniet.",
  },
  {
    name: "Roberto G.",
    meta: "1 review",
    time: "4 maanden geleden",
    text: "Douche en badmeubel: waterdicht en geen luchtborrels. Mooi afwerkingsniveau.",
  },
  {
    name: "Nina Z.",
    meta: "3 reviews · 1 foto",
    time: "6 weken geleden",
    text: "Hulp met RAL-kleur bij onze tegels. Monsters meegenomen, daarna perfecte kitkleur. Top.",
  },
  {
    name: "Dennis Meijer",
    meta: "1 review",
    time: "2 maanden geleden",
    text: "Huurwoning: kit bij vensterbank en doucherand opnieuw. Netjes achtergelaten, verhuurder tevreden.",
  },
  {
    name: "Lotte A.",
    meta: "2 reviews",
    time: "1 week geleden",
    text: "Offerte duidelijk, geen verrassingen. Keukenafwerking precies op tijd afgewerkt.",
  },
  {
    name: "Frank Oosterom",
    meta: "1 review",
    time: "3 maanden geleden",
    text: "Zeer tevreden. Alles op afspraak, strak uiterlijk en vakmanschap. Vijf sterren verdiend.",
  },
  {
    name: "Yara P.",
    meta: "1 review",
    time: "3 weken geleden",
    text: "Ook in het weekend bereid om te reageren. Afspraak in de avond, prima gelopen.",
  },
  {
    name: "Henk Smit",
    meta: "2 reviews",
    time: "4 weken geleden",
    text: "Tweede klus: nu de hal en toilet. Hetzelfde hoge kwaliteit als vorige keer. Aanrader.",
  },
] as const;

export const reviewSummary = {
  rating: "5.0",
  countLabel: "20 reviews",
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
  "Overig",
] as const;
