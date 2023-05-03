export default function Hero() {
  return (
    <section>
      <article className='container mx-auto'>
        <div className='flex flex-col space-y-6'>
          <hgroup className='flex flex-col space-y-3 text-4xl font-bold'>
            <h1>
              Enjoy your <span className='text-amber-500'>coffee</span>
            </h1>
            <h1>before your activity</h1>
          </hgroup>
          <p className='text-md text-neutral-500'>
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </p>
          <div>
            <button className='rounded-full bg-amber-950 px-8 py-3 text-neutral-50'>
              Order Now
            </button>
            <button className='rounded-full px-8 py-3 text-amber-500'>
              More menu
            </button>
          </div>
        </div>
        {/* <div>
        <img
          src='https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt=''
        />
      </div> */}
      </article>
    </section>
  )
}
