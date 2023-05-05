import CafeStreetLogo from "../assets/img/cafe-street-logo.png"
import Container from "./utils/Container"

export default function Footer() {
  return (
    <footer className='bg-orange-100/70 text-neutral-950'>
      <Container>
        <div className='flex flex-wrap justify-between'>
          <div className='mb-4 w-full lg:mb-0 lg:w-1/4'>
            <img src={CafeStreetLogo} alt='' className='mb-4 h-16' />
            <p className='text-sm tracking-tight'>
              We&rsquo;re passionate about coffee and providing our customers
              with the best possible experience.
            </p>
          </div>

          <div className='mb-4 w-full lg:mb-0 lg:w-1/4'>
            <h3 className='mb-4 text-lg font-medium text-neutral-500'>
              Contact Us
            </h3>
            <p className='text-sm'>123 Coffee St.</p>
            <p className='text-sm'>Seattle, WA 98101</p>
            <p className='text-sm'>Phone: +(123) 456-7890</p>
          </div>
          <div className='mb-4 w-full lg:mb-0 lg:w-1/4'>
            <h3 className='mb-4 text-lg font-medium text-neutral-500'>
              Follow Us
            </h3>
            <div className='mb-4 flex gap-5 text-2xl'>
              <a href=''>
                <i className='fa-brands fa-facebook-f'></i>
              </a>
              <a href=''>
                <i className='fa-brands fa-twitter'></i>
              </a>
              <a href=''>
                <i className='fa-brands fa-instagram'></i>
              </a>
            </div>
            <p className='text-sm'>
              Code by{" "}
              <a
                href='https://github.com/nigupta29'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold underline decoration-amber-500'
              >
                Nikhil Gupta
              </a>
            </p>
            <p className='text-sm'>
              Design by{" "}
              <a
                href='https://www.figma.com/community/file/1138256358581554095/Cafe-Street---E-Commerce-Landing-Page'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold underline decoration-amber-500'
              >
                Rauliqbal
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
