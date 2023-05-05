import CafeStreetLogo from "../assets/img/cafe-street-logo.png"

export default function Navbar() {
  return (
    <header className='bg-orange-100/70'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between p-5 lg:justify-normal'>
        <div className='lg:w-1/3'>
          <img src={CafeStreetLogo} alt='' className='h-12 ' />
        </div>
        <ul className='hidden items-center justify-center gap-8 text-lg lg:flex lg:w-1/3'>
          <a href='' className='text-neutral-700 hover:text-amber-500'>
            About Us
          </a>
          <a href='' className='text-neutral-700 hover:text-amber-500'>
            Our Product
          </a>
          <a href='' className='text-neutral-700 hover:text-amber-500'>
            Delivery
          </a>
        </ul>
        <div className='flex items-center justify-end gap-5 text-end lg:w-1/3'>
          <div className='relative hidden md:block'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <i className='fa-solid fa-search text-xl text-neutral-800'></i>
            </div>
            <input
              type='text'
              id='simple-search'
              className='block w-full rounded-full bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 shadow-lg '
              placeholder='Search'
            />
          </div>

          <i className='fa-solid fa-mug-saucer text-2xl text-neutral-800'></i>
        </div>
      </nav>
    </header>
  )
}
