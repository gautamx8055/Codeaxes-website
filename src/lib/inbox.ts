import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { loadEnv } from 'vite';
import { services } from '../data/services';

const loadedEnv = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

function env(name: string) {
  return (loadedEnv[name] ?? process.env[name] ?? '').trim();
}

export type Enquiry = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
};

export type NoteSignup = {
  id: string;
  createdAt: string;
  email: string;
};

const BUDGETS = new Set(['under-50k', '50-150k', '150-400k', '400k-plus', 'undecided']);
const TIMELINES = new Set(['asap', 'quarter', 'half', 'exploring']);
const SERVICES = new Set([...services.map((service) => service.slug), 'not-sure']);

const hits = new Map<string, number[]>();

let writeQueue: Promise<unknown> = Promise.resolve();

function inboxDir() {
  const custom = env('INBOX_DATA_DIR');
  return custom.length > 0 ? custom : path.join(process.cwd(), 'data', 'inbox');
}

function clip(value: unknown, max: number) {
  return String(value ?? '').trim().slice(0, max);
}

export function allowSubmission(key: string, limit = 8, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((stamp) => now - stamp < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

export function clientKey(request: Request, fallback = 'local') {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwarded || request.headers.get('x-real-ip')?.trim() || fallback;
}

function isFilledTrap(body: Record<string, unknown>) {
  return clip(body.company_url, 200).length > 0;
}

export function enquiryFromBody(body: Record<string, unknown>): { enquiry: Enquiry } | { errors: Record<string, string> } | { ignored: true } {
  if (isFilledTrap(body)) return { ignored: true };
  const errors: Record<string, string> = {};
  const name = clip(body.name, 120);
  const email = clip(body.email, 180);
  const company = clip(body.company, 160);
  const phone = clip(body.phone, 40);
  const service = clip(body.service, 80);
  const budget = clip(body.budget, 40);
  const timeline = clip(body.timeline, 40);
  const details = clip(body.details, 4000);
  if (name.length < 2) errors.name = 'Enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid business email.';
  if (company.length < 2) errors.company = 'Enter your company.';
  if (phone && phone.replace(/\D/g, '').length < 7) errors.phone = 'Enter a reachable phone number or leave this blank.';
  if (!SERVICES.has(service)) errors.service = 'Choose a service, or “Not sure yet”.';
  if (!BUDGETS.has(budget)) errors.budget = 'Choose a budget range or “To be scoped”.';
  if (!TIMELINES.has(timeline)) errors.timeline = 'Choose a timeline.';
  if (details.length < 20) errors.details = 'Add enough detail for a useful first conversation.';
  if (Object.keys(errors).length) return { errors };
  return {
    enquiry: {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      name,
      email,
      company,
      phone,
      service,
      budget,
      timeline,
      details,
    },
  };
}

export function noteFromBody(body: Record<string, unknown>): { note: NoteSignup } | { error: string } | { ignored: true } {
  if (isFilledTrap(body)) return { ignored: true };
  const email = clip(body.email, 180);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: 'Enter a valid work email.' };
  return { note: { id: randomUUID(), createdAt: new Date().toISOString(), email } };
}

async function readList<T>(file: string): Promise<T[]> {
  try {
    const raw = await readFile(file, 'utf8');
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === 'ENOENT') return [];
    throw error;
  }
}

function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = writeQueue.then(fn, fn);
  writeQueue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function append<T>(filename: string, record: T) {
  return withLock(async () => {
    const file = path.join(inboxDir(), filename);
    await mkdir(path.dirname(file), { recursive: true });
    const current = await readList<T>(file);
    current.push(record);
    await writeFile(file, `${JSON.stringify(current, null, 2)}\n`, 'utf8');
    return record;
  });
}

export function saveEnquiry(enquiry: Enquiry) {
  return append('enquiries.json', enquiry);
}

export function saveNote(note: NoteSignup) {
  return append('notes.json', note);
}
