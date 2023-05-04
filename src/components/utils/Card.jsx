import PropTypes from "prop-types"

function Card({ title, rating, image, price, desc, tags }) {
  return (
    <div className='rounded-xl border-2 bg-white p-4 shadow-xl'>
      <div className='relative mb-4  overflow-hidden rounded-xl'>
        <div className='absolute left-0 top-0'>
          <p className='m-2.5 rounded-full bg-amber-50/70 px-3 py-2 font-semibold text-neutral-700'>{`${rating} ⭐`}</p>
        </div>
        <img
          src={image}
          alt={title}
          className='h-72 w-full object-cover'
          loading='lazy'
        />
      </div>
      <div className='mb-4 flex items-center justify-between text-xl'>
        <h3 className='font-semibold'>{title}</h3>
        <h6 className='text-neutral-700'>{`$${price}`}</h6>
      </div>
      <p className='mb-4 text-justify text-sm text-neutral-800'>{desc}</p>
      <div className='flex flex-wrap gap-2'>
        {tags?.map((tag, id) => (
          <div
            key={`tag_${id}`}
            className='rounded-full border-2 border-amber-500 px-5 py-1 text-sm  text-amber-900'
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.array,
}

export default Card
