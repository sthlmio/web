import { Jumbo } from '../components/jumbo'
import { Header } from '../components/header'
import { About } from '../components/about'
import { Contact } from '../components/contact'
import { Clients } from '../components/clients'
import { Team } from '../components/team'

export default function Home() {
  return (
    <>
      <Header/>
      <Jumbo/>
      <About/>
      <Clients/>
      <Team/>
      <Contact/>
    </>
  )
}