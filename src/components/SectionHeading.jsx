import PropTypes from "prop-types"
function SectionHeading({ text }) {
  text = text.trim()
  const lastIndex = text.lastIndexOf(" ")
  const lastWord = text.substring(lastIndex + 1, text.length)
  text = text.substring(0, lastIndex)

  return (
    <h3 className='mb-10 text-2xl font-bold lg:text-3xl'>
      {text} <span className='underline decoration-amber-500'>{lastWord}</span>
    </h3>
  )
}

SectionHeading.propTypes = {
  text: PropTypes.string.isRequired,
}

export default SectionHeading
