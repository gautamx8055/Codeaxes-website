import type { APIRoute } from 'astro';
import { allowSubmission, clientKey, noteFromBody, saveNote } from '../../lib/inbox';

export const prerender = false;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (!allowSubmission(`notes:${clientKey(request, clientAddress)}`, 6)) {
    return json({ error: 'Too many signups from this network. Try again later.' }, 429);
  }
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const result = noteFromBody(body);
    if ('ignored' in result) return json({ ok: true });
    if ('error' in result) return json({ error: result.error }, 400);
    const note = await saveNote(result.note);
    return json({ ok: true, id: note.id }, 201);
  } catch {
    return json({ error: 'Invalid payload' }, 400);
  }
};
