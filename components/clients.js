export function Clients () {
  return (
    <section>
      <div className="clients">
        <div className="item">
          <p>
            Fredrik has been instrumental in spearheading the development of our brand new cloud-native publishing platform. As a full-time consultant, he has been an invaluable resource to us, due to the depth of his knowledge of Kubernetes and his extensive experience in development. I highly recommend Fredrik for any corporation in need of a genuinely bleeding edge technology injection.
            <b>Henric Romlin, CTO, Egmont Publishing AB</b>
          </p>
          <hr/>
        </div>
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

        section::before {
          position: absolute;
          z-index: -1;
          right: 0;
          left: -5px;
          top: -100px;
          height: 150px;
          width: calc(100% + 5px);
          transform: rotate(2deg);
          content: "";
          background: #fff;
        }

        b {
          display: block;
          margin-top: 10px;
          font-weight: 700;
        }

        .content {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - 40px);
          padding: 20px;
        }

        .clients {
          padding: 0 0 200px;
        }

        .clients {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - 40px);
        }

        .item img {
          max-width: 100%;
          width: 25%;
        }
      `}</style>
    </section>
  )
}