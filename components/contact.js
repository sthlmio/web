import { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

const INITIAL_STATE = {
  submitting: false,
  submitted: false,
  success: false,
  error: false
}

export class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = INITIAL_STATE
  }

  reset () {
    this.setState({
      ...INITIAL_STATE,
      submitted: this.state.submitted,
    })
  }

  handleSubmit () {
    if (!this.inputTermsNode.checked) {
      this.setState({
        submitted: true,
        error: true,
        submitting: false
      })

      return
    }

    this.setState({ submitting: true })

    fetch('https://europe-west1-sthlmio.cloudfunctions.net/mailgun', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.inputNameNode.value,
        email: this.inputEmailNode.value,
        message: this.inputMessageNode.value
      })
    }).then(res => {
      if (res.status === 200) {
        this.setState({
          submitted: true,
          success: true,
          submitting: false
        })

        this.formNode.reset()
      } else {
        this.setState({
          submitted: true,
          error: true,
          submitting: false
        })
      }
    }, () => {
      this.setState({
        submitted: true,
        error: true,
        submitting: false
      })
    })
  }

  renderTitle () {
    const { submitted, error, success, submitting } = this.state

    if (submitting) {
      return <Typist cursor={{blink: true}} key="sending">Hang on</Typist>
    }

    if (submitted) {
      if (error) {
        return <Typist cursor={{blink: true}} key="error">Oops, try agin<Typist.Backspace count={2} delay={100} />ain</Typist>
      } else if (success) {
        return <Typist cursor={{blink: true}} key="success">Thank you</Typist>
      }

      return <Typist cursor={{blink: true}} key="retry">Ok, lets try again</Typist>
    }

    return <Typist cursor={{blink: true}} key="default">Get in touch</Typist>
  }

  render () {
    const { submitting, error, success } = this.state
    const disableButton = submitting || error || success

    return (
      <section>
        <div>
          <h2>{this.renderTitle()}</h2>
          <p>Get in touch so we can have a chat.</p>
          <form ref={n => (this.formNode = n)} onSubmit={e => {
            e.preventDefault()
            this.handleSubmit()
          }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              ref={n => (this.inputNameNode = n)}
              onFocus={() => this.reset()}
            />
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              autoComplete="off"
              ref={n => (this.inputEmailNode = n)}
              onFocus={() => this.reset()}
            />
            <textarea
              name="message"
              rows="3"
              placeholder="Message"
              autoComplete="off"
              ref={n => (this.inputMessageNode = n)}
              onFocus={() => this.reset()}
            />
            <label className="checkbox">I agree to the <Link href="/terms"><a target="_blank">terms</a></Link>
              <input
                type="checkbox"
                name="terms"
                ref={n => (this.inputTermsNode = n)}
                onFocus={() => this.reset()}
              />
              <span className="checkmark"/>
            </label>
            <button type="submit" disabled={disableButton}>Send</button>
          </form>
        </div>
        { /*language=CSS*/ }
        <style jsx>{`
          .checkbox {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            color: #fff;
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
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #fff;
          }

          .checkbox:hover input ~ .checkmark {
            background-color: #ccc;
          }

          .checkbox input:checked ~ .checkmark {
            background-color: ${this.state.error ? '#b71c1c' : '#283193'};
          }

          .checkmark:after {
            content: "";
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

          a,
          a:hover,
          a:visited,
          a:active {
            font-weight: 700;
            color: #fff;
          }

          section {
            width: 100%;
            padding: 0 0 100px;
            background: ${this.state.error ? '#f44336' : '#3E46CF'};
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
            background: ${this.state.error ? '#f44336' : '#3E46CF'};
          }

          div {
            z-index: 1;
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
            background: ${this.state.error ? '#f44336' : '#3E46CF'};
            border: 0;
            padding: 0;
            text-indent: 0;
            font-family: 'Overpass Mono', sans-serif;
            font-weight: 300;
            -webkit-appearance: none;
            -webkit-border-radius: 0px;
            font-size: 28px;
            resize: none;
            color: #fff;
            margin-bottom: 20px;
          }

          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active  {
            -webkit-box-shadow: 0 0 0 100px ${this.state.error ? '#f44336' : '#3E46CF'} inset !important;
            -webkit-text-fill-color: #fff !important;
          }

          button[type="submit"] {
            text-transform: uppercase;
            background: #fff;
            color: #000;
            border: 0;
            outline: none;
            padding: 20px 50px;
            cursor: pointer;
            font-size: 18px;
            font-family: 'Overpass', sans-serif;
            font-weight: 300;
            -webkit-appearance: none;
            -webkit-border-radius: 0px;
          }
          
          button[type="submit"]:disabled {
            pointer-events: none;
            opacity: .3;
          }

          @media screen and (min-width: 500px) {
            button[type="submit"] {
              font-size: 22px;
            }
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
            color: ${this.state.error ? '#b71c1c' : '#283193'}
          }
        `}</style>
      </section>
    )
  }
}
