import React from 'react'

const Header = (props) => {
  return <div>
    <header className='top'>
      <h1>
        Catch-
        <span className='ofthe'>
          <span className='of'>of-</span>
          <span className='the'>the-</span>
        </span>
        Day</h1>
      <h3 className='tagline'>{props.tagline}</h3>
    </header>
  </div>
}
export default Header
