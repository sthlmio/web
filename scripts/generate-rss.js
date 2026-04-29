const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const yaml = require('js-yaml')

const SITE_URL = 'https://sthlm.io'
const BLOG_DIR = path.join(__dirname, '..', 'blog')
const OUT_DIR = path.join(__dirname, '..', 'public', 'blog')
const OUT_FILE = path.join(OUT_DIR, 'rss.xml')

const FEED_TITLE = 'sthlm.io – Infrastruktur för den nya vardagen'
const FEED_DESCRIPTION =
  'Vi hjälper er att planera, bygga och drifta säkra och tillgängliga tjänster och plattformar med svensk datasuveränitet.'

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

function toRfc822(dateTime) {
  const d = new Date(dateTime)
  if (Number.isNaN(d.getTime())) return ''

  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Stockholm',
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZoneName: 'longOffset',
    })
      .formatToParts(d)
      .map((p) => [p.type, p.value]),
  )

  const offset = parts.timeZoneName.replace('GMT', '').replace(':', '') || '+0000'
  return `${parts.weekday}, ${parts.day} ${parts.month} ${parts.year} ${parts.hour}:${parts.minute}:${parts.second} ${offset}`
}

function readPosts() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data } = matter(raw, { engines: { yaml: yamlEngine } })
      return {
        slug,
        title: data.title || slug,
        dateTime: String(data.date || ''),
        excerpt: data.excerpt || '',
        author: data.author || '',
      }
    })
    .sort(
      (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
    )
}

function buildRss(posts) {
  const lastBuild = posts[0]?.dateTime
    ? toRfc822(posts[0].dateTime)
    : new Date().toUTCString().replace('GMT', '+0000')

  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}`
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${toRfc822(p.dateTime)}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>${
        p.author ? `\n      <author>${escapeXml(p.author)}</author>` : ''
      }
    </item>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>sv-SE</language>
    <atom:link href="${SITE_URL}/blog/rss" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>
`
}

function main() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.log('rss: no blog directory, skipping')
    return
  }
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const posts = readPosts()
  fs.writeFileSync(OUT_FILE, buildRss(posts))
  console.log(
    `rss: wrote ${posts.length} item${posts.length === 1 ? '' : 's'} to ${path.relative(process.cwd(), OUT_FILE)}`,
  )
}

main()
