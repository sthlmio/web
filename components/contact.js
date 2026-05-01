import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import { PillButton } from './pillButton'

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
      { threshold: 0.15 },
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
    const sectionBg = error ? '#f44336' : success ? '#26b95a' : '#3E46CF'
    const fieldBg = error ? '#d32f2f' : success ? '#1b8a42' : '#283193'

    return (
      <section id="contact" ref={(n) => (this.sectionNode = n)}>
        <div>
          <h2>{this.renderTitle()}</h2>
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
            <label htmlFor="name" className="label">
              Namn
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              ref={(n) => (this.inputNameNode = n)}
              onFocus={() => this.reset()}
            />
            <label htmlFor="email" className="label">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              ref={(n) => (this.inputEmailNode = n)}
              onFocus={() => this.reset()}
            />
            <label htmlFor="message" className="label">
              Meddelande
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              autoComplete="off"
              ref={(n) => (this.inputMessageNode = n)}
              onFocus={() => this.reset()}
            />
            <label className="checkbox">
              Jag godkänner{' '}
              <a href="/terms" target="_blank" className="terms-link">
                villkoren
              </a>
              <input
                type="checkbox"
                name="terms"
                ref={(n) => (this.inputTermsNode = n)}
                onFocus={() => this.reset()}
              />
              <span className="checkmark" />
            </label>
            <br />
            <PillButton type="submit" disabled={disableButton}>
              Skicka
            </PillButton>
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

          .label {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #efefef;
            margin-left: 5px;
            font-weight: 400;
            font-size: 14px;
            letter-spacing: 0.08em;
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
            border-radius: 7px;
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
            max-width: calc(100% - clamp(28px, 6vw, 40px));
          }

          h2 {
            margin-top: 0;
            min-height: 1.2em;
          }

          h2,
          p {
            color: #ffffff;
          }

          p {
            font-weight: 400;
          }

          @media screen and (min-width: 500px) {
            section {
              padding: 120px 0 140px;
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
            font-family: 'Inter', sans-serif;
            -webkit-appearance: none;
            font-size: 18px;
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

          @media screen and (min-width: 500px) {
            textarea,
            input {
              font-size: 22px;
            }
          }

          textarea:focus,
          input:focus {
            color: #ffffff;
            outline: none;
          }
        `}</style>
      </section>
    )
  }
}
