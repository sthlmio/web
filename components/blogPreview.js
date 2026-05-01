import { BlogCard } from './blogCard'
import { PillButton } from './pillButton'

export function BlogPreview({ posts }) {
  if (!posts || posts.length === 0) return null

  return (
    <section>
      <div className="content">
        <ul className="grid">
          {posts.map((post) => (
            <li key={post.slug} className="cell">
              <BlogCard post={post} />
            </li>
          ))}
        </ul>

        <div className="more">
          <PillButton href="/blog/">Fler inlägg</PillButton>
        </div>
      </div>

      {/*language=SCSS*/}
      <style jsx>{`
        section {
          width: 100%;
          background: #fff;
          z-index: 0;
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0 0 60px;
        }

        @media screen and (min-width: 600px) {
          section {
            padding: 70px 0 90px;
          }
        }

        @media screen and (min-width: 900px) {
          section {
            padding: 120px 0 140px;
          }
        }

        .content {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - clamp(28px, 6vw, 40px));
        }

        .grid {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 32px;
          grid-template-columns: 1fr;
        }

        @media screen and (min-width: 600px) {
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media screen and (min-width: 900px) {
          .grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .cell :global(.title) {
            font-size: 28px;
            line-height: 1.2;
            letter-spacing: -0.015em;
          }
        }

        .cell {
          display: flex;
          min-width: 0;
        }

        .more {
          margin-top: 48px;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}
