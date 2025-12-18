export function Clients() {
  const logos = [
    { src: '/static/svt.png', alt: 'SVT' },
    { src: '/static/doors.svg', alt: 'Doors' },
    { src: '/static/logo-ving.svg', alt: 'Ving' },
    { src: '/static/idun-logo-black.png', alt: 'Idun' },
  ]

  return (
    <section>
      <div className="clients">
        <h2>Kunder</h2>
        <p className="intro">
          Ett urval av kunder vi jobbat med genom åren. Vi hjälper team att
          bygga, modernisera och drifta tjänster och infrastruktur – från
          strategi och arkitektur till implementation och produktion.
        </p>
        <div className="logoGrid" aria-label="Kundlogotyper">
          {logos.map((logo) => (
            <div key={logo.src} className="logoCell">
              <img className="logo" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
      {/*language=SCSS*/}
      <style jsx>{`
        section {
          width: 100%;
          background: #fff;
          z-index: 0;
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 60px 0 100px;
        }

        @media screen and (min-width: 500px) {
          section {
            padding: 120px 0 140px;
          }
        }

        h2 {
          margin-top: 0;
        }

        .intro {
          font-weight: 400;
        }

        .logoGrid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px 14px;
          align-items: center;
        }

        @media screen and (min-width: 700px) {
          .logoGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media screen and (min-width: 980px) {
          .logoGrid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .clients {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - clamp(28px, 6vw, 40px));
        }

        .logoCell {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
          border: solid 3px #efefef;
          border-radius: 7px;
          height: 50px;
          transition: transform 0.2s ease;
        }

        .logo {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 25px;
          object-fit: contain;
          filter: brightness(0);
          opacity: 0.75;
        }

        @media (hover: hover) and (pointer: fine) {
          .logoCell:hover {
            transform: translateY(-4px);
          }

          .logoCell:hover .logo {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}
