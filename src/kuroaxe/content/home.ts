import { kx } from "../lib/paths";

export const home = {
  hero: {
    kicker: "Creative growth house  ·  Est. atelier",
    lineOne: "We turn attention",
    lineTwo: "into momentum.",
    lede: "Kuroaxe is a premium creative growth partner for ambitious brands. Strategy, craft, content, technology, and performance sit under one house standard, so the work is not merely seen. It is remembered, chosen, and compounded.",
    primary: { label: "Grow with Kuroaxe", href: kx("/contact") },
    secondary: { label: "View the lookbook", href: kx("/#work") },
  },
  trust: {
    kicker: "Selected houses",
    statement:
      "We keep a short roster by design. Campaigns remain confidential until a client wishes otherwise. The names below are representative of the standard we hold: heritage, hospitality, jewellery, automotive, and private travel.",
    marks: ["Maison Lumen", "Northline", "Vespera", "Halcyon Motor", "Atelier No. 9", "Cairn"],
  },
  servicesIntro: {
    kicker: "Disciplines",
    title: "Six rooms. One grammar.",
    body: "Search, social, paid demand, presence, graphics, and film are not a menu of upsells. They are rooms in the same house. A brand that looks expensive in a salon and cheap in a feed is not a brand. It is a collection of vendors. Kuroaxe exists so that does not happen.",
  },
  why: {
    kicker: "The standard",
    manifesto: "Most agencies sell activity. We sell inevitability.",
    essay: [
      "Inevitability is the feeling that a brand was always going to become this: that the film, the search page, the salon, and the advertisement were written by the same hand. It is not volume. It is not a quarter of noise followed by a quiet year.",
      "Clients come to Kuroaxe when they have outgrown the low-cost model: too many channels, too little judgement, work that expires the week it launches. We prefer a short roster, senior attention, and seasons long enough for the market to tell the truth.",
    ],
    points: [
      {
        title: "Creative thinking",
        body: "Ideas with a spine. If it cannot be named in a sentence, and defended in a room that includes finance, it is not ready. Taste is a method, not a mood board.",
      },
      {
        title: "Strategic planning",
        body: "Channels are rooms, not a checklist. We open the doors that the buyer already walks through, and we close the ones that dilute the house.",
      },
      {
        title: "Performance tracking",
        body: "Numbers in service of judgement. A dashboard is an instrument, not a deliverable. We report what changed, why it matters, and what we will refuse next.",
      },
      {
        title: "Exact execution",
        body: "Quiet speed. The calendar moves; the standard does not. Senior people stay on the work after the pitch, which is rarer than it should be.",
      },
      {
        title: "Long-term brand",
        body: "Seasons that accumulate. We are not interested in a single loud quarter, or in work that would embarrass the archive two years from now.",
      },
    ],
  },
  process: [
    {
      n: "01",
      title: "Strategy",
      body: "We begin with the constraint: audience, offer, economics, and the thing we will refuse to do. A brief is rewritten until it can be spent against. If we are the wrong house, we say so here, not after a deck.",
    },
    {
      n: "02",
      title: "Creative direction",
      body: "The world is set: type, image, film, space, and the gilt line that holds them. Art direction is not decoration on a media plan. It is the plan, made visible.",
    },
    {
      n: "03",
      title: "Campaign launch",
      body: "Owned, paid, and earned appear as one introduction. Landing pages, social rooms, search, and film share a grammar so the first week does not look like three vendors meeting for the first time.",
    },
    {
      n: "04",
      title: "Optimization",
      body: "Edits with a hypothesis. We keep what the market kept and retire the rest without sentiment. Tests are named. Kills are named. Vanity is not a KPI.",
    },
    {
      n: "05",
      title: "Scale",
      body: "More of what is true, never more of what is merely working. Scale is a privilege of a system that already looks like the house. We will not amplify a compromise.",
    },
  ],
  engagement: {
    kicker: "How we work",
    title: "A house, not a vendor bench.",
    body: "Most retainers are seasonal or annual. A typical engagement begins with a strategy session, a written point of view, and a scope that names channels, craft, and the commercial outcome. We do not mark up media in the dark. We do not staff juniors to impersonate the pitch. Technology, when the experience must be built rather than advertised, is partnered with Codeaxes.",
    items: [
      {
        title: "Atelier retainers",
        body: "Ongoing direction across brand, content, and growth: one team, one standard, reviewed monthly in narrative rather than theatre.",
      },
      {
        title: "Seasonal campaigns",
        body: "A defined launch with film, social, paid, and search as a single appearance. Built for houses that need a chapter, not a forever contract.",
      },
      {
        title: "Identity and presence",
        body: "Marks, guidelines, AR, and spatial work for brands whose object is the argument: jewellery, fragrance, automotive, hospitality.",
      },
    ],
  },
  results: [
    { value: "+128%", label: "Qualified enquiries, year on year, private travel" },
    { value: "6.2×", label: "Return on paid media, first season, fragrance" },
    { value: "41%", label: "Salon bookings originated in AR, jewellery" },
    { value: "−44%", label: "Social volume, with stronger save-rate and memory" },
    { value: "2.1×", label: "Film completion versus the prior social system" },
    { value: "94%", label: "Lift in non-brand organic sessions across twelve months" },
  ],
  cta: {
    kicker: "Private enquiry",
    title: "Begin the next thing people talk about.",
    body: "Write as you would to a house you respect. Bring the constraint, the calendar, and the number that actually matters. A partner replies within two business days, with a point of view, or with a clear no.",
  },
} as const;
