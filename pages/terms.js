import { Header } from '../components/header'
import { InPageHeader } from '../components/inPageHeader'

export default function Terms() {
  return (
    <>
      <Header>
        <title>sthlm.io - Terms</title>
        <link rel="canonical" href="/terms/" />
      </Header>
      <section>
        <div className="content">
          <InPageHeader />
          <h2>Our details</h2>
          <p className="text">
            The data controller in respect of our website is Fredrik Lack AB,
            registered in Stockholm, Sweden, company number 559127-4302. To
            contact the data controller, please use our contact form, e-mail{' '}
            <a href="mailto:fredrik@sthlm.io">fredrik@sthlm.io</a> or by phone{' '}
            <a href="tel:+46733730941">+46 733 73 09 41</a>.
          </p>
          <h2>Your personal data</h2>
          <p className="text">
            We take your privacy seriously and will only use your personal
            information to respond to any questions you may have and to provide
            the products and services you have requested from us. Your personal
            information will never be used by us or shared with third parties
            for marketing purposes.
          </p>
          <h2>Data collected</h2>
          <h3>Contact form</h3>
          <p className="text">
            When you contact us using our contact form, you will be voluntarily
            providing us with your personal information. The information you
            enter in the contact form is encrypted, as you can see from the
            padlock icon in the address bar of your browser, and is processed on
            our servers before being sent to us by email. While we have
            implemented encryption to ensure secure transmission of your
            personal information, Internet-based data transmissions may in
            principle have security gaps, so absolute protection may not be
            guaranteed. For this reason, you are always welcome to contact us
            via alternative means, such as by telephone.
          </p>
          <h2>Services used</h2>
          <h3>Elastx AB</h3>
          <p className="text">
            We use Elastx AB as our primary hosting provider, running Kubernetes
            on servers in STO (Stockholm, Sweden) over three availability zones
            (sto1, sto2 and sto3). Security is our top priority, and we firmly
            believe in storing data within Sweden and partnering with Swedish
            hosting providers. The information provided in the contact form is
            securely stored and processed on our servers in Sweden.
          </p>
          <h3>Glesys AB</h3>
          <p className="text">
            We use Glesys AB to host our mail servers in STO (Stockholm,
            Sweden).
          </p>
          <h2>Your rights</h2>
          <p className="text">
            In accordance with European law under the General Data Protection
            Regulation (GDPR), you have numerous rights in regards to the
            personal data we hold about you, including:
          </p>
          <ul>
            <li>
              Right to confirmation – you have the right to know if we hold
              personal data that concerns you
            </li>
            <li>
              Right to access – you have the right to view and to obtain a copy
              of any personal data we hold that concerns you
            </li>
            <li>
              Right to rectification&nbsp;– you have the right to the correction
              of any inaccuracies within the personal data we hold that concerns
              you
            </li>
            <li>
              Right to erasure – you have the right to have your personal data
              removed from our systems
            </li>
          </ul>
          <p className="text">
            Should you wish to exercise any of these rights, please contact us
            using the contact form, e-mail{' '}
            <a href="mailto:fredrik@sthlm.io">fredrik@sthlm.io</a> or by phone{' '}
            <a href="tel:+46733730941">+46 733 73 09 41</a>.
          </p>
        </div>
        {/*language=SCSS*/}
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
          }

          .content div {
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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
        `}</style>
      </section>
    </>
  )
}
