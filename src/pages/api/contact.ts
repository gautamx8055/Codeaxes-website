import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const required = ['name', 'email', 'company', 'service', 'budget', 'timeline', 'details'];
    for (const key of required) {
      if (!String(body[key] ?? '').trim()) {
        return new Response(JSON.stringify({ error: `Missing ${key}` }), { status: 400 });
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
    }
    return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400 });
  }
};
