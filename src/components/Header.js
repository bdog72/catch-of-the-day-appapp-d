import React from 'react'

const Header = (props) => {
  return <div>
    <header className='top'>
      <h1>Catch of the Day</h1>
      <h3 className='tagline'>{props.tagline}</h3>
    </header>
  </div>
}

// Header.propTypes = {
//   tagline: React.PropTypes.string.isRequired
// }

export default Header
