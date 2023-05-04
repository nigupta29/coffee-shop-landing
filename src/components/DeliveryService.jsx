import { deliveryData } from "../data"
import Container from "./utils/Container"
import SectionHeading from "./utils/SectionHeading"

export default function DeliveryService() {
  return (
    <section className='bg-orange-100/70'>
      <Container>
        <SectionHeading text='How to use delivery service' />

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          {deliveryData.map(({ id, title, subtitle, image }) => (
            <div
              key={id}
              className='space flex flex-col items-center justify-start gap-y-6'
            >
              <img
                src={image}
                alt={title}
                className='h-36 w-36'
                loading='lazy'
              />
              <hgroup className='max-w-xs text-center'>
                <h3 className='mb-2 text-xl font-bold'>{title}</h3>
                <p className='text-lg text-neutral-700'>{subtitle}</p>
              </hgroup>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
