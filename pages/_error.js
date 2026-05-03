import { Header } from '../components/header'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'

export default function Error() {
  return (
    <>
      <Header>
        <title>sthlm.io - 404</title>
        <meta name="robots" content="noindex" />
      </Header>
      <div className="page">
        <Nav />
        <section>
          <div className="content">
            <div>
              <h1>404</h1>
              <p>HTTP 404 Not found</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      {/*language=SCSS*/}
      <style jsx>{`
        .page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        section {
          width: 100%;
          padding: 0;
          background: #fff;
          z-index: 0;
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
          flex: 1;
        }

        .content {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - clamp(28px, 6vw, 40px));
          padding: 20px 0;
          flex: 1;
        }

        .content div {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        h1 {
          font-size: 120px;
          margin: 0;
        }

        @media screen and (min-width: 500px) {
          h1 {
            font-size: 200px;
          }
        }

        p {
          margin-top: 0;
          width: auto;
        }

        @media screen and (min-width: 500px) {
          p {
            margin-top: -30px;
          }
        }
      `}</style>
    </>
  )
}
