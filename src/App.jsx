import DeliveryService from "./components/DeliveryService"
import Hero from "./components/Hero"
import PopularNow from "./components/PopularNow"

export default function App() {
  return (
    <>
      <Hero />
      <PopularNow />
      <DeliveryService />
      <div className='min-h-screen'></div>
    </>
  )
}
