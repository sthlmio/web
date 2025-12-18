export function About() {
  const techLogos = [
    { alt: 'golang', src: '/static/golang.png' },
    { alt: 'kubernetes', src: '/static/kubernetes.png' },
    { alt: 'kafka', src: '/static/kafka.png' },
    { alt: 'openstack', src: '/static/openstack.png' },
    { alt: 'opentofu', src: '/static/opentofu.png' },
    { alt: 'postgresql', src: '/static/postgresql.png' },
  ]

  return (
    <section>
      <div className="content">
        <h2>Vad vi gör</h2>
        <p>
          Vi hjälper företag och organisationer att bygga, modernisera och
          drifta tjänster och infrastruktur. Vi jobbar gärna med öppna
          standarder och svenska hostingbolag.
        </p>
        <div className="customerBlurb">
          <p>
            Vi tar ansvar från arkitektur till produktion. Oavsett om ni bygger
            nytt, migrerar eller vill få ordning på er leverans och drift
            hjälper vi er att skapa en stabil grund för utveckling.
          </p>
        </div>
      </div>
      <div className="content logos">
        <div className="logos__heading">
          <p>Teknik vi ofta levererar med</p>
        </div>
        <div className="marquee" aria-label="Teknik vi ofta levererar med">
          <div className="track">
            <div className="group">
              {techLogos.map((logo) => (
                <div className="logoItem" key={logo.alt}>
                  <img alt={logo.alt} src={logo.src} />
                </div>
              ))}
            </div>
            <div className="group" aria-hidden="true">
              {techLogos.map((logo) => (
                <div className="logoItem" key={`${logo.alt}-dup`}>
                  <img alt="" src={logo.src} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*language=SCSS*/}
      <style jsx>{`
        section {
          width: 100%;
          background: #f5f5f5;
          z-index: 0;
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 60px 0 100px;
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

        p {
          font-weight: 400;
        }

        .customerBlurb {
          margin-top: 18px;
          max-width: 880px;
        }

        .content {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - 40px);
          padding: 20px 0 0;
        }

        .logos {
          margin: 0 auto;
          padding-top: 50px;
        }

        .logos__heading {
          padding: 0 0 10px;
        }

        .logos__heading p {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(0, 0, 0, 0.6);
          margin: 0;
        }

        .marquee {
          --gap: 48px;
          --seam-offset: 24px;
          width: 100%;
          margin-top: 10px;
          overflow: hidden;
          position: relative;
          padding: 8px 0 0;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
        }

        .track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: var(--gap);
          animation: marquee 28s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .marquee:hover .track,
        .marquee:focus-within .track {
          animation-play-state: paused;
        }

        .group {
          display: flex;
          align-items: center;
          gap: var(--gap);
          flex: 0 0 auto;
        }

        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(calc(-50% - var(--seam-offset)), 0, 0);
          }
        }

        @media screen and (max-width: 600px) {
          .marquee {
            --gap: 32px;
            --seam-offset: 16px;
          }
        }

        @media screen and (min-width: 500px) {
          section {
            padding: 120px 0 140px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .track {
            animation: none;
          }
        }

        .logoItem {
          flex: 0 0 auto;
        }

        .logoItem img {
          filter: grayscale(100%) saturate(0) contrast(0.5) brightness(0.75);
          vertical-align: middle;
          height: 52px;
          width: auto;
          opacity: 0.28;
        }
      `}</style>
    </section>
  )
}
