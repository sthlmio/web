export function Header() {
  return (
    <section>
      <div>
        <img src={require('../static/logo.svg')} />
        <p>sthlm.io is a by reference network with self-employed developers helping clients
          build web apps and infrastructure using Cloud Native technologies.</p>
        <span/>
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
          margin-bottom: 20px;
        }

        span {
          width: 100px;
          height: 20px;
          background: #ffc107;
          display: inline-block;
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