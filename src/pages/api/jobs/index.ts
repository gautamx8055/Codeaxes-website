import type { APIRoute } from 'astro';
import { createJob, isJobBrand, isJobsAuthorized, jobsApiKey, jobsCorsHeaders, listJobs } from '../../../lib/jobs';

export const prerender = false;

export const OPTIONS: APIRoute = async ({ request }) => {
  return new Response(null, { status: 204, headers: jobsCorsHeaders(request) });
};

export const GET: APIRoute = async ({ request }) => {
  const authorized = isJobsAuthorized(request);
  const brandParam = new URL(request.url).searchParams.get('brand');
  const brand = isJobBrand(brandParam) ? brandParam : undefined;
  const jobs = await listJobs(authorized, brand);
  return new Response(JSON.stringify({ jobs }), { headers: jobsCorsHeaders(request) });
};

export const POST: APIRoute = async ({ request }) => {
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
    const result = await createJob(body);
    if ('errors' in result && result.errors) {
      return new Response(JSON.stringify({ error: 'Invalid job posting.', errors: result.errors }), {
        status: 400,
        headers,
      });
    }
    return new Response(JSON.stringify({ job: result.job }), { status: 201, headers });
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload.' }), { status: 400, headers });
  }
};
