import { Header } from '../components/header'
import { InPageHeader } from '../components/inPageHeader'
import { Footer } from '../components/footer'

export default function Terms() {
  return (
    <>
      <Header>
        <title>sthlm.io – Villkor</title>
        <link rel="canonical" href="/terms/" />
      </Header>
      <section>
        <div className="content">
          <InPageHeader />
          <h2>Våra uppgifter</h2>
          <p className="text">
            Personuppgiftsansvarig för vår webbplats är Fredrik Lack AB,
            registrerat i Stockholm, organisationsnummer 559127-4302. För att
            kontakta den personuppgiftsansvarige, använd vårt kontaktformulär,
            e-post <a href="mailto:gdpr@sthlm.io">gdpr@sthlm.io</a> eller via
            telefon <a href="tel:+46733730941">+46 733 73 09 41</a>.
          </p>
          <h2>Dina personuppgifter</h2>
          <p className="text">
            Vi tar din integritet på allvar och använder endast dina
            personuppgifter för att besvara frågor och för att tillhandahålla de
            tjänster du efterfrågat. Dina personuppgifter används aldrig för
            marknadsföringsändamål och delas inte med tredje part för
            marknadsföring.
          </p>
          <h2>Insamlade uppgifter</h2>
          <h3>Kontaktformulär</h3>
          <p className="text">
            När du kontaktar oss via vårt kontaktformulär lämnar du frivilligt
            personuppgifter. Informationen du anger i formuläret krypteras,
            vilket du kan se via hänglåsikonen i webbläsarens adressfält, och
            behandlas på våra servrar innan den skickas till oss via e-post.
            Även om vi använder kryptering för säker överföring kan
            internetbaserade överföringar i princip ha säkerhetsbrister, vilket
            innebär att ett absolut skydd inte kan garanteras. Därför är du
            alltid välkommen att kontakta oss via alternativa kanaler, till
            exempel via telefon.
          </p>
          <h2>Tjänster vi använder</h2>
          <h3>Elastx AB</h3>
          <p className="text">
            Vi använder Elastx AB som vår primära hosting-leverantör och kör
            Kubernetes på OpenStack i Stockholm över tre tillgänglighetszoner
            (sto1, sto2 och sto3). Säkerhet är högsta prioritet, och vi tror
            starkt på att lagra data inom Sverige och att samarbeta med svenska
            hosting-leverantörer. Informationen du lämnar i kontaktformuläret
            lagras och behandlas säkert på våra servrar i Sverige.
          </p>
          <h3>Glesys AB</h3>
          <p className="text">
            Vi använder Glesys AB för att drifta våra e-postservrar i Stockholm.
          </p>
          <h2>Dina rättigheter</h2>
          <p className="text">
            Enligt dataskyddsförordningen (GDPR) har du flera rättigheter
            avseende de personuppgifter vi behandlar om dig, bland annat:
          </p>
          <ul>
            <li>
              Rätt till bekräftelse – du har rätt att få veta om vi behandlar
              personuppgifter som rör dig
            </li>
            <li>
              Rätt till tillgång – du har rätt att få tillgång till och få en
              kopia av de personuppgifter vi behandlar om dig
            </li>
            <li>
              Rätt till rättelse&nbsp;– du har rätt att få felaktiga uppgifter
              rättade
            </li>
            <li>
              Rätt till radering – du har rätt att få dina personuppgifter
              raderade
            </li>
          </ul>
          <p className="text">
            Om du vill utöva någon av dessa rättigheter, kontakta oss via
            kontaktformuläret, e-post{' '}
            <a href="mailto:gdpr@sthlm.io">gdpr@sthlm.io</a> eller via telefon{' '}
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
            margin-bottom: 80px;
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

          a {
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
            color: #3e46cf;
          }

          a,
          a:active,
          a:visited {
            font-weight: bold;
            color: #000;
          }
        `}</style>
      </section>
      <Footer />
    </>
  )
}
