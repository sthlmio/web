import { Header } from '../components/header';
import { InPageHeader } from '../components/inPageHeader';
import { Project } from '../components/project';

const ViktorKalajo = () => (
  <>
    <Header title={`sthlm.io - viktor kalajo`} canonical="/viktor-kalajo/" />
    <section>
      <div className="content">
        <InPageHeader />
        <h2>Viktor Kalajo</h2>
        <p>Elin Wägners gata 25, 129 51 Hägersten</p>
        <small>
          <a href="mailto:viktor@sthlm.io">viktor@sthlm.io</a>
        </small>
        <p>
          I have been working professionally with web development 7+ years. The
          last couple of years my primary focus has been with technologies and
          frameworks such as <strong>JavaScript</strong>, <strong>React</strong>
          , <strong>Node</strong> and <strong>Express</strong>. I'm also
          well-versed in general front end stuff such as HTML, CSS, build tools,
          accessibility, SEO and performance.
        </p>
        <p>Clients I've worked with include Spotify, SVT and MTG.</p>

        <h3>Next dream gig</h3>
        <p className="text">
          Complex web application with lots of interaction and state.
          Technologies such as React, Node, GraphQL and TypeScript. I`d love to
          be involved in the full tech stack and also in the design process.
        </p>

        <h3>Summary of Qualifications</h3>
        <ul>
          <li>
            Highly experienced in modern JavaScript on both server and client
            side
          </li>
          <li>
            5+ years of experience writing large-scale React and Node
            applications
          </li>
          <li>
            Databases and search indexes such as MongoDB, ElasticSearch, Redis
            and PostgreSQL
          </li>
          <li>Great general frontend knowledge</li>
          <li>
            CI/CD, automation and hosting using tools like Heroku, Gitlab
            pipelines and Jenkins
          </li>
          <li>Some GraphQL knowledge</li>
        </ul>

        <h3>Wants to learn more about</h3>
        <ul>
          <li>GraphQL</li>
          <li>TypeScript</li>
        </ul>

        <h3>Highlighted projects</h3>
        <Project
          title="SVT Direktcenter"
          role="Developer and initiator"
          from="Q1 2019"
          to="present"
          tags={[
            'Google Firestore',
            'React',
            'Node',
            'Express',
            'Heroku',
            'Gitlab pipelines'
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
            'Gitlab pipelines',
            'Webpack',
            'MongoDB',
            'Redis',
            'Isomorphism',
            'Universal app',
            'Akamai'
          ]}
        >
          <p className="text">
            SVT site for sport news,{' '}
            <a href="https://svt.se/sport">svt.se/sport</a>. Isomorphic /
            universal SPA built using <strong>React</strong>,{' '}
            <strong>Node</strong> and <strong>Express</strong>. High demands on
            performance and accessibility with ~500k unique visitors per week.
          </p>
        </Project>

        <Project
          title={
            <>
              <a href="https://www.akademibokhandeln.se">Akademibokhandeln</a>{' '}
              (via creuna)
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
            'Docker'
          ]}
        >
          <p className="text">
            E-commerce site{' '}
            <a href="https://www.akademibokhandeln.se/">akademibokhandeln.se</a>{' '}
            for books built using technologies such as{' '}
            <strong>Django (Python)</strong>, <strong>React</strong> and{' '}
            <strong>ElasticSearch</strong>. I was the lead front end deveoper
            during my time on this project, but i also had the opportunity to
            work on the back end with Django.
          </p>
        </Project>

        <Project
          title="Thrive"
          role="Sole fullstack-developer"
          from="Q1 2016"
          to="Q3 2018"
          tags={[
            'React',
            'Redux',
            'Node',
            'Express',
            'Heroku',
            'MongoDB',
            'REST'
          ]}
        >
          <p className="text">
            Survey tool. Single page application built using{' '}
            <strong>React</strong>, <strong>Redux</strong>,{' '}
            <strong>Node</strong>, <strong>MongoDB</strong>,{' '}
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
            Intranet for Spotify built using Angular & Django. I worked on the
            front end with Angular in this project.
          </p>
        </Project>
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
);

export default ViktorKalajo;
