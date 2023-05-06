import AboutUs from "./components/AboutUs"
import DeliveryService from "./components/DeliveryService"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import PopularNow from "./components/PopularNow"
import SpecialMenu from "./components/SpecialMenu"
import TestimonialGrid from "./components/Testimonials"

export default function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <PopularNow />
      <DeliveryService />
      <AboutUs />
      <SpecialMenu />
      <TestimonialGrid />
      <Newsletter />
      <Footer />
    </div>
  )
}
