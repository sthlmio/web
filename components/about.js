export function About() {
  return (
    <section>
      <div className="content">
        <h2>What we do</h2>
        <p>
          We are a network of self-employed developers helping clients build web
          apps for the future, and we like to do it with these technologies and
          tools. Check out more at our{' '}
          <a href="https://github.com/sthlmio" target="_blank">
            GitHub
          </a>{' '}
          organization.
        </p>
      </div>
      <div className="logos">
        <div>
          <div>
            <img alt="golang" src={require('../public/static/golang.png')} />
          </div>
          <div>
            <img
              alt="kubernetes"
              src={require('../public/static/kubernetes.png')}
            />
          </div>
          <div>
            <img
              alt="google cloud platform"
              src={require('../public/static/gcp.png')}
            />
          </div>
          <div>
            <img alt="node.js" src={require('../public/static/nodejs.png')} />
          </div>
          <div>
            <img
              alt="terraform"
              src={require('../public/static/terraform.png')}
            />
          </div>
          <div>
            <img alt="react" src={require('../public/static/react.png')} />
          </div>
          <div>
            <img alt="redis" src={require('../public/static/redis.png')} />
          </div>
          <div>
            <img alt="docker" src={require('../public/static/docker.png')} />
          </div>
          <div>
            <img alt="nginx" src={require('../public/static/nginx.png')} />
          </div>
          <div>
            <img
              alt="lets encrypt"
              src={require('../public/static/letsencrypt.png')}
            />
          </div>
          <div>
            <img alt="vault" src={require('../public/static/vault.png')} />
          </div>
          <div>
            <img
              alt="prometheus"
              src={require('../public/static/prometheus.png')}
            />
          </div>
        </div>
      </div>
      {/*language=SCSS*/}
      <style jsx>{`
        section {
          width: 100%;
          padding: 0;
          background: #f5f5f5;
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
          content: '';
          background: rgb(241, 241, 241);
          background: linear-gradient(
            180deg,
            rgba(241, 241, 241, 1) 0%,
            rgba(245, 245, 245, 1) 100%
          );
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

        h2 {
          margin-top: 0;
        }

        .content {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - 40px);
          padding: 20px 0 0;
        }

        .logos {
          padding: 0 0 200px;
        }

        .logos > div {
          margin: 0 auto;
          width: 1200px;
          max-width: calc(100% - 40px);
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .logos > div > div {
          display: flex;
          flex: 1 0 calc(50% - 30px);
          justify-content: center;
          align-items: center;
          padding: 15px;
          height: 100px;
          transition: background-color 0.2s ease-in-out;
          width: calc(50% - 30px);
        }

        @media screen and (min-width: 600px) {
          .logos > div > div {
            flex: 1 0 calc(33% - 30px);
            width: calc(33% - 30px);
          }
        }

        @media screen and (min-width: 1000px) {
          .logos > div > div {
            flex: 1 0 calc(25% - 30px);
            width: calc(25% - 30px);
          }
        }

        .logos img {
          filter: grayscale(100%);
          vertical-align: middle;
          max-width: 100%;
          width: 70%;
        }

        @media screen and (min-width: 500px) {
          .logos img {
            width: 50%;
          }
        }

        @media screen and (min-width: 1000px) {
          .logos img {
            width: 50%;
          }
        }
      `}</style>
    </section>
  )
}
