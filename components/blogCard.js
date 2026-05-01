import { formatDate } from '../lib/formatDate'

export function BlogCard({ post }) {
  return (
    <article className="card">
      <a className="cardLink" href={`/blog/${post.slug}/`}>
        <div className="thumb">
          <img src={post.image} alt={post.imageAlt} loading="lazy" />
        </div>
        <div className="body">
          <h3 className="title">{post.title}</h3>
          <div className="meta">
            {post.authorImage && (
              <img
                className="avatar"
                src={post.authorImage}
                alt=""
                loading="lazy"
              />
            )}
            <div className="metaText">
              {post.author && <span className="author">{post.author}</span>}
              <time className="date" dateTime={post.dateTime}>
                {formatDate(post.date)}
              </time>
            </div>
          </div>
          {post.excerpt && <p className="excerpt">{post.excerpt}</p>}
        </div>
      </a>

      {/*language=SCSS*/}
      <style jsx>{`
        .card {
          height: 100%;
          min-width: 0;
          transition: transform 0.2s ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .card:hover {
            transform: translateY(-4px);
          }
        }

        .cardLink {
          display: flex;
          flex-direction: column;
          height: 100%;
          min-width: 0;
          text-decoration: none;
          color: inherit;
        }

        .thumb {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 7px;
          background: #0a1a10;
          flex-shrink: 0;
        }

        @media screen and (max-width: 599px) {
          .thumb {
            width: calc(100% + clamp(28px, 6vw, 40px));
            margin-left: calc(-1 * clamp(14px, 3vw, 20px));
            margin-right: calc(-1 * clamp(14px, 3vw, 20px));
            border-radius: 0;
          }
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .card:hover .thumb img {
          transform: scale(1.03);
        }

        .body {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
          padding: 20px 0 0;
        }

        .title {
          font-size: clamp(32px, 4.2vw, 38px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0 0 14px;
          color: #0a0a0a;
          overflow-wrap: anywhere;
          transition: color 0.2s ease;
        }

        .meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .metaText {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
          min-width: 0;
        }

        .author {
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
        }

        .date {
          font-size: 13px;
          color: #6b6b6b;
        }

        .excerpt {
          font-size: 16px;
          font-weight: 500;
          line-height: 1.55;
          margin: 0;
          width: auto;
          max-width: none;
          color: #4a4a4a;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </article>
  )
}
