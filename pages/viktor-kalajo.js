import { Header } from '../components/header'
import { Project } from '../components/project'
import { DownloadPdfButton } from '../components/downloadPdfButton'
import { Lead } from '../components/lead'
import { CvTypography } from '../styles/cvTypography'

const ViktorKalajo = () => {
  return (
    <>
      <Header>
        <title>sthlm.io - Viktor Kalajo</title>
        <link rel="canonical" href="/viktor-kalajo/" />
      </Header>
      <div className="content">
        <h1 className="name">Viktor Kalajo</h1>
        <Lead>Senior Full-Stack Software Engineer, Stockholm</Lead>
        <p>
          <a className="mail" href="mailto:viktor.kalajo@gmail.com">
            viktor.kalajo@gmail.com
          </a>
        </p>
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
            Expertise in data storage and processing solutions, including
            PostgreSQL, ElasticSearch, Kafka and Redis.
          </li>
          <li>
            Proficient in CI/CD implementation, with a focus on automated
            testing for robust deployment pipelines.
          </li>
        </ul>
        <h2>Highlighted projects</h2>
        <Project
          title="SVT Astrid"
          role="Full-stack"
          from="Q1 2020"
          to="Q4 2024"
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
            'Kubernetes',
            'Docker',
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
            Astrid powers one of Sweden's largest news sites, svt.se, as well as
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
            'Google Cloud Platform (GCP)',
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
            <a href="https://www.akademibokhandeln.se">Akademibokhandeln</a>
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
          hidden
        >
          <p>
            E-commerce site for one of Sweden´s largest bookstores{' '}
            <a href="https://www.akademibokhandeln.se/">akademibokhandeln.se</a>
            .
          </p>
        </Project>

        <Project
          title="Thrive"
          role="Sole full-stack-developer"
          from="Q1 2016"
          to="Q3 2018"
          tags={[
            'MongoDB',
            'Express',
            'React',
            'Node',
            'MERN stack',
            'Redux',
            'Heroku',
            'REST',
          ]}
        >
          <p className="text">
            Survey tool. Single page application built using React, Redux, Node,
            MongoDB, Heroku and CloudFlare. I was responsible for the entire
            tech stack in this project.
          </p>
        </Project>

        <Project
          title="Spotify Intranet"
          role="Front-end developer"
          from="Q1 2014"
          to="Q4 2014"
          tags={['Angular', 'Python', 'Django']}
          hidden
        >
          <p className="text">
            Intranet for Spotify built using Angular & Django. I worked on the
            front end with Angular in this project.
          </p>
        </Project>

        <h2>Proffessional Experience</h2>

        <Project
          title="Viktor Kalajo AB"
          role="Freelancing developer"
          from="Q2 2018"
          to="Current"
          tags={[]}
        >
          <p>
            Most of my second round of freelancing has been on different
            projects in SVT. They are described in detail under "Highlighted
            projects".
          </p>
        </Project>

        <Project
          title="Creuna"
          role="Senior interface developer"
          from="Q2 2014"
          to="Q2 2018"
          tags={[
            'React.js',
            'JavaScript',
            'Python',
            'Django',
            'Node',
            'AngularJS',
          ]}
        >
          <p>
            At Creuna I had the opportunity to work with well-known companies
            such as Spotify, MTG, Akademibokhandeln and SVT. My role was
            primarily as a front-end developer with focus on JavaScript but I
            also worked on the back-end, especially in projects using Node and
            Python plus Django.
          </p>
        </Project>

        <Project
          title="Individual company"
          role="Freelancing developer"
          from="Q2 2010"
          to="Q2 2018"
          tags={[
            'MongoDb',
            'PHP',
            'Laravel',
            'jQuery',
            'WordPress',
            'Google Analytics',
            'Prestashop',
          ]}
        >
          <p>
            Delivered multiple web applications and websites as the sole
            developer, including a travel agency website with a booking system,
            a survey tool, a time reporting system, an e-commerce site for
            dress-up clothing, and several small-business WordPress websites.
            Additionally, I conducted lectures on web analytics. I ran these
            freelance projects in parallell with my university studies and my
            employment at Creuna.
          </p>
        </Project>

        <Project
          title="Swerob"
          role="Robotics technician"
          from="Q2 2007"
          to="Q4 2008"
          tags={[]}
        >
          <p>
            Programming and service of industrial (ABB) robots. Part time during
            High school.
          </p>
        </Project>

        <h2>Education</h2>
        <Project
          title="KTH Royal Institute of Technology"
          from="Q3 2008"
          to="Q4 2013"
          tags={[]}
        >
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
        </Project>

        <div className="downloadPdfWrapper">
          <DownloadPdfButton href="/static/pdf/viktor-kalajo-cv-2024-11-20.pdf" />
        </div>

        {/*language=SCSS*/}
        <style jsx>{`
          .content {
            margin: 0 auto;
            max-width: 1024px;
            padding: 20px;
          }

          .name {
            margin-bottom: 0;
          }

          @media print {
            .mail a {
              text-decoration: underline;
              font-weight: 600;
            }
          }

          .downloadPdfWrapper {
            justify-content: flex-start;
          }
        `}</style>
        <CvTypography />
      </div>
    </>
  )
}

export default ViktorKalajo
