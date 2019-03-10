export function Contact() {
  return (
    <section>
      <div>
        <h2>Get in touch</h2>
        <p>If you need help, get in touch with us so we can have a chat.</p>
        {/*<input type="text" name="aasd" placeholder="Name" autoComplete="off" />*/}
        {/*<input type="text" name="aasdadsd" placeholder="E-mail" autoComplete="off" />*/}
        {/*<textarea placeholder="Message" autoComplete="off"></textarea>*/}
        <a href="mailto:fredrik@sthlm.io">fredrik@sthlm.io</a><br/>
        <a href="mailto:johan@sthlm.io">johan@sthlm.io</a><br/>
        <a href="mailto:viktor@sthlm.io">viktor@sthlm.io</a>
      </div>
      { /*language=CSS*/ }
      <style jsx>{`
        a {
          font-family: 'Overpass Mono', sans-serif;
          font-weight: 300;
          font-size: 22px;
          color: #ffc107;
          text-decoration: none;
        }

        @media screen and (min-width: 500px) {
          a {
            font-size: 28px;
          }
        }
        
        section {
          width: 100%;
          padding: 100px 0;
          background: #3E46CF;
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
          content: "";
          background: #3E46CF;
        }

        div {
          margin: 0 auto;
          width: 1024px;
          max-width: calc(100% - 40px);
          padding: 20px;
        }

        h2, p {
            color: #ffffff;
        }

        textarea,
        input {
            width: 100%;
            display: block;
            background: transparent;
            border: 0;
            font-family: 'Overpass Mono', sans-serif;
            font-weight: 300;
            font-size: 28px;
            resize: none;
            color: #ffc107;
            margin-bottom: 20px;
        }

        @media screen and (min-width: 500px) {
          textarea,
          input {
            font-size: 34px;
          }
        }

        textarea:focus,
        input:focus {
            color: #ffffff;
            outline: none;
        }

        textarea::placeholder,
        input::placeholder {
            color: #283193;
        }
      `}</style>
    </section>
  )
}