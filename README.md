# Mullin Development — mullindev.com

A static site. No build step, no framework, no dependencies. Every page is a
self-contained HTML file with its CSS and JS inline, and works opened directly
from the filesystem.

## The design system

The site is built as **the firm's book**: numbered chapters, full-bleed plates,
a ruled ledger, a colophon. Paper + ink + a seal — green is an accent and a
seal, never a fill. Type is Cormorant Garamond (display), DM Sans (body), and
IBM Plex Mono (labels, indices, figures).

`brand-system.html` is the definitive reference for colors, type scale, spacing,
components, motion, and voice. **Read it before changing any page.**

The organizing argument is **the arc** — every development travels from raw
ground (00) through assemblage (01), entitlement (02), horizontal (03), and
vertical (04), to occupancy (05). Each project carries a *phase meter* showing
where it stands. See chapter 03 of the homepage.

## Pages

| File | What it is |
|---|---|
| `index.html` | The homepage — the book, with the arc and phase meters |
| `projects.html` | "The Record" — all ten works, filterable |
| `project-detail.html` | "The Plates" — one work per `?id=` slug (see `PROJECTS` in the file) |
| `media.html` | "The Journal" — dispatches |
| `contact.html` | "Correspondence" |
| `brand-system.html` | The brand identity system (client-facing artifact) |
| `404.html` | Not found |

Project detail slugs: `scottsdale-autoshow`, `penske-north-scottsdale`,
`303-autoshow`, `tempe-autoplex`, `centerra`, `riverside-county`, `art-at-mmr`,
`costco`, `greencastle-hotel`, `casa-grande`.

## Editing

The site chrome (nav, footer colophon, design tokens) is **deliberately
identical across every page**. If you change the nav or footer on one page,
mirror it to all of them.

## Forms

The contact and newsletter forms post to **Netlify Forms** (`data-netlify="true"`).
Submissions appear in the Netlify dashboard under Forms. Configure email
notifications there. Both degrade gracefully: if the POST fails, the contact
form surfaces the phone number and email address rather than swallowing the error.

## Deploying

Netlify, from the repo root. `netlify.toml` handles headers, caching, clean
URLs, and blocks `/archive/` and `/_source/` from public access.

## Directories

- `archive/` — superseded page versions and design explorations. Not served.
- `_source/` — working files: reference CSVs, internal prompts, original
  uncompressed images, unused photography. **Not served.** Note that if this
  repo is ever made public, these files are visible in the git history.

## Known follow-ups

1. **Phase assignments need confirmation.** Riverside County (Entitlement) is
   confirmed. Greencastle (Vertical), Costco (Entitlement), and Casa Grande
   (Assemblage) are inferred from "in progress" / "coming soon" and should be
   verified by the firm — the meters state these publicly.
2. **Casa Grande has no real imagery.** It currently shows an AutoNation
   dealership photo inherited from the previous site; the alt text is hedged
   accordingly. Replace when real imagery exists.
3. **Centerra imagery is tiny** (~300px). The pages design around this; higher
   resolution photography would let it carry a full plate.
4. **Plate 01 site-plan concept.** A self-drawing animated site plan was
   prototyped (see `archive/entitlement-concept.html`). It needs a properly
   drafted vector from the civil DWG before it can ship — the prototype's
   geometry was illustrative, not surveyed.
