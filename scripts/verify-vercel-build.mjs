import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve('.');
const output = resolve('.vercel/output');
const config = JSON.parse(await readFile(`${output}/config.json`, 'utf8'));
const project = JSON.parse(await readFile('vercel.json', 'utf8'));
assert.equal(project.framework, 'astro');
assert.equal(project.outputDirectory, null, 'Use adapter output instead of a stale dashboard output directory');
assert.equal(config.version, 3);
const filesystem = config.routes.findIndex((route) => route.handle === 'filesystem');
assert.ok(filesystem >= 0, 'Static pages must be served before the 404 fallback');
assert.ok(config.routes.findIndex((route) => route.status === 404) > filesystem);

for (const path of ['index.html', 'kuroaxe/index.html', 'contact/index.html', 'kuroaxe/contact/index.html', 'services/index.html', 'services/embedded-systems-firmware-engineering/index.html', 'kuroaxe/services/performance-marketing/index.html', 'careers/index.html', '404.html']) {
  const html = await readFile(`${output}/static/${path}`, 'utf8');
  assert.match(html, /<!doctype html>/i, `Missing deployed page: ${path}`);
  assert.doesNotMatch(html, /(?:href|src)="\/client\//, 'Pages must not depend on the Node client subdirectory');
  for (const [, asset] of html.matchAll(/(?:href|src)="(\/_astro\/[^"?#]+)"/g)) {
    await access(`${output}/static${asset}`);
  }
}

for (const path of ['/api/chat', '/api/jobs', '/api/jobs/example', '/api/contact', '/api/newsletter']) {
  assert.ok(config.routes.some((route) => route.src && new RegExp(route.src).test(path) && route.dest === '_render'), `No function route for ${path}`);
}
const redirects = JSON.parse(await readFile('src/data/service-redirects.json', 'utf8'));
for (const [oldSlug, target] of Object.entries(redirects)) {
  assert.ok(config.routes.some((route) => route.src && new RegExp(route.src).test(`/services/${oldSlug}`) && route.status === 301 && route.headers?.Location === `/services${target ? `/${target}` : ''}`), `Missing service redirect: ${oldSlug}`);
}

const functionDir = `${output}/functions/_render.func`;
const runtime = JSON.parse(await readFile(`${functionDir}/.vc-config.json`, 'utf8'));
assert.match(runtime.runtime, /^nodejs(?:22|24)\.x$/);
assert.deepEqual(JSON.parse(await readFile(`${functionDir}/data/jobs.json`, 'utf8')), JSON.parse(await readFile('data/jobs.json', 'utf8')), 'Public jobs data must be packaged with the function');

// Boot the generated function from its own directory, without the source tree
// or a local .env file. Only read data and validate an empty chat request:
// no external model calls, form deliveries, or database writes.
try {
  process.chdir(functionDir);
  const { default: app } = await import(pathToFileURL(resolve(runtime.handler)).href);
  const jobs = await app.fetch(new Request('https://example.com/api/jobs'));
  assert.equal(jobs.status, 200);
  await jobs.json();
  const chat = await app.fetch(new Request('https://example.com/api/chat', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: [] }),
  }));
  assert.equal(chat.status, 400);
  assert.ok((await chat.json()).error);
} finally {
  process.chdir(root);
}
console.log('Passed: Vercel root and deep pages, CSS/JS assets, service redirects, API routing, packaged jobs, and function startup.');
