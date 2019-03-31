import Head from 'next/head'

export function Header({ title = 'sthlm.io - by reference developer network', canonical = '' }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Overpass:900" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Overpass+Mono:300,400,700" rel="stylesheet" />
      <link rel="icon" type="image/png" href={require('../static/favicon-32x32.png')} sizes="32x32" />
      <link rel="icon" type="image/png" href={require('../static/favicon-16x16.png')} sizes="16x16" />
      <link rel="canonical" href={`https://sthlm.io${canonical}`} />
      { /*language=CSS*/ }
      <style global jsx>{`
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

        h1, h2, h3, h4, h5 {
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

        p, blockquote, label {
          font-family: 'Overpass Mono', sans-serif;
          font-weight: 300;
          font-size: 18px;
          width: 800px;
          max-width: 100%;
        }

        li {
          font-family: 'Overpass Mono', sans-serif;
        }

        p.text, li {
          font-weight: 400;
          font-size: 18px;
        }

        @media screen and (min-width: 500px) {
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
        }
      `}</style>
    </Head>
  )
}