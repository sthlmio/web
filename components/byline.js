import { formatDate } from '../lib/formatDate'

export function Byline({ post, size = 'large' }) {
  return (
    <div className={`byline ${size}`}>
      {post.authorImage && (
        <img className="avatar" src={post.authorImage} alt="" loading="lazy" />
      )}
      <div className="bylineText">
        {post.author && <span className="author">{post.author}</span>}
        <span className="meta">
          <time dateTime={post.dateTime}>{formatDate(post.date)}</time>
          {post.readMinutes && (
            <>
              <span className="dot" aria-hidden="true">·</span>
              <span>{post.readMinutes} min läsning</span>
            </>
          )}
        </span>
      </div>

      {/*language=SCSS*/}
      <style jsx>{`
        .byline {
          display: flex;
          align-items: center;
        }

        .bylineText {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .meta {
          color: #6b6b6b;
          display: inline-flex;
          gap: 6px;
          align-items: baseline;
        }

        .dot {
          color: #c0c0c0;
        }

        .avatar {
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .byline.large {
          gap: 14px;
          margin-top: 28px;
        }

        .byline.large .avatar {
          width: 44px;
          height: 44px;
        }

        .byline.large .bylineText {
          line-height: 1.35;
        }

        .byline.large .author {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .byline.large .meta {
          font-size: 14px;
        }

        .byline.small {
          gap: 10px;
          margin-bottom: 14px;
        }

        .byline.small .avatar {
          width: 32px;
          height: 32px;
        }

        .byline.small .bylineText {
          line-height: 1.3;
        }

        .byline.small .author {
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
        }

        .byline.small .meta {
          font-size: 13px;
        }
      `}</style>
    </div>
  )
}
