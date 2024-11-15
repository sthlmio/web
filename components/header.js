import Head from 'next/head'

export function Header({ children }) {
  return (
    <>
      <Head>
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
        {children}
      </Head>
      {/*language=CSS*/}
      <style jsx global>{`
        @font-face {
          font-family: 'Overpass';
          font-style: normal;
          font-weight: 900;
          src: local(''),
            url('/static/fonts/overpass-v7-latin-900.woff2') format('woff2'),
            url('/static/fonts/overpass-v7-latin-900.woff') format('woff');
        }

        @font-face {
          font-family: 'Overpass Mono';
          font-style: normal;
          font-weight: 300;
          src: local(''),
            url('/static/fonts/overpass-mono-v10-latin-300.woff2')
              format('woff2'),
            url('/static/fonts/overpass-mono-v10-latin-300.woff') format('woff');
        }

        @font-face {
          font-family: 'Overpass Mono';
          font-style: normal;
          font-weight: 400;
          src: local(''),
            url('/static/fonts/overpass-mono-v10-latin-regular.woff2')
              format('woff2'),
            url('/static/fonts/overpass-mono-v10-latin-regular.woff')
              format('woff');
        }

        @font-face {
          font-family: 'Overpass Mono';
          font-style: normal;
          font-weight: 700;
          src: local(''),
            url('/static/fonts/overpass-mono-v10-latin-700.woff2')
              format('woff2'),
            url('/static/fonts/overpass-mono-v10-latin-700.woff') format('woff');
        }

        body {
          padding: 0;
          margin: 0;
        }

        body,
        html {
          overflow-x: hidden;
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
          font-family: 'Overpass', sans-serif;
          margin-bottom: 0;
        }

        h1 {
          font-size: 48px;
        }

        h2 {
          font-size: 36px;
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
          font-family: 'Overpass Mono', sans-serif;
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
          font-family: 'Overpass Mono', sans-serif;
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

          h2 {
            font-size: 43px;
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
