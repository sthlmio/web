import { useEffect, useRef } from 'react'
import { Header } from '../../components/header'
import { Nav } from '../../components/nav'
import { Footer } from '../../components/footer'
import { PillButton } from '../../components/pillButton'
import { BlogCta } from '../../components/blogCta'
import { getPost, getPostSlugs } from '../../lib/blog'
import { formatDate } from '../../lib/formatDate'

export async function getStaticPaths() {
  return {
    paths: getPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug)
  return { props: { post } }
}

export default function BlogPost({ post }) {
  const proseRef = useRef(null)

  useEffect(() => {
    const root = proseRef.current
    if (!root) return
    const buttons = root.querySelectorAll('.copyBtn')
    const cleanups = []
    buttons.forEach((btn) => {
      const handler = async () => {
        const code = btn.closest('.codeBlock')?.querySelector('pre code')
        if (!code) return
        const text = code.textContent || ''
        try {
          if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text)
          } else {
            const ta = document.createElement('textarea')
            ta.value = text
            ta.style.position = 'fixed'
            ta.style.opacity = '0'
            document.body.appendChild(ta)
            ta.select()
            document.execCommand('copy')
            document.body.removeChild(ta)
          }
          btn.classList.add('copied')
          const label = btn.querySelector('.copyLabel')
          const original = label ? label.textContent : null
          if (label) label.textContent = 'Copied'
          setTimeout(() => {
            btn.classList.remove('copied')
            if (label && original != null) label.textContent = original
          }, 1600)
        } catch {}
      }
      btn.addEventListener('click', handler)
      cleanups.push(() => btn.removeEventListener('click', handler))
    })
    return () => cleanups.forEach((fn) => fn())
  }, [post.slug])

  const url = `https://sthlm.io/blog/${post.slug}`
  const imageUrl = `https://sthlm.io${post.image.replace(/\.svg$/, '.png')}`

  return (
    <>
      <Header>
        <title>{`sthlm.io – ${post.title}`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={url} />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="sthlm.io" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={post.imageAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="article:published_time" content={post.dateTime} />
        {post.author && <meta property="article:author" content={post.author} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={post.imageAlt} />
      </Header>
      <Nav current="blog" />
      <section>
        <div className="content">
          <div className="back">
            <PillButton href="/blog/" size="small" arrow="left">
              Alla inlägg
            </PillButton>
          </div>
          <article>
            <header className="postHeader">
              <h1>{post.title}</h1>
              {post.excerpt && <p className="lead">{post.excerpt}</p>}
              <div className="byline">
                {post.authorImage && (
                  <img
                    className="avatar"
                    src={post.authorImage}
                    alt=""
                  />
                )}
                <div className="bylineText">
                  {post.author && <span className="author">{post.author}</span>}
                  <span className="meta">
                    <time dateTime={post.dateTime}>{formatDate(post.date)}</time>
                    <span className="dot" aria-hidden="true">·</span>
                    <span>{post.readMinutes} min läsning</span>
                  </span>
                </div>
              </div>
            </header>
            <figure className="hero">
              <img src={post.image} alt={post.imageAlt} />
            </figure>
            <div
              ref={proseRef}
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
        </div>
        {/*language=SCSS*/}
        <style jsx>{`
          section {
            width: 100%;
            background: #fff;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 80px;
          }

          .content {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            width: 1024px;
            max-width: calc(100% - clamp(28px, 6vw, 40px));
            padding: 20px 0;
          }

          .postHeader,
          .prose {
            width: 100%;
            max-width: 800px;
          }

          .back {
            margin: 24px 0;
          }

          .postHeader {
            margin-top: 8px;
            margin-bottom: 36px;
          }

          h1 {
            font-size: clamp(34px, 5vw, 52px);
            line-height: 1.1;
            letter-spacing: -0.02em;
            font-weight: 700;
            margin: 0 0 18px;
            color: #0a0a0a;
          }

          .lead {
            font-size: clamp(18px, 2vw, 21px);
            line-height: 1.5;
            font-weight: 400;
            color: #555;
            margin: 0 0 28px;
            width: auto;
            max-width: none;
          }

          .byline {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-top: 28px;
          }

          .avatar {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            object-fit: cover;
            flex-shrink: 0;
          }

          .bylineText {
            display: flex;
            flex-direction: column;
            line-height: 1.35;
          }

          .author {
            font-size: 15px;
            font-weight: 600;
            color: #1a1a1a;
          }

          .meta {
            font-size: 14px;
            color: #6b6b6b;
            display: inline-flex;
            gap: 6px;
            align-items: baseline;
          }

          .dot {
            color: #c0c0c0;
          }

          .hero {
            margin: 0 0 40px;
            border-radius: 12px;
            overflow: hidden;
            aspect-ratio: 16 / 9;
            background: #0a1a10;
          }

          .hero img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        `}</style>
        {/*language=SCSS*/}
        <style jsx global>{`
          .prose {
            color: #1a1a1a;
            font-weight: 400;
            font-size: 18px;
            line-height: 1.75;
          }

          .prose p,
          .prose ul,
          .prose ol,
          .prose blockquote {
            font-size: 18px;
            font-weight: 400;
            line-height: 1.75;
            margin: 0 0 22px;
            width: auto;
            max-width: none;
          }

          .prose li {
            font-weight: 300;
            line-height: 1.6;
            margin-bottom: 8px;
          }

          .prose li strong,
          .prose li b {
            font-weight: 600;
          }

          .prose h2 {
            font-size: clamp(22px, 2.6vw, 26px);
            line-height: 1.25;
            letter-spacing: -0.01em;
            font-weight: 700;
            margin: 40px 0 12px;
            color: #0a0a0a;
          }

          .prose h3 {
            font-size: clamp(20px, 2.6vw, 24px);
            line-height: 1.3;
            font-weight: 600;
            margin: 32px 0 10px;
            color: #0a0a0a;
          }

          .prose a,
          .prose a:visited,
          .prose a:active {
            color: #3e46cf;
            font-weight: 600;
            text-decoration: underline;
            text-decoration-color: rgba(62, 70, 207, 0.4);
            text-underline-offset: 3px;
          }

          .prose a:hover {
            color: #2a31a8;
            text-decoration-color: #2a31a8;
          }

          .prose ul,
          .prose ol {
            padding-inline-start: 50px;
          }

          .prose code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            font-size: 0.88em;
            background: rgba(175, 184, 193, 0.2);
            padding: 0.2em 0.4em;
            border-radius: 6px;
          }

          .prose .codeBlock {
            background: #f6f8fa;
            border: 1px solid #d1d9e0;
            border-radius: 8px;
            margin: 0 0 22px;
            overflow: hidden;
          }

          .prose .codeBlockHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 14px;
            border-bottom: 1px solid #d1d9e0;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            font-size: 13px;
            color: #6b7280;
          }

          .prose .codeLang {
            user-select: none;
          }

          .prose .copyBtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: transparent;
            border: 0;
            padding: 4px 8px;
            margin: -4px -6px -4px 0;
            border-radius: 6px;
            color: #1f2328;
            font: inherit;
            font-size: 13px;
            cursor: pointer;
            transition: background-color 120ms ease, color 120ms ease;
          }

          .prose .copyBtn:hover {
            background: rgba(31, 35, 40, 0.08);
          }

          .prose .copyBtn:focus-visible {
            outline: 2px solid #3e46cf;
            outline-offset: 2px;
          }

          .prose .copyBtn.copied {
            color: #1a7f37;
          }

          .prose .copyIcon {
            width: 14px;
            height: 14px;
            flex-shrink: 0;
          }

          .prose .codeBlock pre {
            background: transparent;
            color: #1f2328;
            padding: 16px;
            margin: 0;
            border: 0;
            border-radius: 0;
            overflow-x: auto;
            font-size: 14px;
            line-height: 1.5;
          }

          .prose pre code,
          .prose pre code.hljs {
            background: transparent;
            color: inherit;
            padding: 0;
            font-size: 14px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            display: block;
          }

          /* GitHub Light Default — highlight.js token colors */
          .hljs-doctag,
          .hljs-keyword,
          .hljs-meta .hljs-keyword,
          .hljs-template-tag,
          .hljs-template-variable,
          .hljs-type,
          .hljs-variable.language_ {
            color: #cf222e;
          }
          .hljs-title,
          .hljs-title.class_,
          .hljs-title.class_.inherited__,
          .hljs-title.function_ {
            color: #6639ba;
          }
          .hljs-attr,
          .hljs-attribute,
          .hljs-literal,
          .hljs-meta,
          .hljs-number,
          .hljs-operator,
          .hljs-variable,
          .hljs-selector-attr,
          .hljs-selector-class,
          .hljs-selector-id {
            color: #0550ae;
          }
          .hljs-regexp,
          .hljs-string,
          .hljs-meta .hljs-string {
            color: #0a3069;
          }
          .hljs-built_in,
          .hljs-symbol {
            color: #953800;
          }
          .hljs-comment,
          .hljs-code,
          .hljs-formula {
            color: #59636e;
          }
          .hljs-name,
          .hljs-quote,
          .hljs-selector-tag,
          .hljs-selector-pseudo {
            color: #116329;
          }
          .hljs-subst {
            color: #1f2328;
          }
          .hljs-section {
            color: #0550ae;
            font-weight: bold;
          }
          .hljs-bullet {
            color: #7d4e00;
          }
          .hljs-emphasis {
            color: #1f2328;
            font-style: italic;
          }
          .hljs-strong {
            color: #1f2328;
            font-weight: bold;
          }
          .hljs-addition {
            color: #0a3622;
            background-color: #dafbe1;
          }
          .hljs-deletion {
            color: #82071e;
            background-color: #ffebe9;
          }

          .prose blockquote {
            border-left: 4px solid #3e46cf;
            padding: 4px 0 4px 16px;
            color: #333;
            font-style: italic;
          }

          .prose img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
          }

          .prose hr {
            display: block;
            width: 100%;
            height: 1px;
            background: #eaeaea;
            border: none;
            margin: 28px 0;
          }

          .prose .infoBox {
            background: #f6f7f9;
            border: 1px solid #e5e7eb;
            border-radius: 7px;
            padding: 18px 22px;
            margin: 28px 0;
            font-size: 15px;
            line-height: 1.6;
            color: #3a3a3a;
          }

          .prose .infoBox strong {
            color: #0a0a0a;
          }

          .prose .infoBox > strong:first-child {
            display: block;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: #6b6b6b;
            margin-bottom: 10px;
            font-weight: 600;
          }

          .prose .infoBox ul {
            font-size: 15px;
            line-height: 1.6;
            margin: 0;
            padding-inline-start: 20px;
          }

          .prose .infoBox li {
            margin-bottom: 6px;
          }

          .prose .infoBox li:last-child {
            margin-bottom: 0;
          }

          .prose .stackDiagram {
            margin: 32px 0;
            padding: 24px;
            border-radius: 12px;
            background:
              radial-gradient(circle at 1px 1px, #e6e8f2 1px, transparent 0) 0 0 / 16px 16px,
              linear-gradient(180deg, #f8f9fc 0%, #eef0f8 100%);
            border: 1px solid #e5e7eb;
          }

          .prose .stackDiagram svg {
            display: block;
            width: 100%;
            height: auto;
          }

          .prose .layerStack {
            margin: 32px 0;
            width: 100%;
          }

          .prose .layerStack img {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 0;
          }
        `}</style>
      </section>
      <BlogCta />
      <Footer />
    </>
  )
}
