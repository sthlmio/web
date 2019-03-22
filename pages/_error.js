import React from 'react'
import { Header } from '../components/header'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    let description = ''

    if (this.props.statusCode === 404) {
      description = 'HTTP 404 Not found'
    }

    if (this.props.statusCode === 500) {
      description = 'HTTP 500 Internal server error'
    }

    return (
      <>
        <Header title={`sthlm.io -  ${this.props.statusCode}`}/>
        <section>
          <div className="content">
            <a href="/">
              <img src={require('../static/logo_small.svg')} width="150"/>
            </a>
            <div>
              <h1>{this.props.statusCode}</h1>
              {description ? <p>{description}</p> : ''}
            </div>
          </div>
          { /*language=SCSS*/}
          <style jsx>{`
          section {
            width: 100%;
            padding: 0;
            background: #fff;
            z-index: 0;
            position: relative;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          .content {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            width: 1024px;
            max-width: calc(100% - 40px);
            padding: 20px;
            height: calc(100vh - 40px);
          }

          .content div {
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          a {
            position: absolute;
          }

          h1 {
            font-size: 120px;
            margin: 0;
          }

          @media screen and (min-width: 500px) {
            h1 {
              font-size: 200px;
            }
          }

          p {
            margin-top: 0;
            width: auto;
          }

          @media screen and (min-width: 500px) {
            p {
              margin-top: -30px;
            }
          }
        `}</style>
        </section>
      </>
    )
  }
}

export default Error