export function Footer() {
  return (
    <footer aria-label="Footer">
      <div className="content">
        <p>
          <span className="contactRow">
            <span className="contactItem">
              <a href="mailto:hej@sthlm.io">hej@sthlm.io</a>
            </span>
            <span className="contactItem">
              <a href="tel:0733730941">073-373 09 41</a>
            </span>
            <span className="contactItem">559127-4302</span>
          </span>
          <br />
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
      {/*language=CSS*/}
      <style jsx>{`
        footer {
          width: 100%;
          background: #000;
          display: flex;
          justify-content: center;
          flex-direction: column;
          position: relative;
          padding: 40px 0;
        }

        .content {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - 40px);
          text-align: center;
        }

        h3 {
          font-size: clamp(18px, 4vw, 24px);
          line-height: 1.06;
          margin: 0 0 28px;
          letter-spacing: -0.02em;
          color: #444;
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

        .mt {
          margin-top: 38px;
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
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }

        .contactItem {
          color: #444;
          display: inline-flex;
          align-items: center;
        }

        .contactItem + .contactItem {
          position: relative;
          padding-left: 25px;
        }

        .contactItem + .contactItem::before {
          content: '•';
          position: absolute;
          left: 7px;
          top: 60%;
          color: #444;
          font-size: 30px;
          line-height: 1;
          transform: translateY(-58%);
        }

        .githubIcon {
          display: inline-flex;
          color: #444;
          margin-top: 10px;
        }

        .githubIcon svg {
          width: 40px;
          height: 40px;
          display: block;
        }

        .githubIcon:hover {
          color: #fff;
          text-decoration: none;
        }

        @media screen and (max-width: 600px) {
          footer {
            padding: 70px 0 90px;
          }

          .mt {
            margin-top: 26px;
          }
        }
      `}</style>
    </footer>
  )
}
