import { Header } from '../components/header'
import { InPageHeader } from '../components/inPageHeader'

export default function JohanBaath() {
  return (
    <>
      <Header>
        <title>sthlm.io - Johan Bååth</title>
        <link rel="canonical" href="/johan-baath/" />
      </Header>
      <section>
        <div className="content">
          <InPageHeader />
          <h2>Johan Bååth</h2>
          <p>Gavelvägen 10, 181 61 Stockholm</p>
          <small>
            <a href="mailto:info@johanbaath.com">info@johanbaath.com</a>
            <br />
            <a
              href="https://www.linkedin.com/in/johanbaath"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>{' '}
            /{' '}
            <a
              href="https://github.com/johanbaath"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </small>
          <p className="text">
            I've been working as a developer professionally for 10+ years and I
            enjoy developing complete products from the ground up, including the
            full tech stack and design.
            <br />
            <br />
            The last couple of years I've been dedicated to working almost
            exclusively with React and Node.js full time in large scale
            projects.
            <br />
            <br />
            Before working as a consultant I launched a streaming music service
            focused on electronic music with two friends/co-founders. I was
            responsible for everything technical including backend/frontend and
            providing reliable hosting for millions of songs.
            <br />
            <br />
            We secured music licensing deals from several major music labels
            such as Sony Music and raised multiple rounds of funding.
          </p>
          <h3>Summary of Qualifications</h3>
          <ul>
            <li>Highly experienced in Node.js.</li>
            <li>Highly experienced in JavaScript/TypeScript.</li>
            <li>Working professionally with React for 7+ years.</li>
            <li>GraphQL and running it in production.</li>
            <li>
              Databases and search indexes such as PostgreSQL, MongoDB,
              Elasticsearch, Solr, Redis.
            </li>
            <li>
              Running large scale apps with millions of users in production.
            </li>
            <li>
              Running services on Docker, both for development and production
              environments.
            </li>
            <li>
              DevOps: CI/CD, AWS, Google Cloud, physical infrastructure,
              scaling, automation.
            </li>
          </ul>

          <h3>Wants to learn more about</h3>
          <ul>
            <li>Design and typography</li>
          </ul>

          <h3>Latest Projects</h3>
          <h4>
            <a href="https://spotify.com/">Spotify</a>
          </h4>
          <p className="text">
            The world's most popular audio streaming subscription service.
            <br />
            Fullstack Developer, September 2019 - Present
            <br />
            <br />
            Working with the following teams:
          </p>
          <ul>
            <li>
              Performance - Ensuring peak performance for the native apps.
            </li>
            <li>
              Release - Responsible for tooling around releasing Spotify on all
              app stores.
            </li>
            <li>Foundation - iOS developer experience and tooling.</li>
            <li>
              Machine Learning UX - Building tools for Spotify's ML engineers.
            </li>
          </ul>
          <h4>
            <a href="https://cabonline.com/">Cabonline Technologies</a>
          </h4>
          <p className="text">
            The largest taxi network in the Nordics.
            <br />
            Lead Frontend, March 2017 - May 2019
          </p>
          <h4>
            <a href="https://inspireme.se/">Inspireme i Sverige</a>
          </h4>
          <p className="text">
            Online courses by leading experts.
            <br />
            Lead Fullstack/DevOps, January 2017 - March 2017
          </p>
          <h4>
            <a href="https://www.svt.se/sport/">SVT Sport</a>
          </h4>
          <p className="text">
            One of Sweden's top sports site.
            <br /> Fullstack/DevOps, September 2015 - Jan 2017
          </p>
          <h4>
            <a href="https://iveo.se/">IVEO</a>
          </h4>
          <p className="text">
            Digital Agency in Stockholm.
            <br />
            CTO/Developer, 2014 - 2015
          </p>
          <h4>
            <a href="#">Revibe</a>
          </h4>
          <p className="text">
            Electronic music streaming service & DJ tools.
            <br />
            Fullstack/Co-Founder, 2010 - 2014
          </p>
        </div>
        {/*language=SCSS*/}
        <style jsx>{`
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
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            width: 1024px;
            max-width: calc(100% - 40px);
            padding: 20px;
          }

          .content div {
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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
        `}</style>
      </section>
    </>
  )
}
