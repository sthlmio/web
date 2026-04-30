export function PostNav({ older, newer }) {
  if (!older && !newer) return null

  return (
    <nav className="postNav" aria-label="Fler inlägg">
      {older ? (
        <a href={`/blog/${older.slug}/`} className="card older">
          <span className="arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </span>
          <span className="thumb">
            <img src={older.image} alt="" />
          </span>
          <span className="text">
            <span className="label">Äldre inlägg</span>
            <span className="title">{older.title}</span>
          </span>
        </a>
      ) : (
        <span className="card placeholder" aria-hidden="true" />
      )}
      {newer ? (
        <a href={`/blog/${newer.slug}/`} className="card newer">
          <span className="text">
            <span className="label">Nyare inlägg</span>
            <span className="title">{newer.title}</span>
          </span>
          <span className="thumb">
            <img src={newer.image} alt="" />
          </span>
          <span className="arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </a>
      ) : (
        <span className="card placeholder" aria-hidden="true" />
      )}

      {/*language=SCSS*/}
      <style jsx>{`
        .postNav {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          width: 100%;
          max-width: 800px;
          margin: 56px 0 0;
        }

        .card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          background: #fff;
          color: #0a0a0a;
          text-decoration: none;
          transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
          min-width: 0;
        }

        .card:hover {
          border-color: #3e46cf;
          box-shadow: 0 4px 16px rgba(62, 70, 207, 0.08);
        }

        .card:hover .arrow {
          color: #3e46cf;
        }

        .card:hover .title {
          color: #3e46cf;
        }

        .placeholder {
          border: none;
          background: transparent;
          padding: 0;
          pointer-events: none;
        }

        .newer {
          justify-content: flex-end;
        }

        .arrow {
          color: #6b6b6b;
          display: inline-flex;
          flex-shrink: 0;
          transition: color 0.15s ease, transform 0.15s ease;
        }

        .arrow svg {
          width: 20px;
          height: 20px;
          display: block;
        }

        .older:hover .arrow {
          transform: translateX(-2px);
        }

        .newer:hover .arrow {
          transform: translateX(2px);
        }

        .thumb {
          flex-shrink: 0;
          width: 88px;
          aspect-ratio: 16 / 9;
          border-radius: 6px;
          overflow: hidden;
          background: #0a1a10;
          display: block;
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          flex: 1;
        }

        .label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #6b6b6b;
        }

        .title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.3;
          color: #0a0a0a;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          transition: color 0.15s ease;
        }

        @media screen and (max-width: 600px) {
          .postNav {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 40px;
          }

          .placeholder {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}
