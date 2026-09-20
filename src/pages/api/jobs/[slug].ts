import type { APIRoute } from 'astro';
import { deleteJob, getJob, isJobsAuthorized, jobsApiKey, jobsCorsHeaders, updateJob } from '../../../lib/jobs';

export const prerender = false;

export const OPTIONS: APIRoute = async ({ request }) => {
  return new Response(null, { status: 204, headers: jobsCorsHeaders(request) });
};

export const GET: APIRoute = async ({ params, request }) => {
  const headers = jobsCorsHeaders(request);
  const authorized = isJobsAuthorized(request);
  const job = await getJob(params.slug ?? '', authorized);
  if (!job) {
    return new Response(JSON.stringify({ error: 'Job not found.' }), { status: 404, headers });
  }
  return new Response(JSON.stringify({ job }), { headers });
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const headers = jobsCorsHeaders(request);
  if (!jobsApiKey()) {
    return new Response(JSON.stringify({ error: 'JOBS_API_KEY is not configured on the website.' }), {
      status: 503,
      headers,
    });
  }
  if (!isJobsAuthorized(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized. Send Authorization: Bearer <JOBS_API_KEY>.' }), {
      status: 401,
      headers,
    });
  }
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const result = await updateJob(params.slug ?? '', body);
    if ('missing' in result) {
      return new Response(JSON.stringify({ error: 'Job not found.' }), { status: 404, headers });
    }
    if ('errors' in result && result.errors) {
      return new Response(JSON.stringify({ error: 'Invalid job posting.', errors: result.errors }), {
        status: 400,
        headers,
      });
    }
    return new Response(JSON.stringify({ job: result.job }), { headers });
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload.' }), { status: 400, headers });
  }
};

export const DELETE: APIRoute = async ({ params, request }) => {
  const headers = jobsCorsHeaders(request);
  if (!jobsApiKey()) {
    return new Response(JSON.stringify({ error: 'JOBS_API_KEY is not configured on the website.' }), {
      status: 503,
      headers,
    });
  }
  if (!isJobsAuthorized(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized. Send Authorization: Bearer <JOBS_API_KEY>.' }), {
      status: 401,
      headers,
    });
  }
  const result = await deleteJob(params.slug ?? '');
  if ('missing' in result) {
    return new Response(JSON.stringify({ error: 'Job not found.' }), { status: 404, headers });
  }
  return new Response(JSON.stringify({ ok: true, job: result.job }), { headers });
};
