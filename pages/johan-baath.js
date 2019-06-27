import { Header } from '../components/header'
import { InPageHeader } from '../components/inPageHeader'

export default function JohanBaath () {
  return (
    <>
      <Header title={`sthlm.io - johan bååth`} canonical="/johan-baath/"/>
      <section>
        <div className="content">
          <InPageHeader/>
          <h2>Johan Bååth</h2>
          <p>Dalagatan 55, 113 31 Stockholm</p>
          <small><a href="mailto:johan@sthlm.io">johan@sthlm.io</a></small>
          <p className="text">
            I’ve been working as a developer professionally for 10+ years and I enjoy developing complete
            products from ground up, including the full tech stack and design.
            <br /><br />
            The last couple of years I've been dedicated to working almost exclusively with React and Node.js
            full time in large scale projects.
            <br /><br />
            Before working as a consultant I launched a streaming music service focused on electronic music with two friends/co-founders.
            I was responsible for everything technical including backend/frontend and providing reliable hosting for millions of songs.
            <br /><br />
            We secured music licensing from several major music labels such as Sony Music and raised over 5MSEK in funding.
            <br/><br/>
            Want to know more about me? <a href="mailto:johan@sthlm.io?subject=Let's meet over coffee!">Let's meet over coffee in Stockholm!</a>
          </p>

          <h3>Next dream gig</h3>
          <p className="text">Serverless, Next.js, TypeScript/Flow, GraphQL, PostgreSQL</p>

          <h3>Summary of Qualifications</h3>
          <ul>
            <li>Highly experienced in Node.js</li>
            <li>Highly experienced in modern JavaScript, including TypeScript and Flow</li>
            <li>Working professionally with React for 4+ years</li>
            <li>GraphQL and running it in production</li>
            <li>Databases and search indexes such as PostgreSQL, MongoDB, RethinkDB, Elasticsearch, Solr, Redis</li>
            <li>Several years of experience running large scale apps in production</li>
            <li>Running services on Docker, both for development and production environments.</li>
            <li>DevOps: CI/CD, cloud, physical infrastructure, scaling, automation</li>
          </ul>

          <h3>Wants to learn more about</h3>
          <ul>
            <li>Applied machine learning</li>
            <li>Elixir</li>
            <li>Design and typography</li>
          </ul>

          <h3>Latest Projects</h3>
          <h4><a href="https://cabonline.com/">Cabonline Technologies AB</a> (via Johan Bååth AB)</h4>
          <p className="text">The largest taxi network in the Nordics.<br/>Lead Frontend, March 2017 - May 2019</p>
          <h4><a href="https://inspireme.se/">Inspireme i Sverige AB</a> (via Johan Bååth AB)</h4>
          <p className="text">Online courses by leading experts.<br/>Lead Fullstack/DevOps, January 2017 - March 2017</p>
          <h4><a href="https://www.svt.se/sport/">SVT Sport</a> (via Johan Bååth AB)</h4>
          <p className="text">One of Sweden's top sports site.<br /> Fullstack/DevOps, September 2015 - Jan 2017</p>
          <h4><a href="https://iveo.se/">IVEO AB</a></h4>
          <p className="text">Digital Agency in Stockholm.<br />CTO/Developer, 2014 - 2015</p>
          <h4><a href="#">Revibe AB</a></h4>
          <p className="text">Electronic music streaming service & DJ tools.<br/>Fullstack/DevOps/Architect/Co-Founder, 2010 - 2014</p>
        </div>
        { /*language=SCSS*/}
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
            color: #3E46CF;
          }
        `}</style>
      </section>
    </>
  )
}