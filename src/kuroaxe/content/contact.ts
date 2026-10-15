export const contact = {
  kicker: "Enquiry",
  headline: "Let’s create the next thing people talk about.",
  lede: "Write as you would to a house you respect. Include the brand, the constraint, the calendar, and the number that actually matters. We read every brief. If we are not the right partner, we will say so quickly, with a reason, not a silence.",
  next: [
    {
      n: "01",
      title: "We read",
      body: "A partner reviews your note within two business days.",
    },
    {
      n: "02",
      title: "We reply",
      body: "A short response, a request for materials, or a decline with a reason.",
    },
    {
      n: "03",
      title: "We meet",
      body: "A strategy conversation, not a demo of slides you have already seen.",
    },
  ],
  privacy:
    "We use your details to respond to this enquiry. We do not sell them, and we do not add you to a newsletter unless you ask.",
  meeting: {
    label: "Request a strategy session",
    href: "mailto:studio@kuroaxe.com?subject=Strategy%20session",
  },
  budgets: [
    { value: "discuss", label: "Let us discuss" },
    { value: "75-150", label: "75,000 – 150,000" },
    { value: "150-400", label: "150,000 – 400,000" },
    { value: "400+", label: "400,000+" },
  ],
  timelines: [
    { value: "quarter", label: "This quarter" },
    { value: "half", label: "Next two quarters" },
    { value: "annual", label: "Annual partnership" },
    { value: "unsure", label: "Not yet sure" },
  ],
} as const;
