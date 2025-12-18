import { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

export class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false,
      success: false,
      error: false,
      enableTyping: false,
    }
  }

  componentDidMount() {
    if (typeof window === 'undefined') return

    if (!('IntersectionObserver' in window)) {
      this.setState({ enableTyping: true })
      return
    }

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting) return
        this.setState({ enableTyping: true })
        this.intersectionObserver?.disconnect()
        this.intersectionObserver = null
      },
      { threshold: 0.5 },
    )

    if (this.sectionNode) this.intersectionObserver.observe(this.sectionNode)
  }

  componentWillUnmount() {
    this.intersectionObserver?.disconnect()
    this.intersectionObserver = null
  }

  reset() {
    this.setState({
      submitting: false,
      success: false,
      error: false,
    })
  }

  renderTyped(text, key) {
    if (!this.state.enableTyping) return ''
    return (
      <Typist cursor={{ blink: true }} key={key}>
        <Typist.Delay ms={500} />
        {text}
      </Typist>
    )
  }

  handleSubmit() {
    if (!this.inputTermsNode.checked) {
      this.setState({
        submitted: true,
        error: true,
        success: false,
        submitting: false,
      })

      return
    }

    this.setState({ submitting: true })

    fetch('https://mail.api.sthlm.io/v1/j3vr/message/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: 'Contact form submission: sthlm.io',
        from_address: this.inputEmailNode.value,
        body_text: `${this.inputMessageNode.value}\n\n${this.inputNameNode.value}`,
      }),
    }).then(
      (res) => {
        if ([200, 201].includes(res.status)) {
          this.setState({
            submitted: false,
            error: false,
            success: true,
            submitting: false,
          })

          this.formNode.reset()
        } else {
          this.setState({
            submitted: true,
            error: true,
            success: false,
            submitting: false,
          })
        }
      },
      () => {
        this.setState({
          submitted: true,
          error: true,
          success: false,
          submitting: false,
        })
      },
    )
  }

  renderTitle() {
    const { submitted, error, success, submitting } = this.state

    if (submitting) {
      return this.renderTyped('Skickar…', 'sending')
    }

    if (success) {
      return this.renderTyped('Tack!', 'success')
    }

    if (submitted) {
      if (error) {
        return this.renderTyped('Hoppsan, försök igen', 'error')
      }

      return this.renderTyped('Okej, vi försöker igen', 'retry')
    }

    return this.renderTyped('Hej!', 'default')
  }

  render() {
    const { submitting, error, success } = this.state
    const disableButton = submitting || error || success
    const sectionBg = error ? '#f44336' : success ? '#33e06b' : '#3E46CF'
    const fieldBg = error ? '#d32f2f' : success ? '#26b95a' : '#283193'
    const placeholderColor = error ? '#b71c1c' : success ? '#1b8a42' : '#1f2570'

    return (
      <section id="contact" ref={(n) => (this.sectionNode = n)}>
        <div>
          <div className="titleRow">
            <svg
              className="handSvg"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M7.2 12V6.3a1.6 1.6 0 0 1 3.2 0V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10.4 12V5.6a1.6 1.6 0 0 1 3.2 0V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M13.6 12V6.2a1.5 1.5 0 0 1 3 0V13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16.6 13.2l.8-1a1.4 1.4 0 0 1 2.5.9V15a6.5 6.5 0 0 1-6.5 6.5h-.4A6.5 6.5 0 0 1 6.5 15v-1.3c0-.8.6-1.4 1.4-1.4.4 0 .7.1 1 .3l2.2 1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2>{this.renderTitle()}</h2>
          </div>
          <p>
            Hör av dig så tar vi en snabb koll och ser om vi är rätt partner för
            er.
          </p>
          <form
            ref={(n) => (this.formNode = n)}
            onSubmit={(e) => {
              e.preventDefault()
              this.handleSubmit()
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Namn"
              autoComplete="off"
              ref={(n) => (this.inputNameNode = n)}
              onFocus={() => this.reset()}
            />
            <input
              type="text"
              name="email"
              placeholder="E-post"
              autoComplete="off"
              ref={(n) => (this.inputEmailNode = n)}
              onFocus={() => this.reset()}
            />
            <textarea
              name="message"
              rows="3"
              placeholder="Meddelande"
              autoComplete="off"
              ref={(n) => (this.inputMessageNode = n)}
              onFocus={() => this.reset()}
            />
            <label className="checkbox">
              Jag godkänner{' '}
              <Link href="/terms" legacyBehavior>
                <a target="_blank" className="terms-link">
                  villkoren
                </a>
              </Link>
              <input
                type="checkbox"
                name="terms"
                ref={(n) => (this.inputTermsNode = n)}
                onFocus={() => this.reset()}
              />
              <span className="checkmark" />
            </label>
            <button type="submit" disabled={disableButton}>
              Skicka{' '}
              <span className="buttonCaret" aria-hidden="true">
                ›
              </span>
            </button>
          </form>
        </div>
        {/*language=CSS*/}
        <style jsx>{`
          .checkbox {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-top: 3px;
            margin-bottom: 12px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            color: #fff;
            width: fit-content;
          }

          .checkbox > input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          .checkmark {
            position: absolute;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #fff;
          }

          .terms-link:hover {
            color: #fff;
          }

          .checkbox:hover input ~ .checkmark {
            background-color: #ccc;
          }

          .checkbox:hover a:hover ~ input ~ .checkmark,
          .checkbox a:hover ~ input ~ .checkmark {
            background-color: #fff;
          }

          .checkbox input:checked ~ .checkmark {
            background-color: ${fieldBg};
          }

          .checkmark:after {
            content: '';
            position: absolute;
            display: none;
          }

          .checkbox input:checked ~ .checkmark:after {
            display: block;
          }

          .checkbox .checkmark:after {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }

          a {
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          a,
          a:hover,
          a:visited,
          a:active {
            font-weight: 700;
            color: #fff;
          }

          section {
            width: 100%;
            background: ${sectionBg};
            display: flex;
            justify-content: center;
            flex-direction: column;
            position: relative;
            padding: 60px 0 100px;
          }

          div {
            z-index: 1;
            margin: 0 auto;
            width: 1024px;
            max-width: calc(100% - 40px);
          }

          h2 {
            margin-top: 0;
          }

          h2,
          p {
            color: #ffffff;
          }

          p {
            font-weight: 400;
          }

          .titleRow {
            margin: 0;
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .handSvg {
            width: clamp(32px, 4.2vw, 56px);
            height: clamp(32px, 4.2vw, 56px);
            color: rgba(255, 255, 255, 0.95);
            flex: 0 0 auto;
            transform: rotate(-14deg);
            transform-origin: 55% 55%;
          }

          @media (prefers-reduced-motion: no-preference) {
            .handSvg {
              animation: handWave 2.8s ease-in-out infinite;
            }
          }

          @media screen and (min-width: 500px) {
            section {
              padding: 120px 0 140px;
            }
          }

          @keyframes handWave {
            0%,
            60%,
            100% {
              transform: rotate(-14deg);
            }
            10% {
              transform: rotate(-6deg);
            }
            20% {
              transform: rotate(-16deg);
            }
            30% {
              transform: rotate(-8deg);
            }
            40% {
              transform: rotate(-14deg);
            }
          }

          textarea,
          input {
            width: calc(100% - 20px);
            display: block;
            background: ${fieldBg};
            border: 0;
            border-radius: 7px;
            padding: 10px;
            text-indent: 0;
            font-family: 'Noto Sans', sans-serif;
            -webkit-appearance: none;
            font-size: 20px;
            resize: none;
            color: #fff;
            margin-bottom: 20px;
            font-weight: 400;
          }

          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 100px ${fieldBg} inset !important;
            -webkit-text-fill-color: #fff !important;
          }

          button[type='submit'] {
            text-transform: uppercase;
            background: #fff;
            color: #000;
            border: 0;
            border-radius: 7px;
            outline: none;
            margin-top: 10px;
            padding: 20px 50px;
            cursor: pointer;
            font-size: 18px;
            font-family: 'Noto Sans', sans-serif;
            font-weight: 800;
            -webkit-appearance: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .buttonCaret {
            font-size: 30px;
            line-height: 1;
            margin-top: -0.15em;
          }

          button[type='submit']:disabled {
            pointer-events: none;
            opacity: 0.3;
          }

          @media screen and (min-width: 500px) {
            button[type='submit'] {
              font-size: 22px;
            }
          }

          @media screen and (min-width: 500px) {
            textarea,
            input {
              font-size: 28px;
            }
          }

          textarea:focus,
          input:focus {
            color: #ffffff;
            outline: none;
          }

          textarea::placeholder,
          input::placeholder {
            font-weight: 400;
            color: ${placeholderColor};
          }
        `}</style>
      </section>
    )
  }
}
