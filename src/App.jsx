import AboutUs from "./components/AboutUs"
import DeliveryService from "./components/DeliveryService"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Newsletter from "./components/Newsletter"
import PopularNow from "./components/PopularNow"
import SpecialMenu from "./components/SpecialMenu"

export default function App() {
  return (
    <>
      <Hero />
      <PopularNow />
      <DeliveryService />
      <AboutUs />
      <SpecialMenu />
      <Newsletter />
      <Footer />
    </>
  )
}
