import Head from 'next/head'

export function Header({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Vi hjälper er att planera, bygga och drifta säkra och tillgängliga tjänster och plattformar med svensk datasuveränitet."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          href={'/static/favicon-32x32.png'}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={'/static/favicon-16x16.png'}
          sizes="16x16"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {children}
      </Head>
      {/*language=CSS*/}
      <style jsx global>{`
        body {
          font-family: 'Noto Sans', sans-serif;
          padding: 0;
          margin: 0;
        }

        body,
        html {
          overflow-x: hidden;
          overflow-x: clip;
        }

        ::selection {
          background: #0a1a10;
          color: #fff;
        }

        ::-moz-selection {
          background: #0a1a10;
          color: #fff;
        }

        hr {
          margin: 0;
          border: none;
          width: 100px;
          height: 20px;
          background: #ffc107;
          display: inline-block;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: 'Noto Sans', sans-serif;
          margin-bottom: 0;
        }

        h1 {
          font-size: 48px;
        }

        h2 {
          font-size: clamp(32px, 4.2vw, 56px);
          line-height: 1.08;
          letter-spacing: -0.02em;
        }

        h3 {
          font-size: 20px;
        }

        h4 {
          font-size: 16px;
        }

        p,
        blockquote,
        label,
        small {
          font-family: 'Noto Sans', sans-serif;
          font-weight: 300;
          font-size: 18px;
          width: 800px;
          max-width: 100%;
        }

        ul,
        ol {
          padding-inline-start: 20px;
        }

        li {
          font-family: 'Noto Sans', sans-serif;
        }

        p.text,
        li {
          font-weight: 300;
          font-size: 16px;
        }

        @media screen and (min-width: 500px) {
          p.text,
          li {
            font-size: 18px;
          }

          p {
            font-size: 22px;
          }

          h1 {
            font-size: 76px;
          }

          h3 {
            font-size: 30px;
          }

          h4 {
            font-size: 20px;
          }

          ul,
          ol {
            padding-inline-start: 40px;
          }
        }

        @media print {
          p.text,
          li {
            font-size: 12px;
          }

          p {
            font-size: 15px;
          }

          h1 {
            font-size: 50px;
          }

          h2 {
            font-size: 29px;
          }

          h3 {
            font-size: 20px;
          }

          h4 {
            font-size: 13px;
          }

          a {
            text-decoration: none;
          }
        }
      `}</style>
    </>
  )
}
