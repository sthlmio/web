const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const yaml = require('js-yaml')

const SITE_URL = 'https://sthlm.io'
const BLOG_DIR = path.join(__dirname, '..', 'blog')
const OUT_DIR = path.join(__dirname, '..', 'public')
const OUT_FILE = path.join(OUT_DIR, 'sitemap.xml')

const STATIC_PATHS = ['/', '/blog', '/terms']

const yamlEngine = {
  parse: (str) => yaml.load(str, { schema: yaml.CORE_SCHEMA }),
  stringify: yaml.dump,
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toIsoDate(dateTime) {
  if (!dateTime) return ''
  const d = new Date(dateTime)
  if (Number.isNaN(d.getTime())) return ''
  return d.toISOString().slice(0, 10)
}

function readPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data } = matter(raw, { engines: { yaml: yamlEngine } })
      return { slug, dateTime: String(data.date || '') }
    })
    .sort(
      (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
    )
}

function urlEntry(loc, lastmod) {
  const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''
  return `  <url>
    <loc>${escapeXml(loc)}</loc>${lastmodTag}
  </url>`
}

function buildSitemap(posts) {
  const newestPostDate = posts[0]?.dateTime ? toIsoDate(posts[0].dateTime) : ''

  const entries = STATIC_PATHS.map((p) => {
    const loc = p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`
    const lastmod = p === '/blog' ? newestPostDate : ''
    return urlEntry(loc, lastmod)
  })

  for (const p of posts) {
    entries.push(urlEntry(`${SITE_URL}/blog/${p.slug}`, toIsoDate(p.dateTime)))
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const posts = readPosts()
  fs.writeFileSync(OUT_FILE, buildSitemap(posts))
  const total = STATIC_PATHS.length + posts.length
  console.log(
    `sitemap: wrote ${total} url${total === 1 ? '' : 's'} to ${path.relative(process.cwd(), OUT_FILE)}`,
  )
}

main()
