export type Plate = {
  id: string;
  folio: string;
  client: string;
  sector: string;
  title: string;
  goal: string;
  narrative: string;
  channels: string[];
  outcome: string;
  metric: string;
  metricLabel: string;
  services: string[];
  still: "lumen" | "northline" | "vespera" | "halcyon";
};

export const plates: Plate[] = [
  {
    id: "maison-lumen",
    folio: "Plate 01",
    client: "Maison Lumen",
    sector: "Fragrance",
    title: "A scent house, made inevitable",
    goal: "Move a heritage perfume house from quiet prestige to cultural conversation without cheapening the object.",
    narrative:
      "Lumen had prestige and silence. The brief was not awareness. It was to make the house felt in rooms that had forgotten it, without turning a fragrance into a lifestyle slogan. We built a season of film, editorial social, and a retail AR chapter that treated the bottle as an object of light, not a SKU.",
    channels: ["Brand film", "Editorial social", "Retail AR"],
    outcome: "Waitlists in four cities. Organic search for the house name overtook the hero SKU.",
    metric: "6.2×",
    metricLabel: "Return on paid media, first season",
    services: ["video-production", "smm", "ar-vr"],
    still: "lumen",
  },
  {
    id: "northline",
    folio: "Plate 02",
    client: "Northline",
    sector: "Private travel",
    title: "Demand, without the noise",
    goal: "Fill a limited calendar of expedition residencies with the right guests, not more traffic.",
    narrative:
      "Northline did not need more visitors. It needed the residencies filled with people who would belong there. Search, LinkedIn, and a landing atelier were tuned to qualification, not volume. The work was as much about who we declined to invite as who we reached.",
    channels: ["Search", "LinkedIn", "Landing atelier"],
    outcome: "Enquiry quality rose; cost per qualified conversation fell through two consecutive seasons.",
    metric: "+128%",
    metricLabel: "Qualified enquiries, year on year",
    services: ["seo", "performance-marketing", "graphics"],
    still: "northline",
  },
  {
    id: "vespera",
    folio: "Plate 03",
    client: "Vespera",
    sector: "Fine jewellery",
    title: "Try the light on",
    goal: "Let remote collectors experience stones with the intimacy of a salon appointment.",
    narrative:
      "Vespera’s stones do not photograph like they behave on skin. We built an AR try-on and product film that borrowed the lighting of the salon, then connected the gesture to a specialist, not a cart. Bookings from the experience overtook walk-in introductions.",
    channels: ["AR try-on", "Product film", "CRM journeys"],
    outcome: "Salon bookings from digital try-on outpaced walk-in introductions for the first time.",
    metric: "41%",
    metricLabel: "Of salon bookings originated in AR",
    services: ["ar-vr", "video-production", "performance-marketing"],
    still: "vespera",
  },
  {
    id: "halcyon",
    folio: "Plate 04",
    client: "Halcyon Motor",
    sector: "Automotive",
    title: "A marque, not a model year",
    goal: "Rebuild brand desire ahead of a limited coachbuilt series, without looking like a launch campaign.",
    narrative:
      "Halcyon needed desire before a list. Identity, print, and a brand film were composed as editorial, not a reveal event. The series allocated privately. Press described a marque, not a model year, which was the brief, achieved.",
    channels: ["Identity", "Print", "Brand film"],
    outcome: "The series allocated privately. Press treated the work as editorial, not advertising.",
    metric: "100%",
    metricLabel: "Allocation before public list",
    services: ["graphics", "video-production", "smm"],
    still: "halcyon",
  },
];

export function platesForService(slug: string) {
  return plates.filter((plate) => plate.services.includes(slug));
}
