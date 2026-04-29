import { Header } from '../../components/header'
import { Nav } from '../../components/nav'
import { Footer } from '../../components/footer'
import { BlogCard } from '../../components/blogCard'
import { getAllPosts } from '../../lib/blog'

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } }
}

export default function BlogIndex({ posts }) {
  const description =
    'Tankar och tekniska djupdykningar om svensk molndrift, Kubernetes, OpenStack och digital suveränitet.'
  const latestImage = posts[0]?.image
  const ogImage = latestImage
    ? `https://sthlm.io${latestImage.replace(/\.svg$/, '.png')}`
    : null

  return (
    <>
      <Header>
        <title>sthlm.io – Blogg</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://sthlm.io/blog" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="sthlm.io" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:title" content="sthlm.io – Blogg" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://sthlm.io/blog" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImage && <meta property="og:image:width" content="1200" />}
        {ogImage && <meta property="og:image:height" content="675" />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="sthlm.io – Blogg" />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Header>
      <Nav current="blog" />
      <section>
        <div className="content">
          <ul className="grid">
            {posts.map((post) => (
              <li key={post.slug} className="cell">
                <BlogCard post={post} />
              </li>
            ))}
            {posts.length === 0 && (
              <li className="empty">Inga inlägg ännu.</li>
            )}
          </ul>
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
            max-width: calc(100% - 40px);
            padding: 20px;
          }

          .grid {
            list-style: none;
            padding: 0;
            margin: 32px 0 0;
            display: grid;
            gap: 36px;
            grid-template-columns: 1fr;
          }

          @media screen and (min-width: 760px) {
            .grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          .cell {
            display: flex;
            min-width: 0;
          }

          .empty {
            color: rgba(0, 0, 0, 0.55);
          }
        `}</style>
      </section>
      <Footer />
    </>
  )
}
