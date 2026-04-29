import { PillButton } from './pillButton'

export function BlogCta() {
  return (
    <section className="cta">
      <div className="inner">
        <h2>Hör av dig!</h2>
        <p>
          Om det du läst här låter intressant, eller om du eller din
          organisation vill veta mer, få råd eller behöver hjälp – hör av er
          till oss!
        </p>
        <div className="action">
          <PillButton href="/#contact">Kontakta oss</PillButton>
        </div>
      </div>

      {/*language=SCSS*/}
      <style jsx>{`
        .cta {
          width: 100%;
          background: #3E46CF;
          padding: 80px 0;
          display: flex;
          justify-content: center;
        }

        .inner {
          width: 1024px;
          max-width: calc(100% - 40px);
          padding: 0 20px;
          text-align: left;
        }

        h2 {
          font-size: clamp(28px, 4vw, 40px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          font-weight: 700;
          margin: 0 0 14px;
          color: #ffffff;
        }

        p {
          font-size: 18px;
          line-height: 1.6;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 24px;
          max-width: 640px;
          width: auto;
        }

        .action {
          display: flex;
          justify-content: flex-start;
        }
      `}</style>
    </section>
  )
}
