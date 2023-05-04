import { products } from "../data"

export default function PopularNow() {
  return (
    <section>
      <article className='mx-auto max-w-6xl px-5 py-10'>
        <h3 className='mb-10 text-2xl font-bold lg:text-3xl'>
          Popular <span className='underline decoration-amber-500'>Now</span>
        </h3>

        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {products.map(({ id, title, price, rating, tags, image, desc }) => (
            <div
              key={id}
              className='rounded-xl border-2 bg-white p-4 shadow-xl'
            >
              <div className='relative mb-4 overflow-hidden rounded-xl'>
                <div className='absolute left-0 top-0'>
                  <p className='text-neutral-00 m-2.5 rounded-full bg-amber-50/70 px-3 py-2'>{`${rating} ⭐`}</p>
                </div>
                <img src={image} alt={title} />
              </div>
              <div className='mb-4 flex items-center justify-between text-xl'>
                <h3 className='font-semibold'>{title}</h3>
                <h6 className='text-neutral-700'>{`$${price}`}</h6>
              </div>
              <p className='mb-4 text-justify text-sm text-neutral-800'>
                {desc}
              </p>
              <div className='flex flex-wrap gap-2'>
                {tags.map((tag, id) => (
                  <div
                    key={`tag_${id}`}
                    className='rounded-full border-2 border-amber-500 px-5 py-1 text-sm text-amber-900'
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
