import Cv from '../components/cv'

import { Project } from '../components/project'
import { Tags } from '../components/tags'

const ViktorKalajo = () => (
  <Cv
    name="Viktor Kalajo"
    title="Senior software engineer"
    location="Stockholm"
    canonical="/viktor-kalajo/"
    email="viktor.kalajo@gmail.com"
  >
    <p className="text">
      With 12+ years of professional web development experience, I create
      products that deliver real value to users and stakeholders. I thrive in
      end-to-end involvement, from defining business goals and user needs to
      shaping UX, architecture, and writing the code.
    </p>
    <p className="text">
      Clients I've worked with includes SVT, Spotify and MTG.
    </p>
    <h3>Summary of Qualifications</h3>
    <ul>
      <li>
        Highly experienced in modern TypeScript on both server and client side
      </li>
      <li>
        10+ years of experience writing large-scale React and Node applications
      </li>
      <li>
        Experience in front-end and back-end architecture, instrumental in
        shaping the architecture of recent projects, and driving technical
        solutions from POCs to production.
      </li>
      <li>
        Knowledge in data storage and processing solutions such as such as
        PostgreSQL, Kafka, MongoDB, ElasticSearch and Redis
      </li>
      <li>Experience setting up and using CI/CD with automated testing</li>
    </ul>
    <h3>Highlighted projects</h3>
    <Project
      title="SVT Astrid"
      role="Developer"
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
        'CQRS',
        'Gitlab CI/CD',
        'Monitoring',
        'Automated testing',
      ]}
    >
      <p className="text">
        As a core developer of Astrid, the publishing platform for SVT News and
        Sports, I played a key role in shaping its architecture and driving it
        from POCs to production. My involvement spanned the entire development
        lifecycle—from defining goals to collaborating on UX and writing code.
        The system has been widely praised within the organization.
      </p>
    </Project>
    <Project
      title="SVT Direktcenter"
      role="Developer and initiator"
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
      ]}
    >
      <p className="text">
        CMS for creating real time news streams for articles at{' '}
        <a href="https://svt.se/">SVT Nyheter</a>.
      </p>
    </Project>
    <Project
      title={<a href="https://svt.se/sport">SVT Sport</a>}
      role="Front-end developer"
      from="Q3 2014"
      to="present"
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
        'Isomorphism',
        'Universal app',
        'Akamai',
      ]}
    >
      <p className="text">
        SVT site for sport news, <a href="https://svt.se/sport">svt.se/sport</a>
        . Isomorphic / universal SPA built using <strong>React</strong>,{' '}
        <strong>Node</strong> and <strong>Express</strong>. High demands on
        performance and accessibility with ~500k unique visitors per week.
      </p>
    </Project>
    <Project
      title={
        <>
          <a href="https://www.akademibokhandeln.se">Akademibokhandeln</a> (via
          creuna)
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
      <p className="text">
        E-commerce site{' '}
        <a href="https://www.akademibokhandeln.se/">akademibokhandeln.se</a> for
        books built using technologies such as <strong>Django (Python)</strong>,{' '}
        <strong>React</strong> and <strong>ElasticSearch</strong>. I was the
        lead front end deveoper during my time on this project, but i also had
        the opportunity to work on the back end with Django.
      </p>
    </Project>
    <Project
      title="Thrive"
      role="Sole developer"
      from="Q1 2016"
      to="Q3 2018"
      tags={['React', 'Redux', 'Node', 'Express', 'Heroku', 'MongoDB', 'REST']}
    >
      <p className="text">
        Survey tool. Single page application built using <strong>React</strong>,{' '}
        <strong>Redux</strong>, <strong>Node</strong>, <strong>MongoDB</strong>,{' '}
        <strong>Heroku</strong> and <strong>CloudFlare</strong>. I was
        responsible for the entire tech stack in this project.
      </p>
    </Project>
    <Project
      title="Spotify Intranet (Via Creuna)"
      role="Front-end developer"
      from="Q1 2014"
      to="Q4 2014"
      tags={['Angular', 'Python', 'Django']}
    >
      <p className="text">
        Intranet for Spotify built using Angular & Django. I worked on the front
        end with Angular.
      </p>
      <p className="text">Master of Science, Q3 2008 - Q4 2013 </p>
      <p className="text">Master of Science, Q3 2008 - Q4 2013 </p>
    </Project>

    <h3>Tech</h3>
    <Tags
      tags={[
        'TypeScript / JavaScript',
        'React',
        'Next.js',
        'GraphQL',
        'Node.js',
        'Express',
        'PostgreSQL',
        'MongoDB',
        '',
      ]}
    />

    <h3>Education</h3>
    <div className="education">
      <p className="text">Q3 2008 - Q4 2013 </p>
      <p className="text">
        Master of Science in{' '}
        <a href="http://www.csc.kth.se/utbildning/kth/kompetensinriktning/progdesignindek/">
          Software Design
        </a>{' '}
        and{' '}
        <a href="http://www.kth.se/utbildning/program/civilingenjor/industriell-ekonomi/civilingenjor-industriell-ekonomi-300-hp-1.4891">
          Industrial Economics and Management
        </a>{' '}
        at <a href="http://www.kth.se/en">Royal Institute of Technology</a>.
      </p>
    </div>
  </Cv>
)

export default ViktorKalajo
