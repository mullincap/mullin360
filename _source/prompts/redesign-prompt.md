# Redesign prompt for Fable

Paste everything below the line into a new chat with this folder (`mullin-site`) connected.

---

## The commission

Redesign `index.html` — the landing page for Mullin Development — and treat it as the single best page you have ever produced.

The stakes: Mullin is a national real estate development firm currently pursuing a $2.3B development, the largest in its history. The people deciding whether Mullin can execute at that scale — institutional capital partners, municipal and tribal community officials, automotive brand executives, dealer-group principals — will open this page the night before a meeting and form a judgment in under ten seconds. The current site is competent. Yours must end the conversation about whether Mullin belongs at that table.

Do not put the $2.3B figure anywhere on the page. It is stakes, not content.

## What is fixed

**Evolve the brand, don't restart it.** Keep the logo files, the tagline "Developing with Purpose," and the green-rooted, desert-Southwest identity. Everything else — the type system, layout, grid, motion, photographic treatment, texture, and overall feel — is yours to reinvent completely.

**Facts are locked.** The current `index.html` is the source of truth for every fact: company history (Scottsdale, AZ · Est. 1994 · founded by father-son team Art and Jim Mullin), the mission quote, the stats (30+ years, 7+ industries, 1,200+ sites, $1.6B CRE value), all nine projects with their locations and details, the four approach pillars, the six "with Purpose" principles, the four executives and their bios, the ventures (Mullin360, AZ Collaborate), and the address (6910 E 5th Ave, Scottsdale, AZ 85251). You may rewrite copy for rhythm, confidence, and concision — you may not invent projects, people, numbers, or claims. You may restructure, merge, or cut sections if the page is stronger for it.

**These links must keep working:** `projects.html`, `media.html`, `contact.html`, https://mullin360.com, https://azcollaborate.com.

## Read before you design

1. `index.html` — the current page, in full. Understand what it says before deciding how to say it better.
2. `design-system.html` and `design-selector.html` — prior design explorations. Context only, not binding.
3. `projects.html`, `contact.html`, `media.html` — your nav and footer must not orphan them.

## Asset inventory (all local, paths are case-sensitive)

- **Logos:** `white-sq-long.png` (white horizontal, for dark nav), `white-sq.png` (white square, footer), `white-full.png`, `logo-green.png`, `logo-long-blk.png` (black horizontal)
- **Hero-grade imagery:** `sas.jpg` (current hero), `tempe.jpg`, `mix1.jpg`, `mix2.jpg`, `mix3.jpeg`
- **Project cards:** `1project-sas.png`, `1project-penske.png`, `1project-reverside.png`, `1project-art.png`, `1project-303.png`, `1project-greencastle.jpeg`, `1project-tempe.png`, `1project-costco.png`, `1project-centerra.jpg`, plus unused `1projects-casa.png`
- **Team:** `team-headshot-1.png` (Jim Mullin), `team-headshot-2.png` (Jacqueline Swanson), `team-headshot-3.png` (Mark Simmons). Mark Jackson has no headshot — solve that elegantly, no awkward placeholder.
- **Office/culture:** `office.jpg`, `m360-2.jpg`, `m360-14.jpg` through `m360-22.jpg`, `m360-24.jpg`, `m360-14b.png`, `m360-14c.png`, and `m360-team-jim.jpg` / `m360-team-jacque-4.jpg` / `m360-team-mark-5.jpg`
- One vision-slideshow image is currently hotlinked from azcollaborate.com — replace it with a local asset.

## The audience and the bar

This page is read by people who underwrite nine-figure deals and approve 100-acre entitlements. It must feel like the digital equivalent of walking into the lobby of a firm you'd trust with $2.3B: calm, inevitable, precise. Benchmark against the best in the built-environment world — Hines, Related, Foster + Partners, Olson Kundig, Aman — sites that feel like architecture, not marketing. Every real estate developer's site has a full-bleed hero, a stat row, a project grid, and a team section. Yours will probably have those too. The difference must be in the execution: the page should feel authored, not assembled.

## Design directives

- **A thesis, not a theme.** Before writing code, state your design thesis in a few sentences: the one idea that organizes every decision. Sketch three distinct concepts, pick the strongest, and say why. Then commit to it totally — a page that is 100% one idea beats a page that is 80% three ideas.
- **Typography carries the gravity.** Large, patient, editorial. Whether you keep Cormorant Garamond or evolve to a stronger pairing, the type system should be doing most of the design work. Sweat the details: optical sizes, tight display tracking, real em-dashes, hanging punctuation where possible.
- **Photography as cinema.** Full-bleed, confident crops, consistent color treatment across wildly inconsistent source photos (use CSS filters/overlays to unify them). The projects are 40–100 acre developments — make them feel monumental.
- **Motion as restraint.** Scroll choreography that feels engineered, not decorated: measured reveals, subtle parallax, easing curves you chose deliberately. Nothing bounces. Nothing spins. Respect `prefers-reduced-motion`.
- **Negative space is the luxury.** Let sections breathe. Density reads as small; space reads as institutional.
- **Kill the anti-patterns:** no emoji, no icon-card soup (the six identical squares-icon cards on the current page are the weakest thing on it), no SaaS gradients, no generic counters ticking up, no stock-photo tropes, no rounded-corner sameness, none of the uniform slickness that marks a template.

## Technical requirements

- One self-contained file: all CSS and JS inline in `index.html`. No frameworks, no build step, vanilla JS only. Google Fonts allowed. Must work opened directly from the filesystem (relative paths).
- Performance discipline: several source PNGs exceed 2MB. Choose the lighter JPG variants where possible, preload the hero image, lazy-load everything below the fold, set explicit dimensions to prevent layout shift.
- Fully responsive, 390px through 1920px. The current mobile experience just hides the nav links — build a real mobile menu.
- Semantic HTML, WCAG AA contrast, visible focus states, alt text on every image.
- `<meta name="description">`, Open Graph, and Twitter card tags — this URL gets pasted into emails and texts between decision-makers; the unfurl is part of the design.

## Process — do not skip steps

1. Read the files listed above. Write your thesis and three concepts. Choose one.
2. Build the page completely.
3. **Critique pass one:** render it (screenshot at 1440px, 768px, and 390px if browser tools are available; otherwise review the code ruthlessly). Name the five weakest things on the page. Fix all five.
4. **Critique pass two:** repeat. The question for every element: "Would the creative director of a top-tier studio sign this?" Do not ship the first draft, and do not ship the second.
5. Verify every image path resolves against the real files (case-sensitive), every internal and external link works, and the page is valid HTML.
6. Save the current page to `index-backup.html`, then overwrite `index.html` in place.

You have full creative authority within these constraints. Spend it.
