import { Header } from '../components/header'
import { InPageHeader } from '../components/inPageHeader'

export default function FredrikLack () {
  return (
    <>
      <Header>
        <title>sthlm.io - Fredrik Lack</title>
        <link rel="canonical" href="https://sthlm.io/fredrik-lack/" />
      </Header>
      <section>
        <div className="content">
          <InPageHeader/>
          <h2>Fredrik Lack</h2>
          <p>Textilgatan 25, 120 30 Stockholm</p>
          <small>
            +46 733 730 941 / <a href="mailto:fredrik@sthlm.io">fredrik@sthlm.io</a>
            <br />
            <a
              href="https://www.linkedin.com/in/fredriklack/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a> /{' '}
            <a
              href="https://github.com/larsha"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </small>
          <p className="text">
            Developer for 9+ years and the last years i’ve been leaning more towards DevOps and working mainly with the ecosystem around Kubernetes, Google Cloud, Node.js and React.
            <br /><br />
            In one of my recent projects I was spearheading the development of a brand new cloud native platform running with Kubernetes on Google Cloud (GKE) using tools like Terraform, Let’s Encrypt, Prometheus/Grafana and Helm.
          </p>

          <h3>Summary of Qualifications</h3>
          <ul>
            <li>Several years of production experience with Node.js</li>
            <li>Kubernetes and Google Cloud user for +2 years</li>
            <li>Several years of experience running apps on Heroku.</li>
            <li>Years of experience running React (Isomorphic/Universal) in production.</li>
            <li>Experienced in running services with Docker, both for development and production environments.</li>
            <li>Consider myself as a generalist, but with special interest in Cloud Native, Docker, Kubernetes and
              Node.js.
            </li>
            <li>Great DevOps knowledge, e.g. TLS/SSL, Scaling, <a target="_blank" href="https://12factor.net/">12 factor apps</a>, Hosting, DNS,
              Test/Build pipelines.
            </li>
            <li>Great frontend knowledge, e.g. ES standards, React, Webpack, Babel, E2E/GUI testing.</li>
          </ul>

          <h3>Want to learn more about</h3>
          <ul>
            <li>Kubernetes on-prem/bare-metal</li>
            <li>AI/ML</li>
          </ul>

          <h3>Highlighted Projects</h3>
          <h4><a href="https://www.ving.se">Nordic Leisure Travel Group/Ving</a> (via Fredrik Lack AB)</h4>
          <p className="text">Developer/Full-stack, Sep 2019 - Current</p>
          <p className="text">
            Worked in one of the web teams at Ving with the SAFe methodology. Our team was responsible for multiple universal Node.js/React applications on ving.se, tjareborg.fi, ving.no and spies.dk. Worked both on-prem and in Azure, the team were responsible for everything from development and testing to CI/CD and monitoring the running applications.
          </p>
          <ul>
            <li>React, Redux, Node.js</li>
            <li>Azure: Functions, App Service, Key Vault</li>
            <li>Jenkins/Octopus Deploy/Azure DevOps</li>
            <li>Multilingual</li>
            <li>Jest/Cypress for tests</li>
            <li>GraphQL/Apollo</li>
          </ul>
          <h4><a href="http://egmontdigital.se/">Egmont Publishing AB</a> (via Fredrik Lack AB)</h4>
          <p className="text">Full-stack/DevOps, May 2018 - Current</p>
          <p className="text">
            Spearheaded the development of a brand new cloud native publishing platform running Kubernetes on GKE (Google Cloud). Using some of Google Clouds other services too like Cloud SQL, Cloud Storage, Cloud Functions and Cloud KMS.
          </p>
          <ul>
            <li>Kubernetes (k8s, GKE), Auto scaling, 12-factor app</li>
            <li>Terraform</li>
            <li>Let's Encrypt</li>
            <li>Google Cloud</li>
            <li>PHP7, Node.js, Nginx, Docker, Redis, Elasticsearch</li>
            <li>Cloud SQL, Cloud Storage, Cloud KMS</li>
            <li>Prometheus/Grafana</li>
            <li>Bitbucket/Pipelines</li>
            <li>Helm/Helm Secrets</li>
          </ul>
          <h4><a href="https://www.lexplore.com/">Lexplore</a> (via Fredrik Lack AB)</h4>
          <p className="text">JS/React developer, May 2017 - May 2018</p>
          <p className="text">
            Lexplore is doing rapid reading assessment, powered by eye tracking and artificial intelligence. My role was to develop the portal with all the results of the students for teachers and schools. A very complex React application with a lot of data manipulation and a lot of business logic in the front-end.
          </p>
          <ul>
            <li>Node.js, React</li>
            <li>Azure App Service</li>
            <li>Express, Flow, Redux</li>
            <li>Mocha/Chai for tests</li>
            <li>Multilingual</li>
          </ul>
          <h4><a href="https://www.svt.se/sport/">SVT Sport</a> (via Creuna AB)</h4>
          <p className="text">Full-stack/DevOps, 2015 - 2017</p>
          <p className="text">
            Worked in the sports team with the Scrum methodology and developed a brand new sport concept for SVT. My primary role was as a full-stack developer of the universal Node.js/React application with high demands on performance serving a very large amount of users weekly. I learned a lot about Node.js in depth and how to tweak and adjust it to high demands.
          </p>
          <ul>
            <li>Node.js, React, Express, Redis and MongoDB</li>
            <li>Heroku</li>
            <li>Docker development environment</li>
            <li>Akamai CDN</li>
            <li>Jenkins test and build pipelines</li>
            <li>Mocha/Chai for tests</li>
          </ul>
          <h4><a href="https://www.pointsharp.com/">Pointsharp</a> (via Creuna AB)</h4>
          <p className="text">Developer/Full-stack/DevOps, 2016 - 2017</p>
          <p className="text">
            Pointsharp is a security software company that enable Enterprises to secure the login of their users to all their applications with simplified user experience.
            We built a complete new public web concept for them, my role was as a full-stack developer.
          </p>
          <ul>
            <li>Python/Django, PostgreSQL, Redis, React</li>
            <li>Heroku</li>
            <li>Docker development environment</li>
          </ul>
          <h4><a href="https://www.akademibokhandeln.se/">Akademibokhandeln</a> (via Creuna AB)</h4>
          <p className="text">Developer, 2016 - 2017</p>
          <p className="text">
            Akademibokhandeln was about to release it’s e-commerce concept, so my primary role was to develop the checkout page. I learned a lot about Elasticsearch and Python.
          </p>
          <ul>
            <li>React, Python/Django, PostgreSQL, React, Elasticsearch, Redis</li>
            <li>Heroku</li>
            <li>Docker development environment</li>
          </ul>

          <h3>Open Source Projects</h3>
          <h4><a href="https://bolaget.io/">bolaget.io</a></h4>
          <p className="text">Full-stack/DevOps</p>
          <ul>
            <li>Node.js, Elasticsearch, HashiCorp Vault</li>
            <li>Hosted on Kubernetes (GKE, Preemptibles), 12 factor app</li>
            <li>Docker environments for development and production</li>
            <li>Travis test and build pipelines</li>
            <li>RESTful(ish) API</li>
            <li>Let's Encrypt automation</li>
            <li>Prometheus/Grafana dashboards for supervision</li>
          </ul>
          <h4><a href="https://github.com/sthlmio/preemptible-sentinel">Preemptible Sentinel</a></h4>
          <p className="text">Developer/Full-stack/DevOps</p>
          <p className="text">
            Kubernetes controller that will drain and delete nodes (preemptibles) if they are created to close to each other to prevent GKE 24h deletion policy.
          </p>
          <ul>
            <li>Go</li>
            <li>Kubernetes, Helm</li>
            <li>Travis test and build pipelines</li>
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
