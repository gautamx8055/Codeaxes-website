import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';
import { createServer } from 'vite';

const server = await createServer({ configFile: false, server: { middlewareMode: true }, appType: 'custom' });
try {
  const { services, serviceGroups } = await server.ssrLoadModule('/src/data/services.ts');
  const { knowledge } = await server.ssrLoadModule('/src/data/knowledge.ts');
  const { industries } = await server.ssrLoadModule('/src/data/industries.ts');
  const { technologies, findTechnology } = await server.ssrLoadModule('/src/data/technologies.ts');
  const { caseStudies } = await server.ssrLoadModule('/src/data/case-studies.ts');
  const { composeAssistantReply } = await server.ssrLoadModule('/src/lib/assistant.ts');
  const { enquiryFromBody } = await server.ssrLoadModule('/src/lib/inbox.ts');
  const slugs = new Set(services.map((service) => service.slug));
  const form = { name: 'Catalogue QA', company: 'Example', email: 'qa@example.com', budget: 'undecided', timeline: 'exploring', details: 'Testing catalogue validation without saving an enquiry.' };
  for (const service of services) {
    const reply = composeAssistantReply(`Do you offer ${service.name}?`, knowledge);
    assert.equal(reply.sources[0]?.url, `/services/${service.slug}`, `Assistant misroutes ${service.name}`);
    assert.ok('enquiry' in enquiryFromBody({ ...form, service: service.slug }), `Form rejects ${service.name}`);
  }
  for (const group of serviceGroups) {
    const reply = composeAssistantReply(`What does ${group.name} cover?`, knowledge);
    assert.equal(reply.sources[0]?.url, `/services#${group.id}`);
    for (const service of group.services) assert.ok(reply.answer.includes(service.name));
  }
  for (const industry of industries) {
    const doc = knowledge.find((entry) => entry.id === `industry-${industry.slug}`);
    for (const solution of industry.solutions) assert.ok(doc.body.includes(solution));
  }
  for (const item of [...technologies, ...caseStudies]) {
    const references = item.relatedServices ?? item.services;
    assert.equal(references.length, new Set(references).size, `Duplicate services for ${item.slug}`);
    for (const slug of references) assert.ok(slugs.has(slug), `Unknown service ${slug}`);
  }
  assert.equal(findTechnology('React.js')?.slug, 'react');
  assert.equal(findTechnology('OpenAI Models & APIs')?.slug, 'openai');
  assert.equal(findTechnology('Google Cloud Platform (GCP)')?.slug, 'google-cloud');
  assert.match(composeAssistantReply('What services do you offer?', knowledge).answer, /31 services/);
  assert.ok('errors' in enquiryFromBody({ ...form, service: 'game-development' }));
} finally {
  await server.close();
}

// Execute the actual filter script against a minimal DOM fixture to verify
// multiword search, punctuation, empty states, group visibility, and jump resets.
const source = await readFile(new URL('../src/components/ui/CatalogueFilter.astro', import.meta.url), 'utf8');
const script = source.match(/<script>([\s\S]*?)<\/script>/)[1];
const inputListeners = {}, windowListeners = {}, linkListeners = {};
const input = { value: '', addEventListener: (type, callback) => { inputListeners[type] = callback; } };
const status = { textContent: '' };
let exposed = false;
const filter = { classList: { remove: () => { exposed = true; } }, querySelector: (selector) => selector === 'input' ? input : status };
const entries = ['AI First Generative AI & LLM Engineering', 'Advanced Engineering Embedded Systems & Firmware Engineering', 'Advanced Engineering Industrial IoT & Industry 4.0'].map((text) => ({ dataset: { search: text }, hidden: false }));
const groups = [[entries[0]], entries.slice(1)].map((children) => ({ hidden: false, querySelectorAll: () => children }));
const link = { addEventListener: (type, callback) => { linkListeners[type] = callback; } };
const document = {
  querySelector: () => filter,
  querySelectorAll: (selector) => selector === '[data-catalogue-entry]' ? entries : selector === '[data-catalogue-group]' ? groups : [link],
};
vm.runInNewContext(ts.transpile(script, { target: ts.ScriptTarget.ES2022 }), { document, window: { addEventListener: (type, callback) => { windowListeners[type] = callback; } }, location: { hash: '#advanced-engineering' } });
assert.ok(exposed);
input.value = 'embedded firmware'; inputListeners.input();
assert.deepEqual(entries.map((entry) => entry.hidden), [true, false, true]);
assert.deepEqual(groups.map((group) => group.hidden), [true, false]);
input.value = 'industry 4.0'; inputListeners.input();
assert.deepEqual(entries.map((entry) => entry.hidden), [true, true, false]);
input.value = 'no-match'; inputListeners.input(); assert.match(status.textContent, /No matches/);
linkListeners.click(); assert.ok(entries.every((entry) => !entry.hidden)); assert.equal(input.value, '');
input.value = 'firmware'; inputListeners.input(); windowListeners.hashchange();
assert.ok(groups.every((group) => !group.hidden));
console.log('Passed: assistant routing, 31 enquiry values, knowledge coverage, current service references, and catalogue filter behavior.');
