export function Jumbo() {
  return (
    <section>
      <div>
        <img src={require('../static/logo_small.svg')}/>
        <p>sthlm.io is a developer network helping clients
          build web apps and infrastructure using Cloud Native technologies.</p>
        <hr/>
      </div>
      { /*language=CSS*/ }
      <style jsx>{`
        section {
          width: 100%;
          height: 100vh;
          background: #ffffff;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        img {
          width: 100%;
          max-width: 500px;
          margin-bottom: 20px;
        }

        div {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - 40px);
          padding: 20px;
        }
      `}</style>
    </section>
  )
}
