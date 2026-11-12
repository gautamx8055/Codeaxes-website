import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';

const source = await readFile(new URL('../src/components/chrome/brand-header.ts', import.meta.url), 'utf8');
const exports = {};
vm.runInNewContext(ts.transpile(source, { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }), {
  exports,
  getComputedStyle: (element) => ({ opacity: element.opacity, transform: 'none' }),
});
const { transitionVisibility } = exports;
const element = () => ({
  hidden: true, inert: true, opacity: '1', scrollHeight: 220,
  style: {}, attributes: {}, animations: [],
  setAttribute(name, value) { this.attributes[name] = value; },
  getBoundingClientRect() { return { height: this.hidden ? 0 : 150 }; },
  animate(frames, options) {
    let resolve, reject, settled = false;
    const finished = new Promise((done, fail) => { resolve = done; reject = fail; });
    const animation = {
      frames, options, finished,
      finish() { if (!settled) { settled = true; resolve(); } },
      cancel() { if (!settled) { settled = true; reject(new Error('cancelled')); } },
    };
    this.animations.push(animation);
    return animation;
  },
});

const panel = element();
let pending = transitionVisibility(panel, true, { reduced: false });
assert.equal(panel.hidden, false, 'Opening panel must be visible during its animation');
assert.equal(panel.inert, false);
assert.equal(panel.animations[0].frames[0].opacity, '0');
assert.equal(panel.animations[0].options.duration, 280);
panel.animations.at(-1).finish(); await pending;
assert.equal(panel.hidden, false);

pending = transitionVisibility(panel, false, { reduced: false });
assert.equal(panel.hidden, false, 'Closing animation must finish before hiding');
assert.equal(panel.inert, true, 'Closing content must immediately leave the keyboard order');
assert.equal(panel.style.pointerEvents, 'none');
assert.equal(panel.animations.at(-1).options.duration, 180);
panel.animations.at(-1).finish(); await pending;
assert.equal(panel.hidden, true);

// Interrupting a closing animation must preserve the current visual opacity
// and must never allow the old completion to hide the reopened panel.
pending = transitionVisibility(panel, true, { reduced: false });
panel.animations.at(-1).finish(); await pending;
const closing = transitionVisibility(panel, false, { reduced: false });
panel.opacity = '0.47';
const reopening = transitionVisibility(panel, true, { reduced: false });
assert.equal(panel.animations.at(-1).frames[0].opacity, '0.47');
panel.animations.at(-1).finish(); await Promise.all([closing, reopening]);
assert.equal(panel.hidden, false); assert.equal(panel.inert, false);

const rapid = [];
for (let i = 0; i < 40; i++) rapid.push(transitionVisibility(panel, i % 2 === 0, { reduced: false }));
panel.animations.at(-1).finish(); await Promise.all(rapid);
assert.equal(panel.hidden, true); assert.equal(panel.inert, true);

const accordion = element();
pending = transitionVisibility(accordion, true, { reduced: false, expand: true });
assert.equal(accordion.animations[0].frames[0].height, '0px');
assert.equal(accordion.animations[0].frames[1].height, '220px');
accordion.animations.at(-1).finish(); await pending;
const before = accordion.animations.length;
await transitionVisibility(accordion, false, { reduced: true });
assert.equal(accordion.animations.length, before, 'Reduced motion must not start an animation');
assert.equal(accordion.hidden, true);
await transitionVisibility(accordion, true, { reduced: true });
assert.equal(accordion.hidden, false); assert.equal(accordion.inert, false);

console.log('Passed: header opening/closing, interrupted and rapid transitions, keyboard exclusion, mobile expansion, and reduced motion.');
