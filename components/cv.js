import { Header } from '../components/header'
import { InPageHeader } from '../components/inPageHeader'
import PropTypes from 'prop-types'

const Cv = ({ name, title, location, canonical, email, children }) => (
  <>
    <Header>
      <title>{name} - curriculum vitae</title>
      <link rel="canonical" href={canonical} />
    </Header>
    <section className="cv">
      <div className="content">
        <h1>{name}</h1>
        <p>
          {title}, {location}
        </p>
        <small>
          <a href={`mailto:${email}`}>{email}</a>
        </small>
        {children}
      </div>
      {/*language=SCSS*/}
      <style jsx global>{`
        .cv {
          section {
            width: 100%;
            padding: 0;
            background: #fff;
            z-index: 0;
            position: relative;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          .content {
            display: block;
            margin: 0 auto;
            width: 1024px;
            max-width: calc(100% - 40px);
            padding: 20px;
          }

          a,
          a:active,
          a:visited {
            font-weight: bold;
            color: #000;
          }

          a:hover {
            color: #3e46cf;
          }

          .content div.education {
            display: block;
          }

          h1 {
            font-size: 36px;
          }

          h2 {
            font-size: 20px;
          }

          h3 {
            font-size: 16px;
          }

          h4 {
            font-size: 14px;
          }

          p,
          blockquote,
          label,
          small {
            font-family: 'Overpass Mono', sans-serif;
            font-weight: 300;
            font-size: 14px;
            width: 800px;
            max-width: 100%;
          }

          @media screen and (min-width: 500px) {
            p.text,
            li {
              font-size: 14px;
            }

            p {
              font-size: 22px;
            }

            h1 {
              font-size: 43px;
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
          }

          @media print {
            p,
            li {
              font-size: 133px;
            }

            h1 {
              font-size: 36px;
            }

            h1 {
              font-size: 20px;
            }

            h2 {
              font-size: 16px;
            }

            h3 {
              font-size: 14px;
            }

            h4 {
              font-size: 12px;
            }

            a {
              text-decoration: none;
            }
          }
        }
      `}</style>
    </section>
  </>
)

Cv.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  canonical: PropTypes.string,
  email: PropTypes.string,
}

export default Cv
