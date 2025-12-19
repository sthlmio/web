import { Jumbo } from '../components/jumbo'
import { Header } from '../components/header'
import { About } from '../components/about'
import { Contact } from '../components/contact'
import { Clients } from '../components/clients'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <>
      <Header>
        <title>sthlm.io – Infrastruktur för den nya vardagen</title>
        <link rel="canonical" href="https://sthlm.io" />
      </Header>
      <Jumbo />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}
