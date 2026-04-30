export function Footer() {
  return (
    <footer aria-label="Footer">
      <div className="content">
        <a href="/" className="logo" aria-label="sthlm.io">
          <img src="/static/logo_small.svg" alt="" />
        </a>
        <div className="right">
          <p className="contactRow">
            <span className="contactItem">
              <a href="mailto:hej@sthlm.io">hej@sthlm.io</a>
            </span>
            <span className="contactItem">
              <a href="tel:0733730941">073-373 09 41</a>
            </span>
            <span className="contactItem noLink">559127-4302</span>
            <a
              className="githubIcon"
              href="https://github.com/sthlmio"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.19-3.37-1.19-.46-1.17-1.12-1.49-1.12-1.49-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
      {/*language=CSS*/}
      <style jsx>{`
        footer {
          width: 100%;
          background: #151515;
          display: flex;
          justify-content: center;
          flex-direction: column;
          position: relative;
          padding: 72px 0;
        }

        .content {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - 40px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .right {
          text-align: right;
        }

        p {
          margin: 0;
          font-size: clamp(14px, 2.2vw, 18px);
          line-height: 1.35;
          color: #444;
          font-weight: 400;
          width: auto;
          max-width: none;
        }

        a {
          color: #444;
          text-decoration: none;
        }

        a:visited,
        a:active {
          text-decoration: none;
        }

        a:hover {
          color: #fff;
          text-decoration: underline;
        }

        .contactRow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
          row-gap: 6px;
        }

        .contactItem {
          color: #444;
          display: inline-flex;
          align-items: center;
        }

        .contactItem:active,
        .contactItem:visited,
        .contactItem:focus {
          color: #444;
        }

        .noLink {
          pointer-events: none;
        }

        .contactItem + .contactItem {
          margin-left: 16px;
          position: relative;
          padding-left: 16px;
        }

        .contactItem + .contactItem::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #444;
          transform: translateY(-50%);
        }

        .githubIcon {
          display: inline-flex;
          align-items: center;
          color: #444;
          margin-left: 18px;
        }

        .githubIcon svg {
          width: 24px;
          height: 24px;
          display: block;
        }

        .githubIcon:hover {
          color: #fff;
          text-decoration: none;
        }

        .logo {
          display: inline-flex;
          line-height: 0;
          flex-shrink: 0;
        }

        .logo img {
          width: 130px;
          height: auto;
          display: block;
          filter: brightness(0) invert(0.27);
          transition: filter 0.15s ease;
        }

        .logo:hover img {
          filter: brightness(0) invert(1);
        }

        @media screen and (max-width: 600px) {
          footer {
            padding: 48px 0;
          }

          .content {
            flex-direction: column;
            align-items: center;
            gap: 28px;
          }

          .right {
            text-align: center;
          }

          .contactRow {
            justify-content: center;
            row-gap: 8px;
            column-gap: 14px;
          }

          .contactItem + .contactItem {
            margin-left: 0;
            padding-left: 0;
          }

          .contactItem + .contactItem::before {
            display: none;
          }

          .githubIcon {
            margin-left: 0;
          }
        }
      `}</style>
    </footer>
  )
}
