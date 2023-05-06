import { testimonials } from "../data"
import Container from "./utils/Container"
import SectionHeading from "./utils/SectionHeading"

const Testimonial = ({ testimonial }) => {
  return (
    <div className='rounded-lg bg-white p-6 shadow-lg'>
      <div className='mb-4 flex items-center'>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className='mr-4 rounded-full'
          width='50'
          height='50'
        />
        <div>
          <h3 className='text-lg font-bold'>{testimonial.name}</h3>
          <p className='text-gray-600'>{testimonial.occupation}</p>
        </div>
      </div>
      <p className='text-gray-800'>{testimonial.quote}</p>
    </div>
  )
}

const TestimonialGrid = () => {
  return (
    <section className=' bg-orange-100/70 bg-[url("./beans3.png")] bg-scroll bg-bottom bg-no-repeat md:bg-contain'>
      <Container>
        <SectionHeading text={"See what everyone is talking about us!"} />
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TestimonialGrid
