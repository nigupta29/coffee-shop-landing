import PropTypes from "prop-types"

function Button({ text, isDark }) {
  const buttonStyle = isDark
    ? "bg-amber-950  text-neutral-50 hover:bg-amber-800 hover:text-neutral-200"
    : "border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-neutral-50"

  return (
    <button className={`rounded-full px-8 py-3 ${buttonStyle}`}>{text}</button>
  )
}

Button.defaultProps = {
  isDark: true,
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
}

export default Button
