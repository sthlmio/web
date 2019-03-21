import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

export class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false,
      error: false
    }
  }

  handleSubmit () {
    this.setState({ submitting: true })
    fetch('https://europe-west1-sthlmio.cloudfunctions.net/mailgun', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.inputNameNode.value,
        email: this.inputEmailNode.value,
        message: this.inputMessageNode.value,
      })
    }).then(res => {
      if (res.status === 200) {
        this.setState({
          submitted: true,
          submitting: false
        })

        this.formNode.reset()
      } else {
        this.setState({
          submitted: true,
          submitting: false,
          error: true
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
    if (this.state.submitted) {
      if (this.state.error) {
        return <Typist cursor={{blink: true}} key="error">Oops, try agin<Typist.Backspace count={2} delay={100} />ain</Typist>
      } else {
        return <Typist cursor={{blink: true}} key="success">Thank you</Typist>
      }
    }

    return <Typist cursor={{blink: true}} key="form">Get in touch</Typist>
  }

  render () {
    return (
      <section>
        <div>
          <h2>{this.renderTitle()}</h2>
          <p>If you need help, get in touch with us so we can have a chat.</p>
          <form ref={n => (this.formNode = n)} onSubmit={e => {
            e.preventDefault()
            this.handleSubmit()
          }}>
            <input type="text" name="name" placeholder="Name" autoComplete="off" ref={n => (this.inputNameNode = n)} />
            <input type="text" name="email" placeholder="E-mail" autoComplete="off" ref={n => (this.inputEmailNode = n)} />
            <textarea name="message" rows="3" placeholder="Message" autoComplete="off" ref={n => (this.inputMessageNode = n)} />
            <button type="submit">Send</button>
          </form>
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
          padding: 0 0 100px;
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
          background: #3E46CF;
          border: 0;
          padding: 0;
          text-indent: 0;
          font-family: 'Overpass Mono', sans-serif;
          font-weight: 300;
          -webkit-appearance: none;
          -webkit-border-radius: 0px;
          font-size: 28px;
          resize: none;
          color: #ffc107;
          margin-bottom: 20px;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active  {
          -webkit-box-shadow: 0 0 0 100px #3E46CF inset !important;
          -webkit-text-fill-color: #ffc107 !important;
        }

        button[type="submit"] {
          background: #F7C244;
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
          color: #283193;
        }
      `}</style>
      </section>
    )
  }
}