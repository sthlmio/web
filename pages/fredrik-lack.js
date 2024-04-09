import { Header } from '../components/header'
import { InPageHeader } from '../components/inPageHeader'

export default function FredrikLack() {
  return (
    <>
      <Header>
        <title>sthlm.io - Fredrik Lack</title>
        <link rel="canonical" href="https://sthlm.io/fredrik-lack/" />
      </Header>
      <section>
        <div className="content">
          <InPageHeader />
          <h2>Fredrik Lack</h2>
          <p>Textilgatan 25, 120 30 Stockholm</p>
          <small>
            +46 733 730 941 /{' '}
            <a href="mailto:fredrik@sthlm.io">fredrik@sthlm.io</a>
            <br />
            <a
              href="https://www.linkedin.com/in/fredriklack/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>{' '}
            /{' '}
            <a
              href="https://github.com/larsha"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </small>
          <p className="text">
            Developer with more than 11 years of professional experience. Now
            focusing a lot on working with the ecosystem around Kubernetes,
            Cloud Native and OSS.
            <br />
            <br />
            In one of my recent assignments I was spearheading the architecture
            and development of a brand new cloud native platform running
            Kubernetes on Google Cloud.
          </p>

          <h3>Summary of Qualifications</h3>
          <ul>
            <li>Consider myself as a generalist with a DevOps mindset</li>
            <li>Language agnostic and a full stack approach</li>
            <li>Running containers (Kubernetes) in production for 5+ years</li>
            <li>7+ years of production experience with Node.js</li>
            <li>
              Running bare metal Kubernetes clusters for 3+ years (Hetzner,
              Raspberry Pi)
            </li>
            <li>TypeScript/Node.js and Go as goto languages</li>
          </ul>

          <h3>Want to learn more about</h3>
          <ul>
            <li>Always more Kubernetes :)</li>
            <li>Kafka</li>
            <li>Rust</li>
          </ul>

          <h3>Highlighted Projects</h3>
          <h4>
            <a
              href="https://doors.live"
              rel="noopener noreferrer"
              target="_blank"
            >
              Doors.live
            </a>
          </h4>
          <p className="text">Backend developer, June 2021 - Nov 2021</p>
          <p className="text">
            As a backend developer I was part of a tech team of 12 people. I
            worked in the team focusing on the core business area, meaning order
            and payment flow with integrations to Stripe. We maintained two
            APIs, one for back office users and one client/public facing
            customer API. The back office api was a database driven API using
            PostGraphile. Both API's heavily used queues and tasks to perform
            work.
          </p>
          <ul>
            <li>Redis/Bull Queue</li>
            <li>PostgreSQL/PostGraphile/GraphQL</li>
            <li>Node.js, TypeScript</li>
            <li>AWS/Amazon</li>
          </ul>
          <h4>
            <a
              href="https://svti.svt.se/"
              rel="noopener noreferrer"
              target="_blank"
            >
              SVT Interaktiv
            </a>
          </h4>
          <p className="text">Developer, May 2020 - May 2021</p>
          <p className="text">
            As a full-stack developer I was part of a team doing mob-programming
            with a lean approach. The team was responsible for several
            applications but the main focus was a live tool used by editors
            built with an event source architecture.
          </p>
          <ul>
            <li>On-prem Kubernetes</li>
            <li>Mob programming</li>
            <li>Event sourcing/CQRS</li>
            <li>Google Cloud: Cloud SQL, App Engine, Firestore</li>
            <li>Node.js, Next.js</li>
          </ul>
          <h4>
            <a
              href="https://www.ving.se"
              rel="noopener noreferrer"
              target="_blank"
            >
              Nordic Leisure Travel Group/Ving
            </a>
          </h4>
          <p className="text">Developer Sep 2019 - Apr 2020</p>
          <p className="text">
            Worked in one of the web teams at Ving with the SAFe methodology.
            Our team was responsible for multiple universal Node.js/React
            applications on ving.se, tjareborg.fi, ving.no and spies.dk. Worked
            both on-prem and in Azure, the team was responsible for everything
            from development and testing to CI/CD and monitoring the running
            applications.
          </p>
          <ul>
            <li>React, Redux, Node.js</li>
            <li>Azure: Functions, App Service, Key Vault</li>
            <li>GraphQL/Apollo</li>
          </ul>
          <h4>
            <a
              href="https://www.storyhouseegmont.se/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Egmont Publishing AB
            </a>
          </h4>
          <p className="text">Architect/Lead Developer, May 2018 - Sep 2019</p>
          <p className="text">
            Spearheaded the development of a brand new cloud native publishing
            platform running Kubernetes on GKE (Google Cloud). Using some of
            Google Clouds other services too like Cloud SQL, Cloud Storage,
            Cloud Functions and Cloud KMS.
          </p>
          <ul>
            <li>Kubernetes (GKE)</li>
            <li>Terraform, Helm, Prometheus/Grafana</li>
            <li>Let's Encrypt</li>
            <li>Google Cloud</li>
            <li>PHP7, Node.js, Nginx, Docker, Redis, Elasticsearch</li>
            <li>Cloud SQL, Cloud Storage, Cloud KMS</li>
          </ul>
          <h4>
            <a
              href="https://www.lexplore.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Lexplore
            </a>
          </h4>
          <p className="text">Developer, May 2017 - May 2018</p>
          <h4>
            <a
              href="https://svti.svt.se/"
              rel="noopener noreferrer"
              target="_blank"
            >
              SVT Sport
            </a>{' '}
            (via Creuna AB)
          </h4>
          <p className="text">Developer, 2015 - 2017</p>
          <h4>
            <a
              href="https://www.akademibokhandeln.se/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Akademibokhandeln
            </a>{' '}
            (via Creuna AB)
          </h4>
          <p className="text">Developer, 2016 - 2017</p>
          <h4>
            <a
              href="https://www.pointsharp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Pointsharp
            </a>{' '}
            (via Creuna AB)
          </h4>
          <p className="text">Developer, 2016 - 2017</p>
          <h4>
            <a
              href="https://www.assaabloy.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              ASSA ABLOY
            </a>{' '}
            (via Creuna AB)
          </h4>
          <p className="text">Developer/Front-end lead, 2015</p>
          <h4>
            <a
              href="https://www.storyhouseegmont.se/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Egmont Publishing AB
            </a>
          </h4>
          <p className="text">Developer, 2012 - 2015</p>
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
