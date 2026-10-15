import { site } from "../content/site";
import { kxAbsolute } from "./paths";
import type { Service } from "../content/services";

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: kxAbsolute("/"),
    description: site.defaultDescription,
    email: site.email,
    telephone: site.phone,
    slogan: site.tagline,
    parentOrganization: {
      "@type": "Organization",
      name: site.codeaxes.name,
      url: site.codeaxes.url,
    },
    sameAs: site.socials.map((s) => s.href),
  };
}

export function serviceGraph(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} | ${site.name}`,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: kxAbsolute("/"),
    },
    url: new URL(service.href, site.url).href,
    areaServed: "Worldwide",
  };
}

export function faqGraph(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function creativeWorkGraph(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: opts.name,
    description: opts.description,
    url: kxAbsolute(opts.path),
    creator: {
      "@type": "Organization",
      name: site.name,
    },
  };
}
