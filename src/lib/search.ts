import type { KnowledgeDoc } from '../types';

const STOP = new Set([
  'the',
  'a',
  'an',
  'and',
  'or',
  'for',
  'to',
  'of',
  'in',
  'on',
  'with',
  'is',
  'are',
  'do',
  'does',
  'you',
  'your',
  'our',
  'we',
  'can',
  'how',
  'what',
  'which',
  'where',
  'when',
  'who',
]);

const ALIASES: Record<string, string[]> = {
  app: ['mobile', 'apps', 'ios', 'android'],
  apps: ['mobile', 'ios', 'android'],
  application: ['mobile', 'apps'],
  ios: ['mobile', 'apps'],
  android: ['mobile', 'apps'],
  iphone: ['mobile', 'apps'],
  chatbot: ['ai', 'automation', 'assistant'],
  copilot: ['ai', 'automation', 'assistant'],
  llm: ['ai', 'automation'],
  gpt: ['ai', 'automation'],
  saas: ['subscription', 'tenant'],
  subscription: ['saas'],
  cicd: ['devops', 'pipeline'],
  'ci/cd': ['devops', 'pipeline'],
  gitops: ['devops'],
  kubernetes: ['devops', 'cloud'],
  aws: ['cloud'],
  azure: ['cloud'],
  gcp: ['cloud'],
  web3: ['blockchain'],
  unity: ['game', 'games'],
  lottie: ['animation', '2d'],
  rive: ['animation', '2d'],
  hire: ['careers', 'jobs'],
  job: ['careers', 'hiring'],
  jobs: ['careers', 'hiring'],
  price: ['contact', 'enquiry'],
  pricing: ['contact', 'enquiry'],
  cost: ['contact', 'enquiry'],
  quote: ['contact', 'enquiry'],
};

export function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9+#.\s/-]/g, ' ')
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 1 && !STOP.has(token));
}

export function expandTokens(tokens: string[]): string[] {
  const expanded = new Set(tokens);
  for (const token of tokens) {
    for (const alias of ALIASES[token] ?? []) expanded.add(alias);
  }
  return [...expanded];
}

export function scoreDocument(doc: KnowledgeDoc, tokens: string[], query: string): number {
  const title = doc.title.toLowerCase();
  const tags = doc.tags.join(' ').toLowerCase();
  const body = doc.body.toLowerCase();
  const q = query.toLowerCase();
  let score = 0;

  if (q && title.includes(q)) score += 24;
  if (q.length > 12 && body.includes(q)) score += 10;

  for (const token of tokens) {
    if (title.includes(token)) score += 8;
    if (tags.includes(token)) score += 5;
    if (body.includes(token)) score += 2;
    if (doc.category.includes(token)) score += 3;
    if (title.split(/[\s/&-]+/).includes(token)) score += 6;
  }

  return score;
}

export function searchKnowledge(query: string, docs: KnowledgeDoc[], limit = 5) {
  const tokens = expandTokens(tokenize(query));
  if (!tokens.length) return [];

  return docs
    .map((doc) => ({ doc, score: scoreDocument(doc, tokens, query) }))
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export const suggestedPrompts = [
  'Which service is right for my startup?',
  'What technologies do you use for SaaS?',
  'Do you build mobile apps?',
  'Show relevant case studies for fintech.',
];
