import Card from "../components/utils/Card"
import { products } from "../data"
import Container from "./utils/Container"
import SectionHeading from "./utils/SectionHeading"

export default function PopularNow() {
  return (
    <section>
      <Container>
        <SectionHeading text={"Popular Now"} />
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
