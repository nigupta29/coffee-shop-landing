import { specialMenuProducts } from "../data"
import Card from "./utils/Card"
import Container from "./utils/Container"
import SectionHeading from "./utils/SectionHeading"

export default function SpecialMenu() {
  return (
    <section>
      <Container>
        <SectionHeading text={"Special Menu For You"} />
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {specialMenuProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
