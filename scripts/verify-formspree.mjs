import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';

// Exercise real submission handling with mocked responses; never send QA data
// to the client's inbox or consume Formspree submissions.
let request;
const exports = {};
const source = await readFile(new URL('../src/lib/formspree.ts', import.meta.url), 'utf8');
vm.runInNewContext(ts.transpile(source, { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }), {
  exports,
  fetch: (...args) => request(...args),
});
const { FORMSPREE_ENDPOINT, submitFormspree } = exports;
assert.equal(FORMSPREE_ENDPOINT, 'https://formspree.io/f/mgakoyol');

function fixture() {
  const button = { textContent: 'Send enquiry', disabled: false };
  const status = { textContent: '' };
  const form = {
    action: FORMSPREE_ENDPOINT, resets: 0, attributes: {},
    querySelector: () => button,
    reset() { this.resets++; },
    setAttribute(name, value) { this.attributes[name] = value; },
    removeAttribute(name) { delete this.attributes[name]; },
  };
  return { form, button, status, options: { status, successMessage: 'Received.', fallbackEmail: 'hello@example.com' } };
}

const data = new FormData();
data.set('brand', 'Kuroaxe');
data.set('email', 'qa@example.com');
data.set('details', 'A test brief that must remain filled if delivery fails.');
data.append('services', 'seo');
data.append('services', 'video-production');

const success = fixture();
let finish, requests = 0;
request = (url, options) => {
  requests++;
  assert.equal(url, FORMSPREE_ENDPOINT);
  assert.equal(options.method, 'POST');
  assert.equal(options.headers.Accept, 'application/json');
  assert.equal(options.headers['Content-Type'], undefined, 'Browser must set the multipart boundary');
  assert.equal(options.body, data);
  assert.deepEqual(options.body.getAll('services'), ['seo', 'video-production']);
  return new Promise((resolve) => { finish = resolve; });
};
const sending = submitFormspree(success.form, data, success.options);
assert.equal(success.button.disabled, true);
assert.equal(success.form.attributes['aria-busy'], 'true');
assert.equal(success.status.textContent, 'Sending…');
assert.equal(success.form.resets, 0);
await submitFormspree(success.form, data, success.options);
assert.equal(requests, 1, 'Repeated input must not create duplicate submissions');
finish({ ok: true });
await sending;
assert.equal(success.form.resets, 1);
assert.equal(success.button.disabled, false);
assert.equal(success.button.textContent, 'Send enquiry');
assert.equal(success.status.textContent, 'Received.');
assert.equal(success.form.attributes['aria-busy'], undefined);

const rejected = fixture();
let fieldErrors;
request = async () => ({ ok: false, json: async () => ({ errors: [{ field: 'email', message: 'Enter a valid email.' }] }) });
await submitFormspree(rejected.form, data, { ...rejected.options, onFieldErrors: (errors) => { fieldErrors = errors; } });
assert.equal(fieldErrors.email, 'Enter a valid email.');
assert.equal(rejected.status.textContent, 'Enter a valid email.');
assert.equal(rejected.form.resets, 0, 'Rejected submissions must retain the visitor’s details');
assert.equal(rejected.button.disabled, false);

request = async () => { throw new Error('offline'); };
await submitFormspree(rejected.form, data, rejected.options);
assert.match(rejected.status.textContent, /Your details are still here/);
assert.equal(rejected.form.resets, 0);
assert.equal(rejected.button.disabled, false);

request = async () => ({ ok: false, json: async () => { throw new Error('HTML response'); } });
await submitFormspree(rejected.form, data, rejected.options);
assert.match(rejected.status.textContent, /hello@example.com/);
assert.equal(rejected.form.resets, 0);

// A corrected form can be sent again after a server or network failure.
request = async () => ({ ok: true });
await submitFormspree(rejected.form, data, rejected.options);
assert.equal(rejected.form.resets, 1);
assert.equal(rejected.status.textContent, 'Received.');

// Confirm the built HTML has a functional native POST fallback on static hosts.
for (const route of ['contact', 'kuroaxe/contact']) {
  const html = await readFile(new URL(`../dist/client/${route}/index.html`, import.meta.url), 'utf8');
  const forms = (html.match(/<form\b[^>]*>[\s\S]*?<\/form>/g) ?? []).filter((form) => !form.includes('data-chat-form'));
  assert.equal(forms.length, route === 'contact' ? 2 : 1, `Unexpected submission forms on ${route}`);
  for (const form of forms) {
    assert.match(form, /action="https:\/\/formspree.io\/f\/mgakoyol"/);
    assert.match(form, /method="POST"/);
    assert.match(form, /name="brand" value="(?:Codeaxes|Kuroaxe)"/);
    assert.match(form, /name="form_type"/);
    assert.match(form, /name="_gotcha"/);
    assert.doesNotMatch(form.match(/^<form[^>]*>/)[0], /novalidate/);
  }
}
console.log('Passed: Formspree destination, all service selections, duplicate prevention, success/error/retry handling, and native POST fallbacks. No live submissions sent.');
