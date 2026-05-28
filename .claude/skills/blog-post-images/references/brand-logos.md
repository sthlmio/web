# Brand logos

When a blog post is about specific products or technologies, the hero image usually centers on their official logos. Using the real, official mark – at the right colours and proportions – is what makes the image read as professional rather than slapdash.

## Where to source them

In order of preference:

1. **The vendor's official brand or press page.** Look for "brand assets", "press kit", "media kit", "logo", or "/brand" on the project's website. Almost every modern OSS project and SaaS has one. Examples:
   - `opencode.ai/brand`
   - `kubernetes.io` → "Community" → "Branding"
   - `openstack.org/brand`
   - `pi.dev` (uses the same wordmark across the site – copy from rendered SVG)

2. **The project's own repository.** GitHub repos for major projects usually have a `logos/`, `branding/`, `docs/assets/` or `static/` folder with SVGs.

3. **Wikimedia Commons** for very well-established marks (flags, country symbols, classic logos that are public domain). Verify the licence on the file page – CC-BY usually requires attribution somewhere, which we don't put on the image itself, so prefer PD or check the licence policy.

4. **Simple Icons** (`simpleicons.org`) as a last resort. These are monochrome glyph versions of brand marks, useful when you need a single colour and the official asset is too complex. They're community-maintained, so confirm against the official brand before shipping.

**Don't hand-trace logos** – it almost always ends up slightly off and looks unprofessional, and most brand guidelines explicitly forbid modifications.

## How to embed

Copy the path data from the official SVG and nest it as a child `<svg>` element so its coordinate space stays independent of the 1200×675 canvas:

```xml
<svg x="420" y="262" width="120" height="150"
     viewBox="0 6 24 30"
     preserveAspectRatio="xMidYMid meet">
  <path d="…" fill="#211E1E"/>
</svg>
```

- Keep the original `viewBox` from the brand SVG – don't try to rebase it.
- Set `x`, `y`, `width`, `height` on the wrapper to position and size it in the canvas.
- `preserveAspectRatio="xMidYMid meet"` keeps the logo centered without distortion.

## Brand-specific notes

These are products that have appeared on the blog so far. If a new post needs a logo not on this list, find the brand page and skim its rules before using the mark.

### OpenCode
- Site: opencode.ai
- Brand page: opencode.ai/brand
- Official mark is a square "O" glyph. Available in a black variant (`#211E1E`) for light backgrounds and a light variant (`#CFCECD`) for dark. The black variant pairs cleanly with the warm-yellow blog palette.

### Pi
- Site: pi.dev
- Mark is a custom letterform composed of two filled rectangles + a smaller block. Single colour. The pi.dev site renders it in `#211E1E` on light themes – match that when pairing it next to the OpenCode mark.

### Kubernetes
- Brand page: kubernetes.io/community/ (look for the branding/logo section) or the `kubernetes/community` GitHub repo.
- Primary colour: `#326de6` (Kubernetes blue). The wordmark next to it is usually white when placed on the brand-blue background, dark grey on light backgrounds.

### OpenStack
- Brand page: openstack.org/brand
- Primary colour: `#ed1844` (OpenStack red). Wordmark in white on the red.

### National flags (Sweden, etc.)
- Wikimedia Commons has clean SVGs of all national flags in the public domain.
- Sweden's flag colours are exact: blue `#005293` (Pantone 301), yellow `#fecc00` (Pantone 116). Don't eyeball these.

## When the post mentions a product but has no logo

Some posts reference products in passing but don't need their logo as the focal point. In that case, lean on the "single-subject illustration" or "concept gradient + glyph" pattern from the style guide instead of cramming three half-relevant logos into the image. One strong concept beats a logo collage every time.
