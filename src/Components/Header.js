import PropTypes from 'prop-types'

import Button from "./Button"
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
export default Header