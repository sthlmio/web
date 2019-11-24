import { Project } from '../components/project';
import { Header } from '../components/header'
import { InPageHeader } from '../components/inPageHeader'

export default function ViktorBergehall () {
  return (
    <>
      <Header>
        <title>sthlm.io - Viktor Bergehall</title>
        <link rel="canonical" href="/viktor-bergehall/" />
      </Header>
      <section>
        <div className="content">
          <InPageHeader/>
          <h2>Viktor Bergehall</h2>
          <p>Tjurbergsgatan 27A, 118 56 Stockholm</p>
          <small>+46 704 826 691 / <a href="mailto:viktor.bergehall@sthlm.io">viktor.bergehall@sthlm.io</a>
            <br />
            <a
              href="https://www.linkedin.com/in/viktorbergehall/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a> /{' '}
            <a
              href="https://github.com/vb"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a></small>
          <p className="text">
            I am a freelance developer based in Stockholm, Sweden. My expertise lies within Javascript in general and React.js in particular. I have a background working mostly with frontend development, but also with backend development using Node.js. With over 8 years of working at digital agencies combined with an education ranging from graphic/interaction design to programming I have gained a wide experience of the software development process.
          </p>

          <h3>Next dream gig</h3>
          <p className="text">Data visualization, Typescript, GraphQL</p>

          <h3>Summary of Qualifications</h3>
          <ul>
            <li>Several years of experience with modern Javascript of both client and server</li>
            <li>Highly experienced in React.js</li>
            <li>Great general web development knowledge</li>
          </ul>

          <h3>Wants to learn more about</h3>
          <ul>
            <li>Data visualizations</li>
            <li>ML</li>
          </ul>

          <h3>Latest Projects</h3>
          <Project
            title={'Schibsted/Aftonbladet'}
            role="Developer"
            from="Q3 2019"
            to="present"
            tags={[
              'Javascript',
              'React.js',
              'D3.js'
            ]}
          >
            <p className="text">
              I'm currently working as a freelance developer at Aftonbladet. My role is to implement rich experiences for feature/long read articles.
            </p>
          </Project>
          <Project
            title="Assa Abloy (via Creuna AB)"
            role="Lead interface developer"
            from="Q4 2017"
            to="Q1 2019"
            tags={[
              'React.js',
              'Javascript',
              'Typescript',
              'Redux',
              'Node.js',
              'Azure',
              'Oauth'
            ]}
          >
            <p className="text">
            I was part of a team that worked on Assa Abloys intranet with 40k+ users. I was lead interface developer and among the challenges were to turning ideas to finished features by working closely together with the product owner.
            </p>
          </Project>
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
