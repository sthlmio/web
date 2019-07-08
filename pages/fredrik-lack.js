import { Header } from '../components/header'
import { InPageHeader } from '../components/inPageHeader'

export default function FredrikLack () {
  return (
    <>
      <Header title={`sthlm.io - fredrik lack`} canonical="/fredrik-lack/"/>
      <section>
        <div className="content">
          <InPageHeader/>
          <h2>Fredrik Lack</h2>
          <p>Textilgatan 25, 120 30 Stockholm</p>
          <small>+46 733 730 941 / <a href="mailto:fredrik@sthlm.io">fredrik@sthlm.io</a></small>
          <p className="text">
            I’ve been working as a developer for 8+ years and I enjoy working fullstack/devops. Last couple of years
            I’ve been working mainly with Kubernetes, Google Cloud, Node.js and React. In my spare time I've been
            looking a little bit extra on Go.
            <br/><br/>
            I'm also a big advocate for Docker and Kubernetes, running all my own projects on Kubernetes on GKE (Google
            Cloud).
          </p>

          <h3>Next dream gig</h3>
          <p className="text">Cloud Native, Kubernetes and DevOps</p>

          <h3>Summary of Qualifications</h3>
          <ul>
            <li>Several years of experience with Node.js</li>
            <li>Kubernetes and Google Cloud user for +2 years</li>
            <li>Several years of experience running apps on Heroku.</li>
            <li>Years of experience running React (Isomorphic/Universal) in production.</li>
            <li>Experienced in running services on Docker, both for development and production environments.</li>
            <li>Consider myself as a generalist, but with special interest in Cloud Native, Docker, Kubernetes and
              Node.js.
            </li>
            <li>Great DevOps knowledge, e.g. TLS/SSL, Scaling <a target="_blank" href="https://12factor.net/">12 factor apps</a>, Hosting, DNS,
              Test/Build pipelines.
            </li>
            <li>Great general frontend knowledge</li>
          </ul>

          <h3>Wants to learn more about</h3>
          <ul>
            <li>Databases (document and relational) in depth</li>
            <li>ML</li>
            <li>GraphQL</li>
          </ul>

          <h3>Latest Projects</h3>
          <h4><a href="http://egmontdigital.se/">Egmont Publishing AB</a> (via Fredrik Lack AB)</h4>
          <p className="text">Full-stack/DevOps, May 2018 - Current</p>
          <p className="text">
            Created a brand new cloud native publishing platform running Kubernets on GKE (Google Cloud). Using some of
            Google Clouds other services too like Cloud SQL, Cloud Storage and Cloud KMS.
          </p>
          <ul>
            <li>Kubernetes (k8s, GKE), Auto scaling, 12-factor app</li>
            <li>Terraform</li>
            <li>Let's Encrypt</li>
            <li>Google Cloud</li>
            <li>PHP7, Node.js, Nginx, Docker, Redis, Elasticsearch</li>
            <li>Cloud SQL</li>
            <li>Cloud Storage</li>
            <li>Cloud KMS</li>
            <li>Bitbucket/Pipelines</li>
            <li>Helm / Helm Secrets</li>
          </ul>
          <h4><a href="https://www.lexplore.com/">Lexplore</a> (via Fredrik Lack AB)</h4>
          <p className="text">JS/React developer, May 2017 - May 2018</p>
          <ul>
            <li>Built a portal GUI based on Node.js/React</li>
            <li>Express, Flow, Mocha/Chai, Redux</li>
            <li>Heavy use of Redux and Selectors</li>
          </ul>
          <h4><a href="https://www.svt.se/sport/">SVT Sport</a> (via Creuna AB)</h4>
          <p className="text">Full-stack/DevOps, 2016 - 2017</p>
          <ul>
            <li>Universal SPA built with Node.js, React, Express, Redis and MongoDB</li>
            <li>Hosted on Heroku</li>
            <li>Docker development environment</li>
            <li>Akamai CDN</li>
            <li>My role evolved to a more DevOps role managing Jenkins/Heroku test and build pipelines</li>
            <li>Worked with both frontend and backend</li>
            <li>Learned much about Node.js in depth and how to tweak and adjust to high demands</li>
          </ul>

          <h3>Open Source Projects</h3>
          <h4><a href="https://bolaget.io/">bolaget.io</a></h4>
          <p className="text">Full-stack/DevOps</p>
          <ul>
            <li>Running on Node.js and Elasticsearch</li>
            <li>Hosted on Kubernetes (GKE)</li>
            <li>Docker environments for development and production</li>
            <li>Travis test and build pipelines</li>
            <li>RESTful(ish) API</li>
            <li>Let's Encrypt automation</li>
            <li>Prometheus/Grafana dashboards for supervision</li>
          </ul>
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