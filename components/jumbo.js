export function Jumbo() {
  return (
    <section>
      <div className="topbar">
        <div className="topbarInner">
          <a href="/">
            <img className="logo" src={'/static/logo_small.svg'} alt="sthlm.io" />
          </a>
        </div>
      </div>
      <div className="main">
        <div className="content">
          <h1>Infrastruktur för den nya vardagen</h1>
          <p>
            Vi hjälper er att planera, bygga och drifta säkra och tillgängliga tjänster och plattformar med svensk datasuveränitet.
          </p>
          <hr />
          <div className="features" role="list" aria-label="Fokusområden">
            <div className="feature" role="listitem">
              <svg
                className="icon iconCloud"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <g transform="translate(-2 0)">
                  <path
                    d="M7.5 18H18a4 4 0 0 0 .2-8 5.5 5.5 0 0 0-10.7 1.6A3.5 3.5 0 0 0 7.5 18Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <div className="featureText">
                <div className="kicker">Plattform & drift</div>
                <div className="desc">
                  Öppna standarder som Kubernetes och
                  OpenStack.
                </div>
              </div>
            </div>

            <div className="feature" role="listitem">
              <svg
                className="icon iconAutomation"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                />
              </svg>
              <div className="featureText">
                <div className="kicker">Automation</div>
                <div className="desc">
                  IaC och GitOps för kontrollerade förändringar.
                </div>
              </div>
            </div>

            <div className="feature" role="listitem">
              <svg
                className="icon iconSecurity"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <g transform="translate(12 0) scale(1.12 1) translate(-12 0)">
                  <path
                    d="M12 3l7 4v6c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 12.5l1.8 1.8L15 10.6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <div className="featureText">
                <div className="kicker">Säkerhet</div>
                <div className="desc">
                  Hårdning och policyer från nätverk till runtime.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="ctaBadge" href="#contact" aria-label="Contact us">
        <span className="ctaInner">
          <span className="ctaText">
            Boka ett möte
            <br />
            så tar vi
            <br />
            nästa steg!
          </span>
        </span>
      </a>
      {/*language=CSS*/}
      <style jsx>{`
        section {
          width: 100%;
          min-height: 100vh;
          background: #3E46CF;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .main {
          flex: 1 0 auto;
          display: flex;
          align-items: center;
          padding: 30px 0 50px;
        }

        h1 {
          font-size: clamp(44px, 6vw, 80px);
          line-height: 1.05;
          color: #fff;
          margin: 0;
          text-align: left;
        }
        
        p {
          font-weight: 400;
          color: #fff;
          font-size: clamp(18px, 2.2vw, 28px);
          width: auto;
          max-width: 880px;
          margin: 16px 0 0;
          text-align: left;
        }

        .flagIcon {
          display: inline-block;
          vertical-align: middle;
          margin: 0 0.12em;
        }

        .flagIcon svg {
          width: 1.1em;
          height: auto;
          vertical-align: -0.12em;
        }

        hr {
          background: #fff;
          margin: 28px 0 0;
          height: 3px;
          width: 100%;
        }
        
        .logo {
          width: 150px;
          filter: brightness(0) invert(1);
        }

        .topbar {
          flex: 0 0 auto;
        }

        .topbarInner {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - 40px);
          padding: 20px;
        }

        .content {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - 40px);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ctaBadge {
          position: absolute;
          right: clamp(14px, 6vw, 122px);
          bottom: clamp(14px, 6vw, 122px);
          width: 190px;
          height: 190px;
          border-radius: 999px;
          background: #33e06b;
          display: grid;
          place-items: center;
          text-decoration: none;
          box-shadow:
            0 18px 50px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(0, 0, 0, 0.1) inset;
          transition:
            transform 140ms ease,
            box-shadow 140ms ease;
          transform: rotate(14deg);
        }

        .ctaInner {
          width: 78%;
          height: 78%;
          border-radius: 999px;
          display: grid;
          place-items: center;
          margin-top: -10px;
        }

        .ctaText {
          color: #0a1a10;
          font-size: 22px;
          line-height: 1.05;
          font-weight: 700;
          text-align: center;
          letter-spacing: -0.01em;
          text-wrap: balance;
        }

        .ctaBadge:hover {
          transform: rotate(14deg) translateY(-2px) scale(1.02);
          box-shadow:
            0 22px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(0, 0, 0, 0.1) inset;
        }

        .ctaBadge:focus-visible {
          outline: 3px solid rgba(255, 255, 255, 0.9);
          outline-offset: 4px;
        }

        @media screen and (max-width: 700px) {
          .ctaBadge {
            width: 140px;
            height: 140px;
            right: 24px;
            bottom: 24px;
          }

          .ctaText {
            font-size: 16px;
          }
        }

        .features {
          width: 100%;
          max-width: 1024px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        .feature {
          display: flex;
          margin-top: 20px;
          flex-direction: row;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 0;
          text-align: left;
        }

        .feature + .feature {
          border-top: 1px solid rgba(255, 255, 255, 0.22);
        }

        .icon {
          width: 32px;
          height: 32px;
          color: rgba(255, 255, 255, 0.92);
          flex: 0 0 auto;
        }

        .iconCloud {
          width: 38px;
          height: 38px;
        }

        .iconAutomation {
          width: 34px;
          height: 34px;
        }

        .iconSecurity {
          width: 36px;
          height: 36px;
        }

        .kicker {
          font-size: 14px;
          line-height: 1.25;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.74);
        }

        .desc {
          margin-top: 4px;
          font-size: 16px;
          line-height: 1.35;
          color: #fff;
          max-width: 360px;
        }

        @media screen and (min-width: 900px) {
          .features {
            margin-top: 10px;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
          }

          .feature {
            padding: 0 28px;
          }

          .feature + .feature {
            border-top: none;
          }

          .feature:first-child {
            padding-left: 0;
          }

          .feature:last-child {
            padding-right: 0;
          }

          .feature + .feature {
            border-left: 1px solid rgba(255, 255, 255, 0.22);
          }

          .desc {
            font-size: 16px;
            max-width: none;
          }
        }

        @media screen and (max-height: 760px) {
          .main {
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  )
}
