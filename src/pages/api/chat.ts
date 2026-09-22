import type { APIRoute } from 'astro';
import { knowledge } from '../../data/knowledge';
import { composeAssistantReply } from '../../lib/assistant';
import { searchKnowledge } from '../../lib/search';

export const prerender = false;

const SYSTEM = `You are Codeaxes AI, the on-site guide for the Codeaxes website.
Speak like a knowledgeable colleague at the front desk: direct, specific, first person.
Answer the visitor's question first in 2-5 short sentences using only the website excerpts.
Then offer one next step with a site path such as /services/mobile-apps.
Do not invent pricing, client results, capabilities, headcount, or policies.
If the excerpts are thin, say what you do know and point to /contact.
Never dump a document title as the first line. Never tell the browser to redirect.`;

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
      temperature: 0.45,
      messages: [
        { role: 'system', content: `${SYSTEM}\n\nWebsite excerpts:\n${context}` },
        ...history.slice(-8).filter((item) => item.role === 'user' || item.role === 'assistant'),
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
    const local = composeAssistantReply(query, knowledge, messages);
    const hits = searchKnowledge(query, knowledge, 8);
    const context = hits
      .map((hit) => `# ${hit.doc.title}\nURL: ${hit.doc.url}\n${hit.doc.body.slice(0, 1200)}`)
      .join('\n\n');
    let mode: 'api' | 'local' = 'local';
    let answer = local.answer;
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
        sources: local.sources,
      }),
      { headers: { 'Content-Type': 'application/json' } },
    );
  } catch {
    return new Response(JSON.stringify({ error: 'Unable to answer right now.' }), { status: 500 });
  }
};
