import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { randomUUID, timingSafeEqual } from 'node:crypto';
import { loadEnv } from 'vite';
import type { Job, JobBrand, JobEmploymentType, JobStatus, JobWorkplace } from '../types';

const EMPLOYMENT: JobEmploymentType[] = ['full-time', 'part-time', 'contract', 'internship'];
const WORKPLACE: JobWorkplace[] = ['remote', 'hybrid', 'onsite'];
const STATUS: JobStatus[] = ['draft', 'open', 'closed'];
const BRANDS: JobBrand[] = ['codeaxes', 'kuroaxe'];

const loadedEnv = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

function env(name: string) {
  return (loadedEnv[name] ?? process.env[name] ?? '').trim();
}

export const employmentLabels: Record<JobEmploymentType, string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  contract: 'Contract',
  internship: 'Internship',
};

export const workplaceLabels: Record<JobWorkplace, string> = {
  remote: 'Remote',
  hybrid: 'Hybrid',
  onsite: 'On-site',
};

export const brandLabels: Record<JobBrand, string> = {
  codeaxes: 'Codeaxes',
  kuroaxe: 'Kuroaxe',
};

export function isJobBrand(value: string | null | undefined): value is JobBrand {
  return BRANDS.includes(value as JobBrand);
}

let writeQueue: Promise<unknown> = Promise.resolve();

function storePath() {
  const custom = env('JOBS_DATA_PATH');
  return custom && custom.length > 0 ? custom : path.join(process.cwd(), 'data', 'jobs.json');
}

function isJob(value: unknown): value is Job {
  if (!value || typeof value !== 'object') return false;
  const job = value as Job;
  return typeof job.id === 'string' && typeof job.slug === 'string' && typeof job.title === 'string';
}

async function readJobs(): Promise<Job[]> {
  try {
    const raw = await readFile(storePath(), 'utf8');
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter(isJob).map((job) => ({
          ...job,
          brand: job.brand === 'kuroaxe' ? 'kuroaxe' : 'codeaxes',
        }))
      : [];
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === 'ENOENT') return [];
    throw error;
  }
}

async function writeJobs(jobs: Job[]) {
  const file = storePath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(jobs, null, 2)}\n`, 'utf8');
}

function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = writeQueue.then(fn, fn);
  writeQueue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

export function slugify(value: string) {
  const slug = value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
  return slug || `role-${randomUUID().slice(0, 8)}`;
}

function uniqueSlug(base: string, jobs: Job[], currentId?: string) {
  let slug = base;
  let n = 2;
  while (jobs.some((job) => job.slug === slug && job.id !== currentId)) {
    slug = `${base}-${n}`;
    n += 1;
  }
  return slug;
}

function asStringList(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item).trim()).filter(Boolean);
}

function asOptionalUrl(value: unknown) {
  const url = typeof value === 'string' ? value.trim() : '';
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

function asOptionalEmail(value: unknown) {
  const email = typeof value === 'string' ? value.trim() : '';
  if (!email) return undefined;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return email;
}

export type JobInputError = { field: string; message: string };

export function parseJobInput(body: Record<string, unknown>, existing?: Job): { job?: Partial<Job>; errors: JobInputError[] } {
  const errors: JobInputError[] = [];
  const next: Partial<Job> = {};

  const title = typeof body.title === 'string' ? body.title.trim() : existing?.title;
  if (!title || title.length < 3) errors.push({ field: 'title', message: 'Title is required.' });
  else next.title = title;

  const brandValue = typeof body.brand === 'string' ? body.brand.trim() : existing?.brand;
  if (!isJobBrand(brandValue)) errors.push({ field: 'brand', message: 'Use codeaxes or kuroaxe.' });
  else next.brand = brandValue;

  const department = typeof body.department === 'string' ? body.department.trim() : existing?.department;
  if (!department) errors.push({ field: 'department', message: 'Department is required.' });
  else next.department = department;

  const location = typeof body.location === 'string' ? body.location.trim() : existing?.location;
  if (!location) errors.push({ field: 'location', message: 'Location is required.' });
  else next.location = location;

  const employmentType = (typeof body.employmentType === 'string' ? body.employmentType : existing?.employmentType) as JobEmploymentType | undefined;
  if (!employmentType || !EMPLOYMENT.includes(employmentType)) {
    errors.push({ field: 'employmentType', message: `Use one of: ${EMPLOYMENT.join(', ')}.` });
  } else next.employmentType = employmentType;

  const workplace = (typeof body.workplace === 'string' ? body.workplace : existing?.workplace) as JobWorkplace | undefined;
  if (!workplace || !WORKPLACE.includes(workplace)) {
    errors.push({ field: 'workplace', message: `Use one of: ${WORKPLACE.join(', ')}.` });
  } else next.workplace = workplace;

  const summary = typeof body.summary === 'string' ? body.summary.trim() : existing?.summary;
  if (!summary || summary.length < 20) errors.push({ field: 'summary', message: 'Summary must be at least 20 characters.' });
  else next.summary = summary;

  if (typeof body.description === 'string' || !existing) {
    next.description = typeof body.description === 'string' ? body.description.trim() : '';
  }

  if (body.responsibilities !== undefined || !existing) {
    next.responsibilities = asStringList(body.responsibilities);
  }
  if (body.requirements !== undefined || !existing) {
    next.requirements = asStringList(body.requirements);
  }

  if (body.compensation !== undefined) {
    const compensation = typeof body.compensation === 'string' ? body.compensation.trim() : '';
    next.compensation = compensation || undefined;
  }

  if (body.applyUrl !== undefined || !existing) {
    const applyUrl = asOptionalUrl(body.applyUrl);
    if (applyUrl === null) errors.push({ field: 'applyUrl', message: 'applyUrl must be an http(s) URL.' });
    else next.applyUrl = applyUrl;
  }

  if (body.applyEmail !== undefined || !existing) {
    const applyEmail = asOptionalEmail(body.applyEmail);
    if (applyEmail === null) errors.push({ field: 'applyEmail', message: 'applyEmail must be a valid email.' });
    else next.applyEmail = applyEmail;
  }

  const status = (typeof body.status === 'string' ? body.status : existing?.status ?? 'open') as JobStatus;
  if (!STATUS.includes(status)) errors.push({ field: 'status', message: `Use one of: ${STATUS.join(', ')}.` });
  else next.status = status;

  if (typeof body.slug === 'string' && body.slug.trim()) next.slug = slugify(body.slug);

  return { job: errors.length ? undefined : next, errors };
}

export async function listJobs(includeHidden = false, brand?: JobBrand) {
  const jobs = await readJobs();
  const visible = includeHidden ? jobs : jobs.filter((job) => job.status === 'open');
  const scoped = brand ? visible.filter((job) => job.brand === brand) : visible;
  return scoped.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function getJob(slug: string, includeHidden = false) {
  const jobs = await readJobs();
  const job = jobs.find((item) => item.slug === slug);
  if (!job) return null;
  if (!includeHidden && job.status !== 'open') return null;
  return job;
}

export async function createJob(body: Record<string, unknown>) {
  return withLock(async () => {
    const jobs = await readJobs();
    const parsed = parseJobInput(body);
    if (!parsed.job || parsed.errors.length) return { errors: parsed.errors };
    const now = new Date().toISOString();
    const id = randomUUID();
    const slug = uniqueSlug(parsed.job.slug ?? slugify(parsed.job.title ?? id), jobs);
    const job: Job = {
      id,
      slug,
      title: parsed.job.title!,
      brand: parsed.job.brand!,
      department: parsed.job.department!,
      location: parsed.job.location!,
      employmentType: parsed.job.employmentType!,
      workplace: parsed.job.workplace!,
      summary: parsed.job.summary!,
      description: parsed.job.description ?? '',
      responsibilities: parsed.job.responsibilities ?? [],
      requirements: parsed.job.requirements ?? [],
      compensation: parsed.job.compensation,
      applyUrl: parsed.job.applyUrl,
      applyEmail: parsed.job.applyEmail,
      status: parsed.job.status ?? 'open',
      createdAt: now,
      updatedAt: now,
    };
    jobs.unshift(job);
    await writeJobs(jobs);
    return { job };
  });
}

export async function updateJob(slug: string, body: Record<string, unknown>) {
  return withLock(async () => {
    const jobs = await readJobs();
    const index = jobs.findIndex((item) => item.slug === slug || item.id === slug);
    if (index === -1) return { missing: true as const };
    const parsed = parseJobInput(body, jobs[index]);
    if (!parsed.job || parsed.errors.length) return { errors: parsed.errors };
    const nextSlug = uniqueSlug(parsed.job.slug ?? jobs[index].slug, jobs, jobs[index].id);
    const job: Job = {
      ...jobs[index],
      ...parsed.job,
      id: jobs[index].id,
      slug: nextSlug,
      updatedAt: new Date().toISOString(),
    };
    jobs[index] = job;
    await writeJobs(jobs);
    return { job };
  });
}

export async function deleteJob(slug: string) {
  return withLock(async () => {
    const jobs = await readJobs();
    const index = jobs.findIndex((item) => item.slug === slug || item.id === slug);
    if (index === -1) return { missing: true as const };
    const [removed] = jobs.splice(index, 1);
    await writeJobs(jobs);
    return { job: removed };
  });
}

export function jobsApiKey() {
  return env('JOBS_API_KEY');
}

export function isJobsAuthorized(request: Request) {
  const key = jobsApiKey();
  if (!key) return false;
  const header = request.headers.get('authorization') ?? '';
  const bearer = header.toLowerCase().startsWith('bearer ') ? header.slice(7).trim() : '';
  const alt = request.headers.get('x-jobs-key')?.trim() ?? '';
  const token = bearer || alt;
  if (!token) return false;
  const left = Buffer.from(token);
  const right = Buffer.from(key);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function jobsCorsHeaders(request: Request) {
  const origin = request.headers.get('origin') ?? '';
  const allowed = env('JOBS_APP_ORIGIN')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (origin && (allowed.length === 0 || allowed.includes('*') || allowed.includes(origin))) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type, X-Jobs-Key';
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, DELETE, OPTIONS';
    headers['Vary'] = 'Origin';
  }
  return headers;
}

export function jobJsonLd(job: Job, siteUrl: string, orgName: string, orgUrl = siteUrl) {
  const employmentMap: Record<JobEmploymentType, string> = {
    'full-time': 'FULL_TIME',
    'part-time': 'PART_TIME',
    contract: 'CONTRACTOR',
    internship: 'INTERN',
  };
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: [job.summary, job.description].filter(Boolean).join('\n\n'),
    datePosted: job.createdAt,
    employmentType: employmentMap[job.employmentType],
    hiringOrganization: {
      '@type': 'Organization',
      name: orgName,
      sameAs: orgUrl,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
      },
    },
    ...(job.workplace === 'remote' ? { jobLocationType: 'TELECOMMUTE' } : {}),
    url: `${siteUrl.replace(/\/$/, '')}/careers/${job.slug}`,
  };
}
