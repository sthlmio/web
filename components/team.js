import Link from 'next/link'

export function Team() {
  return (
    <section>
      <div className="content">
        <ul>
          <li>
            <div className="item">
              <div className="item__img">
                <img width="200" src={'/static/fredrik-lack.png'} />
              </div>
              <p>Fredrik Lack</p>
              <Link href="/fredrik-lack" legacyBehavior>
                <a>Profile</a>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item__img">
                <img width="200" src={'/static/johan-baath.png'} />
              </div>
              <p>Johan Bååth</p>
              <Link href="/johan-baath" legacyBehavior>
                <a>Profile</a>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item__img">
                <img width="200" src={'/static/viktor-kalajo.jpg'} />
              </div>
              <p>Viktor Kalajo</p>
              <Link href="/viktor-kalajo" legacyBehavior>
                <a>Profile</a>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item__img">
                <img width="200" src={'/static/viktor-bergehall.jpg'} />
              </div>
              <p>Viktor Bergehall</p>
              <Link href="/viktor-bergehall" legacyBehavior>
                <a>Profile</a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      {/*language=SCSS*/}
      <style jsx>{`
        section {
          width: 100%;
          padding: 0 0 100px;
          background: #f5f5f5;
          display: flex;
          justify-content: center;
          flex-direction: column;
          position: relative;
        }

        section::before {
          position: absolute;
          z-index: 0;
          left: -2px;
          right: -5px;
          top: -100px;
          height: 150px;
          width: calc(100% + 5px);
          transform: rotate(-2deg);
          content: '';
          background: #f5f5f5;
        }

        p {
          margin-bottom: 0;
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

        ul {
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          list-style: none;
        }

        li {
          flex: 1 0 0;
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
        }

        @media screen and (min-width: 450px) {
          li {
            padding: 0 40px;
          }
        }

        @media screen and (min-width: 900px) {
          li {
            max-width: calc(33.33% - 80px);
          }
        }

        .item {
          text-align: center;
          width: 220px;
        }

        .item__img {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .item__img--available:after {
          content: 'Available';
          transform: rotate(-45deg);
          left: -25px;
          top: 25px;
          padding: 0 15px;
          position: absolute;
          color: #ffffff;
          background: #ff0266;
        }

        img {
          border-radius: 50%;
          filter: grayscale(100%);
        }

        b {
          display: block;
          margin-top: 10px;
          font-weight: 700;
        }

        .content {
          margin: 0 auto;
          padding: 50px 0 60px;
          width: 1024px;
          max-width: calc(100% - 40px);
        }
      `}</style>
    </section>
  )
}
