# Brand identity system prompt for Fable

Paste everything below the line into a new chat with this folder (`mullin-site`) connected. Run on maximum effort.

---

## The commission

We just redesigned `index.html` — the landing page for **Mullin Development**, a national real estate development firm — into something we're proud of. Your job now is to **codify the design language of that page into a single, definitive brand identity system**: one self-contained HTML document that becomes the source of truth for the entire brand.

This document has two jobs, and it must do both without compromise:

1. **A working reference.** The other pages of the site (`projects.html`, `contact.html`, `media.html`, `project-detail.html`, and future pages) will be redesigned to match the landing page. This document is what a designer or developer opens to know *exactly* how to build on-brand — the colors, the type scale, the spacing rhythm, the components, the motion, the voice. Precise enough to build from.

2. **A showpiece.** This is a client-facing artifact. The client — the owner of a national real estate firm — should open it and feel that they have a real brand: unique, memorable, and worth being proud of. It should read as a document a top-tier brand studio would charge north of $50,000 to produce. A keystone masterpiece, not a spec sheet.

Hold both in tension. A brand guide that is only rigorous is a PDF nobody loves. One that is only beautiful can't be built from. This is both.

## The wow factor — non-negotiable

Rigor and taste are the floor, not the ceiling. This document must have a **signature moment** — one deliberate, breathtaking piece of craft that makes the client stop, look twice, and want to show it to someone. The instant they realize this isn't a style guide, it's *their brand, alive*.

This is a design problem to solve, not a decoration to bolt on. It must earn its place *through* the brand's own logic — the "firm's book" thesis, the seal-green, the editorial gravity — never against it. Restraint everywhere else is what gives the wow moment room to land. Some directions worth exploring (pick one and execute it flawlessly; don't scatter):

- A **cinematic cover sequence** — the identity assembling itself on load through choreographed motion, the way a title sequence resolves.
- A **living color system** — swatches that respond, that show paper-to-night transitions, that demonstrate the seal-green discipline interactively rather than as static chips.
- An **interactive type specimen** — the Cormorant display scale rendered so beautifully it feels like a letterpress proof you could reach out and touch.
- A **"build it live" component playground** — a real component reconfiguring on the page (paper ↔ night, tight ↔ open), proving the system is a machine, not a mood board.
- A **hero data-plate** — the firm's numbers (30+ years, 1,200+ sites, $1.6B) rendered as a single unforgettable monumental composition.

Whatever you choose: it should feel *inevitable in hindsight and surprising in the moment*. Motion, if used, stays engineered and calm — the wow comes from precision and confidence, not spectacle. No confetti, no gimmicks. Something a top studio's creative director would screenshot.

## What the brand already is — the DNA to codify

The landing page has a fully formed identity. **Read `index.html` in full first** — it is the source of truth. Below is the DNA already in it, so you're formalizing what exists, not inventing something new.

**The organizing thesis.** The page is built as *the firm's book* — chapters, plates, a ledger, signatures, and a colophon. Numbered chapters (01–06). Full-bleed photographic "plates" as interludes. Data presented as a ruled ledger. Green used as a *seal*, not wallpaper. This editorial-monograph concept is the heart of the brand; the guide should name it, explain it, and make it the spine of the document.

**Color — "paper + ink + a seal":**
- Paper `#F4F1EA`, Paper-2 `#ECE8DE` (warm off-white grounds)
- Ink `#151A15` (near-black, warm), with tints Ink-70 / Ink-55 for hierarchy
- Night `#0C120D`, Night-2 `#101812` (dark sections), Bone `#F4F1EA` on night
- The seal: Green `#0E6133`, Green-deep `#0A4A27`, Green-lift `#7FA98E` (the only green legible on night)
- Hairline rules: subtle ink/bone lines at ~9–16% opacity carry the structure
Explain the *discipline* behind green — it appears as accent and seal, never as fill.

**Typography:**
- Serif display: **Cormorant Garamond** (500/400 italic) — carries all the gravity, large and patient
- Sans: **DM Sans** (300 body) — quiet, legible supporting voice
- Mono: **IBM Plex Mono** — labels, chapter indices, coordinates, metadata; uppercase, wide tracking (~0.18–0.22em), tabular numerals
Document the full type scale, the `clamp()`-based fluid sizing, italic usage, hanging punctuation, and tight display tracking.

**Spacing & rhythm:** fluid gutter `clamp(1.5rem, 6vw, 7.5rem)`, chapter gap `clamp(6rem, 13vh, 11rem)`. Negative space is the luxury — density reads small, space reads institutional.

**Motion:** measured, engineered restraint. Signature easing `cubic-bezier(0.19, 1, 0.22, 1)`. Reveal-on-scroll, hero settle, subtle plate parallax. Nothing bounces or spins. `prefers-reduced-motion` fully respected.

**Voice:** confident, spare, institutional. Tagline **"Developing with Purpose."** Chapter names use "The Firm / The Work / The Method / The Purpose / The People / Ventures." Verbs as section headers (Develop, Plan, Build…). Em-dashes, real typography.

**The seal of facts (locked — do not invent or alter):** Scottsdale, AZ · Est. 1994 · founded by father-son team Art & Jim Mullin · 30+ years · 7+ industries · 1,200+ sites · $1.6B CRE value · address 6910 E 5th Ave, Scottsdale, AZ 85251. Use these only where the guide needs real content to demonstrate the system.

## What the brand system document must contain

Build it as a chaptered document in the same monograph spirit as the site. At minimum, cover:

1. **Cover & thesis** — the brand's organizing idea stated plainly and beautifully. What Mullin *is*, in one page.
2. **Logo system** — the existing marks (`white-sq-long.png`, `white-sq.png`, `white-full.png`, `logo-green.png`, `logo-long-blk.png`), when to use each, clear-space and minimum-size rules, correct placement on paper vs. night grounds, and a short list of misuses.
3. **Color** — the full palette with hex values, swatches, roles (ground / ink / seal / hairline), the paper-vs-night pairing logic, and the discipline governing green. Note contrast/accessibility pairings.
4. **Typography** — the three families, the full display-to-caption scale with live specimens, the fluid sizing approach, tracking and weight rules, italic and mono usage, and hanging-punctuation details.
5. **Spacing, grid & layout** — the gutter and chapter-gap system, the ruled-line structure, the chapter-bar pattern, and how negative space is deployed.
6. **Components** — a live library rendered *in the document itself*, each shown working with a one-line "when to use it": the chapter bar, the statement/pull-quote, the figures ledger, the full-bleed plate + caption, the editorial project plate (`wplate`), the record/index table, the numbered method list, the verb "litany," the people rows, the ventures rows, buttons/links (`.lnk`, `.btn-seal`), the nav (paper + night states), and the colophon/footer.
7. **Motion** — the easing curve, timing, the reveal/parallax/hero-settle patterns, and the restraint rules, with at least one live demonstration.
8. **Photography** — the treatment that unifies inconsistent source photos (desaturate ~0.82–0.88, contrast ~1.04, faint sepia, night gradients/overlays), crop philosophy ("make 40–100 acre developments feel monumental"), and paper-grain texture.
9. **Voice & copy** — tone principles, the tagline, chapter-naming convention, and do/don't examples of on-brand writing.
10. **Application** — a short, concrete guide showing how to take these rules and build the *next* page on-brand (a worked example or checklist a developer follows).

Where it strengthens the document, show real rendered swatches, specimens, and working components rather than describing them in prose. Seeing the system *is* the proof of it.

## The bar

Benchmark against the brand guidelines of firms that treat identity as architecture — Hines, Related, Foster + Partners, Aman, Olson Kundig — not against SaaS style guides. The document should feel authored and inevitable: calm, precise, confident. Every page should look like it was set by hand.

**Kill the anti-patterns:** no emoji, no icon-card soup, no SaaS gradients, no rounded-corner sameness, no generic "Do / Don't" clip-art, no filler. If an element wouldn't survive the creative director of a top studio, it doesn't ship.

## Technical requirements

- **One self-contained file** — `brand-system.html` (do not overwrite the existing `design-system.html`; if you reference it for context, treat it as prior exploration only, not binding). All CSS and JS inline. No frameworks, no build step, vanilla JS only. Google Fonts allowed. Must work opened directly from the filesystem with relative paths.
- **Reuse the real tokens and assets** from `index.html` so the guide is literally the same system, not an approximation. Pull the actual CSS variables, fonts, and image paths (case-sensitive).
- **Fully responsive**, 390px through 1920px, with a real mobile experience.
- **Accessible:** semantic HTML, WCAG AA contrast, visible focus states, alt text on every image, `prefers-reduced-motion` respected.
- **Performance:** prefer lighter JPG variants, lazy-load below-the-fold imagery, set explicit dimensions to prevent layout shift.

## Process — do not skip steps

1. Read `index.html` in full. Extract the real design tokens, components, and voice. Then read `design-system.html`, `design-selector.html`, and one other page (e.g. `projects.html`) for context on how the system extends.
2. Write a one-paragraph thesis for the *document* — how it will feel and how it earns the "$50k keystone" bar — before writing code.
3. Build the full document.
4. **Critique pass one:** render it (screenshot at 1440px, 768px, and 390px if browser tools are available; otherwise review the code ruthlessly). Name the five weakest things and fix all five.
5. **Critique pass two:** repeat. For every element ask: "Would a top brand studio put its name on this page?" **And name the one moment that delivers the wow — if you can't point to it, you haven't built it yet; go back and create it.** Do not ship the first or second draft.
6. Verify every image path resolves (case-sensitive), every swatch/spec matches the real `index.html` values exactly, and the HTML is valid.
7. Save as `brand-system.html`.

You have full creative authority within these constraints. This is the document the brand is judged by. Spend it.
