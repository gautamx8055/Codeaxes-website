import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export function initAtelierMotion() {
  initLookbook();

  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const triggers: ScrollTrigger[] = [];
    const tweens: gsap.core.Tween[] = [];

    document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const tween = gsap.fromTo(
        el,
        { yPercent: -11, scale: 1.12 },
        {
          yPercent: 9,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: parent,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        },
      );
      tweens.push(tween);
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    const fill = document.querySelector<HTMLElement>("[data-process-fill]");
    const process = document.querySelector<HTMLElement>("[data-process]");
    if (fill && process) {
      const tween = gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: process,
            scrub: 0.45,
            start: "top 50%",
            end: "bottom 30%",
          },
        },
      );
      tweens.push(tween);
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    }

    const pageProgress = document.querySelector<HTMLElement>("[data-page-progress]");
    if (pageProgress) {
      const tween = gsap.fromTo(
        pageProgress,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: { scrub: 0.3, start: "top top", end: "bottom bottom" },
        },
      );
      tweens.push(tween);
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    }

    document.querySelectorAll<HTMLElement>("[data-process-step]").forEach((step) => {
      const tween = gsap.fromTo(
        step,
        { y: 36 },
        {
          y: 0,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: step,
            start: "top 88%",
            end: "top 58%",
            scrub: 0.5,
          },
        },
      );
      tweens.push(tween);
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    const ticker = document.querySelector<HTMLElement>("[data-ticker]");
    if (ticker) {
      tweens.push(
        gsap.to(ticker, {
          xPercent: -50,
          duration: 42,
          ease: "none",
          repeat: -1,
        }),
      );
    }

    document.querySelectorAll<HTMLElement>("[data-chapter]").forEach((section) => {
      const id = section.dataset.chapter;
      if (!id) return;
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 45%",
        end: "bottom 45%",
        onToggle: (self) => {
          if (!self.isActive) return;
          document.querySelectorAll("[data-chapter-link]").forEach((link) => {
            link.classList.toggle("is-current", link.getAttribute("data-chapter-link") === id);
          });
        },
      });
      triggers.push(trigger);
    });

    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const raw = el.dataset.count ?? el.textContent ?? "";
      const numeric = Number.parseFloat(raw.replace(/[^\d.]/g, ""));
      if (!Number.isFinite(numeric) || !/^[\d+\-−]/.test(raw)) return;
      const prefix = raw.startsWith("+") ? "+" : raw.startsWith("−") || raw.startsWith("-") ? "−" : "";
      const suffix = raw.replace(/^[+\-−\d.]+/, "");
      const obj = { val: 0 };
      const tween = gsap.to(obj, {
        val: numeric,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
        onUpdate: () => {
          const rounded = numeric % 1 === 0 ? Math.round(obj.val) : obj.val.toFixed(1);
          el.textContent = `${prefix}${rounded}${suffix}`;
        },
      });
      tweens.push(tween);
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
      tweens.forEach((t) => t.kill());
      if (ticker) gsap.set(ticker, { clearProps: "transform" });
    };
  });

  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener("load", refresh);
  void document.fonts?.ready.then(refresh);
}

function initLookbook() {
  const root = document.querySelector<HTMLElement>("[data-lookbook]");
  if (!root) return;

  const sheets = Array.from(root.querySelectorAll<HTMLElement>("[data-lookbook-sheet]"));
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-lookbook-tab]"));
  const copies = Array.from(root.querySelectorAll<HTMLElement>("[data-lookbook-copy]"));
  const folio = root.querySelector<HTMLElement>("[data-lookbook-folio]");
  const prev = root.querySelector<HTMLButtonElement>("[data-lookbook-prev]");
  const next = root.querySelector<HTMLButtonElement>("[data-lookbook-next]");
  if (sheets.length === 0) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const stacked = window.matchMedia("(min-width: 1024px)");
  let active = 0;

  const slots = [
    { xPercent: 0, yPercent: 0, rotate: -1.2, scale: 1, opacity: 1 },
    { xPercent: 9, yPercent: 7, rotate: 5.5, scale: 0.93, opacity: 0.92 },
    { xPercent: 16, yPercent: 13, rotate: -6.5, scale: 0.88, opacity: 0.8 },
    { xPercent: 22, yPercent: 19, rotate: 8, scale: 0.84, opacity: 0.68 },
  ];

  const layout = (index: number, animate: boolean) => {
    active = (index + sheets.length) % sheets.length;
    const duration = animate && !reduce.matches ? 0.58 : 0;
    const ease = "power3.out";

    sheets.forEach((sheet, i) => {
      const stack = (i - active + sheets.length) % sheets.length;
      const slot = slots[Math.min(stack, slots.length - 1)];
      sheet.classList.toggle("is-active", i === active);
      sheet.style.zIndex = String(20 - stack);
      const to = stacked.matches
        ? {
            xPercent: slot.xPercent,
            yPercent: slot.yPercent,
            rotate: slot.rotate,
            scale: slot.scale,
            opacity: i === active ? 1 : slot.opacity,
          }
        : { xPercent: 0, yPercent: 0, rotate: 0, scale: 1, opacity: i === active ? 1 : 0 };
      gsap.to(sheet, { ...to, duration, ease, overwrite: "auto" });
    });

    tabs.forEach((tab, i) => {
      const on = i === active;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
    });

    copies.forEach((copy, i) => {
      copy.hidden = i !== active;
    });

    if (folio) {
      folio.textContent = `${String(active + 1).padStart(2, "0")} / ${String(sheets.length).padStart(2, "0")}`;
    }
  };

  const go = (index: number) => layout(index, true);

  sheets.forEach((sheet, i) => {
    sheet.addEventListener("click", () => {
      go(i);
      tabs[i]?.focus();
    });
  });
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => go(i));
  });
  prev?.addEventListener("click", () => go(active - 1));
  next?.addEventListener("click", () => go(active + 1));

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      go(active + 1);
      tabs[active]?.focus();
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      go(active - 1);
      tabs[active]?.focus();
    }
  });

  stacked.addEventListener("change", () => layout(active, false));
  layout(0, false);
}
