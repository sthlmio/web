export function Jumbo() {
  return (
    <section>
      <div>
        <img src={require('../public/static/logo_small.svg')} />
        <p>
          Developer network helping clients build web apps and infrastructure
          using Cloud Native technologies.
        </p>
        <hr />
      </div>
      {/*language=CSS*/}
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
          width: 75%;
          max-width: 400px;
        }

        @media screen and (min-width: 700px) {
          img {
            width: 100%;
            max-width: 500px;
          }
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
