import Head from 'next/head'
import { Header } from '../components/header'
import { About } from '../components/about'
import { Contact } from '../components/contact'

function Home() {
  return (
    <div>
      <Head>
        <title>sthlm.io - by reference developer network</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Overpass:900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Overpass+Mono:300" rel="stylesheet" />
        <link rel="icon" type="image/png" href={require('../static/favicon-32x32.png')} sizes="32x32" />
        <link rel="icon" type="image/png" href={require('../static/favicon-16x16.png')} sizes="16x16" />
      </Head>
      <Header/>
      <About/>
      <Contact/>
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

        h1, h2, h3, h4, h5 {
          font-family: 'Overpass', sans-serif;
          margin-bottom: 0;
        }

        h1 {
          font-size: 76px;
        }

        h2 {
          font-size: 43px;
        }

        p {
          font-family: 'Overpass Mono', sans-serif;
          font-weight: 300;
          font-size: 18px;
          width: 800px;
          max-width: 100%;
        }

        @media screen and (min-width: 500px) {
          p {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  )
}

export default Home