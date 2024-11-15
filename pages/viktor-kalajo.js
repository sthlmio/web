import { Header } from '../components/header'
import { Project } from '../components/project'
import { DownloadPdfButton } from '../components/downloadPdfButton'

const ViktorKalajo = () => (
  <>
    <Header>
      <title>sthlm.io - Viktor Kalajo</title>
      <link rel="canonical" href="/viktor-kalajo/" />
    </Header>
    <div className="cv">
      <div className="content">
        <h1>Viktor Kalajo</h1>
        <p className="title">Senior Full-Stack Software Engineer, Stockholm</p>
        <small className="mail">
          <a href="mailto:viktor.kalajo@gmail.com">viktor.kalajo@gmail.com</a>
        </small>
        <p>
          With 12+ years of professional web development experience, I create
          products that deliver real value to users and stakeholders. I thrive
          in end-to-end involvement, from defining business goals and user needs
          to shaping UX, architecture, and writing the code.
        </p>
        <h2>Summary of Qualifications</h2>
        <ul>
          <li>
            Over 12 years of full-stack web development experience, specializing
            in TypeScript, React, and Node.js.
          </li>
          <li>
            Proven track record in architecting and delivering large-scale
            applications, successfully leading projects from proof of concept to
            production.
          </li>
          <li>
            Expertise in data storage and processing solutions including
            PostgreSQL, ElasticSearch, Kafka and Redis.
          </li>
          <li>
            Proficient in CI/CD implementation with a focus on automated testing
            for robust deployment pipelines.
          </li>
        </ul>
        <h2>Highlighted projects</h2>
        <Project
          title="SVT Astrid"
          role="Full-stack"
          from="Q1 2020"
          to="present"
          tags={[
            'TypeScript',
            'React',
            'Node',
            'Event-driven architecture',
            'Kafka',
            'ElasticSearch',
            'PostgreSQL',
            'Redis',
            'CQRS',
            'Gitlab CI/CD',
            'Real-time collaborative editing',
            'Monitoring',
            'Automated testing',
            'Mob-programming',
            'Agile',
          ]}
        >
          <p>
            As a core developer of Astrid, the publishing platform for SVT News
            and Sports, I played a key role in shaping its architecture and
            driving it from proof of concept to production. My involvement
            spanned the entire development lifecycle—from defining goals to
            collaborating on UX and writing code.
          </p>
          <p>
            Astrid powers one of Sweden’s largest news sites, svt.se, as well as
            the SVT Nyheter and SVT Sport apps. The platform has around 400
            editors, reaching millions of unique weekly readers with articles
            and feeds.
          </p>
          <p>
            One of the major technical challenges was enabling real-time
            collaboration among editors on articles and feeds. We solved this by
            implementing an event-driven architecture, which supports seamless
            and concurrent editing.
          </p>
          <p>
            Working with a highly autonomous team of eight, we built a system
            that received wide praise throughout the organization for its
            reliability and usability.
          </p>
        </Project>
        <Project
          title="SVT Direktcenter"
          role="Full-stack"
          from="Q1 2019"
          to="Q1 2020"
          tags={[
            'JavaScript',
            'React',
            'Node',
            'PostgreSQL',
            'Google Firestore',
            'Express',
            'Heroku',
            'Gitlab CI/CD',
            'Mob-programming',
          ]}
        >
          <p>
            Direktcenter is a versatile CMS designed for creating real-time news
            streams, chats, and more. It’s widely used within SVT for both News
            and Play content, supporting live, interactive features that enhance
            viewer engagement.
          </p>
          <p>
            Additionally, Direktcenter serves as the backup CMS for SVT Nyheter,
            ensuring news delivery when the primary system is down. Built for
            scale, it can support up to one million concurrent readers,
            delivering live updates within milliseconds.
          </p>
        </Project>
        <Project
          title={<a href="https://svt.se/sport">SVT Sport</a>}
          role="Front-end developer"
          from="Q3 2014"
          to="Q1 2019 (periodically)"
          tags={[
            'React',
            'Node',
            'GraphQL',
            'Express',
            'Heroku',
            'Gitlab CI/CD',
            'Webpack',
            'MongoDB',
            'Redis',
            'Universal/SSR',
            'Akamai',
          ]}
        >
          <p>
            SVT site for sport news,{' '}
            <a href="https://svt.se/sport">svt.se/sport</a>.
            Isomorphic/universal SPA built using React, Node and Express. High
            demands on performance and accessibility with ~500k unique visitors
            per week.
          </p>
        </Project>
        <Project
          title={
            <>
              <a href="https://www.akademibokhandeln.se">Akademibokhandeln</a>{' '}
              (via Creuna)
            </>
          }
          role="Lead front-end developer"
          from="Q2 2017"
          to="Q1 2018"
          tags={[
            'Python',
            'Django',
            'React',
            'PostgreSQL',
            'Heroku',
            'ElasticSearch',
            'Redis',
            'Docker',
          ]}
        >
          <p>
            E-commerce site for one of Sweden´s largest bookstores{' '}
            <a href="https://www.akademibokhandeln.se/">akademibokhandeln.se</a>
            .
          </p>
        </Project>
        <Project
          title="MTG Viasat Set-Top Box interface (via Creuna)"
          from="Q1 2015"
          to="Q2 2015"
          tags={['Angular']}
          role="Lead front-end developer"
        />
        <Project
          title="Spotify Intranet (via Creuna)"
          role="Front-end developer"
          from="Q1 2014"
          to="Q4 2014"
          tags={['Angular', 'Python', 'Django']}
        />

        <h2>Education</h2>
        <div className="education">
          <p>
            <span className="education-time">Q3 2008 - Q4 2013</span>
          </p>
          <p>
            Master of Science in{' '}
            <a href="http://www.csc.kth.se/utbildning/kth/kompetensinriktning/progdesignindek/">
              Software Design
            </a>{' '}
            and{' '}
            <a href="http://www.kth.se/utbildning/program/civilingenjor/industriell-ekonomi/civilingenjor-industriell-ekonomi-300-hp-1.4891">
              Industrial Economics and Management
            </a>{' '}
            at{' '}
            <a href="http://www.kth.se/en">KTH Royal Institute of Technology</a>
            .
          </p>
        </div>
        <div className="downloadPdfWrapper">
          <DownloadPdfButton href="/static/pdf/viktor-kalajo-cv.pdf" />
        </div>
      </div>
      {/*language=SCSS*/}
      <style jsx>{`
        .cv {
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

        .education-time {
          font-size: 0.9em;
          text-transform: uppercase;
          line-height: 1.2em;
          margin-top: 0.3em;
          font-weight: 600;
        }

        @media print {
          .cv .mail a {
            text-decoration: underline;
            font-weight: 600;
          }
        }

        .downloadPdfWrapper {
          justify-content: flex-start;
        }
      `}</style>
      <style jsx global>{`
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
          font-size: 15px;
          font-weight: 600;
          text-transform: uppercase;
          margin: 0;
        }

        .title {
          font-size: 18px;
        }

        li,
        small,
        p {
          font-size: 16px;
        }

        @media screen and (min-width: 500px) {
          .cv {
            h1 {
              font-size: 43px;
            }

            h2 {
              font-size: 30px;
            }

            h3 {
              font-size: 20px;
            }

            .title {
              font-size: 22px;
            }

            li,
            small,
            p {
              font-size: 18px;
            }
          }
        }

        @media print {
          .cv {
            h1 {
              font-size: 36px;
            }

            h2 {
              font-size: 22px;
            }

            h3 {
              font-size: 16px;
            }

            .title {
              font-size: 18px;
            }

            li,
            small,
            p {
              font-size: 16px;
            }

            a {
              text-decoration: none;
              font-weight: normal;
              color: #000;
            }
          }
        }
      `}</style>
    </div>
  </>
)

export default ViktorKalajo
