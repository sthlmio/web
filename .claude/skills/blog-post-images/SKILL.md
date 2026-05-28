---
name: blog-post-images
description: Create the hero/OG image for a sthlm.io blog post – an SVG at 1200×675 saved to public/static/blog-{slug}.svg, with the matching PNG generated for OG cards. Also wires the image: and imageAlt: fields into the post's frontmatter. Use this whenever the user asks for a blog image, hero image, OG image, header illustration, or "image for the post about X" – even if they only mention the post and not the image explicitly. Use it for new posts that have no image yet, and for redesigns of existing ones.
---

# Blog post images

Blog posts on sthlm.io live in `pages/blog/{slug}.md` and each one points to a hero image used as both the in-page header and the OpenGraph/social card. The image is an SVG; a sibling PNG is generated for OG cards because some platforms don't render SVG.

This skill walks through producing that pair, keeping it visually consistent with the rest of the blog, and wiring it into the post's frontmatter.

## What "done" looks like

For a post at `blog/{slug}.md`:

1. `public/static/blog-{slug}.svg` – 1200×675, hand-crafted SVG with the sthlm.io watermark in the bottom-right corner.
2. `public/static/blog-{slug}.png` – generated from the SVG by the project's existing script.
3. Frontmatter in `blog/{slug}.md` contains:
   ```yaml
   image: /static/blog-{slug}.svg
   imageAlt: <short, meaningful description of the image>
   ```

If any of those three are missing or stale, the task isn't done.

## Workflow

### 1. Read the post

Open `blog/{slug}.md` and read it end-to-end. The image should reflect what the post is actually about – not just its title. Note:

- The main subject (a technology, a contrast between two things, an abstract concept like sovereignty).
- Any named tools, products, or brands that already have official logos – these often become the focal point of the image (see `references/brand-logos.md`).
- The mood: technical/explanatory vs. opinion/argument vs. an announcement.

If the post is new and the user is asking before they've written much, ask them what the post is about and what they'd like the image to convey before drafting.

### 2. Pick a visual concept

Look at `references/style-guide.md` for the patterns already used on the blog. A few common shapes:

- **Two-logo split** – when the post contrasts or combines two technologies (Kubernetes + OpenStack, OpenCode + Pi). Diagonal or vertical split background, one logo on each side.
- **Single-subject illustration** – when there's no obvious logo pair (the digital sovereignty post used a stylised server rack with a Swedish flag).
- **Concept gradient + glyph** – when the post is more abstract; a strong gradient background with a single mark or icon centered.

Reuse the same gradient/palette language already on the blog rather than introducing a wildly new look every time. The existing images are warm-yellow, deep-navy with aurora, and red/navy split – treat those as a starting palette rather than a hard constraint.

### 3. Build the SVG

Start from `assets/template.svg` – it's a 1200×675 canvas with the sthlm.io watermark already placed correctly in the bottom-right corner. **Always keep the watermark, at the existing coordinates and size, white.** It's the one element that has to be identical across every blog image.

Other rules that aren't negotiable:

- Root `<svg>` must have `viewBox="0 0 1200 675"`, `role="img"`, and a real `aria-label` describing the image (this also becomes the alt text people hear with screen readers).
- Logos for real products should come from the vendor's official brand assets. See `references/brand-logos.md` for sourcing – don't hand-trace logos, and don't recolour them in ways the brand guide forbids.
- Embed logos as nested `<svg>` elements with their own `viewBox` and `preserveAspectRatio="xMidYMid meet"` – this is how the existing images keep brand logos crisp. There are concrete examples in the style guide.
- Keep it pure SVG. No external image references, no web fonts – everything has to render standalone because the PNG generator reads the file in isolation.

### 4. Generate the PNG

Run the project's existing script from the repo root:

```bash
node scripts/generate-og-images.js
```

It scans `public/static/` for `blog-*.svg` / `og-*.svg`, regenerates any PNG whose mtime is older than its SVG, and skips the rest. Output looks like `generated blog-{slug}.png (1200×675)`. If it reports `0 generated`, your SVG didn't actually change – check the mtime or that you saved to the right path.

The script depends on `sharp`, which is already in the project. If it fails with a missing-module error, run `npm install` first.

### 5. Wire the frontmatter

Open `blog/{slug}.md`. If `image:` and `imageAlt:` already exist, update them. Otherwise add them in the YAML frontmatter block at the top:

```yaml
image: /static/blog-{slug}.svg
imageAlt: <same text you put in aria-label, or a tightened version of it>
```

Use a leading slash (`/static/…`), no domain. The alt text should describe what's *in* the image, not repeat the title – screen-reader users already get the title from elsewhere on the page.

### 6. Sanity check

Before reporting done:

- Open the SVG in a browser or preview it inline to make sure it renders – a broken `<path>` or unclosed tag will show as a blank or partial image.
- Confirm both files exist: `ls public/static/blog-{slug}.{svg,png}`.
- Confirm the frontmatter points at the SVG path you actually wrote.

## Iterating on an existing image

If the user asks to tweak an existing blog image (change a colour, swap a logo, redo the layout):

1. Edit the SVG directly – don't regenerate from scratch unless they ask for a redesign.
2. Re-run `node scripts/generate-og-images.js`. The script regenerates the PNG because the SVG's mtime is now newer.
3. Don't touch the frontmatter unless the alt text needs to change too.

A two-line colour swap is fine. A full redesign should walk through steps 1–6 again so the new concept is grounded in what the post is actually about.

## References

- `assets/template.svg` – starting canvas with the watermark in place. Copy this; don't edit it.
- `references/style-guide.md` – palettes, gradient recipes, and layout patterns observed in the existing images.
- `references/brand-logos.md` – where to find official SVGs for the products that show up most in this blog (Kubernetes, OpenStack, OpenCode, Pi, etc.) and how to embed them.
