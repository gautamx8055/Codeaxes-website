import type { APIRoute } from 'astro';
import { allowSubmission, clientKey, enquiryFromBody, saveEnquiry } from '../../lib/inbox';

export const prerender = false;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (!allowSubmission(`contact:${clientKey(request, clientAddress)}`)) {
    return json({ error: 'Too many enquiries from this network. Email hello@codeaxes.com.' }, 429);
  }
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const result = enquiryFromBody(body);
    if ('ignored' in result) return json({ ok: true });
    if ('errors' in result) return json({ error: 'Check the form and try again.', errors: result.errors }, 400);
    const enquiry = await saveEnquiry(result.enquiry);
    return json({ ok: true, id: enquiry.id }, 201);
  } catch {
    return json({ error: 'Invalid payload' }, 400);
  }
};
