import PropTypes from "prop-types"

function SectionHeading({ text, spacingOff }) {
  text = text.trim()
  const lastIndex = text.lastIndexOf(" ")
  const lastWord = text.substring(lastIndex + 1, text.length)
  text = text.substring(0, lastIndex)

  const spaceStyle = spacingOff ? "m-0" : "mb-10"

  return (
    <h3 className={`${spaceStyle} text-2xl font-bold lg:text-3xl`}>
      {text} <span className='underline decoration-amber-500'>{lastWord}</span>
    </h3>
  )
}

SectionHeading.defaultProps = {
  spacingOff: false,
}

SectionHeading.propTypes = {
  text: PropTypes.string.isRequired,
  spacingOff: PropTypes.bool,
}

export default SectionHeading
