import type { KnowledgeDoc } from '../types';
import { services } from '../data/services';
import { site } from '../data/site';
import { searchKnowledge, tokenize } from './search';

export type ChatTurn = { role: string; content: string };

const SERVICE_HINTS: { slug: (typeof services)[number]['slug']; keys: string[] }[] = [
  { slug: 'ai-automation', keys: ['ai', 'automation', 'llm', 'chatbot', 'copilot', 'rag', 'assistant', 'gpt', 'openai'] },
  { slug: 'mobile-apps', keys: ['mobile', 'ios', 'android', 'iphone', 'app', 'apps', 'flutter', 'react native'] },
  { slug: 'saas-development', keys: ['saas', 'subscription', 'tenant', 'multi-tenant', 'billing'] },
  { slug: 'paas-development', keys: ['paas', 'platform as a service', 'developer portal'] },
  { slug: 'qa-testing', keys: ['qa', 'testing', 'test', 'quality', 'regression'] },
  { slug: 'custom-development', keys: ['custom', 'bespoke', 'legacy', 'integration'] },
  { slug: 'product-development', keys: ['product development', 'mvp', 'prototype', 'discovery'] },
  { slug: 'blockchain', keys: ['blockchain', 'web3', 'smart contract', 'token', 'wallet', 'on-chain'] },
  { slug: 'project-data', keys: ['data', 'analytics', 'warehouse', 'pipeline', 'dashboard', 'metrics'] },
  { slug: 'game-development', keys: ['game', 'games', 'unity', 'multiplayer'] },
  { slug: 'cloud-computing', keys: ['cloud', 'aws', 'azure', 'gcp', 'landing zone', 'finops'] },
  { slug: '2d-animations', keys: ['animation', '2d', 'lottie', 'rive', 'motion'] },
  { slug: 'devops', keys: ['devops', 'ci', 'cd', 'cicd', 'gitops', 'kubernetes', 'pipeline'] },
];

const bySlug = new Map(services.map((service) => [service.slug, service]));

const firstSentence = (text: string, max = 220) => {
  const clean = text.replace(/\s+/g, ' ').trim();
  const match = clean.match(/^.+?[.!?](?:\s|$)/);
  const sentence = (match ? match[0] : clean).trim();
  return sentence.length > max ? `${sentence.slice(0, max).trim()}…` : sentence;
};

const bestSentences = (body: string, query: string, count = 2) => {
  const tokens = tokenize(query);
  const parts = body
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 40);

  if (!parts.length) return firstSentence(body);

  const ranked = parts
    .map((part) => {
      const lower = part.toLowerCase();
      const score = tokens.reduce((sum, token) => sum + (lower.includes(token) ? 1 : 0), 0);
      return { part, score };
    })
    .sort((a, b) => b.score - a.score || a.part.length - b.part.length);

  const picked: string[] = [];
  for (const item of ranked) {
    if (picked.length >= count) break;
    if (!picked.includes(item.part)) picked.push(item.part);
  }
  return picked.join(' ');
};

const hasKey = (haystack: string, key: string) => {
  if (key.includes(' ')) return haystack.includes(key);
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, 'i').test(haystack);
};

const matchService = (query: string) => {
  const lower = query.toLowerCase();
  let best: { service: (typeof services)[number]; hits: number } | undefined;
  for (const hint of SERVICE_HINTS) {
    const hits = hint.keys.filter((key) => hasKey(lower, key)).length;
    if (!hits) continue;
    const service = bySlug.get(hint.slug);
    if (!service) continue;
    if (!best || hits > best.hits) best = { service, hits };
  }
  return best && best.hits > 0 ? best.service : undefined;
};

const lastPath = (history: ChatTurn[]) => {
  const previous = [...history].reverse().find((item) => item.role === 'assistant')?.content ?? '';
  return previous.match(/(\/(?:services|about|careers|faq|contact)[a-z0-9\-/#]*)/i)?.[1];
};

const isShort = (query: string) => query.trim().split(/\s+/).length <= 4;

export function composeAssistantReply(
  query: string,
  docs: KnowledgeDoc[],
  history: ChatTurn[] = [],
): { answer: string; sources: { title: string; url: string }[] } {
  const text = query.trim();
  const lower = text.toLowerCase();
  const followUp = /^(tell me more|more detail|more|and that|that one|the first one|yes|yep|ok|okay|what about that|go on)\b/i.test(
    text,
  );

  const hits = searchKnowledge(followUp ? lastPath(history) || text : text, docs, 6);
  const sources = hits.slice(0, 3).map((hit) => ({ title: hit.doc.title, url: hit.doc.url }));

  if (/^(hi|hello|hey|yo|howdy|good (morning|afternoon|evening))\b/i.test(text) && isShort(text)) {
    return {
      answer: `Hi. I'm Codeaxes AI, the on-site guide for this website. I can walk you through the thirteen services, the stack, industries, case studies, or how to start a project. What are you trying to ship?`,
      sources: [],
    };
  }

  if (/^(thanks|thank you|thx|cool|great|perfect|got it|awesome)\b/i.test(text) && isShort(text)) {
    return {
      answer: `Glad that helped. If you want a next step, I can point you at a case study, the stack we use, or the contact form at /contact.`,
      sources: [],
    };
  }

  if (/who are you|what are you|your name|codeaxes ai|are you a bot|are you (an )?ai/i.test(lower)) {
    return {
      answer: `I'm Codeaxes AI, a site assistant. I answer from published Codeaxes pages: services, technologies, industries, case studies, FAQs, careers, and contact details. I don't invent prices or client results that aren't on the site. Ask about a problem you're trying to solve, or start at /services.`,
      sources: [{ title: 'Codeaxes', url: '/about' }],
    };
  }

  if (/kuroaxe|marketing brand|marketing (arm|partner)/i.test(lower)) {
    return {
      answer: `Kuroaxe is Codeaxes' partner brand for marketing services. Engineering and product work stays with Codeaxes. Kuroaxe lives at ${site.kuroaxe.url}, and marketing roles are listed on /careers.`,
      sources: [{ title: 'Careers', url: '/careers' }],
    };
  }

  if (/price|pricing|cost|rate|budget|how much|quote|retainer|hourly/i.test(lower)) {
    return {
      answer: `The site doesn't publish rates. Scope comes from a discovery conversation: constraint, team shape, and a timeline range, not a generic price list. Email ${site.email} or use /contact and the team will come back with an approach.`,
      sources: [{ title: 'Contact Codeaxes', url: '/contact' }],
    };
  }

  if (/contact|email|phone|call|book a meeting|reach you|talk to (a |the )?human|start a project|hire you/i.test(lower)) {
    return {
      answer: `Start at /contact. Email ${site.email}, phone ${site.phone}. ${site.address.line1}, ${site.address.city}. After you send an enquiry they confirm receipt, book a short discovery call, and return a scoped plan. Hours: ${site.hours}.`,
      sources: [{ title: 'Contact Codeaxes', url: '/contact' }],
    };
  }

  if (/job|career|hiring|vacancy|open role|work at codeaxes|join the team/i.test(lower)) {
    return {
      answer: `Careers split in two: Codeaxes hires product engineering, Kuroaxe hires marketing. Live postings are on /careers with team, location, workplace, and how to apply. If nothing matches, send a note through /contact.`,
      sources: [{ title: 'Careers at Codeaxes and Kuroaxe', url: '/careers' }],
    };
  }

  if (/how (do you|does (an )?engagement|does delivery) work|delivery process|your process/i.test(lower)) {
    const process = docs.find((doc) => doc.id === 'process');
    return {
      answer: process
        ? `Delivery is a real sequence, not a skip-to-launch slide. ${firstSentence(process.body, 320)} The home page walks through Discover through Scale.`
        : `Delivery runs Discover through Scale. We don't skip Test to make a launch date look pretty. See the sequence on the home page.`,
      sources: process ? [{ title: process.title, url: process.url }] : [],
    };
  }

  if (followUp) {
    const path = lastPath(history);
    const related = path ? docs.find((doc) => doc.url === path || doc.url.startsWith(path)) : hits[0]?.doc;
    if (related) {
      return {
        answer: `${bestSentences(related.body, related.title, 2)}\n\nFull page: ${related.url}. I can compare a related service or send you to /contact if you want the team involved.`,
        sources: [{ title: related.title, url: related.url }],
      };
    }
  }

  const mentioned = matchService(text);
  const askingIfWeBuild = /do you (build|do|offer|make|ship|handle)|can you (build|do|make)|have you (built|done)/i.test(
    lower,
  );
  const whichService = /which service|what service|right for|best (service|fit)|where (do|should) i start|need help with/i.test(
    lower,
  );

  if (askingIfWeBuild && mentioned) {
    return {
      answer: `Yes. ${mentioned.summary}\n\n${mentioned.tagline} Details and delivery model: /services/${mentioned.slug}. I can also surface a related case study if you tell me the industry.`,
      sources: [{ title: mentioned.name, url: `/services/${mentioned.slug}` }],
    };
  }

  if (whichService || (/startup|mvp|early stage/.test(lower) && !mentioned)) {
    if (mentioned) {
      return {
        answer: `If that's the problem, start with ${mentioned.name}. ${mentioned.summary}\n\nRead /services/${mentioned.slug}. If the product is still being validated, Product Development is the broader wrapper: /services/product-development.`,
        sources: [
          { title: mentioned.name, url: `/services/${mentioned.slug}` },
          { title: 'Product Development', url: '/services/product-development' },
        ],
      };
    }
    return {
      answer: `For a startup, the usual split is: Product Development if the problem is still being validated, SaaS Development if you already know you're selling a multi-tenant product, and Mobile App Development if the first surface is iOS/Android. There are thirteen practices on /services. Tell me whether you need a first product, a mobile client, or automation inside an existing team and I'll narrow it.`,
      sources: [
        { title: 'Product Development', url: '/services/product-development' },
        { title: 'SaaS Development', url: '/services/saas-development' },
        { title: 'Mobile App Development', url: '/services/mobile-apps' },
      ],
    };
  }

  if (mentioned && /service|build|need|looking for|want/.test(lower)) {
    return {
      answer: `${mentioned.name} is one of the thirteen practices. ${mentioned.summary}\n\n${mentioned.tagline} Page: /services/${mentioned.slug}.`,
      sources: [{ title: mentioned.name, url: `/services/${mentioned.slug}` }],
    };
  }

  if (/what (do you|services|can you)|thirteen practices|list (your )?services|offerings/i.test(lower)) {
    const lead = services
      .slice(0, 5)
      .map((service) => `${service.name} (${service.tagline.replace(/\.$/, '')})`)
      .join('; ');
    return {
      answer: `Codeaxes is a product engineering firm: strategy, design, build, QA, data, cloud, and AI, shipped as software operators can run. Thirteen practices sit on /services, including ${lead}. Which of those is closest to the bottleneck you have?`,
      sources: [{ title: 'Services', url: '/services' }],
    };
  }

  if (/case stud|portfolio|example(s)? of (your )?work|show .*work|featured work/i.test(lower)) {
    const studies = hits.filter((hit) => hit.doc.category === 'case-study').slice(0, 3);
    const pool = studies.length ? studies : searchKnowledge('case study saas healthcare fintech', docs, 3);
    const lines = pool.map((hit) => `${hit.doc.title}: ${firstSentence(hit.doc.body, 140)} ${hit.doc.url}`).join('\n');
    return {
      answer: `Case studies are illustrative engagements used to show how delivery is structured.\n\n${lines}\n\nThe full index is /about/case-studies.`,
      sources: pool.map((hit) => ({ title: hit.doc.title, url: hit.doc.url })),
    };
  }

  if (/technolog|tech stack|what stack|frameworks|languages (do you|you use)/i.test(lower)) {
    const techs = hits.filter((hit) => hit.doc.category === 'technology').slice(0, 4);
    const pool = techs.length ? techs : searchKnowledge('typescript react node aws', docs, 4);
    return {
      answer: `The stack is documented per technology: why we use it, where it fits, and where it does not. ${pool.map((hit) => hit.doc.title).join(', ')} are a sample. Browse /about/technologies or name a layer (frontend, cloud, data) and I'll point at the pages.`,
      sources: [{ title: 'Technologies', url: '/about/technologies' }, ...pool.map((hit) => ({ title: hit.doc.title, url: hit.doc.url }))],
    };
  }

  if (/industr(y|ies)|healthcare|fintech|ecommerce|logistics|edtech|manufacturing/i.test(lower) && !askingIfWeBuild) {
    const industryHits = hits.filter((hit) => hit.doc.category === 'industry').slice(0, 2);
    if (industryHits.length) {
      const top = industryHits[0].doc;
      return {
        answer: `${top.title}: ${bestSentences(top.body, text, 2)}\n\nIndustry notes live at ${top.url}.`,
        sources: industryHits.map((hit) => ({ title: hit.doc.title, url: hit.doc.url })),
      };
    }
  }

  const faqHit = hits.find((hit) => hit.doc.category === 'faq' && hit.score >= 10);
  if (faqHit) {
    return {
      answer: `${faqHit.doc.body}\n\nThat's from the FAQ: ${faqHit.doc.url}.`,
      sources: [{ title: faqHit.doc.title, url: faqHit.doc.url }],
    };
  }

  if (!hits.length) {
    return {
      answer: `I don't have that on the published site. I can talk about services, technologies, industries, case studies, careers, and how to get in touch. Try a concrete question like "Do you build mobile apps?" or go to /contact if you want the team.`,
      sources: [{ title: 'Contact Codeaxes', url: '/contact' }],
    };
  }

  const top = hits[0].doc;
  const extra = hits
    .slice(1, 3)
    .filter((hit) => hit.doc.id !== top.id)
    .map((hit) => `${hit.doc.title} (${hit.doc.url})`)
    .join('; ');

  const lead =
    top.category === 'service'
      ? `${top.title} is a Codeaxes practice.`
      : top.category === 'case-study'
        ? `There's a relevant write-up: ${top.title}.`
        : `Here's what the site says.`;

  return {
    answer: `${lead} ${bestSentences(top.body, text, 2)}\n\nRead more: ${top.url}${extra ? `\nAlso related: ${extra}` : ''}`,
    sources,
  };
}
