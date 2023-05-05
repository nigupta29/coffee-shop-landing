import { aboutUsData } from "../data"
import Button from "./utils/Button"
import Container from "./utils/Container"
import SectionHeading from "./utils/SectionHeading"

export default function AboutUs() {
  const { btnText, image, desc, subtitle, title } = aboutUsData

  return (
    <section className='bg-[url("./beans.png")] bg-contain bg-center lg:mt-64 lg:bg-orange-100/70'>
      <Container>
        <div className={`flex flex-col justify-center gap-5 lg:flex-row `}>
          <div className='relative lg:w-1/2'>
            <img
              src={image}
              alt='Different Coffees'
              className='mx-auto h-96 w-full rounded-xl border-8 border-white/50 object-cover lg:absolute lg:-top-52 lg:left-1/4 lg:h-[500px] lg:w-auto'
              loading='lazy'
            />
          </div>
          <div className='flex-1 space-y-6'>
            <SectionHeading text={title} spacingOff={true} />
            <h6 className='text-lg text-neutral-700'>{subtitle}</h6>
            <p className='text-md max-w-lg text-neutral-600'>{desc}</p>
            <Button text={btnText} />
          </div>
        </div>
      </Container>
    </section>
  )
}
