import type { HeaderSearchEntry } from './header-types';

const running = new WeakMap<HTMLElement, Animation>();

type TransitionOptions = { reduced: boolean; expand?: boolean; lift?: boolean; duration?: number };

/** Cancel from the current visual state, so rapid open/close input never leaves
 * a panel transparent, focusable while hidden, or stranded in a closing state. */
export async function transitionVisibility(element: HTMLElement, open: boolean, options: TransitionOptions): Promise<void> {
  if (!open && element.hidden) return;
  const wasHidden = element.hidden;
  const style = getComputedStyle(element);
  const opacity = wasHidden ? '0' : style.opacity;
  const transform = wasHidden ? 'translateY(-10px)' : style.transform;
  const height = wasHidden ? 0 : element.getBoundingClientRect().height;
  running.get(element)?.cancel();
  running.delete(element);
  element.hidden = false;
  element.inert = !open;
  element.setAttribute('aria-hidden', String(!open));
  element.style.pointerEvents = open ? '' : 'none';

  if (options.reduced || typeof element.animate !== 'function') {
    element.hidden = !open;
    return;
  }
  const from: Keyframe = { opacity };
  const to: Keyframe = { opacity: open ? '1' : '0' };
  if (options.expand) {
    from.height = `${height}px`;
    to.height = open ? `${element.scrollHeight}px` : '0px';
  } else if (options.lift !== false) {
    from.transform = transform;
    to.transform = open ? 'translateY(0)' : 'translateY(-10px)';
  }
  const animation = element.animate([from, to], {
    duration: options.duration ?? (open ? 280 : 180),
    easing: open ? 'cubic-bezier(0.22, 1, 0.36, 1)' : 'cubic-bezier(0.4, 0, 1, 1)',
    fill: 'both',
  });
  running.set(element, animation);
  try { await animation.finished; }
  catch { return; /* A replacement animation owns the final state. */ }
  if (running.get(element) !== animation) return;
  element.hidden = !open;
  running.delete(element);
  animation.cancel();
}

export function initBrandHeader(root: HTMLElement) {
  if (root.dataset.initialized) return;
  root.dataset.initialized = 'true';
  const desktop = window.matchMedia('(min-width: 1280px)');
  const hover = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const backdrop = document.querySelector<HTMLElement>('[data-header-backdrop]');
  const panels = [...root.querySelectorAll<HTMLElement>('[data-header-panel]')];
  const menuTriggers = [...root.querySelectorAll<HTMLButtonElement>('[data-mega-trigger]')];
  const searchToggle = root.querySelector<HTMLButtonElement>('[data-header-search-toggle]');
  const mobileToggle = root.querySelector<HTMLButtonElement>('[data-header-mobile-toggle]');
  const searchPanel = root.querySelector<HTMLElement>('[data-header-search-panel]');
  const mobilePanel = root.querySelector<HTMLElement>('[data-header-mobile-panel]');
  const query = root.querySelector<HTMLInputElement>('[data-header-query]');
  let current: { panel: HTMLElement; trigger: HTMLButtonElement } | null = null;
  let hoverTimer: number | undefined;
  let closeTimer: number | undefined;
  let keyboardMode = false;
  let openedByHover = false;
  let locked = false;
  let previousOverflow = '';

  const bodyLock = (on: boolean) => {
    if (on === locked) return;
    if (on) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = previousOverflow;
    locked = on;
  };
  const animate = (element: HTMLElement, open: boolean, expand = false) =>
    transitionVisibility(element, open, { reduced: reduced.matches, expand });
  const stagger = (panel: HTMLElement) => {
    if (reduced.matches) return;
    const group = panel.querySelector<HTMLElement>('[data-mega-group]:not([hidden])') ?? panel;
    group.querySelectorAll<HTMLElement>('[data-mega-entry]').forEach((entry, index) => {
      entry.getAnimations().forEach((animation) => animation.cancel());
      entry.animate([{ opacity: 0, transform: 'translateY(7px)' }, { opacity: 1, transform: 'translateY(0)' }], {
        duration: 250, delay: Math.min(index * 22, 154), easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards',
      });
    });
  };
  const updateTriggers = (trigger?: HTMLButtonElement) => {
    [...menuTriggers, searchToggle, mobileToggle].forEach((button) => button?.setAttribute('aria-expanded', String(button === trigger)));
    mobileToggle?.setAttribute('aria-label', mobileToggle === trigger ? 'Close menu' : 'Open menu');
  };
  const closeAll = (restoreFocus = false) => {
    window.clearTimeout(hoverTimer);
    window.clearTimeout(closeTimer);
    const trigger = current?.trigger;
    panels.forEach((panel) => { void animate(panel, false); });
    if (backdrop) void transitionVisibility(backdrop, false, { reduced: reduced.matches, lift: false });
    current = null;
    root.classList.remove('is-open');
    updateTriggers();
    bodyLock(false);
    if (restoreFocus) trigger?.focus();
  };
  const openPanel = (panel: HTMLElement, trigger: HTMLButtonElement, focus = false, viaHover = false) => {
    window.clearTimeout(hoverTimer);
    window.clearTimeout(closeTimer);
    if (current?.panel !== panel) {
      panels.filter((item) => item !== panel).forEach((item) => { void animate(item, false); });
      current = { panel, trigger };
      openedByHover = viaHover;
      root.classList.add('is-open');
      updateTriggers(trigger);
      bodyLock(!desktop.matches);
      void animate(panel, true);
      if (backdrop) void transitionVisibility(backdrop, true, { reduced: reduced.matches, lift: false });
      stagger(panel);
    }
    if (focus) {
      const first = panel.querySelector<HTMLElement>('input') ?? panel.querySelector<HTMLElement>('[role="tab"][aria-selected="true"]') ?? panel.querySelector<HTMLElement>('a, button');
      first?.focus();
    }
  };

  menuTriggers.forEach((trigger) => {
    const panel = panels.find((item) => item.dataset.megaPanel === trigger.dataset.megaTrigger);
    if (!panel) return;
    trigger.addEventListener('click', (event) => {
      if (current?.panel === panel && openedByHover && event.detail !== 0) openedByHover = false;
      else if (current?.panel === panel) closeAll();
      else openPanel(panel, trigger, event.detail === 0);
    });
    trigger.addEventListener('pointerenter', () => {
      if (!desktop.matches || !hover.matches) return;
      window.clearTimeout(closeTimer);
      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => openPanel(panel, trigger, false, true), current ? 55 : 110);
    });
    trigger.addEventListener('pointerleave', () => window.clearTimeout(hoverTimer));
    trigger.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowDown') return;
      event.preventDefault();
      keyboardMode = true;
      openPanel(panel, trigger, true);
    });
  });
  root.addEventListener('pointerenter', () => window.clearTimeout(closeTimer));
  root.addEventListener('pointerleave', () => {
    window.clearTimeout(hoverTimer);
    if (!current?.panel.dataset.megaPanel || !openedByHover || !desktop.matches || (keyboardMode && root.contains(document.activeElement))) return;
    closeTimer = window.setTimeout(() => closeAll(), 170);
  });
  root.addEventListener('pointerdown', () => { keyboardMode = false; });
  root.addEventListener('keydown', () => { keyboardMode = true; });
  root.addEventListener('focusout', () => {
    window.setTimeout(() => { if (current && !root.contains(document.activeElement)) closeAll(); }, 0);
  });

  root.querySelectorAll<HTMLElement>('[data-mega-panel]').forEach((menu) => {
    const tabs = [...menu.querySelectorAll<HTMLButtonElement>('[data-mega-category]')];
    const select = (tab: HTMLButtonElement, focus = false) => {
      if (tab.getAttribute('aria-selected') === 'true') { if (focus) tab.focus(); return; }
      tabs.forEach((item) => {
        const on = item === tab;
        item.setAttribute('aria-selected', String(on));
        item.tabIndex = on ? 0 : -1;
        const group = document.getElementById(item.getAttribute('aria-controls') ?? '');
        if (group) { group.hidden = !on; group.inert = !on; }
      });
      if (focus) tab.focus();
      stagger(menu);
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('pointerenter', () => { if (hover.matches) select(tab); });
      tab.addEventListener('keydown', (event) => {
        let next: number;
        if (event.key === 'ArrowDown') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        select(tabs[next], true);
      });
    });
  });

  root.querySelectorAll<HTMLButtonElement>('[data-mobile-disclosure]').forEach((button) => {
    const section = document.getElementById(button.getAttribute('aria-controls') ?? '');
    if (!section) return;
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      void animate(section, open, true);
    });
  });
  mobileToggle?.addEventListener('click', () => {
    if (!mobilePanel) return;
    if (current?.panel === mobilePanel) closeAll();
    else openPanel(mobilePanel, mobileToggle);
  });
  searchToggle?.addEventListener('click', () => {
    if (!searchPanel) return;
    if (current?.panel === searchPanel) closeAll(true);
    else openPanel(searchPanel, searchToggle, true);
  });
  root.querySelectorAll('[data-header-close]').forEach((button) => button.addEventListener('click', () => closeAll(true)));
  backdrop?.addEventListener('click', () => closeAll());
  document.addEventListener('pointerdown', (event) => {
    if (current && event.target instanceof Node && !root.contains(event.target) && event.target !== backdrop) closeAll();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !current) return;
    event.preventDefault();
    closeAll(true);
  });
  root.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) closeAll();
  });
  desktop.addEventListener('change', () => closeAll());
  reduced.addEventListener('change', () => {
    if (reduced.matches) root.getAnimations({ subtree: true }).forEach((animation) => animation.finish());
  });
  const sync = () => {
    document.documentElement.style.setProperty('--header-h', `${Math.ceil(root.getBoundingClientRect().height)}px`);
    root.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('resize', sync, { passive: true });
  window.addEventListener('scroll', () => root.classList.toggle('is-scrolled', window.scrollY > 12), { passive: true });
  sync();

  const indexElement = root.querySelector('[data-header-search-index]');
  const index = JSON.parse(indexElement?.textContent || '[]') as HeaderSearchEntry[];
  const results = root.querySelector<HTMLElement>('[data-header-search-results]');
  const status = root.querySelector<HTMLElement>('[data-header-search-status]');
  const normalize = (value: string) => value.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const searchable = index.map((entry) => ({ entry, label: normalize(entry.label), text: normalize(`${entry.label} ${entry.category} ${entry.keywords ?? ''}`) }));
  const search = () => {
    if (!query || !results || !status) return;
    const q = normalize(query.value);
    const terms = q.split(/\s+/).filter(Boolean);
    const matches = q ? searchable.filter((item) => terms.every((term) => item.text.includes(term))).sort((a, b) => Number(b.label.includes(q)) - Number(a.label.includes(q))) : searchable.slice(0, 6);
    const visible = matches.slice(0, 10);
    results.replaceChildren();
    visible.forEach(({ entry }) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      const title = document.createElement('span');
      const category = document.createElement('small');
      link.href = entry.href;
      title.textContent = entry.label;
      category.textContent = entry.category;
      link.append(title, category);
      li.append(link);
      results.append(li);
    });
    status.textContent = !q ? 'Popular pages' : !matches.length ? 'No matches. Try another service, industry, or technology.' : `${matches.length > visible.length ? `${visible.length} of ` : ''}${matches.length} ${matches.length === 1 ? 'match' : 'matches'}`;
  };
  query?.addEventListener('input', search);
  search();
}
