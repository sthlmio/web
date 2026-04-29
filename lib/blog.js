import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { marked } from 'marked'
import hljs from 'highlight.js'

const yamlEngine = {
  parse: (str) => yaml.load(str, { schema: yaml.CORE_SCHEMA }),
  stringify: yaml.dump,
}

export { formatDate } from './formatDate'

const blogDir = path.join(process.cwd(), 'blog')
const staticDir = path.join(process.cwd(), 'public', 'static')

const HTML_ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => HTML_ESCAPES[c])
}

const COPY_ICON = `<svg class="copyIcon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`

marked.setOptions({ gfm: true, breaks: false })
if (!globalThis.__blogMarkedRendererInstalled) {
  marked.use({
    renderer: {
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens)
        const titleAttr = title ? ` title="${escapeHtml(title)}"` : ''
        const isExternal = /^https?:\/\//i.test(href)
        const extAttrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
        return `<a href="${escapeHtml(href)}"${titleAttr}${extAttrs}>${text}</a>`
      },
      code({ text, lang }) {
        const language = (lang || '').match(/^\S*/)?.[0] || ''
        const validLang = language && hljs.getLanguage(language) ? language : null
        const highlighted = validLang
          ? hljs.highlight(text, { language: validLang }).value
          : escapeHtml(text)
        const codeClass = validLang ? `hljs language-${language}` : 'hljs'
        const langLabel = escapeHtml(language || 'text')
        return (
          `<div class="codeBlock">` +
          `<div class="codeBlockHeader">` +
          `<span class="codeLang">${langLabel}</span>` +
          `<button type="button" class="copyBtn" aria-label="Copy code">` +
          COPY_ICON +
          `<span class="copyLabel">Copy</span>` +
          `</button>` +
          `</div>` +
          `<pre><code class="${codeClass}">${highlighted}</code></pre>` +
          `</div>`
        )
      },
    },
  })
  globalThis.__blogMarkedRendererInstalled = true
}

function slugifyName(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/å|ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function resolveAuthorImage(author, override) {
  if (override) return override
  if (!author) return null
  const slug = slugifyName(author)
  for (const ext of ['png', 'jpg', 'jpeg', 'webp']) {
    const file = `${slug}.${ext}`
    if (fs.existsSync(path.join(staticDir, file))) return `/static/${file}`
  }
  return null
}

function countWords(markdown) {
  const stripped = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~\-]/g, ' ')
  return (stripped.match(/\S+/g) || []).length
}

function readPost(filename) {
  const slug = filename.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(blogDir, filename), 'utf8')
  const { data, content } = matter(raw, { engines: { yaml: yamlEngine } })

  const dateTime = String(data.date || '')
  const date = dateTime.slice(0, 10)

  const author = data.author || ''
  const readMinutes = Math.max(1, Math.round(countWords(content) / 220))

  return {
    slug,
    title: data.title || slug,
    date,
    dateTime,
    author,
    authorImage: resolveAuthorImage(author, data.authorImage),
    excerpt: data.excerpt || '',
    image: data.image || '/static/blog-placeholder.svg',
    imageAlt: data.imageAlt || '',
    readMinutes,
    content,
  }
}

export function getAllPosts() {
  if (!fs.existsSync(blogDir)) return []
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { content, ...meta } = readPost(f)
      return meta
    })
    .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime())
}

export function getPostSlugs() {
  if (!fs.existsSync(blogDir)) return []
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getPost(slug) {
  const post = readPost(`${slug}.md`)
  return { ...post, html: marked.parse(post.content) }
}
