import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Signature from './components/Signature'
import Menu from './components/Menu'
import OrderCTA from './components/OrderCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Signature />
        <Menu />
        <OrderCTA />
      </main>
      <Footer />
    </>
  )
}
