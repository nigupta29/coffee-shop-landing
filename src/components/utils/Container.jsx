import PropTypes from "prop-types"
function Container({ children }) {
  return <div className='mx-auto max-w-6xl px-5 py-14'>{children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
