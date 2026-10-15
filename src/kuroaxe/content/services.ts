import { kx } from "../lib/paths";


export type ServiceSlug =
  | "seo"
  | "smm"
  | "performance-marketing"
  | "ar-vr"
  | "graphics"
  | "video-production";

export type Service = {
  slug: ServiceSlug;
  href: string;
  title: string;
  shortTitle: string;
  kicker: string;
  short: string;
  jewel: "sapphire" | "burgundy" | "antique" | "tealink" | "ivory" | "crimson";
  heroLine: string;
  description: string;
  problems: { title: string; body: string }[];
  deliverables: string[];
  process: { title: string; body: string }[];
  tools: string[];
  outcomes: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "seo",
    href: kx("/services/seo"),
    title: "Search",
    shortTitle: "SEO",
    kicker: "Organic authority",
    short: "Long-term visibility, composed like a catalogue raisonné, not a sprint of shortcuts.",
    jewel: "sapphire",
    heroLine: "Be found for the things that should belong to you.",
    description:
      "Search is reputation made machine-readable. Kuroaxe builds technical foundations, editorial content systems, and authority that compounds, so ambitious brands own the queries that matter, year after year.",
    problems: [
      {
        title: "Rankings without revenue",
        body: "Traffic arrives for the wrong phrases. We map intent to commercial reality and prune vanity.",
      },
      {
        title: "A site that fights the engine",
        body: "Slow templates, thin architecture, and neglected Core Web Vitals quietly tax every campaign.",
      },
      {
        title: "Content that does not hold",
        body: "Calendars fill pages. We write and structure work that a category would be poorer without.",
      },
    ],
    deliverables: [
      "Technical audits and remediation programmes",
      "Keyword architecture and content strategy",
      "On-page systems and internal linking",
      "Local and multi-location search",
      "E-commerce collection and product SEO",
      "Digital PR and considered link acquisition",
      "Performance and Core Web Vitals partnership",
      "Executive reporting on organic growth",
    ],
    process: [
      { title: "Audit", body: "Indexation, architecture, content quality, and competitive terrain." },
      { title: "Architecture", body: "The query map, the information design, the pages that must exist." },
      { title: "Craft", body: "Technical work and editorial work, in the same season, not in sequence as an afterthought." },
      { title: "Authority", body: "Mentions, references, and relationships worthy of the brand." },
      { title: "Stewardship", body: "Measurement, iteration, and protection of what has been earned." },
    ],
    tools: [
      "Google Search Console",
      "GA4",
      "Screaming Frog",
      "Ahrefs",
      "Site architecture workshops",
      "Looker Studio",
    ],
    outcomes: [
      { value: "+94%", label: "Non-brand organic sessions, 12 months (Northline)" },
      { value: "Page 1", label: "Category-defining phrases, not only long-tail" },
      { value: "−38%", label: "Dependency on paid for high-intent queries" },
    ],
    faqs: [
      {
        question: "Do you promise rankings in 30 days?",
        answer:
          "No. Sustainable visibility is a season, not a stunt. We will tell you what can move quickly and what must be built.",
      },
      {
        question: "Will you use automated content at scale?",
        answer:
          "Not as a substitute for thinking. Machines may assist research. The published work must meet the house standard.",
      },
      {
        question: "Can you work with our existing site?",
        answer:
          "Yes. We regularly inherit imperfect stacks and improve them without a vanity redesign, unless the architecture itself is the constraint.",
      },
      {
        question: "How do you report?",
        answer:
          "A concise monthly narrative: what changed, why it matters, what we will do next. Dashboards exist; they are not the deliverable.",
      },
    ],
  },
  {
    slug: "smm",
    href: kx("/services/smm"),
    title: "Social",
    shortTitle: "SMM",
    kicker: "Cultural presence",
    short: "Feeds as lookbooks. Community as salon. Platforms treated as rooms, not billboards.",
    jewel: "burgundy",
    heroLine: "Show up as a house, not a content machine.",
    description:
      "Social media marketing at Kuroaxe is editorial direction for public rooms. We plan, art-direct, and host conversations so a brand feels inevitable in culture, without posting for the algorithm’s amusement.",
    problems: [
      {
        title: "Volume without memory",
        body: "Daily output that no one can recall. We reduce frequency until the work can be named.",
      },
      {
        title: "Platform mimicry",
        body: "Trends worn like costumes. We borrow craft, not personality.",
      },
      {
        title: "Community as a metric",
        body: "Comments counted, none kept. We design hospitality: reply standards, creator circles, listening.",
      },
    ],
    deliverables: [
      "Social strategy and channel roles",
      "Content calendars with genuine editorial logic",
      "Art direction for stills, carousels, and short form",
      "Community management and social listening",
      "Creator and influencer collaboration",
      "Instagram, LinkedIn, Facebook, X, YouTube, and emerging rooms",
      "Reporting that explains culture, not only counts",
    ],
    process: [
      { title: "Read the room", body: "Audience, competitors, and the conversations already in motion." },
      { title: "Set the season", body: "A narrative arc, not a grid of disconnected posts." },
      { title: "Art-direct", body: "Casting, stills, type, and motion under one standard." },
      { title: "Host", body: "Publish, converse, collaborate, and listen." },
      { title: "Edit", body: "Keep what the culture kept. Retire the rest." },
    ],
    tools: [
      "Native platform studios",
      "Later / scheduling where useful",
      "Creator contracting",
      "Listening dashboards",
      "Brand visual systems",
    ],
    outcomes: [
      { value: "3.8×", label: "Save rate on hero lookbook series" },
      { value: "−44%", label: "Posting volume, with higher qualified follows" },
      { value: "Salon", label: "Creator circle retained across two seasons" },
    ],
    faqs: [
      {
        question: "Will you post every day?",
        answer:
          "Only if the work deserves a daily presence. Many of our clients are better served by fewer, sharper appearances.",
      },
      {
        question: "Which platforms do you recommend?",
        answer:
          "The rooms where your buyers already gather. We will not open a channel to complete a checklist.",
      },
      {
        question: "Do you manage community in-house?",
        answer:
          "Yes, with a written voice and escalation path. The comments are part of the brand.",
      },
      {
        question: "Can you work with our in-house creators?",
        answer:
          "Gladly. We often art-direct and edit rather than replace a capable studio.",
      },
    ],
  },
  {
    slug: "performance-marketing",
    href: kx("/services/performance-marketing"),
    title: "Performance",
    shortTitle: "Performance",
    kicker: "Measured demand",
    short: "Acquisition with manners. Media that respects the brand and answers to the ledger.",
    jewel: "antique",
    heroLine: "Spend like a house. Account like a CFO.",
    description:
      "Performance marketing at Kuroaxe is paid attention, directed with taste. Google, Meta, LinkedIn, and the journeys that follow are designed as one system: creative, landing, measurement, and the quiet work of saying no to cheap volume.",
    problems: [
      {
        title: "Cheap clicks, expensive customers",
        body: "We rebuild funnels around qualified demand and contribution margin, not CPC vanity.",
      },
      {
        title: "Creative that apologises for advertising",
        body: "Banners that look rented. We make paid work that could sit in the lookbook.",
      },
      {
        title: "Reporting that obscures",
        body: "Too many platforms, too little decision. One narrative. Clear next moves.",
      },
    ],
    deliverables: [
      "Google Ads and high-intent search",
      "Meta and paid social",
      "LinkedIn for considered B2B and private clients",
      "Retargeting with restraint",
      "Landing page and conversion design",
      "Funnel strategy and lead qualification",
      "CRO testing programmes",
      "ROAS and contribution reporting",
    ],
    process: [
      { title: "Instrument", body: "Tracking, consent, and the definitions of a qualified outcome." },
      { title: "Offer", body: "The invitation, the page, the proof." },
      { title: "Creative", body: "Ad systems that look like the brand, varied enough to learn." },
      { title: "Allocate", body: "Budget to the rooms and queries that deserve it." },
      { title: "Refine", body: "Tests with a hypothesis. Kill with a reason." },
    ],
    tools: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Campaign Manager",
      "GA4",
      "Server-side tagging where warranted",
      "Landing page stack of your choosing",
    ],
    outcomes: [
      { value: "6.2×", label: "Seasonal ROAS, Maison Lumen paid" },
      { value: "−31%", label: "Cost per qualified conversation" },
      { value: "2.4×", label: "Landing conversion after creative + CRO" },
    ],
    faqs: [
      {
        question: "What is the minimum media budget?",
        answer:
          "If the budget cannot fund a fair test, we will say so. We do not take retainers to spend poorly.",
      },
      {
        question: "Do you mark up media?",
        answer:
          "Transparent by default. Fees are for thinking and craft, not hidden in the media line.",
      },
      {
        question: "Will you work alongside our media team?",
        answer:
          "Yes. Many clients keep buying in-house and ask us for creative systems, landing work, and measurement.",
      },
      {
        question: "How fast until we see results?",
        answer:
          "Signal in weeks; a trustworthy read in a full cycle. We will not declare victory on a noisy week.",
      },
    ],
  },
  {
    slug: "ar-vr",
    href: kx("/services/ar-vr"),
    title: "AR / VR",
    shortTitle: "AR / VR",
    kicker: "Presence",
    short: "Experiences you can stand inside. Product, place, and ritual, without a gimmick.",
    jewel: "tealink",
    heroLine: "Bring the salon to wherever they are.",
    description:
      "Kuroaxe designs augmented and virtual experiences as hospitality: try-ons, showrooms, activations, and games that extend a brand’s physical grace. Built with Codeaxes when the technology must be as considered as the idea.",
    problems: [
      {
        title: "Novelty that expires in a weekend",
        body: "We brief for reuse: a system, not a stunt that cannot travel.",
      },
      {
        title: "3D that looks like a render farm",
        body: "Materials, light, and proportion come from the brand, not a default studio HDRI.",
      },
      {
        title: "Experiences nobody can find",
        body: "Distribution is part of the work: QR, social, retail, and the campaign that introduces it.",
      },
    ],
    deliverables: [
      "AR product experiences and try-on",
      "Virtual showrooms and apartments",
      "Interactive brand activations",
      "Virtual events and walkthroughs",
      "3D product visualisation",
      "AR filters and social effects",
      "Retail and experiential programmes",
      "Gamified campaigns with a point",
    ],
    process: [
      { title: "Occasion", body: "What should someone feel, hold, or understand that flat media cannot give?" },
      { title: "Space", body: "The world, the constraints of the device, the path through." },
      { title: "Object", body: "Models, materials, interaction, and the brand’s light." },
      { title: "Invite", body: "How the experience is discovered, shared, and remembered." },
      { title: "Keep", body: "Analytics, iteration, and a second life after launch week." },
    ],
    tools: [
      "WebAR",
      "Spark / Lens Studio",
      "Unreal / Unity where the world needs it",
      "USDZ / glTF pipelines",
      "Codeaxes engineering",
    ],
    outcomes: [
      { value: "41%", label: "Salon bookings from AR try-on (Vespera)" },
      { value: "4:12", label: "Median dwell in a virtual showroom" },
      { value: "Retail", label: "Activation reused across three cities" },
    ],
    faqs: [
      {
        question: "Is this only for fashion and jewellery?",
        answer:
          "No. Automotive, hospitality, and product houses use presence whenever the object is the argument.",
      },
      {
        question: "Do we need an app?",
        answer:
          "Often not. WebAR and social effects reach further. We recommend an app only when the relationship deserves one.",
      },
      {
        question: "Can you produce the 3D assets?",
        answer:
          "Yes, or we art-direct your existing visualisation partners to the house standard.",
      },
      {
        question: "How do you measure success?",
        answer:
          "Dwell, completion, share, and the commercial action you named in the brief, not downloads alone.",
      },
    ],
  },
  {
    slug: "graphics",
    href: kx("/services/graphics"),
    title: "Graphics",
    shortTitle: "Graphics",
    kicker: "Visual system",
    short: "Identity, campaign, and collateral as one language. Nothing rented. Nothing loud without cause.",
    jewel: "ivory",
    heroLine: "A language other houses cannot speak.",
    description:
      "Graphic design at Kuroaxe is the discipline of looking inevitable. Marks, type, campaigns, packaging, and digital surfaces are drawn as a single system so every appearance (paid, owned, or printed) feels like the same house.",
    problems: [
      {
        title: "A logo with no grammar",
        body: "We write guidelines that teams can actually use: type, space, photography, and don’ts.",
      },
      {
        title: "Campaigns that reset every quarter",
        body: "We design seasons inside a system, so the brand accumulates rather than restarts.",
      },
      {
        title: "Decks that apologise",
        body: "Presentations and sales objects receive the same attention as the public work.",
      },
    ],
    deliverables: [
      "Brand identity and marks",
      "Logo systems and lockups",
      "Guidelines and design tokens",
      "Social and campaign creatives",
      "Ad worlds for performance",
      "Presentations and private documents",
      "Marketing collateral",
      "Website graphics and art direction",
      "Packaging and print",
    ],
    process: [
      { title: "Listen", body: "Heritage, ambition, constraints, and the competitive field." },
      { title: "Territory", body: "Words, references, and the forbidden. Then the first marks." },
      { title: "System", body: "Type, colour, image, and the rules that keep them honest." },
      { title: "World", body: "The first campaign, the first objects, the first digital surfaces." },
      { title: "Handover", body: "Files, guidelines, and a working relationship with your teams." },
    ],
    tools: [
      "Figma",
      "Adobe CC",
      "Type foundries",
      "Print partners",
      "Motion stills pipelines",
    ],
    outcomes: [
      { value: "1 system", label: "From salon print to paid social (Halcyon)" },
      { value: "−60%", label: "Time-to-asset after guidelines landed" },
      { value: "Press", label: "Campaigns read as editorial, not advertising" },
    ],
    faqs: [
      {
        question: "Do you only do full identity programmes?",
        answer:
          "No. We also art-direct a season, a launch, or a collateral system inside an existing identity, if the identity can bear it.",
      },
      {
        question: "Will we own the files?",
        answer:
          "Yes. Working files and a documented system are part of the engagement.",
      },
      {
        question: "Can you work with our internal designers?",
        answer:
          "That is often the best model. We set the system; they keep the house.",
      },
      {
        question: "Do you design websites?",
        answer:
          "We art-direct and produce graphics. Product and engineering sit with Codeaxes when you need them.",
      },
    ],
  },
  {
    slug: "video-production",
    href: kx("/services/video-production"),
    title: "Film",
    shortTitle: "Video",
    kicker: "Moving image",
    short: "Brand films, product, and social, cut with the patience of cinema and the purpose of a campaign.",
    jewel: "crimson",
    heroLine: "Make something people stay for.",
    description:
      "Kuroaxe film is not content filler. We write, produce, and finish brand films, product films, reels, explainers, and event records with a single standard: if it would be embarrassing in a dark room, it does not ship.",
    problems: [
      {
        title: "A showreel of other people’s taste",
        body: "We start from the brand’s light, pace, and silence, not a moodboard of last year’s winners.",
      },
      {
        title: "Social cuts that betray the hero film",
        body: "One world, many lengths. The six-second cut must still be the house.",
      },
      {
        title: "Production as a black box",
        body: "You will see the board, the stills, the cut. Collaboration without chaos.",
      },
    ],
    deliverables: [
      "Brand films",
      "Product films",
      "Social reels and short form",
      "Motion graphics",
      "Explainers",
      "Ad films",
      "Event and cultural records",
      "Testimonials worthy of the speaker",
      "Animation",
      "Edit and finishing",
    ],
    process: [
      { title: "Treatment", body: "The idea, the references, the thing we will not do." },
      { title: "Board", body: "Shots, stills, sound, and the cut in principle." },
      { title: "Produce", body: "Cast, location, light. Or a studio that behaves like one." },
      { title: "Cut", body: "Picture, sound, colour, titles: one finish." },
      { title: "Distribute", body: "Hero, social, paid, and the objects that live after the premiere." },
    ],
    tools: [
      "On-set and studio",
      "DaVinci / Premiere / After Effects",
      "Sound partners",
      "Colour",
      "Delivery for every room",
    ],
    outcomes: [
      { value: "Showreel", label: "Hero films that still work two seasons later" },
      { value: "2.1×", label: "Completion vs. prior social film (Lumen)" },
      { value: "Paid", label: "Ad cuts that did not require a second shoot" },
    ],
    faqs: [
      {
        question: "Do you have an in-house crew?",
        answer:
          "Direction, edit, and finishing sit here. We cast cinematography and specialists to the brief, under our standard.",
      },
      {
        question: "Can you deliver only social?",
        answer:
          "Yes. Many retainers are a seasonal reel system. The standard does not drop with the length.",
      },
      {
        question: "Will you work from our script?",
        answer:
          "We can. We will still write a treatment so picture and sound are not an afterthought.",
      },
      {
        question: "Where do we watch the showreel?",
        answer:
          "On this page, and by request in a private viewing if the work is under embargo.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
