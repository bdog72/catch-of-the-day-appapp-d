import React from 'react'

const Header = (props) => {
  return <div>
    <header className='top'>
      <h1>Catch of the Day</h1>
      {/* <span className='ofthe'>
          <span className='of'>of-</span>
          <span className='the'>the-</span>
        </span> */}
      <h3 className='tagline'>{props.tagline}</h3>
    </header>
  </div>
}
export default Header
