import type { APIRoute } from 'astro';
import { knowledge } from '../../data/knowledge';
import { formatLocalAnswer, searchKnowledge } from '../../lib/search';

export const prerender = false;

const SYSTEM = `You are Codeaxes AI, an on-site assistant for the Codeaxes website.
Answer only from the provided website excerpts.
Do not invent pricing, client results, capabilities, or policies.
If the excerpts are insufficient, say so and suggest the Contact page (/contact).
Keep answers concise. You may mention internal URLs as optional links. Never tell the browser to redirect.`;

async function completeWithModel(query: string, context: string, history: { role: string; content: string }[]) {
  const key = import.meta.env.OPENAI_API_KEY as string | undefined;
  if (!key) return null;
  const base = (import.meta.env.OPENAI_BASE_URL as string | undefined) ?? 'https://api.openai.com/v1';
  const model = (import.meta.env.OPENAI_MODEL as string | undefined) ?? 'gpt-4o-mini';
  const response = await fetch(`${base.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      messages: [
        { role: 'system', content: `${SYSTEM}\n\nWebsite excerpts:\n${context}` },
        ...history.slice(-8),
        { role: 'user', content: query },
      ],
    }),
  });
  if (!response.ok) throw new Error('model error');
  const payload = await response.json();
  const answer = payload.choices?.[0]?.message?.content;
  return typeof answer === 'string' ? answer : null;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const messages = Array.isArray(body.messages) ? body.messages : [];
    const query = [...messages].reverse().find((item) => item?.role === 'user')?.content;
    if (typeof query !== 'string' || query.trim().length < 2) {
      return new Response(JSON.stringify({ error: 'Ask a slightly more specific question.' }), { status: 400 });
    }
    const hits = searchKnowledge(query, knowledge, 6);
    const context = hits.map((hit) => `# ${hit.doc.title}\nURL: ${hit.doc.url}\n${hit.doc.body.slice(0, 900)}`).join('\n\n');
    let mode: 'api' | 'local' = 'local';
    let answer = formatLocalAnswer(query, hits);
    try {
      const generated = await completeWithModel(query, context, messages);
      if (generated) {
        answer = generated;
        mode = 'api';
      }
    } catch {
      mode = 'local';
    }
    return new Response(
      JSON.stringify({
        answer,
        mode,
        sources: hits.map((hit) => ({ title: hit.doc.title, url: hit.doc.url })),
      }),
      { headers: { 'Content-Type': 'application/json' } },
    );
  } catch {
    return new Response(JSON.stringify({ error: 'Unable to answer right now.' }), { status: 500 });
  }
};
