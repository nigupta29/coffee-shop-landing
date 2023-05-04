export default function Hero() {
  const imgURL =
    "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

  return (
    <section className='bg-orange-100/70'>
      <article className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-5 py-10 lg:flex-row'>
        <div className='flex flex-col space-y-10'>
          <hgroup className='flex flex-col space-y-3 text-5xl font-bold lg:text-6xl'>
            <h1>
              Enjoy your <span className='text-amber-500'>coffee</span>
            </h1>
            <h1>
              before your <span className='text-amber-500'>activity</span>
            </h1>
          </hgroup>
          <p className='max-w-md text-lg text-neutral-500 lg:text-xl '>
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </p>
          <div className='flex w-full justify-between lg:justify-start lg:gap-5'>
            <button className='rounded-full bg-amber-950 px-8 py-3 text-neutral-50 hover:bg-amber-800 hover:text-neutral-200'>
              Order Now
            </button>
            <button className='rounded-full border border-amber-500 px-8 py-3 text-amber-500 hover:bg-amber-500 hover:text-neutral-50'>
              More menu
            </button>
          </div>
        </div>
        <div className=''>
          <img
            src={imgURL}
            alt='Coffee hero'
            className='h-80 w-80 rounded-full object-cover drop-shadow-2xl lg:h-96 lg:w-96'
            loading='lazy'
          />
        </div>
      </article>
    </section>
  )
}
