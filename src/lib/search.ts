import type { KnowledgeDoc } from '../types';

const STOP = new Set(['the', 'a', 'an', 'and', 'or', 'for', 'to', 'of', 'in', 'on', 'with', 'is', 'do', 'you', 'your', 'our', 'we']);

export function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9+#.\s-]/g, ' ')
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 1 && !STOP.has(token));
}

export function scoreDocument(doc: KnowledgeDoc, tokens: string[]): number {
  const title = doc.title.toLowerCase();
  const tags = doc.tags.join(' ').toLowerCase();
  const body = doc.body.toLowerCase();
  let score = 0;

  for (const token of tokens) {
    if (title.includes(token)) score += 8;
    if (tags.includes(token)) score += 5;
    if (body.includes(token)) score += 2;
    if (doc.category.includes(token)) score += 3;
  }

  if (tokens.some((token) => title.split(/\s+/).includes(token))) score += 4;
  return score;
}

export function searchKnowledge(query: string, docs: KnowledgeDoc[], limit = 5) {
  const tokens = tokenize(query);
  if (!tokens.length) return [];

  return docs
    .map((doc) => ({ doc, score: scoreDocument(doc, tokens) }))
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function formatLocalAnswer(_query: string, hits: ReturnType<typeof searchKnowledge>): string {
  if (!hits.length) {
    return `I don’t have that on the Codeaxes website yet. I only answer from published pages, services, technologies, industries, case studies, FAQs, and company details. If you want a scoped conversation with the team, use the Contact page: /contact`;
  }

  const top = hits[0].doc;
  const extras = hits.slice(1, 3);
  const snippet = top.body.replace(/\s+/g, ' ').slice(0, 420).trim();

  const related =
    extras.length > 0
      ? `\n\nRelated: ${extras.map((hit) => `${hit.doc.title} (${hit.doc.url})`).join('; ')}`
      : '';

  return `${top.title}\n\n${snippet}${snippet.length >= 420 ? '…' : ''}\n\nRead more: ${top.url}${related}`;
}

export const suggestedPrompts = [
  'Which service is right for my startup?',
  'What technologies do you use for SaaS?',
  'Do you build mobile apps?',
  'Show relevant case studies for fintech.',
];
