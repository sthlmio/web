import { Jumbo } from '../components/jumbo'
import { Header } from '../components/header'
import { About } from '../components/about'
import { BlogPreview } from '../components/blogPreview'
import { Contact } from '../components/contact'
import { Clients } from '../components/clients'
import { Footer } from '../components/footer'
import { getAllPosts } from '../lib/blog'

export async function getStaticProps() {
  return {
    props: {
      latestPosts: getAllPosts().slice(0, 3),
    },
  }
}

export default function Home({ latestPosts }) {
  const title = 'sthlm.io – Infrastruktur för den nya vardagen'
  const description =
    'Vi hjälper er att planera, bygga och drifta säkra och tillgängliga tjänster och plattformar med svensk datasuveränitet.'

  return (
    <>
      <Header>
        <title>{title}</title>
        <link rel="canonical" href="https://sthlm.io" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="sthlm.io" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://sthlm.io" />
        <meta property="og:image" content="https://sthlm.io/static/og-default.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://sthlm.io/static/og-default.png" />
      </Header>
      <Jumbo />
      <About />
      <BlogPreview posts={latestPosts} />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}
