# Visual style guide

This is a snapshot of what's already on the blog. Use it as a starting palette, not a hard spec – a new post can introduce a new look, but it should still feel like it belongs in the same set.

## Canvas

- **Dimensions**: `viewBox="0 0 1200 675"` (16:9, matches `og:image` conventions and the layout the blog page renders).
- **Bleed**: nothing important within ~40px of any edge – social platforms sometimes crop.
- **Watermark zone**: bottom-right corner is reserved for the sthlm.io watermark (x=1060, y=620, 110×25, white). Don't put content under it.

## Palettes that are already in use

Reach for one of these before inventing a new palette. If the post genuinely needs a new colour story (a brand-coloured logo dominates, for instance), match the palette to the dominant brand colour rather than picking arbitrarily.

### Warm yellow (OpenCode + Pi post)

Used for an opinion/argument post about open agentic coding clients.

```
Background: radial gradient #ffd933 → #d9a800
Pattern overlay: 1px dark dots at 32px grid (#0a1a10 @ 10% opacity)
Foreground marks: near-black #211E1E
```

### Deep navy with aurora (Swedish data sovereignty post)

Used for a serious/technical post about digital sovereignty.

```
Background: radial gradient #152448 → #060a18
Aurora overlays:
  - Green:  radial #22d77a (30% → 0%) top-left
  - Purple: radial #9b59ff (28% → 0%) top-right
  - Teal:   radial #3eecff (18% → 0%) bottom-center
Stars: tiny white circles (0.5–0.8r) on an 80px pattern grid, low opacity
Accents: Swedish flag yellow #fecc00
```

### Brand red + navy split (Kubernetes on OpenStack post)

Used when contrasting two technologies that each have a brand identity.

```
Left polygon:  #0d1f3d (Kubernetes navy)
Right polygon: #ed1844 (OpenStack red)
Diagonal split: points cross at roughly x=500–700, top-to-bottom
Logos and wordmarks: white (#ffffff)
```

## Layout patterns

### Two-logo split

For posts that pair or contrast two technologies. The Kubernetes-on-OpenStack image is the canonical example. Recipe:

1. Two polygons fill the canvas, separated by a diagonal seam.
2. Each side gets the corresponding brand logo (icon) at ~200×200 around y=195.
3. Each side gets the wordmark below the icon at y=415, ~360×55.
4. Watermark in the bottom-right, on top of whichever colour ends up there.

The OpenCode + Pi image is a softer take on this – same idea (two marks side by side), but on a shared background instead of split polygons, because the post is about *both* tools as an alternative rather than a contrast.

### Single-subject illustration

For posts where one concept dominates and there's no logo pair. The data sovereignty image stylises a server rack with a Swedish flag overlay. These take longer to build but carry more personality – worth it for flagship posts.

### Embedded brand logos

Always nest the logo as its own `<svg>` element so its coordinate system is independent of the canvas:

```xml
<svg x="420" y="262" width="120" height="150"
     viewBox="0 6 24 30"
     preserveAspectRatio="xMidYMid meet">
  <!-- paths copied verbatim from the brand asset -->
</svg>
```

- `x`/`y`/`width`/`height` position it in the 1200×675 canvas.
- `viewBox` and the paths inside come straight from the official brand SVG – don't re-trace.
- `preserveAspectRatio="xMidYMid meet"` centers and scales without distortion.

## Patterns and textures

Subtle texture sells the image as "designed" rather than "thrown together". The two recipes already in use:

```xml
<!-- Dot grid: works well on warm/light backgrounds -->
<pattern id="dotGrid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
  <circle cx="2" cy="2" r="1" fill="#0a1a10" fill-opacity="0.10"/>
</pattern>

<!-- Stars: works well on deep / night-mode backgrounds -->
<pattern id="stars" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
  <circle cx="14" cy="22" r="0.8" fill="#ffffff" fill-opacity="0.4"/>
  <circle cx="55" cy="48" r="0.6" fill="#ffffff" fill-opacity="0.3"/>
  <circle cx="32" cy="68" r="0.5" fill="#ffffff" fill-opacity="0.25"/>
</pattern>
```

Layer the pattern with `<rect fill="url(#patternId)"/>` covering the full canvas, on top of the background and under any subject.

## Accessibility

- Root `<svg>` always has `role="img"` and `aria-label="…"` – without these, screen readers treat the image as decorative.
- The `aria-label` should describe what's in the image, not the post's topic ("OpenCode och Pi – två öppna agentiska kodklienter", not "Article about open source coding tools").
- The same text (or a tightened version) goes into the post's `imageAlt:` frontmatter field – the page uses one or the other depending on context, so they should match in meaning.
- Contrast: dark marks on light backgrounds and vice versa. The brand red + navy split passes WCAG AA for white text/logos on both sides; the warm yellow background needs near-black foreground marks (the official OpenCode dark variant works, the white variant doesn't).
